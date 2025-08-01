import React from 'react'
import './Post.css'

export interface PostProp {
  id: number;
  title: string;
  text: string;
}

const Post = (post: PostProp) => {
  return (
    <li className='post'>
        <div className='post__content'>
            <h2 className='post__title'>{post.title}</h2>
            <p className='post__text'>{post.text}</p>
        </div>
        <div className='post__buttons'>
            <button className='post__button'>Удалить</button>
        </div>
    </li>
  )
}

export default Post