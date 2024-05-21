import React, { useEffect } from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
    <div className='img' style={{backgroundImage:`url(${item.img.url})`}}></div>
    <div className='flex-perfect-center'>
    <div className='flex justify-center'>
    <h4>{item.name}</h4>
    <p>{item.price}</p>
    </div>
    <div>
    <span className="material-symbols-rounded menu-icon" >
more_horiz
</span>
    </div>
    </div>
  </div>
  )
}

export default React.memo(ProductCard);