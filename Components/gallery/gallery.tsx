// Components/gallery/gallery.tsx

import fs from "fs";
import path from "path";
import CircularGallery from "./CircularGallery";

const Gallery = () => {
  const galleryPath = path.join(process.cwd(), "public", "Gallery");

  const items = fs
    .readdirSync(galleryPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => ({
      image: `/Gallery/${file}`,
      text: "",
    }));

  return (
    <div>
      <h1 className="text-white text-8xl flex justify-center">
        Last Year Recap
      </h1>

      <div style={{ height: "600px", position: "relative" }}>
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
  );
};

export default Gallery;