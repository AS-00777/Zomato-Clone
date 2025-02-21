// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";

// // // const initialCartItems = [
// // //   { id: 1, name: "Burger", price: "$5.99" },
// // //   { id: 2, name: "Fries", price: "$2.99" },
// // // ];

// // // const Cart = () => {
// // //   const [cartItems, setCartItems] = useState(initialCartItems);

// // //   const handleRemove = (id) => {
// // //     setCartItems(cartItems.filter(item => item.id !== id));
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 py-10 px-6">
// // //       <motion.h1 
// // //         className="text-4xl font-bold text-center text-red-500 mb-8"
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.5 }}
// // //       >
// // //         Your Cart
// // //       </motion.h1>

// // //       <div className="max-w-3xl mx-auto">
// // //         {cartItems.map((item) => (
// // //           <motion.div 
// // //             key={item.id} 
// // //             className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between"
// // //             whileHover={{ scale: 1.02 }}
// // //           >
// // //             <h2 className="text-lg font-semibold">{item.name}</h2>
// // //             <p className="text-gray-600">{item.price}</p>
// // //             <motion.button 
// // //               className="text-red-500 hover:underline"
// // //               whileTap={{ scale: 0.9 }}
// // //               onClick={() => handleRemove(item.id)}
// // //             >
// // //               Remove
// // //             </motion.button>
// // //           </motion.div>
// // //         ))}
// // //         <motion.button 
// // //           className="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-semibold mt-4 hover:bg-red-600"
// // //           whileHover={{ scale: 1.05 }}
// // //         >
// // //           Checkout
// // //         </motion.button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Cart;

// // import React, { useEffect, useState } from "react";
// // import { FaTrash } from "react-icons/fa"; // Import trash icon

// // const Cart = () => {
// //   const [cartItems, setCartItems] = useState([]);

// //   // Load cart items from localStorage
// //   useEffect(() => {
// //     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
// //     setCartItems(savedCart);
// //   }, []);

// //   // Function to remove a single item
// //   const removeFromCart = (index) => {
// //     const updatedCart = [...cartItems];
// //     updatedCart.splice(index, 1); // Remove item at the given index
// //     setCartItems(updatedCart);
// //     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
// //   };

// //   // Function to clear the cart
// //   const clearCart = () => {
// //     setCartItems([]); // Empty state
// //     localStorage.removeItem("cart"); // Remove from localStorage
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-10 px-6">
// //       <h1 className="text-4xl font-extrabold text-red-500 text-center mb-6">Your Cart 🛒</h1>
      
// //       {cartItems.length > 0 ? (
// //         <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
// //           {cartItems.map((item, index) => (
// //             <div key={index} className="flex items-center justify-between p-4 border-b">
// //               <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
// //               <h2 className="text-lg font-semibold">{item.name}</h2>
// //               <p className="text-gray-700">${item.price.toFixed(2)}</p>

// //               {/* Remove Item Button */}
// //               <button
// //                 className="bg-red-500 text-white px-3 py-2 rounded-md text-sm hover:bg-red-600 transition flex items-center gap-2"
// //                 onClick={() => removeFromCart(index)}
// //               >
// //                 <FaTrash /> Remove
// //               </button>
// //             </div>
// //           ))}

// //           {/* Clear Cart Button */}
// //           <button
// //             className="mt-4 bg-gray-800 text-white px-5 py-2 rounded-md w-full text-center text-lg hover:bg-gray-900 transition"
// //             onClick={clearCart}
// //           >
// //             Clear Cart
// //           </button>
// //         </div>
// //       ) : (
// //         <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;

// import React, { useEffect, useState } from "react";
// import { FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate(); // For navigating to checkout

//   // Load cart items from localStorage
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(savedCart);
//   }, []);

//   // Remove an item from cart
//   const removeFromCart = (index) => {
//     let updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Clear entire cart
//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem("cart");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6">
//       <h1 className="text-4xl font-extrabold text-red-500 text-center mb-6">Your Cart 🛒</h1>
      
//       {cartItems.length > 0 ? (
//         <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
//           {cartItems.map((item, index) => (
//             <div key={index} className="flex items-center justify-between p-4 border-b">
//               <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
//               <h2 className="text-lg font-semibold">{item.name}</h2>
//               <p className="text-gray-700">${item.price.toFixed(2)}</p>

//               {/* Remove Item Button */}
//               <button
//                 className="bg-red-500 text-white px-3 py-2 rounded-md text-sm hover:bg-red-600 transition flex items-center gap-2"
//                 onClick={() => removeFromCart(index)}
//               >
//                 <FaTrash /> Remove
//               </button>
//             </div>
//           ))}

//           {/* Clear Cart Button */}
//           <button
//             className="mt-4 bg-gray-800 text-white px-5 py-2 rounded-md w-full text-center text-lg hover:bg-gray-900 transition"
//             onClick={clearCart}
//           >
//             Clear Cart
//           </button>

//           {/* Checkout Button */}
//           <button
//             className="mt-4 bg-green-500 text-white px-5 py-2 rounded-md w-full text-center text-lg hover:bg-green-600 transition"
//             onClick={() => navigate("/checkout")}
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       ) : (
//         <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (index) => {
    let updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-extrabold text-red-500 text-center mb-6">
        Your Cart <FaShoppingCart className="inline-block ml-2" />
      </h1>

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
              <p className="text-gray-700 font-bold">${item.price.toFixed(2)}</p>

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
              ${totalAmount.toFixed(2)}
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
