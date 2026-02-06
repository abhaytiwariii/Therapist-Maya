'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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
    <section ref={ref} className="py-24 px-6 bg-[#ede0d4]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-light text-stone-900">
            Live a fulfilling life.
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            Life can be challenging—especially when you're trying to balance
            your personal and professional life.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            It's easy to feel like you're alone in facing these challenges, but
            I want you to know that I'm here to help.
          </p>
          <button className="text-sm text-stone-800 hover:text-stone-900 border-b border-stone-800 pb-1 transition-colors">
            GET IN TOUCH →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="w-full max-w-md aspect-[4/3] overflow-hidden bg-stone-200 rounded-lg">
            <img
              src="https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Peaceful workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
