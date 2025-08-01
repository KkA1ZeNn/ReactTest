import Postlist from './components/PostList.component/PostList'
import './App.css'
import CreatePostListForm from './components/CreatePostList.component/CreatePostListForm'
import type { PostProp } from './components/Post.component/Post'
import { useState } from 'react'

const App = () => {

  const [posts, setPosts] = useState<PostProp[]>([
    {
      id: 1,
      title: 'Заголовок поста',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto expedita, dicta corrupti aperiam consequatur similique doloremque soluta nemo fuga sint rem, voluptatum magni eum modi, eos a minima iusto distinctio?'
    }
  ])

  return (
    <div className='app-container'>
      <div className='left-side'>
        <Postlist posts={posts} />        
      </div>
      <div className='right-side'>
        <CreatePostListForm setPosts={setPosts} posts={posts} />
      </div>
    </div>
  )
}

export default App
