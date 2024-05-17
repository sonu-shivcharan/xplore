import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar">
    <h1>Looks Maxx</h1>
    <div className="nav-items">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
     </div>
    </nav>
  )
}

export default Navbar