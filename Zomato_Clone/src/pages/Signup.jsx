import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState(""); // No default role
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Function to handle role selection and store it under different keys
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    // Store role under separate keys
    if (selectedRole === "user") {
      localStorage.setItem("userRole", "User");
    } else if (selectedRole === "restaurant") {
      localStorage.setItem("restaurantRole", "Restaurant");
    } else if (selectedRole === "delivery") {
      localStorage.setItem("deliveryRole", "Delivery Partner");
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:4000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, role }),
          });
          
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Signup successful! Please login.");
        localStorage.setItem("userRole", role); // Store role locally
        navigate("/login");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again!");
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-pink-500 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSignup}>
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Role Selection Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Role
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              value={role}
              onChange={handleRoleChange} // Store role in separate keys
              required
            >
              <option value="">-- Select Role --</option>
              <option value="user">User</option>
              <option value="restaurant">Restaurant</option>
              <option value="delivery">Delivery Partner</option>
            </select>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Signup
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <span
            className="text-red-500 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
