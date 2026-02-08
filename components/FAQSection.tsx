"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "Do you take insurance?",
    answer:
      "I am an out-of-network provider, which means I do not bill insurance directly. However, I can provide you with a monthly superbill to submit to your insurance company for potential reimbursement.",
  },
  {
    question: "What are your rates?",
    answer:
      "My standard fee is $225 for a 50-minute individual session. I offer a limited number of sliding scale spots for those with financial need—please inquire during our consultation.",
  },
  {
    question: "Do you have any openings?",
    answer:
      "I typically have a waitlist for evening slots, but I often have daytime availability. The best way to find out is to schedule a free 15-minute consultation.",
  },
  {
    question: "Do you offer in-person sessions?",
    answer:
      "Yes, I see clients in-person at my Santa Monica office on Tuesdays and Thursdays. I also offer secure telehealth sessions for clients located anywhere in California.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-[450px] lg:h-[600px] rounded-t-full overflow-hidden shadow-sm bg-[#EAEAEA]">
              <Image
                src="/FAQS.webp"
                alt="Dried floral arrangement in therapy office"
                className="h-full w-full object-cover transition-transform duration-&lsqb;2000ms&rsqb; hover:scale-105"
                fill
              />
            </div>
          </motion.div>

          {/* FAQ CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <h2 className="font-serif text-4xl text-primary md:text-5xl lg:text-6xl">
              FAQs
            </h2>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-primary/20 last:border-0"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-start gap-6 py-6 text-left group transition-colors hover:bg-primary/5 px-2 rounded-sm"
                  >
                    {/* Plus Icon on LEFT to match Lilac Template */}
                    <span className="mt-1 flex-shrink-0">
                      <Plus
                        className={`h-5 w-5 text-primary/60 transition-transform duration-300 ${
                          openIndex === index ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </span>

                    <span className="text-xl md:text-2xl font-serif text-primary group-hover:text-primary/80 transition-colors">
                      {faq.question}
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
                        <p className="pb-8 pl-14 text-primary/70 leading-relaxed font-light text-lg">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
