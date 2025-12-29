export default function PrivacyPolicySection() {
  return (
    <section className="w-full bg-[#f7f5f2] flex justify-center" font-inter> 
      <div className="w-full max-w-4xl px-6 pt-52 pb-32">

        {/* ===== TITLE ===== */}
        <h4 className="text-[52px] leading-[62px] font-semibold text-black font-switzer">
          Our Privacy Policy
        </h4>

        <p className="mt-6 text-[18px] leading-[27px] text-[#3D3D3D] max-w-3xl font-medium">
          Our Privacy Policy outlines how we collect, use, and protect your
          personal information. Your privacy and security are our priorities.
        </p>
          
        {/* Last updated */}
        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border border-[#DED8D3] px-5 py-2 text-[16px] text-black leading-[24px]">
          ⟳ Last Updated on August, 24, 2024
        </div>

        <Divider />

        {/* ===== INFORMATION WE COLLECT ===== */}
        <h4 className="text-[32px] leading-[45px] font-semibold text-black">
          Information We Collect
        </h4>

        <p className="mt-6 text-[18px] leading-[27px] font-medium text-[#3D3D3D]">
          We may collect personal information from you when you visit our
          website, register for an account, or interact with our services.
          This information may include your name, email address, contact
          details, and any other information you voluntarily provide to us.
        </p>

        <Divider />

        {/* ===== HOW WE USE ===== */}
        <h4 className="text-[32px] leading-[45px] font-semibold text-black">
          How We Use Your Information
        </h4>

        <p className="mt-6 text-[18px] leading-[27px] text-[#3D3D3D] font-medium">
          We may use the information we collect from you for various purposes,
          including:
        </p>

        <ol className="mt-6 space-y-1 text-[18px] leading-[27px] text-[#3D3D3D] list-decimal pl-6 font-medium">
          <li>Providing and improving our products and services</li>
          <li>Personalizing your experience on our website</li>
          <li>
            Communicating with you about your account and any updates or
            promotions
          </li>
          <li>
            Analyzing website traffic and user behavior to enhance our
            offerings
          </li>
        </ol>

        <Divider />

        {/* ===== DATA SECURITY ===== */}
        <h4 className="text-[32px] leading-[45px] font-semibold text-black">
          Data Security
        </h4>

        <p className="mt-6 text-[18px] leading-[27px] text-[#3D3D3D] font-medium">
          We take data security seriously and employ industry-standard measures
          to protect your personal information from unauthorized access,
          disclosure, alteration, or destruction. However, no method of
          transmission over the internet or electronic storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <Divider />

        {/* ===== THIRD PARTY ===== */}
        <h4 className="text-[32px] leading-[45px] font-semibold text-black">
          Third-Party Disclosure
        </h4>

        <p className="mt-6 text-[18px] leading-[27px] text-[#3D3D3D] font-medium">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except as required by law or
          as necessary to provide our services. We may share your information
          with trusted third-party service providers who assist us in operating
          our website, conducting our business, or servicing you, provided that
          they agree to keep your information confidential.
        </p>

        <Divider />

        {/* ===== COOKIES ===== */}
        <h4 className="text-[32px] leading-[45px] font-semibold text-black">
          Cookies
        </h4>

        <p className="mt-6 text-[18px] leading-[27px] text-[#3D3D3D] font-medium">
          Our website may use cookies to enhance your browsing experience and
          collect information about how you interact with our site. You can
          adjust your browser settings to refuse cookies or alert you when
          cookies are being sent, but some features of the site may not function
          properly without cookies.
        </p>

        <Divider />

        {/* ===== CHANGES ===== */}
        <h4 className="text-[32px] leading-[45px] font-semibold text-black">
          Changes to this Privacy Policy
        </h4>

        <p className="mt-6 text-[18px] leading-[27px] text-[#3D3D3D] font-medium">
          We reserve the right to update or change this Privacy Policy at any
          time. Any changes will be posted on this page, and the effective date
          will be updated accordingly. We encourage you to review this Privacy
          Policy periodically for any updates.
        </p>

        <Divider />

        {/* ===== CONTACT ===== */}
        <h4 className="text-[32px] leading-[45px] font-semibold text-black">
          Contact Us
        </h4>

        <p className="mt-6 text-[18px] leading-[27px] text-[#3D3D3D] font-medium">
          If you have any questions or concerns about our Privacy Policy or the
          handling of your personal information, please contact us at{" "}
          <span className="font-medium text-black">contact@veridia.website</span>.
        </p>
      </div>
    </section>
  );
}

function Divider() {
  return <div className="my-12 w-full border-t border-black/10" />;
}
