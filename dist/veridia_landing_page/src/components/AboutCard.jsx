import React from "react";

export default function AboutCard() {
  const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <section id="about" style={{ marginBottom: 96 }} className="scroll-mt-[120px]">
      {/* OUTER SOFT BORDER */}
      <div
        style={{
          borderRadius: 28,
         
          background:
            "linear-gradient(135deg, #c7bfff, #ffd6a5, #fbcfe8)",
        }}
      >
        {/* CARD */}
        <div
          style={{
            position: "relative",
            borderRadius: 26,
            padding: "64px 64px 72px 64px",
            background: "#ffffff",
            overflow: "hidden",
          }}
        >
          {/* RIGHT-SIDE GRADIENT GLOW (NO PARTITION) */}
          {/* RIGHT-SIDE GRADIENT GLOW (NO PARTITION) */}
<div
  aria-hidden
  style={{
    position: "absolute",
    inset: 0,
    background: `
      linear-gradient(
        90deg,
        rgba(255,255,255,1) 0%,
        rgba(255,247,237,0.0) 45%,
        rgba(253,242,248,0.35) 65%,
        rgba(192,132,252,0.65) 100%
      )
    `,
    pointerEvents: "none",
  }}
/>


          {/* CONTENT */}
          <div
            style={{
              position: "relative",
              maxWidth: 620,
            }}
          >
            {/* PILL */}
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: 999,
                background: "rgba(17,24,39,0.04)",
                fontSize: 17,
                fontWeight: 500,
                color: "#111827",
              }}
            >
              About Us
            </div>

            {/* TITLE */}
            <h2
              style={{
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                marginTop: 10,
               fontFamily:
                  '"Switzer","Switzer Placeholder",ui-sans-serif,system-ui,-apple-system',
                fontSize: 52,
                fontWeight: 640,
                lineHeight: "1.05",
                color: "black",
              }}
            >
              Veridia
            </h2>

            {/* BODY */}
            <p
              style={{
                fontFamily:
                  '"Inter Display","Inter","Inter Display Placeholder",ui-sans-serif,system-ui,-apple-system',

                marginTop: 22,
                fontSize: 18,
                lineHeight: 1.7,
                color: "#3D3D3D",
              }}
            >
              Veridia was created to support the people who support mental
              health. Across India, clinicians spend countless hours on
              documentation, scheduling, and billing—time that takes them away
              from meaningful care.
            </p>

            <p
              style={{
                fontFamily:
                '"Inter Display","Inter","Inter Display Placeholder",ui-sans-serif,system-ui,-apple-system',

                marginTop: 18,
                fontSize: 18,
                lineHeight: 1.7,
                 color: "#3D3D3D",
              }}
            >
              We build Veridia as a clinician-first platform that lightens this
              administrative load. Our AI doesn’t replace professionals; it
              assists them, turning complex back-office tasks into simple,
              seamless workflows.
            </p>
            <p
            style={{
              fontFamily:
                '"Inter Display","Inter","Inter Display Placeholder",ui-sans-serif,system-ui,-apple-system',
                marginTop: 18,
                fontSize: 18,
             
                lineHeight: 1.7,
                 color: "#3D3D3D",
              }}
              >
                We stand by one promise:</p>
            <p
              style={{
                marginTop: 4,
                fontSize: 18,
                lineHeight: 1.7,
                color: "rgba(15,23,42,0.85)",
               
                fontWeight: 600,
              }}
            >
              Efficiency should support empathy — never replace it.
            </p>

            {/* CTA */}
            <div style={{ marginTop: 40 }}>
              <button
                onClick={scrollToContact}
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "17px 28px",
                  borderRadius: 12,
                  fontSize: 17,
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
