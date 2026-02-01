"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">About Thomas Lo</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Profile</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Thomas Lo is the Director of <span className="text-white font-semibold">432 1 Music</span> and 
                a Recording Engineer at <span className="text-white font-semibold">Q2 Sound Studio</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                He studied under the legendary recording engineer <span className="text-white font-semibold">Al Schmitt</span> at 
                Capitol Studios in Los Angeles, one of the most prestigious recording facilities in the world.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With hundreds of pop songs mixed and recorded for top artists like 
                Eason Chan, Karen Mok, Terence Lam, and Chet Lam, Thomas brings 
                unparalleled expertise to every project.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Teaching & Education</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>Lecturer in Creative Coding at Hong Kong Academy for Performing Arts (HKAPA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>Lecturer in Popular Music Production at Hong Kong College of Technology (HKCT)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>Tech Consultant for White Box Experimental Space at HKBU</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-sm text-gray-300 font-medium">Multitrack Mixing</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-sm text-gray-300 font-medium">Recording Engineering</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-sm text-gray-300 font-medium">Immersive Art</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-sm text-gray-300 font-medium">Concert Curation</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-sm text-gray-300 font-medium">Spatial Audio</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-sm text-gray-300 font-medium">Audio Consultancy</p>
                </div>
              </div>
            </div>

            {/* <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Notable Collaborations</h3>
              <div className="flex flex-wrap gap-2">
                {["Eason Chan", "Karen Mok", "Terence Lam", "Chet Lam", "Hong Kong Philharmonic Orchestra"].map((artist) => (
                  <span
                    key={artist}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 text-gray-300"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div> */}

            <div className="glass rounded-2xl p-8 bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/30">
              <h3 className="text-xl font-bold mb-3">432 1 Music</h3>
              <p className="text-gray-300 leading-relaxed">
                432 1 fuses the natural resonance of frequency with the power of singular, original vision. Thomas Lo bridges these realms, blending legendary analog precision with immersive digital art to create authentic, 
                deeply human experiences that cut through the noise. From the intimacy of the recording studio to the scale of public installation, we orchestrate moments where invisible soundwaves become tangible, 
                living environments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
