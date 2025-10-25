import React, { useState, useEffect } from "react";
import { fetchUsers } from "../services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // 🆕 dark mode state

  // Fetch users from API and localStorage
  useEffect(() => {
    const getUsers = async () => {
      const apiUsers = await fetchUsers(); // API users
      const localUsers = JSON.parse(localStorage.getItem("users")) || []; // local users
      setUsers([...apiUsers, ...localUsers]); // combine API + local
      setLoading(false);
    };
    getUsers();
  }, []);

  // Filter users by name or email
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Loading spinner
  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="container mx-auto flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User List</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 border rounded hover:bg-blue-600 hover:text-white transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Add User Link */}
      <Link
        to="/add-user"
        className="inline-block mb-4 text-blue-600 font-semibold hover:underline"
      >
        + Add User
      </Link>

      {/* User Grid */}
      {filteredUsers.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">No users found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <Link
              key={user.id}
              to={`/user/${user.id}`}
              className={`border p-4 rounded-lg shadow transition transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-white text-gray-800 hover:bg-gray-50"
              }`}
            >
              <h2 className="font-bold text-lg mb-1">{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Company: {user.company.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}  
  
  

 
 



