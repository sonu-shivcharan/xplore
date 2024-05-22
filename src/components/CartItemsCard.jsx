import React from "react";

const CartItemsCard = ({item}) => {
  return (
    <div className="cart-item-card">
      <div className="flex items-center justify-space-between">
        <img src={item.img.url}></img>
        <p>
          <b>{item.name}</b>
        </p>
        <div className="quantity-input-container flex items-center">
          <div>+</div>
          <input type="number"></input>
          <div>-</div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
