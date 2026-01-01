import Navbar from "../components/Navbar";
import ErrorSection from "../components/ErrorSection.jsx";
import FooterSection from "../components/FooterSection";

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-[#f7f5f2]">
      
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Privacy Policy Content ===== */}
      <ErrorSection />

      {/* ===== Footer ===== */}
      <FooterSection />
    </main>
  );
}
