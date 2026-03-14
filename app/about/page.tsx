import React from 'react';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full bg-white">
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
            
            <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
              Founded in 2023, ShopRise has swiftly become a leading mobile marketplace for local buyers and sellers across the U.S. Our mission is clear: to create the most reliable and user-friendly local marketplace, empowering our users to engage in transactions with confidence and ease.
            </p>

             <h1 className="text-[28px] font-bold text-[#284297] leading-tight">
              Our Journey
            </h1>
            
            <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
              ShopRise started with a vision to streamline the local buying and selling process, making it as straightforward and safe as possible. Our platform is built on the belief that everyone deserves access to a marketplace that is not just efficient but also secure and centered around the community.
            </p>

             <h1 className="text-[28px] font-bold text-[#284297] leading-tight">
              Why ShopRise?
            </h1>
            
            <div className="flex flex-col gap-4">
              <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
                <span className="text-[#FF8A65] underline font-medium cursor-pointer">Trust and Safety:</span> We prioritize your safety with features like secure messaging, verified community meet-up spots, and a comprehensive rating system.
              </p>
              <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
                <span className="text-[#FF8A65] underline font-medium cursor-pointer">Ease of Use:</span> Our app’s intuitive design makes buying and selling a breeze—just a few taps and you’re set!
              </p>
              <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
                <span className="text-[#FF8A65] underline font-medium cursor-pointer">Eco-Friendly:</span> Promoting local transactions helps reduce environmental impact, supporting sustainability.
              </p>
              <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
                <span className="text-[#FF8A65] underline font-medium cursor-pointer">Community-Centric:</span> At ShopRise, we’re building more than a platform; we’re nurturing a community, fostering connections that enrich local neighborhoods.
              </p>
            </div>

             <h1 className="text-[28px] font-bold text-[#284297] leading-tight">
              Visioning the Future
            </h1>
            
            <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
              Looking forward, ShopRise is dedicated to innovating and enhancing our services. Our aim is to broaden our reach, ensuring every user experience is seamless, secure, and satisfying. We’re not just developing a marketplace; we’re cultivating a community where everyone can find value and connection.
            </p>
             
             <h1 className="text-[28px] font-bold text-[#284297] leading-tight">
              Join the ShopRise Community
            </h1>
            
            <p className="text-[18px] leading-[24px] font-normal text-[#4B5563]">
              Whether you’re decluttering, hunting for a bargain, or starting a local business venture, ShopRise is your go-to platform. Download our app today and join a thriving community of users who choose ShopRise for all their local buying and selling needs.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex-shrink-0">
            <img 
              src="/about/main.png" 
              alt="Team Work" 
              style={{ width: '500px', height: '400px' }} 
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. How it Works Section */}
      <section className="w-[1283px] py-[40px] flex flex-col items-center">
        <div style={{ width: '1228px' }}>
          <h2 className="text-[28px] font-bold text-[#284297] mb-[20px]">How it Works</h2>
          <div className="text-[18px] leading-[24px] text-[#4B5563] space-y-4">
             <p>1. Explore a plethora of exceptional deals in your vicinity, from elegant furniture and cutting-edge electronics to pristine vehicles. Discover the joy of purchasing directly from your neighbors, fostering community ties while you shop.</p>
             <p>2. Engage directly with sellers via our secure in-app messaging platform. Effortlessly negotiate prices and coordinate convenient meeting times, ensuring a seamless and professional transaction experience.</p>
             <p>3. Dive into user profiles to glean insights from ratings, badges, and a comprehensive transaction history. Make informed decisions with the confidence that you're interacting with credible members of our community.</p>
             <p>4. Transform your possessions into potential profit! Just snap a photo with your smartphone and post your item in under 30 seconds. Effortless listing, rapid results.</p>
             <p>5. Be part of a thriving community! Join millions of discerning individuals on the paramount mobile platform dedicated to local commerce. Where buyers meet sellers, and community connections are forged.</p>
          </div>
        </div>
      </section>

      {/* 3. The Stats Section */}
      <div 
  style={{ 
    width: '970px', height: '140px', gap: '75px', padding: '20px',
    opacity: 1 
  }} 
  className="flex justify-center items-center mt-10"
>
  {/* 1. Ads Stat */}
  <div className="flex items-center gap-4">
    <div className="w-[60px] h-[60px] bg-[#F1F4F9] rounded-full flex items-center justify-center">
      <img 
        src="/about/first.png" 
        alt="Ads" 
        className="w-6 h-6 object-contain"
      />
    </div>
    <div>
      <h3 className="text-[24px] font-bold text-[#1F3A93]">5000+</h3>
      <p className="text-gray-500 text-[14px]">Ads</p>
    </div>
  </div>
  
  {/* 2. Happy Customers Stat */}
  <div className="flex items-center gap-4">
    <div className="w-[60px] h-[60px] bg-[#F1F4F9] rounded-full flex items-center justify-center">
      <img 
        src="/about/first(2).png" 
        alt="Happy Customers" 
        className="w-6 h-6 object-contain"
      />
    </div>
    <div>
      <h3 className="text-[24px] font-bold text-[#1F3A93]">3264+</h3>
      <p className="text-gray-500 text-[14px]">Happy Customers</p>
    </div>
  </div>

  {/* 3. Verified Users Stat */}
  <div className="flex items-center gap-4">
    <div className="w-[60px] h-[60px] bg-[#F1F4F9] rounded-full flex items-center justify-center">
      <img 
        src="/about/first(3).png" 
        alt="Verified Users" 
        className="w-6 h-6 object-contain"
      />
    </div>
    <div>
      <h3 className="text-[24px] font-bold text-[#1F3A93]">2001+</h3>
      <p className="text-gray-500 text-[14px]">Verified Users</p>
    </div>
  </div>
</div>

      {/* 4. Testimonials Section */}
      <section 
        style={{ width: '999px', height: '393px', opacity: 1 }} 
        className="flex flex-col items-center mt-20 mb-20"
      >
        <h2 
          style={{ 
            fontFamily: 'Inter', fontWeight: 500, fontSize: '30px', 
            lineHeight: '100%', letterSpacing: '0%' 
          }} 
          className="text-[#1F3A93] mb-12"
        >
          Customers Say About Us
        </h2>
        
        <div className="flex gap-10">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="flex flex-col items-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm w-[280px]"
            >
              <img 
                src="/about/avatar.png" 
                alt="David Lee" 
                className="w-16 h-16 rounded-full mb-4" 
              />
              <h4 className="text-[18px] font-bold text-gray-800">David Lee</h4>
              <p className="text-[#FF8A65] text-[12px] mb-4">Director, AutoSale</p>
              <p className="text-center text-gray-500 text-[14px] leading-relaxed">
                We a dealer car company and sell a lot of cars here. Thanks.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}