import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import BlogNewsletter from "@/components/blog/BlogNewsLetter";

export default function BlogPage() {
  return (
    <main className="bg-background min-h-screen">
      <BlogHero />
      <BlogList />
      <BlogNewsletter />
    </main>
  );
}
