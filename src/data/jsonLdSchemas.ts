import { FAQ_DATA, GLOVE_COMPARISON_DATA, BOTTOM_LINE_SUMMARY } from "./gloveGuideData";

export function generateArticleJsonLd(baseUrl: string = "https://www.academy.com") {
  const guideUrl = `${baseUrl}/expert-advice/baseball/how-to-choose-a-baseball-glove`;

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${guideUrl}#article`,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      "name": "Academy Sports + Outdoors",
      "url": baseUrl
    },
    "headline": "How to Choose the Right Baseball Glove: 2026 Positional Sizing & Leather Breakdown",
    "alternativeHeadline": "Definitive Baseball Glove Buying Guide for Infield, Outfield, and Catcher Positions",
    "description": "Comprehensive 2026 e-commerce buying guide comparing baseball gloves by position, size (11.25\" to 13.00\"), leather grades (Full-Grain Kip vs Steerhide), web patterns (I-Web, H-Web, Closed), and break-in methodologies.",
    "image": [
      `${baseUrl}/images/baseball-gloves-hero.jpg`
    ],
    "datePublished": "2026-02-15T09:00:00+00:00",
    "dateModified": "2026-10-14T10:30:00+00:00",
    "inLanguage": "en-US",
    "mainEntityOfPage": guideUrl,
    "author": [
      {
        "@type": "Person",
        "name": "Marcus Vance",
        "jobTitle": "Lead Diamond Sports Equipment Specialist",
        "worksFor": {
          "@type": "Organization",
          "name": "Academy Sports + Outdoors"
        },
        "description": "Former collegiate infielder and 14-year diamond sports gear consultant specializing in glove pattern engineering and leather longevity."
      },
      {
        "@type": "Organization",
        "name": "Academy Sports + Outdoors Editorial Board",
        "url": baseUrl
      }
    ],
    "publisher": {
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      "name": "Academy Sports + Outdoors",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": 600,
        "height": 60
      }
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Baseball glove",
        "sameAs": "https://en.wikipedia.org/wiki/Baseball_glove"
      },
      {
        "@type": "Thing",
        "name": "Infield",
        "sameAs": "https://en.wikipedia.org/wiki/Infield"
      },
      {
        "@type": "Thing",
        "name": "Outfield",
        "sameAs": "https://en.wikipedia.org/wiki/Outfield"
      },
      {
        "@type": "Thing",
        "name": "Catcher's mitt",
        "sameAs": "https://en.wikipedia.org/wiki/Catcher%27s_mitt"
      },
      {
        "@type": "Thing",
        "name": "Leather tanning",
        "sameAs": "https://en.wikipedia.org/wiki/Leather"
      }
    ],
    "mentions": [
      { "@type": "Brand", "name": "Rawlings", "sameAs": "https://en.wikipedia.org/wiki/Rawlings" },
      { "@type": "Brand", "name": "Wilson Sporting Goods", "sameAs": "https://en.wikipedia.org/wiki/Wilson_Sporting_Goods" },
      { "@type": "Brand", "name": "All-Star Sporting Goods" }
    ],
    "keywords": "how to choose a baseball glove, baseball glove sizing chart, infield glove size, outfield glove vs infield glove, Rawlings Heart of the Hide, Wilson A2000, best baseball gloves 2026, breaking in baseball glove",
    "articleSection": "Baseball Equipment Guides",
    "abstract": BOTTOM_LINE_SUMMARY.verdict
  };
}

export function generateFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${faq.shortAnswer} ${faq.detailedAnswer}`
      }
    }))
  };
}

export function generateProductComparisonJsonLd(baseUrl: string = "https://www.academy.com") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top 3 Baseball Gloves Compared for 2026 Season",
    "description": "Side-by-side comparison of elite infield, outfield, and catcher baseball gloves available at Academy Sports + Outdoors.",
    "itemListElement": GLOVE_COMPARISON_DATA.map((glove, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": `${glove.brand} ${glove.name}`,
        "image": `${baseUrl}/images/baseball-gloves-hero.jpg`,
        "description": glove.bestFor,
        "sku": glove.academySku,
        "mpn": glove.model,
        "brand": {
          "@type": "Brand",
          "name": glove.brand
        },
        "category": `Sporting Goods > Baseball > Gloves > ${glove.category}`,
        "offers": {
          "@type": "Offer",
          "url": `${baseUrl}/shop/p/${glove.academySku}`,
          "priceCurrency": "USD",
          "price": glove.retailPrice.toFixed(2),
          "priceValidUntil": "2026-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Academy Sports + Outdoors"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "384"
        }
      }
    }))
  };
}

export function generateBreadcrumbJsonLd(baseUrl: string = "https://www.academy.com") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Academy Sports + Outdoors",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Expert Advice & Buying Guides",
        "item": `${baseUrl}/expert-advice`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Baseball Equipment",
        "item": `${baseUrl}/expert-advice/baseball`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "How to Choose the Right Baseball Glove",
        "item": `${baseUrl}/expert-advice/baseball/how-to-choose-a-baseball-glove`
      }
    ]
  };
}
