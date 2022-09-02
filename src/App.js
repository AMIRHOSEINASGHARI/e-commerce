import React from "react";
//react-router-dom
import { Route, Routes } from "react-router-dom";
//components
import HomePage from "./components/HomePage/HomePage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";
//contexts
import ProductsContextProvider from "./context/ProductsContextProvider";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
