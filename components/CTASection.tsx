"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    
    <section className="py-24 px-6 lg:py-32 bg-[#8A9A5B]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center space-y-10"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F9F7F2]">
          Get started today.
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-[#F9F7F2]/90 font-light max-w-2xl mx-auto">
          Ready to take the first step towards a happier, healthier you? Contact
          me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>

        <div className="pt-4">
          <button className="group inline-flex items-center gap-2 px-10 py-4 border border-[#F9F7F2] text-xs font-bold tracking-[0.2em] text-[#F9F7F2] uppercase transition-all hover:bg-[#F9F7F2] hover:text-[#8A9A5B]">
            Get in Touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
