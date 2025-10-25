import React from 'react'
import './Book.css'
function Book({book}) {
    const {id, name, price} = book;
  return (
    <div className='book'>
        <h3>Id :{id} </h3>
        <h3>Book Name :{name}</h3>
        <h3>Price: {price}</h3>
    </div>
  )
}

export default Book