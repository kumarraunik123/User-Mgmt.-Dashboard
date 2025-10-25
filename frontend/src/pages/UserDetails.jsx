import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUserById } from "../services/api";

export default function UserDetails() {
  const { id } = useParams(); // get user ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // 🌙 Dark mode state

  // Fetch user details on mount
  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUserById(id);
      setUser(data);
      setLoading(false);
    };
    getUser();
  }, [id]);

  // Show loading state
  if (loading) return <p className="text-center mt-8">Loading user details...</p>;

  // Show error if user not found
  if (!user) return <p className="text-center mt-8">User not found.</p>;

  // Display user details
  return (
    <div
      className={`max-w-md mx-auto p-4 border rounded shadow mt-8 transition-all duration-300 ${
        darkMode
          ? "bg-gray-700 text-white border-gray-600"
          : "bg-white text-gray-800 border-gray-300"
      }`}
    >
      {/* 🌙 Dark Mode Toggle */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1 rounded text-sm ${
            darkMode
              ? "bg-gray-500 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Address:</strong> {user.address.suite}, {user.address.street},{" "}
        {user.address.city} - {user.address.zipcode}
      </p>

      <Link
        to="/"
        className={`inline-block mt-4 hover:underline ${
          darkMode ? "text-blue-300" : "text-blue-600"
        }`}
      >
        ← Back to Home
      </Link>
    </div>
  );
}  
  


