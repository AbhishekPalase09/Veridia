import React from "react";

/* ========== ICONS (EXACT STYLE) ========== */

function VeridiaCheck() {
  // gradient ring + black inner circle + white check
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
</span>

  );
}

/* ========== COMPONENT ========== */

export default function Comparison() {
  return (
    <section id="comparison" className="mb-28 scroll-mt-[120px]">
      {/* HEADER */}
      <div className="text-center mb-14">
        <span className="inline-block bg-white px-4 py-2 rounded-full text-[17px] font-medium
        shadow-sm">
          Comparison
        </span>

        <h2 className="mt-4 text-[52px] font-semibold text-black font-switzer">
          What Sets Veridia Apart
        </h2>

        <p className="mt-3 text-[18px] text-[#3D3D3D] max-w-[760px] mx-auto font-interDisplay">
          See how Veridia helps create a more efficient and supportive practice
          environment.
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* CENTER CONNECTOR */}
        <div className="hidden md:flex absolute left-1/2 top-7 -translate-x-1/2 flex-col items-center z-20">
          {/* top neutral line */}
          <div className="w-px h-10 bg-black/15" />

          {/* VS */}
          <div className="bg-black text-white text-s font-semibold px-3 py-1 rounded-full my-1">
            VS
          </div>

          {/* bottom highlighted line (Veridia side) */}
          <div className="w-px h-10 bg-gradient-to-b from-pink-400 to-purple-500" />
        </div>

        {/* OTHER PLATFORMS */}
       <div className="rounded-[28px] bg-[#E6E1DD] px-10 pt-9 pb-6 self-start md:mr-6">


          <h3 className="text-center text-[24px] font-bold text-[#1E1E1E] mb-10 font-interDisplay">
                OTHER PLATFORMS
            </h3>
<div className="-mx-10 h-px bg-black/15 -mt-5 mb-6" />

          <ul className="space-y-5 text-[18px] text-black/80">
            <li className="flex gap-4 items-start">
              <MaskIcon />
              Separate apps for notes, billing, scheduling.
            </li>
            <li className="flex gap-4 items-start">
              <MaskIcon />
              Generic AI that needs heavy editing.
            </li>
            <li className="flex gap-4 items-start">
              <MaskIcon />
              Charge capture is manual and prone to errors.
            </li>
            <li className="flex gap-4 items-start">
              <MaskIcon />
              Users download templates or export.
            </li>
            <li className="flex gap-4 items-start">
              <MaskIcon />
              Cluttered, admin-focused dashboards.
            </li>
            <li className="flex gap-4 items-start">
              <MaskIcon />
              Reduces workload slightly (10–20%).
            </li>
            <li className="flex gap-4 items-start">
              <MaskIcon />
              AI as a side feature.
            </li>
            <li className="flex gap-4 items-start">
              <MaskIcon />
              Billing added as an optional module.
            </li>
          </ul>
        </div>

        {/* VERIDIA */}
        <div className="rounded-[28px] p-[2px] bg-gradient-to-b from-pink-400 via-orange-400 to-purple-500 md:ml-6">
          <div className="rounded-[24px] bg-white px-10 py-9 h-full">
            <h3 className="text-center text-[24px] font-bold text-[#1E1E1E] mb-10 font-interDisplay ">
              VERIDIA
            </h3>
              <div className="-mx-10 h-px bg-black/15 -mt-5 mb-6" />
            <ul className="space-y-5 text-[18px] text-black/80">
              <li className="flex gap-4 items-start">
                <VeridiaCheck />
                A unified clinical OS where everything flows together.
              </li>
              <li className="flex gap-4 items-start">
                <VeridiaCheck />
                Clinically intelligent AI that drafts near-ready notes.
              </li>
              <li className="flex gap-4 items-start">
                <VeridiaCheck />
                Auto captured from session notes — zero extra steps.
              </li>
              <li className="flex gap-4 items-start">
                <VeridiaCheck />
                Instant superbills generated automatically after sessions.
              </li>
              <li className="flex gap-4 items-start">
                <VeridiaCheck />
                A calm, therapist-first design with minimal clicks.
              </li>
              <li className="flex gap-4 items-start">
                <VeridiaCheck />
                Cuts admin time by 50–70% using full-chain automation.
              </li>
              <li className="flex gap-4 items-start">
                <VeridiaCheck />
                AI as the backbone — powering every major workflow.
              </li>
              <li className="flex gap-4 items-start">
                <VeridiaCheck />
                Billing is built into documentation — fully connected.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
