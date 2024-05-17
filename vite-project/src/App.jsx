import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductsConatiner from './components/ProductsConatiner'
import  HeroSection  from './components/HeroSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
