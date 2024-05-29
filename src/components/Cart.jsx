import React, { useContext } from 'react'
import CartItemsCard from './CartItemsCard';
import '../styles/Cart.css'
import { CartContext } from './CartContext';
const Cart = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <div id='cart-section' className='flex flex-col'>
      <div>
        <h3>Cart Items</h3>
        <div className="items-container flex flex-wrap justify-center">
          {
            cartItems.map((item)=><CartItemsCard item={item} key={item.name+item.id} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Cart