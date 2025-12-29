import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function FooterSection() {
  const navigate = useNavigate();
  const location = useLocation();

  /* -----------------------------
     Helpers
  ------------------------------ */

  const navigateAndScroll = (id) => {
    const targetId = String(id).toLowerCase().replace(/[^\w-]/g, "");
    const isHome = location.pathname === "/" || location.pathname === "/home";

    if (isHome) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    navigate("/", { state: { scrollTo: targetId } });
  };

  const handlePageLink = (label) => {
    const key = label.toLowerCase().replace(/[^\w-]/g, "");
    if (key === "home") navigateAndScroll("home");
    else if (key === "waitlist") navigate("/waitlist");
    else if (key.includes("privacy")) navigate("/privacy-policy");
    else navigate("/");
  };

  /* -----------------------------
     Render
  ------------------------------ */

  return (
    <footer
      className="
        relative
        min-h-screen
        w-full
        bg-[#0b0b0b]
        text-white
        flex
        flex-col
        pt-[120px]   /* offset for fixed navbar */
      "
    >
      {/* ================= TOP CTA ================= */}
      <div className="w-full px-6 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-[48px] leading-[62px] font-semibold">
            Get access and regular updates
          </h2>

          <p className="mt-4 text-[14px] leading-[27px] text-white/50 max-w-2xl mx-auto">
            Start your free trial now to experience seamless project management
            without any commitment!
          </p>

          <div className="mt-10 flex justify-center">
            <div className="flex w-full max-w-md rounded-xl bg-[#1a1a1a] p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1
                  bg-transparent
                  px-4
                  py-3
                  text-[14px]
                  text-white
                  placeholder-white/40
                  outline-none
                "
              />
              <button className="rounded-lg bg-white px-6 py-3 text-[14px] font-medium text-black">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="mt-[88px] border-t border-white/10" />

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="w-full px-6 pt-[72px] pb-[72px] ">
        <div className="mx-auto max-w-7xl flex justify-between gap-20">
          
          {/* LEFT */}
          <div className="flex flex-col gap-8 max-w-sm">
            <p className="text-[20px] leading-[30px] text-white/50 pb-[62px]">
              Efficiency that supports empathy
            </p>

            <a
  href="mailto:hello@veridia.com"
  className="
    group
    inline-flex
    items-center
    gap-3
    rounded-lg
    border
    border-white/15
    pl-4
    pr-6
    py-2.5
    text-[16px]
    text-white/70
    hover:bg-white/5
    transition-colors
  "
>
  <span className="flex items-center gap-2">
    ✉ contact@veridia.website
  </span>

  <span
    className="
      text-[20px]
      transition-transform
      duration-200
      ease-out
      group-hover:translate-x-1.5
    "
  >
    →
  </span>
</a>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-3 gap-16">
            
            <FooterColumn
              title="Home"
              links={["Features",  "About", "Comparison", "FAQ’s"]}
              onItemClick={(label) =>
                navigateAndScroll(label.toLowerCase())
              }
            />

            <FooterColumn
              title="Pages"
              links={["Home", "Waitlist", "Privacy Policy"]}
              onItemClick={handlePageLink}
            />

            {/* SOCIAL */}
            <div className="space-y-6">
              <h4 className="text-[20px] leading-[30px] font-medium">
                Social
              </h4>

                            <a
                href="https://www.linkedin.com/company/veridiahealth/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-lg
                  bg-white/5
                  px-4
                  py-2.5
                  text-[18px]
                  text-white/70
                  hover:bg-white/10
                  transition
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V24h-4v-7.4c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.5h-4V8z"/>
                </svg>

                <span>LinkedIn</span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="mt-auto w-full border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6  flex items-center justify-between text-[17px] text-white/50">
          <span>© 2025 Veridia. All rights reserved.</span>
          <button
            onClick={() => navigate("/privacy-policy")}
            className="hover:text-white"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
}

/* ================= SUB COMPONENT ================= */

function FooterColumn({ title, links = [], onItemClick }) {
  return (
    <div className="space-y-6">
      <h4 className="text-[20px] leading-[30px] font-medium">
        {title}
      </h4>

      <ul className="space-y-3 text-[18px] leading-[27px] text-white/60">
        {links.map((item, i) => (
          <li
            key={i}
            className="hover:text-white cursor-pointer"
            onClick={() => onItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
