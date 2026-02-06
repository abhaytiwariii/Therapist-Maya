"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ede0d4] border-t border-stone-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-light text-stone-900 mb-4">
              Dr. Maya Reynolds
            </h3>
            <p className="text-stone-700 mb-2">1234 Ocean Avenue</p>
            <p className="text-stone-700 mb-4">Santa Monica, CA 90401</p>
            <p className="text-stone-700 mb-2">maya@example.com</p>
            <p className="text-stone-700">(310) 555-1234</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-stone-900 mb-4">Hours</h4>
            <p className="text-stone-700 mb-2">Monday – Friday</p>
            <p className="text-stone-700">10am – 6pm</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-stone-900 mb-4">Find</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-stone-700 hover:text-stone-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#contact"
                className="block text-stone-700 hover:text-stone-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-300 bg-[#e8dce8] px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-700 mb-4">
            <Link href="#" className="hover:text-stone-900">
              Privacy & Cookies Policy
            </Link>
            <Link href="#" className="hover:text-stone-900">
              Good Faith Estimate
            </Link>
            <Link href="#" className="hover:text-stone-900">
              Website Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-stone-900">
              Disclaimer
            </Link>
          </div>
          <p className="text-center text-sm text-stone-600">
            All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD
          </p>
        </div>
      </div>
    </footer>
  );
}
