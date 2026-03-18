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

// Sample Notification Data
const notifications = [
  { id: 1, type: 'Sell', title: 'Your item [Item Name] has been sold to [Buyer\'s Name]. Please proceed with shipping as soon as possible', time: '1 hour ago', status: 'Unread' },
  { id: 2, type: 'Purchase', title: 'You have purchased the item [Item Name] from [Seller\'s Name]. Thank you for your purchase!', time: '1 hour ago', status: 'Unread' },
  { id: 3, type: 'Sell', title: 'You have received a payment from [Buyer\'s Name] for the item [Item Name].', time: '1 hour ago', status: 'Read' },
  { id: 4, type: 'Message', title: 'You have received a message from [User\'s Name]. Check your inbox to respond.', time: '1 hour ago', status: 'Read' },
];

export default function Navbar() {
  const { user, logout }  = useAuth();
  const pathname          = usePathname();
  const router            = useRouter();
  const [open, setOpen]   = useState(false);
  const [showNotifications, setShowNotifications] = useState(false); // NEW STATE
  const dropRef           = useRef(null);
  const bellRef           = useRef(null); // NEW REF

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setOpen(false);
      if (bellRef.current && !bellRef.current.contains(e.target)) setShowNotifications(false);
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
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-full flex items-center justify-between px-6 h-[74px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" style={{ textDecoration: 'none' }}>
          <div className="w-8 h-8 bg-[#D9D9D9] rounded-full" />
          <span style={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}>ShopRise</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link key={label} href={href} style={{ fontSize: '16px', fontWeight: 500, color: isActive ? '#FF8A65' : '#374151', textDecoration: 'none' }} className="hover:opacity-80 transition-opacity">
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        {!user ? (
          <Link href="/signin" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#284297', color: 'white', padding: '10px 24px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer' }} className="hover:opacity-90 transition-opacity">
              Sign In
            </button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/dashboard/chat" style={{ color: '#6B7280', display: 'flex' }}><Mail size={20} /></Link>

           {/* Notification Bell Section */}
<div ref={bellRef}>
  <button 
    onClick={() => setShowNotifications(!showNotifications)}
    style={{ background: 'none', border: 'none', cursor: 'pointer', color: showNotifications ? '#FF8A65' : '#6B7280', display: 'flex', padding: 0 }}
  >
    <Bell size={20} />
  </button>

  {showNotifications && (
    <div 
      className="fixed top-[74px] right-0 bg-white border-l border-b border-gray-200 shadow-2xl z-50 overflow-hidden h-[calc(100vh-74px)]"
      style={{ width: '380px' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[18px]">Notifications</span>
          <span className="bg-[#284297] text-white text-[11px] px-2 py-0.5 rounded-full">6</span>
        </div>
        <button className="text-[13px] text-[#FF8A65] font-medium hover:underline">Mark all as unread</button>
      </div>

      {/* Body - Scrollable area */}
      <div className="overflow-y-auto h-full pb-20">
        {notifications.map((n) => (
          <div key={n.id} className="p-5 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer relative">
            <div className="flex justify-between items-start mb-1">
              <span className="text-[#284297] font-bold text-[14px] uppercase tracking-tight">{n.type}</span>
              {n.status === 'Unread' && (
                 <span className="text-[11px] font-semibold text-[#284297] flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#284297] rounded-full" />
                    Unread
                 </span>
              )}
            </div>
            <p className="text-[13px] text-gray-700 leading-relaxed mb-2">
              {n.title}
            </p>
            <span className="text-[12px] text-gray-400">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

            {/* Profile Section */}
            <div className="relative" ref={dropRef}>
              <button onClick={() => setOpen(o => !o)} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{user.name}</span>
                <div className="overflow-hidden bg-gray-200 rounded-full shrink-0" style={{ width: '36px', height: '36px' }}>
                  <img src={'/purchase(2).png'} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </button>

              {open && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-[10px] shadow-lg z-50 overflow-hidden" style={{ width: '180px' }}>
                  <Link href="/dashboard" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors" style={{ fontSize: '14px', color: '#374151', textDecoration: 'none' }}>
                    <LayoutGrid size={15} style={{ color: '#9CA3AF' }} /> Dashboard
                  </Link>
                  <Link href="/dashboard/setting" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors" style={{ fontSize: '14px', color: '#374151', textDecoration: 'none' }}>
                    <Settings size={15} style={{ color: '#9CA3AF' }} /> Settings
                  </Link>
                  <div style={{ borderTop: '1px solid #F3F4F6' }} />
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors" style={{ fontSize: '14px', color: '#EF4444', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <LogOut size={15} /> Logout
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