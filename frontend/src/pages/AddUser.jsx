import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddUser() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false); // 🌙 Dark Mode toggle
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  // 🧾 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !company) {
      toast.error("All fields are required!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      company: { name: company },
    };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("User added successfully!");

    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");

    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div
      className={`max-w-md mx-auto p-6 border rounded shadow mt-8 transition-all duration-300 ${
        darkMode
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-gray-900 border-gray-300"
      }`}
    >
      {/* 🌙 Dark Mode Toggle */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Add New User</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1 rounded text-sm transition ${
            darkMode
              ? "bg-gray-600 text-white hover:bg-gray-500"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`border p-2 rounded focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:ring-gray-500 text-white"
              : "bg-white border-gray-300 focus:ring-blue-400 text-gray-900"
          }`}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border p-2 rounded focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:ring-gray-500 text-white"
              : "bg-white border-gray-300 focus:ring-blue-400 text-gray-900"
          }`}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`border p-2 rounded focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:ring-gray-500 text-white"
              : "bg-white border-gray-300 focus:ring-blue-400 text-gray-900"
          }`}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={`border p-2 rounded focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:ring-gray-500 text-white"
              : "bg-white border-gray-300 focus:ring-blue-400 text-gray-900"
          }`}
        />
        <button
          type="submit"
          className={`p-2 rounded font-semibold transition ${
            darkMode
              ? "bg-gray-600 hover:bg-gray-500 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Add User
        </button>
      </form>
    </div>
  );
}        



  
 

 
    
