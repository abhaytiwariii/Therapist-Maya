'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Do you take insurance?',
    answer:
      'I am an out-of-network provider. I can provide you with a superbill to submit to your insurance for potential reimbursement.',
  },
  {
    question: 'What are your rates?',
    answer:
      'Individual therapy sessions are $200 for 50 minutes. I offer a limited number of sliding scale spots for those with financial need.',
  },
  {
    question: 'Do you have any openings?',
    answer:
      'I typically have a waitlist, but availability changes regularly. Please reach out to inquire about current openings.',
  },
];

export default function FAQSection() {
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
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="w-64 h-80 rounded-t-full overflow-hidden bg-stone-200">
            <img
              src="https://images.pexels.com/photos/1030945/pexels-photo-1030945.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Lavender"
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
          <h2 className="text-4xl font-light text-stone-900">FAQs</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-stone-300 pb-4"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg text-stone-900">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-stone-700 transition-transform ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-stone-700 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
