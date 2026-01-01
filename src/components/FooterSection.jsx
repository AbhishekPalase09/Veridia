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
        pt-[120px]
      "
    >
      {/* ================= TOP CTA ================= */}
      <div className="w-full px-6 text-center">
        <div className="mx-auto max-w-7xl">
          <h2
            className="
              text-[28px] leading-[36px]
              sm:text-[32px] sm:leading-[40px]
              md:text-[52px] md:leading-[62px]
              font-normal font-heading
            "
          >
            Get access and regular updates
          </h2>

          <p
            className="
              mt-4
              text-[14px] leading-[21px]
              sm:text-[16px] sm:leading-[24px]
              md:text-[18px] md:leading-[27px]
              text-white/50
              font-inter
              text-center
            "
          >
            Start your free trial now to experience seamless project management
            without any commitment!
          </p>

          <div className="mt-10 flex justify-center">
            <div
              className="
                flex
                flex-col sm:flex-col md:flex-row
                w-full
                max-w-md
                rounded-xl
                bg-[#1a1a1a]
                p-2
                gap-3 md:gap-0
              "
            >
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
              <button
                className="
                  rounded-lg
                  bg-white
                  px-6
                  py-3
                  text-[14px]
                  font-medium
                  text-black
                  w-full md:w-auto
                "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="mt-[48px] md:mt-[88px] border-t border-white/10" />

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="w-full px-6 pt-[48px] md:pt-[72px] pb-[48px] md:pb-[72px]">
        <div
          className="
            mx-auto
            max-w-7xl
            flex
            flex-col md:flex-row
            justify-between
            gap-12 md:gap-20
          "
        >
          {/* LEFT */}
          <div className="flex flex-col gap-8 max-w-sm">
            <p
              className="
                text-[16px] leading-[24px]
                md:text-[20px] md:leading-[30px]
                text-white/50
              "
            >
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
                text-[14px] md:text-[16px]
                text-white/70
                hover:bg-white/5
                transition-colors
                w-fit
              "
            >
              <span>✉ contact@veridia.website</span>
              <span
                className="
                  text-[18px]
                  transition-transform
                  duration-200
                  group-hover:translate-x-1.5
                "
              >
                →
              </span>
            </a>
          </div>

          {/* RIGHT */}
          {/* RIGHT */}
<div
  className="
    grid
    grid-cols-2
    gap-x-12
    gap-y-10
    md:grid-cols-3
    md:gap-16
  "
>
  {/* Home */}
  <FooterColumn
    title="Home"
    links={["Features", "About", "Comparison", "FAQ’s"]}
    onItemClick={(label) => navigateAndScroll(label.toLowerCase())}
  />

  {/* Pages */}
  <FooterColumn
    title="Pages"
    links={["Home", "Waitlist", "Privacy Policy"]}
    onItemClick={handlePageLink}
  />

  {/* Social — full width on mobile */}
  <div className="col-span-2 md:col-span-1 space-y-4">
    <h4 className="text-[18px] md:text-[20px] font-medium">
      Social
    </h4>

    <div className="flex justify-end md:justify-start mt-[-8px] md:mt-0">
      <a
          href="https://www.linkedin.com/company/veridiahealth/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative
            top-[-50px] md:top-0
            right-[150px] md:right-0
            inline-flex
            items-center
            justify-center
            w-10 h-10
            rounded-lg
            bg-white/5
            hover:bg-white/10
            transition
          "
        >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white/70"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V24h-4v-7.4c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.5h-4V8z"/>
        </svg>
      </a>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="mt-auto w-full border-t border-white/10">
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-6
            flex
            flex-col sm:flex-row
            items-center
            justify-center sm:justify-between
            gap-2
            text-[14px] md:text-[17px]
            text-white/50
          "
        >
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
    <div className="space-y-4">
      <h4 className="text-[18px] md:text-[20px] font-medium">
        {title}
      </h4>

      <ul className="space-y-2 text-[16px] md:text-[18px] text-white/60">
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
