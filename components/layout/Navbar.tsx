"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass rounded-full px-6 py-3 shadow-2xl">
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`
                  relative px-4 py-2 text-sm font-medium transition-all duration-300
                  rounded-full hover:bg-white/10
                  ${activeSection === link.href.substring(1) 
                    ? "text-white" 
                    : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
