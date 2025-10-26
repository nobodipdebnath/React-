import React from 'react'

function Data({data}) {
    const {id, title, userId} = data;
  return (
    <div style={{border: '2px solid tomato', padding: '20px', margin: '20px', borderRadius: '12px', background: 'green'}}>
        <p>Id: {id}</p>
        <p>Title: {title}</p>
        <p>User Id: {userId}</p>
    </div>
  )
}

export default Data