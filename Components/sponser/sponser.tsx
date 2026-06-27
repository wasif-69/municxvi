import LogoLoop from "./loop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const techLogos = [
  {
    node: (
      <SiReact className="text-white/60 text-7xl transition-all duration-300 hover:text-white hover:scale-110" />
    ),
    title: "React",
    href: "https://react.dev",
  },
  {
    node: (
      <SiNextdotjs className="text-white/60 text-7xl transition-all duration-300 hover:text-white hover:scale-110" />
    ),
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: (
      <SiTypescript className="text-white/60 text-7xl transition-all duration-300 hover:text-white hover:scale-110" />
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: (
      <SiTailwindcss className="text-white/60 text-7xl transition-all duration-300 hover:text-white hover:scale-110" />
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const Sponsor = () => {
  return (
    <section className="bg-[#061222] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 text-center">
          <p className="text-[#C9A227] text-xs uppercase tracking-[0.4em]">
            Sponsors & Partners
          </p>
        </div>

        <div className="border-y border-white/10 py-10">
          <LogoLoop
            logos={techLogos}
            speed={35}
            direction="left"
            logoHeight={42}
            gap={90}
            hoverSpeed={0}
            scaleOnHover={false}
            fadeOut
            fadeOutColor="#061222"
            ariaLabel="Sponsors and Partners"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;