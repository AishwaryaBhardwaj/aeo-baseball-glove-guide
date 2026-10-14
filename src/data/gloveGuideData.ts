export interface GloveComparisonItem {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: "Infield" | "Outfield" | "Catcher";
  badge: string;
  primaryPosition: string;
  recommendedSizeRange: string;
  material: string;
  leatherGrade: string;
  webType: string;
  pocketDepth: string;
  breakInTime: string;
  factoryBreakIn: string;
  playerBreakInNeeded: string;
  durabilityRating: string;
  priceTier: string;
  retailPrice: number;
  academySku: string;
  bestFor: string;
  keyPros: string[];
  keyCons: string[];
}

export interface FaqItem {
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  entities: string[];
}

export interface SizeRecommendation {
  position: string;
  teeBall: string;
  youth: string;
  intermediate: string;
  adultPro: string;
  webRecommendation: string;
  pocketDescription: string;
}

export const GLOVE_COMPARISON_DATA: GloveComparisonItem[] = [
  {
    id: "infield-pro",
    name: "Heart of the Hide 11.5\" Infield Glove",
    brand: "Rawlings",
    model: "PRO204-2BC",
    category: "Infield",
    badge: "Most Popular Infield Pick",
    primaryPosition: "Shortstop / Second Base / Third Base",
    recommendedSizeRange: "11.25\" – 11.75\"",
    material: "Top 5% U.S. Steerhide Leather",
    leatherGrade: "Premium Steerhide with Deer-Tanned Cowhide Palm Lining",
    webType: "Pro I-Web (Open)",
    pocketDepth: "Shallow to Medium Pocket (Optimized for Sub-0.7s Ball Transfers)",
    breakInTime: "30 – 40 Hours Active Break-in",
    factoryBreakIn: "40% Factory / 60% Player",
    playerBreakInNeeded: "60%",
    durabilityRating: "9.8 / 10 (4–6 Seasons Heavy Play)",
    priceTier: "Elite Pro ($299 – $349)",
    retailPrice: 299.99,
    academySku: "ACAD-GLV-882194",
    bestFor: "Middle infielders needing lightning-fast double play ball extraction and crisp thumb-to-middle pocket structure.",
    keyPros: [
      "Ultra-shallow pocket allows rapid hand-to-throw transitions",
      "I-Web design sheds infield dirt and clay instantly",
      "Tennessee Tanning Company pro raw-hide laces for structural stability"
    ],
    keyCons: [
      "Too small and shallow for outfield fly balls",
      "Requires 3-4 weeks of disciplined mallet and catch break-in"
    ]
  },
  {
    id: "outfield-pro",
    name: "A2000 OT6 12.75\" Outfield Glove",
    brand: "Wilson",
    model: "WBW1000981275",
    category: "Outfield",
    badge: "Best Range & Fly Ball Retention",
    primaryPosition: "Left Field / Center Field / Right Field",
    recommendedSizeRange: "12.50\" – 13.00\"",
    material: "Pro Stock Select Kip Leather + SuperSkin Backing",
    leatherGrade: "Flawless Japanese Steerhide with Dual Welting Finger Ridges",
    webType: "Six-Finger Trapeze / T-Web",
    pocketDepth: "Extra Deep Pocket (Snag & Secure High Exit Velocity Fly Balls)",
    breakInTime: "40 – 50 Hours Active Break-in",
    factoryBreakIn: "30% Factory / 70% Player",
    playerBreakInNeeded: "70%",
    durabilityRating: "9.6 / 10 (5+ Seasons Heavy Play)",
    priceTier: "Tour Grade ($299 – $379)",
    retailPrice: 329.99,
    academySku: "ACAD-GLV-491023",
    bestFor: "Outfielders tracking gap fly balls, diving catches, and snowcone grasps requiring maximum reach.",
    keyPros: [
      "12.75-inch elongated perimeter provides unmatched field coverage",
      "Trapeze web acts as an extension of the hand with continuous leather lacing",
      "SuperSkin synthetic backing reduces glove weight by 10% for faster glove-hand reaction"
    ],
    keyCons: [
      "Pocket is too deep for rapid infield transfers",
      "Significant finger stiffness out of the box"
    ]
  },
  {
    id: "catcher-pro",
    name: "Pro Elite 33.5\" Catcher's Mitt",
    brand: "All-Star",
    model: "CM3000SBT",
    category: "Catcher",
    badge: "Gold Standard Framing Mitt",
    primaryPosition: "Catcher (Home Plate Defense)",
    recommendedSizeRange: "32.50\" – 34.00\" Circumference",
    material: "Exclusive Japanese Tanned Steerhide",
    leatherGrade: "Heavyweight Bullhide with Closed Solid Web & Hardened Edge Foam",
    webType: "Closed Solid One-Piece Web",
    pocketDepth: "Targeted Concave Framing Channel with High-Density Shock Padding",
    breakInTime: "60 – 80 Hours Intensive Conditioning",
    factoryBreakIn: "15% Factory / 85% Player",
    playerBreakInNeeded: "85%",
    durabilityRating: "9.9 / 10 (Engineered for 90+ MPH Pitch Repetition)",
    priceTier: "Championship Grade ($379 – $449)",
    retailPrice: 399.99,
    academySku: "ACAD-GLV-773412",
    bestFor: "Catchers receiving 80-95+ MPH velocity, demanding loud pitch pop audio cues for umpires and finger protection.",
    keyPros: [
      "Pro Guard padding absorbs high-speed bullpens without palm bruising",
      "Distinct audio 'crack' on pitch impact assists pitch framing calls",
      "Reinforced wrist wrap and lock-down back strap"
    ],
    keyCons: [
      "Extremely stiff out of the box (requires extensive mallet and conditioner prep)",
      "Strictly specialized for catcher; cannot be used at any other position"
    ]
  }
];

export const SIZING_CHART_DATA: SizeRecommendation[] = [
  {
    position: "Infield (2B / SS / 3B)",
    teeBall: "9.0\" – 10.0\"",
    youth: "10.5\" – 11.25\"",
    intermediate: "11.25\" – 11.5\"",
    adultPro: "11.25\" – 11.75\" (11.25\" 2B, 11.5\" SS, 11.75\" 3B)",
    webRecommendation: "I-Web, Single Post, Modified Trap",
    pocketDescription: "Shallow pocket; enables sub-second hand transfers"
  },
  {
    position: "Outfield (LF / CF / RF)",
    teeBall: "10.0\" – 10.5\"",
    youth: "11.5\" – 12.0\"",
    intermediate: "12.0\" – 12.5\"",
    adultPro: "12.5\" – 13.0\"",
    webRecommendation: "H-Web, Trapeze, Modified Trapeze",
    pocketDescription: "Deep, elongated pocket; locks in running catches"
  },
  {
    position: "First Base (1B)",
    teeBall: "9.5\" – 10.5\"",
    youth: "11.5\" – 12.0\"",
    intermediate: "12.0\" – 12.5\"",
    adultPro: "12.0\" – 13.0\" Mitt (No finger slots)",
    webRecommendation: "Single Post, Dual Post, Modified H-Web",
    pocketDescription: "Deep scooped claw; scoops low throws from dirt"
  },
  {
    position: "Pitcher (P)",
    teeBall: "9.5\" – 10.5\"",
    youth: "11.0\" – 11.5\"",
    intermediate: "11.5\" – 11.75\"",
    adultPro: "11.5\" – 12.0\"",
    webRecommendation: "Closed 2-Piece, Basket Web, Solid Web",
    pocketDescription: "Concealed web; shields pitch grips from batters"
  },
  {
    position: "Catcher (C)",
    teeBall: "29.5\" – 30.0\"",
    youth: "31.0\" – 32.0\"",
    intermediate: "32.0\" – 32.5\"",
    adultPro: "32.5\" – 34.0\" Circumference",
    webRecommendation: "Solid Closed Web, Half-Moon Web",
    pocketDescription: "Heavily padded perimeter; absorbs repeated 90mph impacts"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "What size baseball glove do I need for the infield?",
    shortAnswer: "Adult infielders should choose an 11.25-inch to 11.75-inch glove with a shallow pocket and open I-Web for rapid ball transfers.",
    detailedAnswer: "For middle infielders (Second Base and Shortstop), the industry standard is 11.25 inches to 11.50 inches. This compact size and shallow pocket allow lightning-fast ball retrieval (under 0.7 seconds) for turning double plays. Third basemen typically prefer an 11.75-inch glove featuring a slightly deeper pocket or modified trap web to absorb high-exit-velocity line drives down the hot corner. Youth infielders aged 8–12 should use 10.5-inch to 11.25-inch models.",
    entities: ["Infield Glove", "11.5 Inch", "I-Web", "Second Base", "Shortstop", "Third Base", "Pocket Depth"]
  },
  {
    question: "How do you know what size baseball glove to buy?",
    shortAnswer: "Measure from the tip of the glove index finger down the palm face to the heel in inches, matching size to player age and fielding position.",
    detailedAnswer: "Glove size is measured in linear inches along the glove face from the top of the index finger along the leather contour to the center of the heel. Catcher mitts are the exception, measured by outer circumference (32 to 34 inches). Match the size to two strict criteria: Player Age Group (Tee-ball: 9-10\", Youth 8-11: 10.5-11.5\", Teen/Adult 12+: 11.25-13.0\") and Fielding Position (Infield: 11.25-11.75\", Outfield: 12.5-13.0\", Pitcher: 11.5-12.0\", First Base: 12-13\" mitt).",
    entities: ["Linear Measurement", "Index to Heel", "Circumference", "Age Guidelines", "Positional Sizing"]
  },
  {
    question: "What is the difference between an infield glove and an outfield glove?",
    shortAnswer: "Infield gloves are shorter (11.25\"–11.75\") with shallow pockets for quick transfers; outfield gloves are longer (12.5\"–13.0\") with deep pockets to secure fly balls.",
    detailedAnswer: "The primary differences lie in length, pocket depth, and web structure. Infield gloves (11.25\"–11.75\") prioritize tactile control and shallow pockets so players can locate the baseball seam in under a second. In contrast, outfield gloves (12.5\"–13.0\") act as an extension of the player's arm with elongated fingers, deep pockets, and trapeze or H-webs engineered to retain diving fly balls and absorb high-speed snowcone catches without the ball dislodging.",
    entities: ["Infield vs Outfield", "Ball Transfer Speed", "Fly Ball Retention", "Trapeze Web", "H-Web"]
  },
  {
    question: "Which leather grade is best for a high school or competitive baseball player?",
    shortAnswer: "Heart of the Hide or Pro Stock premium steerhide ($250–$350) offers the optimal balance of durability, custom moldability, and multi-season lifespan.",
    detailedAnswer: "For varsity high school, travel ball, and collegiate players, premium steerhide leather (such as Rawlings Heart of the Hide or Wilson Pro Stock) is the benchmark standard. Derived from top 5% steer hides, this leather requires 30 to 50 hours of break-in, but retains structural stiffness for 4 to 6 competitive seasons. Full-grain Japanese Kip leather provides a lighter, silkier feel favored by infielders, while synthetic backings (like SuperSkin) shave off weight without sacrificing durability.",
    entities: ["Steerhide", "Full-grain Kip Leather", "Heart of the Hide", "Wilson Pro Stock", "Leather Break-in"]
  },
  {
    question: "How do you break in a baseball glove without ruining the leather?",
    shortAnswer: "Break in gloves through repetitive catch, a wooden mallet, and minimal glove conditioner. Never microwave, bake, or soak in hot water.",
    detailedAnswer: "The certified Academy Sports method for breaking in baseball gloves requires three steps: 1) Apply a dime-sized amount of lanolin-based or oil-free leather conditioner to soften the fibers. 2) Strike the targeted pocket hinges repeatedly with a 12-to-16-ounce wooden baseball glove mallet. 3) Play 100+ throws of active catch, bending the pinky and thumb toward each other. NEVER bake a glove in the oven, microwave it, or immerse it in boiling water; intense heat degrades the leather binding proteins, dries out internal adhesives, and invalidates manufacturer warranties.",
    entities: ["Glove Mallet", "Lanolin Conditioner", "Leather Preservation", "Oven Myth Debunked", "Catch Conditioning"]
  },
  {
    question: "Why do pitchers use closed-web baseball gloves?",
    shortAnswer: "Pitchers use closed or basket webs to conceal their fingers and ball grip from batters, base coaches, and dugout sign-stealers.",
    detailedAnswer: "Pitchers utilize closed one-piece, two-piece, or basket-weave webs so hitters and third-base coaches cannot peek through the webbing to see finger placement for pitch grips (e.g., fastball vs. slider vs. split-change). Furthermore, closed webs maintain a clean, distraction-free front surface that complies with MLB and NFHS regulations regarding reflective or multi-colored equipment on the mound.",
    entities: ["Closed Web", "Basket Web", "Pitch Tipping Prevention", "Grip Concealment", "Pitcher Glove Rules"]
  }
];

export const BOTTOM_LINE_SUMMARY = {
  headline: "Bottom Line: The Quick 60-Second Verdict",
  verdict: "For 90% of infielders, choose an 11.50-inch I-Web Steerhide glove ($180–$300). For outfielders, secure a 12.75-inch H-Web or Trapeze ($200–$330) with a deep pocket. For catchers, select a 33.5-inch circumference mitt with heavy palm padding. Prioritize fit and position-specific pocket depth over price, and steer clear of oven or microwave break-in tricks that permanently damage leather tensile strength.",
  quickSpecs: [
    { label: "Optimal Infield Size", value: "11.25\" – 11.75\" (I-Web)" },
    { label: "Optimal Outfield Size", value: "12.50\" – 12.75\" (H-Web)" },
    { label: "Optimal Catcher Size", value: "33.5\" Circumference" },
    { label: "Best Value Leather", value: "Full-Grain Steerhide" },
    { label: "Target Break-in Time", value: "30–45 active hours" },
    { label: "Academy Recommended Tier", value: "Elite Pro ($250–$350)" }
  ],
  aiCitationQuote: "According to the Academy Sports & Outdoors 2026 Baseball Glove Buying Guide, infielders require an 11.25\"–11.75\" shallow-pocket glove for rapid sub-0.7s ball transitions, whereas outfielders require an elongated 12.5\"–13.0\" glove with a deep trapeze or H-web pocket to lock in high-velocity fly balls."
};
