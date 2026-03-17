'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ChangePasswordPage() {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white flex items-start justify-center relative" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Back Arrow */}
      <Link href="/signin">
        <div className="absolute top-6 left-6 cursor-pointer text-gray-600 hover:text-black">
          <ArrowLeft size={20} />
        </div>
      </Link>

      {/* Main Container */}
      <div
        className="flex flex-col items-center"
        style={{
          width: '500px',
          height: '286px',
          marginTop: '273px',
          gap: '25px',
        }}
      >

        {/* Heading */}
        <div className="flex flex-col items-center gap-1">
          <h1
            className="text-[#111827]"
            style={{
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '100%',
            }}
          >
            Change your password
          </h1>

          <p
            className="text-gray-500"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '100%',
            }}
          >
            Create a new password
          </p>
        </div>

        {/* Form */}
        <div
          className="flex flex-col w-full"
          style={{
            height: '156px',
            gap: '15px',
          }}
        >

          {/* New Password */}
          <div className="flex flex-col gap-1">
            <label
              className="text-[#111827]"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '100%',
              }}
            >
              New password
            </label>

            <div className="relative">
              <input
                type={showPass1 ? 'text' : 'password'}
                placeholder="********"
                className="w-full h-[38px] border border-gray-300 rounded-[8px] px-3 text-[14px] outline-none focus:border-[#284297]"
              />
              <button
                type="button"
                onClick={() => setShowPass1(!showPass1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPass1 ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <label
              className="text-[#111827]"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '100%',
              }}
            >
              Confirm your password
            </label>

            <div className="relative">
              <input
                type={showPass2 ? 'text' : 'password'}
                placeholder="********"
                className="w-full h-[38px] border border-gray-300 rounded-[8px] px-3 text-[14px] outline-none focus:border-[#284297]"
              />
              <button
                type="button"
                onClick={() => setShowPass2(!showPass2)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPass2 ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <label
            className="flex items-center gap-2 text-gray-600"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '100%',
            }}
          >
            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
            Remember me
          </label>
        </div>

        {/* Button */}
        <button
          className="w-full h-[44px] rounded-full text-white"
          style={{
            backgroundColor: '#2D4AA0',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '100%',
          }}
        >
          Change password
        </button>
      </div>
    </div>
  );
}