// import React from 'react';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// const Footer = () => {
//   return (
//     <footer 
//       className={`${inter.className} bg-[#F9FAFB] text-[#374151] relative`}
//       style={{ 
//         width: '1280px', 
//         height: '340px', 
//          // Positioned 1713px from top
//         opacity: '1' 
//       }}
//     >
//       <div className="flex justify-between px-[60px] pt-[50px]">
        
//         {/* Column 1: Brand & Description */}
//         <div className="w-[320px]">
//           <div className="flex items-center gap-[12px] mb-[16px]">
//             {/* Logo Placeholder */}
//             <img src="/footer/temp.png" alt="ShopRise Logo" width="32" height="32" />
//             <span className="text-[18px] font-semibold text-[#111827]">ShopRise</span>
//           </div>
          
//           <p className="text-[14px] leading-[20px] font-normal text-[#4B5563] mb-[24px]">
//             ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, 
//             unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, 
//             our core principle remains unchanged: to empower each user to buy and sell with confidence.
//           </p>

//           <button className="bg-[#284297] text-white px-[24px] py-[12px] rounded-full text-[14px] font-semibold">
//             Sell on ShopRise
//           </button>
//         </div>

//         {/* Column 2: Navigation */}
//         <div className="flex flex-col gap-[16px] text-[14px]">
//           <a href="/" className="text-[#FF8A65] font-medium">All listing</a>
//           <a href="/about" className="hover:text-black">About us</a>
//           <a href="/faq" className="hover:text-black">FAQ</a>
//           <a href="/blog" className="hover:text-black">Blog</a>
//         </div>

//         {/* Column 3: Legal */}
//         <div className="flex flex-col gap-[16px] text-[14px]">
//           <a href="#" className="hover:text-black">Privacy Policy</a>
//           <a href="#" className="hover:text-black">Terms and Conditions</a>
//           <a href="#" className="hover:text-black">Shipping Policy</a>
//         </div>

//         {/* Column 4: Newsletter & Socials */}
//         <div className="w-[340px]">
//           <h4 className="text-[16px] font-medium mb-[16px]">Suscribe to our newsletter</h4>
          
//           <div className="relative flex items-center mb-[24px]">
//             <input 
//               type="email" 
//               placeholder="Email" 
//               className="w-full h-[48px] px-[20px] rounded-full border border-[#E5E7EB] bg-[#F3F4F6] outline-none text-[14px]"
//             />
//             <button className="absolute right-[4px] bg-[#FF8A65] text-white h-[40px] px-[20px] rounded-full text-[14px]">
//               Suscribe
//             </button>
//           </div>

//           <div className="flex flex-col justify-end gap-[16px]">
//             {/* Facebook Icon Placeholder */}
//             <img src="/footer/facebook.png" alt="Facebook" width="24" height="24" className="cursor-pointer" />
//             {/* Instagram Icon Placeholder */}
//             <img src="/footer/instagram.png" alt="Instagram" width="24" height="24" className="cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright Bar */}
//       <div className="absolute bottom-[30px] right-[60px] text-[14px] text-[#374151] font-normal">
//         <span>© All Right Reserved by | ShopRise | Copyright 2023</span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer
      className="w-full bg-[#F3F4F6]"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* ── Main footer content ── */}
      <div
        className="mx-auto px-6 pt-12 pb-8"
        style={{ maxWidth: '1280px' }}
      >
        <div className="grid grid-cols-4 gap-10">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D9D9D9] rounded-full shrink-0" />
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>ShopRise</span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '14px', fontWeight: 400, color: '#4B5563', lineHeight: '1.7' }}>
              ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised
              quality, unparalleled user experience, and unwavering integrity. As we continue to grow
              and evolve, our core principle remains unchanged: to empower each user to buy and sell
              with confidence.
            </p>

            {/* CTA Button */}
            <div>
              <Link href="/dashboard/sales">
                <button
                  style={{
                    backgroundColor: '#284297',
                    color: 'white',
                    padding: '12px 28px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  className="hover:opacity-90 transition-opacity"
                >
                  Sell on ShopRise
                </button>
              </Link>
            </div>
          </div>

          {/* ── Col 2: Site Links ── */}
          <div className="flex flex-col gap-4 pt-1">
            <Link href="/"
              style={{ fontSize: '15px', fontWeight: 500, color: '#FF8A65', textDecoration: 'none' }}>
              All listing
            </Link>
            <Link href="/about"
              style={{ fontSize: '15px', fontWeight: 400, color: '#374151', textDecoration: 'none' }}
              className="hover:text-gray-900 transition-colors">
              About us
            </Link>
            <Link href="/faqs"
              style={{ fontSize: '15px', fontWeight: 400, color: '#374151', textDecoration: 'none' }}
              className="hover:text-gray-900 transition-colors">
              FAQ
            </Link>
            <Link href="/blog"
              style={{ fontSize: '15px', fontWeight: 400, color: '#374151', textDecoration: 'none' }}
              className="hover:text-gray-900 transition-colors">
              Blog
            </Link>
          </div>

          {/* ── Col 3: Legal Links ── */}
          <div className="flex flex-col gap-4 pt-1">
            <Link href="/privacy"
              style={{ fontSize: '15px', fontWeight: 400, color: '#374151', textDecoration: 'none' }}
              className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms"
              style={{ fontSize: '15px', fontWeight: 400, color: '#374151', textDecoration: 'none' }}
              className="hover:text-gray-900 transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/shipping"
              style={{ fontSize: '15px', fontWeight: 400, color: '#374151', textDecoration: 'none' }}
              className="hover:text-gray-900 transition-colors">
              Shipping Policy
            </Link>
          </div>

          {/* ── Col 4: Newsletter + Social ── */}
          <div className="flex flex-col gap-5 pt-1">
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>
              Suscribe to our newsletter
            </p>

            {/* Email input + button */}
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1 border border-gray-200"
              style={{ height: '46px' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 outline-none bg-transparent text-[14px] text-gray-600 placeholder-gray-400"
              />
              <button
                style={{
                  backgroundColor: '#FF8A65',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                className="hover:opacity-90 transition-opacity shrink-0"
              >
                Suscribe
              </button>
            </div>

            {/* Social icons */}
            <div className="flex flex-col gap-3">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: '#284297' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: '#284297' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t border-gray-200 py-4"
        style={{ backgroundColor: '#F3F4F6' }}
      >
        <div
          className="mx-auto px-6 flex justify-end"
          style={{ maxWidth: '1280px' }}
        >
          <p style={{ fontSize: '13px', color: '#6B7280', fontWeight: 400 }}>
            © All Right Reserved by | ShopRise | Copyright 2023
          </p>
        </div>
      </div>
    </footer>
  );
}