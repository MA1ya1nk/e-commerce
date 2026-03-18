"use client";
import React, { useState } from 'react';
import NextLink from 'next/link';
import { Share2, ChevronRight, X, ImageIcon } from 'lucide-react';

const ProductDashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white">
      {/* ── ORIGINAL PAGE CONTENT (UNCHANGED) ── */}
      <div 
        className="mx-auto flex flex-col bg-white text-[#374151]"
        style={{ 
          width: '1280px', 
          minHeight: '830px', 
          marginTop: '24px', 
          opacity: '1',
        }}
      >
        {/* Breadcrumb Section */}
        <nav className="flex items-center gap-2 mb-[40px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          <NextLink href="/">
            <span style={{ fontSize: '16px', fontWeight: 400, lineHeight: '100%', color: '#374151' }} className="cursor-pointer hover:underline">
              All listing
            </span>
          </NextLink>
          <ChevronRight size={16} className="text-gray-400" />
          <span style={{ fontSize: '16px', fontWeight: 500, lineHeight: '100%', color: '#284297' }}>
            Products
          </span>
        </nav>

        <div className="flex" style={{ gap: '40px' }}>
          {/* Left Column: Image Gallery */}
          <div style={{ width: '380px', height: '452px' }} className="flex flex-col gap-[24px]">
            <div className="w-[380px] h-[330px] rounded-[10px] overflow-hidden border border-[#E5E7EB]">
              <img src="/main.png" alt="Trolley sprayer" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-[10px]">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-[85px] h-[70px] rounded-[8px] overflow-hidden border-2 ${i === 1 ? 'border-[#FF8A65]' : 'border-transparent'}`}>
                  <img src="/main.png" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column: Product Details */}
          <div style={{ width: '453px', height: '762px' }} className="flex flex-col gap-[20px]">
            <div>
              <span className="text-[14px] text-gray-500 font-medium">Farming Tools & Machinery</span>
              <h1 className="text-[32px] font-bold text-[#FF8A65] leading-tight mt-1">Trolley sprayer</h1>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[16px] font-semibold">Description</h3>
              <p className="text-[14px] leading-[20px] text-[#4B5563]">
                Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added. We ship nationwide.
              </p>
            </div>

            <div className="flex items-center gap-[20px] text-[14px] text-gray-500">
              <div className="flex items-center gap-1">
                <img src="/dashboard/clock.png" width="16" height="16" />
                <span>3 hours ago</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/Dashboard/location.png" width="12" height="12" />
                <span>Los Angeles, CA</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img src="/Dashboard/heart.png" width="20" height="20" />
              <span className="text-[14px] font-medium text-[#284297] cursor-pointer">Add to favorites</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-[24px] font-bold text-[#284297]">$9.99</span>
              <span className="text-[14px] text-gray-500">(Used like new)</span>
            </div>

            <div className="w-full h-[180px] rounded-[10px] overflow-hidden border border-[#E5E7EB]">
              <img src="/Dashboard/Basemap image.png" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[16px] font-semibold">Seller</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/Dashboard/profile.png" className="w-[48px] h-[48px] rounded-full" />
                  <div>
                    <p className="font-semibold text-[16px]">Jennifer Garnet</p>
                    <p className="text-[12px] text-gray-400">Join oct 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#FF8A65]">
                  {"★".repeat(5)} <span className="text-gray-400 text-[12px] ml-1">(10)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[16px] font-semibold">Send a message to the seller</h3>
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Hello, is this article still available?" 
                  className="w-full h-[45px] px-[20px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] outline-none text-[14px]"
                />
                <button className="absolute right-[4px] bg-[#284297] text-white h-[37px] px-[25px] rounded-full text-[14px]">
                  Send
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* TRIGGER BUTTON */}
              <button 
                onClick={() => setIsChatOpen(true)}
                className="w-full h-[45px] bg-[#FF8A65] text-white rounded-[10px] font-semibold text-[16px]"
              >
                Go to chat
              </button>
              <div className="flex items-center justify-center gap-4 text-gray-500">
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-[8px] bg-white hover:bg-gray-50 transition-colors group">
                  <Share2 size={14} className="text-[#1F3A93] group-hover:text-[#162d7a]" strokeWidth={2.5} />
                  <span className="text-[13px] font-medium text-gray-700">Share</span>
                </button>
                <div className="flex gap-3">
                  <img src="/Dashboard/whatsapp.png" width="24" height="24" className="cursor-pointer" />
                  <img src="/Dashboard/facebook.png" width="24" height="24" className="cursor-pointer" />
                  <img src="/Dashboard/twitter.png" width="24" height="24" className="cursor-pointer" />
                  <img src="/Dashboard/fourth.png" width="24" height="24" className="cursor-pointer" />
                  <img src="/Dashboard/fifth.png" width="24" height="24" className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Checkout Card */}
          <div style={{ width: '335px', height: '378px', padding: '20px' }} className="border border-[#E5E7EB] flex flex-col gap-[25px] shadow-sm bg-white rounded-[10px]">
            <h3 className="text-center text-[18px] font-semibold">Checkout</h3>
            <div className="flex flex-col gap-[12px]">
              <div className="flex justify-between text-[16px]">
                <span className="text-gray-500">Price</span>
                <span className="font-semibold text-[#284297]">$9.99</span>
              </div>
              <div className="flex justify-between text-[16px]">
                <span className="text-gray-500">Delivery fee</span>
                <span className="font-semibold text-[#284297]">$13.50</span>
              </div>
              <div className="border-t border-dashed border-gray-200 pt-[12px] flex justify-between text-[20px] font-bold">
                <span>Total</span>
                <span>$22.49</span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[10px]">
                <button className="flex-1 h-[45px] border border-[#FF8A65] text-[#FF8A65] rounded-full font-semibold">Buy now</button>
                <button className="flex-1 h-[45px] bg-[#9CA3AF] text-white rounded-full font-semibold">Make offer</button>
              </div>
              <button className="w-full h-[48px] bg-[#284297] text-white rounded-[8px] flex items-center justify-center gap-2 font-semibold">
                Paypal checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── CHAT OVERLAY (RIGHT CORNER) ── */}
      {isChatOpen && (
        <div className="fixed right-0 top-0 w-[400px] h-full bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] z-[100] flex flex-col">
          {/* Header matching image_2d77a1.jpg */}
          <div className="h-[55px] bg-[#FF8A65] flex items-center justify-between px-4 text-white">
            <div className="flex items-center gap-3">
              <ChevronRight className="rotate-180 cursor-pointer" onClick={() => setIsChatOpen(false)} size={20} />
              <span className="font-semibold text-[18px]">Chat</span>
            </div>
            <X className="cursor-pointer" onClick={() => setIsChatOpen(false)} size={20} />
          </div>

          {/* User Info Bar */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-100">
            <img src="/Dashboard/profile.png" className="w-[40px] h-[40px] rounded-full border border-gray-200" alt="profile" />
            <span className="font-semibold text-[#111827]">Jennifer Garnet</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white">
            <div className="text-center"><span className="text-[11px] text-gray-400">Aujourd'hui</span></div>
            
            <div className="flex flex-col items-start">
              <div className="bg-[#F3F4F6] p-3 rounded-2xl rounded-tl-none text-[13px] text-gray-700 max-w-[85%] shadow-sm">
                Hi, I'm interested in the blue sofa. Can you provide more details?
              </div>
              <span className="text-[10px] text-gray-400 mt-1">18:05</span>
            </div>

            <div className="flex flex-col items-end">
              <div className="bg-[#1F3A93] text-white p-3 rounded-2xl rounded-tr-none text-[13px] max-w-[85%] shadow-sm">
                Hello! Certainly, it's a premium velvet sofa with modern design and sturdy construction. Seats three comfortably.
              </div>
              <span className="text-[10px] text-gray-400 mt-1">18:10</span>
            </div>
          </div>

          {/* Bottom Input Section */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex items-center bg-[#F3F4F6] rounded-md px-3 py-2 gap-3 h-[45px]">
              <ImageIcon size={20} className="text-gray-400 cursor-pointer" />
              <input type="text" placeholder="Send a chat" className="flex-1 bg-transparent text-[14px] outline-none" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDashboard;