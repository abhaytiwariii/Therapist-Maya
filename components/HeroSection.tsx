"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  // Animation variants for a "Calm" entry
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#f5ebe0] flex items-center pt-16 lg:pt-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: The Arched Image container */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* The rounded-t-full class on an aspect-ratio div creates the signature arch */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden rounded-t-full shadow-md bg-stone-100">
              <Image
                src="/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds - Psychologist in Santa Monica"
                className="h-full w-full object-cover transition-transform duration-[3000ms] hover:scale-110"
                fill
              />
            </div>
          </motion.div>

          {/* Right Column: Copywriting & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              ...fadeUp,
              visible: {
                ...fadeUp.visible,
                transition: { ...fadeUp.visible.transition, delay: 0.3 },
              },
            }}
            className="flex flex-col items-center text-center space-y-8 lg:pl-12 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <h1 className="font-serif text-3xl leading-[1.1] text-[#2C332A] md:text-5xl xl:text-[65px]">
                Live your life <br />
                <span className="italic font-light">in full bloom</span>
              </h1>

              <p className="text-base tracking-[0.15em] text-[#5C6B58] font-semibold uppercase md:text-lg">
                Therapy for Adults in Santa Monica, CA
              </p>
            </div>

            <p className="max-w-md text-lg md:text-xl leading-relaxed text-[#4A5447] font-light">
              Providing a warm, collaborative space for high-achieving adults
              navigating burnout, trauma, and the complexities of modern life.
            </p>

            <motion.div
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="pt-4"
            >
              <a href="/contact">
                <button className="group relative border border-[#2C332A] px-12 py-5 text-xs font-bold tracking-[0.25em] text-[#2C332A] transition-all hover:bg-[#2C332A] hover:text-[#F9F7F2]">
                  CONNECT WITH ME —
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative grain/texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
    </section>
  );
}
