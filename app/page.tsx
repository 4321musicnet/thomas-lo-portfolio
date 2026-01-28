import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import SelectedWorks from "@/components/sections/SelectedWorks";
import Awards from "@/components/sections/Awards";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <SelectedWorks />
      <Services />
      <Awards />
      <About />
      <Contact />
    </main>
  );
}
