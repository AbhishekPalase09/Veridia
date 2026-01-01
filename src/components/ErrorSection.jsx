import { motion } from "framer-motion";

export default function ErrorSection() {
  return (
    <section className="w-full min-h-screen bg-[#f7f5f2] flex items-center justify-center">
      <div className="text-center px-6">

        {/* ===== 404 DIGITS ===== */}
        <div className="flex justify-center gap-6 mb-6">
          <FloatingDigit delay={0}>4</FloatingDigit>
          <FloatingDigit delay={0.2}>0</FloatingDigit>
          <FloatingDigit delay={0.4}>4</FloatingDigit>
        </div>

        {/* ===== TITLE ===== */}
        <h4 className="text-[32px] leading-[42px] font-semibold text-black">
          Oops! This path leads to the past.
        </h4>

        {/* ===== DESCRIPTION ===== */}
        <p className="mt-4 max-w-xl mx-auto text-[18px] leading-[30px] text-[#4C4C4C]">
          We regret to inform you that the page you're searching for seems to be
          unavailable. We apologize for any inconvenience this may cause.
        </p>

        {/* ===== BUTTON ===== */}
        <div className="mt-10">
          <button
            className="
              rounded-xl
              bg-black
              px-8
              py-4
              text-[16px]
              font-medium
              text-white
              transition
              hover:bg-black/90
            "
          >
            Back to Home Page
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= FLOATING DIGIT ================= */

function FloatingDigit({ children, delay = 0 }) {
  return (
    <motion.span
      className="text-[160px] leading-none font-semibold text-[#333333]"
      animate={{
        y: [0, -34, 0],
      }}
      transition={{
        duration: 2.8,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      {children}
    </motion.span>
  );
}
