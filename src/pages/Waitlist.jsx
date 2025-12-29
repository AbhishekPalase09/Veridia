import Navbar from "../components/Navbar";
import WaitlistHero from "../components/WaitlistHero";
import CountdownTimer from "../components/CountdownTimer";
import WaitlistEmail from "../components/WaitlistEmail";
import FeaturesWithInfiniteStrip from "../components/FeaturesWithInfiniteStrip";
import FAQ from "../components/FAQ";
import HaveQuestionsSection from "../components/HaveQuestionsSection";
import FooterCTA from "../components/FooterCTA";
import FooterSection from "../components/FooterSection";

export default function Waitlist() {
  return (
    <div>
      {/* HERO + PAGE CONTENT */}
      <section className="relative min-h-screen overflow-hidden">
        
        {/* ✅ Background is now scoped */}
        <div className="hero-bg absolute inset-0 -z-10" />

        <Navbar />
        <WaitlistHero />
        <CountdownTimer />
        <WaitlistEmail />
        <FeaturesWithInfiniteStrip />
        <FAQ />
        <HaveQuestionsSection />
      </section>

      {/* ✅ Footer is clean, no background bleed */}
      <FooterSection />
    </div>
  );
}
