'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Menu, Search, MapPin, ChevronDown, ChevronLeft, ChevronRight, X
} from 'lucide-react';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const navLinks = ['For you', 'Local', 'Selling', 'Buying', 'More'];

const filterCategories = [
  'Arts & Crafts',
  'Antiques & Collectibles',
  'Auto Parts',
  'Books, Movies & Music',
  'Electronics',
  'Furniture',
  'Home Improvement & Tools',
];

const allCategories = [
  'Antiques & Collectibles', 'Appliance', 'Arts & Crafts', 'Auto Parts', 'Baby',
  'Books, Movies & Music', 'Home Improvement & Tools', 'Electronics', 'Furniture',
  'Garage Sale', 'Health & Beauty', 'Home Goods & Decor', 'Housing for Sale',
  'Jewelry & Watches', 'Kidswear & Baby', 'Luggage & Bags', 'Menswear',
  'Miscellaneous', 'Musical instruments', 'Patio & Garden', 'Pet Supplies', 'Rentals'
];

const sortOptions = ['Less viewed', 'Most recent', 'Price: low to high', 'Price: high to low'];

const products = Array(42).fill(null).map((_, i) => ({
  id: i + 1,
  title: 'Liter trolley sprayer',
  price: '$9.99',
  condition: 'Used',
  location: 'Los Angeles,CA',
}));

const ITEMS_PER_PAGE = 36;

/* ─────────────────────────────────────────
   PRODUCT CARD
───────────────────────────────────────── */
function ProductCard({ product }) {
  return (
    <div
      className="cursor-pointer group border border-gray-200 bg-white hover:shadow-sm transition-all"
      style={{ borderRadius: '10px', padding: '10px' }}
    >
      <Link href={`/products/${product.id}`}>
        <div
          className="w-full overflow-hidden bg-gray-100 mb-2"
          style={{ aspectRatio: '1 / 1', borderRadius: '6px' }}
        >
          <img
            src="/purchase(1).png"
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      </Link>

      <p className="text-[#FF8A65] font-semibold leading-tight mb-0.5 group-hover:underline" style={{ fontSize: '13px' }}>
        {product.title}
      </p>

      <p style={{ fontSize: '12px', color: '#111827' }}>
        {product.price} <span style={{ color: '#6B7280' }}>({product.condition})</span>
      </p>

      <p style={{ fontSize: '12px', color: '#6B7280' }}>
        {product.location}
      </p>
    </div>
  );
}
/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Less viewed');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showCategories, setShowCategories] = useState(false); // NEW
  const [activeFilters, setActiveFilters] = useState([...filterCategories]);
  const [page, setPage] = useState(1);
  const [activeNav, setActiveNav] = useState('For you');

  const removeFilter = (cat) => setActiveFilters(prev => prev.filter(c => c !== cat));
  
  const addFilter = (cat) => {
    if (!activeFilters.includes(cat)) setActiveFilters(prev => [...prev, cat]);
    setShowCategories(false);
  };

  const filtered = products.filter(p =>
    searchQuery === '' || p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: 'Inter, sans-serif' }}
      onClick={() => {
        setShowSortDropdown(false);
        setShowCategories(false);
      }}
    >
      <header
        className="sticky top-0 z-50 bg-white border-b border-gray-200 flex items-center"
        style={{ height: '57px', width: '100%', paddingLeft: '16px', paddingRight: '16px', gap: '9px' }}
      >
        {/* DROPDOWN SECTION */}
        <div className="relative" onClick={e => e.stopPropagation()}>
          <button 
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-[6px] text-[13px] text-gray-700 hover:bg-gray-50 transition-colors shrink-0"
          >
            <Menu size={15} />
            <span className="font-medium">Categories</span>
            <ChevronDown size={13} className="text-gray-400" />
          </button>

          {showCategories && (
  <div 
    className="absolute top-full left-0 mt-1 bg-white border border-gray-200 shadow-xl z-50" 
    style={{ 
      width: '240px', 
      borderRadius: '4px',
      padding: '4px 0' // Adds a little breathing room top and bottom
    }}
  >
    {allCategories.map(cat => (
      <button
        key={cat}
        onClick={() => addFilter(cat)}
        className="w-full text-left px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 transition-colors"
      >
        {cat}
      </button>
    ))}
  </div>
)}
        </div>

        <nav className="flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => setActiveNav(link)}
              className={`px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors flex items-center gap-1
                ${activeNav === link ? 'text-[#FF8A65]' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {link}
              {link === 'More' && <ChevronDown size={13} />}
            </button>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-300 rounded-[6px] bg-white" style={{ width: '320px', height: '36px', paddingLeft: '10px', paddingRight: '6px' }}>
            <Search size={15} className="text-gray-400 shrink-0 mr-2" />
            <input
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setPage(1); }}
              className="flex-1 outline-none text-[13px] text-gray-700 placeholder-gray-400 bg-transparent"
              placeholder="Search Marketplace"
            />
          </div>
          <button className="h-[36px] px-5 text-white text-[13px] font-semibold rounded-[6px] hover:opacity-90 transition-opacity whitespace-nowrap" style={{ backgroundColor: '#FF8A65' }}>
            Search
          </button>
        </div>
      </header>

      {/* SORT BY ROW */}
      <div className="flex items-center px-4 border-b border-gray-100 bg-white" style={{ height: '44px', gap: '10px' }}>
        <span className="text-[13px] text-gray-500 shrink-0">Sort by:</span>
        <div className="relative" onClick={e => e.stopPropagation()}>
          <button onClick={() => setShowSortDropdown(o => !o)} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-[6px] text-[13px] text-gray-700 hover:bg-gray-50">
            {sortBy} <ChevronDown size={13} className="text-gray-400" />
          </button>
          {showSortDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg z-50 overflow-hidden" style={{ width: '180px' }}>
              {sortOptions.map(opt => (
                <button key={opt} onClick={() => { setSortBy(opt); setShowSortDropdown(false); }} className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-gray-50 ${sortBy === opt ? 'text-[#FF8A65] font-medium' : 'text-gray-700'}`}>
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-1.5 text-[13px] text-gray-600 cursor-pointer hover:text-[#FF8A65]">
          <MapPin size={14} style={{ color: '#FF8A65' }} />
          <span>Los Angeles,CA</span> <span className="text-gray-400">- 10 miles</span> <ChevronDown size={13} className="text-gray-400" />
        </div>
      </div>

      {/* FILTER CHIPS ROW */}
      <div className="flex items-center px-4 border-b border-gray-100 bg-white overflow-x-auto" style={{ height: '44px', gap: '8px' }}>
        {activeFilters.map(cat => (
          <div key={cat} className="flex items-center gap-1.5 px-3 py-1 border border-gray-300 rounded-full text-[12px] text-gray-700 whitespace-nowrap hover:border-gray-400 shrink-0 cursor-pointer">
            <span>{cat}</span>
            <button onClick={() => removeFilter(cat)} className="text-gray-400 hover:text-gray-600"><X size={11} /></button>
          </div>
        ))}
        {activeFilters.length > 0 && (
          <button onClick={() => setActiveFilters([])} className="text-[12px] font-medium whitespace-nowrap shrink-0 hover:underline" style={{ color: '#FF8A65' }}>
            Clear all categories
          </button>
        )}
      </div>

      {/* GRID */}
      <div className="px-4 pt-4 pb-6">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
          {paginated.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}