import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Footer = () => {
  return (
    <footer 
      className={`${inter.className} bg-[#F9FAFB] text-[#374151] relative`}
      style={{ 
        width: '1280px', 
        height: '340px', 
         // Positioned 1713px from top
        opacity: '1' 
      }}
    >
      <div className="flex justify-between px-[60px] pt-[50px]">
        
        {/* Column 1: Brand & Description */}
        <div className="w-[320px]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            {/* Logo Placeholder */}
            <img src="/footer/temp.png" alt="ShopRise Logo" width="32" height="32" />
            <span className="text-[18px] font-semibold text-[#111827]">ShopRise</span>
          </div>
          
          <p className="text-[14px] leading-[20px] font-normal text-[#4B5563] mb-[24px]">
            ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, 
            unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, 
            our core principle remains unchanged: to empower each user to buy and sell with confidence.
          </p>

          <button className="bg-[#284297] text-white px-[24px] py-[12px] rounded-full text-[14px] font-semibold">
            Sell on ShopRise
          </button>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-[16px] text-[14px]">
          <a href="/" className="text-[#FF8A65] font-medium">All listing</a>
          <a href="/about" className="hover:text-black">About us</a>
          <a href="/faq" className="hover:text-black">FAQ</a>
          <a href="/blog" className="hover:text-black">Blog</a>
        </div>

        {/* Column 3: Legal */}
        <div className="flex flex-col gap-[16px] text-[14px]">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms and Conditions</a>
          <a href="#" className="hover:text-black">Shipping Policy</a>
        </div>

        {/* Column 4: Newsletter & Socials */}
        <div className="w-[340px]">
          <h4 className="text-[16px] font-medium mb-[16px]">Suscribe to our newsletter</h4>
          
          <div className="relative flex items-center mb-[24px]">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full h-[48px] px-[20px] rounded-full border border-[#E5E7EB] bg-[#F3F4F6] outline-none text-[14px]"
            />
            <button className="absolute right-[4px] bg-[#FF8A65] text-white h-[40px] px-[20px] rounded-full text-[14px]">
              Suscribe
            </button>
          </div>

          <div className="flex flex-col justify-end gap-[16px]">
            {/* Facebook Icon Placeholder */}
            <img src="/footer/facebook.png" alt="Facebook" width="24" height="24" className="cursor-pointer" />
            {/* Instagram Icon Placeholder */}
            <img src="/footer/instagram.png" alt="Instagram" width="24" height="24" className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="absolute bottom-[30px] right-[60px] text-[14px] text-[#374151] font-normal">
        <span>© All Right Reserved by | ShopRise | Copyright 2023</span>
      </div>
    </footer>
  );
};

export default Footer;