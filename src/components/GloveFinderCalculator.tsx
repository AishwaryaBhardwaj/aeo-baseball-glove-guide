"use client";

import React, { useState } from "react";

interface SizingResult {
  sizeRange: string;
  idealSize: string;
  webStyle: string;
  pocketDepth: string;
  leatherRecommendation: string;
  keyRule: string;
  academySkuSuggestion: string;
}

export function GloveFinderCalculator() {
  const [position, setPosition] = useState<string>("infield");
  const [ageGroup, setAgeGroup] = useState<string>("adult");
  const [throwHand, setThrowHand] = useState<string>("right");

  const computeSpecs = (): SizingResult => {
    if (position === "catcher") {
      if (ageGroup === "teeball") {
        return {
          sizeRange: "29.5\" – 30.0\" Circumference",
          idealSize: "30.0\"",
          webStyle: "Closed Solid Web",
          pocketDepth: "Soft Padded Channel",
          leatherRecommendation: "Synthetic / Soft Cowhide",
          keyRule: "Never give youth catchers oversized mitts; finger strength dictates closing ability.",
          academySkuSuggestion: "ACAD-GLV-YTH-30C"
        };
      }
      if (ageGroup === "youth") {
        return {
          sizeRange: "31.0\" – 32.0\" Circumference",
          idealSize: "31.5\"",
          webStyle: "Closed One-Piece Web",
          pocketDepth: "Deep Target Pocket",
          leatherRecommendation: "Top Cowhide / Full-Grain Steerhide",
          keyRule: "Ensure thumb guard protection is present to avoid hyperextension on foul tips.",
          academySkuSuggestion: "ACAD-GLV-YTH-315C"
        };
      }
      return {
        sizeRange: "32.5\" – 34.0\" Circumference",
        idealSize: "33.5\"",
        webStyle: "Closed Solid Pro Web",
        pocketDepth: "Heavy Framing Channel (Shock Absorbing)",
        leatherRecommendation: "Heavyweight Steerhide / Japanese Kip",
        keyRule: "Look for high-density palm padding that absorbs 90+ MPH velocity and creates a sharp audio pop for umpires.",
        academySkuSuggestion: "ACAD-GLV-773412"
      };
    }

    if (position === "firstbase") {
      if (ageGroup === "teeball" || ageGroup === "youth") {
        return {
          sizeRange: "11.0\" – 11.75\" Mitt",
          idealSize: "11.5\"",
          webStyle: "Single Post / Modified H-Web",
          pocketDepth: "Deep Curved Scoop",
          leatherRecommendation: "Softened Full Cowhide",
          keyRule: "First base mitts lack individual finger stalls to create a curved claw for scooping dirt balls.",
          academySkuSuggestion: "ACAD-GLV-YTH-1B"
        };
      }
      return {
        sizeRange: "12.0\" – 13.0\" Mitt",
        idealSize: "12.5\"",
        webStyle: "Dual Post / Single Post",
        pocketDepth: "Deep Scoop Channel",
        leatherRecommendation: "Pro Grade Steerhide (Rawlings Heart of the Hide / Wilson A2000)",
        keyRule: "Prioritize reinforced web lace durability for handling throws up to 90 MPH across the diamond.",
        academySkuSuggestion: "ACAD-GLV-ADL-1B"
      };
    }

    if (position === "outfield") {
      if (ageGroup === "teeball") {
        return {
          sizeRange: "10.0\" – 10.5\"",
          idealSize: "10.5\"",
          webStyle: "Basket Web / Closed Web",
          pocketDepth: "Medium Soft Pocket",
          leatherRecommendation: "Synthetic / Soft Pigskin",
          keyRule: "Lightweight construction is essential for developing hand-eye tracking.",
          academySkuSuggestion: "ACAD-GLV-TEE-OF"
        };
      }
      if (ageGroup === "youth") {
        return {
          sizeRange: "11.5\" – 12.0\"",
          idealSize: "11.75\"",
          webStyle: "Trapeze or H-Web",
          pocketDepth: "Deep Pocket",
          leatherRecommendation: "Steerhide / Pro Cowhide",
          keyRule: "Deep pockets allow young outfielders to secure fly balls on the move.",
          academySkuSuggestion: "ACAD-GLV-YTH-OF"
        };
      }
      return {
        sizeRange: "12.5\" – 13.0\"",
        idealSize: "12.75\"",
        webStyle: "Six-Finger Trapeze or Pro H-Web",
        pocketDepth: "Extra-Deep Fly Ball Lock",
        leatherRecommendation: "Full-Grain Japanese Kip or Steerhide + SuperSkin",
        keyRule: "12.75\" is the collegiate and MLB gold standard for maximizing reach on diving gap balls.",
        academySkuSuggestion: "ACAD-GLV-491023"
      };
    }

    if (position === "pitcher") {
      if (ageGroup === "teeball" || ageGroup === "youth") {
        return {
          sizeRange: "10.5\" – 11.5\"",
          idealSize: "11.25\"",
          webStyle: "Closed Basket Web",
          pocketDepth: "Medium Pocket",
          leatherRecommendation: "Soft Game-Ready Cowhide",
          keyRule: "A closed web prevents hitters from seeing the baseball grip.",
          academySkuSuggestion: "ACAD-GLV-YTH-P"
        };
      }
      return {
        sizeRange: "11.5\" – 12.0\"",
        idealSize: "11.75\"",
        webStyle: "Two-Piece Closed Web or Solid Basket",
        pocketDepth: "Medium Concealed Pocket",
        leatherRecommendation: "Premium Steerhide",
        keyRule: "Mandatory closed web prevents pitch-tipping against advanced hitters.",
        academySkuSuggestion: "ACAD-GLV-ADL-P"
      };
    }

    // Default: Infield
    if (ageGroup === "teeball") {
      return {
        sizeRange: "9.0\" – 10.0\"",
        idealSize: "9.5\"",
        webStyle: "Basket Web",
        pocketDepth: "Soft Flexible Pocket",
        leatherRecommendation: "Synthetic / Ultra-Soft Pigskin",
        keyRule: "Never buy a glove larger than 10\" for tee-ball; it overweights the player's wrist.",
        academySkuSuggestion: "ACAD-GLV-TEE-INF"
      };
    }
    if (ageGroup === "youth") {
      return {
        sizeRange: "10.5\" – 11.25\"",
        idealSize: "11.0\"",
        webStyle: "I-Web or Single Post",
        pocketDepth: "Shallow to Moderate",
        leatherRecommendation: "Pre-Conditioned Steerhide",
        keyRule: "Shallow pockets help young fielders learn two-hand fielding mechanics.",
        academySkuSuggestion: "ACAD-GLV-YTH-110"
      };
    }
    return {
      sizeRange: "11.25\" – 11.75\"",
      idealSize: position === "thirdbase" ? "11.75\"" : "11.50\"",
      webStyle: "Pro I-Web (2B/SS) or H-Web (3B)",
      pocketDepth: "Shallow (Sub-0.7s release)",
      leatherRecommendation: "Top 5% Steerhide (Rawlings Heart of the Hide)",
      keyRule: "Second basemen prefer 11.25\"–11.5\", shortstops prefer 11.5\", and third basemen prefer 11.75\".",
      academySkuSuggestion: "ACAD-GLV-882194"
    };
  };

  const result = computeSpecs();

  return (
    <div id="interactive-calculator" className="calculator-widget glass-panel">
      <div className="calculator-header">
        <span className="badge badge-emerald">Interactive Gear Tool</span>
        <h3 className="calculator-title">
          Custom Glove Sizing & Position Finder
        </h3>
        <p className="calculator-desc">
          Select your fielding assignment and player tier to compute optimal linear length, web pattern, and leather grade according to Academy Diamond Sports Lab metrics.
        </p>
      </div>

      <div className="calculator-controls-grid">
        {/* Position Select */}
        <div className="control-group">
          <label className="control-label">1. Fielding Position</label>
          <div className="chip-selector">
            {[
              { id: "infield", label: "Middle Infield (2B/SS)" },
              { id: "thirdbase", label: "Third Base (3B)" },
              { id: "outfield", label: "Outfield (LF/CF/RF)" },
              { id: "firstbase", label: "First Base (1B)" },
              { id: "catcher", label: "Catcher (C)" },
              { id: "pitcher", label: "Pitcher (P)" },
            ].map((pos) => (
              <button
                key={pos.id}
                type="button"
                className={`chip-btn ${position === pos.id ? "active" : ""}`}
                onClick={() => setPosition(pos.id)}
              >
                {pos.label}
              </button>
            ))}
          </div>
        </div>

        {/* Age / Level Select */}
        <div className="control-group">
          <label className="control-label">2. Age Group & Competition Level</label>
          <div className="chip-selector">
            {[
              { id: "teeball", label: "Tee-Ball (Ages 4–7)" },
              { id: "youth", label: "Youth League (Ages 8–12)" },
              { id: "highschool", label: "Intermediate / High School (13–17)" },
              { id: "adult", label: "Varsity / College / Adult (18+)" },
            ].map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                className={`chip-btn ${ageGroup === lvl.id ? "active" : ""}`}
                onClick={() => setAgeGroup(lvl.id)}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hand Throw */}
        <div className="control-group">
          <label className="control-label">3. Throwing Orientation</label>
          <div className="throw-toggle-row">
            <button
              type="button"
              className={`throw-btn ${throwHand === "right" ? "active" : ""}`}
              onClick={() => setThrowHand("right")}
            >
              Right Hand Throw (Wear on Left Hand)
            </button>
            <button
              type="button"
              className={`throw-btn ${throwHand === "left" ? "active" : ""}`}
              onClick={() => setThrowHand("left")}
            >
              Left Hand Throw (Wear on Right Hand)
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Recommendation Card */}
      <div className="result-display-card">
        <div className="result-header">
          <div className="result-badge-col">
            <span className="spec-badge">Target Size</span>
            <div className="ideal-size-number">{result.idealSize}</div>
            <span className="range-subtext">Optimal Range: {result.sizeRange}</span>
          </div>
          <div className="result-details-col">
            <div className="result-row">
              <span className="row-label">Recommended Web Pattern:</span>
              <strong className="row-val text-cyan">{result.webStyle}</strong>
            </div>
            <div className="result-row">
              <span className="row-label">Pocket Construction:</span>
              <strong className="row-val">{result.pocketDepth}</strong>
            </div>
            <div className="result-row">
              <span className="row-label">Optimal Leather Grade:</span>
              <strong className="row-val text-gold">{result.leatherRecommendation}</strong>
            </div>
          </div>
        </div>

        <div className="result-rule-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <p className="rule-text">
            <strong>Academy Pro Tip:</strong> {result.keyRule}
          </p>
        </div>
      </div>

      <style jsx>{`
        .calculator-widget {
          padding: 2rem;
          margin: 2.5rem 0;
          border: 1px solid rgba(16, 185, 129, 0.3);
          background: linear-gradient(145deg, rgba(13, 21, 39, 0.95), rgba(7, 11, 20, 0.95));
        }
        .calculator-header {
          margin-bottom: 1.5rem;
        }
        .calculator-title {
          font-size: 1.45rem;
          color: #ffffff;
          margin-top: 0.4rem;
          margin-bottom: 0.4rem;
        }
        .calculator-desc {
          font-size: 0.95rem;
          color: #94a3b8;
        }
        .calculator-controls-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .control-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #cbd5e1;
          letter-spacing: 0.02em;
        }
        .chip-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .chip-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: #94a3b8;
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .chip-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .chip-btn.active {
          background: rgba(16, 185, 129, 0.18);
          border-color: #10b981;
          color: #34d399;
          font-weight: 600;
        }
        .throw-toggle-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .throw-btn {
          flex: 1;
          min-width: 200px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: #94a3b8;
          padding: 0.55rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .throw-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }
        .throw-btn.active {
          background: rgba(37, 99, 235, 0.2);
          border-color: #3b82f6;
          color: #60a5fa;
          font-weight: 600;
        }
        .result-display-card {
          background: rgba(7, 11, 20, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
        }
        .result-header {
          display: flex;
          gap: 2rem;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .result-badge-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(16, 185, 129, 0.15));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: var(--radius-md);
          padding: 1rem 1.5rem;
          min-width: 170px;
        }
        .spec-badge {
          font-size: 0.72rem;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 0.04em;
        }
        .ideal-size-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          font-family: var(--font-family-mono);
        }
        .range-subtext {
          font-size: 0.72rem;
          color: #64748b;
          text-align: center;
          margin-top: 0.25rem;
        }
        .result-details-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .result-row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 0.45rem;
          font-size: 0.88rem;
          gap: 1rem;
        }
        .row-label {
          color: #94a3b8;
        }
        .row-val {
          color: #f8fafc;
          text-align: right;
        }
        .text-cyan {
          color: #38bdf8;
        }
        .text-gold {
          color: #fbbf24;
        }
        .result-rule-box {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          margin-top: 0.5rem;
        }
        .rule-text {
          font-size: 0.85rem;
          color: #fde68a;
          line-height: 1.5;
        }
        @media (max-width: 640px) {
          .result-header {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  );
}
