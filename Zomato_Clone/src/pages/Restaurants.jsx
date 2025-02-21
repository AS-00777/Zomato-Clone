import React from "react";
import { motion } from "framer-motion";

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian",
    image: "https://img.freepik.com/premium-vector/pizza-chef-logo-vector-restaurant-logo-design-elements_878100-395.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Burger Hub",
    cuisine: "American",
    image: "https://static.wixstatic.com/media/9a1d3f_98137e3ad55a455c866d8b5bbd444988~mv2.png/v1/fill/w_440,h_196,al_c,lg_1,q_85,enc_avif,quality_auto/Burger%20Hub%20Logo%20_%20Located%20at%206231%20S%2027th%20St%20Greenfield%2C%20WI%2053221%20_edited.png",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Sushi Delight",
    cuisine: "Japanese",
    image: "https://img.freepik.com/premium-photo/sushi-delight_1186551-29397.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Tandoori Treats",
    cuisine: "Indian",
    image: "https://i.pinimg.com/736x/93/40/ba/9340bafd143594c6d78b57894998b90c.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Dim Sum House",
    cuisine: "Chinese",
    image: "https://assets3.thrillist.com/v1/image/45597/1200x630",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    image: "https://t3.ftcdn.net/jpg/05/54/96/36/360_F_554963651_VsDt6wAOzUehbdKVTfuOkYTv0N3gTOEs.jpg",
    rating: 4.2,
  }
];

const Restaurants = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-10 px-6">
      <motion.h1
        className="text-4xl font-bold text-center text-red-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Restaurants
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <motion.div
            key={restaurant.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p className="text-gray-600">{restaurant.cuisine}</p>
              <p className="text-yellow-500 font-bold">⭐ {restaurant.rating}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;