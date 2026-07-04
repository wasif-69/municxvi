"use client";
import { FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/public/logo-removebg-preview.png";
import Image from "next/image";


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
    { name: "About", href: "/about" },
    { name: "Committees", href: "/community" },
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
                  ? "bg-[#061222] text-[#061222]"
                  : "bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227]"
                }
          `}
            >
              <Image alt="logo" src={Logo} ></Image>
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


          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">

  {/* Guide */}
  <Link href="/guide">
    <button
      className={`
        px-5 py-2
        rounded-full
        text-sm
        transition-all duration-300

        ${
          scrolled
            ? "text-slate-700 hover:bg-slate-100"
            : "text-white hover:bg-white/10"
        }
      `}
    >
      Guide
    </button>
  </Link>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/municxvi/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="
      h-11
      w-11
      rounded-full
      border
      border-[#C9A227]/20
      bg-white/5
      flex
      items-center
      justify-center

      text-[#C9A227]

      transition-all
      duration-300

      hover:bg-[#C9A227]
      hover:text-[#061222]
      hover:scale-105
    "
  >
    <FaInstagram size={18} />
  </a>

  {/* Register */}
  <Link
    href="https://linktr.ee/officialmunic"
    target="_blank"
  >
    <button
      className="
        px-6
        py-2.5
        rounded-full
        bg-[#C9A227]
        text-[#061222]
        font-medium

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-lg
        hover:shadow-[#C9A227]/30
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
        <nav className="flex flex-col px-6 py-6">

{navItems.map((item) => (
  <a
    key={item.name}
    href={item.href}
    onClick={() => setMobileOpen(false)}
    className={`
      py-4
      uppercase
      tracking-[0.2em]
      text-sm

      ${
        scrolled
          ? "text-slate-700"
          : "text-white"
      }

      hover:text-[#C9A227]
      transition
    `}
  >
    {item.name}
  </a>
))}

<div className="my-4 border-t border-white/10" />

<Link
  href="/guide"
  onClick={() => setMobileOpen(false)}
  className={`
    py-4
    ${
      scrolled
        ? "text-slate-700"
        : "text-white"
    }
    hover:text-[#C9A227]
    transition
  `}
>
  Guide
</Link>

<a
  href="https://www.instagram.com/municxvi/"
  target="_blank"
  rel="noopener noreferrer"
  className={`
    py-4
    flex
    items-center
    gap-3

    ${
      scrolled
        ? "text-slate-700"
        : "text-white"
    }

    hover:text-[#C9A227]
  `}
>
  <FaInstagram size={18} />
  Instagram
</a>

<Link
  href="https://linktr.ee/officialmunic"
  target="_blank"
>
  <button
    className="
      mt-6
      w-full
      rounded-full
      bg-[#C9A227]
      py-3.5

      text-[#061222]
      font-semibold

      transition
      hover:scale-[1.02]
    "
  >
    Register Now
  </button>
</Link>

</nav>
        </div>
      </div>
    </header>
  );
} 