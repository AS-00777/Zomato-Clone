import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

const Restaurants = ({ setNavbarVisible }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    if (setNavbarVisible) {
      setNavbarVisible(!selectedRestaurant);
    }
  }, [selectedRestaurant, setNavbarVisible]);

  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      cuisine: "Italian",
      image: "https://img.freepik.com/premium-vector/pizza-chef-logo-vector-restaurant-logo-design-elements_878100-395.jpg",
      rating: 4.5,
      popularDishes: [
        { name: "Margherita Pizza", image: "https://media.istockphoto.com/id/1280329631/photo/italian-pizza-margherita-with-tomatoes-and-mozzarella-cheese-on-wooden-cutting-board-close-up.jpg?s=612x612&w=0&k=20&c=CFDDjavIC5l8Zska16UZRZDXDwd47fwmRsUNzY0Ym6o=" },
        { name: "Pepperoni Pizza", image: "https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=" },
        { name: "Garlic Bread", image: "https://i.ytimg.com/vi/H8MOTK9ztEc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDK-7cZ4unuZZAoCnjdnXi3xuJnIw" },
        
      ]
    },
    {
      id: 2,
      name: "Burger Hub",
      cuisine: "American",
      image: "https://static.wixstatic.com/media/9a1d3f_98137e3ad55a455c866d8b5bbd444988~mv2.png",
      rating: 4.3,
      popularDishes: [
        { name: "Cheeseburger", image: "https://c4.wallpaperflare.com/wallpaper/791/733/196/burgers-food-fast-food-cheese-wallpaper-preview.jpg" },
        { name: "Veg Burger", image: "https://images.slurrp.com/prod/recipe_images/cms/3myz5w2fhya.webp" },
        { name: "French Fries", image: "https://t4.ftcdn.net/jpg/01/26/02/33/360_F_126023380_C1VoNoSBkz0hJziJTVDUUFcOo9EgIfxL.jpg" }
      ]
    },
    {
      id: 3,
      name: "Sushi Delight",
      cuisine: "Japanese",
      image: "https://img.freepik.com/premium-photo/sushi-delight_1186551-29397.jpg",
      rating: 4.7,
      popularDishes: [
        { name: "Salmon Sushi", image: "https://www.kikkoman.co.uk/fileadmin/user_upload/Recipes/Bilder_EU/942-recipe-page-smoked-salmon-and-avocado-roll_desktop.jpg" },
        { name: "Tuna Roll", image: "https://www.siftandsimmer.com/wp-content/uploads/2024/03/IMG_1004-featured.jpg" },
        { name: "Miso Soup", image: "https://media.istockphoto.com/id/1149063024/photo/japanese-miso-soup.jpg?s=612x612&w=0&k=20&c=VzFO0O8dWFvghbiR5VvAOt1m9zQtwGrsIPi-qWbjzmc=" }
      ]
    },
    {
      id: 4,
      name: "Tandoori Treats",
      cuisine: "Indian",
      image: "https://i.pinimg.com/736x/93/40/ba/9340bafd143594c6d78b57894998b90c.jpg",
      rating: 4.6,
      popularDishes: [
        { name: "Tandoori Chicken", image: "https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.jpg?s=612x612&w=0&k=20&c=JDs72E-fX5SdcBQREta58T82W8zO_rFiKC7d1WwEEUE=" },
        { name: "Butter Naan", image: "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=" },
        { name: "Paneer Tikka", image: "https://thumbs.dreamstime.com/b/savoring-delectable-paneer-tikka-skewers-vibrant-mint-chutney-outdoor-dining-setting-delight-aromatic-artfully-335497851.jpg" }
      ]
    },
    {
      id: 5,
      name: "Dim Sum House",
      cuisine: "Chinese",
      image: "https://assets3.thrillist.com/v1/image/45597/1200x630",
      rating: 4.4,
      popularDishes: [
        { name: "Chicken Dumplings", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9wvYbwKbkLhFxwiVVesTRTKjqKeJIvxLEA&s" },
        { name: "Spring Rolls", image: "https://media.istockphoto.com/id/840599504/photo/spring-rolls.jpg?s=612x612&w=0&k=20&c=wByMigy56ioHSR7QzXFNNAbgiso8xlAqPfAD35A6YGA=" },
        { name: "Sweet and Sour Pork", image: "https://media.istockphoto.com/id/1498891937/photo/sweet-and-sour-pork-served-in-dish-isolated-on-background-top-view-singapore-food.jpg?s=612x612&w=0&k=20&c=KK6pXCboOM_z2T70WbUje9AK_UkCO6mbUArF2SaBnFk=" }
      ]
    },
    {
      id: 6,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      image: "https://t3.ftcdn.net/jpg/05/54/96/36/360_F_554963651_VsDt6wAOzUehbdKVTfuOkYTv0N3gTOEs.jpg",
      rating: 4.2,
      popularDishes: [
        { name: "Chicken Tacos", image: "https://media.istockphoto.com/id/941591492/photo/homemade-chicken-tacos-with-onion.jpg?s=612x612&w=0&k=20&c=caE9B7juw3dkHzfy6bMzHWRQeZ0ZHaAiwcwMVU-Dr7Q=" },
        { name: "Chicken Quesadilla", image: "https://media.istockphoto.com/id/1159174146/photo/quesadilla-with-chicken-and-sauces.jpg?s=612x612&w=0&k=20&c=c_w0YgNkZO2X2MPIjAS2OYWoBkm7tPLOQOhHABfR8Ao=" },
        { name: "Guacamole", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCECP7heN9DfDrHs_rSlF03u02HLYdNrkWyoOQT1PHrTWhrFgsWAkA1pLIIEhJ5HNj9c&usqp=CAU" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-10 px-6">
      {!selectedRestaurant && (
        <>
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
        </>
      )}
      {selectedRestaurant && (
        <Dialog open={true} onClose={() => setSelectedRestaurant(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-center">{selectedRestaurant.name} - Popular Dishes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedRestaurant.popularDishes.map((dish, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  <img src={dish.image} alt={dish.name} className="w-40 h-40 object-cover rounded-md" />
                  <p className="mt-2 text-lg font-semibold">{dish.name}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 bg-red-500 text-white py-2 px-4 rounded w-full" onClick={() => setSelectedRestaurant(null)}>Close</button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Restaurants;
