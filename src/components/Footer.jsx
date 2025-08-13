import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex items-center justify-between p-6">
        <div className="left w-sm">
          <img className="w-40" src={assets.logo} alt="" />
          <p className="ml-4">
            "At ShopEasy, we believe shopping should be simple, enjoyable, and
            affordable. From everyday essentials to unique finds, we bring you
            quality products at prices you’ll love — all from the comfort of
            your home."
          </p>
        </div>

        <div className="middle">
          <h2 className="text-xl font-medium">COMPANY</h2>
          <ul className="flex flex-col gap-1 mt-4">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="right flex flex-col gap-6 mt-4">
          <div>
            <p className="mb-4 text-xl font-medium">GET IN TOUCH</p>
            <p className="text-gray-500 hover:underline cursor-pointer">
              +1 235546456
            </p>
            <p className="text-gray-500 hover:underline cursor-pointer">
              shopeasy@gmail.com
            </p>
          </div>

          <div className="logos flex gap-4">
            <FaFacebook
              className="cursor-pointer hover:text-blue-500 hover:scale-105 duration-400"
              size={30}
            />
            <FaInstagram
              className="cursor-pointer hover:text-pink-500 hover:scale-105 duration-400"
              size={30}
            />
            <BsTwitterX
              className="cursor-pointer hover:text-gray-500 hover:scale-105 duration-400"
              size={30}
            />
          </div>
        </div>
      </div>


      <div className="flex items-center flex-col mb-3">
        <hr className="w-3/4 border-t border-gray-300 my-4" />
        <p>Copyright 2025@ shopeasy.com-All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
