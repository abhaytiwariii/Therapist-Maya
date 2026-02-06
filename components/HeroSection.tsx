'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
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
    <section
      ref={ref}
      className="min-h-screen bg-[#f5ebe0] pt-24 pb-16 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="w-full max-w-md aspect-square rounded-full overflow-hidden bg-stone-200">
            <img
              src="https://images.pexels.com/photos/1030945/pexels-photo-1030945.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Therapeutic space"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="space-y-8"
        >
          <h1 className="text-5xl lg:text-6xl font-light text-stone-900 leading-tight">
            Live your life
            <br />
            in full bloom
          </h1>
          <p className="text-lg text-stone-700">
            Therapy for Adults in Santa Monica, CA
          </p>
          <button className="px-8 py-3 border border-stone-800 text-stone-800 text-sm tracking-wide hover:bg-stone-800 hover:text-white transition-colors">
            CONNECT WITH ME →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
