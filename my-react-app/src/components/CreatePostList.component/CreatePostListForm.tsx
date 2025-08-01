import React, { useState } from 'react'
import './CreatePostListForm.css'
import type { PostProp } from '../Post.component/Post'

interface CreatePostListFormProps {
  setPosts: React.Dispatch<React.SetStateAction<PostProp[]>>
  posts: PostProp[]
}

const CreatePostListForm = ({setPosts, posts}: CreatePostListFormProps) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const isFormValid = title.trim() !== '' && text.trim() !== ''

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newPost:PostProp = {
      id: Date.now(),
      title,
      text
    }

    console.log('Создание поста:', newPost)
    setPosts([...posts, newPost])

    setTitle('')
    setText('')
  }

  return (
    <>
        <h1 className='create-post-list-form__title'>Создать пост</h1>
        <form className='create-post-list-form' onSubmit={handleSubmit}>
            <input 
              className='create-post-list-form__input' 
              type='text' 
              placeholder='Заголовок'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
              className='create-post-list-form__textarea' 
              placeholder='Текст'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button 
              className='create-post-list-form__button' 
              type='submit'
              disabled={!isFormValid}
            >
              Создать
            </button>
        </form>
    </>
  )
}

export default CreatePostListForm