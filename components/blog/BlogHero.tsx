"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="pt-32 pb-16 px-6 lg:pt-48 lg:pb-32 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* LEFT COLUMN: Arched Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-t-full shadow-sm bg-[#EAEAEA]">
              <Image
                src="/blogHero.png"
                alt="Cozy reading nook"
                className="w-full h-full object-cover transition-transform duration-&lsqb;3000ms&rsqb; hover:scale-105"
                fill
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center lg:text-left space-y-8"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary">
              The Sanctuary Journal
            </h1>

            <div className="space-y-6 text-lg md:text-xl text-primary/80 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>
                My tiny corner of the internet where I talk about all things
                healing, heart, and wholeness.
              </p>
              <p className="font-medium text-primary">Glad you’re here.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
