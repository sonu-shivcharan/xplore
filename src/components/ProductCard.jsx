import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
const ProductCard = ({ item }) => {
  const { cartItems: prevCartItems, setCartItems } = useContext(ProductContext);
  const initialStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };
  const newStyle = {
    backgroundColor: "#fff",
    color: "#000",
  };
  const checkDoesExistInCart = (item) => {
    let value = false;
    if (prevCartItems.indexOf(item) > -1) {
      value = true;
    }
    return value;
  };

  const handleAddToCart = (product) => {
    const newCartItems = [...prevCartItems, product];
    setCartItems(newCartItems);
  };
  const doesAddedToCart = checkDoesExistInCart(item);
  return (
    <div className="product-card">
      <div
        className="img"
        style={{ backgroundImage: `url(${item.img.url})` }}
      ></div>
      <div className="price-name-container flex justify-space-between">
        <p>{item.name} </p>
        <p> &#8377;{item.price}</p>
      </div>
      <div
        className="add-to-cart-btn"
        style={!doesAddedToCart ? newStyle : initialStyle}
        onClick={() => (!doesAddedToCart ? handleAddToCart(item) : null)}
      >
        {doesAddedToCart ? "Added" : "Add to cart"}
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
