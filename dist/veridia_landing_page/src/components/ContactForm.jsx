import React, { useState } from "react";
import axios from "axios";


export default function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/contact", form);
      setForm({ name: "", subject: "", email: "", message: "" });
    } catch (e) {
      console.error(e);
    }
  };

  const handleEmailClick = () => {
  const to = "contact@veridia.website";
  const subject = "Inquiry from Veridia Website";
  const body = "Hi Veridia Team,%0D%0A%0D%0A";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank");
};


  return (
    <section id="contact" className="mb-28 scroll-mt-[120px]">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-white px-4 py-2 rounded-full text-sm shadow-sm">
            Contact
          </span>

          <h2 className="mt-6 text-[48px] leading-[1.05] font-extrabold text-black">
            We’d Love to Hear <br /> From You
          </h2>

          <p className="mt-4 text-black/70 max-w-[480px]">
            Contact us for inquiries, support, or feedback. We're here to assist
            you every step of the way.
          </p>

          {/* EMAIL CARD */}
          <div className="mt-8 bg-[#ece9e6] rounded-xl px-5 py-4 flex items-center justify-between max-w-[520px]">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg border-2 border-black flex items-center justify-center">
                <svg
                   width="22"
                   height="22"
                   viewBox="0 0 24 24"
                   fill="none"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="3"
                    stroke="#000"
                    strokeWidth="1.6"
                 />
                   <path
                    d="M4 7l8 6 8-6"
                    stroke="#000"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </div>

              <span className="font-medium text-black">
                contact@veridia.website
              </span>
            </div>

            <button 
            onClick={handleEmailClick}
            className="bg-black text-white px-6 py-3 rounded-lg text-base font-medium">
              Email Us
            </button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="rounded-[22px] p-[2px] bg-gradient-to-b from-red-400 via-pink-400 to-purple-500">
          <div className="rounded-[20px] bg-white px-10 py-10">
            <h3 className="text-[28px] font-bold mb-8 text-black">
              Send us your query
            </h3>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* NAME + SUBJECT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-black">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Enter your name"
                    className="mt-2 w-full px-4 py-3 rounded-lg bg-[#f3f2f1] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-black">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Enter your subject"
                    className="mt-2 w-full px-4 py-3 rounded-lg bg-[#f3f2f1] focus:outline-none"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium text-black">
                  E-Mail
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-[#f3f2f1] focus:outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm font-medium text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Enter your message"
                  rows={4}
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-[#f3f2f1] focus:outline-none resize-none"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-4 bg-black text-white px-6 py-3 rounded-xl font-medium"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
