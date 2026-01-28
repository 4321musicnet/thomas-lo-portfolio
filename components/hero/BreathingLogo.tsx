"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BreathingLogo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.9, 1, 0.9],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-12"
    >
      <Image
        src="/4321-logo-white.svg"
        alt="432 1 Music Logo"
        fill
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
