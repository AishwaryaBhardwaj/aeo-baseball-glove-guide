"use client";

import React, { useState } from "react";
import { FAQ_DATA, FaqItem } from "@/data/gloveGuideData";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCopyFaq = (faq: FaqItem, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Q: ${faq.question}\nA: ${faq.shortAnswer} ${faq.detailedAnswer}\n(Source: Academy Sports + Outdoors Baseball Glove Guide)`;
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section 
      id="faq-section" 
      className="faq-wrapper"
      aria-labelledby="faq-main-heading"
    >
      <div className="faq-header">
        <span className="badge badge-gold">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
          </svg>
          Google AI Overview & FAQPage Hub
        </span>
        <h2 id="faq-main-heading" className="conversational-h2">
          Frequently Asked Questions About Choosing a Baseball Glove
        </h2>
        <p className="faq-subtitle">
          Direct, entity-rich answers structured for both prospective ballplayers and search answer engines (ChatGPT, Claude, Perplexity, Gemini).
        </p>
      </div>

      <div className="faq-list">
        {FAQ_DATA.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <article 
              key={index}
              className={`faq-card ${isOpen ? "open" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <header 
                className="faq-question-btn"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
              >
                <div className="q-title-group">
                  <span className="q-number">Q{index + 1}</span>
                  <h3 className="q-text" itemProp="name">
                    {faq.question}
                  </h3>
                </div>

                <div className="q-btn-actions">
                  <button
                    type="button"
                    onClick={(e) => handleCopyFaq(faq, index, e)}
                    className="faq-copy-btn"
                    title="Copy Answer Markdown"
                  >
                    {copiedIndex === index ? (
                      <span style={{ color: "#10b981" }}>Copied!</span>
                    ) : (
                      <span>Copy Q&A</span>
                    )}
                  </button>
                  <span className="accordion-icon">
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
              </header>

              {/* Body */}
              <div 
                className="faq-answer-panel"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="answer-content">
                  <div className="short-answer-callout">
                    <span className="quick-label">Direct AI Answer: </span>
                    <strong className="short-text">{faq.shortAnswer}</strong>
                  </div>

                  <p className="detailed-text" itemProp="text">
                    {faq.detailedAnswer}
                  </p>

                  <div className="entity-tags-row">
                    <span className="entity-prefix">Key Entities:</span>
                    {faq.entities.map((entity, eIdx) => (
                      <span key={eIdx} className="entity-tag">
                        {entity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <style jsx>{`
        .faq-wrapper {
          margin-bottom: 3.5rem;
        }
        .faq-header {
          margin-bottom: 1.5rem;
        }
        .conversational-h2 {
          font-size: 1.65rem;
          color: #ffffff;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .faq-subtitle {
          color: #94a3b8;
          font-size: 1rem;
          max-width: 800px;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .faq-card {
          background: rgba(13, 21, 39, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: border-color 0.2s, background 0.2s;
        }
        .faq-card:hover {
          border-color: rgba(14, 165, 233, 0.3);
        }
        .faq-card.open {
          border-color: rgba(14, 165, 233, 0.5);
          background: rgba(17, 27, 49, 0.95);
        }
        .faq-question-btn {
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          user-select: none;
        }
        .q-title-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex: 1;
        }
        .q-number {
          background: rgba(37, 99, 235, 0.2);
          color: #60a5fa;
          font-family: var(--font-family-mono);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .q-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.4;
        }
        .q-btn-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .faq-copy-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.3rem 0.65rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .faq-copy-btn:hover {
          background: rgba(14, 165, 233, 0.15);
          color: #38bdf8;
          border-color: #38bdf8;
        }
        .accordion-icon {
          color: #94a3b8;
          display: flex;
          align-items: center;
        }
        .faq-answer-panel {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 1.25rem 1.5rem;
          background: rgba(7, 11, 20, 0.5);
        }
        .short-answer-callout {
          background: rgba(14, 165, 233, 0.08);
          border-left: 3px solid #0ea5e9;
          padding: 0.75rem 1rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 1rem;
        }
        .quick-label {
          color: #38bdf8;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .short-text {
          color: #f8fafc;
          font-size: 0.98rem;
          line-height: 1.6;
        }
        .detailed-text {
          font-size: 0.98rem;
          color: #cbd5e1;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .entity-tags-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.25rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .entity-prefix {
          font-size: 0.75rem;
          color: #64748b;
          margin-right: 0.35rem;
        }
        @media (max-width: 640px) {
          .faq-question-btn {
            padding: 1rem;
          }
          .q-text {
            font-size: 0.95rem;
          }
          .faq-copy-btn {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
