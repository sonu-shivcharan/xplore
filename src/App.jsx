import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductsConatiner from './components/ProductsConatiner'
import  HeroSection  from './components/HeroSection'

import { ProductContext } from './components/ProductContext'
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/product.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching the product data:', error);
      });
  }, []);

  return (
    <>
<Navbar/>
<HeroSection/>
<ProductContext.Provider value={products}>
<ProductsConatiner/>
</ProductContext.Provider>
<Footer/>
  </>
  )
}

export default App
