'use client';

import React, { useState, useRef, useEffect } from 'react';
import NextLink from 'next/link';
import {
  LayoutGrid, ShoppingBag, BadgeDollarSign, Heart,
  MessageCircle, Settings, HelpCircle, LogOut, Bell,
  Search, Calendar, ChevronLeft, ChevronRight, MoreHorizontal, Plus,
  ArrowLeft, MapPin, Clock, Heart as HeartIcon
} from 'lucide-react';

/* ─────────────────────────────────────────
   MOCK DATA
───────────────────────────────────────── */
const allOrders = [
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', status: 'Completed' },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', status: 'Completed' },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', fulfilment: 'Packing',   total: '$300', status: 'Pending'   },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', fulfilment: 'Refund',    total: '$300', status: 'Cancel'    },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', status: 'Pending'   },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', status: 'Completed' },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', status: 'Cancel'    },
];

const allOffers = [
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', offer: '$300', price: '$300', status: 'Pending'  },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', offer: '$300', price: '$300', status: 'Pending'  },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', offer: '$300', price: '$300', status: 'Accepted' },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', offer: '$300', price: '$300', status: 'Declined' },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', offer: '$300', price: '$300', status: 'Declined' },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', offer: '$300', price: '$300', status: 'Accepted' },
  { date: '18 March', name: 'Litter troller sprayer', customer: 'Jackson Smith', offer: '$300', price: '$300', status: 'Accepted' },
];

const allListings = Array(8).fill(null).map((_, i) => ({
  id: i + 1,
  title: 'Liter trolley sprayer',
  description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.',
  price: '$9.99',
  condition: 'Used',
  listedDate: '06/19/2021',
  clicks: 0,
}));

/* ─────────────────────────────────────────
   BADGE STYLES
───────────────────────────────────────── */
const fulfilmentBadge = {
  Delivered: 'bg-green-100 text-green-700',
  Packing:   'bg-orange-100 text-orange-600',
  Refund:    'bg-red-100 text-red-500',
};
const orderStatusBadge = {
  Completed: 'bg-green-100 text-green-700',
  Pending:   'bg-orange-100 text-orange-500',
  Cancel:    'bg-red-100 text-red-500',
};
const offerStatusBadge = {
  Pending:  'bg-orange-100 text-orange-500',
  Accepted: 'bg-green-100 text-green-700',
  Declined: 'bg-red-100 text-red-500',
};

/* ─────────────────────────────────────────
   SIDEBAR NAV ITEMS
───────────────────────────────────────── */
const navItems = [
  { icon: LayoutGrid,      label: 'Dashbord',   href: '/dashboard' },
  { icon: ShoppingBag,     label: 'Purchasing', href: '/dashboard/purchasing' },
  { icon: BadgeDollarSign, label: 'Sales',      href: '/dashboard/sales', active: true },
  { icon: Heart,           label: 'Favourites', href: '/dashboard/favourites' },
  { icon: MessageCircle,   label: 'Chat',       href: '/dashboard/chat' },
  { icon: Settings,        label: 'Setting',    href: '/dashboard/setting' },
];

/* ─────────────────────────────────────────
   SIDEBAR COMPONENT
───────────────────────────────────────── */
function Sidebar({ iconOnly = false }) {
  if (iconOnly) {
    return (
      <aside className="w-[75px] bg-white border-r border-gray-100 flex flex-col items-center py-6 shrink-0 min-h-screen">
        <div className="w-9 h-9 bg-gray-200 rounded-full mb-10" />
        <nav className="flex-1 flex flex-col items-center gap-2">
          {navItems.map(({ icon: Icon, active, label, href }) => (
            <NextLink
              key={label}
              href={href}
              className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors
                ${active ? 'bg-orange-50 text-[#FF8A65]' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <Icon size={20} />
            </NextLink>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-2 pt-4 border-t border-gray-100 w-full">
          <NextLink href="/help" className="w-10 h-10 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-lg">
            <HelpCircle size={20} />
          </NextLink>
          <NextLink href="/logout" className="w-10 h-10 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-lg">
            <LogOut size={20} />
          </NextLink>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-[210px] bg-white border-r border-gray-100 flex flex-col py-6 px-4 shrink-0 min-h-screen sticky top-0">
      <div className="flex items-center gap-2 px-2 mb-10">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <span className="font-bold text-[#111827] text-[18px]">ShopRise</span>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map(({ icon: Icon, label, href, active }) => (
          <NextLink
            key={label}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
              ${active ? 'bg-orange-50 text-[#FF8A65]' : 'text-gray-500 hover:bg-gray-50'}`}
          >
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
  );
}

/* ─────────────────────────────────────────
   TOP BAR
───────────────────────────────────────── */
function TopBar() {
  return (
    <header className="h-[56px] flex justify-end items-center px-8 gap-6 bg-white border-b border-gray-100 shrink-0">
      <Bell size={18} className="text-gray-400 cursor-pointer" />
      <NextLink href="/marketplace" className="flex items-center gap-1 text-gray-500 cursor-pointer text-[13px] hover:text-gray-800 transition-colors">
        <span>Go to marketplace</span><span className="text-[11px]">↗</span>
      </NextLink>
    </header>
  );
}

/* ─────────────────────────────────────────
   MAP SVG
───────────────────────────────────────── */
function MapSVG({ color = '#1F3A93' }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#E8E0D4"/>
      <line x1="0" y1="100" x2="400" y2="100" stroke="#D4C9B8" strokeWidth="20"/>
      <line x1="200" y1="0" x2="200" y2="200" stroke="#D4C9B8" strokeWidth="12"/>
      <line x1="0" y1="60" x2="400" y2="140" stroke="#CFC4B2" strokeWidth="8"/>
      <rect x="60" y="30" width="50" height="30" rx="4" fill="#C9C0AD"/>
      <rect x="140" y="50" width="40" height="25" rx="4" fill="#C9C0AD"/>
      <rect x="290" y="70" width="55" height="35" rx="4" fill="#C9C0AD"/>
      <text x="120" y="115" fontFamily="Inter" fontSize="13" fill="#8B7355" textAnchor="middle">California</text>
      <circle cx="200" cy="100" r="40" stroke={color} strokeWidth="1.5" fill={color + '18'}/>
      <circle cx="200" cy="100" r="6" fill={color}/>
      <path d="M200 88 C196 92 194 96 194 100 C194 106.6 196.7 112 200 116 C203.3 112 206 106.6 206 100 C206 96 204 92 200 88Z" fill={color}/>
    </svg>
  );
}

/* ─────────────────────────────────────────
   PREVIEW PANEL
───────────────────────────────────────── */
function PreviewPanel({ category, title, titleColor, description, price, condition, location, photos, activePhoto, setActivePhoto, mapColor }) {
  const [message, setMessage] = useState('');
  const mainPhoto = photos[activePhoto] || null;

  return (
    <div className="flex gap-5">
      <div style={{ width: '310px', paddingTop: '10px' }} className="flex flex-col gap-4 shrink-0">
        <div style={{ width: '310px', height: '259px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#F3F4F6' }}>
          {mainPhoto
            ? <img src={mainPhoto} alt="main" className="w-full h-full object-cover" />
            : <img src="/purchase(1).png" alt="main" className="w-full h-full object-cover" />
          }
        </div>
        <div className="flex gap-2">
          {[0,1,2,3].map(i => (
            <div key={i} onClick={() => photos[i] && setActivePhoto(i)}
              style={{ width: '70px', height: '70px', borderRadius: '8px', borderWidth: '2px', overflow: 'hidden', backgroundColor: '#F3F4F6' }}
              className={`border cursor-pointer shrink-0 ${activePhoto === i ? 'border-[#FF8A65]' : 'border-gray-200'}`}>
              {photos[i]
                ? <img src={photos[i]} alt="" className="w-full h-full object-cover" />
                : <img src="/purchase(1).png" alt="" className="w-full h-full object-cover opacity-60" />
              }
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: '400px', paddingTop: '10px' }} className="flex flex-col gap-3 shrink-0">
        <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', color: '#374151' }}>{category}</p>
        <h1 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', color: titleColor, marginTop: '-4px' }}>{title}</h1>
        <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', color: '#111827', marginTop: '-4px' }}>Description</p>
        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '18px', color: '#6B7280', marginTop: '-6px' }}>{description}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-gray-500 text-[13px]"><Clock size={13} className="text-gray-400" /><span>3 hours ago</span></div>
          <div className="flex items-center gap-1.5 text-gray-500 text-[13px]"><MapPin size={13} className="text-gray-400" /><span>{location}</span></div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-[13px] cursor-pointer hover:text-red-400 transition-colors">
          <HeartIcon size={14} /><span>Add to favorites</span>
        </div>
        <p style={{ color: titleColor, fontWeight: 700, fontSize: '18px' }}>
          {price} <span className="text-gray-500 font-normal text-[14px]">({condition})</span>
        </p>
        <div style={{ width: '100%', height: '185px', borderRadius: '10px', overflow: 'hidden' }}>
          <MapSVG color={mapColor} />
        </div>
        <div>
          <p className="text-[14px] font-semibold text-gray-700 mb-2">Seller</p>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0">
              <img src="/purchase(2).png" alt="seller" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-gray-800">Jennifer Garnet</p>
              <p className="text-[11px] text-gray-400">Join oct 2023</p>
            </div>
            <div className="ml-auto flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <span key={i} className="text-[#FF8A65] text-[12px]">★</span>)}
              <span className="text-gray-400 text-[10px] ml-1">(10)</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-gray-700 mb-2">Send a message to the seller</p>
          <div className="flex items-center gap-2 border border-gray-200 rounded-[8px] px-3 h-[42px]">
            <input value={message} onChange={e => setMessage(e.target.value)}
              className="flex-1 outline-none text-[13px] text-gray-600 placeholder-gray-300 bg-transparent"
              placeholder="Hello, is this article still available?" />
            <button style={{ backgroundColor: mapColor }} className="text-white px-4 py-1.5 rounded-[6px] text-[12px] font-medium">Send</button>
          </div>
        </div>
        <button style={{ borderColor: '#FF8A65', color: '#FF8A65' }} className="w-full h-[42px] border-2 rounded-[8px] text-[13px] font-semibold hover:bg-orange-50 transition-colors">
          Go to chat
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   TYPE SELECTOR PAGE
───────────────────────────────────────── */
function TypeSelectorPage({ onSelect, onBack }) {
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

  return (
    <div className="flex bg-white min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Sidebar iconOnly />
      <main className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-10">
          <div className="w-full" style={{ maxWidth: '823px' }}>
            <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mb-10 mt-4">
              <ArrowLeft size={20} />
            </button>
          </div>
          <div style={{ width: '823px', gap: '50px' }} className="flex flex-col items-center">
            <h2 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', lineHeight: '100%', color: '#1F3A93' }}>
              Choose the type of ad
            </h2>
            <div className="flex gap-[50px]">
              {adTypes.map(({ key, icon, title, description }) => (
                <button key={key} onClick={() => onSelect(key)}
                  style={{ width: '241px', height: '275px', gap: '15px', paddingTop: '20px', paddingRight: '15px', paddingBottom: '20px', paddingLeft: '15px', borderRadius: '10px', backgroundColor: '#F3F4F6' }}
                  className="flex flex-col items-center justify-start hover:bg-gray-200 transition-colors cursor-pointer border-0 outline-none">
                  <div className="mb-2">{icon}</div>
                  <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '100%', textAlign: 'center', color: '#1F3A93', whiteSpace: 'pre-line' }}>{title}</p>
                  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', lineHeight: '100%', textAlign: 'center', color: '#374151' }}>{description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────
   ITEM FOR SALE FORM
───────────────────────────────────────── */
const categories    = ['Home & Garden','Electronics','Clothing','Sports','Books','Toys','Other'];
const subCategories = { 'Home & Garden': ['Tools','Furniture','Decor','Garden'], Electronics: ['Phones','Computers','Audio','Other'] };
const conditions    = ['New','Used like new','Good','Fair','For parts'];

function ItemForSaleForm({ onBack }) {
  const [form, setForm] = useState({ category: 'Home & Garden', subcategory: 'Tools', title: 'Trolley sprayer', description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide', price: '9.99$', condition: 'Used like new', location: 'Los Angeles,CA' });
  const [photos, setPhotos] = useState([]);
  const [activePhoto, setActivePhoto] = useState(0);
  const fileRef = useRef();

  const inputClass = "w-full h-[42px] px-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#1F3A93] focus:outline-none transition-colors bg-white";
  const labelClass = "block text-[13px] font-medium text-[#374151] mb-1.5";

  return (
    <div className="flex bg-white min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Sidebar iconOnly />
      <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <TopBar />
        <div className="flex gap-5 px-6 pt-6 pb-10 overflow-y-auto">
          <div style={{ width: '390px', minHeight: '948px', borderRadius: '10px', padding: '20px', borderWidth: '1px' }} className="border border-gray-200 flex flex-col gap-4 shrink-0">
            <button onClick={onBack} className="flex items-center gap-2 text-[#1F3A93] font-medium text-[14px] hover:opacity-80 w-fit">
              <ArrowLeft size={16} /> Back
            </button>
            <div>
              <h2 className="text-[#1F3A93] font-bold text-[22px] mb-1">Item for sale</h2>
              <p className="text-[#1F3A93] font-semibold text-[14px]">Informations <span className="text-gray-400 font-normal">(Mandatory)</span></p>
              <p className="text-gray-500 text-[13px]">Give as much detail possible</p>
            </div>
            <div className="w-full h-px bg-gray-100" />
            <div><label className={labelClass}>Category</label>
              <select value={form.category} onChange={e => setForm(p => ({...p, category: e.target.value}))} className={inputClass}>
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div><label className={labelClass}>Subcategory</label>
              <select value={form.subcategory} onChange={e => setForm(p => ({...p, subcategory: e.target.value}))} className={inputClass}>
                {(subCategories[form.category] || ['General']).map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div><label className={labelClass}>Title</label>
              <input value={form.title} onChange={e => setForm(p => ({...p, title: e.target.value}))} className={inputClass} placeholder="e.g. Trolley sprayer" />
            </div>
            <div><label className={labelClass}>Description</label>
              <textarea value={form.description} onChange={e => setForm(p => ({...p, description: e.target.value}))} rows={4}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#1F3A93] focus:outline-none transition-colors resize-none bg-white" />
            </div>
            <div>
              <label className={labelClass}>Photos ({photos.length}/10). <span className="text-gray-400 font-normal">You can add up to 10 photos.</span></label>
              <div onClick={() => fileRef.current.click()} className="w-full border border-gray-200 rounded-[8px] flex flex-col items-center justify-center cursor-pointer hover:border-[#1F3A93] transition-colors" style={{ height: '90px' }}>
                <div className="w-8 h-8 bg-[#1F3A93] rounded-full flex items-center justify-center mb-1"><Plus size={18} className="text-white" /></div>
                <p className="text-[13px] text-gray-600 font-medium">Add photos</p>
                <p className="text-[11px] text-gray-400">Or drag and drop</p>
                <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={e => { const f = Array.from(e.target.files).map(f => URL.createObjectURL(f)); setPhotos(p => [...p, ...f].slice(0, 10)); }} />
              </div>
            </div>
            <div><label className={labelClass}>Prices</label>
              <input value={form.price} onChange={e => setForm(p => ({...p, price: e.target.value}))} className={inputClass} placeholder="9.99$" />
            </div>
            <div><label className={labelClass}>Condition</label>
              <select value={form.condition} onChange={e => setForm(p => ({...p, condition: e.target.value}))} className={inputClass}>
                {conditions.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div><label className={labelClass}>Location</label>
              <div className="relative">
                <MapPin size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input value={form.location} onChange={e => setForm(p => ({...p, location: e.target.value}))} className="w-full h-[42px] pl-8 pr-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#1F3A93] focus:outline-none bg-white" />
              </div>
            </div>
            <button className="w-full h-[44px] bg-[#1F3A93] text-white rounded-[8px] text-[14px] font-semibold hover:bg-[#162d7a] transition-colors">Publish listing</button>
          </div>
          <PreviewPanel
            category={`${form.category} & ${form.subcategory}`}
            title={form.title || 'Trolley sprayer'}
            titleColor="#FF8A65"
            description={form.description}
            price={form.price}
            condition={form.condition}
            location={form.location}
            photos={photos}
            activePhoto={activePhoto}
            setActivePhoto={setActivePhoto}
            mapColor="#1F3A93"
          />
        </div>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────
   VEHICLE FOR SALE FORM
───────────────────────────────────────── */
const vehicleTypes = ['Car/truck','Motorcycle','Boat','RV/Camper','Other'];
const years = Array.from({ length: 30 }, (_, i) => String(2025 - i));

function VehicleForSaleForm({ onBack }) {
  const [form, setForm] = useState({ type: 'Car/truck', location: 'Los Angeles,CA', year: '2015', brand: 'Toyota', model: 'Camry', description: 'A sleek, silver sedan with low mileage and pristine interior. This reliable vehicle offers smooth handling and impressive fuel efficiency.', price: '9.99$', condition: 'Used like new' });
  const [photos, setPhotos] = useState([]);
  const [activePhoto, setActivePhoto] = useState(0);
  const fileRef = useRef();

  const inputClass = "w-full h-[42px] px-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#1F3A93] focus:outline-none transition-colors bg-white";
  const labelClass = "block text-[13px] font-medium text-[#374151] mb-1.5";

  return (
    <div className="flex bg-white min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Sidebar iconOnly />
      <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <TopBar />
        <div className="flex gap-5 px-6 pt-6 pb-10 overflow-y-auto">
          <div style={{ width: '390px', minHeight: '948px', borderRadius: '10px', padding: '20px', borderWidth: '1px' }} className="border border-gray-200 flex flex-col gap-4 shrink-0">
            <button onClick={onBack} className="flex items-center gap-2 text-[#1F3A93] font-medium text-[14px] hover:opacity-80 w-fit">
              <ArrowLeft size={16} /> Back
            </button>
            <div>
              <h2 className="text-[#1F3A93] font-bold text-[22px] mb-1">Vehicle for sale</h2>
              <p className="text-[#1F3A93] font-semibold text-[14px]">Informations <span className="text-gray-400 font-normal">(Mandatory)</span></p>
              <p className="text-gray-500 text-[13px]">Give as much detail possible</p>
            </div>
            <div className="w-full h-px bg-gray-100" />
            <div><label className={labelClass}>Type</label>
              <select value={form.type} onChange={e => setForm(p => ({...p, type: e.target.value}))} className={inputClass}>
                {vehicleTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Photos ({photos.length}/10). <span className="text-gray-400 font-normal">You can add up to 10 photos.</span></label>
              <div onClick={() => fileRef.current.click()} className="w-full border border-gray-200 rounded-[8px] flex flex-col items-center justify-center cursor-pointer hover:border-[#1F3A93] transition-colors" style={{ height: '90px' }}>
                <div className="w-8 h-8 bg-[#1F3A93] rounded-full flex items-center justify-center mb-1"><Plus size={18} className="text-white" /></div>
                <p className="text-[13px] text-gray-600 font-medium">Add photos</p>
                <p className="text-[11px] text-gray-400">Or drag and drop</p>
                <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={e => { const f = Array.from(e.target.files).map(f => URL.createObjectURL(f)); setPhotos(p => [...p, ...f].slice(0, 10)); }} />
              </div>
            </div>
            <div>
              <p className="text-[#1F3A93] font-semibold text-[14px]">About this vehicle <span className="text-gray-400 font-normal">(Mandatory)</span></p>
              <p className="text-gray-500 text-[13px]">Allow buyers to know more about the vehicle you are selling.</p>
            </div>
            <div className="w-full h-px bg-gray-100" />
            <div><label className={labelClass}>Location</label>
              <div className="relative">
                <MapPin size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1F3A93]" />
                <input value={form.location} onChange={e => setForm(p => ({...p, location: e.target.value}))} className="w-full h-[42px] pl-8 pr-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#1F3A93] focus:outline-none bg-white" />
              </div>
            </div>
            <div><label className={labelClass}>Year</label>
              <select value={form.year} onChange={e => setForm(p => ({...p, year: e.target.value}))} className={inputClass}>
                {years.map(y => <option key={y}>{y}</option>)}
              </select>
            </div>
            <div><label className={labelClass}>Brand</label>
              <input value={form.brand} onChange={e => setForm(p => ({...p, brand: e.target.value}))} className={inputClass} placeholder="Toyota" />
            </div>
            <div><label className={labelClass}>Model</label>
              <input value={form.model} onChange={e => setForm(p => ({...p, model: e.target.value}))} className={inputClass} placeholder="Camry" />
            </div>
            <div><label className={labelClass}>Description</label>
              <textarea value={form.description} onChange={e => setForm(p => ({...p, description: e.target.value}))} rows={3}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#1F3A93] focus:outline-none transition-colors resize-none bg-white" />
            </div>
            <div><label className={labelClass}>Price</label>
              <input value={form.price} onChange={e => setForm(p => ({...p, price: e.target.value}))} className={inputClass} />
            </div>
            <div><label className={labelClass}>Condition</label>
              <select value={form.condition} onChange={e => setForm(p => ({...p, condition: e.target.value}))} className={inputClass}>
                {conditions.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <button className="w-full h-[44px] bg-[#1F3A93] text-white rounded-[8px] text-[14px] font-semibold hover:bg-[#162d7a] transition-colors">Publish listing</button>
          </div>
          <PreviewPanel
            category={form.type}
            title={`${form.brand} ${form.model} ${form.year}`.trim() || 'Toyota Camry 2025'}
            titleColor="#FF8A65"
            description={form.description}
            price={form.price}
            condition={form.condition}
            location={form.location}
            photos={photos}
            activePhoto={activePhoto}
            setActivePhoto={setActivePhoto}
            mapColor="#1F3A93"
          />
        </div>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────
   REAL ESTATE FORM
───────────────────────────────────────── */
const propertyTypes = ['Apartment','House','Villa','Studio','Land','Commercial'];
const amenitiesList = ['Parking','Pool','Garden','Elevator','Gym','Balcony','Furnished','Pet Friendly'];

function RealEstateForm({ onBack }) {
  const [form, setForm] = useState({ listingType: 'For Sale', propertyType: 'Apartment', title: 'Modern Studio — Downtown', description: 'A bright and spacious studio in the heart of downtown with stunning city views, modern finishes, and easy access to public transport.', price: '1,200$', size: '65', rooms: '2', bathrooms: '1', location: 'Los Angeles, CA', address: '123 Main Street', zipCode: '90001' });
  const [selectedAmenities, setSelectedAmenities] = useState(['Parking','Elevator']);
  const [photos, setPhotos] = useState([]);
  const [activePhoto, setActivePhoto] = useState(0);
  const fileRef = useRef();

  const inputClass = "w-full h-[42px] px-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#10B981] focus:outline-none transition-colors bg-white";
  const labelClass = "block text-[13px] font-medium text-[#374151] mb-1.5";
  const toggleAmenity = (a) => setSelectedAmenities(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);

  return (
    <div className="flex bg-white min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Sidebar iconOnly />
      <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <TopBar />
        <div className="flex gap-5 px-6 pt-6 pb-10 overflow-y-auto">
          <div style={{ width: '390px', minHeight: '948px', borderRadius: '10px', padding: '20px', borderWidth: '1px' }} className="border border-gray-200 flex flex-col gap-4 shrink-0">
            <button onClick={onBack} className="flex items-center gap-2 text-[#10B981] font-medium text-[14px] hover:opacity-80 w-fit">
              <ArrowLeft size={16} /> Back
            </button>
            <div>
              <h2 className="text-[#10B981] font-bold text-[20px] mb-1">Real estate for sale or rent</h2>
              <p className="text-[#10B981] font-semibold text-[14px]">Informations <span className="text-gray-400 font-normal">(Mandatory)</span></p>
              <p className="text-gray-500 text-[13px]">Give as much detail possible</p>
            </div>
            <div className="w-full h-px bg-gray-100" />
            <div>
              <label className={labelClass}>Listing Type</label>
              <div className="flex gap-2">
                {['For Sale','For Rent'].map(type => (
                  <button key={type} onClick={() => setForm(p => ({...p, listingType: type}))}
                    className={`flex-1 py-2 rounded-[8px] text-[13px] font-medium border transition-colors ${form.listingType === type ? 'bg-[#10B981] text-white border-[#10B981]' : 'bg-white text-gray-500 border-gray-200'}`}>
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div><label className={labelClass}>Property Type</label>
              <select value={form.propertyType} onChange={e => setForm(p => ({...p, propertyType: e.target.value}))} className={inputClass}>
                {propertyTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div><label className={labelClass}>Title</label>
              <input value={form.title} onChange={e => setForm(p => ({...p, title: e.target.value}))} className={inputClass} />
            </div>
            <div><label className={labelClass}>Description</label>
              <textarea value={form.description} onChange={e => setForm(p => ({...p, description: e.target.value}))} rows={3}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#10B981] focus:outline-none transition-colors resize-none bg-white" />
            </div>
            <div>
              <label className={labelClass}>Photos ({photos.length}/10).</label>
              <div onClick={() => fileRef.current.click()} className="w-full border border-gray-200 rounded-[8px] flex flex-col items-center justify-center cursor-pointer hover:border-[#10B981] transition-colors" style={{ height: '90px' }}>
                <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center mb-1"><Plus size={18} className="text-white" /></div>
                <p className="text-[13px] text-gray-600 font-medium">Add photos</p>
                <p className="text-[11px] text-gray-400">Or drag and drop</p>
                <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={e => { const f = Array.from(e.target.files).map(f => URL.createObjectURL(f)); setPhotos(p => [...p, ...f].slice(0, 10)); }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelClass}>Size (m²)</label><input value={form.size} onChange={e => setForm(p => ({...p, size: e.target.value}))} className={inputClass} type="number" /></div>
              <div><label className={labelClass}>Bedrooms</label><input value={form.rooms} onChange={e => setForm(p => ({...p, rooms: e.target.value}))} className={inputClass} type="number" /></div>
            </div>
            <div><label className={labelClass}>Bathrooms</label><input value={form.bathrooms} onChange={e => setForm(p => ({...p, bathrooms: e.target.value}))} className={inputClass} type="number" /></div>
            <div><label className={labelClass}>Price {form.listingType === 'For Rent' ? '($/mo)' : '($)'}</label><input value={form.price} onChange={e => setForm(p => ({...p, price: e.target.value}))} className={inputClass} /></div>
            <div>
              <label className={labelClass}>Amenities</label>
              <div className="flex flex-wrap gap-2">
                {amenitiesList.map(a => (
                  <button key={a} onClick={() => toggleAmenity(a)}
                    className={`px-3 py-1 rounded-full text-[12px] font-medium border transition-colors ${selectedAmenities.includes(a) ? 'bg-[#10B981] text-white border-[#10B981]' : 'bg-white text-gray-500 border-gray-200'}`}>
                    {a}
                  </button>
                ))}
              </div>
            </div>
            <div><label className={labelClass}>Location</label>
              <div className="relative">
                <MapPin size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#10B981]" />
                <input value={form.location} onChange={e => setForm(p => ({...p, location: e.target.value}))} className="w-full h-[42px] pl-8 pr-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#10B981] focus:outline-none bg-white" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelClass}>Address</label><input value={form.address} onChange={e => setForm(p => ({...p, address: e.target.value}))} className={inputClass} /></div>
              <div><label className={labelClass}>Zip Code</label><input value={form.zipCode} onChange={e => setForm(p => ({...p, zipCode: e.target.value}))} className={inputClass} /></div>
            </div>
            <button className="w-full h-[44px] bg-[#10B981] text-white rounded-[8px] text-[14px] font-semibold hover:bg-[#0ea572] transition-colors">Publish listing</button>
          </div>
          <PreviewPanel
            category={`${form.propertyType} · ${form.listingType}`}
            title={form.title || 'Modern Studio — Downtown'}
            titleColor="#10B981"
            description={form.description}
            price={form.price}
            condition="Used like new"
            location={form.location}
            photos={photos}
            activePhoto={activePhoto}
            setActivePhoto={setActivePhoto}
            mapColor="#10B981"
          />
        </div>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────
   LISTING DROPDOWN
───────────────────────────────────────── */
function ListingDropdown({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(o => !o)} className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
        <MoreHorizontal size={16} />
      </button>
      {open && (
        <div className="absolute right-0 bottom-full mb-1 bg-white border border-gray-200 rounded-[8px] shadow-lg z-50 overflow-hidden" style={{ width: '110px' }}>
          <button onClick={() => { onEdit(); setOpen(false); }} className="w-full text-left px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50">Edit</button>
          <button onClick={() => { onDelete(); setOpen(false); }} className="w-full text-left px-4 py-2.5 text-[13px] text-red-500 hover:bg-red-50">Delete</button>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   PAGINATION
───────────────────────────────────────── */
const ITEMS_PER_PAGE = 7;

function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex items-center justify-center gap-1.5 pt-2">
      <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="w-8 h-8 flex items-center justify-center rounded-[6px] border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
        <ChevronLeft size={14} />
      </button>
      {[1,2,3].map(n => (
        <button key={n} onClick={() => setPage(n)} className={`w-8 h-8 flex items-center justify-center rounded-[6px] text-[13px] font-medium ${page===n ? 'bg-[#1F3A93] text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-50'}`}>{n}</button>
      ))}
      <span className="text-gray-400 text-[13px] px-1">...</span>
      <button onClick={() => setPage(9)} className={`w-8 h-8 flex items-center justify-center rounded-[6px] text-[13px] font-medium ${page===9 ? 'bg-[#1F3A93] text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-50'}`}>9</button>
      <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="w-8 h-8 flex items-center justify-center rounded-[6px] border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed">
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────
   ORDERS TABLE
───────────────────────────────────────── */
function OrdersTable({ search, filter, page, setPage }) {
  const filtered = allOrders.filter(o => (filter === 'All' || o.status === filter) && (search === '' || o.name.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase())));
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated  = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  return (
    <>
      <div className="bg-white rounded-[12px] border border-gray-100 overflow-hidden">
        <table className="w-full text-[13px] border-collapse">
          <thead>
            <tr className="border-b border-gray-100 bg-[#FAFAFA]">
              {['Date','Image','Name','Customer','Contact','Fulfilment','Total','Status','Actions'].map(h => (
                <th key={h} className="px-4 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0
              ? <tr><td colSpan={9} className="px-4 py-12 text-center text-gray-400">No orders found.</td></tr>
              : paginated.map((order, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600 font-medium">{order.date}</td>
                  <td className="px-4 py-3"><div className="w-10 h-10 rounded-[6px] overflow-hidden bg-gray-100 border border-gray-100"><img src="/purchase(1).png" alt="product" className="w-full h-full object-cover" /></div></td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{order.name}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 shrink-0"><img src="/purchase(2).png" alt="customer" className="w-full h-full object-cover" /></div><span className="text-gray-700 whitespace-nowrap">{order.customer}</span></div></td>
                  <td className="px-4 py-3"><button className="text-[#1F3A93] font-medium underline underline-offset-2 whitespace-nowrap">Go to chat</button></td>
                  <td className="px-4 py-3 whitespace-nowrap"><span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-semibold ${fulfilmentBadge[order.fulfilment] ?? 'bg-gray-100 text-gray-500'}`}>{order.fulfilment}</span></td>
                  <td className="px-4 py-3 font-bold text-gray-800 whitespace-nowrap">{order.total}</td>
                  <td className="px-4 py-3 whitespace-nowrap"><span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-semibold ${orderStatusBadge[order.status] ?? 'bg-gray-100 text-gray-500'}`}>{order.status}</span></td>
                  <td className="px-4 py-3 text-center"><button className="text-gray-300 hover:text-gray-500"><MoreHorizontal size={18} /></button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
}

/* ─────────────────────────────────────────
   OFFERS TABLE
───────────────────────────────────────── */
function OffersTable({ search, filter, page, setPage }) {
  const filtered = allOffers.filter(o => (filter === 'All' || o.status === filter) && (search === '' || o.name.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase())));
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated  = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  return (
    <>
      <div className="bg-white rounded-[12px] border border-gray-100 overflow-hidden">
        <table className="w-full text-[13px] border-collapse">
          <thead>
            <tr className="border-b border-gray-100 bg-[#FAFAFA]">
              {['Date','Image','Name','Customers','Contact','Offer','Price','Status','Actions'].map(h => (
                <th key={h} className="px-4 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0
              ? <tr><td colSpan={9} className="px-4 py-12 text-center text-gray-400">No offers found.</td></tr>
              : paginated.map((o, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600 font-medium">{o.date}</td>
                  <td className="px-4 py-3"><div className="w-10 h-10 rounded-[6px] overflow-hidden bg-gray-100 border border-gray-100"><img src="/purchase(1).png" alt="product" className="w-full h-full object-cover" /></div></td>
                  <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{o.name}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 shrink-0"><img src="/purchase(2).png" alt="" className="w-full h-full object-cover" /></div><span className="text-gray-700 whitespace-nowrap">{o.customer}</span></div></td>
                  <td className="px-4 py-3"><button className="text-[#1F3A93] font-medium underline underline-offset-2 whitespace-nowrap">Go to chat</button></td>
                  <td className="px-4 py-3 font-bold text-gray-800 whitespace-nowrap">{o.offer}</td>
                  <td className="px-4 py-3 font-bold text-gray-800 whitespace-nowrap">{o.price}</td>
                  <td className="px-4 py-3 whitespace-nowrap"><span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-semibold ${offerStatusBadge[o.status] ?? 'bg-gray-100 text-gray-500'}`}>{o.status}</span></td>
                  <td className="px-4 py-3 text-center"><button className="text-gray-300 hover:text-gray-500"><MoreHorizontal size={18} /></button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function SalesPage() {
  const [view, setView]           = useState('main');
  const [activeTab, setActiveTab] = useState('Orders');
  const [filter, setFilter]       = useState('All');
  const [search, setSearch]       = useState('');
  const [page, setPage]           = useState(1);
  const [listings, setListings]   = useState(allListings);

  const handleTabChange = (tab) => { setActiveTab(tab); setFilter('All'); setSearch(''); setPage(1); };
  const handleFilter    = (f)   => { setFilter(f); setPage(1); };
  const isTableTab = activeTab === 'Orders' || activeTab === 'Offers';

  if (view === 'selectType') return <TypeSelectorPage onSelect={t => setView(t)} onBack={() => setView('main')} />;
  if (view === 'item')       return <ItemForSaleForm   onBack={() => setView('selectType')} />;
  if (view === 'vehicle')    return <VehicleForSaleForm onBack={() => setView('selectType')} />;
  if (view === 'realestate') return <RealEstateForm    onBack={() => setView('selectType')} />;

  return (
    <div className="flex bg-[#F9FAFB] min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <div className="px-8 pt-6 pb-10 flex flex-col gap-5">

          {/* Tabs + Search */}
          <div className="flex items-end justify-between">
            <div className="flex items-end gap-8 border-b border-gray-200">
              {['Orders', 'Listing', 'Offers'].map(tab => (
                <button key={tab} onClick={() => handleTabChange(tab)}
                  className={`pb-3 text-[15px] font-medium relative whitespace-nowrap transition-colors ${activeTab === tab ? 'text-[#1F3A93]' : 'text-gray-400 hover:text-gray-600'}`}>
                  {tab}
                  {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#1F3A93] rounded-full" />}
                </button>
              ))}
            </div>
            {isTableTab && (
              <div className="flex items-center gap-3 mb-0.5">
                <div className="flex items-center border border-gray-200 rounded-[8px] px-3 h-[38px] gap-2 bg-white" style={{ width: '260px' }}>
                  <Search size={14} className="text-gray-400 shrink-0" />
                  <input value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} className="outline-none text-[13px] w-full text-gray-600 bg-transparent placeholder-gray-300" placeholder="Search..." />
                </div>
                <button className="h-[38px] px-6 bg-[#FF8A65] text-white text-[13px] font-medium rounded-[8px] hover:bg-[#f07849] transition-colors whitespace-nowrap">Search</button>
              </div>
            )}
          </div>

          {/* Filter pills + date */}
          {isTableTab && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {['All','Completed','Pending','Cancel'].map(f => (
                  <button key={f} onClick={() => handleFilter(f)}
                    className={`px-4 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors ${filter === f ? 'bg-[#1F3A93] text-white' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                    {f}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-[8px] px-3 h-[36px] text-[12px] text-gray-500 cursor-pointer hover:border-gray-300 transition-colors">
                <span>01.11.2023</span><span className="text-gray-300 mx-1">–</span><span>30.11.2023</span>
                <Calendar size={14} className="text-gray-400 ml-2" />
              </div>
            </div>
          )}

          {/* Tab content */}
          {activeTab === 'Orders' && <OrdersTable search={search} filter={filter} page={page} setPage={setPage} />}
          {activeTab === 'Offers' && <OffersTable search={search} filter={filter} page={page} setPage={setPage} />}

          {activeTab === 'Listing' && (
            <div>
              <div className="flex items-center justify-end mb-5">
                <button
                  onClick={() => setView('selectType')}
                  className="flex items-center gap-2 bg-[#1F3A93] text-white px-5 py-2.5 rounded-[8px] text-[14px] font-medium hover:bg-[#162d7a] transition-colors"
                >
                  <Plus size={15} /> Create new listing
                </button>
              </div>
              <div className="grid grid-cols-2 overflow-y-auto" style={{ width: '1023px', maxHeight: '632px', gap: '20px' }}>
                {listings.map(item => (
                  <div key={item.id} className="flex bg-white border border-gray-200 relative"
                    style={{ width: '500px', height: '143px', borderRadius: '10px', padding: '10px', gap: '10px' }}>
                    <div className="shrink-0 overflow-hidden bg-gray-100" style={{ width: '120px', height: '120px', borderRadius: '3px' }}>
                      <img src="/purchase(1).png" alt="product" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-between" style={{ width: '350px', height: '123px', gap: '5px' }}>
                      <p className="text-[#FF8A65] font-semibold text-[14px] leading-none">{item.title}</p>
                      <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '10px', lineHeight: '16px', color: '#6B7280' }}>{item.description}</p>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#FF8A65] font-semibold text-[13px]">{item.price}</span>
                        <span className="text-gray-400 text-[12px]">({item.condition})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', lineHeight: '100%', color: '#9CA3AF' }}>Listed on {item.listedDate}</span>
                        <span className="text-gray-300 text-[11px]">•</span>
                        <span className="text-[#1F3A93] text-[11px] font-medium">{item.clicks} clicks on listing</span>
                      </div>
                      <button className="text-left text-[#1F3A93] text-[12px] font-medium underline underline-offset-2 hover:text-[#162d7a] w-fit">View orders</button>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <ListingDropdown
                        onEdit={() => alert(`Edit listing #${item.id}`)}
                        onDelete={() => setListings(prev => prev.filter(l => l.id !== item.id))}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}