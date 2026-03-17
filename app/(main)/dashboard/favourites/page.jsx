'use client';

import React from 'react';
import NextLink from 'next/link';
import {
  LayoutGrid, ShoppingBag, BadgeDollarSign, Heart,
  MessageCircle, Settings, HelpCircle, LogOut, Bell,
} from 'lucide-react';

const navItems = [
  { icon: LayoutGrid,      label: 'Dashbord',   href: '/dashboard' },
  { icon: ShoppingBag,     label: 'Purchasing', href: '/dashboard/purchasing' },
  { icon: BadgeDollarSign, label: 'Sales',      href: '/dashboard/sales' },
  { icon: Heart,           label: 'Favourites', href: '/dashboard/favourites', active: true },
  { icon: MessageCircle,   label: 'Chat',       href: '/dashboard/chat' },
  { icon: Settings,        label: 'Setting',    href: '/dashboard/setting' },
];

const products = Array(15).fill(null);

const FavouritesPage = () => {
  return (
    <div className="flex bg-[#F9FAFB] min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── SIDEBAR ── */}
      <aside className="w-[210px] bg-white border-r border-gray-100 flex flex-col py-6 px-4 shrink-0 min-h-screen sticky top-0">
        <div className="flex items-center gap-2 px-2 mb-10">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <span className="font-bold text-[#111827] text-[18px]">ShopRise</span>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map(({ icon: Icon, label, href, active }) => (
            <NextLink key={label} href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                ${active ? 'bg-orange-50 text-[#FF8A65]' : 'text-gray-500 hover:bg-gray-50'}`}>
              <Icon size={18} />
              <span className="text-[14px] font-medium">{label}</span>
            </NextLink>
          ))}
        </nav>
        <div className="flex flex-col gap-1 pt-4 border-t border-gray-100">
          <NextLink href="/help" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
            <HelpCircle size={18} /><span className="text-[14px] font-medium">Help</span>
          </NextLink>
          <NextLink href="/logout" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
            <LogOut size={18} /><span className="text-[14px] font-medium">Logout</span>
          </NextLink>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-[56px] flex justify-end items-center px-8 gap-6 bg-white border-b border-gray-100">
          <Bell size={18} className="text-gray-400 cursor-pointer" />
          <NextLink href="/marketplace" className="flex items-center gap-1 text-gray-500 text-[13px] hover:text-gray-800 transition-colors">
            <span>Go to marketplace</span><span className="text-[11px]">↗</span>
          </NextLink>
        </header>

        <div className="w-full px-8 pt-6 pb-10">
          <h1 className="text-[22px] font-medium text-[#1F3A93] mb-6">Favourites</h1>

          {/* ✅ grid-cols-5 + w-full — no fixed pixel widths */}
          <div className="grid grid-cols-5 gap-[13px]">
            {products.map((_, index) => (
              <div key={index}
                className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer relative flex flex-col"
                style={{ height: '207px', borderRadius: '10px', border: '1px solid #E5E7EB', padding: '10px', gap: '10px' }}
              >
                {/* Image */}
                <div className="w-full bg-gray-100 rounded-[8px] overflow-hidden relative shrink-0" style={{ height: '100px' }}>
                  <img src="/main.png" alt="product" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 text-[#FF8A65]">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <h3 className="truncate" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', lineHeight: '100%', color: '#111827' }}>
                    Litter trolley sprayer
                  </h3>
                  <div className="flex justify-between items-center mt-0.5">
                    <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', color: '#1F3A93' }}>$9.99</span>
                    <span className="text-gray-400 text-[10px]">(Used)</span>
                  </div>
                  <span className="mt-0.5" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', color: '#6B7280' }}>
                    Los Angeles, CA
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FavouritesPage;