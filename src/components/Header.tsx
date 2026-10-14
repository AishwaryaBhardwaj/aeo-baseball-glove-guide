"use client";

import React from "react";

interface HeaderProps {
  onOpenInspector: () => void;
}

export function Header({ onOpenInspector }: HeaderProps) {
  return (
    <header className="header-wrapper">
      <div className="header-topbar">
        <div className="container header-topbar-inner">
          <div className="topbar-brand">
            <span className="brand-dot"></span>
            <strong>ACADEMY SPORTS + OUTDOORS</strong>
            <span className="brand-divider">|</span>
            <span className="brand-lab">DIAMOND SPORTS LAB & BUYING GUIDES</span>
          </div>
          <div className="topbar-actions">
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="llm-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              llms.txt
            </a>
            <button 
              onClick={onOpenInspector}
              className="inspector-trigger-btn"
              title="Inspect AEO & GEO Schema, Perplexity Citation Card, and llms.txt"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>AEO Inspector</span>
              <span className="pill-pulse">GEO 100%</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container header-nav-inner">
          <div className="nav-breadcrumbs" aria-label="Breadcrumb">
            <a href="#guide-top" className="crumb-home">Academy</a>
            <span className="crumb-sep">/</span>
            <span className="crumb-section">Expert Buying Guides</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Baseball Glove Guide</span>
          </div>

          <div className="nav-badges">
            <span className="badge badge-cyan">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              AEO / GEO Verified
            </span>
            <span className="badge badge-gold">Updated for 2026 Season</span>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(7, 11, 20, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .header-topbar {
          background: rgba(13, 21, 39, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.78rem;
          padding: 0.45rem 0;
        }
        .header-topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .topbar-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          letter-spacing: 0.03em;
        }
        .topbar-brand strong {
          color: #f8fafc;
          font-weight: 700;
        }
        .brand-dot {
          width: 8px;
          height: 8px;
          background: #2563eb;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px #2563eb;
        }
        .brand-divider {
          color: #334155;
        }
        .brand-lab {
          color: #38bdf8;
          font-weight: 600;
        }
        .topbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .llm-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #94a3b8;
          font-family: var(--font-family-mono);
          font-size: 0.75rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s;
        }
        .llm-link:hover {
          color: #38bdf8;
          border-color: #38bdf8;
          background: rgba(14, 165, 233, 0.1);
        }
        .inspector-trigger-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(14, 165, 233, 0.2));
          border: 1px solid rgba(14, 165, 233, 0.4);
          color: #f8fafc;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .inspector-trigger-btn:hover {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(14, 165, 233, 0.4));
          border-color: #38bdf8;
          box-shadow: 0 0 12px rgba(14, 165, 233, 0.3);
        }
        .pill-pulse {
          background: #10b981;
          color: #042f2e;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.1rem 0.4rem;
          border-radius: 9999px;
          letter-spacing: 0.05em;
        }
        .header-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .nav-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          color: #64748b;
        }
        .crumb-home {
          color: #94a3b8;
        }
        .crumb-home:hover {
          color: #f8fafc;
        }
        .crumb-sep {
          color: #334155;
        }
        .crumb-section {
          color: #94a3b8;
        }
        .crumb-active {
          color: #38bdf8;
          font-weight: 500;
        }
        .nav-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (max-width: 640px) {
          .nav-badges {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
