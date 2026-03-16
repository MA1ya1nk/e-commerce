"use client";
import React, { useState } from 'react';
import NextLink from 'next/link';
import { 
  LayoutGrid, ShoppingBag, BadgeDollarSign, Heart, 
  MessageCircle, Settings, HelpCircle, LogOut, Camera, Bell
} from 'lucide-react';

/* ─────────────────────────────────────────
   SIDEBAR NAV ITEMS
───────────────────────────────────────── */
const navItems = [
  { icon: LayoutGrid,      label: 'Dashbord',   href: '/dashboard' },
  { icon: ShoppingBag,     label: 'Purchasing', href: '/dashboard/purchasing' },
  { icon: BadgeDollarSign, label: 'Sales',      href: '/dashboard/sales' },
  { icon: Heart,           label: 'Favourites', href: '/dashboard/favourites' },
  { icon: MessageCircle,   label: 'Chat',       href: '/dashboard/chat' },
  { icon: Settings,        label: 'Setting',    href: '/dashboard/setting', active: true },
];

/* ─────────────────────────────────────────
   PROFILE MODAL
───────────────────────────────────────── */
const ProfileModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[16px] overflow-hidden shadow-2xl"
        style={{ width: '510px' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top Banner */}
        <div style={{ width: '100%', height: '220px', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80"
            alt="Banner"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Profile Info Row */}
        <div className="flex items-center px-6 pt-5 pb-4" style={{ gap: '20px', borderBottom: '1px solid #F3F4F6' }}>
          <div className="shrink-0">
            <img
              src="/purchase(2).png"
              alt="Profile"
              style={{ width: '72px', height: '72px', borderRadius: '50%', objectFit: 'cover', border: '3px solid white', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
            />
          </div>
          <div className="flex-1">
            <h3 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '16px', color: '#111827', margin: 0, lineHeight: '1.2' }}>John DOE</h3>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: '#6B7280', margin: '3px 0' }}>johndoe@gmail.com</p>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', color: '#9CA3AF', margin: 0 }}>Join oct 2023</p>
          </div>
          <div className="text-right shrink-0">
            <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '13px', color: '#374151', marginBottom: '4px' }}>Seller rating</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FF8A65', fontSize: '14px' }}>★</span>
              ))}
              <span style={{ fontFamily: 'Inter', fontSize: '12px', color: '#9CA3AF', marginLeft: '3px' }}>(10)</span>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="px-6 pt-5 pb-3">
          <h4 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', color: '#1F3A93', marginBottom: '14px', lineHeight: '100%' }}>
            Location
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid #F3F4F6', paddingBottom: '16px' }}>
            {[
              { label: 'Location :', value: 'Los angeles, CA' },
              { label: 'Zip Code :', value: '.' },
              { label: 'Adress :',   value: '.' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center">
                <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: '#6B7280', width: '120px' }}>{label}</span>
                <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: '#374151' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Profile Section */}
        <div className="px-6 pt-4 pb-6">
          <h4 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', color: '#1F3A93', marginBottom: '14px', lineHeight: '100%' }}>
            Social Profile
          </h4>
          <div className="flex items-center" style={{ gap: '15px' }}>
            {['WhatsApp', 'Facebook', 'X', 'Messenger', 'Email'].map(name => (
              <img
                key={name}
                src=""
                alt={name}
                style={{ width: '39.69px', height: '40px', borderRadius: '50%', objectFit: 'cover', background: '#eee' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   SETTING PAGE
───────────────────────────────────────── */
const SettingPage = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex bg-[#F9FAFB] min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── SIDEBAR ── */}
      <aside className="w-[210px] bg-white border-r border-gray-100 flex flex-col py-6 px-4 shrink-0 min-h-screen sticky top-0">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2 mb-10">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <span className="font-bold text-[#111827] text-[18px]">ShopRise</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map(({ icon: Icon, label, href, active }) => (
            <NextLink
              key={label}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                ${active
                  ? 'bg-orange-50 text-[#FF8A65]'
                  : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Icon size={18} />
              <span className="text-[14px] font-medium">{label}</span>
            </NextLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="flex flex-col gap-1 pt-4 border-t border-gray-100">
          <NextLink href="/help" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
            <HelpCircle size={18} />
            <span className="text-[14px] font-medium">Help</span>
          </NextLink>
          <NextLink href="/logout" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
            <LogOut size={18} />
            <span className="text-[14px] font-medium">Logout</span>
          </NextLink>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="h-[56px] flex justify-end items-center px-8 gap-6 bg-white border-b border-gray-100">
          <Bell size={18} className="text-gray-400 cursor-pointer" />
          <NextLink href="/marketplace" className="flex items-center gap-1 text-gray-500 text-[13px] hover:text-gray-800 transition-colors">
            <span>Go to marketplace</span>
            <span className="text-[11px]">↗</span>
          </NextLink>
        </header>

        <div className="px-8 flex flex-col pb-10 pt-6">
          <h2 className="text-[24px] font-semibold text-[#1F3A93] mb-6">Setting</h2>

          {/* Banner Image */}
          <div
            className="relative bg-gray-200 overflow-hidden mb-6"
            style={{ width: '1019px', height: '271px', borderRadius: '10px' }}
          >
            <img
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover"
              alt="Banner"
            />
            <button className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors">
              <span className="text-[#1F3A93] text-[12px] font-medium">Modifier</span>
            </button>
          </div>

          {/* Bottom Container */}
          <div className="flex gap-[16px]" style={{ width: '1015px', height: '416px' }}>

            {/* Left Profile Card */}
            <div className="w-[330px] bg-white border border-gray-100 rounded-[10px] flex flex-col items-center pt-8 px-6">
              <div className="relative mb-4">
                <div className="rounded-full border-[3px] border-white shadow-sm overflow-hidden" style={{ width: '80px', height: '80px' }}>
                  <img src="/purchase(2).png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 bg-[#1F3A93] p-1.5 rounded-full border-2 border-white cursor-pointer">
                  <Camera size={12} className="text-white" />
                </div>
              </div>

              <h3 className="text-[16px] font-semibold text-[#111827] leading-none mb-1">John DOE</h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '10px', color: '#6B7280' }}>
                johndoe@gmail.com
              </p>

              <div className="mt-8 border-t border-gray-50 pt-6 flex flex-col gap-[30px]" style={{ width: '244px' }}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-[14px]">current sales:</span>
                  <span className="text-[#1F3A93] font-bold text-[14px]">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-[14px]">current purchases:</span>
                  <span className="text-[#1F3A93] font-bold text-[14px]">04</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-[14px]">Note :</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FF8A65] text-[14px]">★</span>
                    ))}
                    <span className="text-gray-400 text-[12px] ml-1">(10)</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto mb-6 flex gap-3 w-full">
                <button
                  className="flex-1 py-2 border border-[#1F3A93] text-[#1F3A93] rounded-md text-[13px] font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => setShowProfile(true)}
                >
                  View profil
                </button>
                <button className="flex-1 py-2 bg-[#1F3A93] text-white rounded-md text-[13px] font-medium hover:bg-[#162d7a] transition-colors">
                  Share
                </button>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="flex-1 bg-white border border-gray-100 rounded-[10px] p-8 overflow-y-auto">
              <h4 className="text-[16px] font-semibold text-[#1F3A93] mb-6 border-b border-gray-50 pb-2">Basic informations</h4>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { label: 'First name', value: 'John' },
                  { label: 'Last name',  value: 'DOE' },
                  { label: 'Email',      value: 'johndoe@gmail.com' },
                  { label: 'Phone',      value: '1234466788' },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-2">
                    <label style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', color: '#111827' }}>
                      {field.label}
                    </label>
                    <input
                      type="text"
                      defaultValue={field.value}
                      className="w-full h-[40px] px-4 border border-gray-200 rounded-md bg-white text-gray-600 focus:border-[#1F3A93] outline-none transition-colors"
                      style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px' }}
                    />
                  </div>
                ))}
              </div>

              <button className="mt-4 text-[#1F3A93] text-[14px] font-medium underline hover:opacity-80 transition-opacity">
                Reset password
              </button>

              <div className="mt-8">
                <h4 className="text-[16px] font-semibold text-[#1F3A93] mb-4">Location</h4>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Profile Modal */}
      {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
    </div>
  );
};

export default SettingPage;