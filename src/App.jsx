import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";  // Example component
import About from "./pages/About"; // Example component
import Products from './pages/Products';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/login" element={<Login />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>

  

  )
}

export default App