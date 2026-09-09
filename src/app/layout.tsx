import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import SocialRail from "@/components/SocialRail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ryanle.vercel.app";
const siteTitle = "Ryan Le | AI & Machine Learning";
const siteDescription =
  "Portfolio of Ryan Le, a machine learning and applied research student at San Diego State University who builds decision engines and forecasting pipelines for non-technical teams.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  // favicon + apple-touch icon come from src/app/icon.png and src/app/apple-icon.png
  // OG + Twitter image come from src/app/opengraph-image.tsx
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ryan Le",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorGlow />
        <SocialRail />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
