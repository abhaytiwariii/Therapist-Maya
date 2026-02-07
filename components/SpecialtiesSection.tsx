"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const specialties = [
  {
    title: "Anxiety",
    description:
      "Working through persistent worry and overwhelming thoughts that hold you back from living fully.",
    image:
      "https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Trauma",
    description:
      "Processing difficult experiences with evidence-based approaches like EMDR to help you heal and move forward.",
    image:
      "https://images.pexels.com/photos/3771790/pexels-photo-3771790.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Burnout",
    description:
      "Addressing exhaustion and overwhelm to help you reconnect with meaning and restore your energy.",
    image:
      "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function SpecialtiesSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
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
    <section ref={ref} className="bg-background py-20 px-6 lg:py-32">
      <div className="container mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-center mb-16 md:mb-24"
        >
          My Specialties
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              // Lilac Style Card: Subtle border/bg, left-aligned text, centered image at bottom
              className="flex flex-col bg-[#F4F1EA] border border-black p-8 pb-12 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              <div className="mb-8 flex-grow">
                <h3 className="text-xl font-bold text-primary mb-4 font-sans tracking-wide">
                  {specialty.title}
                </h3>
                <p className="text-primary/80 leading-relaxed text-sm lg:text-base font-light">
                  {specialty.description}
                </p>
              </div>

              {/* Circular Image Container */}
              <div className="self-center w-56 h-56 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-inner grayscale-[10%] hover:grayscale-0 transition-all duration-700">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}