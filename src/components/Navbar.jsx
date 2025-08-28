import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { ShopContext } from "../context/ShopContext";

export default function Navbar({ setSearchbtnClick }) {
  const [visible, setVisible] = useState(false);
  const { cartQuantity } = useContext(ShopContext);
  return (
    <>
      <header className="flex items-center justify-between z-50  fixed top-0 px-4 bg-white md:px-16 py-2 md:px-4 w-full shadow-md backdrop-md ">
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
        <Sidebar setVisible={setVisible} visible={visible} />
      </header>
    </>
  );
}
