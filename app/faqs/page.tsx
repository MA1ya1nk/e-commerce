'use client';
import React, { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    { q: "1. What is ShopRise", a: "ShopRise is an online marketplace that allows users to buy and sell a wide range of items, including electronics, furniture, clothing, and more. It's a convenient platform for connecting with local buyers and sellers." },
    { q: "2. How do I create an account on ShopRise?", a: "" },
    { q: "3. Is ShopRise available in my location?", a: "" },
    { q: "4. How can I list an item for sale on ShopRise?", a: "" },
    { q: "5. Are there any fees for using ShopRise?", a: "" },
    { q: "6. How do I contact a seller or buyer on ShopRise?", a: "" },
    { q: "7. Is it safe to meet with people I connect with on ShopRise?", a: "" },
  ];

  return (
    <div className="flex flex-col items-center py-[60px] bg-white w-full">
      
      {/* Header Container */}
      <div className="flex flex-col items-center gap-[10px] mb-[40px]" style={{ width: '432px', height: '68px' }}>
        <h1 className="text-[32px] font-medium text-[#284297] leading-[100%]">
          Frequently Asked Questions
        </h1>
        <p className="text-[16px] font-normal text-[#4B5563] leading-[100%]">
          Click on the question to view the corresponding answer.
        </p>
      </div>

      {/* FAQ Main Section */}
      <div 
        className="flex flex-col gap-[12px]" 
        style={{ width: '1230px', minHeight: '565px', opacity: '1' }}
      >
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col">
            {/* Question Bar */}
            <div 
              onClick={() => setOpenIndex(index)}
              className={`cursor-pointer px-[20px] flex items-center rounded-[4px] transition-colors
                ${openIndex === index ? 'bg-[#FF8A65] text-white' : 'bg-[#E5E7EB] text-[#374151]'}`}
              style={{ width: '1190px', height: '44px' }}
            >
              <span className="text-[18px] font-medium leading-[100%]">{faq.q}</span>
            </div>

            {/* Answer (Only shown if active) */}
            {openIndex === index && faq.a && (
              <div className="py-[20px] px-[20px] w-[1190px]">
                <p className="text-[16px] font-normal leading-[22px] text-[#4B5563]">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Ask your question section */}
        <div className="mt-[40px] flex flex-col gap-[20px]">
          <h3 className="text-[20px] font-medium leading-[100%] text-[#111827]">
            Ask your question
          </h3>
          
          <div className="flex gap-[20px] items-center">
            {/* Email Input */}
            <div 
              className="border border-[#D1D5DB] rounded-[25px] flex items-center"
              style={{ width: '483px', height: '43px', paddingLeft: '10px' }}
            >
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent outline-none text-[14px] w-full"
              />
            </div>

            {/* Message Input Container */}
            <div 
              className="border border-[#D1D5DB] rounded-[25px] flex items-center justify-between"
              style={{ width: '700px', height: '43px', paddingLeft: '10px', paddingRight: '2px' }}
            >
              <input 
                type="text" 
                placeholder="Hello, is this article still available?" 
                className="bg-transparent outline-none text-[14px] w-full"
              />
              <button className="bg-[#284297] text-white h-[39px] px-[25px] rounded-[25px] text-[14px] font-medium">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}