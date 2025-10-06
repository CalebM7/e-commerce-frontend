import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OurPolicy = () => {
  return (
    <div id="about" className="my-24 flex flex-col sm:flex-row justify-around items-center gap-8 text-center text-sm text-gray-600">
      <div className="flex flex-col items-center gap-2">
        <img src={assets.exchange_icon} alt="Exchange" className="w-12 mb-2" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer a hassle-free exchange policy</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={assets.quality_icon} alt="Quality" className="w-12 mb-2" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide a 7-day free return policy</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={assets.support_img} alt="Support" className="w-12 mb-2" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
