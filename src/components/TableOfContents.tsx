"use client";

import React, { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
  badge?: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "bottom-line", label: "Bottom Line Verdict", badge: "AI Summary" },
  { id: "interactive-calculator", label: "Glove Sizing Calculator", badge: "Interactive" },
  { id: "position-sizing", label: "Sizing by Fielding Position" },
  { id: "leather-materials", label: "Leather Grades & Durability" },
  { id: "comparison-matrix", label: "Top 3 Comparison Matrix", badge: "AEO Table" },
  { id: "web-patterns", label: "Open vs. Closed Web Styles" },
  { id: "proper-fit", label: "How Gloves Should Fit" },
  { id: "break-in-guide", label: "Break-In Dos and Don'ts" },
  { id: "faq-section", label: "Frequently Asked Questions", badge: "FAQPage" },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("bottom-line");
  const [readProgress, setReadProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setReadProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Find active section
      const scrollPosition = window.scrollY + 140;
      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const item = TOC_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="toc-container" aria-label="Table of Contents">
      <div className="toc-card">
        <div className="toc-header">
          <div className="toc-title-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span className="toc-heading">Table of Contents</span>
          </div>
          <span className="toc-reading-time">8 min read</span>
        </div>

        {/* Scroll Progress Bar */}
        <div className="progress-track" title={`Reading progress: ${Math.round(readProgress)}%`}>
          <div className="progress-fill" style={{ width: `${readProgress}%` }}></div>
        </div>

        <ul className="toc-list">
          {TOC_ITEMS.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="toc-item">
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`toc-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className="toc-index">{index + 1}.</span>
                  <span className="toc-label">{item.label}</span>
                  {item.badge && (
                    <span className={`toc-badge ${item.badge === "Interactive" ? "badge-inter" : "badge-ai"}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="toc-footer">
          <div className="aeo-crawler-note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Crawler Optimized: Semantic H2 / JSON-LD</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .toc-container {
          position: sticky;
          top: 100px;
          width: 100%;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
        }
        .toc-card {
          background: rgba(13, 21, 39, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }
        .toc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .toc-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .toc-heading {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .toc-reading-time {
          font-size: 0.75rem;
          color: #94a3b8;
          font-family: var(--font-family-mono);
        }
        .progress-track {
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          transition: width 0.1s linear;
        }
        .toc-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .toc-item {
          width: 100%;
        }
        .toc-link {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.65rem;
          border-radius: var(--radius-md);
          background: transparent;
          border: 1px solid transparent;
          color: #94a3b8;
          font-size: 0.85rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .toc-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.04);
        }
        .toc-link.active {
          color: #38bdf8;
          background: rgba(14, 165, 233, 0.12);
          border-color: rgba(14, 165, 233, 0.3);
          font-weight: 600;
        }
        .toc-index {
          font-size: 0.75rem;
          font-family: var(--font-family-mono);
          opacity: 0.6;
        }
        .toc-label {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .toc-badge {
          font-size: 0.65rem;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.03em;
        }
        .badge-ai {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        .badge-inter {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .toc-footer {
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .aeo-crawler-note {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.73rem;
          color: #94a3b8;
        }
      `}</style>
    </nav>
  );
}
