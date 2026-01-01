import React from "react";

export default function FooterCTA() {
  return (
    <section className="mb-12">
      <div className="bg-white p-6 rounded-2xl shadow-soft-xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* TEXT */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl leading-snug md:leading-normal">
            Have Questions? We're Here to Help!
          </h3>
          <p className="text-l text-black/60 mt-1 leading-relaxed">
            Reach out to our support team for any queries or assistance.
          </p>
        </div>

        {/* BUTTON */}
        <div className="mt-3 md:mt-0 flex justify-center md:block">
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-black text-white py-2 px-4 rounded-md"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
