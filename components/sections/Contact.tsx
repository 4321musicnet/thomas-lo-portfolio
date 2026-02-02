"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Let&apos;s Create Together</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Interested in working together on your next project? Get in touch to discuss 
            mixing, immersive art curation, or audio consultancy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-12"
        >
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <a
                  href="mailto:info@4321music.com"
                  className="font-medium hover:text-purple-400 transition-colors"
                >
                  thomas@4321music.net
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-gray-500 text-sm"
        >
          <p className="mb-4">© 2026 Thomas Lo | 432 1 Music. All rights reserved.</p>
          <p className="text-xs">
            Sound Engineer & Immersive Art Curator | Hong Kong
          </p>
        </motion.div>
      </div>
    </section>
  );
}
