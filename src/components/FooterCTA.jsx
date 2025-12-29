import React from "react";

export default function FooterCTA() {
  return (
    <section className="mb-12">
      <div className="bg-white p-6 rounded-2xl shadow-soft-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-xl">
            Have Questions? We're Here to Help!
          </h3>
          <p className="text-sm text-black/60">
            Reach out to our support team for any queries or assistance.
          </p>
        </div>
        <div>
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
