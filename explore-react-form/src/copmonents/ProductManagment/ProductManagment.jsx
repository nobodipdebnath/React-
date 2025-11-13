import React, { useState } from 'react'
import { Productform } from './Productform'
import { ProductTable } from './ProductTable'

export const ProductManagment = () => {

  const [products, setProducts] = useState([]);

  const handelAddProduct = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  }
  return (
    <div>
        <Productform handelAddProduct={handelAddProduct}></Productform>
        <ProductTable products={products}></ProductTable>
    </div>
  )
}
