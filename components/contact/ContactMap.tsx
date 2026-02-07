"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactMap() {
  return (
    // Theme: Using Deep Forest Green (Primary) for high contrast against the previous light section
    <section className="py-24 px-6 lg:py-32 bg-primary text-[#F9F7F2] overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT COLUMN: Text Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-[#F9F7F2]">
                My Office
              </h2>
              <div className="space-y-2 text-lg font-light opacity-90 leading-relaxed">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 opacity-70 shrink-0" />
                  <span>
                    1234 Ocean Avenue, Suite 400
                    <br />
                    Santa Monica, CA 90401
                  </span>
                </p>
                <p className="text-sm opacity-60 pl-8 pt-2">
                  * Located near Palisades Park with ample street parking
                  available.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-[#F9F7F2]">
                Hours
              </h2>
              <div className="space-y-2 text-lg font-light opacity-90 leading-relaxed">
                <p className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 opacity-70 shrink-0" />
                  <span>
                    Monday – Friday
                    <br />
                    10:00 am – 6:00 pm
                  </span>
                </p>
                <p className="text-sm opacity-60 pl-8 pt-2">
                  * Evening and weekend appointments available upon request.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Styled Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-sm overflow-hidden shadow-2xl border border-[#F9F7F2]/10"
          >
            {/* Grayscale Map Image Placeholder */}

            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074"
              alt="Map of Santa Monica"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-[2000ms] hover:scale-105"
              fill
            />

            {/* Custom Location Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-[#F9F7F2] z-10 relative shadow-lg"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* "Get Directions" Overlay Button */}
            <div className="absolute bottom-6 left-6 right-6">
              <a target="_blank" href="https://www.google.com/maps">
                <button className="w-full bg-[#F9F7F2] text-primary py-4 font-bold tracking-widest text-xs uppercase hover:bg-[#F9F7F2]/90 transition-colors shadow-lg">
                  Get Directions via Google Maps
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
