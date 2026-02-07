"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const painPoints = [
  "Persistent feelings of sadness or hopelessness",
  "Trouble focusing or making decisions",
  "Difficulty maintaining relationships",
  "Feeling constantly exhausted or unmotivated",
  "A pervasive sense of being overwhelmed",
];

export default function PainPointsSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    // Theme: Using bg-secondary (Sage) to match the color block style of the screenshot
    <section ref={ref} className="py-24 px-6 md:py-32 bg-[#D8DDD6]/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 md:gap-18">
          {/* IMAGE COLUMN */}
          {/* Mobile: Top (Default Order). Desktop: Left. */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-sm bg-[#EAEAEA]">
              <Image
                src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1974"
                alt="Woman looking thoughtful in a calm setting"
                className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                fill
              />
            </div>
          </motion.div>

          {/* CONTENT COLUMN */}
          {/* Mobile: Bottom. Desktop: Right. */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="w-full lg:w-1/2 space-y-8 lg:space-y-10"
          >
            <h2 className="font-serif text-3xl leading-[1.2] text-primary md:text-4xl lg:text-5xl">
              You don’t have to do this all{" "}
              <span className="italic font-light">alone</span>.
            </h2>

            <p className="text-lg font-medium text-primary/80">
              If you are facing any of these, there’s hope:
            </p>

            <ul className="space-y-5">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span className="text-lg text-primary/90 font-light leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6 space-y-8">
              <p className="text-lg leading-relaxed text-primary/80 max-w-md">
                With empathy and guidance, we'll work together to navigate the
                challenges life throws your way.
              </p>

              <button className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase transition-all hover:opacity-70 border border-black px-6 py-4">
                Work With Me
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
