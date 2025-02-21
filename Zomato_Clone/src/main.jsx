import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Orders from "./pages/order";
import OrderDetails from "./pages/orderdetails";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Checkout from "./pages/checkout"; // Import Checkout Page
import "./index.css"; // Ensure Tailwind is applied
import Review from "./pages/Review";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Layout Wraps All Routes */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="orders" element={<Orders />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<Checkout />} /> {/* Checkout Route Added */}
          <Route path="/orders/:orderId" element={<OrderDetails />} />
        </Route>

        {/* Login Page (Outside Layout) */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
