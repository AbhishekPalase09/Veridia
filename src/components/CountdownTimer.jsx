import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-04-12T00:00:00+05:30");

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
    <div
      className="
        mt-14 sm:mt-10 md:mt-12
        mb-10 sm:mb-0
        flex justify-center
        px-4
      "
    >
      <div
        className="
          flex items-center gap-2 sm:gap-3
          rounded-xl bg-white
          px-3 py-3
          sm:px-5 sm:py-4
          md:px-6 md:py-5
          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        "
      >
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
    <div
      className="
        flex flex-col items-center
        min-w-[60px] sm:min-w-[80px] md:min-w-[95px]
        rounded-xl bg-[#f6f6f6]
        px-3 py-2
        sm:px-4 sm:py-3
        md:px-5 md:py-4
      "
    >
      <div
        className="
          text-[22px] sm:text-[32px] md:text-[42px]
          font-extrabold
          leading-none
          text-black
        "
      >
        {String(value).padStart(2, "0")}
      </div>

      <div
        className="
          mt-1
          text-[10px] sm:text-xs
          font-medium
          text-black/50
        "
      >
        {label}
      </div>
    </div>
  );
}

function Colon() {
  return (
    <div
      className="
        text-[16px] sm:text-[26px] md:text-[36px]
        font-semibold
        text-black/60
      "
    >
      :
    </div>
  );
}
