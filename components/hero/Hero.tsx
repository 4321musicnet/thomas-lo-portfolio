"use client";

import AlternatingText from "./AlternatingText";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent opacity-50" />
      
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
