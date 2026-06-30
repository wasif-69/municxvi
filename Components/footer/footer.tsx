
import { Mail, Phone, MapPin, ArrowUpRight, } from "lucide-react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

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

                </div>

                {/* Divider */}

                <div className="h-px w-full bg-linear-to-r from-transparent via-[#C9A227]/40 to-transparent mb-20" />

                {/* Main Footer */}

                <div className="grid lg:grid-cols-4 gap-14">

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

                    {/* Quick Links */}


                    {/* Secretariat */}
                    <div>
                        <h3 className="uppercase tracking-[0.3em] text-[#C9A227] text-xs mb-8">
                            Secretariat
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
                            <div>
                                <p className="text-[#C9A227] text-sm">
                                    Secretary-General
                                </p>
                                <p>Anas Khursheed</p>
                            </div>

                            <div>
                                <p className="text-[#C9A227] text-sm">
                                    Under Secretary-General
                                </p>
                                <p>Maham Ali</p>
                            </div>

                            <div>
                                <p className="text-[#C9A227] text-sm">
                                    President
                                </p>
                                <p>Karrar Haider</p>
                            </div>

                            <div>
                                <p className="text-[#C9A227] text-sm">
                                    Director-General
                                </p>
                                <p>Haysam Imtiaz</p>
                            </div>

                            <div>
                                <p className="text-[#C9A227] text-sm">
                                    Deputy Director-General
                                </p>
                                <p>Pariza Imran</p>
                            </div>

                            <div>
                                <p className="text-[#C9A227] text-sm">
                                    Chief of Staff
                                </p>
                                <p>Haniya Rehman</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="uppercase tracking-[0.3em] text-[#C9A227] text-xs mb-8">
                            Contact
                        </h3>

                        <div className="space-y-5">

                            <a
                                href="mailto:info@municxvi.com"
                                className="flex items-center gap-4 text-slate-300 hover:text-[#C9A227] transition"
                            >
                                <Mail size={18} />
                                municxvi@gmial.com
                            </a>

                            <a
                                href="tel:+923001234567"
                                className="flex items-center gap-4 text-slate-300 hover:text-[#C9A227] transition"
                            >
                                <Phone size={18} />
                                +92 300 1234567
                            </a>

                            <div className="flex items-center gap-4 text-slate-300">

                                <MapPin size={18} />

                                <span>
                                    Islamabad, Pakistan
                                </span>

                            </div>

                            <div className="flex gap-4 pt-4">

                                <a
                                    href="https://www.instagram.com/munic.xv/"
                                    target="_blank"
                                    className="
                    h-12
                    w-12
                    rounded-full
                    border
                    border-[#C9A227]/20
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    hover:bg-[#C9A227]
                    hover:text-[#061222]
                    transition
                  "
                                >
                                    <FaInstagram size={20} />
                                </a>

                                <a
                                    href="#"
                                    className="
                    h-12
                    w-12
                    rounded-full
                    border
                    border-[#C9A227]/20
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    hover:bg-[#C9A227]
                    hover:text-[#061222]
                    transition
                  "
                                >
                                    <FaXTwitter size={18} />
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
                            VK
                        </span>

                        <ArrowUpRight size={16} />

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;