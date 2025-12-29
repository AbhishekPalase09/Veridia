import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import analytics from "../images/analytics.png";
import invoicePreview from "../images/invoice-preview.png";
import dashboard from "../images/dashboard.png";
import chatbot from "../images/chatbot.png";
import { useNavigate } from "react-router-dom";


const FEATURES = [
  {
    title: "Session Management",
    desc: "Track, organize, and manage every client session in one place.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 7h18M3 12h18M3 17h18" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Progress Tracking",
    desc: "Monitor client improvement with clear, structured session history.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="18" r="2" stroke="white" strokeWidth="1.6"/>
        <circle cx="12" cy="10" r="2" stroke="white" strokeWidth="1.6"/>
        <circle cx="18" cy="6" r="2" stroke="white" strokeWidth="1.6"/>
        <path d="M6 16l6-6 6-4" stroke="white" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    title: "Editable Note Sections",
    desc: "Quickly rewrite, expand, or fine-tune specific parts of your notes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 20h9" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" stroke="white" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    title: "Version History",
    desc: "Review, compare, and restore previous versions of any clinical note.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6"/>
        <path d="M12 7v5l3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
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
  stiffness: 60,   // LOWER = slower
  damping: 20,     // HIGHER = smoother
  mass: 1.2        // HIGHER = heavier feel
};

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation for each image - they move up as you scroll down
  // Adjust the ranges to control movement amount
 const rawInvoiceY = useTransform(scrollYProgress, [0, 1], [100, -100]);
const rawAnalyticsY = useTransform(scrollYProgress, [0, 1], [100, -100]);
const rawChatbotY = useTransform(scrollYProgress, [0, 1], [100, -100]);

const invoiceY = useSpring(rawInvoiceY, springConfig);
const analyticsY = useSpring(rawAnalyticsY, springConfig);
const chatbotY = useSpring(rawChatbotY, springConfig);

  return (
    <section className="mb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="bg-black text-white px-10 py-24">
        {/* HEADER */}
        <div className="max-w-[1100px] mx-auto text-center">
          <div className="inline-flex mb-6">
            <div className="p-[1px] rounded-full bg-[linear-gradient(135deg,#ec4899,#f97316,#8b5cf6)]">
              <div className="px-4 py-[10px] rounded-full bg-black text-sm text-white/90 text-[15px] md:text-[17px]">
                Product Overview
              </div>
            </div>
          </div>

          <h2 className="mt-8 font-bold text-[36px] md:text-[52px] leading-[120%]">
            Simplify Task Management<br />with Powerful Features
          </h2>

          <p className="mt-5 text-white/70 text-lg">
            Discover features designed to simplify workflows and boost productivity.
          </p>

          <div className="mt-8">
            <button onClick={() => navigate("/waitlist")} className="bg-white text-black px-7 py-3 rounded-xl font-semibold">
              Get Started
            </button>
          </div>
        </div>

        {/* 🔥 IMAGE COMPOSITION WITH SCROLL ANIMATIONS */}
        <div ref={containerRef} className="relative mt-24 max-w-[1016px] mx-auto h-[651px]"
        style={{ perspective: "1200px" }}
        >
          
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

          {/* MAIN DASHBOARD - NO ANIMATION */}
          <img
            src={dashboard}
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1016px] max-w-[100%] h-full object-cover shadow-2xl z-10"
            alt="Analytics Dashboard"
          />

          {/* INVOICE (LEFT) - WITH ANIMATION */}
          <motion.img
            src={invoicePreview}
            style={{ y: invoiceY ,transformOrigin: "center center",rotateZ: 5,
                transformStyle: "preserve-3d",
              filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.20))"}}
            className="absolute left-[-80px] bottom-[140px] w-[245px] rotate-[4deg] shadow-2xl z-10"
            alt="Invoice Preview"
          />

          {/* ANALYTICS (RIGHT) - WITH ANIMATION */}
          <motion.img
            src={analytics}
             style={{ y: analyticsY  ,transformOrigin: "center center",rotateZ: -5,
                 transformStyle: "preserve-3d",
              filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.20))",
               }}
            className="absolute right-[-20px] top-[390px] w-[160px] rotate-[-6deg] shadow-2xl z-10"
            alt="Dashboard"
          />

          {/* CHATBOT - WITH ANIMATION */}
          <motion.img
            src={chatbot}
            style={{ y: chatbotY ,transformOrigin: "center center", rotateZ: -5,
               transformStyle: "preserve-3d",
              filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.20))"}}
            className="absolute right-[250px] bottom-[350px] w-[117px] rotate-[-3deg] shadow-2xl z-10"
            alt="chatbot"
          />
        </div>

        {/* FEATURES */}
        <div className="relative mt-32 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 border-t border-b border-white/10">
          {/* CENTER COLORED LINE */}
          <div
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px]"
            style={{
              height: "calc(100% + 90px)",
              background: "linear-gradient(to bottom, #ec4899 0%, #8b5cf6 50%, #f97316 78%, rgba(249,115,22,0) 100%)",
            }}
          />

          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`px-8 py-12 ${
                i !== FEATURES.length - 1 ? "md:border-r border-white/10" : ""
              }`}
            >
              <div className="mb-5 opacity-90">{f.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CONNECTOR */}
        <div className="relative mt-16 mb-20 flex items-center justify-center">
          {/* BASE HORIZONTAL LINE */}
          <div className="absolute left-0 right-0 h-px bg-white/10" />

          {/* LEFT GRADIENT ARM */}
          <div
            className="absolute left-1/2 -translate-x-full top-1/2 -translate-y-1/2 h-[2px] w-[120px]"
            style={{
              background: "linear-gradient(to left, rgba(249,115,22,0), #f97316, #8b5cf6)",
            }}
          />

          {/* RIGHT GRADIENT ARM */}
          <div
            className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[2px] w-[120px]"
            style={{
              background: "linear-gradient(to right, rgba(249,115,22,0), #f97316, #8b5cf6)",
            }}
          />

          {/* PILL */}
          <span className="relative z-10 px-9 py-3 rounded-full bg-black border border-white/20 text-lg font-semibold tracking-wide">
            Other Interesting Features
          </span>
        </div>

        {/* -------- INFINITE STRIP -------- */}
              <div className="relative overflow-hidden py-2">
  
  {/* edge fades – lighter */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-[600px] bg-gradient-to-r from-black/100 to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-[600px] bg-gradient-to-l from-black/100 to-transparent z-10" />

  <motion.div
    className="flex gap-4 w-max px-6"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 28,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {[...STRIP_FEATURES, ...STRIP_FEATURES].map((item, i) => (
      <div
        key={i}
        className="flex items-center gap-3 rounded-xl bg-[#1E1E1E] px-5 py-3 shadow-sm"
      >
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: item.color }}
        />
        <span className="text-base font-medium text-white">
          {item.label}
        </span>
      </div>
    ))}
  </motion.div>
</div>

        </div>
    </section>
    
  );
}