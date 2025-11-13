import React from 'react'

export const Link = ({route}) => {
    const {path, name} = route;
  return (
    <li className='mr-10 hover:bg-yellow-500 rounded-xl px-6 p-4'>
        <a href={path}>{name}</a>
    </li>
  )
}
