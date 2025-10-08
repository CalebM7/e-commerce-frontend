import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const About = () => {
  return (
    <div className="my-24">
      <div className="text-center">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12 my-16">
        <div className="flex-1">
          <img src={assets.about_img} alt="About Us" className="rounded-lg" />
        </div>
        <div className="flex-1 text-gray-600 leading-relaxed">
          <p className="mb-4">
            Forever Was Born Out Of A Passion For Innovation And A Desire To
            Revolutionize The Way People Shop Online. Our Journey Began With A
            Simple Idea: To Provide A Platform Where Customers Can Seamlessly
            Discover, Explore, And Purchase A Wide Range Of Products From The
            Comfort Of Their Homes.
          </p>
          <p className="mb-6">
            Since Our Inception, We've Worked Tirelessly To Curate A Diverse
            Selection Of High-Quality Products That Cater To Every Taste And
            Preference. From Fashion And Beauty To Electronics And Home
            Essentials, We Offer An Extensive Collection Sourced From Trusted
            Brands And Suppliers.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h3>
          <p>
            Our Mission At Forever Is To Empower Customers With Choice,
            Convenience, And Confidence. We Strive To Create A Shopping
            Experience That Exceeds Expectations, From Browsing And Ordering To
            Delivery And Beyond.
          </p>
        </div>
      </div>
      <div className="mt-24">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="grid md:grid-cols-3 my-16 text-center">
        <div className="border px-8 py-16 hover:bg-gray-100 transition-colors cursor-pointer">
          <h4 className="font-semibold text-lg mb-4">QUALITY ASSURANCE:</h4>
          <p className="text-gray-600">
            We Meticulously Select And Vet Each Product to Ensure It Meets Our
            Stringent Quality Standards.
          </p>
        </div>
        <div className="border-t border-b border-r px-8 py-16 hover:bg-gray-100 transition-colors cursor-pointer">
          <h4 className="font-semibold text-lg mb-4">CONVENIENCE:</h4>
          <p className="text-gray-600">
            Wth Our User-Friendly Interface And Streamlined Ordering Process,
            Shopping Has Never Been Easier.
          </p>
        </div>
        <div className="border-t border-b border-r px-8 py-16 hover:bg-gray-100 transition-colors cursor-pointer">
          <h4 className="font-semibold text-lg mb-4">
            EXCEPTIONAL CUSTOMER SERVICE:
          </h4>
          <p className="text-gray-600">
            Our Team Of Dedicated Professionals Is Here To Assist You Every
            Step, Ensuring Your Satisfaction Is Our Top Priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
