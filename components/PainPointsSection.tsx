'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const painPoints = [
  'Persistent feelings of sadness or hopelessness',
  'Trouble focusing or making decisions',
  'Difficulty maintaining relationships',
  'Feeling constantly exhausted or unmotivated',
  'A pervasive sense of being overwhelmed',
];

export default function PainPointsSection() {
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
    <section ref={ref} className="py-24 px-6 bg-[#e8dce8]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="w-full max-w-md aspect-[3/4] overflow-hidden bg-stone-200 rounded-lg">
            <img
              src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Person in contemplation"
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
          <h2 className="text-4xl font-light text-stone-900 leading-tight">
            You don't have to do this all <em>alone</em>.
          </h2>
          <p className="text-lg text-stone-700">
            If you are facing any of these, there's hope:
          </p>
          <ul className="space-y-4">
            {painPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-stone-700 mt-1">•</span>
                <span className="text-stone-700">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-stone-700 leading-relaxed">
            With empathy and guidance, we'll work together to navigate the
            challenges life throws your way.
          </p>
          <button className="text-sm text-stone-800 hover:text-stone-900 border-b border-stone-800 pb-1 transition-colors">
            WORK WITH ME →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
