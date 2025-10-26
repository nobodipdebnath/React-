import React from 'react'

function Blog({blog}) {
    const {id, userId, title} = blog;
    const divStyle = {
        border: '2px solid green',
        margin: '20px',
        padding: '20px',
        borderRadius: '12px'
    }
  return (
    <div style={divStyle}>
        <p>Id : {id} </p>
        <p>User id : {userId} </p>
        <p>Title : {title} </p>
    </div>
  )
}

export default Blog