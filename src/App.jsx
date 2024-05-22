import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsConatiner from "./components/ProductsConatiner";
import HeroSection from "./components/HeroSection";
import Cart from "./components/Cart";
import { ProductContext } from "./components/ProductContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("/product.json")
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
        console.error("Error fetching the product data:", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductContext.Provider value={{products, cartItems,setCartItems}}>
                <ProductsConatiner />
              </ProductContext.Provider>
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Cart cartItems={cartItems} />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
