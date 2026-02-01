"use client";

import Image from "next/image";
import AlternatingText from "./AlternatingText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero-background-v4.jpg"
          alt="Thomas Lo Studio Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Gradient overlay for depth and brand */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent z-[1]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <AlternatingText />
        
        <div className="mt-12 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          <p>432 1 Music</p>
          <p className="mt-2">Award-Winning Sound Engineer</p>
        </div>
      </div>
    </section>
  );
}
