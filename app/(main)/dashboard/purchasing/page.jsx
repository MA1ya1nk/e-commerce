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

const statusBadge = {
  Completed: 'bg-green-50 text-green-700',
  Pending:   'bg-yellow-50 text-yellow-700',
  Refund:    'bg-blue-50 text-blue-700',
  Cancel:    'bg-red-50 text-red-700',
};

export default function PurchasingPage() {
  const [activeTab, setActiveTab] = useState('Purchasing');
  const [filter, setFilter] = useState('All');
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

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-[56px] flex justify-end items-center px-8 gap-6 bg-white border-b border-gray-100">
          <Bell size={18} className="text-gray-400 cursor-pointer" />
          <NextLink href="/marketplace" className="flex items-center gap-1 text-gray-500 text-[13px] hover:text-gray-800 transition-colors">
            <span>Go to marketplace</span><span className="text-[11px]">↗</span>
          </NextLink>
        </header>

        <div className="w-full px-8 pt-6 pb-10 flex flex-col gap-5">
          
          {/* Header Row: Tabs + Search Bar */}
          <div className="flex items-end justify-between border-b border-gray-200">
            <div className="flex gap-8">
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

            {/* NEW SEARCH PLACEMENT */}
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text"
                className="w-[320px] h-[38px] pl-10 pr-20 bg-white border border-gray-200 rounded-full text-sm outline-none focus:border-[#FF8A65]"
                placeholder="Search" />
              <button className="absolute right-1 top-1 h-[30px] px-5 bg-[#FF8A65] text-white rounded-full text-[12px] font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Filter pills + date Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {['All', 'Completed', 'Pending', 'Cancel'].map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors ${filter === f ? 'bg-green-100 text-green-700' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                  {f}
                </button>
              ))}
            </div>
            
            {/* DATE PICKER */}
            <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-[8px] px-3 h-[36px] text-[12px] text-gray-500 cursor-pointer hover:border-gray-300 transition-colors">
              <span>01.11.2023</span><span className="text-gray-300 mx-1">–</span><span>30.11.2023</span>
              <Calendar size={14} className="text-gray-400 ml-2" />
            </div>
          </div>

          {/* Table Container */}
          <div className="w-full bg-white border border-gray-100 rounded-[12px] overflow-hidden">
            <table className="w-full text-left border-collapse text-[13px]">
              <thead className="bg-[#FAFAFA] border-b border-gray-100">
                <tr className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                  <th className="px-4 py-3 w-24">Date</th>
                  <th className="px-4 py-3 w-16 text-center">Image</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Seller</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Fulfilment</th>
                  <th className="px-4 py-3">Total</th>
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
                      <button className="text-[#1F3A93] font-medium underline underline-offset-2 whitespace-nowrap">
                        Go to chat
                      </button>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">{order.fulfilment}</td>
                    <td className="px-4 py-3 whitespace-nowrap font-bold text-gray-800">{order.total}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-semibold ${statusBadge[order.status] ?? 'bg-gray-100 text-gray-500'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-gray-300 text-lg text-center cursor-pointer">···</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}