import Navbar from "../components/Navbar";
import PrivacyPolicySection from "../components/PrivacyPolicySection";
import FooterSection from "../components/FooterSection";

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-[#f7f5f2]">
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Privacy Policy Content ===== */}
      <PrivacyPolicySection />

      {/* ===== Footer ===== */}
      <FooterSection />
    </main>
  );
}
