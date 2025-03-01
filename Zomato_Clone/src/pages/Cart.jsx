import React, { useEffect, useState } from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const handleCheckout = async () => {
    try {
      const response = await axios.post('/api/cart/checkout', { userId: 'USER_ID' }); // Replace 'USER_ID' with actual user ID
      console.log('Order placed:', response.data);
      // Clear the cart and redirect to orders page
      localStorage.removeItem("cart");
      setCartItems([]);
      // Redirect to orders page (you may need to use history.push or navigate)
      window.location.href = '/orders'; // Adjust as necessary
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };


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
              <p className="text-gray-700 font-bold">
                ₹{item.price.toFixed(2)}
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
            {/* <button
              onClick={handleCheckout}
              className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 inline-block"
            >
              Place Order
            </button> */}
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
