import Navbar from "../components/Navbar";
import WaitlistHero from "../components/WaitlistHero";
import CountdownTimer from "../components/CountdownTimer";
import WaitlistEmail from "../components/WaitlistEmail";
import FeaturesWithInfiniteStrip from "../components/FeaturesWithInfiniteStrip";
import FAQ from "../components/FAQ";
import FooterCTA from "../components/FooterCTA";
import FooterSection from "../components/FooterSection";

export default function Waitlist() {
  return (
    <div>
      {/* ===================== */}
      {/* TOP SECTION (WITH BG) */}
      {/* ===================== */}
      <section className="relative min-h-screen overflow-hidden pb-8 sm:pb-0">
        {/* Gradient / background ONLY for top */}
        <div className="hero-bg absolute inset-0 -z-10" />

        <Navbar />
        <WaitlistHero />
        <CountdownTimer />
        <WaitlistEmail />
        <FeaturesWithInfiniteStrip />
      </section>

      {/* ===================== */}
      {/* FAQ SECTION (NO BG) */}
      {/* ===================== */}
      <section className="relative bg-transparent">
        <FAQ />
        <FooterCTA />
      </section>

      {/* ===================== */}
      {/* FOOTER */}
      {/* ===================== */}
      <FooterSection />
    </div>
  );
}
