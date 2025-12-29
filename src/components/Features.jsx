import React from "react";
import clientsImg from "../images/clients.png";
import recommendationsImg from "../images/recommendations.png";

import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    title: "Client Overview",
    desc: "Instantly see diagnoses, treatment modality, session count, and progress.",
    color: "#ec4899",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: "Treatment Progress",
    desc: "Track goals, improvements, and session outcomes in one clean timeline.",
    color: "#22c55e",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 14l4-4 4 3 6-6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Session History",
    desc: "View past notes, key insights, and clinical decisions effortlessly.",
    color: "#ef4444",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Smart Recommendations",
    desc: "Get AI-powered suggestions based on patterns across sessions and clients.",
    color: "#8b5cf6",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l2.8 5.6L21 11l-6.2 2.4L12 19l-2.8-5.6L3 11l6.2-2.4L12 3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="mb-20 scroll-mt-[120px]">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white px-4 py-2 rounded-full text-[16px] font-[480] text-black shadow-sm">
            Task Management
          </span>

          <h2
            className="mt-6 text-[50px] font-semibold leading-[1.1] text-black"
            style={{
              fontFamily: 'Switzer, "Switzer Placeholder", sans-serif',
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            A Complete Picture of Every Client, At a Glance
          </h2>

          {/* FEATURES GRID */}
          <div className="mt-16 grid grid-cols-2 gap-x-16 gap-y-14 relative">

            {/* CENTER DIVIDER — FRAMER ACCURATE */}
            <div className="absolute left-1/2 top-[5px] -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <div className="w-px h-[200px] bg-black/15" />
              <div className="h-[22px]" />
              <div className="w-px h-[190px] bg-black/15" />
            </div>

            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col gap-3 items-start w-[300px]"
              >
                <div style={{ color: f.color }}>{f.icon}</div>

                {/* FEATURE HEADING */}
                <div
                  className="text-[20px] leading-[1.5] font-[600] text-black"
                  style={{
                    fontFamily: "Inter Display, Inter, sans-serif",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }}
                >
                  {f.title}
                </div>

                {/* FEATURE DESCRIPTION */}
                <div
                  className="text-[17px] leading-[1.5] font-[500] text-black/75 max-w-[420px]"
                  style={{ fontFamily: "Inter Display, Inter, sans-serif" }}
                >
                  {f.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* STATIC WHITE CARD */}
          <div className="bg-white rounded-2xl p-8 shadow-soft-xl h-[520px] overflow-hidden" />

          {/* SCROLLING IMAGES */}
          <ScrollImages />
        </div>
      </div>
    </section>
  );
}

/* IMAGE PARALLAX WITH HORIZONTAL SCROLL */
function ScrollImages() {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  // Transform from right (positive) to left (negative) as you scroll down
  // Adjust the range [40, -40] to control how far the images move
  const x = useTransform(scrollYProgress, [0, 1], [120, -350]);

  return (
    <motion.div
      style={{ x }}
      className="absolute inset-x-8 bottom-0 top-8 pointer-events-none"
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    >
      {/* MAIN IMAGE */}
      <img
        src={clientsImg}
        alt="clients"
        className="w-full h-full object-cover object-top shadow-md rounded-2xl"
        draggable={false}
      />

      {/* OVERLAY IMAGE */}
      <img
        src={recommendationsImg}
        alt="Smart Recommendations"
        className="absolute bottom-0 w-[48%] shadow-[20px_-20px_60px_rgba(0,0,0,0.1)] rounded-lg"
        draggable={false}
      />
    </motion.div>
  );
}