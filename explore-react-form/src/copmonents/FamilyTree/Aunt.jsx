import React, { use } from 'react'
import { Cousin } from './Cousin'
import { MoneyContext } from './FamilyTree'

export const Aunt = ({asset}) => {
    const [money, setMoney] = use(MoneyContext);
    const handelAddMoney = () => {
        setMoney(money + 5000);
    }
  return (
    <div>
        <h3>Aunt</h3>
        <section className='flex'>
            <Cousin asset = {asset} name='Ronjon'></Cousin>
            <Cousin name='Jui Rani'></Cousin>
            
        </section>
        <button onClick={handelAddMoney}>Add 5000 taka</button>
    </div>
  )
}
