import React from "react";
import Menu from "./components/pages/menu/menu";
import Cart from "./components/pages/cart/cart";
import Navbar from "./components/nav/navbar";
import { Routes, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider: any) {
    return new Web3(provider);
}
const App = () => {
    return (
        <>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Web3ReactProvider>
        </>
    );
};

export default App;
