import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian",
    image: "https://img.freepik.com/premium-vector/pizza-chef-logo-vector-restaurant-logo-design-elements_878100-395.jpg",
    rating: 4.5,
    popularDishes: [
      { name: "Margherita Pizza", image: "https://example.com/margherita.jpg" },
      { name: "Pepperoni Pizza", image: "https://example.com/pepperoni.jpg" },
      { name: "Garlic Bread", image: "https://example.com/garlicbread.jpg" },
      { name: "Pasta Carbonara", image: "https://example.com/pasta.jpg" },
      { name: "Lasagna", image: "https://example.com/lasagna.jpg" },
      { name: "Tiramisu", image: "https://example.com/tiramisu.jpg" },
      { name: "Bruschetta", image: "https://example.com/bruschetta.jpg" }
    ],
  },
  {
    id: 2,
    name: "Burger Hub",
    cuisine: "American",
    image: "https://static.wixstatic.com/media/9a1d3f_98137e3ad55a455c866d8b5bbd444988~mv2.png",
    rating: 4.3,
    popularDishes: [
      { name: "Cheeseburger", image: "https://example.com/cheeseburger.jpg" },
      { name: "Bacon Burger", image: "https://example.com/baconburger.jpg" },
      { name: "French Fries", image: "https://example.com/fries.jpg" },
      { name: "Onion Rings", image: "https://example.com/onionrings.jpg" },,
      { name: "BBQ Burger", image: "https://example.com/bbqburger.jpg" },
      { name: "Milkshake", image: "https://example.com/milkshake.jpg" },
      { name: "Hot Dog", image: "https://example.com/hotdog.jpg" }
    ],
  },
  {
    id: 3,
    name: "Sushi Delight",
    cuisine: "Japanese",
    image: "https://img.freepik.com/premium-photo/sushi-delight_1186551-29397.jpg",
    rating: 4.7,
    popularDishes: [
      { name: "Salmon Sushi", image: "https://example.com/salmon.jpg" },
      { name: "Tuna Roll", image: "https://example.com/tunaroll.jpg" },
      { name: "Miso Soup", image: "https://example.com/miso.jpg" },
      { name: "Tempura", image: "https://example.com/tempura.jpg" }
    ],
  },
  {
    id: 4,
    name: "Tandoori Treats",
    cuisine: "Indian",
    image: "https://i.pinimg.com/736x/93/40/ba/9340bafd143594c6d78b57894998b90c.jpg",
    rating: 4.6,
    popularDishes: [
      { name: "Tandoori Chicken", image: "https://example.com/tandoori.jpg" },
      { name: "Butter Naan", image: "https://example.com/naan.jpg" },
      { name: "Paneer Tikka", image: "https://example.com/paneertikka.jpg" },
      { name: "Dal Makhani", image: "https://example.com/dalmakhani.jpg" }
    ],
  },
  {
    id: 5,
    name: "Dim Sum House",
    cuisine: "Chinese",
    image: "https://assets3.thrillist.com/v1/image/45597/1200x630",
    rating: 4.4,
    popularDishes: [
      { name: "Chicken Dumplings", image: "https://example.com/dumplings.jpg" },
      { name: "Spring Rolls", image: "https://example.com/springrolls.jpg" },
      { name: "Sweet and Sour Pork", image: "https://example.com/sweetandsour.jpg" },
      { name: "Kung Pao Chicken", image: "https://example.com/kungpao.jpg" }
    ],
  },
  {
    id: 6,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    image: "https://t3.ftcdn.net/jpg/05/54/96/36/360_F_554963651_VsDt6wAOzUehbdKVTfuOkYTv0N3gTOEs.jpg",
    rating: 4.2,
    popularDishes: [
      { name: "Beef Tacos", image: "https://example.com/beeftacos.jpg" },
      { name: "Chicken Quesadilla", image: "https://example.com/quesadilla.jpg" },
      { name: "Guacamole", image: "https://example.com/guacamole.jpg" },
      { name: "Churros", image: "https://example.com/churros.jpg" }
    ],
  }
];

const Restaurants = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-gray-100 py-10 px-6 ${selectedRestaurant ? 'hidden' : ''}`}>
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
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedRestaurant(restaurant)}
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

      {selectedRestaurant && (
        <Dialog open={true} onClose={() => setSelectedRestaurant(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl h-full overflow-y-auto flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center">{selectedRestaurant.name} - Popular Dishes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedRestaurant.popularDishes.map((dish, index) => (
                <div key={index} className="text-center">
                  <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-md" />
                  <p className="mt-2 text-lg font-semibold">{dish.name}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-red-500 text-white py-2 px-4 rounded w-full" onClick={() => setSelectedRestaurant(null)}>Close</button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Restaurants;
