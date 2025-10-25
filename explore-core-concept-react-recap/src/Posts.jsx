import React from 'react'
import './Post.css'

function Posts({post}) {
    const {title, body, id, userId} = post;
  return (
    <div className='post'>
        <h5>Title: {title}</h5>
        <p><small>User id : {userId}</small></p>
        <p><small>Post id : {id} </small></p>
        <p>{body}</p>
    </div>
  )
}

export default Posts