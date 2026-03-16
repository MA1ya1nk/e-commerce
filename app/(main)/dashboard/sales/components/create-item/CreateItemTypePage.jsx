'use client';

import React from 'react';
import { ArrowLeft, Bell, LayoutGrid, ShoppingBag, BadgeDollarSign, Heart, MessageCircle, Settings, HelpCircle, LogOut } from 'lucide-react';

const navItems = [
  { icon: LayoutGrid,      label: 'Dashbord'   },
  { icon: ShoppingBag,     label: 'Purchasing' },
  { icon: BadgeDollarSign, label: 'Sales', active: true },
  { icon: Heart,           label: 'Favourites' },
  { icon: MessageCircle,   label: 'Chat'       },
  { icon: Settings,        label: 'Setting'    },
];

const adTypes = [
  {
    key: 'item',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="24" fill="#E8EBF5"/>
        <path d="M16 18h16v14a2 2 0 01-2 2H18a2 2 0 01-2-2V18z" stroke="#1F3A93" strokeWidth="1.8" fill="none"/>
        <path d="M20 18v-2a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#1F3A93" strokeWidth="1.8" fill="none"/>
        <path d="M21 24h6M21 27h4" stroke="#1F3A93" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Item for sale',
    description: 'Create a single ad for one or more items for sale.',
  },
  {
    key: 'vehicle',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="24" fill="#E8EBF5"/>
        <path d="M13 28h22M15 28l2-6h14l2 6" stroke="#1F3A93" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
        <path d="M19 22l1.5-4h7l1.5 4" stroke="#1F3A93" strokeWidth="1.5" fill="none"/>
        <circle cx="18" cy="30" r="2.2" stroke="#1F3A93" strokeWidth="1.8" fill="none"/>
        <circle cx="30" cy="30" r="2.2" stroke="#1F3A93" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
    title: 'Vehicle for sale',
    description: 'Sell a car, truck, or other type of vehicle.',
  },
  {
    key: 'realestate',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="24" fill="#E8EBF5"/>
        <path d="M14 34V22l10-8 10 8v12H14z" stroke="#1F3A93" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
        <rect x="20" y="26" width="8" height="8" rx="1" stroke="#1F3A93" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Real estate for sale\nor rent',
    description: 'Place an ad for a house or apartment for sale or rent.',
  },
];

export default function CreateItemTypePage({ onSelect, onBack }) {
  return (
    <div className="flex bg-white min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── SIDEBAR (icon-only) ── */}
      <aside className="w-[75px] bg-white border-r border-gray-100 flex flex-col items-center py-6 shrink-0 min-h-screen">
        <div className="w-9 h-9 bg-gray-200 rounded-full mb-10" />
        <nav className="flex-1 flex flex-col items-center gap-2">
          {navItems.map(({ icon: Icon, active, label }) => (
            <div key={label}
              className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors
                ${active ? 'bg-orange-50 text-[#FF8A65]' : 'text-gray-400 hover:bg-gray-50'}`}>
              <Icon size={20} />
            </div>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-2 pt-4 border-t border-gray-100 w-full">
          <div className="w-10 h-10 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-lg">
            <HelpCircle size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-lg">
            <LogOut size={20} />
          </div>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-[56px] flex justify-end items-center px-8 gap-6 border-b border-gray-100">
          <Bell size={18} className="text-gray-400 cursor-pointer" />
          <div className="flex items-center gap-1 text-gray-500 cursor-pointer text-[13px]">
            <span>Go to marketplace</span><span className="text-[11px]">↗</span>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-10">
          {/* Back arrow */}
          <div className="w-full" style={{ maxWidth: '823px' }}>
            <button onClick={onBack}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mb-10 mt-4">
              <ArrowLeft size={20} />
            </button>
          </div>

          {/* Main container: 823×354, gap 50px */}
          <div style={{ width: '823px', gap: '50px' }} className="flex flex-col items-center">
            {/* Title */}
            <h2 style={{
              fontFamily: 'Inter', fontWeight: 600, fontSize: '24px',
              lineHeight: '100%', letterSpacing: '0%', color: '#1F3A93'
            }}>
              Choose the type of ad
            </h2>

            {/* Three cards */}
            <div className="flex gap-[50px]">
              {adTypes.map(({ key, icon, title, description }) => (
                <button
                  key={key}
                  onClick={() => onSelect(key)}
                  style={{
                    width: '241px', height: '275px', gap: '15px',
                    paddingTop: '20px', paddingRight: '15px',
                    paddingBottom: '20px', paddingLeft: '15px',
                    borderRadius: '10px',
                    backgroundColor: '#F3F4F6',
                  }}
                  className="flex flex-col items-center justify-start hover:bg-gray-200 transition-colors cursor-pointer border-0 outline-none"
                >
                  <div className="mb-2">{icon}</div>

                  <p style={{
                    fontFamily: 'Inter', fontWeight: 600, fontSize: '20px',
                    lineHeight: '100%', letterSpacing: '0%',
                    textAlign: 'center', color: '#1F3A93',
                    whiteSpace: 'pre-line',
                  }}>
                    {title}
                  </p>

                  <p style={{
                    fontFamily: 'Inter', fontWeight: 400, fontSize: '18px',
                    lineHeight: '100%', letterSpacing: '0%',
                    textAlign: 'center', color: '#374151',
                  }}>
                    {description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}