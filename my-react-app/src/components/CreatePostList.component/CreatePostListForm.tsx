import React from 'react'
import './CreatePostListForm.css'

const CreatePostListForm = () => {
  return (
    <>
        <h1 className='create-post-list-form__title'>Создать пост</h1>
        <form className='create-post-list-form'>
            <input className='create-post-list-form__input' type='text' placeholder='Заголовок' />
            <textarea className='create-post-list-form__textarea' placeholder='Текст' />
            <button className='create-post-list-form__button' type='submit'>Создать</button>
        </form>
    </>
  )
}

export default CreatePostListForm