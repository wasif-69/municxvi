"use client";

import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";
import { Menu, X } from "lucide-react";

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
    { name: "Secretariat", href: "#secretariat" },
    { name: "Schedule", href: "#schedule" },
    { name: "Contact", href: "#contact" },
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
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
              ? "max-h-[500px] border-t border-white/10"
              : "max-h-0"
            }
      `}
        >
          <nav className="flex flex-col px-5 py-4">
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

              ${scrolled
                    ? "text-slate-700"
                    : "text-white"
                  }
            `}
              >
                {item.name}
              </a>
            ))}

            <button
              className="
            mt-4
            py-3
            rounded-full
            bg-[#C9A227]
            text-[#061222]
            font-semibold
          "
            >
              Register Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
} 