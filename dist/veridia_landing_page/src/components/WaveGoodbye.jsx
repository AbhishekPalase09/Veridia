import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ITEMS = [
  "Billing headaches",
  "Working after hours",
  "Disorganized workflows",
  "Task overload",
];

const ITEM_HEIGHT = 56;
const VISIBLE_COUNT = 5; // 2 above, 1 center, 2 below
const CENTER_INDEX = Math.floor(VISIBLE_COUNT / 2);

// repeat items to allow infinite scrolling illusion
const LOOP = Array.from({ length: 200 }, () => ITEMS).flat();


export default function WaveGoodbye() {
  const [index, setIndex] = useState(ITEMS.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, 1600); // smooth + readable

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-48">
      <div className="max-w-[1100px] mx-auto flex items-center gap-3">
        
        {/* LEFT — STATIC */}
        <div
          className="text-[52px] font-semibold whitespace-nowrap"
          style={{
          fontFamily: '"Inter Display","Inter Display Placeholder",sans-serif',
          }}
        >
          Wave goodbye to
        </div>

        {/* RIGHT — CENTER-LOCKED CONVEYOR */}
        <div
          className="relative overflow-hidden"
          style={{ height: ITEM_HEIGHT * VISIBLE_COUNT }}
        >
          {/* Center guide (conceptual) */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: CENTER_INDEX * ITEM_HEIGHT,
              height: ITEM_HEIGHT,
            }}
          />

          <motion.div
            animate={{
              y: -(index - CENTER_INDEX) * ITEM_HEIGHT,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex flex-col"
          >
            {LOOP.map((item, i) => {
              const distance = Math.abs(i - index);
              const isActive = distance === 0;

              let opacity = 0;
              if (distance === 0) opacity = 1;
              else if (distance === 1) opacity = 0.5;
              else if (distance === 2) opacity = 0.25;

              return (
                <div
                  key={`${item}-${i}`}
                  className="h-[56px] flex items-center"
                >
                  <span
                    className="text-[52px] font-semibold whitespace-nowrap"
                    style={{
                      fontFamily:
                        '"Inter Display","Inter Display Placeholder",sans-serif',
                      opacity,
                      background: isActive
                        ? "linear-gradient(90deg,#ec4899,#f97316,#8b5cf6)"
                        : "none",
                      WebkitBackgroundClip: isActive ? "text" : "unset",
                      WebkitTextFillColor: isActive
                        ? "transparent"
                        : "#000",
                      transition: "all 0.4s ease",
                    }}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
    
  );
}
