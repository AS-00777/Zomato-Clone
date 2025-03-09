import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <motion.h1
        className="text-4xl font-bold text-center text-red-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Orders
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {orders.length > 0 ? (
          orders.map((order) => (
            <motion.div
              key={order.id}
              className="p-4 mb-4 border-b border-gray-300 flex justify-between items-center hover:bg-gray-50 transition"
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <h2 className="text-lg font-semibold">Order ID: {order.id}</h2>
                <p className="text-gray-600">
                  Items: {order.items.map((item) => item.name).join(", ")}
                </p>
                <p className="text-gray-800 font-bold">Total: ₹{order.total.toFixed(2)}</p>
                <p className="text-gray-500 text-sm">Placed on: {order.date}</p>
              </div>
             
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders yet!</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
