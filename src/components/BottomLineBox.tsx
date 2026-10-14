"use client";

import React, { useState } from "react";
import { BOTTOM_LINE_SUMMARY } from "@/data/gloveGuideData";

export function BottomLineBox() {
  const [copied, setCopied] = useState(false);

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(BOTTOM_LINE_SUMMARY.aiCitationQuote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <aside 
      id="bottom-line"
      className="bottom-line-card"
      aria-labelledby="bottom-line-heading"
    >
      <div className="card-accent-bar"></div>
      
      <div className="card-header">
        <div className="header-left">
          <span className="badge badge-gold">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            AI Search Ready • Direct Extraction
          </span>
          <h2 id="bottom-line-heading" className="conversational-h2">
            What is the bottom line recommendation when buying a baseball glove?
          </h2>
        </div>

        <button 
          onClick={handleCopyCitation}
          className="cite-btn copy-quote-btn"
          title="Copy markdown quote formatted for AI research citations"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ color: "#10b981" }}>Citation Copied!</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>Copy AI Citation</span>
            </>
          )}
        </button>
      </div>

      <div className="verdict-body">
        <p className="verdict-paragraph">
          <strong className="verdict-highlight">The 60-Second Verdict: </strong>
          {BOTTOM_LINE_SUMMARY.verdict}
        </p>
      </div>

      {/* Scannable Spec Matrix Grid */}
      <div className="specs-grid">
        {BOTTOM_LINE_SUMMARY.quickSpecs.map((spec, index) => (
          <div key={index} className="spec-pill">
            <span className="spec-label">{spec.label}</span>
            <span className="spec-val">{spec.value}</span>
          </div>
        ))}
      </div>

      <div className="card-footer">
        <div className="entity-tags-group">
          <span className="tag-label">AEO Entities:</span>
          <span className="entity-tag">@type: TechArticle</span>
          <span className="entity-tag">Infield: 11.25"–11.75"</span>
          <span className="entity-tag">Outfield: 12.5"–13.0"</span>
          <span className="entity-tag">Catcher: 33.5"</span>
          <span className="entity-tag">Heart of the Hide</span>
          <span className="entity-tag">Wilson A2000</span>
        </div>
        <div className="source-stamp">
          Source: Academy Sports + Outdoors Lab Standard
        </div>
      </div>

      <style jsx>{`
        .bottom-line-card {
          position: relative;
          background: linear-gradient(145deg, rgba(17, 24, 39, 0.95), rgba(15, 23, 42, 0.95));
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
          margin-bottom: 2.5rem;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 25px rgba(245, 158, 11, 0.08);
          overflow: hidden;
        }
        .card-accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f59e0b, #eab308, #3b82f6);
        }
        .card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .header-left {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }
        .conversational-h2 {
          font-size: 1.45rem;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.35;
        }
        .copy-quote-btn {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #fbbf24;
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.2s;
        }
        .copy-quote-btn:hover {
          background: rgba(245, 158, 11, 0.22);
          border-color: #fbbf24;
          color: #ffffff;
          transform: translateY(-1px);
        }
        .verdict-body {
          margin-bottom: 1.5rem;
        }
        .verdict-paragraph {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #e2e8f0;
        }
        .verdict-highlight {
          color: #fbbf24;
          font-weight: 700;
        }
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .spec-pill {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .spec-pill:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(245, 158, 11, 0.4);
        }
        .spec-label {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-weight: 600;
        }
        .spec-val {
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 700;
          font-family: var(--font-family-mono);
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1rem;
          flex-wrap: wrap;
          gap: 0.75rem;
          font-size: 0.8rem;
        }
        .entity-tags-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.25rem;
        }
        .tag-label {
          color: #64748b;
          font-size: 0.75rem;
          margin-right: 0.25rem;
        }
        .source-stamp {
          color: #64748b;
          font-style: italic;
          font-size: 0.78rem;
        }
        @media (max-width: 768px) {
          .bottom-line-card {
            padding: 1.25rem 1.25rem;
          }
          .conversational-h2 {
            font-size: 1.25rem;
          }
          .specs-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </aside>
  );
}
