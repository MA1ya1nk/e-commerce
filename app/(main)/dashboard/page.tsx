'use client';

import React from 'react';
import NextLink from 'next/link';
import {
  LayoutGrid, ShoppingBag, BadgeDollarSign, Heart,
  MessageCircle, Settings, HelpCircle, LogOut, Bell,
  MousePointerClick, Bookmark, Share2, Users,
} from 'lucide-react';

/* ─────────────────────────────────────────
   SIDEBAR NAV ITEMS
───────────────────────────────────────── */
const navItems = [
  { icon: LayoutGrid,      label: 'Dashbord',   href: '/dashboard',           active: true },
  { icon: ShoppingBag,     label: 'Purchasing', href: '/dashboard/purchasing' },
  { icon: BadgeDollarSign, label: 'Sales',      href: '/dashboard/sales' },
  { icon: Heart,           label: 'Favourites', href: '/dashboard/favourites' },
  { icon: MessageCircle,   label: 'Chat',       href: '/dashboard/chat' },
  { icon: Settings,        label: 'Setting',    href: '/dashboard/setting' },
];

/* ─────────────────────────────────────────
   MOCK DATA
───────────────────────────────────────── */
const insightCards = [
  { label: 'Clicks on listings',    icon: MousePointerClick },
  { label: 'Listing saves',         icon: Bookmark          },
  { label: 'Listing shares',        icon: Share2            },
  { label: 'Marketplace followers', icon: Users             },
];

const analyticsCards = [
  { label: 'Cancellation rate',    sub: 'You have canceled 0% of your orders after 3 business days.' },
  { label: 'Missed handling rate', sub: 'You have shipped or canceled 0% of orders after 3 business days.' },
  { label: 'Claim escalation',     sub: '0% of your orders covered by Durchase Protection are escalated to Facebook' },
  { label: 'Chargeback rate',      sub: '0% of your orders are charged back through the buyers payment method' },
];

const orders = [
  { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Delivered', total: 'Total', status: 'Delivered' },
  { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Packing',   total: 'Total', status: 'Pending'   },
  { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Refund',    total: 'Total', status: 'Cancel'    },
  { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Delivered', total: 'Total', status: 'Pending'   },
  { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Delivered', total: 'Total', status: 'Delivered' },
  { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Delivered', total: 'Total', status: 'Delivered' },
];

/* ─── Badge maps ─── */
const fulfilmentBadge = {
  Delivered: 'bg-green-100 text-green-600',
  Packing:   'bg-orange-100 text-orange-500',
  Refund:    'bg-red-100 text-red-500',
};
const statusBadge = {
  Delivered: 'bg-green-100 text-green-600',
  Pending:   'bg-orange-100 text-orange-500',
  Cancel:    'bg-red-100 text-red-500',
};

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
const DashboardPage = () => {
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

      {/* ── MAIN ── */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="h-[56px] flex justify-end items-center px-8 gap-6 bg-white border-b border-gray-100">
          <Bell size={18} className="text-gray-400 cursor-pointer" />
          <NextLink href="/marketplace" className="flex items-center gap-1 text-gray-500 text-[13px] hover:text-gray-800 transition-colors">
            <span>Go to marketplace</span><span className="text-[11px]">↗</span>
          </NextLink>
        </header>

        <div className="px-8 pt-6 pb-10 flex flex-col gap-6 max-w-[1023px]">

          {/* Welcome */}
          <h1 className="text-[24px] font-bold text-[#111827]">Welcome back John!</h1>

          {/* ── Marketplace Insights ── */}
          <div className="flex flex-col gap-3">
            <h2 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', color: '#284297' }}>
              Marketplace insights
            </h2>
            {/* Cards row — matches screenshot: circular gray icon bg, number large on left, label small below */}
            <div className="flex justify-between gap-4">
              {insightCards.map(({ label, icon: Icon }) => (
                <div key={label} className="bg-white flex items-center gap-4 px-4"
                  style={{ width: '230px', height: '70px', borderRadius: '10px', border: '1px solid #F3F4F6' }}>
                  {/* Circle icon — gray background matching screenshot */}
                  <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <Icon size={20} style={{ color: '#284297' }} />
                  </div>
                  {/* Number + label stacked */}
                  <div className="flex flex-col">
                    <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '22px', color: '#111827', lineHeight: '1' }}>0</span>
                    <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#6B7280', lineHeight: '1.3', marginTop: '2px' }}>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Second "Marketplace insights" section (analytics) ── */}
          <div className="flex flex-col gap-3">
            <h2 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', color: '#284297' }}>
              Marketplace insights
            </h2>
            {/* Plain white cards, no border/shadow, just bg-white */}
            <div className="flex justify-between gap-4">
              {analyticsCards.map((item, idx) => (
                <div key={idx} className="bg-white flex flex-col justify-center px-4"
                  style={{ width: '230px', height: '89px' }}>
                  <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '22px', color: '#111827', lineHeight: '1' }}>0%</div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: '#374151', marginTop: '4px', lineHeight: '1.2' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#9CA3AF', marginTop: '2px', lineHeight: '1.3' }}>
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Orders Table ── */}
          <div className="flex flex-col gap-3">
            <h2 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '16px', color: '#284297' }}>Orders</h2>

            <div className="bg-white rounded-[10px] border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead style={{ backgroundColor: '#D3D3D380' }}>
                  <tr style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '12px', color: '#4B5563' }}>
                    {['ID','Date','Customer','Products','Adress','Fulfilment','Total','Status'].map(h => (
                      <th key={h} className="px-4 py-3 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody style={{ fontFamily: 'Inter', fontSize: '12px' }}>
                  {orders.map((order, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-gray-600">{order.id}</td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{order.date}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden shrink-0">
                            <img src="/purchase(2).png" alt="customer" className="w-full h-full object-cover" />
                          </div>
                          <span className="text-gray-700">{order.customer}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{order.product}</td>
                      <td className="px-4 py-3 text-gray-500">{order.address}</td>
                      {/* Fulfilment — colored badge */}
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold ${fulfilmentBadge[order.fulfilment] ?? 'bg-gray-100 text-gray-500'}`}>
                          {order.fulfilment}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-700">{order.total}</td>
                      {/* Status — colored badge */}
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusBadge[order.status] ?? 'bg-gray-100 text-gray-500'}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default DashboardPage;