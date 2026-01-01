import { motion } from "framer-motion";

/* ================== DATA ================== */

const TOP_FEATURES = [
  {
    icon: "📁",
    title: "Session Management",
    desc: "Easily upload and share project files securely.",
    color: "#FF4F4F",
  },
  {
    icon: "🧬",
    title: "Progress Tracking",
    desc: "Keep your team aligned with real-time updates.",
    color: "#2FB67D",
  },
  {
    icon: "✏️",
    title: "Editable Note Sections",
    desc: "Log work hours directly within the platform.",
    color: "#F59E0B",
  },
  {
    icon: "⏱️",
    title: "Version History",
    desc: "Organize tasks with editable tags for quick filtering.",
    color: "#7C5AF8",
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

/* ================== COMPONENT ================== */

export default function FeaturesWithInfiniteStrip() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#fffdfc] to-[#f7f5f2]">
      <div className="mx-auto max-w-7xl px-6">
        {/* -------- TOP FEATURES -------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOP_FEATURES.map((item, i) => (
            <div
              key={i}
              className="
                relative flex flex-col gap-4 bg-transparent
                px-6 py-6          /* MOBILE tightened */
                sm:py-10           /* DESKTOP unchanged */
              "
            >
              {/* Icon */}
              <div
                className="h-10 w-10 flex items-center justify-center rounded-md text-xl"
                style={{ color: item.color }}
                aria-hidden
              >
                <span className="text-[20px]">{item.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-semibold text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-black/60 max-w-[320px]">
                {item.desc}
              </p>

              {/* MOBILE horizontal divider */}
              {i < TOP_FEATURES.length - 1 && (
                <div className="block sm:hidden mt-4 h-px w-full bg-black/10" />
              )}

              {/* DESKTOP vertical divider */}
              {i < TOP_FEATURES.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 bottom-6 right-0 w-px"
                  style={{
                    background: "linear-gradient(#00000012,#00000008)",
                  }}
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>

        {/* -------- DIVIDER -------- */}
        <div className="relative my-10 flex items-center justify-center px-6">
          <div className="absolute left-0 right-0 h-px bg-black/10" />
          <span className="relative z-10 mx-4 rounded-full bg-white px-5 py-2 text-[17px] font-medium shadow">
            Other Interesting Features
          </span>
        </div>

        {/* -------- INFINITE STRIP -------- */}
        <div className="relative overflow-hidden py-6">
          <div className="
            pointer-events-none absolute left-0 top-0 h-full
            w-[80px] sm:w-[220px]
            bg-gradient-to-r
            from-[#f7f5f2]/70 sm:from-[#f7f5f2]/100
            to-transparent
            z-20
          " />
          <div className="
            pointer-events-none absolute right-0 top-0 h-full
            w-[80px] sm:w-[220px]
            bg-gradient-to-l
            from-[#f7f5f2]/70 sm:from-[#f7f5f2]/100
            to-transparent
            z-20
          " />

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
                className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-sm"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-base font-medium text-black">
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
