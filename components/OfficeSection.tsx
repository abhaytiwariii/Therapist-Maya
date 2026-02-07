"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";

/**
 * OfficeSection Component
 * * Part 3 of the Assignment: Creative Thinking Test.
 * This section highlights Dr. Maya Reynolds' physical practice space in Santa Monica.
 * It uses the "Lilac" template structure: High whitespace, arched imagery, and serif headings.
 */

const OfficeSection = () => {
  // Animation variants for smooth, subtle entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F9F7F2] py-24 md:py-32 lg:py-40">
      <motion.div
        className="container mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Copy and Info */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants} className="space-y-6">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#5C6B58]">
                Physical Practice
              </span>
              <h2 className="font-serif text-4xl leading-tight text-[#2C332A] md:text-5xl lg:text-6xl">
                A Calm Space <br /> for Healing.
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-[#4A5447]">
                Located in the heart of Santa Monica, my office is a quiet,
                private sanctuary designed to feel grounding and safe. With
                plenty of natural light and a comfortable, uncluttered
                environment, it&#39;s a place where you can truly slow down.
              </p>

              {/* Practical Details List */}
              <div className="mt-10 space-y-5 border-t border-[#D1D9CE] pt-8">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-[#5C6B58]" />
                  <div>
                    <p className="font-medium text-[#2C332A]">
                      Santa Monica Office
                    </p>
                    <p className="text-sm text-[#6B7668]">
                      123th Street 45 W, Santa Monica, CA 90401
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-[#5C6B58]" />
                  <div>
                    <p className="font-medium text-[#2C332A]">Format Options</p>
                    <p className="text-sm text-[#6B7668]">
                      In-person and secure telehealth available across
                      California.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-1 h-5 w-5 text-[#5C6B58]" />
                  <div>
                    <p className="font-medium text-[#2C332A]">
                      Privacy Assured
                    </p>
                    <p className="text-sm text-[#6B7668]">
                      A confidential, sun-drenched space optimized for deep
                      reflection.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Imagery (Matching the "Lilac" Arched Design) */}
          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {/* Image 1: Arched Main Office - Using high-quality placeholder relevant to Maya's doc */}
              <motion.div
                variants={itemVariants}
                className="relative aspect-[3/4] overflow-hidden rounded-t-full shadow-sm"
              >
                <Image
                  src="/office1.png"
                  alt="Dr. Maya Reynolds Therapy Office"
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Image 2: Secondary angle, offset lower to match Squarespace grid aesthetic */}
              <motion.div
                variants={itemVariants}
                className="relative mt-12 aspect-[3/4] overflow-hidden rounded-t-full shadow-sm sm:mt-24"
              >
                <Image
                  src="/office2.png"
                  alt="Comfortable Seating Area"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Subtle decorative element common in design-forward therapy sites */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-8 -left-8 hidden h-32 w-32 rounded-full bg-[#E8EDE6] opacity-50 blur-2xl lg:block"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OfficeSection;
