import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Signup from "./pages/Signup"; 



const Footer = () => (
  <footer className="bg-red-500 text-white p-4 text-center text-lg font-bold mt-4">
     Vist us Again Thank You.!!!!🤩
  </footer>
);


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    
  );
};

export default App;
