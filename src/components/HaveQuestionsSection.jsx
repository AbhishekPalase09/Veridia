export default function HaveQuestionsSection() {
  return (
    <section className="w-full bg-[#f7f5f2] py-12">
      <div
        className="
          mx-auto
          max-w-7xl
          h-[126px]
          w-full
          rounded-2xl
          bg-white
          px-10
          flex
          items-center
          justify-between
          shadow-sm
        "
      >
        {/* Left Content */}
        <div>
          <h3 className="text-lg font-semibold text-black">
            Have Questions? We&apos;re Here to Help!
          </h3>
          <p className="mt-1 text-sm text-black/60">
            Reach out to our support team for any queries or assistance.
          </p>
        </div>

        {/* Button */}
        <button
          className="
            rounded-xl
            bg-black
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition
            hover:bg-black/90
          "
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
