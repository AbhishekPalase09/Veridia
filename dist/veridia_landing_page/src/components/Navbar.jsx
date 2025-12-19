import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let timeoutId = null;

    const onScroll = () => {
      if (window.scrollY > 140) {
        if (!timeoutId) {
          timeoutId = setTimeout(() => {
            setScrolled(true);
          }, 150);
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

  // Smooth scroll handler (works when element exists)
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Universal nav handler: if already on home, scroll.
  // Otherwise navigate to Home and pass desired id in location.state
  const navigateAndScroll = (id) => {
    const targetId = id.toLowerCase();
    // If already on home route, just scroll
    if (location.pathname === "/" || location.pathname === "/home") {
      handleScroll(targetId);
    } else {
      // navigate to home and pass scroll target via state
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  const navItem = "px-4 py-2 rounded-xl no-underline";
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
            className={`
              pointer-events-auto
              mx-auto
              flex items-center justify-between
              rounded-2xl
              px-6 pt-3
              ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
            `}
          >
            {/* LOGO */}
            <motion.div
              animate={{
                x: scrolled ? 12 : 0,
                y: scrolled ? 4 : 0,
              }}
              transition={{
                duration: scrolled ? 0.3 : 0.18,
                ease: easing,
              }}
              className="text-xl font-bold text-black cursor-pointer"
              onClick={() => navigateAndScroll("home")}
            >
              Veridia
            </motion.div>

            {/* NAV LINKS */}
            <motion.nav
              animate={{ y: scrolled ? 6 : 0 }}
              transition={{
                duration: scrolled ? 0.3 : 0.18,
                ease: easing,
              }}
              className="hidden md:flex gap-3 text-base text-black"
            >
              {["Home", "Features", "About", "Comparison"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => navigateAndScroll(item.toLowerCase())}
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "rgba(0,0,0,0.05)",
                  }}
                  transition={{ duration: 0.2, ease: easing }}
                  className={`${navItem} bg-transparent text-black cursor-pointer`}
                >
                  {item}
                </motion.button>
              ))}
            </motion.nav>

            {/* CTA */}
            <motion.button
              onClick={() => navigateAndScroll("contact")}
              animate={{
                x: scrolled ? -12 : 0,
                y: scrolled ? 4 : 0,
              }}
              transition={{
                duration: scrolled ? 0.3 : 0.18,
                ease: easing,
              }}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
