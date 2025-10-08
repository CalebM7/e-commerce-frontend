import React from 'react';
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'


const Contact = () => {
  return (
    <div className="my-24">
      <div className="text-center">
        <Title text1="CONTACT" text2="US" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12 my-16">
        <div className="flex-1">
          <img src={assets.contact_img} alt="Contact Us" className="rounded-lg" />
        </div>
        <div className="flex-1 text-gray-600 leading-relaxed">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">OUR STORE</h3>
            <p>5800 Willow Station</p>
            <p>Suite 350, Washington, USA</p>
            <p className="mt-2">Tel: +1-212-456-7890</p>
            <p>Email: contact@forever.com</p>
          </div>
          <div className="mb-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">CAREERS AT FOREVER</h3>
            <p className="mb-4">Learn more about our teams and job openings.</p>
            <button className="border border-gray-800 text-gray-800 px-6 py-2 hover:bg-gray-800 hover:text-white transition-colors">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact