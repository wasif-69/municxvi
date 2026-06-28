import Image from "next/image";
import school from "@/public/school-logo-removebg-preview.png";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section className="relative overflow-hidden bg-[#061222] py-24">
      {/* Background */}
      <Image
        src={school}
        alt="Background"
        fill
        priority
        className="object-cover opacity-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#061222]/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-[#C9A227] uppercase tracking-[0.4em] text-xs">
            Venue
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Conference Venue
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left */}
          <div className="lg:col-span-2">

            <div className="w-20 h-[2px] bg-[#C9A227] mb-8" />

            <h3 className="text-4xl font-bold text-white leading-tight">
              The City School
              <span className="block text-[#C9A227]">
                Capital Campus
              </span>
            </h3>

            <div className="mt-10 flex gap-4">

              <div className="h-12 w-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0">
                <MapPin
                  className="text-[#C9A227]"
                  size={22}
                />
              </div>

              <div>
                <p className="text-lg text-white">
                  Islamabad, Pakistan
                </p>

                <p className="text-slate-400 mt-2 leading-7">
                  The official venue for MUNIC XVI,
                  offering modern facilities,
                  spacious committee rooms, and an
                  inspiring academic environment.
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="lg:col-span-3">

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26561.32028107629!2d73.06514709999999!3d33.6787906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956077d6bfb1%3A0xe5db7e6512907826!2sThe%20City%20School%20Capital%20Campus!5e0!3m2!1sen!2s!4v1782626173115!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Conference Venue"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;