import React, { useEffect, useState } from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    let updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    let updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    let updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
    } else {
      removeFromCart(index);
    }
  };
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <motion.h1
        className="text-4xl font-extrabold text-red-500 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart <FaShoppingCart className="inline-block ml-2" />
      </motion.h1>
      {cartItems.length > 0 ? (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border-b"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  className="bg-gray-300 text-black px-2 py-1 rounded-md text-sm hover:bg-gray-400 transition"
                  onClick={() => decreaseQuantity(index)}
                >
                  -
                </button>
                <span className="text-lg font-bold">{item.quantity || 1}</span>
                <button
                  className="bg-gray-300 text-black px-2 py-1 rounded-md text-sm hover:bg-gray-400 transition"
                  onClick={() => increaseQuantity(index)}
                >
                  +
                </button>
              </div>

              <p className="text-gray-700 font-bold">
                ₹{(item.price * (item.quantity || 1)).toFixed(2)}
              </p>

              {/* Remove Item Button */}
              <button
                className="bg-red-500 text-white px-3 py-2 rounded-md text-sm hover:bg-red-600 transition flex items-center gap-2"
                onClick={() => removeFromCart(index)}
              >
                <FaTrash /> Remove
              </button>
            </div>
          ))}

          {/* Total & Checkout */}
          <div className="flex justify-between items-center mt-6 px-4">
            <h2 className="text-2xl font-bold">Total:</h2>
            <span className="text-2xl font-extrabold text-green-600">
              ₹{totalAmount.toFixed(2)}
            </span>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/checkout"
              className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 inline-block"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty. Add some delicious food!
        </p>
      )}
    </div>
  );
};

export default Cart;
