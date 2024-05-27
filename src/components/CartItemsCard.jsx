import React from "react";

const CartItemsCard = ({item}) => {
  return (
    <div className="cart-item-card">
      <div className="flex items-center justify-space-between flex-wrap">
        <img src={item.img.url}></img>
        <p>
          <b>{item.name}</b>
        </p>
        <p>&#8377; {item.price}</p>
        <div className="quantity-input-container flex items-center">
        <div className="decrement flex item-center">-</div>
          <input type="text"></input>
          <div className="increment">+</div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
