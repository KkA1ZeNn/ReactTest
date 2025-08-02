import './App.css'
import { useState, useMemo, useEffect } from 'react'
import type { PostProp } from './components/Post.component/Post'
import Postlist from './components/PostList.component/PostList'
import CreatePostListForm from './components/CreatePostList.component/CreatePostListForm'
import PostListControl from './components/PostListControl.component/PostListControl'
import Pagination from './components/Pagination.component/Pagination'
import axios from 'axios'

type SortType = 'title' | 'text' | ''

interface ServerPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [selectedSort, setSelectedSort] = useState<SortType>('')
  const [searchQuery, setSearchQuery] = useState('')
  const [posts, setPosts] = useState<PostProp[]>([])
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  useEffect(() => {
      fetchPosts(limit, page);
  }, [limit, page])

  const transformServerData = (serverPosts: ServerPost[]): PostProp[] => {
    return serverPosts.map((serverPost, index) => ({
      arrIndex: index + 1,
      id: serverPost.id,
      title: serverPost.title,
      text: serverPost.body 
    }))
  }

  async function fetchPosts(limit:number, page: number) {
    try {
      setIsPostLoading(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
         params: {
            _limit: limit,
            _page: page
         }
      });
      const transformedPosts = transformServerData(response.data);
      setPosts(transformedPosts)
      setTotalPages(Math.ceil(response.headers['x-total-count'] / limit))
      setIsPostLoading(false)
    } catch (error) {
      console.error('Ошибка при загрузке постов:', error)
      setIsPostLoading(false)
    }
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const deletePost = (deletedPost: PostProp) => {
    setPosts(posts.filter(post => post.id !== deletedPost.id))
  }

  const sortPosts = (sort: SortType) => {
    setSelectedSort(sort)
  }

  const filteredAndSortedPosts = useMemo(() => {
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.text.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (!selectedSort) return filtered

    return [...filtered].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
  }, [posts, searchQuery, selectedSort])

  return (
    <div className='app-container'>
      <div className='left-side'>
         {isPostLoading
            ? <div className='loading'>⏳</div>
            : <Postlist posts={filteredAndSortedPosts} deletePost={deletePost} />    
         }   
      </div>
      <div className='right-side'>
        <CreatePostListForm setPosts={setPosts} posts={posts} />
        <PostListControl 
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка" 
            options={[
               {value: 'title', name: 'По названию'},
               {value: 'text', name: 'По описанию'}
            ]}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
        />
      </div>
      {totalPages > 1 && (
        <Pagination 
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default App
