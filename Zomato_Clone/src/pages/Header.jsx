import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Change this later with real auth state

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="text-3xl font-extrabold text-red-500 tracking-wide">
        <Link to="/">Zomato</Link>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex space-x-6 font-medium">
        <Link to="/" className="text-gray-700 hover:text-red-500 transition">
          Home
        </Link>
        <Link
          to="/restaurants"
          className="text-gray-700 hover:text-red-500 transition"
        >
          Restaurants
        </Link>
        <Link to="/orders" className="text-gray-700 hover:text-red-500 transition">
          Orders
        </Link>
        <Link to="/cart" className="relative text-gray-700 hover:text-red-500 transition">
          Cart
          {/* Cart Badge */}
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2">
            
          </span>
        </Link>
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Profile/Login Button */}
        {loggedIn ? (
          <div className="relative">
            <button className="flex items-center text-gray-700 hover:text-red-500 transition">
              <FiUser size={22} className="mr-1" />
              Profile
            </button>
            {/* Dropdown (Visible when clicked) */}
            {/* <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-40">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                My Profile
              </Link>
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                Logout
              </button>
            </div> */}
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Login
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col space-y-4 text-center md:hidden">
          <Link to="/" className="text-gray-700 hover:text-red-500">
            Home
          </Link>
          <Link to="/restaurants" className="text-gray-700 hover:text-red-500">
            Restaurants
          </Link>
          <Link to="/orders" className="text-gray-700 hover:text-red-500">
            Orders
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-red-500">
            Cart
          </Link>
          {loggedIn ? (
            <button className="text-gray-700 hover:text-red-500">Logout</button>
          ) : (
            <Link to="/login" className="text-red-500 font-bold">
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
