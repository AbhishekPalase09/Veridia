import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex flex-col
        items-center
        justify-center
        text-center
        scroll-mt-[120px]
      "
    >
      {/* HERO TITLE */}
      <motion.h1
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="
    hero-title
    max-w-[1200px]
    leading-[0.92]
    font-switzer
    font-black
    font-extrabold
    text-[64px]
  "
>
  Efficiency that supports empathy
</motion.h1>

      {/* SUBTITLE */}
      <motion.p
      initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-4 text-[18px] text-black/70 max-w-[760px] font-inter">
        Boost productivity with seamless task management.
      </motion.p>

      {/* CTA */}
      <motion.button
      
        onClick={() => navigate("/waitlist")}
        whileHover={{ scale: 1.05, opacity: 0.95, backgroundColor: "#3d3d3d"}}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="
          mt-8
          bg-black
          text-white
          px-8
          py-3
          font-inter
          font-medium
          rounded-xl
          shadow-md
        "
        style={{
          width: "160px",
          height: "59px",
        }}
      >
        Join Waitlist
      </motion.button>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-12 flex flex-col items-center text-[10px] tracking-[0.25em] text-black/40">
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 14, opacity: 0 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          SCROLL
        </motion.div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 26, opacity: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-px bg-black/30 mt-1"
        />
      </div>
    </section>
  );
}
