import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react"; // ✅ icons from lucide-react

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`mt-10 pt-10 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Top Section */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left border-b border-gray-700 pb-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <MapPin className="text-orange-500 w-6 h-6" />
          <h3 className="font-semibold text-lg">Find us</h3>
          <p className="text-sm">Krishna puri matwari hazaribah jharkhand</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <Phone className="text-orange-500 w-6 h-6" />
          <h3 className="font-semibold text-lg">Call us</h3>
          <p className="text-sm">+91 6203030416</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <Mail className="text-orange-500 w-6 h-6" />
          <h3 className="font-semibold text-lg">Mail us</h3>
          <p className="text-sm">kumarraunik123@gmail.com</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* Left - Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-orange-500">rk</span> WEB{" "}
            <span className="text-black font-light">DESIGNER</span>
          </h2>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet facilisis urna. Praesent ac gravida libero.
          </p>
        </div>

        {/* Center - Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b-2 border-orange-500 inline-block">
            Useful Links
          </h3>
          <ul className="space-y-2 mt-2">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/add-user"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Add User
              </Link>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b-2 border-orange-500 inline-block">
            Subscribe
          </h3>
          <p className="text-sm mb-3">
            Don’t miss our latest updates! Subscribe below:
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className={`p-2 rounded w-full focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-800 text-white focus:ring-orange-400"
                  : "bg-white text-gray-800 focus:ring-orange-500"
              }`}
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`text-center py-4 border-t ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved. Designed by{" "}
          <span className="text-orange-500 font-semibold">Raunik</span>.
        </p>
      </div>
    </footer>
  );
}       
