"use client";

import React from "react";
import Image from "next/image";
import { SIZING_CHART_DATA } from "@/data/gloveGuideData";
import { BottomLineBox } from "./BottomLineBox";
import { ComparisonMatrix } from "./ComparisonMatrix";
import { GloveFinderCalculator } from "./GloveFinderCalculator";
import { FaqSection } from "./FaqSection";

export function ArticleContent() {
  return (
    <article className="editorial-article" itemScope itemType="https://schema.org/TechArticle">
      {/* Editorial Header */}
      <header className="article-header" id="guide-top">
        <div className="header-meta-row">
          <span className="badge badge-cyan">Equipment Mastery Series</span>
          <span className="meta-dot">•</span>
          <time dateTime="2026-10-14" className="meta-date">
            Updated October 14, 2026
          </time>
          <span className="meta-dot">•</span>
          <span className="meta-read-time">8 Min Read</span>
        </div>

        <h1 className="article-main-title" itemProp="headline">
          How to Choose the Right Baseball Glove: 2026 Positional Sizing & Leather Breakdown
        </h1>

        <p className="article-lead-deck" itemProp="description">
          An authoritative, entity-dense field guide engineered by Academy Diamond Sports specialists. Learn deterministic sizing formulas, pocket mechanics, leather grading standards, and web patterns tailored for infielders, outfielders, and catchers.
        </p>

        {/* Author Byline */}
        <div className="author-card" itemProp="author" itemScope itemType="https://schema.org/Person">
          <div className="author-avatar-badge">
            <span>MV</span>
          </div>
          <div className="author-info">
            <div className="author-name-row">
              <span className="author-name" itemProp="name">Marcus Vance</span>
              <span className="badge badge-blue">Verified Equipment Lab Lead</span>
            </div>
            <p className="author-bio" itemProp="jobTitle">
              Lead Diamond Sports Equipment Specialist at Academy Sports + Outdoors • 14 Years Fitting High School & Collegiate Ballplayers
            </p>
          </div>
        </div>

        {/* Hero Figure */}
        <figure className="hero-figure">
          <div className="hero-image-wrapper">
            <Image
              src="/images/baseball-gloves-hero.jpg"
              alt="Side-by-side comparison of three premium baseball gloves: tan leather infield glove, outfield glove, and catcher mitt"
              width={1280}
              height={720}
              priority
              className="hero-img"
            />
            <div className="hero-overlay-tag">
              <span>Primary Field Categories: Infield • Outfield • Catcher</span>
            </div>
          </div>
          <figcaption className="hero-caption">
            <strong>Figure 1.0:</strong> Side-by-side comparative examination of professional fielding patterns. Left: Rawlings 11.5" Heart of the Hide Infield I-Web; Center: Wilson A2000 12.75" Outfield Trapeze; Right: All-Star Pro Elite 33.5" Catcher's Framing Mitt.
          </figcaption>
        </figure>
      </header>

      {/* 1. Bottom Line Summary Box (Crucial for AEO) */}
      <BottomLineBox />

      {/* 2. Interactive Sizing & Position Finder Calculator */}
      <GloveFinderCalculator />

      {/* 3. Section: Positional Sizing */}
      <section 
        id="position-sizing" 
        className="guide-section"
        aria-labelledby="sizing-heading"
      >
        <div className="section-title-wrap">
          <span className="badge badge-blue">Positional Mechanics</span>
          <h2 id="sizing-heading" className="conversational-h2">
            What size baseball glove do I need for my fielding position?
          </h2>
        </div>

        <p className="section-prose">
          Baseball gloves are measured linearly in inches from the top of the index finger along the leather contour of the pocket face down to the heel of the palm. The sole exception is catcher's mitts, which are evaluated by external perimeter circumference in inches (typically 31" to 34"). Sizing is strictly determined by the mechanical demands of the defensive position:
        </p>

        {/* Positional Table */}
        <div className="table-responsive-wrapper">
          <table className="crawler-sizing-table">
            <caption className="sr-only">
              Official Baseball Glove Sizing Chart by Fielding Position and Player Age Group
            </caption>
            <thead>
              <tr>
                <th scope="col">Fielding Position</th>
                <th scope="col">Tee-Ball (Ages 4–7)</th>
                <th scope="col">Youth (Ages 8–12)</th>
                <th scope="col">High School / Adult (13+)</th>
                <th scope="col">Web Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {SIZING_CHART_DATA.map((row, idx) => (
                <tr key={idx}>
                  <th scope="row" className="table-row-pos">
                    {row.position}
                  </th>
                  <td>{row.teeBall}</td>
                  <td>{row.youth}</td>
                  <td className="highlight-cell">{row.adultPro}</td>
                  <td className="web-cell">{row.webRecommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-deep-dive">
          <h3 className="sub-heading">Why Infielders Require Shorter Gloves with Shallow Pockets</h3>
          <p>
            Middle infielders (Second Basemen and Shortstops) operate under extreme time pressure, with elite double-play turns requiring under <strong>0.7 seconds</strong> from ball impact to release. An oversized glove causes the baseball to get lodged deep in the pocket webbing, forcing the player to dig for the laces. An <strong>11.25" to 11.50"</strong> glove with a shallow pocket allows the ball to bounce instantly off the leather into the throwing hand.
          </p>

          <h3 className="sub-heading">Why Outfielders Require Deep, Elongated Pockets</h3>
          <p>
            Outfielders must track high-exit-velocity fly balls (often exceeding 100 MPH) and execute diving snowcone catches on the dead run. A <strong>12.50" to 13.00"</strong> glove with a deep Six-Finger Trapeze or H-Web creates a funnel that wraps around the baseball upon impact, eliminating ball spin and preventing the ball from popping loose when the glove strikes the outfield turf.
          </p>
        </div>
      </section>

      {/* 4. Section: Leather Materials */}
      <section 
        id="leather-materials" 
        className="guide-section"
        aria-labelledby="materials-heading"
      >
        <div className="section-title-wrap">
          <span className="badge badge-gold">Material Science</span>
          <h2 id="materials-heading" className="conversational-h2">
            How do glove materials and leather grades affect performance and durability?
          </h2>
        </div>

        <p className="section-prose">
          The leather hide selected determines 90% of a baseball glove's price, break-in duration, and competitive lifespan. Below is the chemical and physical hierarchy utilized by Academy Diamond Sports specialists:
        </p>

        <div className="materials-grid">
          {/* Synthetic */}
          <div className="material-card glass-panel">
            <div className="mat-header">
              <span className="mat-tier">Tier 1: Entry Level</span>
              <span className="mat-price">$25 – $55</span>
            </div>
            <h3 className="mat-title">Synthetic & PU Leather</h3>
            <p className="mat-desc">
              Engineered from polyurethane fibers and lightweight mesh fabric.
            </p>
            <ul className="mat-bullets">
              <li><strong>Break-In Duration:</strong> 0 Hours (Instant Game-Ready)</li>
              <li><strong>Expected Lifespan:</strong> 1 Season (Tee-Ball / Coach Pitch)</li>
              <li><strong>Best For:</strong> Young players (ages 4–8) developing basic hand-eye coordination without hand fatigue.</li>
            </ul>
          </div>

          {/* Full Cowhide */}
          <div className="material-card glass-panel">
            <div className="mat-header">
              <span className="mat-tier">Tier 2: Recreational</span>
              <span className="mat-price">$60 – $140</span>
            </div>
            <h3 className="mat-title">Top-Grain Cowhide</h3>
            <p className="mat-desc">
              Natural cowhide leather treated with mild tanning agents for moderate stiffness.
            </p>
            <ul className="mat-bullets">
              <li><strong>Break-In Duration:</strong> 8 – 15 Hours of Active Play</li>
              <li><strong>Expected Lifespan:</strong> 2 – 3 Seasons of Recreational Play</li>
              <li><strong>Best For:</strong> Little League and middle school players seeking authentic leather without a grueling break-in period.</li>
            </ul>
          </div>

          {/* Steerhide */}
          <div className="material-card glass-panel featured-mat">
            <div className="mat-header">
              <span className="badge badge-gold">Academy Best Value</span>
              <span className="mat-price">$200 – $350</span>
            </div>
            <h3 className="mat-title">Premium U.S. Steerhide</h3>
            <p className="mat-desc">
              Harvested from the top 5% of heavy American steer hides (Rawlings Heart of the Hide / Wilson Pro Stock).
            </p>
            <ul className="mat-bullets">
              <li><strong>Break-In Duration:</strong> 30 – 50 Hours (Disciplined Mallet Prep)</li>
              <li><strong>Expected Lifespan:</strong> 4 – 6 Seasons of Heavy Tournament Play</li>
              <li><strong>Best For:</strong> High school varsity, travel ball, and collegiate athletes who mold a custom pocket that never flops.</li>
            </ul>
          </div>

          {/* Kipskin */}
          <div className="material-card glass-panel">
            <div className="mat-header">
              <span className="mat-tier">Tier 4: Pro Championship</span>
              <span className="mat-price">$350 – $500</span>
            </div>
            <h3 className="mat-title">Full-Grain Japanese Kip</h3>
            <p className="mat-desc">
              Tanned from younger calf hides yielding tight, microscopic pore structures and silky grain texture.
            </p>
            <ul className="mat-bullets">
              <li><strong>Break-In Duration:</strong> 25 – 40 Hours of Catch Conditioning</li>
              <li><strong>Expected Lifespan:</strong> 5 – 7 Seasons of Elite Competition</li>
              <li><strong>Best For:</strong> High-level middle infielders demanding 15% lower glove weight for split-second backhand reaction speeds.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Section: Comparison Matrix Component */}
      <ComparisonMatrix />

      {/* 6. Section: Web Patterns */}
      <section 
        id="web-patterns" 
        className="guide-section"
        aria-labelledby="webs-heading"
      >
        <div className="section-title-wrap">
          <span className="badge badge-cyan">Tactical Webbing</span>
          <h2 id="webs-heading" className="conversational-h2">
            What is the difference between open and closed web patterns on baseball gloves?
          </h2>
        </div>

        <p className="section-prose">
          Web patterns dictate dirt shedding, ball visibility, pocket stability, and pitch concealment. Understanding open versus closed architectures is essential when selecting a glove:
        </p>

        <div className="web-grid">
          <div className="web-box glass-panel">
            <h3 className="web-name">Pro I-Web (Open)</h3>
            <span className="web-pos-tag">Middle Infield (2B / SS)</span>
            <p className="web-desc">
              Features vertical and horizontal leather bars resembling a capital "I". The open gaps allow infield clay, dust, and pebbles to fall out during ground ball hops, ensuring a clean pocket when fielding.
            </p>
          </div>

          <div className="web-box glass-panel">
            <h3 className="web-name">Pro H-Web (Open / Semi-Deep)</h3>
            <span className="web-pos-tag">Outfield & Third Base (3B / OF)</span>
            <p className="web-desc">
              Two parallel vertical strips connected by horizontal bars create superior structural resistance against high-speed exit velocity. Provides visibility when looking through the web at fly balls against the sun or stadium lights.
            </p>
          </div>

          <div className="web-box glass-panel">
            <h3 className="web-name">Six-Finger Trapeze Web</h3>
            <span className="web-pos-tag">Outfield (LF / CF / RF)</span>
            <p className="web-desc">
              Features a central leather strip interlaced with continuous raw-hide laces that form an extra finger. Extremely flexible and deep, acting as a natural extension of the outfielder's arm for snagging line drives.
            </p>
          </div>

          <div className="web-box glass-panel">
            <h3 className="web-name">Solid Closed 2-Piece Web</h3>
            <span className="web-pos-tag">Pitchers (Mound Specialists)</span>
            <p className="web-desc">
              Completely solid leather face with no gaps. Shields the pitcher's fingers and ball seam orientations from opposing batters, base coaches, and dugout cameras to eliminate pitch-tipping.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Section: Hand Fit & Mechanics */}
      <section 
        id="proper-fit" 
        className="guide-section"
        aria-labelledby="fit-heading"
      >
        <div className="section-title-wrap">
          <span className="badge badge-emerald">Ergonomic Fit</span>
          <h2 id="fit-heading" className="conversational-h2">
            How should a baseball glove properly fit a player's hand?
          </h2>
        </div>

        <p className="section-prose">
          An ill-fitting glove causes ball control errors, wrist fatigue, and hand bone bruising. Follow these three mechanical fitting rules:
        </p>

        <div className="fit-rules-list">
          <div className="fit-rule-item">
            <div className="rule-num-badge">1</div>
            <div>
              <h3 className="fit-rule-title">Finger Stall Clearance</h3>
              <p className="fit-rule-text">
                When your hand is inserted fully into the glove, your fingertips should rest approximately <strong>0.25 to 0.5 inches</strong> from the tips of the leather stalls. If your fingers cannot reach the stalls, the glove is oversized and will flop during running plays.
              </p>
            </div>
          </div>

          <div className="fit-rule-item">
            <div className="rule-num-badge">2</div>
            <div>
              <h3 className="fit-rule-title">Wrist Enclosure Retention</h3>
              <p className="fit-rule-text">
                The wrist strap should secure firmly against the back of your hand without cutting off blood flow. Youth models feature adjustable Velcro or D-ring clasps; adult models feature conventional leather lace pull-tabs.
              </p>
            </div>
          </div>

          <div className="fit-rule-item">
            <div className="rule-num-badge">3</div>
            <div>
              <h3 className="fit-rule-title">The "Two-in-the-Pinky" (TIP) Technique</h3>
              <p className="fit-rule-text">
                Modern collegiate and professional outfielders and third basemen routinely place both their ring and pinky fingers inside the pinky stall. This shifts the hinge point lower on the palm, creating a significantly deeper pocket and greater thumb-to-pinky closing leverage on fly balls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section: Break-In Protocol */}
      <section 
        id="break-in-guide" 
        className="guide-section"
        aria-labelledby="breakin-heading"
      >
        <div className="section-title-wrap">
          <span className="badge badge-gold">Conditioning Protocol</span>
          <h2 id="breakin-heading" className="conversational-h2">
            How do you properly break in and care for a baseball glove without damaging the leather?
          </h2>
        </div>

        <p className="section-prose">
          Premium steerhide and kip gloves require disciplined conditioning to form a personalized pocket. The Academy Sports certified protocol takes 2 to 4 weeks:
        </p>

        <div className="breakin-grid">
          <div className="protocol-card glass-panel do-card">
            <div className="protocol-header">
              <span className="tag-check">✔ APPROVED PROTOCOL</span>
              <h4>The Academy 4-Step Process</h4>
            </div>
            <ol className="protocol-steps">
              <li>
                <strong>Apply Minimal Balm:</strong> Massage a quarter-sized amount of lanolin cream or Rawlings Glove Butter into the pocket and hinge points. Do not over-saturate.
              </li>
              <li>
                <strong>Pound Hinge Points:</strong> Use a 12-to-16-ounce wooden baseball glove mallet to strike the thumb-to-pinky and thumb-to-middle finger crease 150 times per day.
              </li>
              <li>
                <strong>Play Active Catch:</strong> Have a teammate throw 100+ firm baseballs directly into your pocket daily to train the leather fibers around a real ball shape.
              </li>
              <li>
                <strong>Wrap with a Baseball:</strong> Store the glove overnight with a regulation baseball in the pocket secured by an elastic glove wrap.
              </li>
            </ol>
          </div>

          <div className="protocol-card glass-panel dont-card">
            <div className="protocol-header">
              <span className="tag-cross">✖ FORBIDDEN METHODS</span>
              <h4>4 Damaging Break-In Myths</h4>
            </div>
            <ul className="myth-list">
              <li>
                <strong>Never Bake in an Oven:</strong> Intense baking temperatures bake out essential natural tanning oils, causing irreversible leather dry rot and seam cracking.
              </li>
              <li>
                <strong>Never Microwave:</strong> Microwaving superheats internal nylon threading and liquefies internal adhesives, ruining glove balance.
              </li>
              <li>
                <strong>Never Soak in Water:</strong> Submerging in hot or boiling water waterlogs internal padding felt, turning it heavy, sponge-like, and foul-smelling.
              </li>
              <li>
                <strong>Never Run Over with a Car:</strong> Compressing a glove with vehicle tires crushes internal plastic finger stays, permanently destroying pocket geometry.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Section: FAQ Section (FAQPage schema match) */}
      <FaqSection />

      <style jsx>{`
        .editorial-article {
          width: 100%;
        }
        .article-header {
          margin-bottom: 2.5rem;
        }
        .header-meta-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .meta-dot {
          color: #334155;
        }
        .meta-date, .meta-read-time {
          font-size: 0.85rem;
          color: #94a3b8;
          font-family: var(--font-family-mono);
        }
        .article-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }
        .article-lead-deck {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 1.75rem;
          max-width: 900px;
        }
        .author-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(13, 21, 39, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 2rem;
        }
        .author-avatar-badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 800;
          font-size: 1.1rem;
          box-shadow: 0 0 14px rgba(37, 99, 235, 0.4);
        }
        .author-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .author-name-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .author-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }
        .author-bio {
          font-size: 0.82rem;
          color: #94a3b8;
          line-height: 1.4;
        }
        .hero-figure {
          margin-bottom: 2.5rem;
        }
        .hero-image-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
        }
        .hero-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .hero-img:hover {
          transform: scale(1.01);
        }
        .hero-overlay-tag {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(7, 11, 20, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: #38bdf8;
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        .hero-caption {
          margin-top: 0.75rem;
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.6;
        }
        .guide-section {
          margin-bottom: 3.5rem;
        }
        .section-title-wrap {
          margin-bottom: 1rem;
        }
        .conversational-h2 {
          font-size: 1.7rem;
          color: #ffffff;
          margin-top: 0.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .section-prose {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }
        .table-responsive-wrapper {
          overflow-x: auto;
          background: rgba(13, 21, 39, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }
        .crawler-sizing-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          text-align: left;
        }
        .crawler-sizing-table th, .crawler-sizing-table td {
          padding: 1rem 1.1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .crawler-sizing-table thead th {
          background: rgba(17, 27, 49, 0.95);
          color: #94a3b8;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .table-row-pos {
          color: #ffffff;
          font-weight: 600;
        }
        .highlight-cell {
          color: #38bdf8;
          font-weight: 700;
        }
        .web-cell {
          color: #94a3b8;
        }
        .prose-deep-dive {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: rgba(13, 21, 39, 0.5);
          border-left: 3px solid #2563eb;
          padding: 1.5rem 1.75rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }
        .sub-heading {
          font-size: 1.2rem;
          color: #ffffff;
        }
        .materials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .material-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .featured-mat {
          border-color: rgba(245, 158, 11, 0.5);
          background: linear-gradient(145deg, rgba(17, 27, 49, 0.9), rgba(245, 158, 11, 0.08));
        }
        .mat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .mat-tier {
          font-size: 0.72rem;
          color: #94a3b8;
          text-transform: uppercase;
          font-weight: 600;
        }
        .mat-price {
          color: #34d399;
          font-weight: 700;
          font-size: 0.95rem;
        }
        .mat-title {
          font-size: 1.2rem;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .mat-desc {
          font-size: 0.88rem;
          color: #cbd5e1;
          margin-bottom: 1rem;
        }
        .mat-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: #94a3b8;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 0.75rem;
        }
        .mat-bullets li strong {
          color: #e2e8f0;
        }
        .web-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .web-box {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .web-name {
          font-size: 1.15rem;
          color: #ffffff;
        }
        .web-pos-tag {
          font-size: 0.75rem;
          color: #38bdf8;
          font-family: var(--font-family-mono);
          margin-bottom: 0.35rem;
        }
        .web-desc {
          font-size: 0.88rem;
          color: #94a3b8;
          line-height: 1.6;
        }
        .fit-rules-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .fit-rule-item {
          display: flex;
          gap: 1.25rem;
          background: rgba(13, 21, 39, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          align-items: flex-start;
        }
        .rule-num-badge {
          background: #2563eb;
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          flex-shrink: 0;
        }
        .fit-rule-title {
          font-size: 1.1rem;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }
        .fit-rule-text {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.65;
        }
        .breakin-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .protocol-card {
          padding: 1.75rem;
        }
        .do-card {
          border-color: rgba(16, 185, 129, 0.3);
        }
        .dont-card {
          border-color: rgba(244, 63, 94, 0.3);
        }
        .protocol-header {
          margin-bottom: 1.25rem;
        }
        .tag-check {
          color: #34d399;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        .tag-cross {
          color: #f43f5e;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        .protocol-header h4 {
          font-size: 1.2rem;
          color: #ffffff;
          margin-top: 0.35rem;
        }
        .protocol-steps {
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          font-size: 0.92rem;
          color: #cbd5e1;
          line-height: 1.65;
        }
        .protocol-steps strong {
          color: #ffffff;
        }
        .myth-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          font-size: 0.92rem;
          color: #cbd5e1;
          line-height: 1.65;
        }
        .myth-list strong {
          color: #f87171;
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
        @media (max-width: 768px) {
          .article-main-title {
            font-size: 1.85rem;
          }
          .breakin-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </article>
  );
}
