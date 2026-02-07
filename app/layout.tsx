import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Clinical Psychologist",
  description: "Compassionate therapy for adults in Santa Monica, CA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Applying font classes and background color directly */}
      <body
        className="font-sans antialiased bg-[#F9F7F2]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
