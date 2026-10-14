import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  generateArticleJsonLd,
  generateFaqJsonLd,
  generateProductComparisonJsonLd,
  generateBreadcrumbJsonLd,
} from "@/data/jsonLdSchemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.academy.com";

export const metadata: Metadata = {
  title: "How to Choose the Right Baseball Glove | Academy Sports + Outdoors Buying Guide 2026",
  description:
    "Authoritative 2026 baseball glove buying guide by Academy Sports + Outdoors. Find the right glove size (11.25\"–13.0\"), leather grade (steerhide vs kip), web pattern (I-Web, H-Web, Trapeze), and break-in method for infield, outfield, and catcher positions.",
  keywords: [
    "how to choose a baseball glove",
    "baseball glove sizing chart",
    "infield glove size",
    "outfield glove vs infield glove",
    "Rawlings Heart of the Hide",
    "Wilson A2000",
    "best baseball gloves 2026",
    "breaking in a baseball glove",
    "catcher mitt size",
    "I-Web H-Web trapeze web baseball",
  ],
  authors: [
    { name: "Marcus Vance", url: `${BASE_URL}/expert-advice/team` },
    { name: "Academy Sports + Outdoors", url: BASE_URL },
  ],
  openGraph: {
    type: "article",
    locale: "en_US",
    url: `${BASE_URL}/expert-advice/baseball/how-to-choose-a-baseball-glove`,
    siteName: "Academy Sports + Outdoors",
    title: "How to Choose the Right Baseball Glove: 2026 Sizing & Leather Guide",
    description:
      "Position-by-position sizing matrix, leather grade hierarchy, web pattern breakdown, and break-in protocols for every level of competition.",
    images: [
      {
        url: `${BASE_URL}/images/baseball-gloves-hero.jpg`,
        width: 1280,
        height: 720,
        alt: "Three premium baseball gloves: infield, outfield, and catcher mitt",
      },
    ],
    publishedTime: "2026-02-15T09:00:00+00:00",
    modifiedTime: "2026-10-14T10:30:00+00:00",
    section: "Baseball Equipment Guides",
    authors: [`${BASE_URL}/expert-advice/team`],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose the Right Baseball Glove | Academy Sports Buying Guide 2026",
    description:
      "Size, leather, web, and break-in — complete guide for infield, outfield, and catcher gloves.",
    images: [`${BASE_URL}/images/baseball-gloves-hero.jpg`],
    site: "@AcademySports",
  },
  alternates: {
    canonical: `${BASE_URL}/expert-advice/baseball/how-to-choose-a-baseball-glove`,
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleSchema = generateArticleJsonLd(BASE_URL);
  const faqSchema = generateFaqJsonLd();
  const productComparisonSchema = generateProductComparisonJsonLd(BASE_URL);
  const breadcrumbSchema = generateBreadcrumbJsonLd(BASE_URL);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* === AEO / GEO: JSON-LD Structured Data Injection === */}
        {/* Schema 1: TechArticle with dense author, publisher, and entity metadata */}
        <Script
          id="schema-article"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {/* Schema 2: FAQPage — most critical for AI Overview extractions */}
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Schema 3: Product ItemList for LLM citation of specific SKUs */}
        <Script
          id="schema-products"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productComparisonSchema) }}
        />
        {/* Schema 4: BreadcrumbList for entity-graph path signals */}
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* LLM Crawler Discovery Links */}
        <link rel="llms-txt" href="/llms.txt" />
        <link rel="llms-full-txt" href="/llms-full.txt" />
      </head>
      <body>{children}</body>
    </html>
  );
}
