import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300">
          Portfolio
        </p>
        <h1 className="text-5xl font-bold sm:text-7xl">Lumbini</h1>
        <p className="mt-4 max-w-xl text-lg text-slate-300">
          GIS &amp; backend developer building real-time environmental data
          systems.
        </p>
      </div>
    </section>
  );
}