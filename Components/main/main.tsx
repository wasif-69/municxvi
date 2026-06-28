import Image from "next/image";
import logo from "@/public/logo-removebg-preview.png"

const Main = () => {
  return (
    <main className="min-h-screen bg-[#061222] text-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-44 pb-24">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="max-w-4xl">
            <p className="text-[#C9A227] uppercase tracking-[0.4em] text-xs">
              Model United Nations Conference
            </p>

            <h1 className="mt-10 text-7xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.06em] leading-none">
              MUNIC
              <span className="block text-[#C9A227] mt-2">XVI</span>
              <span className="block mt-2 text-sm md:text-base font-semibold tracking-[0.35em] uppercase text-[#C9A227]/80">
  The Sixteenth Edition
</span>
            </h1>

            <p className="mt-12 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              A platform for future diplomats, leaders, and changemakers
              to engage in meaningful debate, negotiate global solutions,
              and experience international diplomacy firsthand.
            </p>

            {/* CTA */}
            <div className="mt-14 flex flex-wrap items-center gap-5">
              <button
                className="
                  px-8 py-3.5
                  rounded-full
                  bg-[#C9A227]
                  text-[#061222]
                  font-medium
                  hover:opacity-90
                  transition
                "
              >
                Register Now
              </button>

              <button
                className="
                  px-8 py-3.5
                  rounded-full
                  border border-white/10
                  text-white
                  hover:border-[#C9A227]
                  transition
                "
              >
                View Committees
              </button>
            </div>
          </div>

          {/* RIGHT LOGO */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={logo}
                alt="MUNIC XVI Logo"
                width={420}
                height={420}
                className="
                  object-contain
                  opacity-90
                  w-70
                  md:w-85
                  lg:w-105
                "
                priority
              />
            </div>
          </div>

        </div>

        {/* MINIMAL FOOTER DETAIL */}
        <div className="mt-32 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-10 text-sm uppercase tracking-[0.25em] text-slate-500">
            <span>
              <span className="text-[#C9A227]">XVI</span> Edition
            </span>
            

            <span>2026</span>

            <span>Islamabad</span>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Main;