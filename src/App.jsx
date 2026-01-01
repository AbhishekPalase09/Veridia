import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Waitlist from "./pages/Waitlist";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
