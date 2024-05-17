import React from 'react'
import './../styles/Product.css'
const ProductsConatiner = () => {
  return (
    <div id='product-section' className=''>
      <h2>Featured products</h2>
      <div className='products-container flex justify-center'>
        <div className='product-card'>
          <img></img>
          <h4>Product1</h4>
        </div>
        <div className='product-card'>
        <img></img>
          <h4>Product1</h4>
        </div>
        <div className='product-card'>
        <img></img>
          <h4>Product1</h4>
        </div>

      </div>
    </div>
  )
}

export default ProductsConatiner