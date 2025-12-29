import { motion } from "framer-motion";

export default function WaitlistEmail() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1.3,
        delay: 0.25,
        ease: [0.12, 0, 0.39, 1],
      }}
      className="mt-12 mb-24 flex justify-center"
    >
      <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-4 py-3">
        {/* EMAIL INPUT */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-72 px-4 py-3 text-[16px] text-black placeholder:text-black/50 placeholder:font-medium outline-none rounded-xl"
        />

        {/* SUBMIT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          className="
            bg-black
            text-white
            px-6
            py-3
            rounded-xl
            text-[15px]
            font-medium
            shadow-md
          "
        >
          Submit
        </motion.button>
      </div>
    </motion.div>
  );
}
