import { motion } from "framer-motion";

/* ================== DATA ================== */

const TOP_FEATURES = [
  {
    icon: "📁",
    title: "Session Management",
    desc: "Easily upload and share project files securely.",
  },
  {
    icon: "🧬",
    title: "Progress Tracking",
    desc: "Keep your team aligned with real-time updates.",
  },
  {
    icon: "✏️",
    title: "Editable Note Sections",
    desc: "Log work hours directly within the platform.",
  },
  {
    icon: "⏱️",
    title: "Version History",
    desc: "Organize tasks with editable tags for quick filtering.",
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
    <section className="relative py-24 overflow-hidden bg-[#f7f5f2]">
      
      {/* -------- TOP FEATURES -------- */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-6">
        {TOP_FEATURES.map((item, i) => (
          <div key={i} className="space-y-4">
            <div className="text-2xl">{item.icon}</div>
            <h3 className="text-lg font-semibold text-black">
              {item.title}
            </h3>
            <p className="text-sm text-black/60 max-w-[260px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* -------- DIVIDER -------- */}
      <div className="relative my-10 flex items-center px-6">
        <div className="flex-1 h-px bg-black/10" />
        <span className="mx-6 rounded-full bg-white px-6 py-2 text-sm font-medium shadow">
          Other Interesting Features
        </span>
        <div className="flex-1 h-px bg-black/10" />
      </div>

      {/* -------- INFINITE STRIP -------- */}
      <div className="relative overflow-hidden py-2">
        
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[600px] bg-gradient-to-r from-[#f7f5f2]/100 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[600px] bg-gradient-to-l from-[#f7f5f2]/100 to-transparent z-10" />

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
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-base font-medium text-black">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
