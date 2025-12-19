import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-03-29T22:00:00+05:30");

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 flex justify-center">
      {/* Outer pill container */}
      <div className="flex items-center gap-3 rounded-xl bg-white px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
        <TimeBox value={timeLeft.days} label="Days" />
        <Colon />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <Colon />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <Colon />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="flex min-w-[95px] flex-col items-center rounded-xl bg-[#f6f6f6] px-5 py-4">
      <div className="text-[42px] font-extrabold leading-none text-black">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 text-sm font-medium text-black/50">
        {label}
      </div>
    </div>
  );
}

function Colon() {
  return (
    <div className="flex items-center justify-center text-[36px] font-semibold text-black/60">
      :
    </div>
  );
}
