"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const background = [
  {
    title: "Education",
    content:
      "PsyD in Clinical Psychology, Pepperdine University\nMA in Psychology, Pepperdine University\nBA in Psychology, UCLA",
  },
  {
    title: "Licensure",
    content: "Licensed Clinical Psychologist, California (PSY12345)",
  },
  {
    title: "Certifications",
    content:
      "EMDR Certified Therapist\nCognitive Behavioral Therapy (CBT) Training\nMindfulness-Based Stress Reduction (MBSR)",
  },
];

export default function BackgroundSection() {
  const [isInView, setIsInView] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 },
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
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-light text-stone-900 text-center mb-12"
        >
          My Professional Background
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          {background.map((item, index) => (
            <div key={index} className="border-b border-stone-300 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg text-stone-900">{item.title}</span>
                <Plus
                  className={`w-5 h-5 text-stone-700 transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-4 text-stone-700 leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
