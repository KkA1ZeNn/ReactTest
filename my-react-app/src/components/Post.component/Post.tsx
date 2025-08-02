import React, { useState } from 'react'
import './Post.css'

export interface PostProp {
   arrIndex: number;
   id: number;
   title: string;
   text: string;
}

interface PostProps {
  post: PostProp;
  deletePost: (post: PostProp) => void;
}

const Post: React.FC<PostProps> = ({ post, deletePost }) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      deletePost(post)
    }, 300) // Время анимации
  }

  return (
    <li className={`post ${isDeleting ? 'post--deleting' : ''}`}>
        <div className='post__content'>
            <h2 className='post__title'>{post.arrIndex}. {post.title}</h2>
            <p className='post__text'>{post.text}</p>
        </div>
        <div className='post__buttons'>
            <button 
              className='post__button' 
              onClick={handleDelete}
              disabled={isDeleting}
            >
              Удалить
            </button>
        </div>
    </li>
  )
}

export default Post