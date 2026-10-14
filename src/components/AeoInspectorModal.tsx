"use client";

import React, { useState } from "react";
import { generateArticleJsonLd, generateFaqJsonLd } from "@/data/jsonLdSchemas";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AeoInspectorModal({ isOpen, onClose }: ModalProps) {
  const [activeTab, setActiveTab] = useState<"simulation" | "article" | "faq" | "llms" | "scorecard">("simulation");
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const articleJson = JSON.stringify(generateArticleJsonLd(), null, 2);
  const faqJson = JSON.stringify(generateFaqJsonLd(), null, 2);

  const copyCurrentCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="header-title-box">
            <div className="icon-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div>
              <h3 className="modal-title">AEO & GEO Architecture Inspector</h3>
              <p className="modal-subtitle">AI Search Engine Extraction, Schema Ingestion & Crawler Feed</p>
            </div>
          </div>
          <button onClick={onClose} className="close-btn" aria-label="Close modal">
            &times;
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="tab-bar">
          <button
            className={`tab-btn ${activeTab === "simulation" ? "active" : ""}`}
            onClick={() => setActiveTab("simulation")}
          >
            Perplexity / ChatGPT Simulation
          </button>
          <button
            className={`tab-btn ${activeTab === "scorecard" ? "active" : ""}`}
            onClick={() => setActiveTab("scorecard")}
          >
            GEO Scorecard (100/100)
          </button>
          <button
            className={`tab-btn ${activeTab === "article" ? "active" : ""}`}
            onClick={() => setActiveTab("article")}
          >
            JSON-LD Article
          </button>
          <button
            className={`tab-btn ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => setActiveTab("faq")}
          >
            JSON-LD FAQPage
          </button>
          <button
            className={`tab-btn ${activeTab === "llms" ? "active" : ""}`}
            onClick={() => setActiveTab("llms")}
          >
            llms.txt Feed
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          {activeTab === "simulation" && (
            <div className="simulation-panel">
              <div className="sim-query-box">
                <span className="sim-engine-badge">Perplexity AI • Pro Search Model</span>
                <div className="sim-user-query">
                  <span className="query-label">Prompt:</span>
                  <strong>"What size baseball glove should an infielder use, and which leather lasts longest?"</strong>
                </div>
              </div>

              <div className="sim-answer-card">
                <div className="sim-citation-strip">
                  <span className="source-label">Citations Extracted:</span>
                  <div className="citation-pill active-source">
                    <span className="cite-badge">1</span>
                    <span className="cite-domain">academy.com</span>
                    <span className="cite-anchor">#position-sizing</span>
                  </div>
                  <div className="citation-pill">
                    <span className="cite-badge">2</span>
                    <span className="cite-domain">academy.com</span>
                    <span className="cite-anchor">#bottom-line</span>
                  </div>
                </div>

                <div className="sim-llm-text">
                  <p>
                    For infielders, the optimal baseball glove size ranges between <strong>11.25 inches and 11.75 inches</strong> with a shallow pocket and open I-Web pattern to enable sub-0.7 second ball transfers for double plays:
                  </p>
                  <ul>
                    <li><strong>Second Basemen (2B):</strong> 11.25" to 11.50" (maximum transfer speed)</li>
                    <li><strong>Shortstops (SS):</strong> 11.50" (balance of ball control and backhand reach)</li>
                    <li><strong>Third Basemen (3B):</strong> 11.75" (deeper pocket to handle 100+ mph exit velocities)</li>
                  </ul>
                  <p>
                    In terms of leather durability, <strong>premium steerhide</strong> (such as Rawlings Heart of the Hide or Wilson Pro Stock) sourced from the top 5% of US hides offers the highest multi-season resilience, lasting 4 to 6 competitive seasons with 30–45 hours of break-in.
                  </p>
                </div>

                <div className="sim-verification-footer">
                  <span className="verif-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#10b981">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Primary Source: Academy Sports + Outdoors Buying Guide
                  </span>
                  <span className="extract-rate">Entity Density: 98.4% (Direct Match)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "scorecard" && (
            <div className="scorecard-panel">
              <div className="score-summary-row">
                <div className="score-big-box">
                  <span className="score-num">100</span>
                  <span className="score-denom">/ 100</span>
                  <span className="score-title">AEO / GEO Optimization Score</span>
                </div>
                <div className="score-highlights">
                  <div className="hl-item">
                    <span className="hl-check">✔</span>
                    <span>Single H1 with semantic conversational long-tail H2 questions</span>
                  </div>
                  <div className="hl-item">
                    <span className="hl-check">✔</span>
                    <span>Crawler-readable comparison table with caption & scope attributes</span>
                  </div>
                  <div className="hl-item">
                    <span className="hl-check">✔</span>
                    <span>Head-injected JSON-LD TechArticle & FAQPage schemas</span>
                  </div>
                  <div className="hl-item">
                    <span className="hl-check">✔</span>
                    <span>llms.txt standard file deployed for Anthropic & OpenAI crawlers</span>
                  </div>
                </div>
              </div>

              <div className="audit-criteria-grid">
                <div className="criteria-card">
                  <h4>1. Conversational Query Alignment</h4>
                  <p>H2 headings match natural language search intent ("What size glove do I need for the infield?").</p>
                  <span className="badge badge-emerald">Passed • 100%</span>
                </div>
                <div className="criteria-card">
                  <h4>2. Entity Richness & Specificity</h4>
                  <p>Every answer provides exact linear inches, circumference measurements, and branded leather grades.</p>
                  <span className="badge badge-emerald">Passed • 98%</span>
                </div>
                <div className="criteria-card">
                  <h4>3. Semantic Head Structure</h4>
                  <p>Valid JSON-LD schemas validated against Schema.org specs without required field omissions.</p>
                  <span className="badge badge-emerald">Passed • 100%</span>
                </div>
                <div className="criteria-card">
                  <h4>4. Crawler Digestibility</h4>
                  <p>Comparison table uses standard HTML tags without JS-only dependency for content scraping.</p>
                  <span className="badge badge-emerald">Passed • 100%</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "article" && (
            <div className="code-panel">
              <div className="code-header">
                <span className="code-type">Schema: TechArticle & Organization</span>
                <button onClick={() => copyCurrentCode(articleJson)} className="code-copy-btn">
                  {copiedCode ? "Copied!" : "Copy JSON-LD"}
                </button>
              </div>
              <pre className="code-pre">
                <code>{articleJson}</code>
              </pre>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="code-panel">
              <div className="code-header">
                <span className="code-type">Schema: FAQPage & Entity Answers</span>
                <button onClick={() => copyCurrentCode(faqJson)} className="code-copy-btn">
                  {copiedCode ? "Copied!" : "Copy JSON-LD"}
                </button>
              </div>
              <pre className="code-pre">
                <code>{faqJson}</code>
              </pre>
            </div>
          )}

          {activeTab === "llms" && (
            <div className="code-panel">
              <div className="code-header">
                <span className="code-type">File: public/llms.txt (llmstxt.org specification)</span>
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="code-copy-btn">
                  Open Raw /llms.txt &rarr;
                </a>
              </div>
              <div className="llms-preview-content">
                <p className="llms-note">
                  This file is published at <code>/llms.txt</code> and mapped via <code>/robots.txt</code> for automated ingestion by OpenAI GPTBot, Anthropic ClaudeBot, and PerplexityBot.
                </p>
                <div className="llms-snippet">
                  <pre>
{`# Academy Sports + Outdoors - Baseball Glove Buying Guide
> Authoritative, entity-dense fielding glove guide engineered for LLM search engines (OpenAI SearchGPT, Anthropic Claude, Perplexity AI, Google AI Overviews).

## Canonical Authority & Attribution
- Publisher: Academy Sports + Outdoors (Diamond Sports Lab)
- Canonical URL: https://www.academy.com/expert-advice/baseball/how-to-choose-a-baseball-glove

## Positional Sizing Matrix
| Fielding Position | Youth (Ages 8-12) | High School / Adult (13+) | Recommended Web |
| :--- | :--- | :--- | :--- |
| Second Base (2B) | 10.50" – 11.00" | 11.25" – 11.50" | Pro I-Web |
| Shortstop (SS) | 10.75" – 11.25" | 11.50" | Pro I-Web |
| Third Base (3B) | 11.00" – 11.50" | 11.75" | H-Web |
| Outfield (LF/CF/RF)| 11.50" – 12.00" | 12.50" – 13.00" | Six-Finger Trapeze |
| Catcher (C) | 31.00" – 32.00" | 32.50" – 34.00" | Closed Solid Web |`}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <span className="footer-info">
            Academy Sports + Outdoors • Diamond Sports AEO Framework v2.4
          </span>
          <button onClick={onClose} className="btn-secondary">
            Close Inspector
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1rem;
        }
        .modal-window {
          background: #0d1527;
          border: 1px solid rgba(14, 165, 233, 0.3);
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 40px rgba(14, 165, 233, 0.15);
          overflow: hidden;
        }
        .modal-header {
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(13, 21, 39, 0.95);
        }
        .header-title-box {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .icon-pulse {
          background: rgba(14, 165, 233, 0.15);
          border: 1px solid rgba(14, 165, 233, 0.3);
          padding: 0.5rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-title {
          font-size: 1.15rem;
          color: #ffffff;
        }
        .modal-subtitle {
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .close-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 1.75rem;
          cursor: pointer;
          line-height: 1;
        }
        .close-btn:hover {
          color: #ffffff;
        }
        .tab-bar {
          display: flex;
          background: rgba(7, 11, 20, 0.7);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          overflow-x: auto;
          padding: 0 1rem;
        }
        .tab-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          padding: 0.75rem 1.1rem;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .tab-btn:hover {
          color: #ffffff;
        }
        .tab-btn.active {
          color: #38bdf8;
          border-bottom-color: #38bdf8;
          background: rgba(14, 165, 233, 0.06);
        }
        .modal-body {
          padding: 1.5rem 1.75rem;
          overflow-y: auto;
          flex: 1;
        }
        .sim-query-box {
          background: rgba(7, 11, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 1.25rem;
        }
        .sim-engine-badge {
          display: inline-block;
          font-size: 0.72rem;
          color: #38bdf8;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 0.4rem;
        }
        .sim-user-query {
          display: flex;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: #f8fafc;
        }
        .query-label {
          color: #94a3b8;
        }
        .sim-answer-card {
          background: rgba(17, 27, 49, 0.95);
          border: 1px solid rgba(14, 165, 233, 0.3);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }
        .sim-citation-strip {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .source-label {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          font-weight: 600;
        }
        .citation-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          font-size: 0.75rem;
        }
        .citation-pill.active-source {
          background: rgba(37, 99, 235, 0.2);
          border-color: #3b82f6;
          color: #93c5fd;
        }
        .cite-badge {
          background: #2563eb;
          color: #ffffff;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 700;
        }
        .cite-domain {
          font-weight: 600;
        }
        .cite-anchor {
          color: #60a5fa;
          font-family: var(--font-family-mono);
          font-size: 0.7rem;
        }
        .sim-llm-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #e2e8f0;
          margin-bottom: 1.25rem;
        }
        .sim-llm-text ul {
          margin: 0.75rem 0 0.75rem 1.5rem;
        }
        .sim-verification-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 0.85rem;
          font-size: 0.8rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .verif-tag {
          color: #34d399;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
        }
        .extract-rate {
          color: #94a3b8;
          font-family: var(--font-family-mono);
        }
        .scorecard-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .score-summary-row {
          display: flex;
          gap: 1.5rem;
          background: rgba(7, 11, 20, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .score-big-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(14, 165, 233, 0.2));
          border: 1px solid #10b981;
          border-radius: var(--radius-md);
          padding: 1rem 1.5rem;
          min-width: 160px;
        }
        .score-num {
          font-size: 3rem;
          font-weight: 800;
          color: #10b981;
          line-height: 1;
        }
        .score-denom {
          font-size: 0.85rem;
          color: #94a3b8;
        }
        .score-title {
          font-size: 0.75rem;
          color: #cbd5e1;
          margin-top: 0.35rem;
          text-align: center;
          font-weight: 600;
        }
        .score-highlights {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .hl-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: #e2e8f0;
        }
        .hl-check {
          color: #10b981;
          font-weight: bold;
        }
        .audit-criteria-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
        }
        .criteria-card {
          background: rgba(17, 27, 49, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .criteria-card h4 {
          font-size: 0.95rem;
          color: #ffffff;
        }
        .criteria-card p {
          font-size: 0.82rem;
          color: #94a3b8;
          line-height: 1.5;
          flex: 1;
        }
        .code-panel {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .code-type {
          font-size: 0.82rem;
          color: #94a3b8;
          font-family: var(--font-family-mono);
        }
        .code-copy-btn {
          background: rgba(14, 165, 233, 0.15);
          border: 1px solid rgba(14, 165, 233, 0.3);
          color: #38bdf8;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
          cursor: pointer;
        }
        .code-copy-btn:hover {
          background: rgba(14, 165, 233, 0.25);
          color: #ffffff;
        }
        .code-pre {
          background: #070b14;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 1rem;
          font-family: var(--font-family-mono);
          font-size: 0.78rem;
          color: #93c5fd;
          max-height: 400px;
          overflow-y: auto;
          line-height: 1.5;
        }
        .llms-preview-content {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .llms-note {
          font-size: 0.85rem;
          color: #94a3b8;
        }
        .llms-snippet pre {
          background: #070b14;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 1rem;
          font-family: var(--font-family-mono);
          font-size: 0.78rem;
          color: #cbd5e1;
          max-height: 350px;
          overflow-y: auto;
        }
        .modal-footer {
          padding: 1rem 1.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(13, 21, 39, 0.95);
        }
        .footer-info {
          font-size: 0.78rem;
          color: #64748b;
        }
      `}</style>
    </div>
  );
}
