import type { Metadata } from "next";
import { Geist, Geist_Mono, Metal_Mania } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SocialMenu from "@/components/custom/social-menu";
import SectionNav from "@/components/section-nav";
import MusicPlayer from "@/components/custom/music-player";
import CustomCursor from "@/components/custom/custom-cursor";
import { MusicProvider } from "@/lib/music-context";
import SmoothScroll from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metalMania = Metal_Mania({
  variable: "--font-metal-mania",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Aman Kumar - Creative Developer",
  description: "Showcasing UI/UX Design, Web Development, and Graphics Design projects",
  icons: {
    icon: "/profile/profile.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${metalMania.variable} antialiased bg-white text-black overflow-x-hidden`}
      >
        <MusicProvider>
          <SmoothScroll />
          <CustomCursor />
          <Navbar />
          <SocialMenu />
          <SectionNav />
          <MusicPlayer />
          <main className="pt-16 lg:pt-0 min-h-screen">
            {children}
          </main>
        </MusicProvider>
      </body>
    </html>
  );
}
