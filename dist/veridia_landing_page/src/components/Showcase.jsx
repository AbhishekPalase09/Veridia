import React from "react";
import { motion } from "framer-motion";
import uiPreview from "../images/ui-preview.png";

export default function Showcase() {
  return (
    <section className="mb-32 ">
      <div
        className="
          relative
          mx-auto
          max-w-6xl
          rounded-[36px]
          bg-[#f5f3f1]
          overflow-hidden
          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
        "
        style={{ perspective: "1600px" }}
      >
        {/* IMAGE WRAPPER */}
        <motion.div
          initial={{
            opacity: 0,
            rotateX: 28,
            rotateZ: -12,
            y: 40,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            rotateX: 45,
            rotateY: 5,
            rotateZ: -30,
            y: -20,
            scale: 0.7,
          }}
          transition={{
            duration: 1.1,
            ease: "easeOut",
          }}
          className="
            relative
            z-10
            mx-auto
            w-[72%]
            -mt-[130px]
            -mb-[70px]
          "
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* ACTUAL IMAGE */}
          <img
            src={uiPreview}
            alt="Veridia UI"
            className="w-full rounded-2xl block"
            draggable={false}
          />

          {/* 🔥 EDGE PAINT — HIDES BLACK LINE FOREVER */}
          <div
            className="pointer-events-none absolute top-0 left-0 h-full"
            style={{
              width: "10px",
              backgroundColor: "#f5f3f1",
              transform: "translateX(-2px)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
