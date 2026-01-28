"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AlternatingText() {
  const [index, setIndex] = useState(0);
  
  const phrases = [
    { text: "We make", highlight: "immersive art" },
    { text: "We make", highlight: "sound engineering" },
    { text: "We make", highlight: "concert curation" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 5000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold leading-[1.2] text-center tracking-tight overflow-visible">
      <span className="block text-white">{phrases[index].text}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent overflow-visible pb-2"
        >
          {phrases[index].highlight}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
