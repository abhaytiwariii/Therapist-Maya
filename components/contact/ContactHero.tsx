"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="pt-32 pb-24 px-6 lg:pt-40 lg:pb-32 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN: Text & Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary">
                Let’s Connect
              </h1>
              <p className="text-lg md:text-xl text-primary/80 font-light leading-relaxed max-w-md">
                Taking the first step toward support is significant. I’m here to
                answer your questions or schedule a consultation to discuss your
                needs.
              </p>
            </div>

            {/* Image Composition: Arch + Circle (Matches Screenshot) */}
            <div className="relative w-full max-w-[400px] aspect-square mx-auto lg:mx-0">
              {/* Main Arched Image */}
              <div className="absolute inset-0 rounded-t-full rounded-b-[200px] overflow-hidden shadow-sm bg-[#EAEAEA]">
                <Image
                  src="/Dr. Maya Reynolds 2.png"
                  alt="Calm office detail"
                  className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                  fill
                />
              </div>

              {/* Overlapping Circle Image */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 md:w-44 md:h-44 rounded-full border-[6px] border-background overflow-hidden shadow-lg z-10 bg-secondary">
                <Image
                  src="/Dr. Maya Reynolds.png"
                  alt="Minimalist vase"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Dark Info Box (Matches Screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary text-[#F9F7F2] p-10 md:p-14 rounded-sm shadow-xl lg:mt-32"
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-[#F9F7F2]">
              Consultation Details
            </h3>

            <div className="space-y-8 font-light text-lg">
              <p className="leading-relaxed opacity-90 text-base">
                I do not use standard contact forms to ensure the utmost privacy
                for my clients. Please reach out via email or phone.
              </p>

              <div className="space-y-6 pt-6 border-t border-[#F9F7F2]/20">
                <div className="flex items-start gap-5">
                  <Mail className="w-5 h-5 mt-1.5 opacity-70" />
                  <div>
                    <p className="font-medium opacity-50 text-xs uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:maya@example.com"
                      className="hover:underline underline-offset-4 text-xl"
                    >
                      maya@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Phone className="w-5 h-5 mt-1.5 opacity-70" />
                  <div>
                    <p className="font-medium opacity-50 text-xs uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:3105551234"
                      className="hover:underline underline-offset-4 text-xl"
                    >
                      (310) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <MapPin className="w-5 h-5 mt-1.5 opacity-70" />
                  <div>
                    <p className="font-medium opacity-50 text-xs uppercase tracking-widest mb-1">
                      Office
                    </p>
                    <p className="text-xl leading-snug">
                      1234 Ocean Avenue
                      <br />
                      Santa Monica, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
