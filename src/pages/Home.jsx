import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import Features from "../components/Features";
import WaveGoodbye from "../components/WaveGoodbye";
import AboutCard from "../components/AboutCard";
import Comparison from "../components/Comparison";
import FAQ from "../components/FAQ";
import ProductOverview from "../components/ProductOverview";
import ContactForm from "../components/ContactForm";
import FooterCTA from "../components/FooterCTA";
import ScrollTopButton from "../components/ScrollTopButton";
import FooterSection from "../components/FooterSection";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Handle scroll when navigated from other pages
  useEffect(() => {
    const scrollToId = location.state?.scrollTo;

    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);
      }

      // clear state after scrolling
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-veridiaBg">
      <Navbar />

      {/* Hero background */}
      <div className="hero-bg" />

      <main className="relative max-w-[1300px] mx-auto px-6 py-8">
        
        {/* HOME */}
        <section id="home" className="scroll-mt-[120px]">
          <Hero />
        </section>

        <Showcase />

        {/* FEATURES */}
        <section id="features" className="scroll-mt-[120px]">
          <Features />
        </section>

        <WaveGoodbye />

        {/* ABOUT */}
        <section id="about" className="scroll-mt-[120px]">
          <AboutCard />
        </section>

        {/* COMPARISON */}
        <section id="comparison" className="scroll-mt-[120px]">
          <Comparison />
        </section>

        <ProductOverview />

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-[120px]">
          <ContactForm />
        </section>

        <FAQ />
        <FooterCTA />
        <ScrollTopButton />
        
      </main>
      <FooterSection />
    </div>
  );
}
