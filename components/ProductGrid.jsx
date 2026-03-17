'use client';

import React, { useState } from 'react';
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

const sortOptions = ['Less viewed', 'Most recent', 'Price: low to high', 'Price: high to low'];

const products = Array(42).fill(null).map((_, i) => ({
  id: i + 1,
  title: 'Liter trolley sprayer',
  price: '$9.99',
  condition: 'Used',
  location: 'Los Angeles,CA',
}));

const ITEMS_PER_PAGE = 36; // 6 columns × 6 rows

/* ─────────────────────────────────────────
   PRODUCT CARD
───────────────────────────────────────── */
function ProductCard({ product }) {
  return (
    <div className="cursor-pointer group">
      {/* Image */}
      <div
        className="w-full overflow-hidden bg-gray-100 mb-2"
        style={{ aspectRatio: '1 / 1', borderRadius: '4px' }}
      >
        <img
          src="/purchase(1).png"
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Info */}
      <p
        className="text-[#FF8A65] font-semibold leading-tight mb-0.5 group-hover:underline"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}
      >
        {product.title}
      </p>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#111827' }}>
        {product.price}{' '}
        <span style={{ color: '#6B7280' }}>({product.condition})</span>
      </p>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#6B7280' }}>
        {product.location}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function MarketplacePage() {
  const [searchQuery, setSearchQuery]         = useState('');
  const [sortBy, setSortBy]                   = useState('Less viewed');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [activeFilters, setActiveFilters]     = useState([...filterCategories]);
  const [page, setPage]                       = useState(1);
  const [activeNav, setActiveNav]             = useState('For you');

  const removeFilter = (cat) => setActiveFilters(prev => prev.filter(c => c !== cat));

  const filtered = products.filter(p =>
    searchQuery === '' || p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated  = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: 'Inter, sans-serif' }}
      onClick={() => setShowSortDropdown(false)}
    >

      {/* ══════════════════════════════════
          TOP NAV BAR
      ══════════════════════════════════ */}
      <header
        className="sticky top-0 z-40 bg-white border-b border-gray-200 flex items-center"
        style={{ height: '57px', width: '100%', paddingLeft: '16px', paddingRight: '16px', gap: '9px' }}
      >
        {/* Hamburger + Categories */}
        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-[6px] text-[13px] text-gray-700 hover:bg-gray-50 transition-colors shrink-0">
          <Menu size={15} />
          <span className="font-medium">Categories</span>
          <ChevronDown size={13} className="text-gray-400" />
        </button>

        {/* Nav links */}
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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center border border-gray-300 rounded-[6px] bg-white"
            style={{ width: '320px', height: '36px', paddingLeft: '10px', paddingRight: '6px' }}
          >
            <Search size={15} className="text-gray-400 shrink-0 mr-2" />
            <input
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setPage(1); }}
              className="flex-1 outline-none text-[13px] text-gray-700 placeholder-gray-400 bg-transparent"
              placeholder="Search Marketplace"
            />
          </div>
          <button
            className="h-[36px] px-5 text-white text-[13px] font-semibold rounded-[6px] hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ backgroundColor: '#FF8A65' }}
          >
            Search
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════
          SORT BY ROW
      ══════════════════════════════════ */}
      <div
        className="flex items-center px-4 border-b border-gray-100 bg-white"
        style={{ height: '44px', gap: '10px' }}
      >
        <span className="text-[13px] text-gray-500 shrink-0">Sort by:</span>

        {/* Sort dropdown */}
        <div className="relative" onClick={e => e.stopPropagation()}>
          <button
            onClick={() => setShowSortDropdown(o => !o)}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-[6px] text-[13px] text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {sortBy}
            <ChevronDown size={13} className="text-gray-400" />
          </button>
          {showSortDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg z-50 overflow-hidden" style={{ width: '180px' }}>
              {sortOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => { setSortBy(opt); setShowSortDropdown(false); }}
                  className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors hover:bg-gray-50
                    ${sortBy === opt ? 'text-[#FF8A65] font-medium' : 'text-gray-700'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Location */}
        <div className="flex items-center gap-1.5 text-[13px] text-gray-600 cursor-pointer hover:text-[#FF8A65] transition-colors">
          <MapPin size={14} style={{ color: '#FF8A65' }} />
          <span>Los Angeles,CA</span>
          <span className="text-gray-400">- 10 miles</span>
          <ChevronDown size={13} className="text-gray-400" />
        </div>
      </div>

      {/* ══════════════════════════════════
          FILTER CHIPS ROW
      ══════════════════════════════════ */}
      <div
        className="flex items-center px-4 border-b border-gray-100 bg-white overflow-x-auto"
        style={{ height: '44px', gap: '8px' }}
      >
        {activeFilters.map(cat => (
          <div
            key={cat}
            className="flex items-center gap-1.5 px-3 py-1 border border-gray-300 rounded-full text-[12px] text-gray-700 whitespace-nowrap hover:border-gray-400 transition-colors shrink-0 cursor-pointer"
          >
            <span>{cat}</span>
            <button
              onClick={() => removeFilter(cat)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={11} />
            </button>
          </div>
        ))}

        {activeFilters.length > 0 && (
          <button
            onClick={() => setActiveFilters([])}
            className="text-[12px] font-medium whitespace-nowrap shrink-0 hover:underline transition-colors"
            style={{ color: '#FF8A65' }}
          >
            Clear all categories
          </button>
        )}
      </div>

      {/* ══════════════════════════════════
          PRODUCT GRID
      ══════════════════════════════════ */}
      <div className="px-4 pt-4 pb-6">
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '12px',
          }}
        >
          {paginated.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* ── Pagination ── */}
        <div className="flex items-center justify-center gap-1.5 pt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-8 h-8 flex items-center justify-center rounded-[6px] border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={14} />
          </button>

          {[1, 2, 3].map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-8 h-8 flex items-center justify-center rounded-[6px] text-[13px] font-medium transition-colors
                ${page === n
                  ? 'text-white'
                  : 'border border-gray-200 text-gray-500 hover:bg-gray-50'}`}
              style={page === n ? { backgroundColor: '#FF8A65' } : {}}
            >
              {n}
            </button>
          ))}

          <span className="text-gray-400 text-[13px] px-1">...</span>

          <button
            onClick={() => setPage(9)}
            className={`w-8 h-8 flex items-center justify-center rounded-[6px] text-[13px] font-medium transition-colors
              ${page === 9
                ? 'text-white'
                : 'border border-gray-200 text-gray-500 hover:bg-gray-50'}`}
            style={page === 9 ? { backgroundColor: '#FF8A65' } : {}}
          >
            9
          </button>

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-[6px] border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
}