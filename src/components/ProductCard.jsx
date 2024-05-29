import React, { useState, useContext, useMemo } from "react";
import { CartContext } from "./CartContext";

const initialStyle = {
  backgroundColor: "#000",
  color: "#fff",
};

const newStyle = {
  backgroundColor: "#fff",
  color: "#000",
};

const ProductCard = React.memo(({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const checkDoesExistInCart = useMemo(() => (item) => {
    return cartItems.some(cartItem => cartItem.id === item.id);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    product.quantity=1;
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const doesAddedToCart = checkDoesExistInCart(item);

  console.log("product rerendered");

  return (
    <div className="product-card">
      <div
        className="img"
        style={{ backgroundImage: `url(${item.img.url})` }}
      ></div>
      <div className="price-name-container flex justify-space-between">
        <p>{item.name}</p>
        <p>&#8377;{item.price}</p>
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
});

export default ProductCard;
