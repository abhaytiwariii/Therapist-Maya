'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AboutMeSection() {
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
          className="space-y-8"
        >
          <h2 className="text-4xl font-light text-stone-900">
            Hi, I'm Dr. Maya Reynolds.
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors. With empathy
            and guidance, we'll work together to navigate the challenges life
            throws your way.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            My approach combines CBT, EMDR, mindfulness, and body-based
            therapies to address anxiety, trauma, burnout, and perfectionism. I
            work collaboratively with adults in Santa Monica through in-person
            sessions and California telehealth.
          </p>
          <button className="px-8 py-3 border border-stone-800 text-stone-800 text-sm tracking-wide hover:bg-stone-800 hover:text-white transition-colors">
            LET'S CHAT →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative flex justify-center items-center h-[500px]"
        >
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full overflow-hidden bg-stone-200 shadow-lg">
            <img
              src="https://images.pexels.com/photos/1030945/pexels-photo-1030945.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Flowers"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full overflow-hidden bg-stone-200 shadow-lg">
            <img
              src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="White flowers"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
