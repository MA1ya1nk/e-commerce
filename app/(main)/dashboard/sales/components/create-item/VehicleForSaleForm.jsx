'use client';

import React, { useState, useRef } from 'react';
import { ArrowLeft, Bell, LayoutGrid, ShoppingBag, BadgeDollarSign, Heart, MessageCircle, Settings, HelpCircle, LogOut, Plus, MapPin, Clock, Heart as HeartIcon } from 'lucide-react';

const navItems = [
  { icon: LayoutGrid,      label: 'Dashbord'   },
  { icon: ShoppingBag,     label: 'Purchasing' },
  { icon: BadgeDollarSign, label: 'Sales', active: true },
  { icon: Heart,           label: 'Favourites' },
  { icon: MessageCircle,   label: 'Chat'       },
  { icon: Settings,        label: 'Setting'    },
];

const vehicleTypes = ['Car/truck','Motorcycle','Boat','RV/Camper','Other'];
const years = Array.from({ length: 30 }, (_, i) => String(2025 - i));

export default function VehicleForSaleForm({ onBack }) {
  const [form, setForm] = useState({
    type: 'Car/truck',
    location: 'Los Angeles,CA',
    year: '2015',
    brand: 'Toyota',
    model: 'Camry',
    description: 'A sleek, silver sedan with low mileage and pristine interior. This reliable vehicle offers smooth handling and impressive fuel efficiency.',
    price: '9.99$',
    condition: 'Used like new',
  });
  const [photos, setPhotos] = useState([]);
  const [activePhoto, setActivePhoto] = useState(0);
  const [message, setMessage] = useState('');
  const fileRef = useRef();

  const handleChange = (field, val) => setForm(prev => ({ ...prev, [field]: val }));
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map(f => URL.createObjectURL(f));
    setPhotos(prev => [...prev, ...files].slice(0, 10));
  };

  const inputClass = "w-full h-[42px] px-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#1F3A93] focus:outline-none transition-colors bg-white";
  const labelClass = "block text-[13px] font-medium text-[#374151] mb-1.5";

  const mainPhoto = photos[activePhoto] || null;
  const previewTitle = `${form.brand} ${form.model} ${form.year}`.trim() || 'Toyota Camry 2025';

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
          <div className="w-10 h-10 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-lg"><HelpCircle size={20} /></div>
          <div className="w-10 h-10 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-lg"><LogOut size={20} /></div>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <header className="h-[56px] flex justify-end items-center px-8 gap-6 border-b border-gray-100 shrink-0">
          <Bell size={18} className="text-gray-400 cursor-pointer" />
          <div className="flex items-center gap-1 text-gray-500 cursor-pointer text-[13px]">
            <span>Go to marketplace</span><span className="text-[11px]">↗</span>
          </div>
        </header>

        <div className="flex gap-5 px-6 pt-6 pb-10 overflow-y-auto">

          {/* ── LEFT FORM: 390px ── */}
          <div style={{ width: '390px', minHeight: '948px', borderRadius: '10px', padding: '20px', borderWidth: '1px' }}
            className="border border-gray-200 flex flex-col gap-5 shrink-0">

            <button onClick={onBack} className="flex items-center gap-2 text-[#1F3A93] font-medium text-[14px] hover:opacity-80 transition-opacity w-fit">
              <ArrowLeft size={16} /> Back
            </button>

            <div>
              <h2 className="text-[#1F3A93] font-bold text-[22px] mb-1">Vehicle for sale</h2>
              <p className="text-[#1F3A93] font-semibold text-[14px]">Informations <span className="text-gray-400 font-normal">(Mandatory)</span></p>
              <p className="text-gray-500 text-[13px]">Give as much detail possible</p>
            </div>

            <div className="w-full h-px bg-gray-100" />

            {/* Type */}
            <div>
              <label className={labelClass}>Type</label>
              <select value={form.type} onChange={e => handleChange('type', e.target.value)} className={inputClass}>
                {vehicleTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>

            {/* Photos */}
            <div>
              <label className={labelClass}>
                Photos ({photos.length}/10). <span className="text-gray-400 font-normal">You can add up to 10 photos.</span>
              </label>
              <div onClick={() => fileRef.current.click()}
                className="w-full border border-gray-200 rounded-[8px] flex flex-col items-center justify-center cursor-pointer hover:border-[#1F3A93] transition-colors"
                style={{ height: '100px' }}>
                <div className="w-9 h-9 bg-[#1F3A93] rounded-full flex items-center justify-center mb-1">
                  <Plus size={20} className="text-white" />
                </div>
                <p className="text-[13px] text-gray-600 font-medium">Add photos</p>
                <p className="text-[11px] text-gray-400">Or drag and drop</p>
                <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFileChange} />
              </div>
              {photos.length > 0 && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  {photos.map((p, i) => (
                    <img key={i} src={p} alt="" onClick={() => setActivePhoto(i)}
                      className={`w-12 h-12 object-cover rounded-[6px] cursor-pointer border-2 ${activePhoto === i ? 'border-[#1F3A93]' : 'border-transparent'}`} />
                  ))}
                </div>
              )}
            </div>

            {/* About this vehicle section */}
            <div>
              <p className="text-[#1F3A93] font-semibold text-[14px]">About this vehicle <span className="text-gray-400 font-normal">(Mandatory)</span></p>
              <p className="text-gray-500 text-[13px]">Allow buyers to know more about the vehicle you are selling.</p>
            </div>

            <div className="w-full h-px bg-gray-100" />

            {/* Location */}
            <div>
              <label className={labelClass}>Location</label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1F3A93]" />
                <input value={form.location} onChange={e => handleChange('location', e.target.value)}
                  className="w-full h-[42px] pl-8 pr-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#1F3A93] focus:outline-none transition-colors bg-white"
                  placeholder="Los Angeles, CA" />
              </div>
            </div>

            {/* Year */}
            <div>
              <label className={labelClass}>Year</label>
              <select value={form.year} onChange={e => handleChange('year', e.target.value)} className={inputClass}>
                {years.map(y => <option key={y}>{y}</option>)}
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className={labelClass}>Brand</label>
              <input value={form.brand} onChange={e => handleChange('brand', e.target.value)} className={inputClass} placeholder="Toyota" />
            </div>

            {/* Model */}
            <div>
              <label className={labelClass}>Model</label>
              <input value={form.model} onChange={e => handleChange('model', e.target.value)} className={inputClass} placeholder="Camry" />
            </div>

            {/* Description */}
            <div>
              <label className={labelClass}>Description</label>
              <textarea value={form.description} onChange={e => handleChange('description', e.target.value)} rows={4}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#1F3A93] focus:outline-none transition-colors resize-none bg-white"
                placeholder="Describe your vehicle..." />
            </div>

            {/* Price */}
            <div>
              <label className={labelClass}>Price</label>
              <input value={form.price} onChange={e => handleChange('price', e.target.value)} className={inputClass} placeholder="9.99$" />
            </div>

            {/* Condition */}
            <div>
              <label className={labelClass}>Condition</label>
              <select value={form.condition} onChange={e => handleChange('condition', e.target.value)} className={inputClass}>
                {['New','Used like new','Good','Fair','For parts'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <button className="w-full h-[44px] bg-[#1F3A93] text-white rounded-[8px] text-[14px] font-semibold hover:bg-[#162d7a] transition-colors mt-2">
              Publish listing
            </button>
          </div>

          {/* ── MIDDLE: images ── */}
          <div style={{ width: '310px', paddingTop: '10px', paddingBottom: '30px' }} className="flex flex-col gap-4 shrink-0">
            <div className="h-6" />
            <div style={{ width: '310px', height: '259px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#F3F4F6' }}>
              {mainPhoto
                ? <img src={mainPhoto} alt="main" className="w-full h-full object-cover" />
                : <img src="/purchase(1).png" alt="main" className="w-full h-full object-cover" />
              }
            </div>
            <div className="flex gap-2 mt-1">
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

          {/* ── RIGHT DETAIL PANEL: 400px ── */}
          <div style={{ width: '400px', minHeight: '812px', paddingTop: '10px', paddingBottom: '10px' }}
            className="flex flex-col gap-4 shrink-0">
            <div className="h-6" />

            <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', lineHeight: '100%', color: '#374151' }}>
              {form.type}
            </p>
            <h1 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', lineHeight: '100%', color: '#FF8A65', marginTop: '-8px' }}>
              {previewTitle}
            </h1>
            <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', lineHeight: '18px', color: '#111827', marginTop: '-4px' }}>
              Description
            </p>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '18px', color: '#6B7280', marginTop: '-8px' }}>
              {form.description}
            </p>

            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
                <Clock size={14} className="text-gray-400" />
                <span>3 hours ago</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
                <MapPin size={14} className="text-gray-400" />
                <span>{form.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-[13px] cursor-pointer hover:text-red-400 transition-colors">
              <HeartIcon size={15} />
              <span>Add to favorites</span>
            </div>

            <p className="text-[#FF8A65] font-bold text-[18px]">
              {form.price} <span className="text-gray-500 font-normal text-[14px]">({form.condition})</span>
            </p>

            {/* Map */}
            <div style={{ width: '100%', height: '200px', borderRadius: '10px', overflow: 'hidden' }}>
              <svg width="100%" height="100%" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="200" fill="#E8E0D4"/>
                <line x1="0" y1="100" x2="400" y2="100" stroke="#D4C9B8" strokeWidth="20"/>
                <line x1="200" y1="0" x2="200" y2="200" stroke="#D4C9B8" strokeWidth="12"/>
                <line x1="0" y1="60" x2="400" y2="140" stroke="#CFC4B2" strokeWidth="8"/>
                <rect x="60" y="30" width="50" height="30" rx="4" fill="#C9C0AD"/>
                <rect x="140" y="50" width="40" height="25" rx="4" fill="#C9C0AD"/>
                <rect x="290" y="70" width="55" height="35" rx="4" fill="#C9C0AD"/>
                <text x="120" y="115" fontFamily="Inter" fontSize="13" fill="#8B7355" textAnchor="middle">California</text>
                <circle cx="200" cy="100" r="40" stroke="#1F3A93" strokeWidth="1.5" fill="#1F3A9318"/>
                <circle cx="200" cy="100" r="6" fill="#1F3A93"/>
                <path d="M200 88 C196 92 194 96 194 100 C194 106.6 196.7 112 200 116 C203.3 112 206 106.6 206 100 C206 96 204 92 200 88Z" fill="#1F3A93"/>
              </svg>
            </div>

            {/* Seller */}
            <div>
              <p className="text-[14px] font-semibold text-gray-700 mb-3">Seller</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <img src="/purchase(2).png" alt="seller" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-gray-800">Jennifer Garnet</p>
                  <p className="text-[12px] text-gray-400">Join oct 2023</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#FF8A65] text-[13px]">★</span>)}
                  <span className="text-gray-400 text-[11px] ml-1">(10)</span>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <p className="text-[14px] font-semibold text-gray-700 mb-3">Send a message to the seller</p>
              <div className="flex items-center gap-2 border border-gray-200 rounded-[8px] px-3 h-[44px]">
                <input value={message} onChange={e => setMessage(e.target.value)}
                  className="flex-1 outline-none text-[13px] text-gray-600 placeholder-gray-300 bg-transparent"
                  placeholder="Hello, is this article still available?" />
                <button className="bg-[#1F3A93] text-white px-4 py-1.5 rounded-[6px] text-[13px] font-medium hover:bg-[#162d7a] transition-colors">
                  Send
                </button>
              </div>
            </div>

            <button className="w-full h-[44px] border-2 border-[#FF8A65] text-[#FF8A65] rounded-[8px] text-[14px] font-semibold hover:bg-orange-50 transition-colors">
              Go to chat
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}