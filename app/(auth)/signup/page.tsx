import React from 'react';

export default function SignUpPage() {
  return (
    <div className="flex w-[1280px] h-[832px] overflow-hidden bg-white mx-auto">
      
      {/* Left Section: Registration Form (442px) */}
      <div className="w-[442px] h-[832px] flex flex-col items-center pt-[40px] relative border-r border-gray-100">
        {/* Logo at top left */}
        <div className="absolute top-[20px] left-[25px] flex items-center gap-2">
          <img src="/logo-placeholder.png" alt="ShopRise" width="32" height="32" />
          <span className="text-[18px] font-semibold text-[#111827]">ShopRise</span>
        </div>

        {/* Main Content (330px wide) */}
        <div className="mt-[120px] w-[330px] flex flex-col items-center gap-[20px]">
          <div className="flex flex-col items-center gap-2">
            <img src="/user-icon.png" alt="User" width="24" height="24" />
            <h1 className="text-[24px] font-semibold text-[#111827]">Welcome back</h1>
            <p className="text-[14px] font-normal text-gray-500">
              You have account? <a href="/signin" className="text-[#FF8A65] underline">Sign in here</a>
            </p>
          </div>

          {/* Google Sign Up */}
          <button className="w-[330px] text-black h-[37px] border border-gray-300 rounded-[8px] flex items-center justify-center gap-2 text-[14px] font-medium hover:bg-gray-50 transition-colors">
            <img src="/google_icon.png" alt="Google" width="18" height="18" />
            Sign up with Google
          </button>

          <div className="w-full flex items-center gap-4 text-gray-400 text-[14px]">
            <div className="flex-grow h-[1px] bg-gray-200"></div>
            or
            <div className="flex-grow h-[1px] bg-gray-200"></div>
          </div>

          {/* Registration Fields */}
          <div className="w-full flex flex-col gap-[12px]">
            {/* First Name */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[14px] font-medium text-[#374151]">First name</label>
              <input 
                type="text" 
                placeholder="John"
                className="w-[330px] h-[37px] text-black border border-gray-300 rounded-[8px] px-[10px] text-[14px] outline-none focus:border-[#284297]"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[14px] font-medium text-[#374151]">Last name</label>
              <input 
                type="text" 
                placeholder="DOE"
                className="w-[330px] text-black h-[37px] border border-gray-300 rounded-[8px] px-[10px] text-[14px] outline-none focus:border-[#284297]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[14px] font-medium text-[#374151]">Email</label>
              <input 
                type="email" 
                placeholder="johndoe@gmail.com"
                className="w-[330px] h-[37px] text-black border border-gray-300 rounded-[8px] px-[10px] text-[14px] outline-none focus:border-[#284297]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[14px] font-medium text-[#374151]">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="*********"
                  className="w-[330px] text-black h-[37px] border border-gray-300 rounded-[8px] px-[10px] text-[14px] outline-none focus:border-[#284297]"
                />
                <img src="/eye-icon.png" className="absolute right-3 top-2.5 w-4 h-4 cursor-pointer opacity-50" />
              </div>
              <span className="text-[10px] text-[#284297] cursor-help">Indication</span>
            </div>
          </div>

          {/* Register Button */}
          <button className="w-[330px] h-[40px] bg-[#284297] text-white rounded-[8px] font-semibold text-[16px] mt-2 hover:bg-[#1e3276] transition-all">
            Register
          </button>
        </div>
      </div>

      {/* Right Section: Image (838px) */}
      <div className="w-[838px] h-[832px]">
        <img 
          src="/Rectangle 21 (1).png" 
          alt="Delivery boxes on keyboard" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}