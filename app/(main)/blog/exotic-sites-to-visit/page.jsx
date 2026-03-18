"use client";

import React from "react";
import Link from "next/link";

// ─── Related Posts Data ───────────────────────────────────────────────────────
const relatedPosts = [
  {
    category: "Technology News",
    title: "The Rise of 5G Technology",
    excerpt:
      "Explore the rapid advancement of 5G technology and its potential to revolutionize connectivity.",
    author: "Mark Roberts",
    date: "11 Jan 2022",
    readTime: "1 hour read",
    image: "/blog/inside-two.png",
    avatar: "/blog/inside-three.png",
  },
  {
    category: "Food and Gastronomy",
    title: "The Secrets of Pastry",
    excerpt:
      "Tips to become an expert pastry chef and create incredible desserts.",
    author: "Maria Rodriguez",
    date: "5 dec 2022",
    readTime: "5 min read",
    image: "/blog/inside-two.png",
    avatar: "/blog/inside-three.png",
  },
  {
    category: "Technology News",
    title: "The Ethical Implications of AI",
    excerpt:
      "Explore the ethical dilemmas and considerations surrounding the use of artificial intelligence in various sectors.",
    author: "Alex Johnson",
    date: "12 oct 2022",
    readTime: "7 min read",
    image: "/blog/inside-two.png",
    avatar: "/blog/inside-three.png",
  },
];

// ─── Social Icons ─────────────────────────────────────────────────────────────
function FacebookIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#1877F2" />
      <path
        d="M25 13h-2.5C21.67 13 21 13.67 21 14.5V17h4l-.5 4H21v10h-4V21h-3v-4h3v-2.5C17 12.12 18.12 11 20.5 11H25v2z"
        fill="white"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#1DA1F2" />
      <path
        d="M30 13.5a8.4 8.4 0 01-2.36.65 4.13 4.13 0 001.81-2.28 8.27 8.27 0 01-2.61 1A4.11 4.11 0 0020.46 17c0 .32.04.63.1.93A11.67 11.67 0 0112 13.9a4.1 4.1 0 001.27 5.48 4.08 4.08 0 01-1.86-.51v.05a4.12 4.12 0 003.3 4.03 4.14 4.14 0 01-1.86.07 4.12 4.12 0 003.84 2.85A8.25 8.25 0 0111 27.13 11.63 11.63 0 0017.29 29c7.55 0 11.68-6.25 11.68-11.67l-.01-.53A8.3 8.3 0 0030 13.5z"
        fill="white"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#0A66C2" />
      <path
        d="M14 17h-3v10h3V17zm-1.5-1.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM29 27h-3v-5c0-1.2-.43-2-1.5-2-1.34 0-2 .9-2 2v5h-3V17h3v1.35C23 17.52 24.14 17 25.5 17 27.5 17 29 18.3 29 21.5V27z"
        fill="white"
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function BlogDetailPage() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ── Top Section: Breadcrumb + Hero Image ── */}
      <div className="relative" style={{ paddingTop: "40px" }}>
        <div className="max-w-[1080px] mx-auto px-6 flex items-start justify-between gap-8">

          {/* LEFT COLUMN */}
          <div style={{ width: "460px", flexShrink: 0 }}>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2" style={{ marginBottom: "36px" }}>
              <Link href="/blog">
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "100%",
                    color: "#6B7280",
                    cursor: "pointer",
                  }}
                >
                  Blog
                </span>
              </Link>
              <span style={{ color: "#6B7280", fontSize: "20px", fontWeight: 500 }}>&gt;</span>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#1F3A93",
                }}
              >
                Travel and Adventure
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#1F3A93",
                marginBottom: "16px",
              }}
            >
              Exotic Cities to Visit
            </h1>

            {/* Author & Date */}
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "4px" }}>
              By{" "}
              <span style={{ color: "#1F3A93", fontWeight: 500 }}>Jessica Turner</span>
            </p>
            <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "40px" }}>
              21 Jan 2023
            </p>

            {/* Share this post */}
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "25px",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Share this post
            </p>
            <div className="flex items-center gap-[16px]">
              <span style={{ cursor: "pointer" }}><FacebookIcon /></span>
              <span style={{ cursor: "pointer" }}><TwitterIcon /></span>
              <span style={{ cursor: "pointer" }}><LinkedInIcon /></span>
            </div>
          </div>

          {/* RIGHT COLUMN: Hero Image */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/blog/third.jpg"
              alt="Exotic Cities to Visit"
              style={{
                width: "390px",
                height: "244px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="max-w-[1080px] mx-auto px-6" style={{ marginTop: "60px" }}>
        <div style={{ marginLeft: "132px", maxWidth: "796px" }}>

          {/* Introduction */}
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#1F3A93",
              marginBottom: "28px",
            }}
          >
            Introduction
          </h2>

          {/* Intro Paragraphs */}
          <div
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "33px",
              letterSpacing: "0%",
              color: "#374151",
              marginBottom: "40px",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              In a world brimming with destinations to explore, there's a magnetic pull towards cities that promise something out of the ordinary. While iconic metropolises have their timeless charm, there's an allure in venturing off the beaten path to discover exotic cities that beckon with a sense of wonder.
            </p>
            <p>
              These cities are where tradition intertwines with modernity, where history and culture unfold in the most captivating of ways. Join us as we embark on a journey to explore some of the most enchanting exotic cities the world has to offer, where each step promises a new adventure.
            </p>
          </div>

          {/* Full-width Image */}
          <div style={{ marginBottom: "12px" }}>
            <img
              src="/blog/inside-one.png"
              alt="Ibiza Espagne"
              style={{
                width: "796px",
                height: "512px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </div>
          <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "40px", borderLeft: "3px solid #e5e7eb", paddingLeft: "10px" }}>
            Ibiza Espagne
          </p>

          {/* Highlighted Quote Paragraph */}
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "33px",
              color: "#1F3A93",
              marginBottom: "32px",
            }}
          >
            Exotic cities are like hidden gems, waiting to be discovered by intrepid travelers seeking experiences beyond the usual tourist hotspots. These cities offer a glimpse into unique cultures, cuisines, and lifestyles that differ from the familiar. They ignite our curiosity, beckoning us to explore the uncharted, and they remind us that the world is an intricate tapestry of diverse wonders.
          </p>

          {/* Body Paragraphs */}
          <div
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "33px",
              color: "#374151",
              marginBottom: "32px",
            }}
          >
            <p style={{ marginBottom: "24px" }}>
              One of the joys of visiting exotic cities lies in the opportunity to immerse oneself in local traditions and customs. From savoring street food in Hoi An to joining a traditional tea ceremony in Kyoto, these cities offer experiences that engage all your senses.
            </p>
            <p style={{ marginBottom: "24px" }}>
              The tantalizing aroma of spices, the sounds of bustling markets, the touch of ancient cobblestone streets, and the sight of stunning landscapes—all come together to create unforgettable memories. These cities are where you can become a temporary local, sharing in the rhythms of everyday life
            </p>
          </div>

          {/* Blockquote */}
          <blockquote
            style={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "18px",
              lineHeight: "25px",
              color: "#374151",
              borderLeft: "3px solid #e5e7eb",
              paddingLeft: "20px",
              marginBottom: "40px",
            }}
          >
            Exotic cities aren't just destinations; they're gateways to adventures waiting to be had. Whether it's hiking through the Icelandic wilderness near Reykjavik, wandering the historic streets of Dubrovnik, or gazing at the shimmering lanterns of Hoi An, there's no shortage of experiences to uncover.
          </blockquote>

          {/* Conclusion */}
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#1F3A93",
              marginBottom: "28px",
            }}
          >
            Conclusion
          </h2>

          <div
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "33px",
              color: "#374151",
              marginBottom: "48px",
            }}
          >
            <p style={{ marginBottom: "24px" }}>
              Exotic cities are more than just places on a map; they are invitations to embark on journeys of discovery and wonder. As we conclude our exploration of these captivating destinations, we're reminded that the world is a vast and diverse playground, offering endless opportunities for adventure and cultural enrichment.
            </p>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "33px",
                color: "#1F3A93",
              }}
            >
              Whether you're drawn to the historical allure of Dubrovnik, the spiritual depth of Kyoto, or the sensory delights of Marrakech, remember that the exotic cities of the world are waiting to be explored, leaving an indelible mark on your wanderlust-filled heart. So, pack your bags, embrace the unknown, and let the magic of exotic cities inspire your next adventure.
            </p>
          </div>

          {/* Share this post — bottom */}
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "25px",
              color: "#111827",
              marginBottom: "16px",
            }}
          >
            Share this post
          </p>
          <div className="flex items-center gap-[16px]" style={{ marginBottom: "48px" }}>
            <span style={{ cursor: "pointer" }}><FacebookIcon /></span>
            <span style={{ cursor: "pointer" }}><TwitterIcon /></span>
            <span style={{ cursor: "pointer" }}><LinkedInIcon /></span>
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #E5E7EB",
              width: "100%",
              marginBottom: "40px",
            }}
          />

          {/* Author Card */}
          <div className="flex items-center gap-4" style={{ marginBottom: "64px" }}>
            <img
              src="/blog/third-avatar.png"
              alt="Jessica Turner"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <p style={{ fontWeight: 600, fontSize: "16px", color: "#111827" }}>Jessica Turner</p>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>Community manager</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Related Posts ── */}
      <div className="max-w-[1080px] mx-auto px-6" style={{ marginBottom: "80px" }}>
        <div className="flex items-center justify-between" style={{ marginBottom: "32px" }}>
          <h3
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "28px",
              color: "#111827",
            }}
          >
            Related posts
          </h3>
          <button
            style={{
              background: "white",
              border: "1px solid #D1D5DB",
              borderRadius: "6px",
              padding: "6px 18px",
              fontSize: "14px",
              color: "#374151",
              cursor: "pointer",
            }}
          >
            View all
          </button>
        </div>

        <div className="grid grid-cols-3 gap-[20px]">
          {relatedPosts.map((post, i) => (
            <RelatedPostCard key={i} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Related Post Card ────────────────────────────────────────────────────────
function RelatedPostCard({ post }) {
  return (
    <div style={{ width: "347px", height: "511px", display: "flex", flexDirection: "column", gap: "14px" }}>
      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "347px",
          height: "244px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={{ fontSize: "14px", fontWeight: 500, color: "#6B7280" }}>{post.category}</span>
        <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#1F3A93", lineHeight: "1.3" }}>{post.title}</h4>
        <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.5" }}>{post.excerpt}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
        <img
          src={post.avatar}
          alt={post.author}
          style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>{post.author}</p>
          <p style={{ fontSize: "12px", color: "#9CA3AF" }}>
            {post.date} . {post.readTime}
          </p>
        </div>
      </div>
    </div>
  );
}