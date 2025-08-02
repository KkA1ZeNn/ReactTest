import React from 'react'
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
  return (
    <li className='post'>
        <div className='post__content'>
            <h2 className='post__title'>{post.arrIndex}. {post.title}</h2>
            <p className='post__text'>{post.text}</p>
        </div>
        <div className='post__buttons'>
            <button className='post__button' onClick={() => deletePost(post)}>Удалить</button>
        </div>
    </li>
  )
}

export default Post