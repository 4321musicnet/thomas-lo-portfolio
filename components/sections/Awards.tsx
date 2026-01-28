"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  {
    id: 1,
    title: "Best Recording Engineer",
    organization: "Chinese Music Awards",
    year: "2013",
    status: "winner",
    edition: "13th",
  },
  {
    id: 2,
    title: "Best Vocal Recording Album",
    organization: "Golden Melody Awards (Taiwan)",
    year: "2015",
    status: "nominee",
    edition: "26th",
  },
  {
    id: 3,
    title: "Best Recording Engineer",
    organization: "Chinese Music Awards",
    year: "Multiple Years",
    status: "nominee",
    edition: "4 Nominations Total",
  },
];

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-400">
            Honored for excellence in audio engineering
          </p>
        </motion.div>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass rounded-2xl p-8 ${
                award.status === "winner"
                  ? "border-2 border-yellow-500/30 bg-gradient-to-r from-yellow-900/10 to-transparent"
                  : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-sm px-3 py-1 rounded-full font-medium ${
                        award.status === "winner"
                          ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/40"
                          : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      }`}
                    >
                      {award.status === "winner" ? "WINNER" : "NOMINEE"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
                  <p className="text-gray-400">
                    {award.organization} ({award.edition})
                  </p>
                </div>
                <div className="text-3xl font-bold text-gray-500">
                  {award.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-8 text-center"
        >
          <p className="text-lg text-gray-400 mb-4">Additional Credentials</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">
              d&b audiotechnik Soundscape Production Engineer
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">
              Studio Manager at Q2 Sound Studios
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
