export default function Navbar() {
    const links = [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#contact", label: "Contact" },
    ];
  
    return (
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold text-white">
            Lumbini
          </a>
          <div className="flex gap-5 text-sm text-slate-300">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-sky-300">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }