import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [icon, setIcon] = useState("menu");
  const changeIconToArrow = () => {
    setIcon("arrow_back");
  };
  const changeIconToMenu = () => {
    setIcon("menu");
  };
  return (
    <nav id="navbar" className="flex justify-center">
      <div className="wrapper flex items-center">
        <Link to="/">
          <div
            className="menu-icon material-symbols-rounded"
            onClick={changeIconToMenu}
          >
            {icon}
          </div>
        </Link>
        <h1>Looks Maxx</h1>
        <Link to="/cart">
          <div
            onClick={changeIconToArrow}
            className="shopping-bag material-symbols-rounded"
          >
            local_mall
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
