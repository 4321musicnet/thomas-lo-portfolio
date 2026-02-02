"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const works = [
  {
    id: 1,
    title: "Passage of Abundance",
    role: "Producer/Co-Curator",
    type: "Immersive Art Installation",
    year: "2025",
    venue: "East Kowloon Cultural Centre",
    featured: false,
    size: 'full' as const,
    image: "/works/passage-of-abundance.jpg",
    description: "Passage of Abundance is an immersive digital oasis by multi-media artist Desmond Leung and producer Thomas Lo that transforms urban space into a living landscape. Using a vision-based motion detection system, the installation senses participant movement to dynamically generate nature-inspired digital murals in real-time. These abstract ink landscapes, powered by visual programming, evolve alongside shifting daylight and a cinematic score by composer Yusuke Hatano.",
    tags: ["Immersive", "Installation", "Interactive"],
  },
  {
    id: 2,
    title: "CelLink Odyssey",
    role: "Curator",
    type: "Immersive Art Concert",
    year: "2024",
    featured: false,
    size: 'full' as const,
    image: "/works/cellink-odyssey.jpg",
    description: "\"CelLink Odyssey by Visible Music\" represents \"CelLink\", highlighting the deep connection between the celestial and the cellular. The movements of the universe are connected to the insights within our bodies. As the final chapter of the project \"Visible Music ‧ Touchable Notes\", \"CelLink Odyssey\" unites science, imagination, and spirit, embarking on a captivating sound journey that traverses both the inner and outer universes.",
    tags: ["Concert", "Spatial Audio", "Curation"],
  },
  {
    id: 3,
    title: "Evolution(s)",
    role: "Curator",
    type: "Immersive Art Series",
    year: "2023-2025",
    featured: false,
    size: 'full' as const,
    image: "/works/visible-music-v3.jpg",
    description: "Visible Music · Touchable Notes is an immersive concert experience. This multi-artform performance merges fine art, virtual production, and sound-interactive technology to explore the global transition from chaos and the rise of AI to the healing power of nature. By transforming rhythms into \"touchable\" visual notes, the project invites the audience into a sensory sanctuary designed for reflection, humanity, and inner peace amidst a rapidly evolving world.",
    tags: ["Immersive Sound", "Technology", "Healing"],
  },
  {
    id: 4,
    title: "Ondées",
    role: "Tech Director",
    type: "Immersive Art Concerts",
    year: "2024",
    featured: false,
    size: 'half' as const,
    image: "/works/ondees.jpg",
    description: "Ondées draws inspiration from the gentle rains of spring, utilizing immersive audiovisuals to capture the infinitely shifting forms of nature and explore the power of tranquility. Award-winning jazz musician Alan Kwan collaborates with French media artist Sébastien Labrunie to weave a journey of light and sound, capturing the rhythmic movement of rain—from delicate whispers to torrential downpours.",
    tags: ["Jazz", "Audiovisual", "Nature"],
  },
  {
    id: 5,
    title: "Rebuild",
    role: "Curator",
    type: "Immersive Art Concert",
    year: "2024",
    featured: false,
    size: 'half' as const,
    image: "/works/rebuild.png",
    description: "Throughout the entire concert, whether it's the musicians, artists, or audience, everyone becomes part of a dynamic and improvisational performance, merging with the realness of nature, jazz grooves, and interactive art. This immersive artistic musical experience not only rebuilds our connection with nature and human interaction but also nourishes our souls.",
    tags: ["Generative Music", "Projection", "Plant"],
  },
  {
    id: 6,
    title: "Chin Up",
    role: "Recording Engineer",
    type: "Album by Eason Chan",
    year: "2022-2023",
    featured: false,
    size: 'half' as const,
    image: "/works/chin-up.png",
    description: "Produced by Eason Chan himself after a five-year hiatus, CHIN UP! serves as the thematic resolution to his \"FEAR AND DREAMS\" world tour. This eight-track album features a significant collaboration with singer-songwriter Terence Lam, who composed the entire record, with arrangements by Lam and award-winning producer Ronghao Li.",
    tags: ["Pop", "Recording", "Eason Chan"],
  },
  {
    id: 7,
    title: "Regression",
    role: "Mix Engineer",
    type: "Single by Terence Lam",
    year: "2022-2023",
    featured: false,
    size: 'half' as const,
    image: "/works/regression.jpg",
    description: "Reuniting the golden songwriting duo Christopher Chak and Lin Xi, this single sees Terence Lam focusing exclusively on arrangement and production to serve the composition. To honor the inherent richness of the melody, Lam employs a minimalist arrangement that strips away complexity, allowing the emotional structure to shine without embellishment.",
    tags: ["Mixing", "Production", "Terence Lam"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
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
          <h2 className="mb-4">Selected Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              className={`group cursor-pointer ${
                work.size === 'full' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={work.size === 'full' ? '100vw' : '50vw'}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm">
                      {work.year}
                    </span>
                  </div>
                  
                  {/* Featured Badge */}
                  {work.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-400">
                    <motion.div
                      initial={false}
                      className="transform transition-transform duration-500 group-hover:-translate-y-2"
                    >
                      <h3 className="mb-2 text-white !text-lg md:!text-2xl">
                        {work.title}
                      </h3>
                      <p className="text-purple-400 font-medium mb-1 !text-sm md:!text-base">{work.role}</p>
                      <p className="text-gray-300 !text-xs md:!text-sm">{work.type}</p>
                      {work.venue && (
                        <p className="text-gray-400 mt-2 !text-xs md:!text-sm">{work.venue}</p>
                      )}
                    </motion.div>
                  </div>
                </div>
                
                {/* Description Section */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {work.description}
                  </p>
                  
                  {/* Tags */}
                  {work.tags && work.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
