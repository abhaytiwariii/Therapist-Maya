"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1: Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-primary">
              Dr. Maya Reynolds
            </h3>
            <div className="space-y-1 text-primary/80 font-light text-lg">
              <p>1234 Ocean Avenue</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            <div className="space-y-1 text-primary/80 font-light text-lg underline decoration-primary/30 underline-offset-4">
              <p>
                <Link
                  href="mailto:maya@example.com"
                  className="hover:text-primary transition-colors"
                >
                  maya@example.com
                </Link>
              </p>
              <p>
                <Link
                  href="tel:3105551234"
                  className="hover:text-primary transition-colors"
                >
                  (310) 555-1234
                </Link>
              </p>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="space-y-6">
            <h4 className="font-serif text-2xl text-primary">Hours</h4>
            <div className="space-y-1 text-primary/80 font-light text-lg">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-6 md:text-right">
            <h4 className="font-serif text-2xl text-primary">Find</h4>
            <nav className="flex flex-col md:items-end space-y-2 text-primary/80 font-light text-lg">
              <Link
                href="/"
                className="hover:text-primary scroll-smooth underline decoration-primary/30 underline-offset-4 transition-all"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary underline decoration-primary/30 underline-offset-4 transition-all"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="hover:text-primary underline decoration-primary/30 underline-offset-4 transition-all"
              >
                Blog
              </Link>
              <a
                href="#about-me"
                className="hover:text-primary underline decoration-primary/30 underline-offset-4 transition-all"
              >
                About Me
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="bg-[#E8E6E1] px-6 py-8 border-t border-primary/5">
        <div className="container mx-auto flex flex-col items-center gap-6">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-primary/60 font-medium">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy & Cookies Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Good Faith Estimate
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Website Terms & Conditions
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Disclaimer
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-primary/50">
            All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD
          </p>
        </div>
      </div>
    </footer>
  );
}
