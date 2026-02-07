"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/app/blog/blogData";
import Image from "next/image";

export default function BlogList() {
  return (
    <section className="py-16 px-6 lg:pb-32 bg-gray-400">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-start"
            >
              {/* Clickable Image Area */}
              <a
                href={`/blog/${post.slug}`}
                className="w-full block overflow-hidden rounded-sm mb-6"
              >
                <div className="relative aspect-[3/2] w-full bg-[#EAEAEA]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                </div>
              </a>

              {/* Date */}
              <span className="text-sm font-medium tracking-widest text-primary/60 mb-3">
                {post.date}
              </span>

              {/* Title */}
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 leading-tight group-hover:opacity-80 transition-opacity">
                {post.title}
              </h2>

              {/* Read More Link */}
              <a
                href={`/blog/${post.slug}`}
                className="inline-block text-primary font-bold text-sm tracking-[0.15em] uppercase border-b border-primary/30 pb-1 hover:border-primary transition-colors"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
