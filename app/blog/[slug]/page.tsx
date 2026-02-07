import React from "react";
import { blogPosts } from "@/app/blog/blogData";
import Image from "next/image";
// This function generates the static paths for export (optional but good practice)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Find the post matching the URL slug
  const post = blogPosts.find((p) => p.slug === params.slug);

  // 404 State for invalid slugs
  if (!post) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] flex flex-col items-center justify-center p-6 text-[#2C332A]">
        <h1 className="font-serif text-4xl mb-4">Post not found</h1>
        <a
          href="/blog"
          className="border-b border-[#2C332A] pb-1 hover:opacity-60 transition-opacity"
        >
          Return to Journal
        </a>
      </div>
    );
  }

  return (
    <main className="bg-[#F9F7F2] min-h-screen">
      <article>
        {/* HERO SECTION: Full-width immersive image */}
        <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden bg-[#EAEAEA]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to ensure aesthetic consistency */}
          <div className="absolute inset-0 bg-[#2C332A]/10 mix-blend-multiply" />
        </div>

        {/* CONTENT CONTAINER: Floating card effect overlapping the hero */}
        <div className="container mx-auto px-6 max-w-4xl -mt-20 relative z-10 mb-24">
          <div className="bg-[#F9F7F2] p-8 md:p-14 lg:p-20 shadow-sm border border-[#2C332A]/5">
            {/* Article Header */}
            <div className="mb-12 text-center space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#2C332A]/60 uppercase">
                {post.date}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#2C332A] leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Article Body */}
            {/* Custom styling to override default HTML element styles to match theme */}
            <div
              className="prose prose-lg prose-stone max-w-none mx-auto
              prose-headings:font-serif prose-headings:text-[#2C332A] prose-headings:font-normal prose-headings:mt-12 prose-headings:mb-6
              prose-p:text-[#2C332A]/80 prose-p:font-light prose-p:leading-relaxed prose-p:mb-6
              prose-strong:font-medium prose-strong:text-[#2C332A]
              prose-a:text-[#2C332A] prose-a:font-medium prose-a:underline prose-a:underline-offset-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer / Navigation */}
            <div className="mt-20 pt-10 border-t border-[#2C332A]/10 flex justify-between items-center">
              <a
                href="/blog"
                className="group flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#2C332A] uppercase hover:opacity-60 transition-opacity"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Back to Journal
              </a>

              {/* Optional: Share placeholder */}
              <button className="text-[#2C332A]/40 hover:text-[#2C332A] transition-colors text-sm font-serif italic">
                Share this post
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
