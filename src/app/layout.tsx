import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import StarBackground from "../components/StarBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal Saini | AI/ML Engineer",
  description: "AI/ML Engineer passionate about Deep Learning and AI Agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased min-h-screen bg-[#000000] text-white flex flex-col items-center selection:bg-[#232326] selection:text-white`}
      >
        <StarBackground />
        <div className="w-full max-w-[950px] space-y-4 min-h-screen border-l border-r border-dashed border-[#232326] px-4 py-14 sm:px-8 text-base">
          {children}
        </div>
      </body>
    </html>
  );
}
