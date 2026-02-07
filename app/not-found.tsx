"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* Large Decorative Number */}
      <h1 className="font-serif text-8xl md:text-9xl text-primary/20 select-none">
        404
      </h1>

      {/* Main Message */}
      <div className="relative -mt-12 space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl text-primary">
          Page not found.
        </h2>

        <p className="max-w-md mx-auto text-lg text-primary/80 font-light leading-relaxed">
          It looks like you’ve wandered off the path. Don’t worry—sometimes
          taking a wrong turn is just part of the journey.
        </p>

        {/* Return Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-primary text-xs font-bold tracking-[0.2em] text-primary uppercase transition-all hover:bg-primary hover:text-background"
          >
            Return Home
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
