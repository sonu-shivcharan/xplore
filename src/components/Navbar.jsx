import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ noOfItemsInCart }) => {
  const [icon, setIcon] = useState("menu");
  const [currentRoute, setRoute] = useState("/");
  const changeIconToArrow= () => {
    setRoute("/cart");
  };
  const changeIconToMenu = () => {
    setRoute("/");
  };
  return (
    <nav id="navbar" className="flex justify-center">
      <div className="wrapper flex items-center">
        <Link to="/">
          <div
            className="menu-icon material-symbols-rounded"
            onClick={changeIconToMenu}
          >
            {(currentRoute=="/")?"menu":"arrow_back"}
          </div>
        </Link>
        <h1>Looks Maxx</h1>
        <Link to="/cart">
          <div
            className="shopping-bag material-symbols-rounded"
            onClick={changeIconToArrow}
          >
            <div
              className="no-of-items"
              style={{
                display: noOfItemsInCart > 0 ? "block" : "none",
              }}
            >
              {noOfItemsInCart}
            </div>
            local_mall
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
