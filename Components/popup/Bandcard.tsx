"use client";
import Image from "next/image";
import { Infinity } from "lucide-react";
import { X } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Link from "next/link";

gsap.registerPlugin(MotionPathPlugin);

import band from "@/public/gaftaar.png"; // Replace later



const BandCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const shineRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const card = cardRef.current;
        const shine = shineRef.current;

        if (!card || !shine) return;

        const tl = gsap.timeline({
            defaults: {
                ease: "power4.out",
            },
        });

        tl.set(card, {
            x: -1400,
            y: 700,
            scale: 0.08,
            rotation: -1080,
            rotationY: 900,
            rotationX: -80,
            filter: "blur(20px)",
            opacity: 0,
            transformPerspective: 1200,
            transformOrigin: "center center",
        });

        // Throw animation
        tl.to(card, {
            duration: 1.7,
            motionPath: {
                path: [
                    { x: -1400, y: 700 },
                    { x: -900, y: -180 },
                    { x: -250, y: -80 },
                    { x: 0, y: 0 },
                ],
                curviness: 1.5,
            },
            scale: 1,
            rotation: 0,
            rotationY: 0,
            rotationX: 0,
            opacity: 1,
            filter: "blur(0px)",
        });

        // Bounce
        tl.to(
            card,
            {
                y: -20,
                duration: 0.15,
            },
            "-=0.15"
        );

        tl.to(card, {
            y: 0,
            duration: 0.25,
            ease: "bounce.out",
        });

        // Shine
        tl.fromTo(
            shine,
            {
                x: "-120%",
                opacity: 0,
            },
            {
                x: "160%",
                opacity: 0.6,
                duration: 0.9,
                ease: "power2.out",
            }
        );
    }, []);
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#061222] px-6">

            {/* Background Glow */}
            <div className="absolute h-125 w-125 rounded-full bg-[#C9A227]/10 blur-[180px]" />

<Link
prefetch={true}
href="/home"
aria-label="Go to Home"
className="
  absolute
  top-6
  right-6
  z-50

  flex
  h-11
  w-11
  items-center
  justify-center

  rounded-full
  border
  border-[#C9A227]/20

  bg-white/5
  backdrop-blur-md

  text-white

  transition-all
  duration-300

  hover:border-[#C9A227]
  hover:bg-[#C9A227]
  hover:text-[#061222]
  hover:rotate-90
  hover:scale-110
"
>
<X size={20} strokeWidth={2.5} />
</Link>

            <div

                ref={cardRef}

                className="
          group
          relative
          w-85
          sm:w-95
          rounded-[32px]
          border
          border-[#C9A227]/30
          bg-linear-to-b
          from-[#0E1B30]
          to-[#061222]
          p-5
          shadow-[0_0_70px_rgba(201,162,39,0.15)]
        "
                style={{
                    transformStyle: "preserve-3d",
                }}
            >

                <div
                    ref={shineRef}
                    className="
    absolute
    inset-y-0
    -left-40
    w-24
    rotate-12
    bg-linear-to-r
    from-transparent
    via-white/50
    to-transparent
    blur-lg
    pointer-events-none
"
                />
                {/* Animated Glow */}
                <div className="absolute inset-0 rounded-[32px] bg-[#C9A227]/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                {/* Holographic Shine */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            rounded-[32px]
            bg-linear-to-br
            from-white/10
            via-transparent
            to-[#C9A227]/10
            opacity-50
          "
                />

                {/* Header */}
                <div className="relative flex items-start justify-between">

                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#C9A227]">
                            Live Performance
                        </p>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                            guftaar
                        </h2>

                        <p className="mt-1 text-sm uppercase tracking-[0.25em] text-slate-400">
                            Band
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227]">
                            HP
                        </p>

                        <div className="mt-1 flex items-center justify-end gap-1 text-[#C9A227]">
                            <Infinity size={18} />
                            <span className="font-bold">Infinity</span>
                        </div>
                    </div>

                </div>

                {/* Image */}
                <div className="relative mt-10 flex justify-center">

                    {/* Glow */}
                    <div className="absolute h-52 w-52 rounded-full bg-[#C9A227]/15 blur-[80px]" />

                    <Image
                        src={band}
                        alt="Guftaar Band"
                        className="
              relative
              z-10
              h-65
              scale-130
              w-auto
              object-contain
              drop-shadow-[0_0_40px_rgba(201,162,39,0.35)]
              transition
              duration-500
              group-hover:scale-105
              
            "
                        priority

                    />

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-[#C9A227]/20 pt-5">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                                Event
                            </p>

                            <p className="mt-1 text-lg font-semibold text-white">
                                MUNIC XVI
                            </p>
                        </div>

                        <div className="rounded-full border border-[#C9A227]/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#C9A227]">
                            Exclusive
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BandCard;