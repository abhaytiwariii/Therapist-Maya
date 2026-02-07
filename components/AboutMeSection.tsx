"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutMeSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,

      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className="py-24 px-6 lg:py-32 bg-background overflow-hidden"
      id="about-me"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-center lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-16"
          >
            <div className="relative w-full max-w-[320px] max-h-[320px] md:max-w-[450px] aspect-square md:max-h-[450px]">
              <div className="absolute top-0 left-0 w-[85%] h-[120%] rounded-t-full overflow-hidden shadow-md z-10">
                <Image
                  src="/Dr. Maya Reynolds 2.png"
                  alt="Dr. Maya Reynolds"
                  className="w-full h-full object-cover object-top"
                  fill
                />
              </div>

              {/* Secondary Image: Flowers (Smaller Circle, Bottom Right) */}
              <div className="absolute bottom-[-100px] md:bottom-[-150px] right-4 w-[55%] h-[55%] rounded-full overflow-hidden shadow-lg z-20">
                <Image
                  src="/Dr. Maya Reynolds.png"
                  fill
                  alt="Lilac flowers aesthetic"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-primary/10 -z-10 scale-110" />
            </div>
          </motion.div>

          {/* TEXT COLUMN */}

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
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="font-serif text-4xl leading-[1.2] text-primary md:text-5xl lg:text-6xl">
              Hi, I&#39;m <br /> Dr. Maya Reynolds.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-primary/80 font-light">
              <p>
                I&#39;m committed to providing a safe and supportive environment
                where we can explore your thoughts, feelings, and behaviors.
                With empathy and guidance, we&#39;ll work together to navigate
                the challenges life throws your way.
              </p>
              <p>
                My approach combines CBT, EMDR, mindfulness, and body-based
                therapies to address anxiety, trauma, burnout, and
                perfectionism. I work collaboratively with adults in Santa
                Monica through in-person sessions and California telehealth.
              </p>
            </div>

            <div className="pt-4">
              <button className="group flex items-center gap-3 px-8 py-4 border border-primary text-xs font-bold tracking-[0.2em] text-primary uppercase transition-all hover:bg-primary hover:text-background">
                Let&#39;s Chat
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
