import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from './ProductContext'

import './../styles/Product.css'

const ProductsConatiner = () => {
const {products} = useContext(ProductContext);
  return (
    <div id='product-section' className=''>
      <h2>Featured products</h2>
      <div className='products-container flex justify-center'>
      {
        products.map((item)=><ProductCard item={item} key={item.name} />)
      }
      </div>
      <div>Explore More</div>
    </div>
  )
}

export default React.memo(ProductsConatiner);