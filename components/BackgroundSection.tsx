"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    // Theme: Using a muted "Greige" to match the screenshot's neutral tone
    <section className="py-24 px-6 lg:py-32 bg-[#E8E6E1]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary text-center mb-12 lg:mb-16"
        >
          My Professional Background
        </motion.h2>

        <div className="space-y-1">
          {background.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className="text-lg md:text-xl font-light text-primary group-hover:text-primary/70 transition-colors">
                  {item.title}
                </span>

                {/* Plus Icon on the RIGHT for this section, per screenshot */}
                <span className="ml-4 flex-shrink-0">
                  <Plus
                    className={`h-5 w-5 text-primary/60 transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-primary/70 leading-relaxed font-light whitespace-pre-line text-base md:text-lg">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
