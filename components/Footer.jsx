'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="w-full bg-[#F3F4F6]" style={{ fontFamily: 'Inter, sans-serif' }}>

      <div className="w-full px-[60px] pt-[50px] pb-8">

        {/* 
          Layout: Brand (wide) | Nav links | Legal links | Newsletter (wide)
          Use flex instead of grid so col 2 & 3 are naturally tight together
        */}
        <div className="flex items-start gap-0 justify-between">

          {/* ── Col 1: Brand — takes ~280px ── */}
          <div className="flex flex-col gap-4" style={{ width: '280px' }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D9D9D9] rounded-full shrink-0" />
              <span style={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}>ShopRise</span>
            </div>
            <p style={{ fontSize: '14px', fontWeight: 400, color: '#4B5563', lineHeight: '1.6' }}>
              ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised
              quality, unparalleled user experience, and unwavering integrity. As we continue to grow
              and evolve, our core principle remains unchanged: to empower each user to buy and sell
              with confidence.
            </p>
            <Link href="/dashboard/sales">
              <button
                style={{ backgroundColor: '#284297', color: 'white', padding: '12px 28px', borderRadius: '9999px', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                className="hover:opacity-90 transition-opacity"
              >
                Sell on ShopRise
              </button>
            </Link>
          </div>

          {/* ── Col 2 + Col 3 wrapped tightly together ── */}
          <div className="flex gap-12">

            {/* Col 2: Nav links */}
            <div className="flex flex-col gap-4">
              <Link href="/"       style={{ fontSize: '14px', fontWeight: 500, color: '#FF8A65', textDecoration: 'none' }}>All listing</Link>
              <Link href="/about"  style={{ fontSize: '14px', fontWeight: 400, color: '#374151', textDecoration: 'none' }} className="hover:text-gray-900">About us</Link>
              <Link href="/faqs"   style={{ fontSize: '14px', fontWeight: 400, color: '#374151', textDecoration: 'none' }} className="hover:text-gray-900">FAQ</Link>
              <Link href="/blog"   style={{ fontSize: '14px', fontWeight: 400, color: '#374151', textDecoration: 'none' }} className="hover:text-gray-900">Blog</Link>
            </div>

            {/* Col 3: Legal links */}
            <div className="flex flex-col gap-4">
              <Link href="/privacy"  style={{ fontSize: '14px', fontWeight: 400, color: '#374151', textDecoration: 'none' }} className="hover:text-gray-900">Privacy Policy</Link>
              <Link href="/terms"    style={{ fontSize: '14px', fontWeight: 400, color: '#374151', textDecoration: 'none' }} className="hover:text-gray-900">Terms and Conditions</Link>
              <Link href="/shipping" style={{ fontSize: '14px', fontWeight: 400, color: '#374151', textDecoration: 'none' }} className="hover:text-gray-900">Shipping Policy</Link>
            </div>

          </div>

          {/* ── Col 4: Newsletter + Social — takes ~320px ── */}
          <div className="flex flex-col gap-4" style={{ width: '320px' }}>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#111827' }}>
              Suscribe to our newsletter
            </p>

            {/* Email pill */}
            <div className="flex items-center bg-white rounded-full border border-gray-200 overflow-hidden" style={{ height: '46px' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 outline-none bg-transparent text-[14px] text-gray-600 placeholder-gray-400 pl-5"
              />
              <button
                style={{ backgroundColor: '#FF8A65', color: 'white', padding: '0 22px', height: '100%', borderRadius: '9999px', fontSize: '13px', fontWeight: 600, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
                className="hover:opacity-90 transition-opacity shrink-0"
              >
                Suscribe
              </button>
            </div>

            {/* Social icons — stacked vertically on the RIGHT side */}
            <div className="flex flex-col gap-3 items-end mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: '#284297' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: '#284297' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-200 py-4 w-full px-[60px] flex justify-end" style={{ backgroundColor: '#F3F4F6' }}>
        <p style={{ fontSize: '13px', color: '#6B7280', fontWeight: 400 }}>
          © All Right Reserved by | ShopRise | Copyright 2023
        </p>
      </div>

    </footer>
  );
}