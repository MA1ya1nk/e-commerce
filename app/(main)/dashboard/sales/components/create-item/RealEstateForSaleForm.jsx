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

const propertyTypes = ['Apartment','House','Villa','Studio','Land','Commercial','Office'];
const listingTypes  = ['For Sale','For Rent'];
const amenities     = ['Parking','Pool','Garden','Elevator','Gym','Balcony','Furnished','Pet Friendly','Security'];

export default function RealEstateForSaleForm({ onBack }) {
  const [form, setForm] = useState({
    listingType: 'For Sale',
    propertyType: 'Apartment',
    title: 'Modern Studio — Downtown',
    description: 'A bright and spacious studio located in the heart of downtown with stunning city views, modern finishes, and easy access to public transport.',
    price: '1,200$',
    size: '65',
    rooms: '2',
    bathrooms: '1',
    location: 'Los Angeles, CA',
    address: '123 Main Street',
    zipCode: '90001',
  });
  const [selectedAmenities, setSelectedAmenities] = useState(['Parking','Elevator']);
  const [photos, setPhotos] = useState([]);
  const [activePhoto, setActivePhoto] = useState(0);
  const [message, setMessage] = useState('');
  const fileRef = useRef();

  const handleChange = (field, val) => setForm(prev => ({ ...prev, [field]: val }));
  const toggleAmenity = (a) => setSelectedAmenities(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map(f => URL.createObjectURL(f));
    setPhotos(prev => [...prev, ...files].slice(0, 10));
  };

  const inputClass = "w-full h-[42px] px-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#10B981] focus:outline-none transition-colors bg-white";
  const labelClass = "block text-[13px] font-medium text-[#374151] mb-1.5";
  const mainPhoto   = photos[activePhoto] || null;

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

          {/* ── LEFT FORM ── */}
          <div style={{ width: '390px', minHeight: '948px', borderRadius: '10px', padding: '20px', borderWidth: '1px' }}
            className="border border-gray-200 flex flex-col gap-5 shrink-0">

            <button onClick={onBack} className="flex items-center gap-2 text-[#10B981] font-medium text-[14px] hover:opacity-80 transition-opacity w-fit">
              <ArrowLeft size={16} /> Back
            </button>

            <div>
              <h2 className="text-[#10B981] font-bold text-[22px] mb-1">Real estate for sale or rent</h2>
              <p className="text-[#10B981] font-semibold text-[14px]">Informations <span className="text-gray-400 font-normal">(Mandatory)</span></p>
              <p className="text-gray-500 text-[13px]">Give as much detail possible</p>
            </div>

            <div className="w-full h-px bg-gray-100" />

            {/* Listing type toggle */}
            <div>
              <label className={labelClass}>Listing Type</label>
              <div className="flex gap-2">
                {listingTypes.map(type => (
                  <button key={type} onClick={() => handleChange('listingType', type)}
                    className={`flex-1 py-2 rounded-[8px] text-[13px] font-medium border transition-colors
                      ${form.listingType === type ? 'bg-[#10B981] text-white border-[#10B981]' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}>
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Property type */}
            <div>
              <label className={labelClass}>Property Type</label>
              <select value={form.propertyType} onChange={e => handleChange('propertyType', e.target.value)} className={inputClass} style={{ borderColor: form.propertyType ? '#E5E7EB' : '#E5E7EB' }}>
                {propertyTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>

            {/* Title */}
            <div>
              <label className={labelClass}>Title</label>
              <input value={form.title} onChange={e => handleChange('title', e.target.value)} className={inputClass} placeholder="e.g. Modern Studio — Downtown" />
            </div>

            {/* Description */}
            <div>
              <label className={labelClass}>Description</label>
              <textarea value={form.description} onChange={e => handleChange('description', e.target.value)} rows={4}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#10B981] focus:outline-none transition-colors resize-none bg-white"
                placeholder="Describe the property..." />
            </div>

            {/* Photos */}
            <div>
              <label className={labelClass}>Photos ({photos.length}/10). <span className="text-gray-400 font-normal">You can add up to 10 photos.</span></label>
              <div onClick={() => fileRef.current.click()}
                className="w-full border border-gray-200 rounded-[8px] flex flex-col items-center justify-center cursor-pointer hover:border-[#10B981] transition-colors"
                style={{ height: '100px' }}>
                <div className="w-9 h-9 bg-[#10B981] rounded-full flex items-center justify-center mb-1">
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
                      className={`w-12 h-12 object-cover rounded-[6px] cursor-pointer border-2 ${activePhoto === i ? 'border-[#10B981]' : 'border-transparent'}`} />
                  ))}
                </div>
              )}
            </div>

            {/* Size + Rooms */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Size (m²)</label>
                <input value={form.size} onChange={e => handleChange('size', e.target.value)} className={inputClass} placeholder="65" type="number" />
              </div>
              <div>
                <label className={labelClass}>Bedrooms</label>
                <input value={form.rooms} onChange={e => handleChange('rooms', e.target.value)} className={inputClass} placeholder="2" type="number" />
              </div>
            </div>

            {/* Bathrooms */}
            <div>
              <label className={labelClass}>Bathrooms</label>
              <input value={form.bathrooms} onChange={e => handleChange('bathrooms', e.target.value)} className={inputClass} placeholder="1" type="number" />
            </div>

            {/* Price */}
            <div>
              <label className={labelClass}>Price {form.listingType === 'For Rent' ? '($/mo)' : '($)'}</label>
              <input value={form.price} onChange={e => handleChange('price', e.target.value)} className={inputClass} placeholder="1200$" />
            </div>

            {/* Amenities */}
            <div>
              <label className={labelClass}>Amenities</label>
              <div className="flex flex-wrap gap-2">
                {amenities.map(a => (
                  <button key={a} onClick={() => toggleAmenity(a)}
                    className={`px-3 py-1 rounded-full text-[12px] font-medium border transition-colors
                      ${selectedAmenities.includes(a) ? 'bg-[#10B981] text-white border-[#10B981]' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}>
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className={labelClass}>Location</label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#10B981]" />
                <input value={form.location} onChange={e => handleChange('location', e.target.value)}
                  className="w-full h-[42px] pl-8 pr-3 border border-gray-200 rounded-[8px] text-[14px] text-gray-700 focus:border-[#10B981] focus:outline-none transition-colors bg-white"
                  placeholder="Los Angeles, CA" />
              </div>
            </div>

            {/* Address */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Address</label>
                <input value={form.address} onChange={e => handleChange('address', e.target.value)} className={inputClass} placeholder="123 Main St" />
              </div>
              <div>
                <label className={labelClass}>Zip Code</label>
                <input value={form.zipCode} onChange={e => handleChange('zipCode', e.target.value)} className={inputClass} placeholder="90001" />
              </div>
            </div>

            <button className="w-full h-[44px] bg-[#10B981] text-white rounded-[8px] text-[14px] font-semibold hover:bg-[#0ea572] transition-colors mt-2">
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

          {/* ── RIGHT DETAIL PANEL ── */}
          <div style={{ width: '400px', minHeight: '812px', paddingTop: '10px', paddingBottom: '10px' }}
            className="flex flex-col gap-4 shrink-0">
            <div className="h-6" />

            <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', lineHeight: '100%', color: '#374151' }}>
              {form.propertyType} · {form.listingType}
            </p>
            <h1 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '24px', lineHeight: '100%', color: '#10B981', marginTop: '-8px' }}>
              {form.title || 'Modern Studio — Downtown'}
            </h1>

            {/* Stats chips */}
            <div className="flex gap-3 flex-wrap mt-[-4px]">
              {form.size && <span className="bg-gray-100 text-gray-600 text-[12px] px-3 py-1 rounded-full">{form.size} m²</span>}
              {form.rooms && <span className="bg-gray-100 text-gray-600 text-[12px] px-3 py-1 rounded-full">{form.rooms} bed</span>}
              {form.bathrooms && <span className="bg-gray-100 text-gray-600 text-[12px] px-3 py-1 rounded-full">{form.bathrooms} bath</span>}
            </div>

            <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', lineHeight: '18px', color: '#111827' }}>Description</p>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', lineHeight: '18px', color: '#6B7280', marginTop: '-8px' }}>
              {form.description}
            </p>

            <div className="flex items-center gap-4">
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

            <p className="text-[#10B981] font-bold text-[18px]">
              {form.price}
              {form.listingType === 'For Rent' ? '/mo ' : ' '}
              <span className="text-gray-500 font-normal text-[14px]">(Used like new)</span>
            </p>

            {/* Amenity chips on preview */}
            {selectedAmenities.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-[-4px]">
                {selectedAmenities.map(a => (
                  <span key={a} className="bg-[#ECFDF5] text-[#10B981] text-[11px] px-2.5 py-1 rounded-full font-medium">{a}</span>
                ))}
              </div>
            )}

            {/* Map */}
            <div style={{ width: '100%', height: '180px', borderRadius: '10px', overflow: 'hidden' }}>
              <svg width="100%" height="100%" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="180" fill="#E8E0D4"/>
                <line x1="0" y1="90" x2="400" y2="90" stroke="#D4C9B8" strokeWidth="18"/>
                <line x1="200" y1="0" x2="200" y2="180" stroke="#D4C9B8" strokeWidth="10"/>
                <line x1="0" y1="50" x2="400" y2="130" stroke="#CFC4B2" strokeWidth="7"/>
                <rect x="55" y="25" width="45" height="28" rx="4" fill="#C9C0AD"/>
                <rect x="135" y="45" width="38" height="22" rx="4" fill="#C9C0AD"/>
                <rect x="285" y="65" width="50" height="30" rx="4" fill="#C9C0AD"/>
                <text x="120" y="102" fontFamily="Inter" fontSize="12" fill="#8B7355" textAnchor="middle">California</text>
                <circle cx="200" cy="90" r="36" stroke="#10B981" strokeWidth="1.5" fill="#10B98118"/>
                <circle cx="200" cy="90" r="5" fill="#10B981"/>
                <path d="M200 79 C196.5 83 194.5 86.5 194.5 90 C194.5 95.8 197 100.7 200 104.2 C203 100.7 205.5 95.8 205.5 90 C205.5 86.5 203.5 83 200 79Z" fill="#10B981"/>
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
                <button className="bg-[#10B981] text-white px-4 py-1.5 rounded-[6px] text-[13px] font-medium hover:bg-[#0ea572] transition-colors">
                  Send
                </button>
              </div>
            </div>

            <button className="w-full h-[44px] border-2 border-[#10B981] text-[#10B981] rounded-[8px] text-[14px] font-semibold hover:bg-green-50 transition-colors">
              Go to chat
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}