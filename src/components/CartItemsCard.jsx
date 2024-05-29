import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
const CartItemsCard = ({item}) => {
  const [quantity, setQuantity] = useState(item.quantity=1);
  const {cartItems} = useContext(CartContext)
  const handleProductQuantity=(n)=>{
    if(n<1) return;
    item.quantity=n;
    setQuantity(n);
    
  }
  return (
    <div className="cart-item-card flex items-center justify-center flex-wrap flex-col">
      
        <img src={item.img.url}></img>
        <div className="flex flex-col"><p>
          <b>{item.name}</b>
        </p>
        <p>&#8377; {item.price}</p>
        </div>
        <div className="quantity-input-container flex items-center">
        <div className="decrement flex item-center" onClick={()=>handleProductQuantity(quantity-1)}>-</div>
          <input type="text" value={quantity} disabled></input>
          <div className="increment" onClick={()=>handleProductQuantity(quantity+1)}>+</div>
        </div>
        <div className="material-symbols-rounded">delete</div>
        
      
    </div>
  );
};

export default CartItemsCard;
