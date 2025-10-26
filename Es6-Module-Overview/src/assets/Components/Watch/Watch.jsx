import React from 'react'
import './Watch.css'
export const Watch = ({watch}) => {
    const {name, price} = watch;
  return (
    <div>
        <h2>Watches : {name}</h2>
        <p>Price : {price}</p>
    </div>
  )
}
