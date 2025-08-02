import React, { useState } from 'react'
import './CreatePostListForm.css'
import type { PostProp } from '../Post.component/Post'

interface CreatePostListFormProps {
  setPosts: React.Dispatch<React.SetStateAction<PostProp[]>>
  posts: PostProp[]
}

const initialPost: PostProp = {
  arrIndex: 0,
  id: 0,
  title: '',
  text: ''
}

const CreatePostListForm = ({setPosts, posts}: CreatePostListFormProps) => {
  const [post, setPost] = useState<PostProp>(initialPost)

  const isFormValid = post.title.trim() !== '' && post.text.trim() !== ''

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Создание поста:', post)

    setPosts([...posts, {...post, arrIndex: posts.length + 1, id: Date.now()}])
    setPost(initialPost)
  }

  return (
    <div className='create-post-list-form__wrapper'>
        <h1 className='create-post-list-form__title'>Создать пост</h1>
        <form className='create-post-list-form' onSubmit={handleSubmit}>
            <input 
              className='create-post-list-form__input' 
              type='text' 
              placeholder='Заголовок'
              value={post.title}
              onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <textarea 
              className='create-post-list-form__textarea' 
              placeholder='Текст'
              value={post.text}
              onChange={(e) => setPost({...post, text: e.target.value})}
            />
            <button 
              className='create-post-list-form__button' 
              type='submit'
              disabled={!isFormValid}
            >
              Создать
            </button>
        </form>
    </div>
  )
}

export default CreatePostListForm