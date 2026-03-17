// import React from 'react';
// import { Inter } from 'next/font/google';
// import Link from 'next/dist/client/link';

// const inter = Inter({ subsets: ['latin'] });

// const Navbar = () => {
//   return (
//     <nav className="w-[1229px] h-[40px] mt-[17px] mb-[20px] mx-auto flex items-center justify-between" 
//          style={{ 
//            width: '1229px', 
//            height: '40px', 
//            top: '17px', 
//            left: '25px',
//            opacity: '1' 
//          }}>
      
//       {/* Left Section: Logo */}
//       <div className="flex items-center gap-[12px]">
//         <div className="w-[32px] h-[32px] bg-[#D9D9D9] rounded-full" />
//         <span className="text-[18px] font-semibold leading-none text-[#111827]">
//           ShopRise
//         </span>
//       </div>

//       {/* Middle Section: Navigation Links */}
//       {/* Gap is set to 321px as per your spec */}
//       <div className="flex items-center ml-[321px] gap-[32px]">
//         <a href="/" className="text-[16px] font-medium text-[#FF8A65]">All listing</a>
//         <a href="/about" className="text-[16px] font-medium text-[#374151] hover:text-black">About us</a>
//         <a href="/faqs" className="text-[16px] font-medium text-[#374151] hover:text-black">FAQ</a>
//         <a href="/blog" className="text-[16px] font-medium text-[#374151] hover:text-black">Blog</a>
//       </div>

//       {/* Right Section: CTA Button */}
//       <Link href="/signup">
//       <div className="ml-auto">
//         <button className="bg-[#284297] text-white px-[24px] py-[10px] rounded-full text-[14px] font-semibold transition-all hover:bg-[#1e3276]">
//           Sign In
//         </button>
//       </div>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;



'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Mail, Bell, Settings, LogOut, LayoutGrid } from 'lucide-react';
import { useAuth } from './AuthContext';

const navLinks = [
  { label: 'All listing', href: '/'      },
  { label: 'About us',    href: '/about' },
  { label: 'FAQ',         href: '/faqs'  },
  { label: 'Blog',        href: '/blog'  },
];

export default function Navbar() {
  const { user, logout }  = useAuth();
  const pathname          = usePathname();
  const router            = useRouter();
  const [open, setOpen]   = useState(false);
  const dropRef           = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    router.push('/');
  };

  return (
    <nav
      className="w-full bg-white border-b border-gray-200"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: '1229px', height: '74px', paddingLeft: '25px', paddingRight: '25px' }}
      >

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0" style={{ textDecoration: 'none' }}>
          <div className="w-8 h-8 bg-[#D9D9D9] rounded-full" />
          <span style={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}>ShopRise</span>
        </Link>

        {/* ── Nav Links ── */}
        <div className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: isActive ? '#FF8A65' : '#374151',
                  textDecoration: 'none',
                }}
                className="hover:opacity-80 transition-opacity"
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* ── Right Side ── */}
        {!user ? (

          /* ── LOGGED OUT: Sign In button ── */
          <Link href="/signup" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: '#284297',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          </Link>

        ) : (

          /* ── LOGGED IN: Mail + Bell + Name + Avatar ── */
          <div className="flex items-center gap-4">

            {/* Mail */}
            <Link href="/dashboard/chat" style={{ color: '#6B7280', display: 'flex' }}>
              <Mail size={20} />
            </Link>

            {/* Bell */}
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', display: 'flex', padding: 0 }}>
              <Bell size={20} />
            </button>

            {/* Name + Avatar + Dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setOpen(o => !o)}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>
                  {user.name}
                </span>
                <div
                  className="overflow-hidden bg-gray-200 rounded-full shrink-0"
                  style={{ width: '36px', height: '36px' }}
                >
                  <img
                    src={'/purchase(2).png'}
                    alt="avatar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </button>

              {/* Dropdown */}
              {open && (
                <div
                  className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-[10px] shadow-lg z-50 overflow-hidden"
                  style={{ width: '180px' }}
                >
                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    style={{ fontSize: '14px', color: '#374151', textDecoration: 'none' }}
                  >
                    <LayoutGrid size={15} style={{ color: '#9CA3AF' }} />
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/setting"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    style={{ fontSize: '14px', color: '#374151', textDecoration: 'none' }}
                  >
                    <Settings size={15} style={{ color: '#9CA3AF' }} />
                    Settings
                  </Link>
                  <div style={{ borderTop: '1px solid #F3F4F6' }} />
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors"
                    style={{ fontSize: '14px', color: '#EF4444', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <LogOut size={15} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}