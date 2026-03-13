import React from 'react';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 1. The About Hero Section (Text + Image) */}
      <section 
        className="flex flex-col gap-[30px] py-[60px]"
        style={{ width: '1283px', opacity: '1' }}
      >
        <div className="flex justify-between items-start gap-[20px]" style={{ width: '1228px' }}>
          
          {/* Left Text Column (701px wide as per spec) */}
          <div className="flex flex-col gap-[22px]" style={{ width: '701px' }}>
            <h1 className="text-[28px] font-bold text-[#284297] leading-tight">
              About ShopRise – Elevating Your Local Shopping Experience
            </h1>
            
            <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
              Welcome to <span className="text-[#FF8A65] underline font-medium cursor-pointer">ShopRise</span>, your premier Local Marketplace.
            </p>

            <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
              ShopRise isn't just a marketplace; it's a community revolutionizing local buying and selling...
            </p>
            
            {/* ... Rest of your Journey and Why ShopRise text ... */}
          </div>

          {/* Right Image Placeholder */}
          <div className="flex-shrink-0">
            <img 
              src="/about-hero.png" 
              alt="Team Work" 
              style={{ width: '500px', height: '400px' }} 
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. How it Works Section */}
      <section className="w-[1283px] py-[40px]">
        <h2 className="text-[28px] font-bold text-[#284297] mb-[20px]">How it Works</h2>
        <div className="text-[18px] leading-[24px] text-[#4B5563] space-y-4">
           <p>1. Explore a plethora of exceptional deals...</p>
           <p>2. Engage directly with sellers via our secure in-app messaging...</p>
           {/* Add the rest of your 5 points here */}
        </div>
      </section>

      {/* 3. The Stats Section (Placeholder for the 5000+ ads section) */}
      <div className="w-[1283px] flex justify-around py-20 bg-gray-50 rounded-xl">
          <img src="/stats-placeholder.png" alt="Stats" width="1000" height="150" />
      </div>
    </div>
  );
}