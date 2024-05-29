import React, { useContext, useState } from "react";
import CartItemsCard from "./CartItemsCard";
import "../styles/Cart.css";
import { CartContext } from "./CartContext";
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  let total =0;
  return (
    <div id="cart-section" className="flex flex-col">
      <div className="flex flex-col">
        <h3>Cart Items</h3>
        <div className="items-container flex flex-wrap justify-center">
          {cartItems.map((item) => (
            <CartItemsCard item={item} key={item.name + item.id} />
          ))}
        </div>
      </div>
      <div className="subtotal-container">
        <h3>Subtotal</h3>
        <div>
          {
          cartItems.map((item) => {
            total+=item.price;
            return (<div key={item.id} className="flex justify-space-between">
              <div>
                <b>{item.name}</b>
              </div>
              <div>
                {item.price}x{item.quantity}={item.price * item.quantity}
              </div>
            </div>)
})}
        </div>
        <div style={{textAlign:"right"}}><b>Total = {total}</b></div>
        <div style={{width:"200px",margin:"1rem auto", backgroundColor:"#000", color:"#fff",borderRadius:"5px", textAlign:"center"}}>Proceed to checkout</div>
      </div>
    </div>
  );
};

export default Cart;
