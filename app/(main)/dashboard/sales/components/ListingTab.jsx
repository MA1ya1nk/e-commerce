'use client';

import React, { useState } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import CreateItemTypePage    from './create-item/CreateItemTypePage';
import ItemForSaleForm       from './create-item/ItemForSaleForm';
import VehicleForSaleForm    from './create-item/VehicleForSaleForm';
import RealEstateForSaleForm from './create-item/RealEstateForSaleForm';

const mockListings = [
  { id: 1, title: 'Liter trolley sprayer', description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.', price: '$9.99', condition: 'Used', date: '06/19/2021', clicks: 0 },
  { id: 2, title: 'Liter trolley sprayer', description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.', price: '$9.99', condition: 'Used', date: '06/19/2021', clicks: 0 },
  { id: 3, title: 'Liter trolley sprayer', description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.', price: '$9.99', condition: 'Used', date: '06/19/2021', clicks: 0 },
  { id: 4, title: 'Liter trolley sprayer', description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.', price: '$9.99', condition: 'Used', date: '06/19/2021', clicks: 0 },
  { id: 5, title: 'Liter trolley sprayer', description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.', price: '$9.99', condition: 'Used', date: '06/19/2021', clicks: 0 },
  { id: 6, title: 'Liter trolley sprayer', description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.', price: '$9.99', condition: 'Used', date: '06/19/2021', clicks: 0 },
  { id: 7, title: 'Liter trolley sprayer', description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.', price: '$9.99', condition: 'Used', date: '06/19/2021', clicks: 0 },
  { id: 8, title: 'Liter trolley sprayer', description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.', price: '$9.99', condition: 'Used', date: '06/19/2021', clicks: 0 },
];

function ListingDropdown({ onEdit, onDelete }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
      >
        <MoreHorizontal size={16} />
      </button>
      {open && (
        <div
          className="absolute right-0 bottom-full mb-1 bg-white border border-gray-200 rounded-[8px] shadow-lg z-50 overflow-hidden"
          style={{ width: '110px' }}
        >
          <button
            onClick={() => { onEdit(); setOpen(false); }}
            className="w-full text-left px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => { onDelete(); setOpen(false); }}
            className="w-full text-left px-4 py-2.5 text-[13px] text-red-500 hover:bg-red-50 transition-colors"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default function ListingTab() {
  const [view, setView]         = useState('list');
  const [listings, setListings] = useState(mockListings);

  const handleDelete = (id) => setListings(prev => prev.filter(l => l.id !== id));

  if (view === 'selectType')  return <CreateItemTypePage    onSelect={t => setView(t)} onBack={() => setView('list')} />;
  if (view === 'item')        return <ItemForSaleForm        onBack={() => setView('selectType')} />;
  if (view === 'vehicle')     return <VehicleForSaleForm     onBack={() => setView('selectType')} />;
  if (view === 'realestate')  return <RealEstateForSaleForm  onBack={() => setView('selectType')} />;

  return (
    <div className="w-full">

      {/* Header row */}
      <div className="flex items-center justify-end mb-5">
        <button
          onClick={() => setView('selectType')}
          className="flex items-center gap-2 bg-[#1F3A93] text-white px-5 py-2.5 rounded-[8px] text-[14px] font-medium hover:bg-[#162d7a] transition-colors"
        >
          <Plus size={15} /> Create new listing
        </button>
      </div>

      {/* 
        ✅ FIXED: removed fixed width: '1023px' and width: '500px'
        Grid uses w-full + grid-cols-2 to fill all available space 
      */}
      <div className="grid grid-cols-2 gap-5 overflow-y-auto w-full" style={{ maxHeight: '632px' }}>
        {listings.map(item => (
          <div
            key={item.id}
            className="flex bg-white border border-gray-200 relative w-full"
            style={{ height: '143px', borderRadius: '10px', padding: '10px', gap: '10px' }}
          >
            {/* Image: fixed 120×120 */}
            <div className="shrink-0 overflow-hidden bg-gray-100" style={{ width: '120px', height: '120px', borderRadius: '3px' }}>
              <img src="/purchase(1).png" alt="product" className="w-full h-full object-cover" />
            </div>

            {/* Content: flex-1 fills remaining card width */}
            <div className="flex flex-col justify-between flex-1 min-w-0" style={{ height: '123px', gap: '5px' }}>
              <p className="text-[#FF8A65] font-semibold text-[14px] leading-none truncate">
                {item.title}
              </p>

              <p
                className="line-clamp-2"
                style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '10px', lineHeight: '16px', color: '#6B7280' }}
              >
                {item.description}
              </p>

              <div className="flex items-center gap-1.5">
                <span className="text-[#FF8A65] font-semibold text-[13px]">{item.price}</span>
                <span className="text-gray-400 text-[12px]">({item.condition})</span>
              </div>

              <div className="flex items-center gap-1">
                <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', lineHeight: '100%', color: '#9CA3AF' }}>
                  Listed on {item.date}
                </span>
                <span className="text-gray-300 text-[11px]">•</span>
                <span className="text-[#1F3A93] text-[11px] font-medium">{item.clicks} clicks on listing</span>
              </div>

              <button className="text-left text-[#1F3A93] text-[12px] font-medium underline underline-offset-2 hover:text-[#162d7a] transition-colors w-fit">
                View orders
              </button>
            </div>

            {/* Dropdown */}
            <div className="absolute bottom-3 right-3">
              <ListingDropdown
                onEdit={() => alert(`Edit listing #${item.id}`)}
                onDelete={() => handleDelete(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}