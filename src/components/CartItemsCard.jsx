import React from "react";

const CartItemsCard = ({item}) => {
  return (
    <div className="cart-item-card flex items-center justify-center flex-wrap flex-col">
      
        <img src={item.img.url}></img>
        <div className="flex flex-col"><p>
          <b>{item.name}</b>
        </p>
        <p>&#8377; {item.price}</p>
        </div>
        <div className="quantity-input-container flex items-center">
        <div className="decrement flex item-center">-</div>
          <input type="text"></input>
          <div className="increment">+</div>
          
        </div>
        <div className="material-symbols-rounded">delete</div>
        
      
    </div>
  );
};

export default CartItemsCard;
