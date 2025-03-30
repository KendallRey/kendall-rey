import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animation.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KR Mozo | A Developer",
  description: "Front-End Developer specializing in web. Passionate about crafting user-friendly interfaces and scalable solutions.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  experience: React.ReactNode;
  projects: React.ReactNode;
}>

export default function RootLayout({
  children,
  experience,
  projects,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col gap-[32px] row-start-2">
          {children}
          {experience}
          {projects}
        </main>
      </body>
    </html>
  );
}
