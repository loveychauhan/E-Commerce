import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

export default function Sidebar({ setVisible, visible }) {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-500 ease-in-out overflow-hidden shadow-2xl ${
        visible ? "w-full sm:w-80" : "w-0"
      }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div
          className="flex items-center gap-3 p-5 border-b border-gray-700 cursor-pointer hover:bg-gray-700/50 transition-all duration-200"
          onClick={() => setVisible(false)}>
          <img
            className="h-5 rotate-180 transition-transform duration-300 hover:scale-110"
            src={assets.dropdown_icon}
            alt="Back"
          />
          <p className="font-semibold text-lg tracking-tight">Close Menu</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-5 py-8 gap-5 text-xl font-medium tracking-wide">
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="relative px-3 py-1 rounded-lg hover:text-red-400 transition-all duration-300 group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="relative px-3 py-1 rounded-lg hover:text-red-400 transition-all duration-300 group">
            Collection
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="relative px-3 py-1 rounded-lg hover:text-red-400 transition-all duration-300 group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="relative px-3 py-1 rounded-lg hover:text-red-400 transition-all duration-300 group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="mt-auto p-5 border-t border-gray-700 text-sm text-gray-400 font-light tracking-wide">
          © 2025 CodeWare Store. All rights reserved.
        </div>
      </div>
    </div>
  );
}
