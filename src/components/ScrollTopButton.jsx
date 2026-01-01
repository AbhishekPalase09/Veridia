import React from "react";

export default function ScrollTopButton() {
  const handle = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="flex justify-center my-8">
      <button onClick={handle} className="w-14 h-14 rounded-full bg-black text-white shadow-xl flex items-center justify-center">↑</button>
    </div>
  );
}
