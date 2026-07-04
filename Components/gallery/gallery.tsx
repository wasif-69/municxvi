// Components/gallery/gallery.tsx
import fs from "fs";
import path from "path";
import CircularGallery from "./CircularGallery";

const Gallery = () => {
  const galleryPath = path.join(process.cwd(), "public", "Gallery");

  const items = fs
    .readdirSync(galleryPath)
    .filter((file) => /\.(jpg|jpeg|png|webp\HEIC|CR2\JPG)$/i.test(file))
    .map((file) => ({
      image: `/Gallery/${file}`,
      text: "",
    }));

  return (
    <section className="relative overflow-hidden bg-[#061222] py-28">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-128 w-lg -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/8 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="text-xs uppercase tracking-[0.45em] text-[#C9A227]">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
            Last Year Recap
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-[#C9A227]" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Relive the memorable moments, engaging debates, and unforgettable
            experiences from the previous edition of MUNIC.
          </p>

        </div>

        {/* Gallery */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[#C9A227]/15
            bg-white/5
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(201,162,39,0.08)]
          "
        >
          <div className="h-105 sm:h-125 md:h-150 lg:h-175">
            <CircularGallery
              items={items}
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.05}
              fontUrl=""
              font="bold 30px Orbitron"
              scrollSpeed={2}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;