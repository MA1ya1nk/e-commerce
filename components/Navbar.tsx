import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
  return (
    <nav className={`${inter.className} relative flex items-center bg-white`} 
         style={{ 
           width: '1229px', 
           height: '40px', 
           top: '17px', 
           left: '25px',
           opacity: '1' 
         }}>
      
      {/* Left Section: Logo */}
      <div className="flex items-center gap-[12px]">
        <div className="w-[32px] h-[32px] bg-[#D9D9D9] rounded-full" />
        <span className="text-[18px] font-semibold leading-none text-[#111827]">
          ShopRise
        </span>
      </div>

      {/* Middle Section: Navigation Links */}
      {/* Gap is set to 321px as per your spec */}
      <div className="flex items-center ml-[321px] gap-[32px]">
        <a href="#" className="text-[16px] font-medium text-[#FF8A65]">All listing</a>
        <a href="/about" className="text-[16px] font-medium text-[#374151] hover:text-black">About us</a>
        <a href="/faqs" className="text-[16px] font-medium text-[#374151] hover:text-black">FAQ</a>
        <a href="/blog" className="text-[16px] font-medium text-[#374151] hover:text-black">Blog</a>
      </div>

      {/* Right Section: CTA Button */}
      <div className="ml-auto">
        <button className="bg-[#284297] text-white px-[24px] py-[10px] rounded-full text-[14px] font-semibold transition-all hover:bg-[#1e3276]">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;