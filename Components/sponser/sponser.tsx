// import LogoLoop from "./loop";
// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

// const techLogos = [
//   {
//     node: (
//       <SiReact className="text-white/60 text-7xl transition-all duration-300 hover:text-white hover:scale-110" />
//     ),
//     title: "React",
//     href: "https://react.dev",
//   },
//   {
//     node: (
//       <SiNextdotjs className="text-white/60 text-7xl transition-all duration-300 hover:text-white hover:scale-110" />
//     ),
//     title: "Next.js",
//     href: "https://nextjs.org",
//   },
//   {
//     node: (
//       <SiTypescript className="text-white/60 text-7xl transition-all duration-300 hover:text-white hover:scale-110" />
//     ),
//     title: "TypeScript",
//     href: "https://www.typescriptlang.org",
//   },
//   {
//     node: (
//       <SiTailwindcss className="text-white/60 text-7xl transition-all duration-300 hover:text-white hover:scale-110" />
//     ),
//     title: "Tailwind CSS",
//     href: "https://tailwindcss.com",
//   },
// ];

// const Sponsor = () => {
//   return (
//     <section id="sponser" className="bg-[#061222] py-24">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <div className="mb-12 text-center">
//           <p className="text-[#C9A227] text-xs uppercase tracking-[0.4em]">
//             Sponsors & Partners
//           </p>
//         </div>

//         <div className="border-y border-white/10 py-10">
//           <LogoLoop
//             logos={techLogos}
//             speed={35}
//             direction="left"
//             logoHeight={42}
//             gap={90}
//             hoverSpeed={0}
//             scaleOnHover={false}
//             fadeOut
//             fadeOutColor="#061222"
//             ariaLabel="Sponsors and Partners"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sponsor;




"use client";
import "@/Components/sponser/sponser.css"
const Sponsors = () => {
  const items = Array(8).fill("Sponsors Revealing Soon");

  return (
    <section className="bg-[#061222] py-24 overflow-hidden">

      {/* Heading */}
      <div className="mb-12 text-center">
          <p className="text-[#C9A227] text-xs uppercase tracking-[0.4em]">
            Sponsors & Partners
          </p>
        </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-[#C9A227]/15 py-8">

        {/* Left Fade */}
        {/* <div className="absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-[#061222] to-transparent" /> */}

        {/* Right Fade */}
        {/* <div className="absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-[#061222] to-transparent" /> */}

        <div className="flex w-max animate-marquee">

          {/* First Set */}
          {items.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center shrink-0"
            >
              <span className="mx-12 text-2xl md:text-4xl uppercase tracking-[0.35em] text-white whitespace-nowrap">
                {item}
              </span>

              <span className="text-[#C9A227] text-3xl">✦</span>
            </div>
          ))}

          {/* Duplicate Set */}
          {items.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center shrink-0"
            >
              <span className="mx-12 text-2xl md:text-4xl uppercase tracking-[0.35em] text-white whitespace-nowrap">
                {item}
              </span>

              <span className="text-[#C9A227] text-3xl">✦</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Sponsors;