import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row border border-gray-200">
      {/* Left Side - Text Content */}
      <div className="w-full sm:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <hr className="w-12 border-none h-0.5 bg-gray-800" />
            <p className="font-medium text-sm md:text-base text-gray-800">
              OUR BEST SELLERS
            </p>
          </div>
          <h1 className="font-plata text-5xl md:text-6xl lg:text-7xl my-4 md:my-6">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <hr className="w-24 border-none h-0.5 bg-gray-800" />
          </div>
        </div>
      </div>
      {/* Right Side - Image */}
      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero_img}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
