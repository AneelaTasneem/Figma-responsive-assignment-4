'use client'
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div className="w-full h-[60px] flex items-center px-[20px] bg-white border-b border-gray-300 relative">
      {/* Hamburger Icon (Visible on mobile) */}
      <div className="lg:hidden block cursor-pointer" onClick={toggleMenu}>
        <div className="w-[30px] h-[3px] bg-gray-600 my-[5px]"></div>
        <div className="w-[30px] h-[3px] bg-gray-600 my-[5px]"></div>
        <div className="w-[30px] h-[3px] bg-gray-600 my-[5px]"></div>
      </div>

      {/* Main Heading (SHOP.CO) */}
      <div className="flex items-center flex-1 justify-start">
        <h2 className="font-integral-cf text-[32px] font-bold text-left">
          SHOP.CO
        </h2>
      </div>

      {/* Navigation Links (Desktop and Mobile) */}
      <div className="lg:flex ml-[50px] gap-[24px] font-satoshi text-[16px] font-normal text-gray-600">
        {/* Dropdown menu for mobile */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md z-10 lg:hidden`}
        >
          <ul className="flex flex-col items-start gap-[16px] py-[10px] px-[20px]">
            <li className="cursor-pointer hover:text-black">
              Shop <span>▼</span>
            </li>
            <li className="cursor-pointer hover:text-black">On Sale</li>
            <li className="cursor-pointer hover:text-black">New Arrivals</li>
            <li className="cursor-pointer hover:text-black">Brands</li>
          </ul>
        </div>

        {/* Desktop navigation links */}
        <ul className="hidden lg:flex gap-[24px]">
          <li className="cursor-pointer hover:text-black">
            Shop <span>▼</span>
          </li>
          <li className="cursor-pointer hover:text-black">On Sale</li>
          <li className="cursor-pointer hover:text-black">New Arrivals</li>
          <li className="cursor-pointer hover:text-black">Brands</li>
        </ul>
      </div>

      {/* Search Bar (Hidden on mobile, visible on larger screens) */}
      <div className="flex-1 mx-[50px] hidden lg:flex justify-end">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for products…"
            className="w-full h-[48px] pl-[45px] pr-[15px] bg-[#F0F0F0] rounded-[65px] outline-none text-gray-700"
          />
          <div className="absolute top-1/2 left-[15px] transform -translate-y-1/2">
            <Image src="/search.png" alt="Search" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Icons (Cart and User, visible on all screens) */}
      <div className="flex gap-[20px] items-center justify-end">
        <div className="cursor-pointer">
          <Image src="/add-cart.png" alt="Cart" width={24} height={24} />
        </div>
        <div className="cursor-pointer">
          <Image src="/user.png" alt="User" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
