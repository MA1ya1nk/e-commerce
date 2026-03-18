"use client";

import React, { useState } from "react";
import Link from "next/link";

const categories = [
  "Technology News",
  "Health and Well-being",
  "Travel and Adventure",
  "Food",
];

const blogPosts = [
  {
    category: "Technology News",
    title: "The Latest Technology Trends",
    excerpt:
      "Discover the latest technological innovations and their impact on our daily lives.",
    author: "John Smith",
    date: "11 Jan 2022",
    readTime: "5 min read",
    image: "/blog/first.jpg",
    avatar: "/blog/first-avatar.png",
  },
  {
    category: "Health and Well-being",
    title: "Tips for Healthy Eating",
    excerpt:
      "Learn how to maintain a balanced diet for a healthier life.",
    author: "Lisa Miller",
    date: "12 Sept 2022",
    readTime: "1 day read",
    image: "/blog/second.jpg",
    avatar: "/blog/second-avatar.png",
  },
  {
    category: "Travel and Adventure",
    title: "Exotic Cities to Visit",
    excerpt:
      "Discover unique urban destinations around the world.",
    author: "Jessica Turner",
    date: "21 Jan 2023",
    readTime: "3 min read",
    image: "/blog/third.jpg",
    avatar: "/blog/third-avatar.png",
  },
  {
    category: "Technology News",
    title: "Future Smartphones",
    excerpt:
      "An overview of the next generations of smartphones and their advanced features.",
    author: "David Brown",
    date: "17 Apr 2022",
    readTime: "4 min read",
    image: "/blog/third.jpg",
    avatar: "/blog/third-avatar.png",
  },
  {
    category: "Food and Gastronomy",
    title: "World Cuisine Recipes",
    excerpt:
      "Explore delicious international recipes to try at home.",
    author: "Sophia Martinez",
    date: "25 May 2023",
    readTime: "6 min read",
    image: "/blog/third.jpg",
    avatar: "/blog/third-avatar.png",
  },
  {
    category: "Travel and Adventure",
    title: "Exploring the Natural Wonders",
    excerpt:
      "Breathtaking destinations for nature and adventure enthusiasts.",
    author: "Daniel White",
    date: "9 Aug 2023",
    readTime: "5 min read",
    image: "/blog/third.jpg",
    avatar: "/blog/third-avatar.png",
  },
  {
    category: "Technology News",
    title: "The Rise of 5G Technology",
    excerpt:
      "Explore the rapid advancement of 5G technology and its potential to revolutionize connectivity.",
    author: "Mark Roberts",
    date: "11 Jan 2022",
    readTime: "1 hour read",
    image: "/blog/third.jpg",
    avatar: "/blog/third-avatar.png",
  },
  {
    category: "Food and Gastronomy",
    title: "The Secrets of Pastry",
    excerpt:
      "Tips to become an expert pastry chef and create incredible desserts.",
    author: "Maria Rodriguez",
    date: "5 Dec 2022",
    readTime: "5 min read",
    image: "/blog/third.jpg",
    avatar: "/blog/third-avatar.png",
  },
  {
    category: "Technology News",
    title: "The Ethical Implications of AI",
    excerpt:
      "Explore the ethical dilemmas and considerations surrounding the use of artificial intelligence in various sectors.",
    author: "Alex Johnson",
    date: "12 Oct 2022",
    readTime: "7 min read",
    image: "/blog/third.jpg",
    avatar: "/blog/third-avatar.png",
  },
];

const POSTS_PER_PAGE = 9;
const TOTAL_PAGES = 4; // mock total pages

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col items-center bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-[15px] mt-[54px]" style={{ width: "559px" }}>
        <h1 className="text-[32px] font-medium text-[#1F3A93] text-center leading-tight">
          Discover the World of Knowledge with ShopRise
        </h1>
        <p className="text-[16px] font-normal text-gray-500 text-center" style={{ width: "448px" }}>
          Join us in this exciting adventure of discovery and learning.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center justify-center gap-[47px] mt-[29px] mb-[40px]" style={{ width: "771px", height: "35px" }}>
        <button
          onClick={() => { setActiveCategory("all"); setCurrentPage(1); }}
          className={`px-6 py-2 rounded-md text-[16px] transition-colors ${activeCategory === "all" ? "bg-[#284297] text-white" : "bg-white text-[#284297] border border-[#284297]"}`}
        >
          View all
        </button>
        {categories.map((cat) => (
          <span
            key={cat}
            onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
            className={`text-[16px] cursor-pointer transition-colors ${activeCategory === cat ? "text-[#1F3A93] font-semibold" : "text-gray-500 hover:text-[#1F3A93]"}`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Blog Grid */}
      <div
        className="grid grid-cols-3 gap-y-[10px] gap-x-[20px] justify-items-center"
        style={{ width: "1131px" }}
      >
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

function BlogCard({ post }) {
  return (
   
    <Link href = "/blog/exotic-sites-to-visit">
    <div className="flex flex-col gap-[17px] overflow-hidden" style={{ width: "347px", height: "508px" }}>
      
      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full object-cover rounded-[5px]"
        style={{ height: "250px" }}
      />

      {/* Content */}
      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-medium text-gray-500 leading-[25px]">
          {post.category}
        </span>
        <h3 className="text-[20px] font-bold text-[#1F3A93] leading-tight">
          {post.title}
        </h3>
        <p className="text-[14px] text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-[12px]">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-gray-800">{post.author}</span>
          <span className="text-[12px] text-gray-400">
            {post.date} . {post.readTime}
          </span>
        </div>
      </div>
      
    </div>
    </Link>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center gap-[12px] mt-[26px]">
      {/* Prev Arrow */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-gray-300 text-gray-500 disabled:opacity-40 hover:bg-gray-100 transition-colors"
        aria-label="Previous page"
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M6 1L1 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[32px] h-[32px] flex items-center justify-center rounded-full text-[14px] transition-colors ${
            currentPage === page
              ? "bg-[#284297] text-white font-semibold"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Arrow */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-gray-300 text-gray-500 disabled:opacity-40 hover:bg-gray-100 transition-colors"
        aria-label="Next page"
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}