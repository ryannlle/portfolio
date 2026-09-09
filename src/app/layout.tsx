import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

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
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ryan Le",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/headshot.png", width: 1024, height: 682, alt: "Ryan Le" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/headshot.png"],
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
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
