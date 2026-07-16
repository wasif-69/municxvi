"use client";

import "@/Components/sponser/sponser.css";
import Image from "next/image";

import gravelling from "@/public/gravelling_-removebg-preview.png";



const Sponsors = () => {
  return (
    <section className="bg-[#061222] py-24 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-[#C9A227] text-xs uppercase tracking-[0.45em]">
          Sponsors & Partners
        </p>


        <div className="mx-auto mt-6 h-px w-24 bg-[#C9A227]" />
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-[#C9A227]/15 py-10">

  <div className="flex w-max animate-marquee">

    {Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="flex items-center shrink-0"
      >
        {/* Logo */}
        <div className="mx-12 flex h-20 w-48 items-center justify-center">
          <Image
            src={gravelling}
            alt="Gravelling Sponsor"
            className="max-h-24 w-auto object-contain

              opacity-90
              transition-all
              duration-300
              hover:opacity-100
              hover:scale-105
            "
          />
        </div>

        {/* Separator */}
        <span className="text-[#C9A227] text-2xl md:text-3xl">
          ✦
        </span>

        {/* Text */}
        <span
          className="
            mx-12
            whitespace-nowrap
            text-lg
            md:text-3xl
            uppercase
            tracking-[0.35em]
            text-white
          "
        >
          Other Sponsors Revealing Soon
        </span>

        {/* Separator */}
        <span className="text-[#C9A227] text-2xl md:text-3xl">
          ✦
        </span>
      </div>
    ))}

  </div>

</div>
    </section>
  );
};

export default Sponsors;