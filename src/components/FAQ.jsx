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
    a: "Yes. All data is encrypted, securely stored, and handled with strict ethical standards. We prioritize privacy and clinician trust above all."
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
  const [open, setOpen] = useState([]);

  const toggle = (i) => {
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <section id="faq" className="mb-20 sm:mb-24">
      {/* Header */}
      <div className="text-center mb-12 md:mb-14">
        <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white text-sm shadow-sm">
          FAQs
        </span>
        <h2 className="text-[30px] sm:text-5xl font-extrabold font-heading leading-tight">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-[1200px] mx-auto md:grid md:grid-cols-2 md:gap-x-20">
        {FAQLIST.map((item, i) => {
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
                  flex items-center justify-between
                  text-left
                  py-7 sm:py-6
                  px-1
                  md:min-h-[110px]
                  outline-none
                  focus:outline-none
                  focus-visible:outline-none
                  focus-visible:ring-0
                  active:outline-none
                  [-webkit-tap-highlight-color:transparent]
                "
              >
                <span
                  className="
                    text-[20px]
                    leading-[1.7]
                    sm:text-[16px]
                    md:text-[20px] md:leading-snug
                    font-semibold
                    max-w-[85%]
                  "
                >
                  {item.q}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="
                    text-[22px] sm:text-[24px] md:text-[32px]
                    font-light
                    flex items-center justify-center
                    w-8 h-8 md:w-10 md:h-10
                    shrink-0
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
                    <div
                      className="
                        pt-1 pb-7
                        pr-2
                        text-[18px]
                        leading-relaxed
                        sm:text-[15px]
                        md:text-[18px]
                        text-black/70
                      "
                    >
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
