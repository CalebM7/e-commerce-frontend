import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div id="contact" className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        {/* ------ Left Section ------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Discover timeless elegance with Forever. We offer a curated collection of high-quality apparel and accessories, designed to elevate your style for every occasion.
          </p>
        </div>

        {/* ------ Center Section ------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* ------ Right Section ------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer">+1-212-456-7890</li>
            <li className="cursor-pointer">contact@forever.com</li>
          </ul>
        </div>
      </div>

      {/* ------- Copyright Text ------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 &copy; forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;