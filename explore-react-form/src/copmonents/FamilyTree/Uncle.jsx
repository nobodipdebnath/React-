import React from 'react'
import { Cousin } from './Cousin'

export const Uncle = () => {
  return (
    <div>
        <h3>Uncle</h3>
        <section className='flex'>
            <Cousin name='Srabon'></Cousin>
            <Cousin name='Srabonti'></Cousin>
        </section>
    </div>
 )
}
