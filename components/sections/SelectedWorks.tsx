"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const works = [
  {
    id: 1,
    title: "Passage of Abundance",
    role: "Producer/Co-Curator",
    type: "Immersive Art Installation",
    year: "2024",
    venue: "East Kowloon Cultural Centre",
    featured: true,
  },
  {
    id: 2,
    title: "CelLink Odyssey",
    role: "Curator",
    type: "Immersive Art Concert",
    year: "2024",
    venue: "",
    featured: true,
  },
  {
    id: 3,
    title: "Ondées & Saan Yaam",
    role: "Tech Director",
    type: "Immersive Art Concerts",
    year: "2024",
    venue: "",
    featured: false,
  },
  {
    id: 4,
    title: "Visible Music · Touchable Notes",
    role: "Curator",
    type: "Immersive Art Series",
    year: "2023-2025",
    venue: "",
    featured: true,
  },
  {
    id: 5,
    title: "Chin Up",
    role: "Recording Engineer",
    type: "Album by Eason Chan",
    year: "2022-2023",
    venue: "",
    featured: false,
  },
  {
    id: 6,
    title: "Regression",
    role: "Mix Engineer",
    type: "Album by Terence Lam",
    year: "2022-2023",
    venue: "",
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  }),
};

export default function SelectedWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Selected Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pioneering projects in sound engineering and immersive art
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className={`glass rounded-2xl p-8 group cursor-pointer hover:bg-white/10 transition-colors ${
                work.featured ? "md:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {work.year}
                </span>
                {work.featured && (
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                {work.title}
              </h3>
              
              <p className="text-purple-400 font-medium mb-2">{work.role}</p>
              <p className="text-gray-400 mb-2">{work.type}</p>
              
              {work.venue && (
                <p className="text-sm text-gray-500 mt-4">{work.venue}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
