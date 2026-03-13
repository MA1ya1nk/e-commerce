import React from 'react';

const ProductDashboard = () => {
  return (
    <div 
      className="mx-auto flex gap-[40px] py-[30px] bg-white text-[#374151]"
      style={{ 
        width: '1280px', 
        minHeight: '657px', 
        marginTop: '134px', 
        opacity: '1' 
      }}
    >
      {/* Left Column: Image Gallery */}
      <div className="w-[530px] flex flex-col gap-[20px]">
        {/* Main Large Image */}
        <div className="w-[530px] h-[400px] rounded-[10px] overflow-hidden border border-[#E5E7EB]">
          <img 
            src="/sprayer-large.jpg" 
            alt="Trolley sprayer" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Thumbnails */}
        <div className="flex gap-[15px]">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`w-[120px] h-[90px] rounded-[8px] overflow-hidden border-2 ${i === 1 ? 'border-[#FF8A65]' : 'border-transparent'}`}
            >
              <img src={`/sprayer-thumb-${i}.jpg`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Middle Column: Product Details */}
      <div className="flex-grow flex flex-col gap-[20px]">
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
            <img src="/clock-icon.png" width="16" height="16" />
            <span>3 hours ago</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/location-icon.png" width="16" height="16" />
            <span>Los Angeles, CA</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src="/heart-outline.png" width="20" height="20" />
          <span className="text-[14px] font-medium text-[#284297] cursor-pointer">Add to favorites</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-[24px] font-bold text-[#284297]">$9.99</span>
          <span className="text-[14px] text-gray-500">(Used like new)</span>
        </div>

        {/* Map View Placeholder */}
        <div className="w-full h-[200px] rounded-[10px] overflow-hidden border border-[#E5E7EB]">
          <img src="/map-placeholder.png" className="w-full h-full object-cover" />
        </div>

        {/* Seller Info */}
        <div className="flex flex-col gap-3 mt-4">
          <h3 className="text-[16px] font-semibold">Seller</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/seller-avatar.jpg" className="w-[48px] h-[48px] rounded-full" />
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
        <div className="mt-4 flex flex-col gap-3">
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
      </div>

      {/* Right Column: Checkout Card */}
      <div className="w-[300px]">
        <div className="border border-[#E5E7EB] rounded-[12px] p-[24px] flex flex-col gap-[20px] shadow-sm">
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

          <div className="flex flex-col gap-[12px] mt-4">
            <div className="flex gap-[10px]">
              <button className="flex-1 h-[45px] border border-[#FF8A65] text-[#FF8A65] rounded-full font-semibold hover:bg-[#FFF5F2]">
                Buy now
              </button>
              <button className="flex-1 h-[45px] bg-[#9CA3AF] text-white rounded-full font-semibold">
                Make offer
              </button>
            </div>
            <button className="w-full h-[48px] bg-[#284297] text-white rounded-[8px] flex items-center justify-center gap-2 font-semibold">
              <img src="/paypal-white.png" width="20" height="20" />
              Paypal checkout
            </button>
          </div>

          <p className="text-[10px] text-gray-400 text-center leading-tight mt-2">
            By continuing to checkout, you agree to the <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Service</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDashboard;