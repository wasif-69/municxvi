"use client";
import Link from "next/link";
import { motion } from "framer-motion";
const seniorCommittees = [
  {
    title: "UNSC",
    subtitle: "Dual Edition",
    slug: "unsc",
  },
  {
    title: "DISEC",
    slug: "disec",
  },
  {
    title: "UNCSW",
    slug: "uncsw",
  },
  {
    title: "UNOOSA",
    slug: "unoosa",
  },
  {
    title: "Interpol",
    subtitle: "Crisis",
    slug: "interpol",
  },
  {
    title: "ECOSOC",
    slug: "ecosoc",
  },
  {
    title: "PNA",
    slug: "pna",
  },
  {
    title: "UNHRC",
    slug: "unhrc",
  },
  {
    title: "Marvel",
    subtitle: "Doom Protocol",
    slug: "marvel",
  },
];

const juniorCommittees = [
  {
    title: "SOCHUM",
    slug: "sochum",
  },
  {
    title: "UNICEF",
    slug: "unicef",
  },
];


const Guide = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#061222] px-6">

  {/* Gold Glow */}
  <div className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#C9A227]/10 blur-[180px]" />

  <motion.h1
    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      relative z-10
      text-center
      text-3xl
      sm:text-5xl
      md:text-7xl
      lg:text-8xl
      font-light
      uppercase
      tracking-[0.18em]
      sm:tracking-[0.25em]
      md:tracking-[0.35em]
      lg:tracking-[0.45em]
      leading-tight
      text-white
    "
  >
    Coming <span className="text-[#C9A227]">Soon</span>
  </motion.h1>

</main>
  );
};

export default Guide;


// <main className="min-h-screen bg-[#061222] text-white">

//       <section className="mx-auto max-w-7xl px-6 py-32">

//         {/* Heading */}
//         <div className="text-center">

//           <p className="text-xs uppercase tracking-[0.45em] text-[#C9A227]">
//             Study Guides
//           </p>

//           <h1 className="mt-4 text-4xl md:text-6xl font-bold">
//             Committee Study Guides
//           </h1>

//           <div className="mx-auto mt-6 h-px w-24 bg-[#C9A227]" />

//           <p className="mx-auto mt-8 max-w-2xl text-slate-400 leading-8">
//             Access the official background guides for every committee.
//             Select your committee below to begin your preparation.
//           </p>

//         </div>

//         {/* Senior */}
//         <div className="mt-24">

//           <div className="mb-10 flex items-center gap-5">

//             <h2 className="text-3xl font-semibold text-white">
//               Senior Committees
//             </h2>

//             <div className="h-px flex-1 bg-[#C9A227]/20" />

//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//             {seniorCommittees.map((committee) => (
//               <Link
//                 key={committee.title}
//                 href={`/pdf/${committee.slug}`}
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-[#C9A227]/15
//                   bg-white/3
//                   p-8
//                   transition-all
//                   duration-300

//                   hover:-translate-y-1
//                   hover:border-[#C9A227]/40
//                   hover:bg-white/5
//                 "
//               >

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className="text-xs uppercase tracking-[0.3em] text-[#C9A227]">
//                       Study Guide
//                     </p>

//                     <h3 className="mt-4 text-2xl font-semibold text-white leading-tight">
//                       {committee.title}

//                       {committee.subtitle && (
//                         <span className="mt-2 block text-base font-normal text-[#C9A227]">
//                           {committee.subtitle}
//                         </span>
//                       )}
//                     </h3>

//                   </div>

//                   <span
//                     className="
//                       text-3xl
//                       text-[#C9A227]/60
//                       transition-transform
//                       duration-300
//                       group-hover:translate-x-1
//                     "
//                   >
//                     →
//                   </span>

//                 </div>

//               </Link>
//             ))}

//           </div>

//         </div>

//         {/* Junior */}
//         <div className="mt-28">

//           <div className="mb-10 flex items-center gap-5">

//             <h2 className="text-3xl font-semibold text-white">
//               Junior Committees
//             </h2>

//             <div className="h-px flex-1 bg-[#C9A227]/20" />

//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             {juniorCommittees.map((committee) => (
//               <Link
//                 key={committee.title}
//                 href={`/pdf/${committee.slug}`}
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-[#C9A227]/15
//                   bg-white/3
//                   p-8
//                   transition-all
//                   duration-300

//                   hover:-translate-y-1
//                   hover:border-[#C9A227]/40
//                   hover:bg-white/5
//                 "
//               >

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className="text-xs uppercase tracking-[0.3em] text-[#C9A227]">
//                       Study Guide
//                     </p>

//                     <h3 className="mt-4 text-2xl font-semibold text-white leading-tight">
//                       {committee.title}

                      
//                     </h3>

//                   </div>

//                   <span
//                     className="
//                       text-3xl
//                       text-[#C9A227]/60
//                       transition-transform
//                       duration-300
//                       group-hover:translate-x-1
//                     "
//                   >
//                     →
//                   </span>

//                 </div>

//               </Link>
//             ))}

//           </div>

//         </div>

//       </section>

//     </main>