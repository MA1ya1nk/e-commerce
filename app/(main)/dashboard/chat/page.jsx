"use client";
import React, { useState } from 'react';
import NextLink from 'next/link';
import { 
  LayoutGrid, ShoppingBag, BadgeDollarSign, Heart, 
  MessageCircle, Settings, HelpCircle, LogOut,
  Search, Image as ImageIcon, Bell, 
} from 'lucide-react';

const FullChatInterface = () => {
  const [activeTab, setActiveTab] = useState('All');

  const navItems = [
    { icon: <LayoutGrid size={20} />,      label: 'Dashbord',   href: '/dashboard' },
    { icon: <ShoppingBag size={20} />,     label: 'Purchasing', href: '/dashboard/purchasing' },
    { icon: <BadgeDollarSign size={20} />, label: 'Sales',      href: '/dashboard/sales' },
    { icon: <Heart size={20} />,           label: 'Favourites', href: '/dashboard/favourites' },
    { icon: <MessageCircle size={20} />,   label: 'Chat',       href: '/dashboard/chat', active: true },
    { icon: <Settings size={20} />,        label: 'Setting',    href: '/dashboard/setting' },
  ];

  const chatList = Array(8).fill({
    name: "Jennifer Garnet",
    message: "Perfect, I'll take it! How do I proceed with ...",
    time: "18:05",
    unread: true
  });

  return (
    <div className="flex bg-white min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* ── SIDEBAR ── */}
      <aside className="w-[210px] bg-white border-r border-gray-100 flex flex-col py-6 px-4 shrink-0 min-h-screen sticky top-0">
        <div className="flex items-center gap-2 px-2 mb-10">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <span className="font-bold text-[#111827] text-[18px]">ShopRise</span>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map((item) => (
            <NextLink key={item.label} href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active ? 'bg-orange-50 text-[#FF8A65]' : 'text-gray-500 hover:bg-gray-50'
              }`}>
              {item.icon}
              <span className="text-[14px] font-medium">{item.label}</span>
            </NextLink>
          ))}
        </nav>
        <div className="flex flex-col gap-1 pt-4 border-t border-gray-100">
          <NextLink href="/help" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg">
            <HelpCircle size={18} /><span className="text-[14px] font-medium">Help</span>
          </NextLink>
          <NextLink href="/logout" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg">
            <LogOut size={18} /><span className="text-[14px] font-medium">Logout</span>
          </NextLink>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="flex-1 flex flex-col min-w-0">
        
        <header className="h-[56px] flex justify-end items-center px-8 gap-6 bg-white border-b border-gray-100">
          <Bell size={18} className="text-gray-400 cursor-pointer" />
          <NextLink href="/marketplace" className="flex items-center gap-1 text-gray-600 text-[13px] hover:text-gray-900">
            <span>Go to marketplace</span><span className="text-[10px] ml-1">↗</span>
          </NextLink>
        </header>

        <div className="w-full px-8 pt-6 flex flex-col">

          {/* Title & Search */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[24px] font-semibold text-[#1F3A93]">Chat</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text"
                className="w-[320px] h-[38px] pl-10 pr-20 bg-white border border-gray-200 rounded-full text-sm outline-none focus:border-[#FF8A65]"
                placeholder="Search" />
              <button className="absolute right-1 top-1 h-[30px] px-5 bg-[#FF8A65] text-white rounded-full text-[12px] font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-[10px] mb-4">
            {['All', 'Read', 'Unread'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-3 py-0.5 text-[12px] rounded-[5px] transition-colors ${
                  activeTab === tab ? 'bg-gray-200 text-gray-800 font-medium' : 'bg-transparent text-gray-500'
                }`}>
                {tab}
              </button>
            ))}
          </div>

          {/* ── CHAT INTERFACE ── fills full width */}
          <div className="flex shadow-sm border border-gray-100 rounded-sm overflow-hidden mb-8 w-full">
            
            {/* Left: Chat List — fixed 390px as per design spec */}
            <div className="bg-white border-r overflow-y-auto shrink-0"
              style={{ width: '390px', height: '645px', borderColor: '#F3F4F6' }}>
              {chatList.map((chat, i) => (
                <div key={i}
                  className={`flex items-center p-[15px] gap-[9px] border-b cursor-pointer transition-colors ${i === 3 ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                  style={{ height: '70px', borderColor: '#F3F4F6' }}>
                  <div className="rounded-full border border-gray-100 overflow-hidden shrink-0" style={{ width: '50px', height: '50px' }}>
                    <img src="/purchase(2).png" alt="user" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0 gap-[4px]">
                    <div className="flex justify-between items-center">
                      <span className="text-[16px] font-medium text-[#111827] leading-none">{chat.name}</span>
                      <span className="text-[11px] text-blue-600 font-semibold">{chat.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] text-gray-400 truncate pr-2">{chat.message}</p>
                      {chat.unread && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Right: Active Chat — flex-1 fills all remaining space */}
            <div className="bg-white flex flex-col flex-1 min-w-0" style={{ height: '645px' }}>
              <div className="h-[60px] border-b border-gray-100 flex items-center px-5 gap-3 shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
                  <img src="/purchase(2).png" alt="active-user" className="w-full h-full object-cover" />
                </div>
                <span className="text-[16px] font-medium text-[#111827]">Jennifer Garnet</span>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
                <div className="text-center">
                  <span className="text-[11px] text-gray-400">Aujourd'hui</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="bg-[#F3F4F6] p-3 rounded-lg text-[13px] text-gray-700 max-w-[70%]">
                    Hi, I'm interested in the blue sofa. Can you provide more details?
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1">18:05</span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-[#1F3A93] text-white p-3 rounded-lg text-[13px] max-w-[70%]">
                    Hello! Certainly, it's a premium velvet sofa with modern design and sturdy construction. Seats three comfortably.
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1">18:10</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="bg-[#F3F4F6] p-3 rounded-lg text-[13px] text-gray-700 max-w-[70%]">
                    Great! What are the dimensions?
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1">18:15</span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-[#1F3A93] text-white p-3 rounded-lg text-[13px] max-w-[70%]">
                    It's 84" long, 36" deep, and 32" high.
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1">18:15</span>
                </div>
              </div>

              {/* ✅ Input: w-full instead of fixed 573px */}
              <div className="p-4 border-t border-gray-100 shrink-0">
                <div className="flex items-center bg-[#F3F4F6] border border-gray-100 px-3 gap-3 w-full"
                  style={{ height: '37px', borderRadius: '5px' }}>
                  <ImageIcon size={18} className="text-gray-400 cursor-pointer shrink-0" />
                  <input type="text" placeholder="Send a chat"
                    className="flex-1 bg-transparent text-[13px] outline-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default FullChatInterface;