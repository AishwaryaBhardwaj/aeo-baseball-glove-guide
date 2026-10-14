"use client";

import React, { useState } from "react";
import { GLOVE_COMPARISON_DATA, GloveComparisonItem } from "@/data/gloveGuideData";

export function ComparisonMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedTable, setCopiedTable] = useState(false);

  const filteredGloves = selectedCategory === "All"
    ? GLOVE_COMPARISON_DATA
    : GLOVE_COMPARISON_DATA.filter((g) => g.category === selectedCategory);

  const handleCopyMarkdown = () => {
    let md = "| Model | Position | Size | Material & Leather | Web & Pocket | Break-In Time | Price Tier |\n";
    md += "| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n";
    GLOVE_COMPARISON_DATA.forEach((g) => {
      md += `| **${g.brand} ${g.name}** | ${g.primaryPosition} | ${g.recommendedSizeRange} | ${g.material} (${g.leatherGrade}) | ${g.webType} / ${g.pocketDepth} | ${g.breakInTime} (${g.factoryBreakIn}) | ${g.priceTier} ($${g.retailPrice}) |\n`;
    });
    navigator.clipboard.writeText(md);
    setCopiedTable(true);
    setTimeout(() => setCopiedTable(false), 2000);
  };

  return (
    <section 
      id="comparison-matrix" 
      className="comparison-section"
      aria-labelledby="comparison-heading"
    >
      <div className="section-header-row">
        <div>
          <span className="badge badge-blue">AEO Structured Entity Matrix</span>
          <h2 id="comparison-heading" className="conversational-h2">
            Which baseball glove type is best for your playing style? (Comparison Matrix)
          </h2>
          <p className="section-subtext">
            Compare elite infield, outfield, and catcher patterns by material composition, sizing specifications, pocket mechanics, and price tiers for the 2026 baseball season.
          </p>
        </div>

        <button 
          onClick={handleCopyMarkdown}
          className="cite-btn copy-table-btn"
          title="Copy markdown table for LLM prompts and citations"
        >
          {copiedTable ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ color: "#10b981" }}>Markdown Copied!</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
              <span>Copy Markdown Table</span>
            </>
          )}
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="filter-bar" role="tablist" aria-label="Glove Category Filter">
        {["All", "Infield", "Outfield", "Catcher"].map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={selectedCategory === cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === "All" ? "View All 3 Categories" : `${cat} Gloves`}
          </button>
        ))}
      </div>

      {/* Semantic Crawler-Readable HTML Table */}
      <div className="table-responsive-wrapper">
        <table className="crawler-comparison-table" itemScope itemType="https://schema.org/Table">
          <caption className="sr-only">
            Top 3 Baseball Gloves Compared by Material, Position, and Price Tier for 2026
          </caption>
          <thead>
            <tr>
              <th scope="col" className="col-model">Glove Model & Tier</th>
              <th scope="col" className="col-pos">Fielding Position & Size</th>
              <th scope="col" className="col-mat">Material & Leather Grade</th>
              <th scope="col" className="col-web">Webbing & Pocket Depth</th>
              <th scope="col" className="col-break">Break-In Duration</th>
              <th scope="col" className="col-price">Price Tier & SKU</th>
            </tr>
          </thead>
          <tbody>
            {filteredGloves.map((glove: GloveComparisonItem) => (
              <tr 
                key={glove.id} 
                className="glove-row"
                itemScope 
                itemType="https://schema.org/Product"
                data-category={glove.category}
                data-material={glove.material}
                data-price={glove.retailPrice}
              >
                {/* Model Column */}
                <th scope="row" className="cell-model">
                  <div className="model-cell-inner">
                    <span className="glove-badge">{glove.badge}</span>
                    <strong className="glove-title" itemProp="name">
                      {glove.brand} {glove.name}
                    </strong>
                    <span className="glove-model-code">Model #{glove.model}</span>
                    <span className="glove-category-tag">{glove.category} Division</span>
                  </div>
                </th>

                {/* Position & Size */}
                <td className="cell-pos">
                  <div className="cell-data">
                    <strong className="data-primary">{glove.primaryPosition}</strong>
                    <span className="data-secondary">Recommended: <strong>{glove.recommendedSizeRange}</strong></span>
                  </div>
                </td>

                {/* Material & Leather */}
                <td className="cell-mat">
                  <div className="cell-data">
                    <strong className="data-primary" itemProp="material">{glove.material}</strong>
                    <span className="data-secondary">{glove.leatherGrade}</span>
                  </div>
                </td>

                {/* Web & Pocket */}
                <td className="cell-web">
                  <div className="cell-data">
                    <strong className="data-primary">{glove.webType}</strong>
                    <span className="data-secondary">{glove.pocketDepth}</span>
                  </div>
                </td>

                {/* Break-In */}
                <td className="cell-break">
                  <div className="cell-data">
                    <strong className="data-primary">{glove.breakInTime}</strong>
                    <span className="data-secondary">Ratio: {glove.factoryBreakIn}</span>
                    <div className="break-in-bar-container">
                      <div 
                        className="break-in-bar-fill" 
                        style={{ width: glove.playerBreakInNeeded }}
                        title={`${glove.playerBreakInNeeded} player break-in required`}
                      ></div>
                    </div>
                  </div>
                </td>

                {/* Price Tier & SKU */}
                <td className="cell-price">
                  <div className="cell-data">
                    <span className="tier-tag">{glove.priceTier}</span>
                    <strong className="price-tag" itemProp="price">
                      ${glove.retailPrice.toFixed(2)}
                    </strong>
                    <span className="sku-tag" itemProp="sku">SKU: {glove.academySku}</span>
                    <a 
                      href={`#sku-${glove.academySku}`} 
                      className="shop-link"
                      title={`View ${glove.brand} at Academy`}
                    >
                      Check Inventory &rarr;
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* High-Level Comparison Cards for Tactical Mobile View */}
      <div className="mobile-tactical-cards">
        {filteredGloves.map((glove) => (
          <div key={glove.id} className="tactical-card glass-panel">
            <div className="tactical-header">
              <span className="badge badge-cyan">{glove.category} Pick</span>
              <span className="price-bold">${glove.retailPrice.toFixed(2)}</span>
            </div>
            <h3 className="tactical-title">{glove.brand} {glove.name}</h3>
            <p className="tactical-best-for">
              <strong>Best For:</strong> {glove.bestFor}
            </p>
            <div className="tactical-specs">
              <div className="spec-row">
                <span className="spec-name">Size Range:</span>
                <span className="spec-val">{glove.recommendedSizeRange}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Material:</span>
                <span className="spec-val">{glove.material}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Webbing:</span>
                <span className="spec-val">{glove.webType}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Break-in:</span>
                <span className="spec-val">{glove.breakInTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .comparison-section {
          margin-bottom: 3.5rem;
        }
        .section-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .conversational-h2 {
          font-size: 1.65rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
          line-height: 1.3;
        }
        .section-subtext {
          font-size: 1rem;
          color: #94a3b8;
          max-width: 820px;
        }
        .copy-table-btn {
          margin-top: 0.5rem;
        }
        .filter-bar {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }
        .filter-btn.active {
          background: #2563eb;
          border-color: #3b82f6;
          color: #ffffff;
          box-shadow: 0 0 14px rgba(37, 99, 235, 0.4);
        }
        .table-responsive-wrapper {
          overflow-x: auto;
          background: rgba(13, 21, 39, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          margin-bottom: 1.5rem;
        }
        .crawler-comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
          min-width: 900px;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        th, td {
          padding: 1.25rem 1.1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          vertical-align: top;
        }
        thead th {
          background: rgba(17, 27, 49, 0.95);
          color: #94a3b8;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }
        .glove-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        .cell-model {
          min-width: 230px;
          font-weight: normal;
        }
        .model-cell-inner {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .glove-badge {
          display: inline-block;
          font-size: 0.7rem;
          color: #fbbf24;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .glove-title {
          font-size: 1.05rem;
          color: #ffffff;
          font-weight: 700;
          line-height: 1.3;
        }
        .glove-model-code {
          font-size: 0.75rem;
          color: #64748b;
          font-family: var(--font-family-mono);
        }
        .glove-category-tag {
          font-size: 0.72rem;
          color: #38bdf8;
          background: rgba(14, 165, 233, 0.1);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          width: fit-content;
        }
        .cell-data {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .data-primary {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.92rem;
          line-height: 1.35;
        }
        .data-secondary {
          color: #94a3b8;
          font-size: 0.82rem;
          line-height: 1.45;
        }
        .break-in-bar-container {
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          margin-top: 0.3rem;
          overflow: hidden;
        }
        .break-in-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #f59e0b, #ef4444);
        }
        .tier-tag {
          font-size: 0.72rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .price-tag {
          color: #34d399;
          font-size: 1.2rem;
          font-weight: 800;
        }
        .sku-tag {
          font-size: 0.72rem;
          color: #64748b;
          font-family: var(--font-family-mono);
        }
        .shop-link {
          font-size: 0.78rem;
          color: #38bdf8;
          font-weight: 600;
          margin-top: 0.2rem;
        }
        .shop-link:hover {
          text-decoration: underline;
        }
        .mobile-tactical-cards {
          display: none;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .tactical-card {
          padding: 1.25rem;
        }
        .tactical-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .price-bold {
          color: #34d399;
          font-weight: 800;
          font-size: 1.2rem;
        }
        .tactical-title {
          font-size: 1.15rem;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .tactical-best-for {
          font-size: 0.88rem;
          color: #cbd5e1;
          margin-bottom: 1rem;
        }
        .tactical-specs {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 0.75rem;
        }
        .spec-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
        }
        .spec-name {
          color: #94a3b8;
        }
        .spec-val {
          color: #ffffff;
          font-weight: 600;
        }
        @media (max-width: 900px) {
          .table-responsive-wrapper {
            display: none;
          }
          .mobile-tactical-cards {
            display: grid;
          }
        }
      `}</style>
    </section>
  );
}
