import Section from "./Section";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/50"
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-3 text-slate-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm font-medium text-sky-300 hover:underline"
              >
                {p.linkLabel ?? "View project"} →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}