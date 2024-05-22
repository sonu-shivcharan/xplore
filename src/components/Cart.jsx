import React from 'react'
import CartItemsCard from './CartItemsCard';
import '../styles/Cart.css'
const Cart = ({cartItems}) => {
  console.log(cartItems);
  return (
    <div id='cart-section' className='flex flex-col'>
      <div>
        <h3>Cart Items</h3>
        <div className="items-container">
          {
            cartItems.map((item)=><CartItemsCard item={item}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Cart