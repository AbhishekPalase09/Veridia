import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: 140, scale: 0.82 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.6, ease: [0.12, 0, 0.39, 1] },
  },
  hover: {
    y: -18,
    scale: 1.04,
    transition: { duration: 0.15, ease: "easeOut" },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 110, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.5, delay: 0.15, ease: [0.12, 0, 0.39, 1] },
  },
};

export default function WaitlistHero() {
  return (
    <div
      className="
        text-center
        max-w-[900px]
        mx-auto
        pt-32 sm:pt-32 md:pt-40
        px-5 sm:px-4
        overflow-hidden
      "
    >
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="
          font-heading font-semibold text-black
          text-[26px] leading-[34px]
          sm:text-[36px] sm:leading-[44px]
          md:text-5xl md:leading-tight
        "
      >
        Get early access and regular updates
      </motion.h1>

      <motion.p
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        className="
          mt-6 sm:mt-5 md:mt-6
          font-inter font-medium text-black/70
          text-[14px] leading-[22px]
          sm:text-[16px] sm:leading-[24px]
          md:text-[18px] md:leading-[27px]
        "
      >
        Be amongst the first to experience Veridia, give feedback and see us grow.
        <br className="hidden sm:block" />
        Sign up to be notified when we launch!
      </motion.p>
    </div>
  );
}
