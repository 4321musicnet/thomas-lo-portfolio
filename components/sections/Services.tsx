"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Immersive Art Concert Curation",
    description: "Creating unforgettable visual-audio experiences that transport audiences into new dimensions of artistic expression.",
    tags: ["Curation", "Immersive", "Live"],
    image: "/services/immersive-art.jpg",
  },
  {
    id: 2,
    title: "Immersive Design & Consultancy",
    description: "Design consultant for HKBU’s White Box Experimental Space. Currently lecturing in Creative Coding at HKAPA, providing expert technical guidance for immersive projection systems and innovative institutional audio infrastructure.",
    tags: ["Consulting", "Technical", "Education"],
    image: "/services/immersive-sound.jpg",
  },
  {
    id: 3,
    title: "Multitrack Music Recording and Mixing",
    description: "From classical and jazz nuances to high-impact pop, I provide remote precision engineering and multitrack mixing. My seamless online workflow delivers professional, industry-standard productions while preserving your unique artistic intent.",
    tags: ["Remote", "Recording", "Mixing"],
    image: "/services/recording.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive audio solutions from studio to stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/10 transition-colors"
            >
              {/* Service Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              {/* Service Content */}
              <div className="p-8">
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
