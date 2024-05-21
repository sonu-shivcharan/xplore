import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const initialStyle = {
    backgroundColor: 'transparent',
    color:"#fff",
    transition: 'background-color 0.3s ease'
  };

  const scrolledStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color:"black",
    transition: 'background-color 0.3s ease'
  };
  const [navbarStyle, setNavbarStyle] = useState(initialStyle);
  const handleScroll=()=>{
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 50) {
      setNavbarStyle(scrolledStyle);
    } else {
      setNavbarStyle(initialStyle);
    }
  }
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })
  return (
    <nav id="navbar" className='flex justify-center' style={navbarStyle}>
    <div className='wrapper flex items-center'>
    <div className='menu-icon material-symbols-rounded'>menu</div>
    <h1>Looks Maxx {scrollPosition}</h1>
    <div className="shopping-bag material-symbols-rounded">local_mall</div>
    </div>
    </nav>
  )
}

export default Navbar