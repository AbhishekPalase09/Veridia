import React from "react";

/* ========== ICONS ========== */

function VeridiaCheck() {
  return (
    <span className="shrink-0 mt-[9px]">
      <span className="rounded-[6px] p-[2px] bg-gradient-to-br from-pink-400 via-orange-400 to-purple-500 inline-flex">
        <span className="w-6 h-6 rounded-[6px] bg-black flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M20 6L9 17l-5-5"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </span>
  );
}

function MaskIcon() {
  return (
    <span className="mt-[2px] text-black/60 shrink-0">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16v11a8 8 0 0 1-16 0V4z" />
        <path d="M9 9h.01M15 9h.01" />
      </svg>
    </span>
  );
}

/* ========== COMPONENT ========== */

export default function Comparison() {
  return (
    <section id="comparison" className="mb-28 scroll-mt-[120px]">
      {/* HEADER */}
      <div className="text-center mb-14">
        <span className="inline-block bg-white px-4 py-2 rounded-full text-[17px] font-medium shadow-sm">
          Comparison
        </span>

        <h2 className="mt-4 text-[52px] font-semibold text-black font-heading">
          What Sets Veridia Apart
        </h2>

        <p className="mt-3 text-[18px] text-[#3D3D3D] max-w-[760px] mx-auto font-interDisplay">
          See how Veridia helps create a more efficient and supportive practice
          environment.
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-28">

        {/* DESKTOP CENTER CONNECTOR */}
        <div className="hidden md:flex absolute left-1/2 top-7 -translate-x-1/2 flex-col items-center z-20">
          <div className="w-px h-10 bg-black/15" />
          <div className="bg-black text-white text-sm font-semibold px-3 py-1 rounded-full my-1">
            VS
          </div>
          <div className="w-px h-10 bg-gradient-to-b from-pink-400 to-purple-500" />
        </div>

        {/* OTHER PLATFORMS */}
        <div className="rounded-[28px] bg-[#E6E1DD] px-10 pt-9 pb-6 self-start">
          <h3 className="text-center text-[24px] font-bold text-[#1E1E1E] mb-10 font-inter">
            OTHER PLATFORMS
          </h3>

          <div className="-mx-10 h-px bg-black/15 -mt-5 mb-6" />

          <ul className="space-y-5 text-[18px] text-black/80 leading-relaxed">
            {[
              "Separate apps for notes, billing, scheduling.",
              "Generic AI that needs heavy editing.",
              "Charge capture is manual and prone to errors.",
              "Users download templates or export.",
              "Cluttered, admin-focused dashboards.",
              "Reduces workload slightly (10–20%).",
              "AI as a side feature.",
              "Billing added as an optional module.",
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-start">
                <MaskIcon />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE + TABLET HORIZONTAL VS */}
        <div className="md:hidden flex items-center justify-center gap-4 my-2">
          <div className="flex-1 h-px bg-black/20" />
          <span className="bg-black text-white text-sm font-semibold px-4 py-1 rounded-full">
            VS
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-pink-400 to-purple-500" />
        </div>

        {/* VERIDIA */}
        <div className="rounded-[28px] p-[2px] bg-gradient-to-b from-pink-400 via-orange-400 to-purple-500">
          <div className="rounded-[24px] bg-white px-10 py-9 h-full">
            <h3 className="text-center text-[24px] font-bold text-[#1E1E1E] mb-10 font-inter">
              VERIDIA
            </h3>

            <div className="-mx-10 h-px bg-black/15 -mt-5 mb-6" />

            <ul className="space-y-5 text-[18px] text-black/80 leading-relaxed">
              {[
                "A unified clinical OS where everything flows together.",
                "Clinically intelligent AI that drafts near-ready notes.",
                "Auto captured from session notes - zero extra steps.",
                "Instant superbills generated automatically after sessions.",
                "A calm, therapist-first design with minimal clicks.",
                "Cuts admin time by 50-70% using full-chain automation.",
                "AI as the backbone - powering every major workflow.",
                "Billing is built into documentation - fully connected.",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <VeridiaCheck />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
