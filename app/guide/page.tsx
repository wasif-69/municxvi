"use client";

import { motion } from "framer-motion";

const Guide = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#061222] px-6">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/10 blur-[180px]" />
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#C9A227]/5 blur-[140px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <h1 className="text-4xl font-light uppercase tracking-[0.18em] text-white sm:text-5xl md:text-6xl lg:text-8xl lg:tracking-[0.35em]">
          Coming <span className="text-[#C9A227]">Soon</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg"
        >
          The official study guides will be released 3 days before the event. Be sure to check back then to 
          access all the resources you&apos;ll need to prepare.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 h-px bg-linear-to-r from-transparent via-[#C9A227] to-transparent"
        />
      </motion.div>
    </main>
  );
};

export default Guide;