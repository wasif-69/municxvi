"use client";
import { FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Committees", href: "#committees" },
    { name: "Location", href: "#location" },
    { name: "Schedule", href: "#schedule" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={`
      w-full max-w-7xl
      rounded-2xl
      transition-all duration-500

      ${scrolled
            ? "bg-white/95 backdrop-blur-xl border border-slate-200"
            : "bg-[#061222]/80 backdrop-blur-xl border border-white/10"
          }
    `}
      >
        {/* Main Bar */}
        <div className="flex items-center justify-between px-5 md:px-7 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className={`
            w-10 h-10 md:w-12 md:h-12
            rounded-full
            flex items-center justify-center

            ${scrolled
                  ? "bg-[#C9A227] text-[#061222]"
                  : "bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227]"
                }
          `}
            >
              <Globe2 size={20} />
            </div>

            <div>
              <h1
                className={`
              text-sm md:text-xl
              font-black
              tracking-[0.2em]
              uppercase
              ${scrolled ? "text-[#061222]" : "text-white"}
            `}
              >
                MUNIC XVI
              </h1>

              <p
                className={`
              hidden sm:block
              text-[10px]
              uppercase
              tracking-[0.15em]

              ${scrolled
                    ? "text-slate-500"
                    : "text-slate-400"
                  }
            `}
              >
                The City School Capital Campus
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
              text-sm
              uppercase
              tracking-[0.15em]
              transition-colors

              ${scrolled
                    ? "text-slate-700 hover:text-[#C9A227]"
                    : "text-white hover:text-[#C9A227]"
                  }
            `}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a
  href="https://www.instagram.com/municxvi/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our Instagram"
  className="
    group
    relative
    h-12 w-12
    rounded-full
    flex items-center justify-center

    bg-white/90 backdrop-blur-xl
    border border-[#C9A227]/30

    text-[#061222]
    shadow-sm

    transition-all duration-300 ease-out

    hover:bg-[#C9A227]
    hover:scale-105
    hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]
  "
>
  <FaInstagram
    size={20}
    className="
      transition-all duration-300
      group-hover:rotate-6
      group-hover:scale-110
    "
  />
</a>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">

            <Link href={"/guide"}>
              <button
                className={`
            px-5 py-2
            text-sm

            ${scrolled
                    ? "text-slate-700"
                    : "text-white"
                  }
          `}
              >
                Guide
              </button>
            </Link>

            <Link href={"https://linktr.ee/officialmunic"}>

              <button
                className="
            px-5 py-2
            rounded-full
            bg-[#C9A227]
            text-[#061222]
            font-semibold
            hover:opacity-90
            transition
          "
              >
                Register
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`
          lg:hidden

          ${scrolled
                ? "text-[#061222]"
                : "text-white"
              }
        `}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
        lg:hidden
        overflow-hidden
        transition-all duration-300

        ${mobileOpen
              ? "max-h-125 border-t border-white/10"
              : "max-h-0"
            }
      `}
        >
         <nav className="flex flex-col px-5 py-4">

{/* Nav Items */}
{navItems.map((item) => (
  <a
    key={item.name}
    href={item.href}
    onClick={() => setMobileOpen(false)}
    className={`
      py-3
      uppercase
      text-sm
      tracking-[0.15em]
      transition-colors duration-200

      ${scrolled ? "text-slate-700" : "text-white"}
      hover:text-[#C9A227]
    `}
  >
    {item.name}
  </a>
))}

{/* CTA */}
<Link
  href="https://linktr.ee/officialmunic"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMobileOpen(false)}
>
  <button
    className="
      mt-5
      w-full
      py-3
      rounded-full

      bg-[#C9A227]
      text-[#061222]
      font-semibold

      transition-all duration-300
      hover:opacity-90
      hover:scale-[1.02]
    "
  >
    Register Now
  </button>
</Link>

{/* Instagram */}
<a
  href="https://www.instagram.com/municxvi/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMobileOpen(false)}
  className={`
    mt-4
    flex items-center justify-center gap-2

    py-3
    rounded-full

    border
    transition-all duration-300

    ${scrolled
      ? "border-slate-300 text-slate-700 hover:bg-slate-100"
      : "border-white/20 text-white hover:bg-white/10"
    }

    hover:text-[#C9A227]
  `}
>
  <FaInstagram size={18} />
  <span className="text-sm uppercase tracking-[0.15em]">
    Instagram
  </span>
</a>

</nav>
        </div>
      </div>
    </header>
  );
} 