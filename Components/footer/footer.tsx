import { Mail, Phone} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#061222] border-t border-[#C9A227]/15">

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-[140px]" />
            <div className="absolute -bottom-52 right-0 h-120 w-120 rounded-full bg-[#C9A227]/10 blur-[170px]" />

            {/* Watermark */}
            <h1
                className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center font-black uppercase leading-none tracking-[0.15em] select-none text-[white]/5 blur-[1px]" style={{ fontSize: "clamp(5rem, 18vw, 18rem)", }}
            >
                <span>MUNIC</span>
                <span className="text-[0.45em] tracking-[0.35em] mt-2">
                    XVI
                </span>
            </h1>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

                {/* Top CTA */}
                <div className="text-center mb-20">

                    <p className="uppercase tracking-[0.45em] text-[#C9A227] text-xs">
                        MUNIC XVI
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                        Ready to Shape the Future?
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-8">
                        Join delegates from across Pakistan and experience diplomacy,
                        leadership, and international collaboration at MUNIC XVI.
                    </p>

                    <Link href={"https://linktr.ee/officialmunic"}>
                        <button
                            className="
              mt-10
              px-8
              py-4
              rounded-full
              bg-linear-to-r
              from-[#C9A227]
              to-[#DFC35D]
              text-[#061222]
              font-semibold
              shadow-lg
              shadow-[#C9A227]/20
              hover:scale-105
              transition
            "
                        >
                            Register Now
                        </button>
                    </Link>

                </div>

                {/* Divider */}

                <div className="h-px w-full bg-linear-to-r from-transparent via-[#C9A227]/40 to-transparent mb-20" />

                {/* Main Footer */}

                <div id="about" className="grid lg:grid-cols-3 gap-14">

                    {/* Brand */}

                    <div>

                        <h2 className="text-4xl font-black tracking-[0.18em] text-white">
                            MUNIC
                            <span className="block text-[#C9A227]">
                                XVI
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-slate-400">
                            Model United Nations Conference hosted by
                            <span className="text-white">
                                {" "}
                                The City School Capital Campus
                            </span>
                            , empowering future diplomats and global leaders.
                        </p>

                    </div>

                    {/* Contact the Secretariat */}
<div className="lg:col-span-2">

  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

    <h3 className="uppercase tracking-[0.3em] text-[#C9A227] text-xs">
      Contact Us
    </h3>

    <a
      href="mailto:municxvi@gmail.com"
      className="flex items-center gap-2 text-slate-400 hover:text-[#C9A227] transition text-sm"
    >
      <Mail size={16} />
      municxvi@gmail.com
    </a>

  </div>

  <div className="grid gap-5 sm:grid-cols-2">

    {/* Card */}

    <div className="rounded-2xl border border-[#C9A227]/15 bg-white/5 backdrop-blur-xl p-5">

      <p className="text-xs uppercase tracking-[0.25em] text-[#C9A227]">
        IT Director
      </p>

      <h4 className="mt-2 text-lg font-semibold text-white">
        Wasif Khalil
      </h4>

      <a
        href="tel:+923001234567"
        className="mt-4 flex items-center gap-2 text-slate-400 hover:text-[#C9A227] transition"
      >
        <Phone size={16} />
        +92 300 1234567
      </a>

    </div>

    {/* Card */}

    <div className="rounded-2xl border border-[#C9A227]/15 bg-white/5 backdrop-blur-xl p-5">

      <p className="text-xs uppercase tracking-[0.25em] text-[#C9A227]">
        Secretary-General
      </p>

      <h4 className="mt-2 text-lg font-semibold text-white">
        Anas Khursheed
      </h4>

      <a
        href="tel:+923001234567"
        className="mt-4 flex items-center gap-2 text-slate-400 hover:text-[#C9A227] transition"
      >
        <Phone size={16} />
        +92 300 1234567
      </a>

    </div>

    {/* Card */}

    <div className="rounded-2xl border border-[#C9A227]/15 bg-white/5 backdrop-blur-xl p-5">

      <p className="text-xs uppercase tracking-[0.25em] text-[#C9A227]">
        Director-General
      </p>

      <h4 className="mt-2 text-lg font-semibold text-white">
        Haysam Imtiaz
      </h4>

      <a
        href="tel:+923001234567"
        className="mt-4 flex items-center gap-2 text-slate-400 hover:text-[#C9A227] transition"
      >
        <Phone size={16} />
        +92 300 1234567
      </a>

    </div>

    {/* Card */}

    <div className="rounded-2xl border border-[#C9A227]/15 bg-white/5 backdrop-blur-xl p-5">

      <p className="text-xs uppercase tracking-[0.25em] text-[#C9A227]">
        Chief of Staff
      </p>

      <h4 className="mt-2 text-lg font-semibold text-white">
        Haniya Rehman
      </h4>

      <a
        href="tel:+923001234567"
        className="mt-4 flex items-center gap-2 text-slate-400 hover:text-[#C9A227] transition"
      >
        <Phone size={16} />
        +92 300 1234567
      </a>

    </div>

  </div>

</div>
                </div>

                {/* Bottom */}

                <div className="mt-8 pt-4 border-t border-[#C9A227]/15 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">

                    <p>
                        © 2026 MUNIC XVI. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-3">

                        <span>
                            Designed & Developed by
                        </span>

                        <span className="text-[#C9A227] font-medium">
                            Wasif Khalil
                        </span>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;