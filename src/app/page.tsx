"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { TableOfContents } from "@/components/TableOfContents";
import { ArticleContent } from "@/components/ArticleContent";
import { AeoInspectorModal } from "@/components/AeoInspectorModal";

export default function BuyingGuidePage() {
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);

  return (
    <>
      {/* Sticky Header with AEO inspector trigger */}
      <Header onOpenInspector={() => setIsInspectorOpen(true)} />

      {/* Page Body */}
      <div className="page-wrapper">
        <div className="container">
          {/* === TWO-COLUMN LAYOUT: TOC (sticky left) + Article (right) === */}
          <div className="layout-grid">

            {/* LEFT: Sticky Table of Contents */}
            <aside className="sidebar-col" aria-label="Guide Navigation">
              <TableOfContents />
            </aside>

            {/* RIGHT: Main Editorial Article */}
            <main className="article-col" id="main-content" role="main">
              <ArticleContent />
            </main>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="footer-dot"></span>
            <strong>Academy Sports + Outdoors</strong>
            <span className="footer-sep">|</span>
            <span>Diamond Sports Equipment Lab</span>
          </div>

          <div className="footer-links">
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer">llms.txt</a>
            <a href="/llms-full.txt" target="_blank" rel="noopener noreferrer">llms-full.txt</a>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer">robots.txt</a>
            <button
              onClick={() => setIsInspectorOpen(true)}
              className="footer-inspector-link"
            >
              AEO Inspector
            </button>
          </div>

          <div className="footer-legal">
            <p>
              Content structured for AI search engine extraction (AEO/GEO).
              JSON-LD schemas: <code>TechArticle</code>, <code>FAQPage</code>, <code>ItemList</code>, <code>BreadcrumbList</code>.
            </p>
            <p>© 2026 Academy Sports + Outdoors. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AEO Inspector Overlay Modal */}
      <AeoInspectorModal
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
      />

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          padding: 2.5rem 0 4rem;
        }
        .layout-grid {
          display: grid;
          grid-template-columns: 270px 1fr;
          gap: 3rem;
          align-items: start;
        }
        .sidebar-col {
          /* sticky positioning handled in TableOfContents */
          min-width: 0;
        }
        .article-col {
          min-width: 0;
        }
        .site-footer {
          background: rgba(13, 21, 39, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          padding: 2.5rem 0;
        }
        .footer-inner {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          color: #94a3b8;
          font-size: 0.9rem;
        }
        .footer-brand strong {
          color: #f8fafc;
          font-weight: 700;
        }
        .footer-dot {
          width: 8px;
          height: 8px;
          background: #2563eb;
          border-radius: 50%;
          box-shadow: 0 0 8px #2563eb;
          flex-shrink: 0;
        }
        .footer-sep {
          color: #334155;
        }
        .footer-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.85rem;
        }
        .footer-links a {
          color: #64748b;
          font-family: var(--font-family-mono);
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #38bdf8;
        }
        .footer-inspector-link {
          background: none;
          border: none;
          color: #64748b;
          font-size: 0.85rem;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s;
        }
        .footer-inspector-link:hover {
          color: #38bdf8;
        }
        .footer-legal {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .footer-legal p {
          font-size: 0.78rem;
          color: #64748b;
          line-height: 1.5;
        }
        .footer-legal code {
          color: #38bdf8;
          background: rgba(14, 165, 233, 0.1);
          padding: 0.1rem 0.35rem;
          border-radius: 3px;
          font-size: 0.72rem;
        }

        /* ── RESPONSIVE LAYOUT ── */
        @media (max-width: 1024px) {
          .layout-grid {
            grid-template-columns: 1fr;
          }
          .sidebar-col {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .page-wrapper {
            padding: 1.5rem 0 3rem;
          }
        }
      `}</style>
    </>
  );
}
