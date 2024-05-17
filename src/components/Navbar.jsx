import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar" className='flex justify-center'>
    <div className='wrapper flex items-center'>
    <div className='menu-icon material-symbols-rounded'>menu</div>
    <h1>Looks Maxx</h1>
    <button class="shopping-bag material-symbols-rounded">
local_mall</button>
    </div>
    </nav>
  )
}

export default Navbar