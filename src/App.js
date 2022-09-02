import React from "react";
//react-router-dom
import { Route, Routes } from "react-router-dom";
//components
import HomePage from "./components/HomePage/HomePage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
//contexts
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
