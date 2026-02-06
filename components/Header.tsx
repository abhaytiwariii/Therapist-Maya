'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5ebe0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-light text-stone-800">
          Dr. Maya Reynolds
        </Link>
        <nav className="flex gap-8">
          <Link
            href="#about"
            className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
