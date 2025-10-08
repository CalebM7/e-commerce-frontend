import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const { getCartCount } = useContext(ShopContext);
  const location = useLocation();

  // Helper function to render a navigation item
  const renderNavItem = (link) => {
    const isHomePage = location.pathname === '/';

    // The COLLECTION link should always be a NavLink to the dedicated page
    if (link.name === 'COLLECTION') {
      return <NavLink to={link.pageRoute}>{link.name}</NavLink>;
    }

    // For other links, use ScrollLink on homepage and NavLink on other pages
    return isHomePage ? (
      <ScrollLink to={link.to} smooth={true} duration={500} offset={-80} className="cursor-pointer">{link.name}</ScrollLink>
    ) : (
      <NavLink to={link.pageRoute}>{link.name}</NavLink>
    );
  };

  const navLinks = [
    { to: "root", name: "HOME", pageRoute: "/" },
    { to: "collection", name: "COLLECTION", pageRoute: "/collection" },
    { to: "about", name: "ABOUT", pageRoute: "/about" }, // This will scroll on home, but needs a target page
    { to: "contact", name: "CONTACT", pageRoute: "/contact" } // This will scroll on home, but needs a target page
  ];

  return (
    <div className="w-full py-4 flex items-center justify-between font-medium">

      <Link to="/" onClick={() => setActiveMenu("home")}>
        <img src={assets.logo} alt="logo" className="w-32" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center gap-5 text-gray-600">
        {navLinks.map(link => (
            <li key={link.name} onClick={() => setActiveMenu(link.name.toLowerCase())} className="flex flex-col items-center gap-1 cursor-pointer">
                {renderNavItem(link)}
                {activeMenu === link.name.toLowerCase() ? <hr className="w-full border-none h-0.5 bg-black rounded-sm" /> : <></>}
            </li>
        ))}
      </ul>

      {/* Right Icons & Mobile Menu Trigger */}
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="search" className="w-6 cursor-pointer" />
        <div className="relative group">
          <img src={assets.profile_icon} alt="profile" className="w-6 cursor-pointer" />
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-7" />
          <div className="absolute -top-1 -right-2 w-4 h-4 flex items-center justify-center text-xs text-white bg-red-500 rounded-full">
            {getCartCount()}
          </div>
        </Link>
        <img onClick={() => setIsMenuOpen(true)} src={assets.menu_icon} alt="menu" className="w-6 cursor-pointer sm:hidden" />
      </div>

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full bg-white z-50 shadow-lg transition-all duration-300 ease-in-out sm:hidden ${isMenuOpen ? 'w-3/4' : 'w-0'}`}>
        <div className='p-4 flex justify-end'>
            <img onClick={() => setIsMenuOpen(false)} src={assets.cross_icon} alt="close" className="w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
            <ul className="flex flex-col items-start gap-4 p-4">
                {navLinks.map(link => (
                     <li key={link.name} className='w-full'>
                        <div onClick={() => setIsMenuOpen(false)} className="block w-full p-2">
                          {renderNavItem(link)}
                        </div>
                     </li>
                ))}
            </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;