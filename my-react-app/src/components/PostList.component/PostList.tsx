import Post, { type PostProp } from '../Post.component/Post'
import './PostList.css'

const Postlist = ({posts}: {posts: PostProp[]}) => {

  return (
    <>
      <h1 className='postlist__title'>Список постов</h1>
      <ul className='postlist'>
          {posts.map(post => 
            <Post {...post} key={post.id} />
          )}
      </ul>
    </>
  )
}

export default Postlist