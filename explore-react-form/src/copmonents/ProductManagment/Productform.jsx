import React, { useState } from 'react'

export const Productform = ({handelAddProduct}) => {

    const [error, setError] = useState('');
    const handelProductSubmit = e =>{
        e.preventDefault()  
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // console.log(name, price, quantity)
        // validation
        if(name.length === 0){
            setError('Please Provide a Products name ,,,')
            return
        } else if(price.length ===0){
            setError('Please Provide a Product Price')
            return
        } else if (price < 0){
            setError('Price Can not be negative');
            return
        } else{
            setError('');
        }

        const newProduct = {
            name, 
            price,
            quantity,
        }
        // console.log(newProduct);

         handelAddProduct(newProduct);

    }
  return (
    <div>
        <form onSubmit={handelProductSubmit}>
            <input type="text" name="name" placeholder='Product name' />
            <br />
            <input type="text" name="price" placeholder='Product Price' />
            <br />
            <input type="text" name="quantity" placeholder='Product Quantity' />
            <br />
            <input type="submit" value="Submit" />
        </form>
        <p style={{color: 'red'}}><small>{error}</small></p>
    </div>
  )
}
