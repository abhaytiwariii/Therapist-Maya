"use client";

import { motion } from "framer-motion";

export default function BlogNewsletter() {
  return (
    // Theme: Using #8A9A5B (Moss Green) to match the screenshots and your CTA section
    <section className="py-24 px-6 lg:py-32 bg-[#35420c]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#F9F7F2]/40 p-8 md:p-16 lg:p-24 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F9F7F2]">
                Join the Community
              </h2>
              <p className="text-[#F9F7F2]/90 font-light text-lg leading-relaxed">
                Receive monthly insights on healing, balance, and intentional
                living delivered directly to your inbox.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow bg-[#F9F7F2] px-6 py-4 text-primary outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-primary/40"
              />
              <button
                type="button" // Prevent default submission for demo
                className="bg-primary text-[#F9F7F2] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary/80 transition-colors"
              >
                Sign Up
              </button>
            </form>

            <p className="text-[#F9F7F2]/60 text-xs tracking-wide">
              Your email is safe with me. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
