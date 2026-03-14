'use client';

import React, { useState } from 'react';

const orders = [
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', offer: '$300', status: 'Completed' },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Pending',   total: '$300', offer: '$300', status: 'Pending'   },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Refund',    total: '$300', offer: '$300', status: 'Refund'    },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', offer: '$300', status: 'Cancel'    },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', offer: '$300', status: 'Completed' },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Pending',   total: '$300', offer: '$300', status: 'Pending'   },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Refund',    total: '$300', offer: '$300', status: 'Refund'    },
];

// Mock data for Following Tab
const followedSellers = Array(18).fill({
  name: 'Jennifer Garnet',
  joined: 'Join oct 2023',
  listings: '9 listings',
  rating: 5
});

const statusBadge: Record<string, string> = {
  Completed: 'bg-green-50 text-green-700',
  Pending:   'bg-yellow-50 text-yellow-700',
  Refund:    'bg-blue-50 text-blue-700',
  Cancel:    'bg-red-50 text-red-700',
};

type Tab = 'Purchasing' | 'Offers' | 'Following';

export default function PurchasingPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Purchasing');
  const tabs: Tab[] = ['Purchasing', 'Offers', 'Following'];

  return (
    <div className="flex bg-white min-h-screen font-sans">
      {/* ── Left Sidebar ── */}
      <aside className="w-[230px] border-r border-gray-100 flex flex-col py-6 px-4 gap-8 flex-shrink-0">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 bg-[#FF8A65] rounded-full" />
          <span className="font-bold text-[18px]">ShopRise</span>
        </div>
        <nav className="flex flex-col gap-1">
          {['Dashbord', 'Purchasing', 'Sales', 'Favourites', 'Chat', 'Setting'].map((name) => (
            <button key={name} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] text-left ${name === 'Purchasing' ? 'bg-orange-50 text-[#FF8A65] font-medium' : 'text-gray-500 hover:bg-gray-50'}`}>
              {name}
            </button>
          ))}
        </nav>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col p-8 gap-6 overflow-x-hidden">
        <div className="flex justify-between items-center w-full max-w-[1023px]">
          <h1 className="text-[24px] font-bold">Welcome back John!</h1>
          <button className="text-[14px] text-gray-400">Go to marketplace ↗</button>
        </div>

        {/* ── Tabs ── */}
        <div className="flex items-center gap-8 border-b border-gray-100 w-full max-w-[1023px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[16px] whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-[#FF8A65] font-semibold' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#FF8A65]" />}
            </button>
          ))}
        </div>

        {/* ── Search and Date Row ── */}
        <div className="flex items-center justify-between w-full max-w-[1023px] gap-4">
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-1.5 gap-2 w-full max-w-[400px]">
            <span className="text-gray-400 text-sm">🔍</span>
            <input className="outline-none text-[13px] w-full text-gray-600 bg-transparent" placeholder="Search..." />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[12px] text-gray-500 border border-gray-200 px-3 py-1.5 rounded-md">
              <span className="whitespace-nowrap">01.11.2023 – 30.11.2023</span>
              <span className="text-gray-400">📅</span>
            </div>
            <button className="bg-[#FF8A65] text-white text-[13px] font-medium px-6 py-2 rounded-md whitespace-nowrap">Search</button>
          </div>
        </div>

        {/* ── Conditional Content Area ── */}
        {activeTab === 'Following' ? (
  /* ── Following Grid ── */
  <div 
    className="grid grid-cols-3 overflow-y-auto pr-2" 
    style={{ 
      width: '1023px', 
      height: '708px', 
      gap: '10px', // Tightened gap between cards
      alignContent: 'start' // Ensures cards stay at the top if fewer than 12
    }}
  >
    {followedSellers.map((seller, idx) => (
      <div 
        key={idx}
        className="border border-gray-200 flex items-center bg-white"
        style={{ 
          width: '329px', 
          height: '103px', 
          borderRadius: '10px', 
          padding: '10px', 
          gap: '10px',
          borderWidth: '1px'
        }}
      >
        {/* Avatar */}
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
           <img src="/purchase(2).png" alt="seller avatar" className="w-full h-full object-cover" />
        </div>

        {/* Info Container */}
        <div className="flex flex-col flex-1 h-full justify-between">
          <div className="flex justify-between items-start">
            <span style={{ 
              fontFamily: 'Inter', 
              fontSize: '14px', 
              fontWeight: 500, 
              lineHeight: '18px', 
              color: '#111827',
              width: '104px',
              height: '18px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}>
              {seller.name}
            </span>
            <button className="bg-[#1F3A93] text-white text-[10px] px-3 py-1 rounded-full font-medium whitespace-nowrap">
              Unfollow
            </button>
          </div>
          
          <span style={{ 
            fontFamily: 'Inter', 
            fontSize: '12px', 
            fontWeight: 400, 
            lineHeight: '18px', 
            color: '#6B7280',
            width: '79px',
            height: '18px'
          }}>
            {seller.joined}
          </span>

          <div className="flex items-center justify-between">
            <div className="flex gap-0.5 items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FF8A65] text-[12px]">★</span>
              ))}
              <span className="text-gray-400 text-[10px] ml-1">(110)</span>
            </div>
            <button className="text-[#1F3A93] text-[11px] font-medium underline">
              View listing
            </button>
          </div>
          
          <span className="text-[11px] text-gray-400 leading-none">
            {seller.listings}
          </span>
        </div>
      </div>
    ))}
  </div>
) : (
          /* ── Table View (Purchasing & Offers) ── */
          <div className="w-full max-w-[1023px] border border-gray-100 rounded-lg overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse table-fixed">
              <thead className="bg-[#F8F9FA]">
                <tr className="text-[12px] text-gray-500 font-semibold uppercase tracking-wider">
                  <th className="px-4 py-4 w-24">Date</th>
                  <th className="px-4 py-4 w-20 text-center">Image</th>
                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Seller</th>
                  <th className="px-4 py-4">Contact</th>
                  {activeTab === 'Offers' ? (
                     <>
                      <th className="px-4 py-4 w-24">Offer</th>
                      <th className="px-4 py-4 w-24">Price</th>
                     </>
                  ) : (
                    <th className="px-4 py-4">Fulfilment</th>
                  )}
                  {activeTab !== 'Offers' && <th className="px-4 py-4">Total</th>}
                  <th className="px-4 py-4 w-28">Status</th>
                  <th className="px-4 py-4 w-16">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[13px]">
                {orders.map((order, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap text-gray-600">{order.date}</td>
                    <td className="px-4 py-4">
                      <div className="w-10 h-10 rounded overflow-hidden bg-gray-100 border border-gray-50 mx-auto">
                        <img src="/purchase(1).png" alt="product" className="w-full h-full object-cover" />
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-gray-500 overflow-hidden text-ellipsis">{order.name}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                          <img src="/purchase(2).png" alt="user" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-gray-700">{order.seller}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <button className="text-[#1F3A93] font-medium underline whitespace-nowrap">Go to chat</button>
                    </td>
                    {activeTab === 'Offers' ? (
                      <>
                        <td className="px-4 py-4 font-semibold text-gray-800">{order.offer}</td>
                        <td className="px-4 py-4 font-semibold text-gray-800">{order.total}</td>
                      </>
                    ) : (
                      <>
                        <td className="px-4 py-4 whitespace-nowrap text-gray-500">{order.fulfilment}</td>
                        <td className="px-4 py-4 whitespace-nowrap font-bold text-gray-800">{order.total}</td>
                      </>
                    )}
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tighter ${statusBadge[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-bold text-gray-300 text-lg text-center cursor-pointer">···</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}