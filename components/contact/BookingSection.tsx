"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Free Consultation",
    duration: "15 min",
    type: "Phone / Video",
    price: "Free",
  },
  {
    title: "Initial Intake",
    duration: "50 min",
    type: "In-Person / Video",
    price: "$225",
  },
  {
    title: "Standard Session",
    duration: "50 min",
    type: "In-Person / Video",
    price: "$200",
  },
];

export default function BookingSection() {
  return (
    <section className="py-24 px-6 lg:py-32 bg-[#BDABEA]/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Begin Your Journey
          </h2>
          <p className="text-primary/70 text-lg font-light max-w-2xl mx-auto">
            Ready to get started? Select a service below to view my availability
            and request a time that works for you.
          </p>
        </motion.div>

        {/* Mock Booking Widget UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background rounded-sm shadow-xl overflow-hidden border border-primary/5 grid grid-cols-1 lg:grid-cols-3"
        >
          {/* Left Panel: Service Selection */}
          <div className="p-8 lg:p-10 lg:col-span-1 bg-primary text-background flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl mb-2">Select Service</h3>
              <p className="opacity-70 text-sm font-light mb-8">
                Choose appointment type
              </p>

              <div className="space-y-4">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="group cursor-pointer p-4 rounded-sm border border-background/20 hover:bg-background/10 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-lg">{s.title}</span>
                      {i === 0 && (
                        <CheckCircle2 className="w-5 h-5 opacity-80" />
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs opacity-70 uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {s.duration}
                      </span>
                      <span>•</span>
                      <span>{s.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-background/20">
              <p className="text-xs opacity-60 leading-relaxed">
                * Cancellation policy: Please provide 24 hours notice to avoid a
                cancellation fee.
              </p>
            </div>
          </div>

          {/* Right Panel: Mock Calendar Date Picker */}
          <div className="p-8 lg:p-10 lg:col-span-2 bg-white">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl text-primary">
                February 2026
              </h3>
              <div className="flex gap-2">
                <button className="p-2 border border-primary/20 rounded-full hover:bg-primary/5 disabled:opacity-30">
                  ←
                </button>
                <button className="p-2 border border-primary/20 rounded-full hover:bg-primary/5">
                  →
                </button>
              </div>
            </div>

            {/* Static Calendar Grid for Visuals */}
            <div className="grid grid-cols-7 gap-2 mb-8 text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <span
                  key={d}
                  className="text-xs font-bold text-primary/40 uppercase tracking-widest py-2"
                >
                  {d}
                </span>
              ))}
              {/* Empty days */}
              {[...Array(2)].map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {/* Days 1-30 */}
              {[...Array(28)].map((_, i) => {
                const day = i + 1;
                const isAvailable = [3, 5, 10, 12, 17, 19, 24, 26].includes(
                  day,
                ); // Mock available days
                return (
                  <div
                    key={day}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-full transition-all
                      ${
                        isAvailable
                          ? "bg-secondary/30 text-primary font-bold cursor-pointer hover:bg-primary hover:text-white"
                          : "text-primary/30"
                      }
                    `}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end">
              <button className="flex items-center gap-2 px-8 py-3 bg-primary text-background text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
