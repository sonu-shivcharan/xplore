import React, { useEffect } from "react";

const ProductCard = ({ item }) => {
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
        <div>
          <span className="material-symbols-rounded menu-icon">more_vert</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
