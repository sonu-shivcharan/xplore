import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
const ProductCard = ({ item }) => {
  const { cartItems:prevCartItems, setCartItems } = useContext(ProductContext)
  const [isAddedInCart, setIsAddedInCart] = useState(false);
  const doesExistInCart=(item)=>{
    let value=false;
    if(prevCartItems.indexOf(item)>-1){
      value=true;
    }
    return value;
  }
 ;
  const handleAddToCart=(product)=>{
    const newCartItems =  [...prevCartItems, product]
    setCartItems(newCartItems);
    setIsAddedInCart(true);
  }
  return (
    <div className="product-card">
      <div
        className="img"
        style={{ backgroundImage: `url(${item.img.url})` }}
      ></div>
      <div
        className="flex items-center justify-space-between"
        style={{ padding: "0.5rem" }}
      >
        <div className="flex justify-space-between">
          <p>{item.name}</p>
          <p>&#8377;{item.price}</p>
        </div>
        <div className="menu-icon-container">
          <span className="material-symbols-rounded menu-icon">more_vert</span>
            <div className="dropdown">
              <ul className="items">
                <div onClick={()=>!doesExistInCart(item)?handleAddToCart(item):null}><li>{isAddedInCart?"Added to Cart": "Add to cart"}</li></div>
                <div><li>Add to whishlist</li></div>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
