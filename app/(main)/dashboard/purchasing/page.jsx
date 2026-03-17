'use client';

import React, { useState } from 'react';
import NextLink from 'next/link';
import {
  LayoutGrid, ShoppingBag, BadgeDollarSign, Heart,
  MessageCircle, Settings, HelpCircle, LogOut, Bell,
  Search, Calendar,
} from 'lucide-react';

const navItems = [
  { icon: LayoutGrid,      label: 'Dashbord',   href: '/dashboard' },
  { icon: ShoppingBag,     label: 'Purchasing', href: '/dashboard/purchasing', active: true },
  { icon: BadgeDollarSign, label: 'Sales',      href: '/dashboard/sales' },
  { icon: Heart,           label: 'Favourites', href: '/dashboard/favourites' },
  { icon: MessageCircle,   label: 'Chat',       href: '/dashboard/chat' },
  { icon: Settings,        label: 'Setting',    href: '/dashboard/setting' },
];

const orders = [
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', offer: '$300', status: 'Completed' },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Pending',   total: '$300', offer: '$300', status: 'Pending'   },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Refund',    total: '$300', offer: '$300', status: 'Refund'    },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', offer: '$300', status: 'Cancel'    },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Delivered', total: '$300', offer: '$300', status: 'Completed' },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Pending',   total: '$300', offer: '$300', status: 'Pending'   },
  { date: '18 March', name: 'Litter troller sprayer', seller: 'Jackson Smith', fulfilment: 'Refund',    total: '$300', offer: '$300', status: 'Refund'    },
];

const followedSellers = Array(18).fill({
  name: 'Jennifer Garnet',
  joined: 'Join oct 2023',
  listings: '9 listings',
  rating: 5,
});

const statusBadge = {
  Completed: 'bg-green-50 text-green-700',
  Pending:   'bg-yellow-50 text-yellow-700',
  Refund:    'bg-blue-50 text-blue-700',
  Cancel:    'bg-red-50 text-red-700',
};

export default function PurchasingPage() {
  const [activeTab, setActiveTab] = useState('Purchasing');
  const tabs = ['Purchasing', 'Offers', 'Following'];

  return (
    <div className="flex bg-[#F9FAFB] min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── SIDEBAR ── */}
      <aside className="w-[210px] bg-white border-r border-gray-100 flex flex-col py-6 px-4 shrink-0 min-h-screen sticky top-0">
        <div className="flex items-center gap-2 px-2 mb-10">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <span className="font-bold text-[#111827] text-[18px]">ShopRise</span>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map(({ icon: Icon, label, href, active }) => (
            <NextLink key={label} href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                ${active ? 'bg-orange-50 text-[#FF8A65]' : 'text-gray-500 hover:bg-gray-50'}`}>
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

      {/* ── MAIN: flex-1 fills all remaining width ── */}
      <main className="flex-1 flex flex-col min-w-0">

        <header className="h-[56px] flex justify-end items-center px-8 gap-6 bg-white border-b border-gray-100">
          <Bell size={18} className="text-gray-400 cursor-pointer" />
          <NextLink href="/marketplace" className="flex items-center gap-1 text-gray-500 text-[13px] hover:text-gray-800 transition-colors">
            <span>Go to marketplace</span><span className="text-[11px]">↗</span>
          </NextLink>
        </header>

        {/* ── w-full, no max-w ── */}
        <div className="w-full px-8 pt-6 pb-10 flex flex-col gap-5">

          <h1 className="text-[24px] font-bold text-[#111827]">Welcome back John!</h1>

          {/* Tabs */}
          <div className="flex items-end gap-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[15px] font-medium relative whitespace-nowrap transition-colors
                  ${activeTab === tab ? 'text-[#FF8A65]' : 'text-gray-400 hover:text-gray-600'}`}>
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#FF8A65] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Search + Date */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center border border-gray-200 rounded-[8px] px-3 h-[38px] gap-2 bg-white" style={{ width: '360px' }}>
              <Search size={14} className="text-gray-400 shrink-0" />
              <input className="outline-none text-[13px] w-full text-gray-600 bg-transparent placeholder-gray-300" placeholder="Search..." />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-[8px] px-3 h-[38px] text-[12px] text-gray-500 cursor-pointer hover:border-gray-300 transition-colors">
                <span>01.11.2023</span>
                <span className="text-gray-300 mx-1">–</span>
                <span>30.11.2023</span>
                <Calendar size={14} className="text-gray-400 ml-1" />
              </div>
              <button className="h-[38px] px-6 bg-[#FF8A65] text-white text-[13px] font-medium rounded-[8px] hover:bg-[#f07849] transition-colors whitespace-nowrap">
                Search
              </button>
            </div>
          </div>

          {/* ── Following Grid: auto fills width ── */}
          {activeTab === 'Following' ? (
            <div className="grid grid-cols-3 gap-3 overflow-y-auto" style={{ maxHeight: '708px', alignContent: 'start' }}>
              {followedSellers.map((seller, idx) => (
                <div key={idx}
                  className="border border-gray-200 flex items-center bg-white"
                  style={{ height: '103px', borderRadius: '10px', padding: '10px', gap: '10px' }}>
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    <img src="/purchase(2).png" alt="seller" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 h-full justify-between py-0.5">
                    <div className="flex justify-between items-start">
                      <span style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 500, color: '#111827' }}
                        className="truncate max-w-[104px]">{seller.name}</span>
                      <button className="bg-[#1F3A93] text-white text-[10px] px-3 py-1 rounded-full font-medium whitespace-nowrap">
                        Unfollow
                      </button>
                    </div>
                    <span style={{ fontFamily: 'Inter', fontSize: '12px', color: '#6B7280' }}>{seller.joined}</span>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 items-center">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-[#FF8A65] text-[12px]">★</span>)}
                        <span className="text-gray-400 text-[10px] ml-1">(110)</span>
                      </div>
                      <button className="text-[#1F3A93] text-[11px] font-medium underline">View listing</button>
                    </div>
                    <span className="text-[11px] text-gray-400 leading-none">{seller.listings}</span>
                  </div>
                </div>
              ))}
            </div>

          ) : (
            /* ── Table: w-full, no max-w ── */
            <div className="w-full bg-white border border-gray-100 rounded-[12px] overflow-hidden">
              <table className="w-full text-left border-collapse text-[13px]">
                <thead className="bg-[#FAFAFA] border-b border-gray-100">
                  <tr className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                    <th className="px-4 py-3 w-24">Date</th>
                    <th className="px-4 py-3 w-16 text-center">Image</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Seller</th>
                    <th className="px-4 py-3">Contact</th>
                    {activeTab === 'Offers' ? (
                      <>
                        <th className="px-4 py-3 w-24">Offer</th>
                        <th className="px-4 py-3 w-24">Price</th>
                      </>
                    ) : (
                      <th className="px-4 py-3">Fulfilment</th>
                    )}
                    {activeTab !== 'Offers' && <th className="px-4 py-3">Total</th>}
                    <th className="px-4 py-3 w-28">Status</th>
                    <th className="px-4 py-3 w-16">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {orders.map((order, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap text-gray-600">{order.date}</td>
                      <td className="px-4 py-3">
                        <div className="w-10 h-10 rounded-[6px] overflow-hidden bg-gray-100 border border-gray-100 mx-auto">
                          <img src="/purchase(1).png" alt="product" className="w-full h-full object-cover" />
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-gray-700">{order.name}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                            <img src="/purchase(2).png" alt="user" className="w-full h-full object-cover" />
                          </div>
                          <span className="text-gray-700">{order.seller}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-[#1F3A93] font-medium underline underline-offset-2 whitespace-nowrap hover:text-[#162d7a] transition-colors">
                          Go to chat
                        </button>
                      </td>
                      {activeTab === 'Offers' ? (
                        <>
                          <td className="px-4 py-3 font-semibold text-gray-800">{order.offer}</td>
                          <td className="px-4 py-3 font-semibold text-gray-800">{order.total}</td>
                        </>
                      ) : (
                        <>
                          <td className="px-4 py-3 whitespace-nowrap text-gray-500">{order.fulfilment}</td>
                          <td className="px-4 py-3 whitespace-nowrap font-bold text-gray-800">{order.total}</td>
                        </>
                      )}
                     <td className="px-4 py-3 whitespace-nowrap">
  <span className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
    statusBadge[order.status] ?? 'bg-gray-100 text-gray-500'
  }`}>
    {order.status}
  </span>
</td>
                      <td className="px-4 py-3 font-bold text-gray-300 text-lg text-center cursor-pointer">···</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}