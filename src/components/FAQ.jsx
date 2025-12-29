import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQLIST = [
  {
    q: "What is Veridia, and who is it for?",
    a: "Veridia is a clinician-first platform designed for therapists, psychologists, and counsellors. It streamlines documentation, scheduling, billing, and client management- all in one place."
  },
  {
    q: "How does Veridia’s AI documentation work?",
    a: "Our AI helps generate accurate, clinically-aware notes from your session summaries or inputs. Clinicians stay fully in control and can edit or refine every part."
  },
  {
    q: "Will Veridia replace my clinical judgment?",
    a: "No. Veridia supports clinicians — it does not diagnose, interpret, or replace your expertise. You approve and finalize every note."
  },
  {
    q: "Is Veridia secure and private?",
    a: "Yes. All data is encrypted, securely stored, and handled with strict ethical standards. We prioritize privacy and clinician trust above all.."
  },
  {
    q: "Can I use Veridia for both in-person and online sessions?",
    a: "Absolutely. Veridia supports in-person and telehealth workflows, with easy scheduling and session-to-note transitions."
  },
  {
    q: "What kinds of notes can the AI generate?",
    a: "You can create progress notes, intake summaries, treatment updates, SOAP/BIRP/DAP formats, and more- all customizable."
  },
  {
    q: "Does Veridia work for solo practitioners and clinics?",
    a: "Yes. It’s designed to be simple for solo clinicians and scalable for multi-clinician practices."
  },
  {
    q: "Do I need training to use Veridia?",
    a: "No. The platform is designed to be intuitive and calming."
  },
  {
    q: "Does Veridia handle billing?",
    a: "Yes. Veridia automatically creates charges after a session and generates clean superbills and invoices — all directly from your notes."
  },
  {
    q: "What regions does Veridia serve?",
    a: "We’re beginning in India, but the platform is designed to scale to global mental-health practices over time."
  }
];


export default function FAQ() {
  // ✅ allow multiple open items
  const [open, setOpen] = useState([]);

  const toggle = (i) => {
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const left = FAQLIST.slice(0, 5);
  const right = FAQLIST.slice(5, 10);

  return (
    <section id="faq" className="mb-24">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white text-sm shadow-sm">
          FAQs
        </span>
        <h2 className="text-5xl font-extrabold">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-x-20">
        {[left, right].map((col, ci) => (
          <div key={ci}>
            {col.map((item, idx) => {
              const i = ci * 5 + idx;
              const isOpen = open.includes(i);

              return (
                <motion.div
                  key={i}
                  layout
                  className="border-t border-black/10 last:border-b"
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(i)}
                    className="
                      w-full
                      min-h-[110px]
                      flex
                      items-center
                      justify-between
                      text-left 
                      outline-none
                      focus:outline-none
                      focus:ring-0
                      active:outline-none
                    "
                  >
                    <span className="text-[20px] font-semibold leading-snug">
                      {item.q}
                    </span>

                    {/* ✅ Bigger + / − with animation */}
                    <motion.span
                      animate={{
                        rotate: isOpen ? 45 : 0,
                        scale: isOpen ? 1.1 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="
                        text-[32px]
                        font-light
                        flex
                        items-center
                        justify-center
                        w-10
                        h-10
                      "
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 26,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-10 text-[18px] text-black/70">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
