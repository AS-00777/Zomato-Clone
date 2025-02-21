import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const orders = [
  { id: 1, restaurant: "Pizza Palace", items: ["Pepperoni Pizza", "Garlic Bread"], total: "$25.99" },
  { id: 2, restaurant: "Burger Hub", items: ["Cheeseburger", "Fries"], total: "$15.49" },
  { id: 3, restaurant: "Sushi Delight", items: ["Salmon Sushi", "Miso Soup"], total: "$30.99" },
];

const Orders = () => {
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
                <h2 className="text-lg font-semibold">{order.restaurant}</h2>
                <p className="text-gray-600">Items: {order.items.join(", ")}</p>
                <p className="text-gray-800 font-bold">{order.total}</p>
              </div>
              <Link
                to={`/orders/${order.id}`}
                className="text-red-500 font-semibold hover:underline"
              >
                View Details
              </Link>
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
