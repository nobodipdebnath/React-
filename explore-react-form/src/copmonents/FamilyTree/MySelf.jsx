import React from 'react'
import { Special } from './Special'

export const MySelf = ({asset}) => {
  return (
    <div>
        <h3>My Self</h3>
        <section>
            <Special name='Kolpona' asset={asset}></Special>
        </section>
    </div>
  )
}
