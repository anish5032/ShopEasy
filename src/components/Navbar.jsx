import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { IoBag } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex shadow-xl mb-4 justify-between items-center px-6 py-3 bg-white">
      <div className="logo flex items-center relative">
        <IoBag className="w-8 h-8 mb-2" />
        <img className="w-40 ml-5" src={assets.logo} alt="" />
      </div>

      <div className="search">
        <input
          className="px-4 w-[700px] py-2 rounded-full shadow-md focus:shadow-lg focus:outline-none border border-gray-200"
          type="search"
          placeholder="Search For Products"
        />
      </div>

      <ul className="flex items-center justify-center gap-6">
        <NavLink
          to="/"
          className="text-gray-500 hover:text-black flex flex-col items-center justify-center"
        >
          <p>Home</p>
          <hr className=" w-8 h-0.5 bg-[#414141] hidden"></hr>
        </NavLink>
        <NavLink
          to="/Category"
          className="text-gray-500 hover:text-black flex flex-col items-center justify-center"
        >
          <p>Category</p>
          <hr className="w-8 h-0.5 bg-[#414141] hidden"></hr>
        </NavLink>
        <NavLink
          to="/about"
          className="text-gray-500 hover:text-black flex flex-col items-center justify-center"
        >
          <p>About Us</p>
          <hr className="w-8 h-0.5 bg-[#414141] hidden"></hr>
        </NavLink>
        <NavLink
          to="/contact"
          className="text-gray-500 hover:text-black flex flex-col items-center justify-center"
        >
          <p>Contact</p>
          <hr className="w-8 h-0.5 bg-[#414141] hidden"></hr>
        </NavLink>
      </ul>

      <div className="flex gap-6">
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-2">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 text-gray-500 bg-slate-100 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <IoCartSharp className="w-6 h-6"/>
          <p className="absolute w-4 h-4 text-xs bg-black text-white rounded-full px-1 left-[13px] top-[-6px]">0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
