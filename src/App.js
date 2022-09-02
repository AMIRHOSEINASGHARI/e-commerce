import React from "react";
//react-router-dom
import { Route, Routes } from "react-router-dom";
//components
import HomePage from "./components/HomePage/HomePage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
//contexts
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
