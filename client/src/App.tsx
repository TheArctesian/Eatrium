import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Contact from "./components/pages/contact";
import Cart from "./components/pages/cart";
import Navbar from "./components/Nav/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
