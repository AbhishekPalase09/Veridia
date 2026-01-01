import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let timeoutId = null;

    const onScroll = () => {
      if (window.scrollY > 140) {
        if (!timeoutId) {
          timeoutId = setTimeout(() => setScrolled(true), 150);
        }
      } else {
        clearTimeout(timeoutId);
        timeoutId = null;
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigateAndScroll = (id) => {
    const targetId = id.toLowerCase();
    setMobileOpen(false);

    if (location.pathname === "/" || location.pathname === "/home") {
      handleScroll(targetId);
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  const easing = [0.22, 1, 0.36, 1];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="mx-auto px-6 pt-6">
        <AnimatePresence>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              maxWidth: scrolled ? "1050px" : "1300px",
              paddingBottom: scrolled ? "20px" : "12px",
            }}
            transition={{
              duration: scrolled ? 0.3 : 0.18,
              ease: easing,
            }}
            whileHover={{ scale: 1.03 }}
            className={`pointer-events-auto mx-auto flex items-center justify-between rounded-2xl px-6 pt-3 ${
              scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
          >
            {/* LOGO */}
            <motion.div
              animate={{ x: scrolled ? 12 : 0, y: scrolled ? 4 : 0 }}
              transition={{ duration: scrolled ? 0.3 : 0.18, ease: easing }}
              className="text-xl font-bold text-black cursor-pointer"
              onClick={() => navigateAndScroll("home")}
            >
              Veridia
            </motion.div>

            {/* DESKTOP NAV */}
            <motion.nav
              animate={{ y: scrolled ? 6 : 0 }}
              transition={{ duration: scrolled ? 0.3 : 0.18, ease: easing }}
              className="nav-links"
            >
              {["Home", "Features", "About", "Comparison"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => navigateAndScroll(item.toLowerCase())}
                  whileHover={{ scale: 1.08, backgroundColor: "rgba(0,0,0,0.05)" }}
                  transition={{ duration: 0.2, ease: easing }}
                  className="px-4 py-2 rounded-xl bg-transparent text-black focus:outline-none"
                >
                  {item}
                </motion.button>
              ))}
            </motion.nav>

            {/* DESKTOP CTA */}
            <motion.div
              animate={{ x: scrolled ? -12 : 0, y: scrolled ? 4 : 0 }}
              transition={{ duration: scrolled ? 0.3 : 0.18, ease: easing }}
              className="contact-desktop"
            >
              <motion.button
                onClick={() => navigateAndScroll("contact")}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.18 }}
                className="bg-black text-white px-3.5 py-3 rounded-lg focus:outline-none"
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* HAMBURGER */}
            <div className="hamburger-toggle pointer-events-auto">
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((s) => !s)}
                className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-lg"
              >
                <div className="relative w-[18px] h-[14px]">
                  {/* TOP */}
                  <motion.span
                    animate={{
                      rotate: mobileOpen ? 45 : 0,
                      y: mobileOpen ? 6 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 top-0 h-[2px] bg-white rounded"
                  />

                  {/* MIDDLE */}
                  <motion.span
                    animate={{ opacity: mobileOpen ? 0 : 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-white rounded"
                  />

                  {/* BOTTOM */}
                  <motion.span
                    animate={{
                      rotate: mobileOpen ? -45 : 0,
                      y: mobileOpen ? -6 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-white rounded"
                  />
                </div>
              </button>

              {/* MOBILE MENU */}
              <AnimatePresence>
                {mobileOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="mobile-menu"
                  >
                    <div className="flex flex-col gap-2">
                      {["Home", "Features", "About", "Comparison"].map((item) => (
                        <button
                          key={item}
                          onClick={() => navigateAndScroll(item.toLowerCase())}
                          className="mobile-link text-base bg-transparent focus:outline-none"
                        >
                          {item}
                        </button>
                      ))}

                      <button
                        onClick={() => {
                          setMobileOpen(false);
                          navigate("/waitlist");
                        }}
                        className="btn-block bg-white border border-black rounded-lg py-3"
                      >
                        Join Waitlist
                      </button>

                      <button
                        onClick={() => {
                          setMobileOpen(false);
                          navigateAndScroll("contact");
                        }}
                        className="btn-block bg-black text-white rounded-lg py-3"
                      >
                        Contact Us
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
