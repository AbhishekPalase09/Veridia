import { motion } from "framer-motion";

export default function WaitlistHero() {
  return (
    <div className="text-center max-w-[900px] mx-auto pt-40 overflow-hidden">
      {/* TITLE */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 140,        // 🔥 VERY LARGE TRAVEL (LOAD)
          scale: 0.82,   // 🔥 DEEP START
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        whileHover={{
          y: -18,       // ⚡ FAST POP UP
          scale: 1.04,  // ⚡ STRONG POP
        }}
        transition={{
          duration: 1.6,                 // 🐢 VERY SLOW ON LOAD
          ease: [0.12, 0, 0.39, 1],       // PREMIUM EASE
        }}
        whileHoverTransition={{
          duration: 0.15,                // ⚡ VERY FAST ON HOVER
          ease: "easeOut",
        }}
        className="text-5xl font-bold text-black cursor-pointer"
      >
        Get early access and regular updates
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{
          opacity: 0,
          y: 110,        // 🔥 LARGE TRAVEL
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.5,                 // 🐢 SLOW & CINEMATIC
          delay: 0.15,
          ease: [0.12, 0, 0.39, 1],
        }}
        className="mt-6 text-[16px] font-medium text-black/70 pt-3"
      >
        Be amongst the first to experience Veridia, give feedback and see us grow.
        <br />
        Sign up to be notified when we launch!
      </motion.p>
    </div>
  );
}
