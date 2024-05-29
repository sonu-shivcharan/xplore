import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsConatiner from "./components/ProductsConatiner";
import HeroSection from "./components/HeroSection";
import Cart from "./components/Cart";
import { ProductContext } from "./components/ProductContext";
import { CartContext } from "./components/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [noOfItemsInCart, setNoOfItemsInCart] = useState(0);
  useEffect(() => {
    setNoOfItemsInCart(cartItems.length);
  }, [cartItems]);
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
    const itemsFromLocalStore = localStorage.getItem("cartItems");
    if (itemsFromLocalStore) {
      setCartItems(JSON.parse(itemsFromLocalStore));
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, cartItems, setCartItems }}>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        <BrowserRouter>
          <Navbar noOfItemsInCart={noOfItemsInCart} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />

                  <ProductsConatiner />
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
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
