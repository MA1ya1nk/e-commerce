import React from 'react';

const ProductDashboard = () => {
  return (
    <div 
      className="mx-auto flex bg-white text-[#374151]"
      style={{ 
        width: '1280px', 
        minHeight: '830px', 
        marginTop: '134px', 
        opacity: '1',
        gap: '40px' 
      }}
    >
      {/* Left Column: Image Gallery (Width: 380px) */}
      <div 
        style={{ width: '380px', height: '452px', opacity: '1' }} 
        className="flex flex-col gap-[24px]"
      >
        {/* Main Large Image */}
        <div className="w-[380px] h-[330px] rounded-[10px] overflow-hidden border border-[#E5E7EB]">
          <img 
            src="/main.png" 
            alt="Trolley sprayer" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Thumbnails */}
        <div className="flex gap-[10px]">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`w-[85px] h-[70px] rounded-[8px] overflow-hidden border-2 ${i === 1 ? 'border-[#FF8A65]' : 'border-transparent'}`}
            >
              <img src={`/main.png`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Middle Column: Product Details (Width: 453px) */}
      <div 
        style={{ width: '453px', height: '762px', opacity: '1' }} 
        className="flex flex-col gap-[20px]"
      >
        <div>
          <span className="text-[14px] text-gray-500 font-medium">Farming Tools & Machinery</span>
          <h1 className="text-[32px] font-bold text-[#FF8A65] leading-tight mt-1">Trolley sprayer</h1>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[16px] font-semibold">Description</h3>
          <p className="text-[14px] leading-[20px] text-[#4B5563]">
            Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added. We ship nationwide.
          </p>
        </div>

        <div className="flex items-center gap-[20px] text-[14px] text-gray-500">
          <div className="flex items-center gap-1">
            <img src="/dashboard/clock.png" width="16" height="16" />
            <span>3 hours ago</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/Dashboard/location.png" width="12" height="12" />
            <span>Los Angeles, CA</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src="/Dashboard/heart.png" width="20" height="20" />
          <span className="text-[14px] font-medium text-[#284297] cursor-pointer">Add to favorites</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-[24px] font-bold text-[#284297]">$9.99</span>
          <span className="text-[14px] text-gray-500">(Used like new)</span>
        </div>

        {/* Map View Placeholder */}
        <div className="w-full h-[180px] rounded-[10px] overflow-hidden border border-[#E5E7EB]">
          <img src="/Dashboard/Basemap image.png" className="w-full h-full object-cover" />
        </div>

        {/* Seller Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[16px] font-semibold">Seller</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/Dashboard/profile.png" className="w-[48px] h-[48px] rounded-full" />
              <div>
                <p className="font-semibold text-[16px]">Jennifer Garnet</p>
                <p className="text-[12px] text-gray-400">Join oct 2023</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[#FF8A65]">
              {"★".repeat(5)} <span className="text-gray-400 text-[12px] ml-1">(10)</span>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[16px] font-semibold">Send a message to the seller</h3>
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Hello, is this article still available?" 
              className="w-full h-[45px] px-[20px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] outline-none text-[14px]"
            />
            <button className="absolute right-[4px] bg-[#284297] text-white h-[37px] px-[25px] rounded-full text-[14px]">
              Send
            </button>
          </div>
        </div>

        {/* Go to chat and Socials */}
        <div className="flex flex-col gap-4">
          <button className="w-full h-[45px] bg-[#FF8A65] text-white rounded-[10px] font-semibold text-[16px]">
            Go to chat
          </button>
          <div className="flex items-center justify-center gap-4 text-gray-500">
            <span className="text-[12px]"><img src="/Dashboard/share.png" className="inline mr-1 w-4" /> Share</span>
            <div className="flex gap-3">
              <img src="/Dashboard/whatsapp.png" width="24" height="24" className="cursor-pointer" />
              <img src="/Dashboard/facebook.png" width="24" height="24" className="cursor-pointer" />
              <img src="/Dashboard/twitter.png" width="24" height="24" className="cursor-pointer" />
              <img src="/Dashboard/messenger.png" width="24" height="24" className="cursor-pointer" />
              <img src="/Dashboard/mail.png" width="24" height="24" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Checkout Card (Width: 335px) */}
      <div 
        style={{ 
          width: '335px', 
          height: '378px', 
          opacity: '1',
          borderRadius: '10px',
          borderWidth: '1px',
          padding: '20px'
        }} 
        className="border border-[#E5E7EB] flex flex-col gap-[25px] shadow-sm bg-white"
      >
        <h3 className="text-center text-[18px] font-semibold">Checkout</h3>
        
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-between text-[16px]">
            <span className="text-gray-500">Price</span>
            <span className="font-semibold text-[#284297]">$9.99</span>
          </div>
          <div className="flex justify-between text-[16px]">
            <span className="text-gray-500">Delivery fee</span>
            <span className="font-semibold text-[#284297]">$13.50</span>
          </div>
          <div className="border-t border-dashed border-gray-200 pt-[12px] flex justify-between text-[20px] font-bold">
            <span>Total</span>
            <span>$22.49</span>
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <div className="flex gap-[10px]">
            <button className="flex-1 h-[45px] border border-[#FF8A65] text-[#FF8A65] rounded-full font-semibold hover:bg-[#FFF5F2]">
              Buy now
            </button>
            <button className="flex-1 h-[45px] bg-[#9CA3AF] text-white rounded-full font-semibold">
              Make offer
            </button>
          </div>
          <button className="w-full h-[48px] bg-[#284297] text-white rounded-[8px] flex items-center justify-center gap-2 font-semibold">
            Paypal checkout
          </button>
        </div>

        <p className="text-[10px] text-gray-400 text-center leading-tight">
          By continuing to checkout, you agree to the <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Service</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductDashboard;