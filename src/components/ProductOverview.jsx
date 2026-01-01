// ProductOverview.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import analytics from "../images/analytics.png";
import invoicePreview from "../images/invoice-preview.png";
import dashboard from "../images/dashboard.png";
import chatbot from "../images/chatbot.png";
import { useNavigate } from "react-router-dom";

/**
 * ProductOverview.jsx
 *
 * - Keeps desktop/tablet composition exactly as before (unchanged behavior).
 * - Adds a proper mobile composition: centered dashboard preview + 3 small floating images
 *   (invoicePreview, analytics, chatbot) positioned and rotated to mimic desktop aesthetic.
 * - Fixes missing space between "Management" and "with" by ensuring an explicit trailing space
 *   before the <br/> element so hidden <br/> on mobile doesn't remove the space.
 *
 * NOTE: This file intentionally contains expanded spacing and sections to stay comprehensive.
 */

const FEATURES = [
  {
    title: "Session Management",
    desc: "Track, organize, and manage every client session in one place.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 7h18M3 12h18M3 17h18" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Progress Tracking",
    desc: "Monitor client improvement with clear, structured session history.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="6" cy="18" r="2" stroke="white" strokeWidth="1.6" />
        <circle cx="12" cy="10" r="2" stroke="white" strokeWidth="1.6" />
        <circle cx="18" cy="6" r="2" stroke="white" strokeWidth="1.6" />
        <path d="M6 16l6-6 6-4" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Editable Note Sections",
    desc: "Quickly rewrite, expand, or fine-tune specific parts of your notes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 20h9" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Version History",
    desc: "Review, compare, and restore previous versions of any clinical note.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6" />
        <path d="M12 7v5l3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STRIP_FEATURES = [
  { label: "AI Documentation", color: "#FF2F2F" },
  { label: "Integrated Billing", color: "#D511FD" },
  { label: "Charge Capture", color: "#5DC983" },
  { label: "Instant Superbills", color: "#8A43E1" },
  { label: "Client Records", color: "#F2BE00" },
  { label: "Treatment Notes", color: "#5E6AD2" },
];

export default function ProductOverview() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const springConfig = {
    stiffness: 60,
    damping: 20,
    mass: 1.2,
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawInvoiceY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rawAnalyticsY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rawChatbotY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const invoiceY = useSpring(rawInvoiceY, springConfig);
  const analyticsY = useSpring(rawAnalyticsY, springConfig);
  const chatbotY = useSpring(rawChatbotY, springConfig);

  return (
    <section className="mb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="bg-black text-white px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24">
        {/* ============ HEADER ============ */}
        <div className="max-w-[1100px] mx-auto text-center">
          <div className="inline-flex mb-3 md:mb-6">
            <div className="p-[1px] rounded-full bg-[linear-gradient(135deg,#ec4899,#f97316,#8b5cf6)]">
              <div className="px-3 sm:px-4 py-[6px] rounded-full bg-black text-sm text-white/90 text-[13px] sm:text-[14px] md:text-[17px]">
                Product Overview
              </div>
            </div>
          </div>

          {/* IMPORTANT FIX: add an explicit space AFTER 'Management' so when <br className="hidden md:block" /> is hidden on mobile
              the space between words remains. Without this, mobile shows "Managementwith". */}
          <h2 className="mt-4 md:mt-8 font-semibold text-[20px] sm:text-[22px] md:text-[36px] lg:text-[52px] leading-[120%] font-heading">
            Simplify Task Management{" "}
            <br className="hidden md:block" />
            with Powerful Features
          </h2>

          <p className="mt-3 md:mt-5 text-white/70 text-sm sm:text-base md:text-lg max-w-[780px] mx-auto">
            Discover features designed to simplify workflows and boost productivity.
          </p>

          <div className="mt-5 md:mt-8 flex justify-center">
            <button
              onClick={() => navigate("/waitlist")}
              className="bg-white text-black px-4 md:px-7 py-2.5 md:py-3 rounded-xl font-semibold w-full sm:w-auto max-w-[280px]"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* ============ IMAGE COMPOSITION ============ */}
        <div
          ref={containerRef}
          className="relative mt-8 sm:mt-10 md:mt-24 max-w-[1016px] mx-auto h-[320px] sm:h-[420px] md:h-[651px]"
          style={{ perspective: "1200px" }}
        >
          {/* ========= MOBILE PREVIEW (visible on small screens) ========= */}
          <div className="md:hidden flex justify-center">
            {/* Parent is relative so floating small images can be absolutely positioned inside */}
            <div className="relative w-[92%] max-w-[520px]">
              {/* Gradient rounded border like desktop */}
              <div className="rounded-2xl p-[2px] bg-[linear-gradient(135deg,#ec4899,#f97316,#8b5cf6)]">
                <div className="rounded-[12px] overflow-hidden bg-black">
                  <img
                    src={dashboard}
                    alt="mobile-preview"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

              {/*
                Add the three floating images for mobile.
                We position and rotate them to mimic the desktop look but adapted for small screens.
                All these are visible only on mobile (md:hidden).
              */}
              {/* Invoice - bottom-left */}
              <motion.img
                src={invoicePreview}
                alt="invoice-mobile"
                style={{
                  // small vertical movement synced to scroll on mobile as well
                  y: invoiceY,
                  transformOrigin: "center center",
                  rotateZ: 4,
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.22))",
                }}
                className="md:hidden absolute left-[-5%] bottom-[8%] w-[85px] sm:w-[100px] rounded-md shadow-2xl z-20 rotate-[4deg] bg-white"
              />

              {/* Chatbot - top-right */}
              <motion.img
                src={chatbot}
                alt="chatbot-mobile"
                style={{
                  y: chatbotY,
                  transformOrigin: "center center",
                  rotateZ: -3,
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.18))",
                }}
                className="md:hidden absolute left-[60%] top-[20%] -translate-x-1/2 w-[55px] sm:w-[65px] rounded-md shadow-2xl z-30 rotate-[-3deg] bg-white"
              />

              {/* Analytics - right-middle */}
              <motion.img
                src={analytics}
                alt="analytics-mobile"
                style={{
                  y: analyticsY,
                  transformOrigin: "center center",
                  rotateZ: -5,
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 16px 28px rgba(0,0,0,0.20))",
                }}
                className="md:hidden absolute right-[5%] bottom-[14%] w-[70px] sm:w-[85px] rounded-md shadow-2xl z-10 rotate-[-6deg] bg-white"
              />
            </div>
          </div>

          {/* ========= DESKTOP/TABLET composition (unchanged) ========= */}
          <div className="hidden md:block absolute inset-0">
            {/* OUTER SOFT STROKE */}
            <div
              className="absolute inset-[-10px] rounded-[8px] z-0"
              style={{
                background: "linear-gradient(135deg, rgba(239,68,68,0.35), rgba(168,85,247,0.35))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "300px",
              }}
            />

            {/* INNER STRONG STROKE */}
            <div
              className="absolute inset-[-5px] rounded-[8px] z-0"
              style={{
                background: "linear-gradient(135deg, #ef4444, #a855f7)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "5px",
              }}
            />

            {/* MAIN DASHBOARD - NO ANIMATION (desktop original) */}
            <img
              src={dashboard}
              className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1016px] max-w-[100%] h-full object-cover shadow-2xl z-10"
              alt="Analytics Dashboard"
            />

            {/* INVOICE (LEFT) - WITH ANIMATION (desktop original) */}
            <motion.img
              src={invoicePreview}
              style={{
                y: invoiceY,
                transformOrigin: "center center",
                rotateZ: 5,
                transformStyle: "preserve-3d",
                filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.20))",
              }}
              className="absolute left-[-80px] bottom-[140px] w-[245px] rotate-[4deg] shadow-2xl z-10"
              alt="Invoice Preview"
            />

            {/* ANALYTICS (RIGHT) - WITH ANIMATION (desktop original) */}
            <motion.img
              src={analytics}
              style={{
                y: analyticsY,
                transformOrigin: "center center",
                rotateZ: -5,
                transformStyle: "preserve-3d",
                filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.20))",
              }}
              className="absolute right-[-20px] top-[390px] w-[160px] rotate-[-6deg] shadow-2xl z-10"
              alt="Dashboard"
            />

            {/* CHATBOT - WITH ANIMATION (desktop original) */}
            <motion.img
              src={chatbot}
              style={{
                y: chatbotY,
                transformOrigin: "center center",
                rotateZ: -5,
                transformStyle: "preserve-3d",
                filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.20))",
              }}
              className="absolute right-[250px] bottom-[350px] w-[117px] rotate-[-3deg] shadow-2xl z-10"
              alt="chatbot"
            />
          </div>
        </div>

        {/* ============ FEATURES ============ */}
        <div className="relative mt-6 md:mt-32 max-w-[1200px] mx-auto">
          {/* Desktop vertical center line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px]"
            style={{
              height: "calc(100% + 90px)",
              background:
                "linear-gradient(to bottom, #ec4899 0%, #8b5cf6 50%, #f97316 78%, rgba(249,115,22,0) 100%)",
            }}
          />

          {/* FEATURES grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-white/10">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className={`px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 ${i !== FEATURES.length - 1 ? "md:border-r border-white/10" : ""}`}
              >
                <div className="mb-3 md:mb-5 opacity-90">{f.icon}</div>
                <h4 className="text-[15px] sm:text-[16px] md:text-lg font-semibold mb-2">{f.title}</h4>
                <p className="text-sm sm:text-[15px] md:text-[15px] text-white/60 leading-relaxed">
                  {f.desc}
                </p>

                {/* mobile horizontal separator */}
                {i < FEATURES.length - 1 && (
                  <div className="block md:hidden mt-6">
                    <div className="h-px bg-white/10 my-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ============ CONNECTOR ============ */}
        <div className="relative mt-8 md:mt-16 mb-10 md:mb-12 flex items-center justify-center">
          {/* Base horizontal line always present */}
          <div className="absolute left-0 right-0 h-px bg-white/10" />

          {/* Left gradient arm */}
          <div
            className="absolute left-1/2 -translate-x-full top-1/2 -translate-y-1/2 h-[2px] w-[90px] sm:w-[110px] md:w-[120px]"
            style={{
              background: "linear-gradient(to left, rgba(249,115,22,0), #f97316, #8b5cf6)",
            }}
          />

          {/* Right gradient arm */}
          <div
            className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[2px] w-[90px] sm:w-[110px] md:w-[120px]"
            style={{
              background: "linear-gradient(to right, rgba(249,115,22,0), #f97316, #8b5cf6)",
            }}
          />

          <span className="relative z-10 px-4 sm:px-6 py-2 rounded-full bg-black border border-white/20 text-sm md:text-lg font-semibold">
            Other Interesting Features
          </span>
        </div>

        {/* ============ INFINITE STRIP ============ */}
        <div className="relative overflow-hidden py-2">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-[140px] sm:w-[180px] md:w-[260px] bg-gradient-to-r from-black/90 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[140px] sm:w-[180px] md:w-[260px] bg-gradient-to-l from-black/90 to-transparent z-10" />

          <motion.div
            className="flex gap-3 sm:gap-4 w-max px-4 sm:px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...STRIP_FEATURES, ...STRIP_FEATURES].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-[#1E1E1E] px-4 sm:px-5 py-2 sm:py-3 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm sm:text-base font-medium text-white">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
