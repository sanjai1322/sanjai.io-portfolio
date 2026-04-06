import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjai.io"),
  title: "Sanjai K — Full Stack Developer & AI Engineer | sanjai.io",
  description:
    "Portfolio of Sanjai K — Full Stack Developer, AI Engineer, and Founder of Code Constellation. Building premium digital experiences.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "Code Constellation",
    "Next.js",
    "React",
    "Machine Learning",
    "SaaS",
    "Chennai",
  ],
  authors: [{ name: "Sanjai K" }],
  creator: "Sanjai K",
  openGraph: {
    title: "Sanjai K — Full Stack Developer & AI Engineer",
    description:
      "Portfolio of Sanjai K — Full Stack Developer, AI Engineer, and Founder of Code Constellation.",
    url: "https://sanjai.io",
    siteName: "sanjai.io",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanjai K — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjai K — Full Stack Developer & AI Engineer",
    description:
      "Portfolio of Sanjai K — Full Stack Developer, AI Engineer, and Founder of Code Constellation.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased overflow-x-hidden">
        <SmoothScroll>
          <ScrollProgress />
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
