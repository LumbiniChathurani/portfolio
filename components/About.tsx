import Section from "./Section";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{about}</p>
    </Section>
  );
}