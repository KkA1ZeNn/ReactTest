import './App.css'
import { useState, useMemo } from 'react'
import type { PostProp } from './components/Post.component/Post'
import Postlist from './components/PostList.component/PostList'
import CreatePostListForm from './components/CreatePostList.component/CreatePostListForm'
import PostListControl from './components/PostListControl.component/PostListControl'

type SortType = 'title' | 'text' | ''

const App = () => {
  const [selectedSort, setSelectedSort] = useState<SortType>('')
  const [searchQuery, setSearchQuery] = useState('')

  const [posts, setPosts] = useState<PostProp[]>([
    {
      arrIndex: 0,
      id: 1,
      title: 'Заголовок поста',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto expedita, dicta corrupti aperiam consequatur similique doloremque soluta nemo fuga sint rem, voluptatum magni eum modi, eos a minima iusto distinctio?'
    }
  ])

  const deletePost = (deletedPost: PostProp) => {
    setPosts(posts.filter(post => post.id !== deletedPost.id))
  }

  const sortPosts = (sort: 'title' | 'text') => {
    setSelectedSort(sort)
  }

  const filteredAndSortedPosts = useMemo(() => {
   console.log("отработал")
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
         <Postlist posts={filteredAndSortedPosts} deletePost={deletePost} />       
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
    </div>
  )
}

export default App
