import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { shopContext } from "../context/contextProvider";

export default function Navbar({ setSearchbtnClick }) {
  const [visible, setVisible] = useState(false);
  const { cartQuantity } = useContext(shopContext);
  return (
    <>
      {/* <header className="flex items-center justify-between z-50  fixed top-0 px-4 bg-white md:px-16 py-2 md:px-4 w-full shadow-md backdrop-md ">
        <div className="sm:max-w-[180px] max-w-[120px] ">
          <NavLink to="/">
            <img className="w-full" src={assets.logo} alt="" />
          </NavLink>
        </div>
        <div>
          <ul className="flex gap-4 md:gap-8 hidden sm:flex">
            <NavLink to="/" className="w-full">
              <li>Home</li>
            </NavLink>
            <NavLink to="/collection" className="w-full">
              <li>Collections</li>
            </NavLink>
            <NavLink to="/about" className="w-full">
              <li>About</li>
            </NavLink>
            <NavLink to="/contact" className="w-full">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4 sm:gap-8">
          <img
            onClick={() => setSearchbtnClick((prev) => !prev)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="search icon"
          />
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="search icon"
            />
          </Link>

          <Link to="/cart" className="relative ">
            <img
              src={assets.cart_icon}
              alt="Cart"
              className="w-6 h-6 cursor-pointer transition-transform duration-300 "
            />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {cartQuantity}
            </span>
          </Link>

          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 sm:hidden block  cursor-pointer"
            alt=""
          />
        </div>
        {/* sidebar */}
      {/* <Sidebar setVisible={setVisible} visible={visible} /> */}
      {/* </header> */}

      <header className="flex items-center justify-between z-50 fixed top-0 w-full px-6 md:px-16 py-3 shadow-md bg-white ">
        <div className="max-w-[140px] sm:max-w-[200px]">
          <NavLink to="/">
            <h1 className="text-3xl font-bold text-black ">Neu</h1>
          </NavLink>
        </div>
        <div>
          <ul className="hidden sm:flex gap-6 md:gap-10 text-lg font-medium tracking-tight">
            <NavLink
              to="/"
              className="relative py-1 px-2 hover:text-red-400 transition-all duration-300 group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="/collection"
              className="relative py-1 px-2 hover:text-red-400 transition-all duration-300 group">
              Collections
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="/about"
              className="relative py-1 px-2 hover:text-red-400 transition-all duration-300 group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="/contact"
              className="relative py-1 px-2 hover:text-red-400 transition-all duration-300 group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-5 sm:gap-8">
          <img
            onClick={() => setSearchbtnClick((prev) => !prev)}
            src={assets.search_icon}
            className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80"
            alt="Search"
          />
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80"
              alt="Profile"
            />
          </Link>
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt="Cart"
              className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80"
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {cartQuantity}
            </span>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-4 h-4 sm:hidden block cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80"
            alt="Menu"
          />
        </div>
        {/* Sidebar */}
        <Sidebar setVisible={setVisible} visible={visible} />
      </header>
    </>
  );
}
