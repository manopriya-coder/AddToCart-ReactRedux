import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Container/Home";
import Navbar from "../Component/Navbar";
import Dashboard from "../Container/Dashboard";
import Product from "../Container/Product";
import CartPage from "../Container/cartPage";
import Checkout from "../Container/Checkout";
import Success from "../Container/Success";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/checkout/">
          <Route path="" element={<Checkout />} />
          <Route path=":id" element={<Checkout />} />
        </Route>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
