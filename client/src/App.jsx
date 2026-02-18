import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import MyOrders from "./pages/MyOrders";
import Auth from "./models/Auth";
import ProductCategory from "./pages/ProductCategory";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
const App = () => {
  const { isSeller, showUserLogin } = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div className="text-default min-h-screen">
      {isSellerPath ? null : <Navbar></Navbar>}
      {showUserLogin ? <Auth></Auth> : null}
      <Toaster></Toaster>
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/product/:category/:id"
            element={<ProductDetail />}
          ></Route>
          <Route
            path="/products/:category"
            element={<ProductCategory />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/my-orders" element={<MyOrders />}></Route>
        </Routes>
      </div>
      {isSellerPath ? null : <Footer></Footer>}
    </div>
  );
};

export default App;
