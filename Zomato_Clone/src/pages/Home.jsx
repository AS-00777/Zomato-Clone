import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa"; // Import icons
import { motion } from "framer-motion"; // For animations
import axios from 'axios';


const foodItems = [
  { id: 1, name: "Burger", price: 199, image: "https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, name: "Pizza", price: 349, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Pasta", price: 249, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Biryani", price: 399, image: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=2048x2048&w=is&k=20&c=uU0uuti6KOvpQhXuu6VMpgi021o1vZXfOhpMrJXSn1o=" },
  { id: 5, name: "Sushi", price: 599, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { id: 6, name: "Tacos", price: 199, image: "https://media.istockphoto.com/id/542331706/photo/homemade-spicy-shrimp-tacos.jpg?s=612x612&w=0&k=20&c=fxx5deD9YgseQfLc3IFZpoMfwdq8Fb7jYimAjITs6TA=" },
  { id: 7, name: "Salad", price: 149, image: "https://media.istockphoto.com/id/1454741285/photo/roast-fish-and-vegetable-salad-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Slmk-RLvdR3317E5W2UKLul4y1ZH3axjL2XCNOBZbhE=" },
  { id: 8, name: "Shawrma", price: 199, image: "https://t3.ftcdn.net/jpg/03/09/85/36/360_F_309853648_yJJrVCYncv1D4raXzSH39WUlrRMLEwv3.jpg" },
  { id: 9, name: "Pancakes", price: 179, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 10, name: "Ice Cream", price: 129, image: "https://burst.shopifycdn.com/photos/ice-cream-cone-with-two-scoops.jpg?width=1000&format=pjpg&exif=0&iptc=0" },
  { id: 11, name: "Dosa", price: 99, image: "https://t3.ftcdn.net/jpg/01/86/33/72/360_F_186337209_9rbcMLu3wGCDNaEoK1jO0aNzb0pv7Xs7.jpg" },
  { id: 12, name: "Momos", price: 129, image: "https://media.istockphoto.com/id/1252605699/photo/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese.jpg?s=612x612&w=0&k=20&c=-K4xCgsFxgv0OnSf9Omp8w06eoTE4_6b30pO12b6d9o=" },
  { id: 13, name: "Samosa", price: 49, image: "https://t4.ftcdn.net/jpg/07/67/68/59/360_F_767685963_MoLx5Lh7Hw9WwcDb5Y3s54IWTXk6Q0ti.jpg" },
  { id: 14, name: "Pav Bhaji", price: 179, image: "https://media.istockphoto.com/id/1327433011/photo/pav-bhaji-indian-street-food-bharuch-gujarat-india.jpg?s=612x612&w=0&k=20&c=R_Nl3Ig6qTNMidQkjXH0It8MINDJY-C5GMiIv-HxO04=" },
  { id: 15, name: "Chole Bhature", price: 199, image: "https://t4.ftcdn.net/jpg/07/54/78/25/360_F_754782526_PlvME8TT9ONtd9ZnWo7uEai6GO1q5Yoi.jpg" },
  { id: 16, name: "Fish Fry", price: 300, image: "https://media.istockphoto.com/id/980462262/photo/tasty-grilled-fish.jpg?s=612x612&w=0&k=20&c=e6m9uJ3mKotLv5x8lZjMqLklA8cM4bl1qJtMwdlCnq8=" }
];


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter food items based on search input
  const filteredFood = foodItems.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add to Cart Function
  const addToCart = (food) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get existing cart
    cart.push(food); // Add new item
    localStorage.setItem("cart", JSON.stringify(cart)); // Save back to localStorage
    alert(`${food.name} added to cart!`);
  };
  const handleOrder = () => {
  const userToken = localStorage.getItem("UserToken");

  if (!userToken) {
    alert("You must log in before ordering food!");
    navigate("/login"); // Redirect to login
    return;
  }

  // Proceed with ordering logic
  console.log("Order placed successfully!");
};

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Heading */}
      <motion.h1 
        className="text-5xl font-extrabold text-red-500 mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Find Your Favorite Food 🍔🍕
      </motion.h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-lg mb-8">
        <input
          type="text"
          placeholder="Search for delicious food..."
          className="w-full p-4 pl-12 border border-gray-300 rounded-full shadow-md focus:ring-2 focus:ring-red-400 outline-none text-lg transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-4 top-4 text-gray-500 text-xl" />
      </div>

      {/* Food Item Grid */}
      <motion.div
        // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl"
         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredFood.length > 0 ? (
          filteredFood.map((food) => (
            <motion.div
              key={food.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={food.image} alt={food.name} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{food.name}</h2>
                <p className="text-gray-600 text-sm mb-2">₹{food.price}</p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition duration-300 flex items-center justify-center gap-2"
                  onClick={() => addToCart(food)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-lg text-center col-span-3">No food items found</p>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
