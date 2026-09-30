import Section from "./Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="mb-3 text-sm uppercase tracking-widest text-sky-300">
              {s.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-slate-200"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}