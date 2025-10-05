import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const cartCount = 0; // Placeholder

  return (
    // This main div now has THREE direct children
    <div className="w-full py-4 flex items-center justify-between font-medium">

      {/* Child 1: The Logo */}
      <Link to="/" onClick={() => setActiveMenu("home")}>
        <img src={assets.logo} alt="logo" className="w-32" />
      </Link>

      {/* Child 2: The Menu UL */}
      <ul className="hidden sm:flex items-center gap-5 text-gray-600">
        <li onClick={() => setActiveMenu("home")} className="flex flex-col items-center gap-1 cursor-pointer">
          <NavLink to="/">HOME</NavLink>
          {activeMenu === "home" ? <hr className="w-full border-none h-0.5 bg-black rounded-sm" /> : <></>}
        </li>
        <li onClick={() => setActiveMenu("collection")} className="flex flex-col items-center gap-1 cursor-pointer">
          <NavLink to="/collection">COLLECTION</NavLink>
          {activeMenu === "collection" ? <hr className="w-full border-none h-0.5 bg-black rounded-sm" /> : <></>}
        </li>
        <li onClick={() => setActiveMenu("about")} className="flex flex-col items-center gap-1 cursor-pointer">
          <NavLink to="/about">ABOUT</NavLink>
          {activeMenu === "about" ? <hr className="w-full border-none h-0.5 bg-black rounded-sm" /> : <></>}
        </li>
        <li onClick={() => setActiveMenu("contact")} className="flex flex-col items-center gap-1 cursor-pointer">
          <NavLink to="/contact">CONTACT</NavLink>
          {activeMenu === "contact" ? <hr className="w-full border-none h-0.5 bg-black rounded-sm" /> : <></>}
        </li>
      </ul>

      {/* Child 3: The Icons Div */}
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="search" className="w-6 cursor-pointer" />
        <div className="relative group">
          <img src={assets.profile_icon} alt="profile" className="w-6 cursor-pointer" />
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-7" />
          <div className="absolute -top-1 -right-2 w-4 h-4 flex items-center justify-center text-xs text-white bg-red-500 rounded-full">
            {cartCount}
          </div>
        </Link>
        <img onClick={() => setIsMenuOpen(true)} src={assets.menu_icon} alt="menu" className="w-6 cursor-pointer sm:hidden" />
      </div>

      {/* Mobile Menu Sidebar (Positioned independently) */}
      <div className={`fixed top-0 right-0 h-full bg-white z-50 shadow-lg transition-all duration-300 ease-in-out sm:hidden ${isMenuOpen ? 'w-3/4' : 'w-0'}`}>
        <div className='p-4 flex justify-end'>
            <img onClick={() => setIsMenuOpen(false)} src={assets.cross_icon} alt="close" className="w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
            <ul className="flex flex-col items-start gap-4 p-4">
                <li className='w-full'><NavLink className="block w-full p-2" to="/" onClick={() => setIsMenuOpen(false)}>HOME</NavLink></li>
                <li className='w-full'><NavLink className="block w-full p-2" to="/collection" onClick={() => setIsMenuOpen(false)}>COLLECTION</NavLink></li>
                <li className='w-full'><NavLink className="block w-full p-2" to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</NavLink></li>
                <li className='w-full'><NavLink className="block w-full p-2" to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</NavLink></li>
            </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
