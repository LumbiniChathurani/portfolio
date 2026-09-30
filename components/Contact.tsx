import Section from "./Section";
import { contact } from "@/data/content";

export default function Contact() {
  const link = "text-sky-300 hover:underline";
  return (
    <Section id="contact" title="Contact">
      <p className="mb-6 text-lg text-slate-300">
        Open to GIS, environmental data and backend roles. Let&apos;s talk.
      </p>
      <div className="flex flex-wrap gap-6">
        <a className={link} href={`mailto:${contact.email}`}>Email</a>
        <a className={link} href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className={link} href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className={link} href="/cv.pdf" target="_blank">Download CV</a>
      </div>
    </Section>
  );
}