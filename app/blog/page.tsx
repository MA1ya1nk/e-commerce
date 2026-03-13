import React from 'react';

export default function BlogPage() {
  // Category Mock Data
  const categories = ["Technology News", "Health and Well-being", "Travel and Adventure", "Food"];

  // Mock array for the 9 blog posts shown in your image (3 columns x 3 rows)
  const blogPosts = Array(9).fill(null);

  return (
    <div className="flex flex-col items-center bg-white min-h-screen pb-20">
      
      {/* 1. Header Section */}
      <div 
        className="flex flex-col items-center gap-[15px]"
        style={{ width: '509px', height: '112px', marginTop: '104px' }}
      >
        <h1 className="text-[32px] font-medium text-[#1F3A93] text-center leading-[100%]">
          Discover the World of Knowledge with ShopRise
        </h1>
        <p className="text-[16px] font-normal text-gray-600 text-center leading-[100%]" style={{ width: '448px' }}>
          Join us in this exciting adventure of discovery and learning.
        </p>
      </div>

      {/* 2. Category Filter Bar */}
      <div 
        className="flex items-center justify-center gap-[47px] mb-[40px]"
        style={{ width: '771px', height: '35px', marginTop: '29px' }}
      >
        <button className="bg-[#284297] text-white px-6 py-2 rounded-md text-[16px]">View all</button>
        {categories.map((cat, i) => (
          <span key={i} className="text-[16px] font-regular text-gray-600 cursor-pointer hover:text-[#1F3A93]">
            {cat}
          </span>
        ))}
      </div>

      {/* 3. Blog Grid Section */}
      <div 
        className="grid grid-cols-3 gap-y-[40px] gap-x-[20px] justify-items-center"
        style={{ width: '1131px', opacity: '1' }}
      >
        {blogPosts.map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </div>
  );
}

// Internal Blog Card Component
const BlogCard = () => {
  return (
    <div 
      className="flex flex-col gap-[17px] overflow-hidden"
      style={{ width: '347px', height: '508px' }}
    >
      {/* Blog Image Placeholder */}
      <img 
        src="/blog-placeholder.png" 
        alt="Blog Post" 
        className="w-full h-[250px] object-cover rounded-[5px]"
      />

      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-medium text-gray-500 leading-[25px]">
          Technology News
        </span>
        <h3 className="text-[20px] font-bold text-[#1F3A93] leading-tight">
          The Latest Technology Trends
        </h3>
        <p className="text-[14px] text-gray-600 line-clamp-2">
          Discover the latest technological innovations and their impact on our daily lives.
        </p>
      </div>

      {/* Author Info Placeholder */}
      <div className="flex items-center gap-[12px] mt-auto">
        <img src="/author-placeholder.png" alt="Author" className="w-[40px] h-[40px] rounded-full" />
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold">John Smith</span>
          <span className="text-[12px] text-gray-400">11 Jan 2022 . 5 min read</span>
        </div>
      </div>
    </div>
  );
};