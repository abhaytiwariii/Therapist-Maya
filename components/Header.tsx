"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide after scrolling down 100px
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f5ebe0]/50 backdrop-blur-sm transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="md:text-2xl text-xl font-bold text-stone-800">
          Dr. Maya Reynolds
        </Link>

        <nav className="flex gap-8">
          <Link
            href="#about"
            className="text-sm md:text-lg text-stone-700 hover:text-stone-900 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="text-sm md:text-lg text-stone-700 hover:text-stone-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
