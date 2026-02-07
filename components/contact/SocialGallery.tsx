"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const socialImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200",
    alt: "Mindful moments with flowers",
    caption: "Finding beauty in the small things. 🌿 #mindfulness",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200",
    alt: "Reading corner",
    caption: "Current reading list for grounding and growth. 📚",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1200",
    alt: "Coffee and journaling",
    caption: "Morning pages and coffee. The best way to start. ☕️",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1200",
    alt: "Nature walk",
    caption: "Reconnecting with nature this weekend. 🌲 #santamonica",
  },
];

export default function SocialGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedId === null) return;

      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "Escape") setSelectedId(null);
    },
    [selectedId],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  function navigate(newDirection: number) {
    if (selectedId === null) return;
    setDirection(newDirection);

    const currentIndex = socialImages.findIndex((img) => img.id === selectedId);
    let nextIndex = currentIndex + newDirection;

    // Loop navigation
    if (nextIndex < 0) nextIndex = socialImages.length - 1;
    if (nextIndex >= socialImages.length) nextIndex = 0;

    setSelectedId(socialImages[nextIndex].id);
  }

  const selectedImage = socialImages.find((img) => img.id === selectedId);

  return (
    <section className="py-24 px-6 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Find me on social.
          </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
            className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase hover:opacity-70 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            @DrMayaReynolds
          </a>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {socialImages.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`card-${image.id}`}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-sm"
              onClick={() => setSelectedId(image.id)}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-[#F9F7F2] w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedId && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4"
              onClick={() => setSelectedId(null)}
            >
              <button
                className="absolute top-6 right-6 text-[#F9F7F2] p-2 hover:bg-white/10 rounded-full transition-colors z-50"
                onClick={() => setSelectedId(null)}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 md:left-8 text-[#F9F7F2] p-3 hover:bg-white/10 rounded-full transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(-1);
                }}
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <button
                className="absolute right-4 md:right-8 text-[#F9F7F2] p-3 hover:bg-white/10 rounded-full transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(1);
                }}
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              {/* Main Image Container */}
              <motion.div
                layoutId={`card-${selectedImage.id}`}
                className="relative max-w-5xl w-full max-h-[85vh] aspect-[4/5] md:aspect-video bg-background rounded-sm overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={selectedImage.id}
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />

                {/* Caption Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 pt-12">
                  <p className="text-[#F9F7F2] text-lg font-light">
                    {selectedImage.caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
