"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  // Simple fade-in animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="bg-secondary/20 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-20">
          {/* IMAGE BLOCK */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070"
                alt="Journaling and reflection in a calm space"
                className="h-full w-full object-cover transition-transform duration-&lsqb;2000ms&rsqb; hover:scale-105"
                fill
              />
            </div>
          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              ...fadeUp,
              visible: {
                ...fadeUp.visible,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              },
            }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="font-serif text-4xl leading-tight text-primary md:text-5xl lg:text-6xl">
              You don’t have to <br className="hidden lg:block" />
              carry it all alone.
            </h2>

            <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/80 font-sans">
              <p>
                To the outside world, you appear high-achieving, thoughtful, and
                capable. But internally, the pressure to maintain that standard
                can feel exhausting.
              </p>
              <p>
                Whether you are navigating professional burnout, anxiety, or the
                lingering effects of past experiences, my practice offers a
                grounded space to pause, reflect, and reconnect with yourself.
              </p>
            </div>

            <div className="pt-2 pb-2 flex justify-center">
              <Link href={"/contact"}>
                <button className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase transition-all hover:opacity-70 text-center border border-black px-6 py-4">
                  Get in Touch
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
