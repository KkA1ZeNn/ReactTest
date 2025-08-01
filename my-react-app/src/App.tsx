import Postlist from './components/PostList.component/PostList'
import './App.css'
import CreatePostListForm from './components/CreatePostList.component/CreatePostListForm'

const App = () => {
  return (
    <div className='app-container'>
      <div className='left-side'>
        <Postlist posts={[
            {
              id: 1,
              title: 'Заголовок поста',
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto expedita, dicta corrupti aperiam consequatur similique doloremque soluta nemo fuga sint rem, voluptatum magni eum modi, eos a minima iusto distinctio?'
            }
          ]} />        
      </div>
      <div className='right-side'>
        <CreatePostListForm />
      </div>
    </div>
  )
}

export default App
