import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductsConatiner from './components/ProductsConatiner'
import  HeroSection  from './components/HeroSection'


function App() {

  return (
    <>
<Navbar/>
<HeroSection/>

<ProductsConatiner/>

<Footer/>
  </>
  )
}

export default App
