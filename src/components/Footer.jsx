import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row bg-[#767474] p-4 md:justify-between md:items-center text-white mt-8">
        
        {/* Left Section */}
        <div className="flex flex-col mb-4 md:mb-0">
          <h2 className="prata-regular text-lg font-bold">ShopEasy</h2>
          <p className="text-sm">The best online shopping platform for all your needs</p>
          <p className="mt-1 text-[#323131] text-xs">©2025 ShopEasy. All rights reserved</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          
          {/* Social Icons */}
          <div className="flex gap-4 justify-center">
            <a href="#"><FaFacebook size={28} className="hover:text-blue-500 transition duration-500" /></a>
            <a href="#"><FaInstagram size={28} className="hover:text-pink-500 transition duration-500" /></a>
            <a href="#"><BsTwitterX size={28} className="hover:text-gray-300 transition duration-500" /></a>
            <a href="#"><FaPinterest size={28} className="hover:text-red-500 transition duration-500" /></a>
          </div>

          {/* Footer Links */}
          <div className="flex gap-4 text-sm justify-center">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
