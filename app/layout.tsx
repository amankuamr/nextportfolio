import type { Metadata } from "next";
import { Geist, Geist_Mono, Metal_Mania } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SocialMenu from "@/components/custom/social-menu";
import SectionNav from "@/components/custom/section-nav";
import MusicPlayer from "@/components/custom/music-player";
import CustomCursor from "@/components/custom/custom-cursor";
import { MusicProvider } from "@/lib/music-context";
import GoogleAnalytics from "@/components/analytics/google-analytics";
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
  title: "Aman Kumar - Creative Developer | UI/UX Designer & Web Developer",
  description: "Explore the portfolio of Aman Kumar, a skilled UI/UX designer, web developer, and graphics designer. Discover innovative projects in user interface design, web development, and creative graphics.",
  keywords: ["Aman Kumar", "UI/UX Designer", "Web Developer", "Graphics Designer", "Portfolio", "Creative Developer", "Next.js", "React"],
  authors: [{ name: "Aman Kumar" }],
  creator: "Aman Kumar",
  publisher: "Aman Kumar",
  metadataBase: new URL('https://yourwebsite.com'), // Replace with actual URL
  openGraph: {
    title: "Aman Kumar - Creative Developer",
    description: "Showcasing UI/UX Design, Web Development, and Graphics Design projects by Aman Kumar.",
    url: "https://yourwebsite.com", // Replace with actual URL
    siteName: "Aman Kumar Portfolio",
    images: [
      {
        url: "/profile/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Aman Kumar - Creative Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kumar - Creative Developer",
    description: "Showcasing UI/UX Design, Web Development, and Graphics Design projects by Aman Kumar.",
    images: ["/profile/profile.jpeg"],
    creator: "@yourtwitterhandle", // Replace if applicable
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/profile/favicon_io/favicon.ico",
    shortcut: "/profile/favicon_io/favicon.ico",
    apple: "/profile/favicon_io/apple-touch-icon.png",
  },
  manifest: "/profile/favicon_io/site.webmanifest",
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
        <GoogleAnalytics />
        <SmoothScroll />
        <MusicProvider>
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
