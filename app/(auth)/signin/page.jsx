"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthContext';

export default function SignInPage() {
  const { login } = useAuth();
const router = useRouter();

  return (
    <div className="flex w-full min-h-screen overflow-hidden bg-white">
      
      {/* Left Section: Form (442px) */}
      <div className="w-[442px] min-h-screen flex flex-col items-center pt-[40px] relative shrink-0">
        {/* Logo at top left */}
        <div className="absolute top-[20px] left-[25px] flex items-center gap-2">
          <div className="w-8 h-8 bg-[#D9D9D9] rounded-full" />
          <span className="text-[18px] font-semibold text-[#111827]">ShopRise</span>
        </div>

        {/* Main Content (330px wide) */}
        <div className="mt-[156px] w-[330px] flex flex-col items-center gap-[25px]">
          
  <div className="flex flex-col items-center gap-2">
    <img src="/mdi_user.png" alt="User" width="24" height="24" />
    <h1 className="text-[24px] font-semibold text-[#111827]">Welcome back</h1>
    <p className="text-[14px] font-normal text-gray-500">
      Don't have account?{" "}
      <Link href="/signup">
        <span className="text-[#FF8A65] cursor-pointer">Sign up here</span>
      </Link>
    </p>
  </div>

          {/* Google Sign In */}
          <button className="w-[330px] h-[37px] border border-gray-300 rounded-[8px] text-black flex items-center justify-center gap-2 text-[14px] font-medium hover:bg-gray-50 transition-colors">
            <img src="/google_icon.png" alt="Google" width="18" height="18" />
            Sign in with Google
          </button>

          <div className="w-full flex items-center gap-4 text-gray-400 text-[14px]">
            <div className="flex-grow h-[1px] bg-gray-200"></div>
            or
            <div className="flex-grow h-[1px] bg-gray-200"></div>
          </div>

          {/* Input Fields */}
          <div className="w-full flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-medium text-[#374151]">Email</label>
              <input 
                type="email" 
                placeholder="johndoe@gmail.com"
                className="w-[330px] h-[37px] border border-gray-300 text-black rounded-[8px] px-[10px] py-[10px] text-[14px] outline-none focus:border-[#284297]"
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-medium text-[#374151]">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="*********"
                  className="w-[330px] h-[37px] text-black border border-gray-300 rounded-[8px] px-[10px] py-[10px] text-[14px] outline-none focus:border-[#284297]"
                />
                <img src="/eye-icon.png" className="absolute right-3 top-2.5 w-4 h-4 cursor-pointer opacity-50" />
              </div>
            </div>
          </div>

          {/* Helpers */}
          <div className="w-full flex items-center justify-between text-[12px]">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
            <Link href="/signin/change-password">
              <span className="text-[#284297] font-medium cursor-pointer">Forgot password</span>
            </Link>
          </div>

          {/* Sign In Button */}
          <button
  onClick={() => {
    login({
      name: 'John DOE',
      email: 'johndoe@gmail.com',
      avatar: '/purchase(2).png',
    });
    router.push('/dashboard');
  }}
  className="w-[330px] h-[40px] bg-[#284297] text-white rounded-[8px] font-semibold text-[16px] hover:bg-[#1e3276] transition-all"
>
  Sign in
</button>
        </div>
      </div>

      {/* Right Section: Image — fills remaining space */}
      <div className="flex-1 min-h-screen">
        <img 
          src="/Rectangle 21.png" 
          alt="Shopping cart on laptop" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}