'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const specialties = [
  {
    title: 'Anxiety',
    description:
      'Working through persistent worry and overwhelming thoughts that hold you back from living fully.',
    image:
      'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Trauma',
    description:
      'Processing difficult experiences with evidence-based approaches like EMDR to help you heal and move forward.',
    image:
      'https://images.pexels.com/photos/3771790/pexels-photo-3771790.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Burnout',
    description:
      'Addressing exhaustion and overwhelm to help you reconnect with meaning and restore your energy.',
    image:
      'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    <section ref={ref} className="py-24 px-6 bg-[#f5ebe0]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-light text-stone-900 text-center mb-16"
        >
          My Specialties
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              className="bg-[#ede0d4] p-8 rounded-lg space-y-6"
            >
              <h3 className="text-xl font-medium text-stone-900">
                {specialty.title}
              </h3>
              <p className="text-stone-700 leading-relaxed text-sm">
                {specialty.description}
              </p>
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-stone-200">
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
