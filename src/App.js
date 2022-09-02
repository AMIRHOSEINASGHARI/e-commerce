import React from "react";
//react-router-dom
import { Route, Routes } from "react-router-dom";
//components
import HomePage from "./components/HomePage/HomePage";
//contexts
import ProductsContextProvider from "./context/ProductsContextProvider";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
