import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Lumbini
      </footer>
    </main>
  );
}