import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-blue-600 text-white"
      } p-4 shadow`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          User Dashboard
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/add-user" className="hover:underline">
            Add User
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1 rounded border ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-gray-800 transition"
                : "border-white text-white hover:bg-white hover:text-blue-600 transition"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}  

  


