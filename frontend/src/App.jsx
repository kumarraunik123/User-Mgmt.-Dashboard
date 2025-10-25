// src/App.jsx
import React ,{ useState }from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ✅ import Toaster globally

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import UserDetails from "./pages/UserDetails"; 
import Footer from "./components/Footer";


export default function App() {
   const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      {/* ✅ Navbar appears on all pages */}
      <Navbar />

      {/* ✅ Main content container */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>

      {/* ✅ Toaster placed here for global notifications */}
      <Toaster position="bottom-right" reverseOrder={false} /> 
       <Footer darkMode={darkMode} />
    </Router>
  );
}     
    
 
 
