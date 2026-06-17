import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AntiInspect from "@/components/anti-inspect";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "Portfolio of a Full-Stack Developer building scalable, secure & high-performance web applications.",
  keywords: ["Developer", "Full-Stack", "Portfolio", "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
  openGraph: {
    title: "Portfolio | Full-Stack Developer",
    description: "Portfolio of a Full-Stack Developer building scalable, secure & high-performance web applications.",
    type: "website",
    url: "https://portfolio.example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full-Stack Developer",
    description: "Portfolio of a Full-Stack Developer building scalable, secure & high-performance web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
        <AntiInspect />
        {children}
      </body>
    </html>
  );
}
