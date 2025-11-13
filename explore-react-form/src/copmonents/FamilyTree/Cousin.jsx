import React from 'react'
import { Special } from './Special'
import { Friend } from './Friend'

export const Cousin = ({name, asset}) => {
  return (
    <div>
        <h3>{name}</h3>
        {
            name === 'Ronjon' && <Special asset={asset}  name='Parul'></Special>
        }
        {
            name === 'Jui Rani' && <Friend ></Friend>
        }
    </div>
  )
}
