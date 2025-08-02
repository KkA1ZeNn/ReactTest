import Post, { type PostProp } from '../Post.component/Post'
import './PostList.css'

interface PostListProps {
  posts: PostProp[];
  deletePost: (post: PostProp) => void;
}

const Postlist: React.FC<PostListProps> = ({ posts, deletePost }) => {

  return (
    <>
      {posts.length === 0 
         ? <h1 className='postlist__title'>Посты не найдены</h1>
         : <h1 className='postlist__title'>Список постов</h1>
      }
      <ul className='postlist'>
          {posts.map((post: PostProp, index: number) => 
            <Post post={{...post, arrIndex: index + 1}} key={post.id} deletePost={deletePost} />
          )}
      </ul>
    </>
  )
}

export default Postlist