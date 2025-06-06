import React, { useState, useEffect } from "react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.address || !formData.email || !formData.phone) {
      alert("Please fill in all fields before placing an order.");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: totalAmount,
      customer: formData,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    localStorage.removeItem("cart"); // Clear cart after order
    setCartItems([]);
    alert("Order placed successfully! 🎉");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-extrabold text-red-500 text-center mb-6">
        Checkout
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        {/* Order Summary */}
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 border-b"
              >
                <span>{item.name}</span>
                <span className="font-bold">₹{item.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between mt-4 text-xl font-bold">
              <span>Total:</span>
              <span className="text-green-600">₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-lg">No items in cart.</p>
        )}

        {/* Billing Information */}
        <h2 className="text-2xl font-semibold mt-6">Billing Information</h2>
        <form className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg mb-3"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg mb-3"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg mb-3"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            className="w-full p-3 border border-gray-300 rounded-lg mb-3"
            onChange={handleInputChange}
          />
        </form>

        {/* Place Order Button */}
        <button
          className={`w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 mt-4 ${
            cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePlaceOrder}
          disabled={cartItems.length === 0}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
