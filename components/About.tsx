import Section from "./Section";
import { about } from "@/data/content";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" title="About">

<Image
  src="/profile.jpeg"
  alt="Lumbini Chathurani"
  width={250}
  height={250}
  className="rounded-full object-cover"
/>

      <p className="max-w-3xl text-lg leading-relaxed text-slate-300 mt-4">{about}</p>
    </Section>
  );
}