'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
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
    <section ref={ref} className="py-24 px-6 bg-[#8a9a5b]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl font-light text-white">Get started today.</h2>
        <p className="text-lg text-white/90 leading-relaxed">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>
        <button className="px-8 py-3 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-[#8a9a5b] transition-colors">
          GET IN TOUCH →
        </button>
      </motion.div>
    </section>
  );
}
