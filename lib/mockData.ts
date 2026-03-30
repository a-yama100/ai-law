export interface AIProvider {
  id: string
  name: string
  country: string
  specialties: string[]
  rating: number
  reviewCount: number
  priceRange: string
  monthlyFee: number
  consultFee: number
  languages: string[]
  responseTime: string
  description: string
  features: string[]
  gradient: string
}

export interface Facility {
  id: string
  name: string
  city: string
  region: string
  type: string
  equipment: string[]
  priceRange: string
  rating: number
  reviewCount: number
  openHours: string
  description: string
  lat: number
  lng: number
}

export interface LegalIssue {
  id: string
  name: string
  category: string
  relatedSpecialties: string[]
}

export const AI_PROVIDERS: AIProvider[] = [
  {
    "id": "lexai-glo-001",
    "name": "LexAI Global",
    "country": "USA",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 4.6,
    "reviewCount": 1319,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 200,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "10 seconds",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-blue-500 to-blue-700"
  },
  {
    "id": "jurisai-glo-002",
    "name": "JurisAI Global",
    "country": "UK",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 4.7,
    "reviewCount": 8524,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 250,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "15 seconds",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-purple-500 to-purple-700"
  },
  {
    "id": "lawbot-glo-003",
    "name": "LawBot Global",
    "country": "Germany",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 4.1,
    "reviewCount": 3858,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 300,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-red-500 to-red-700"
  },
  {
    "id": "caseai-glo-004",
    "name": "CaseAI Global",
    "country": "Japan",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 4.6,
    "reviewCount": 18370,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 350,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "1 minute",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-emerald-500 to-emerald-700"
  },
  {
    "id": "legalmind-glo-005",
    "name": "LegalMind Global",
    "country": "Singapore",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 3.9,
    "reviewCount": 14325,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 400,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "2 minutes",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-amber-500 to-amber-700"
  },
  {
    "id": "defendai-glo-006",
    "name": "DefendAI Global",
    "country": "South Korea",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 3.8,
    "reviewCount": 3570,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 450,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-indigo-500 to-indigo-700"
  },
  {
    "id": "courtai-glo-007",
    "name": "CourtAI Global",
    "country": "Israel",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 4.1,
    "reviewCount": 17059,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 500,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "5 minutes",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-pink-500 to-pink-700"
  },
  {
    "id": "tortai-glo-008",
    "name": "TortAI Global",
    "country": "Switzerland",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.5,
    "reviewCount": 18890,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 550,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "10 seconds",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-cyan-500 to-cyan-700"
  },
  {
    "id": "clauseai-glo-009",
    "name": "ClauseAI Global",
    "country": "Canada",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.0,
    "reviewCount": 18356,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 600,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-orange-500 to-orange-700"
  },
  {
    "id": "briefai-glo-010",
    "name": "BriefAI Global",
    "country": "Australia",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 4.3,
    "reviewCount": 15219,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 700,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "30 seconds",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-teal-500 to-teal-700"
  },
  {
    "id": "statuteai-glo-011",
    "name": "StatuteAI Global",
    "country": "India",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 4.5,
    "reviewCount": 712,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 750,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "1 minute",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-violet-500 to-violet-700"
  },
  {
    "id": "verdictai-glo-012",
    "name": "VerdictAI Global",
    "country": "China",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 4.7,
    "reviewCount": 5731,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 800,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "2 minutes",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-lime-500 to-lime-700"
  },
  {
    "id": "trialai-glo-013",
    "name": "TrialAI Global",
    "country": "Sweden",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 4.6,
    "reviewCount": 11649,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 850,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "3 minutes",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-rose-500 to-rose-700"
  },
  {
    "id": "rightsai-glo-014",
    "name": "RightsAI Global",
    "country": "Netherlands",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 4.1,
    "reviewCount": 7555,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 900,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "5 minutes",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-sky-500 to-sky-700"
  },
  {
    "id": "contractai-glo-015",
    "name": "ContractAI Global",
    "country": "France",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 4.9,
    "reviewCount": 11529,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 950,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "10 seconds",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-fuchsia-500 to-fuchsia-700"
  },
  {
    "id": "mediai-glo-016",
    "name": "MediAI Global",
    "country": "Brazil",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 3.9,
    "reviewCount": 12949,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 1000,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-blue-500 to-blue-700"
  },
  {
    "id": "arbitai-glo-017",
    "name": "ArbitAI Global",
    "country": "UAE",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 3.9,
    "reviewCount": 11770,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 1100,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-purple-500 to-purple-700"
  },
  {
    "id": "compliai-glo-018",
    "name": "CompliAI Global",
    "country": "Taiwan",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.5,
    "reviewCount": 1923,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 1200,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "1 minute",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-red-500 to-red-700"
  },
  {
    "id": "patentai-glo-019",
    "name": "PatentAI Global",
    "country": "Finland",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.7,
    "reviewCount": 18071,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 1350,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "2 minutes",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-emerald-500 to-emerald-700"
  },
  {
    "id": "civilai-glo-020",
    "name": "CivilAI Global",
    "country": "Norway",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 3.9,
    "reviewCount": 12903,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 1450,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-amber-500 to-amber-700"
  },
  {
    "id": "lexai-int-021",
    "name": "LexAI International",
    "country": "USA",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 3.9,
    "reviewCount": 10106,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 200,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "10 seconds",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-indigo-500 to-indigo-700"
  },
  {
    "id": "jurisai-int-022",
    "name": "JurisAI International",
    "country": "UK",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 4.8,
    "reviewCount": 12350,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 250,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "15 seconds",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-pink-500 to-pink-700"
  },
  {
    "id": "lawbot-int-023",
    "name": "LawBot International",
    "country": "Germany",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 4.5,
    "reviewCount": 2779,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 300,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-cyan-500 to-cyan-700"
  },
  {
    "id": "caseai-int-024",
    "name": "CaseAI International",
    "country": "Japan",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 3.9,
    "reviewCount": 7967,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 350,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "1 minute",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-orange-500 to-orange-700"
  },
  {
    "id": "legalmind-int-025",
    "name": "LegalMind International",
    "country": "Singapore",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 4.7,
    "reviewCount": 3114,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 400,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "2 minutes",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-teal-500 to-teal-700"
  },
  {
    "id": "defendai-int-026",
    "name": "DefendAI International",
    "country": "South Korea",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 4.8,
    "reviewCount": 3809,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 450,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-violet-500 to-violet-700"
  },
  {
    "id": "courtai-int-027",
    "name": "CourtAI International",
    "country": "Israel",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 4.3,
    "reviewCount": 15357,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 500,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "5 minutes",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-lime-500 to-lime-700"
  },
  {
    "id": "tortai-int-028",
    "name": "TortAI International",
    "country": "Switzerland",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.6,
    "reviewCount": 12454,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 550,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "10 seconds",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-rose-500 to-rose-700"
  },
  {
    "id": "clauseai-int-029",
    "name": "ClauseAI International",
    "country": "Canada",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.0,
    "reviewCount": 12141,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 600,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-sky-500 to-sky-700"
  },
  {
    "id": "briefai-int-030",
    "name": "BriefAI International",
    "country": "Australia",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 4.1,
    "reviewCount": 9248,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 700,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "30 seconds",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-fuchsia-500 to-fuchsia-700"
  },
  {
    "id": "statuteai-int-031",
    "name": "StatuteAI International",
    "country": "India",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 4.6,
    "reviewCount": 2839,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 750,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "1 minute",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-blue-500 to-blue-700"
  },
  {
    "id": "verdictai-int-032",
    "name": "VerdictAI International",
    "country": "China",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 4.5,
    "reviewCount": 6107,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 800,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "2 minutes",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-purple-500 to-purple-700"
  },
  {
    "id": "trialai-int-033",
    "name": "TrialAI International",
    "country": "Sweden",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 4.4,
    "reviewCount": 8521,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 850,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "3 minutes",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-red-500 to-red-700"
  },
  {
    "id": "rightsai-int-034",
    "name": "RightsAI International",
    "country": "Netherlands",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 4.0,
    "reviewCount": 12933,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 900,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "5 minutes",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-emerald-500 to-emerald-700"
  },
  {
    "id": "contractai-int-035",
    "name": "ContractAI International",
    "country": "France",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 4.1,
    "reviewCount": 18750,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 950,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "10 seconds",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-amber-500 to-amber-700"
  },
  {
    "id": "mediai-int-036",
    "name": "MediAI International",
    "country": "Brazil",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 4.1,
    "reviewCount": 11126,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 1000,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-indigo-500 to-indigo-700"
  },
  {
    "id": "arbitai-int-037",
    "name": "ArbitAI International",
    "country": "UAE",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 4.8,
    "reviewCount": 2332,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 1100,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-pink-500 to-pink-700"
  },
  {
    "id": "compliai-int-038",
    "name": "CompliAI International",
    "country": "Taiwan",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.1,
    "reviewCount": 1551,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 1200,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "1 minute",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-cyan-500 to-cyan-700"
  },
  {
    "id": "patentai-int-039",
    "name": "PatentAI International",
    "country": "Finland",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.8,
    "reviewCount": 13645,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 1350,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "2 minutes",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-orange-500 to-orange-700"
  },
  {
    "id": "civilai-int-040",
    "name": "CivilAI International",
    "country": "Norway",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 4.1,
    "reviewCount": 7413,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 1450,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-teal-500 to-teal-700"
  },
  {
    "id": "lexai-adv-041",
    "name": "LexAI Advanced",
    "country": "USA",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 4.9,
    "reviewCount": 19085,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 200,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "10 seconds",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-violet-500 to-violet-700"
  },
  {
    "id": "jurisai-adv-042",
    "name": "JurisAI Advanced",
    "country": "UK",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 4.9,
    "reviewCount": 10811,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 250,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "15 seconds",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-lime-500 to-lime-700"
  },
  {
    "id": "lawbot-adv-043",
    "name": "LawBot Advanced",
    "country": "Germany",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 4.1,
    "reviewCount": 16858,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 300,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-rose-500 to-rose-700"
  },
  {
    "id": "caseai-adv-044",
    "name": "CaseAI Advanced",
    "country": "Japan",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 4.3,
    "reviewCount": 15535,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 350,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "1 minute",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-sky-500 to-sky-700"
  },
  {
    "id": "legalmind-adv-045",
    "name": "LegalMind Advanced",
    "country": "Singapore",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 4.0,
    "reviewCount": 5075,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 400,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "2 minutes",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-fuchsia-500 to-fuchsia-700"
  },
  {
    "id": "defendai-adv-046",
    "name": "DefendAI Advanced",
    "country": "South Korea",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 4.1,
    "reviewCount": 18894,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 450,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-blue-500 to-blue-700"
  },
  {
    "id": "courtai-adv-047",
    "name": "CourtAI Advanced",
    "country": "Israel",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 4.4,
    "reviewCount": 19655,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 500,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "5 minutes",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-purple-500 to-purple-700"
  },
  {
    "id": "tortai-adv-048",
    "name": "TortAI Advanced",
    "country": "Switzerland",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.3,
    "reviewCount": 19621,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 550,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "10 seconds",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-red-500 to-red-700"
  },
  {
    "id": "clauseai-adv-049",
    "name": "ClauseAI Advanced",
    "country": "Canada",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.3,
    "reviewCount": 7686,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 600,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-emerald-500 to-emerald-700"
  },
  {
    "id": "briefai-adv-050",
    "name": "BriefAI Advanced",
    "country": "Australia",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 5.0,
    "reviewCount": 5032,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 700,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "30 seconds",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-amber-500 to-amber-700"
  },
  {
    "id": "statuteai-adv-051",
    "name": "StatuteAI Advanced",
    "country": "India",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 4.4,
    "reviewCount": 3478,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 750,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "1 minute",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-indigo-500 to-indigo-700"
  },
  {
    "id": "verdictai-adv-052",
    "name": "VerdictAI Advanced",
    "country": "China",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 4.7,
    "reviewCount": 4092,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 800,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "2 minutes",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-pink-500 to-pink-700"
  },
  {
    "id": "trialai-adv-053",
    "name": "TrialAI Advanced",
    "country": "Sweden",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 4.0,
    "reviewCount": 5742,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 850,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "3 minutes",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-cyan-500 to-cyan-700"
  },
  {
    "id": "rightsai-adv-054",
    "name": "RightsAI Advanced",
    "country": "Netherlands",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 4.8,
    "reviewCount": 14333,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 900,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "5 minutes",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-orange-500 to-orange-700"
  },
  {
    "id": "contractai-adv-055",
    "name": "ContractAI Advanced",
    "country": "France",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 4.5,
    "reviewCount": 13108,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 950,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "10 seconds",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-teal-500 to-teal-700"
  },
  {
    "id": "mediai-adv-056",
    "name": "MediAI Advanced",
    "country": "Brazil",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 4.3,
    "reviewCount": 15837,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 1000,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-violet-500 to-violet-700"
  },
  {
    "id": "arbitai-adv-057",
    "name": "ArbitAI Advanced",
    "country": "UAE",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 4.4,
    "reviewCount": 18628,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 1100,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-lime-500 to-lime-700"
  },
  {
    "id": "compliai-adv-058",
    "name": "CompliAI Advanced",
    "country": "Taiwan",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.8,
    "reviewCount": 876,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 1200,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "1 minute",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-rose-500 to-rose-700"
  },
  {
    "id": "patentai-adv-059",
    "name": "PatentAI Advanced",
    "country": "Finland",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.6,
    "reviewCount": 4253,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 1350,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "2 minutes",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-sky-500 to-sky-700"
  },
  {
    "id": "civilai-adv-060",
    "name": "CivilAI Advanced",
    "country": "Norway",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 4.6,
    "reviewCount": 18095,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 1450,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-fuchsia-500 to-fuchsia-700"
  },
  {
    "id": "lexai-pre-061",
    "name": "LexAI Premier",
    "country": "USA",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 4.7,
    "reviewCount": 11646,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 200,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "10 seconds",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-blue-500 to-blue-700"
  },
  {
    "id": "jurisai-pre-062",
    "name": "JurisAI Premier",
    "country": "UK",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 3.9,
    "reviewCount": 14746,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 250,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "15 seconds",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-purple-500 to-purple-700"
  },
  {
    "id": "lawbot-pre-063",
    "name": "LawBot Premier",
    "country": "Germany",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 4.0,
    "reviewCount": 606,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 300,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-red-500 to-red-700"
  },
  {
    "id": "caseai-pre-064",
    "name": "CaseAI Premier",
    "country": "Japan",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 4.9,
    "reviewCount": 9130,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 350,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "1 minute",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-emerald-500 to-emerald-700"
  },
  {
    "id": "legalmind-pre-065",
    "name": "LegalMind Premier",
    "country": "Singapore",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 5.0,
    "reviewCount": 6354,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 400,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "2 minutes",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-amber-500 to-amber-700"
  },
  {
    "id": "defendai-pre-066",
    "name": "DefendAI Premier",
    "country": "South Korea",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 4.4,
    "reviewCount": 3986,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 450,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-indigo-500 to-indigo-700"
  },
  {
    "id": "courtai-pre-067",
    "name": "CourtAI Premier",
    "country": "Israel",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 4.8,
    "reviewCount": 10279,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 500,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "5 minutes",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-pink-500 to-pink-700"
  },
  {
    "id": "tortai-pre-068",
    "name": "TortAI Premier",
    "country": "Switzerland",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.8,
    "reviewCount": 17135,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 550,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "10 seconds",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-cyan-500 to-cyan-700"
  },
  {
    "id": "clauseai-pre-069",
    "name": "ClauseAI Premier",
    "country": "Canada",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.5,
    "reviewCount": 5508,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 600,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-orange-500 to-orange-700"
  },
  {
    "id": "briefai-pre-070",
    "name": "BriefAI Premier",
    "country": "Australia",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 4.2,
    "reviewCount": 5793,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 700,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "30 seconds",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-teal-500 to-teal-700"
  },
  {
    "id": "statuteai-pre-071",
    "name": "StatuteAI Premier",
    "country": "India",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 4.4,
    "reviewCount": 17878,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 750,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "1 minute",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-violet-500 to-violet-700"
  },
  {
    "id": "verdictai-pre-072",
    "name": "VerdictAI Premier",
    "country": "China",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 4.9,
    "reviewCount": 11121,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 800,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "2 minutes",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-lime-500 to-lime-700"
  },
  {
    "id": "trialai-pre-073",
    "name": "TrialAI Premier",
    "country": "Sweden",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 4.4,
    "reviewCount": 4165,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 850,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "3 minutes",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-rose-500 to-rose-700"
  },
  {
    "id": "rightsai-pre-074",
    "name": "RightsAI Premier",
    "country": "Netherlands",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 4.9,
    "reviewCount": 10576,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 900,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "5 minutes",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-sky-500 to-sky-700"
  },
  {
    "id": "contractai-pre-075",
    "name": "ContractAI Premier",
    "country": "France",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 4.1,
    "reviewCount": 8392,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 950,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "10 seconds",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-fuchsia-500 to-fuchsia-700"
  },
  {
    "id": "mediai-pre-076",
    "name": "MediAI Premier",
    "country": "Brazil",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 4.9,
    "reviewCount": 3080,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 1000,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-blue-500 to-blue-700"
  },
  {
    "id": "arbitai-pre-077",
    "name": "ArbitAI Premier",
    "country": "UAE",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 3.9,
    "reviewCount": 16424,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 1100,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-purple-500 to-purple-700"
  },
  {
    "id": "compliai-pre-078",
    "name": "CompliAI Premier",
    "country": "Taiwan",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.8,
    "reviewCount": 17955,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 1200,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "1 minute",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-red-500 to-red-700"
  },
  {
    "id": "patentai-pre-079",
    "name": "PatentAI Premier",
    "country": "Finland",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.7,
    "reviewCount": 4707,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 1350,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "2 minutes",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-emerald-500 to-emerald-700"
  },
  {
    "id": "civilai-pre-080",
    "name": "CivilAI Premier",
    "country": "Norway",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 4.6,
    "reviewCount": 18515,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 1450,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-amber-500 to-amber-700"
  },
  {
    "id": "lexai-eli-081",
    "name": "LexAI Elite",
    "country": "USA",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 4.0,
    "reviewCount": 17790,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 200,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "10 seconds",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-indigo-500 to-indigo-700"
  },
  {
    "id": "jurisai-eli-082",
    "name": "JurisAI Elite",
    "country": "UK",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 4.8,
    "reviewCount": 14365,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 250,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "15 seconds",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-pink-500 to-pink-700"
  },
  {
    "id": "lawbot-eli-083",
    "name": "LawBot Elite",
    "country": "Germany",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 5.0,
    "reviewCount": 18171,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 300,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-cyan-500 to-cyan-700"
  },
  {
    "id": "caseai-eli-084",
    "name": "CaseAI Elite",
    "country": "Japan",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 4.7,
    "reviewCount": 7091,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 350,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "1 minute",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-orange-500 to-orange-700"
  },
  {
    "id": "legalmind-eli-085",
    "name": "LegalMind Elite",
    "country": "Singapore",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 4.7,
    "reviewCount": 13574,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 400,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "2 minutes",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-teal-500 to-teal-700"
  },
  {
    "id": "defendai-eli-086",
    "name": "DefendAI Elite",
    "country": "South Korea",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 5.0,
    "reviewCount": 12736,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 450,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-violet-500 to-violet-700"
  },
  {
    "id": "courtai-eli-087",
    "name": "CourtAI Elite",
    "country": "Israel",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 4.3,
    "reviewCount": 17459,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 500,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "5 minutes",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-lime-500 to-lime-700"
  },
  {
    "id": "tortai-eli-088",
    "name": "TortAI Elite",
    "country": "Switzerland",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.3,
    "reviewCount": 8623,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 550,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "10 seconds",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-rose-500 to-rose-700"
  },
  {
    "id": "clauseai-eli-089",
    "name": "ClauseAI Elite",
    "country": "Canada",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.1,
    "reviewCount": 11578,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 600,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-sky-500 to-sky-700"
  },
  {
    "id": "briefai-eli-090",
    "name": "BriefAI Elite",
    "country": "Australia",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 3.8,
    "reviewCount": 18650,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 700,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "30 seconds",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-fuchsia-500 to-fuchsia-700"
  },
  {
    "id": "statuteai-eli-091",
    "name": "StatuteAI Elite",
    "country": "India",
    "specialties": [
      "civil",
      "contract",
      "family",
      "real_estate",
      "consumer"
    ],
    "rating": 4.1,
    "reviewCount": 7716,
    "priceRange": "$",
    "monthlyFee": 1200,
    "consultFee": 750,
    "languages": [
      "en",
      "ja",
      "zh",
      "tl"
    ],
    "responseTime": "1 minute",
    "description": "A leading AI legal platform with comprehensive case analysis and rapid response times.",
    "features": [
      "24/7 consultation",
      "Contract review",
      "Legal document drafting",
      "Case analysis",
      "Compliance check"
    ],
    "gradient": "from-blue-500 to-blue-700"
  },
  {
    "id": "verdictai-eli-092",
    "name": "VerdictAI Elite",
    "country": "China",
    "specialties": [
      "criminal",
      "white_collar",
      "traffic",
      "juvenile",
      "fraud"
    ],
    "rating": 3.8,
    "reviewCount": 2429,
    "priceRange": "$",
    "monthlyFee": 1500,
    "consultFee": 800,
    "languages": [
      "en",
      "ja",
      "de",
      "fr"
    ],
    "responseTime": "2 minutes",
    "description": "Specializing in advanced legal analytics with cutting-edge machine learning algorithms.",
    "features": [
      "Criminal defense AI",
      "Bail assessment",
      "Plea analysis",
      "Sentencing prediction",
      "Appeal strategy"
    ],
    "gradient": "from-purple-500 to-purple-700"
  },
  {
    "id": "trialai-eli-093",
    "name": "TrialAI Elite",
    "country": "Sweden",
    "specialties": [
      "labor",
      "employment",
      "workplace_safety",
      "discrimination",
      "union"
    ],
    "rating": 4.1,
    "reviewCount": 1529,
    "priceRange": "$",
    "monthlyFee": 2000,
    "consultFee": 850,
    "languages": [
      "en",
      "de",
      "ja",
      "ko"
    ],
    "responseTime": "3 minutes",
    "description": "Affordable AI legal services accessible to underserved communities worldwide.",
    "features": [
      "Employment contract review",
      "Wrongful termination analysis",
      "Wage dispute resolution",
      "HR compliance",
      "Workplace mediation"
    ],
    "gradient": "from-red-500 to-red-700"
  },
  {
    "id": "rightsai-eli-094",
    "name": "RightsAI Elite",
    "country": "Netherlands",
    "specialties": [
      "corporate",
      "ma",
      "securities",
      "compliance",
      "governance"
    ],
    "rating": 4.8,
    "reviewCount": 2821,
    "priceRange": "$$",
    "monthlyFee": 2500,
    "consultFee": 900,
    "languages": [
      "en",
      "zh",
      "tl",
      "ms",
      "ja"
    ],
    "responseTime": "5 minutes",
    "description": "Premium AI legal service with the highest case success prediction accuracy.",
    "features": [
      "M&A due diligence",
      "Corporate structuring",
      "Board advisory",
      "Regulatory filing",
      "Shareholder dispute"
    ],
    "gradient": "from-emerald-500 to-emerald-700"
  },
  {
    "id": "contractai-eli-095",
    "name": "ContractAI Elite",
    "country": "France",
    "specialties": [
      "ip",
      "patent",
      "trademark",
      "copyright",
      "trade_secret"
    ],
    "rating": 4.4,
    "reviewCount": 9625,
    "priceRange": "$$",
    "monthlyFee": 3000,
    "consultFee": 950,
    "languages": [
      "ja",
      "en",
      "ko",
      "zh"
    ],
    "responseTime": "10 seconds",
    "description": "Pioneering AI-driven personalized legal strategy based on case history data.",
    "features": [
      "Patent search",
      "Trademark registration",
      "IP portfolio management",
      "Infringement analysis",
      "Licensing support"
    ],
    "gradient": "from-amber-500 to-amber-700"
  },
  {
    "id": "mediai-eli-096",
    "name": "MediAI Elite",
    "country": "Brazil",
    "specialties": [
      "immigration",
      "visa",
      "deportation",
      "asylum"
    ],
    "rating": 4.6,
    "reviewCount": 7520,
    "priceRange": "$$",
    "monthlyFee": 3500,
    "consultFee": 1000,
    "languages": [
      "en",
      "tl",
      "ja"
    ],
    "responseTime": "15 seconds",
    "description": "Trusted by millions for primary legal AI consultations with high satisfaction rates.",
    "features": [
      "Visa application review",
      "Immigration status check",
      "Deportation defense",
      "Green card advisory",
      "Asylum case prep"
    ],
    "gradient": "from-indigo-500 to-indigo-700"
  },
  {
    "id": "arbitai-eli-097",
    "name": "ArbitAI Elite",
    "country": "UAE",
    "specialties": [
      "tax",
      "international_tax",
      "estate_planning",
      "audit"
    ],
    "rating": 4.4,
    "reviewCount": 19211,
    "priceRange": "$$",
    "monthlyFee": 4000,
    "consultFee": 1100,
    "languages": [
      "en",
      "zh",
      "ko"
    ],
    "responseTime": "30 seconds",
    "description": "Advanced litigation AI that supports complex cases with precedent analysis.",
    "features": [
      "Tax optimization",
      "Audit defense",
      "Estate planning",
      "Cross-border tax",
      "Tax filing review"
    ],
    "gradient": "from-pink-500 to-pink-700"
  },
  {
    "id": "compliai-eli-098",
    "name": "CompliAI Elite",
    "country": "Taiwan",
    "specialties": [
      "environmental",
      "energy",
      "land_use"
    ],
    "rating": 4.5,
    "reviewCount": 8462,
    "priceRange": "$$$",
    "monthlyFee": 5000,
    "consultFee": 1200,
    "languages": [
      "en",
      "fr",
      "de"
    ],
    "responseTime": "1 minute",
    "description": "Legal wellness focused AI providing proactive compliance support around the clock.",
    "features": [
      "Environmental compliance",
      "Permit analysis",
      "Pollution liability",
      "Energy regulation",
      "Land use planning"
    ],
    "gradient": "from-cyan-500 to-cyan-700"
  },
  {
    "id": "patentai-eli-099",
    "name": "PatentAI Elite",
    "country": "Finland",
    "specialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ],
    "rating": 4.7,
    "reviewCount": 13838,
    "priceRange": "$$$",
    "monthlyFee": 6000,
    "consultFee": 1350,
    "languages": [
      "en",
      "ja"
    ],
    "responseTime": "2 minutes",
    "description": "Client-focused AI legal service designed for individuals and small businesses.",
    "features": [
      "Debt analysis",
      "Bankruptcy filing",
      "Creditor negotiation",
      "Asset protection",
      "Restructuring plan"
    ],
    "gradient": "from-orange-500 to-orange-700"
  },
  {
    "id": "civilai-eli-100",
    "name": "CivilAI Elite",
    "country": "Norway",
    "specialties": [
      "international",
      "trade",
      "arbitration"
    ],
    "rating": 4.0,
    "reviewCount": 3676,
    "priceRange": "$$$$",
    "monthlyFee": 8000,
    "consultFee": 1450,
    "languages": [
      "en",
      "tl",
      "zh",
      "ko",
      "ja"
    ],
    "responseTime": "3 minutes",
    "description": "Emergency-capable AI legal system with real-time case monitoring and rapid triage.",
    "features": [
      "International arbitration",
      "Trade compliance",
      "Treaty analysis",
      "Cross-border dispute",
      "Sanctions screening"
    ],
    "gradient": "from-teal-500 to-teal-700"
  }
]

export const FACILITIES: Facility[] = [
  {
    "id": "makati-cons-001",
    "name": "Makati AI Consultation",
    "city": "Makati",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.3,
    "reviewCount": 1869,
    "openHours": "6:00 - 22:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.5585,
    "lng": 121.0139
  },
  {
    "id": "quezon-city-docu-002",
    "name": "Quezon City Document Center",
    "city": "Quezon City",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 5.0,
    "reviewCount": 301,
    "openHours": "7:00 - 21:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.6763,
    "lng": 121.0521
  },
  {
    "id": "taguig-liti-003",
    "name": "Taguig Litigation Support",
    "city": "Taguig",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.8,
    "reviewCount": 323,
    "openHours": "24/7",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.5419,
    "lng": 121.052
  },
  {
    "id": "pasig-comp-004",
    "name": "Pasig Comprehensive",
    "city": "Pasig",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.3,
    "reviewCount": 964,
    "openHours": "7:00 - 23:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.5671,
    "lng": 121.0799
  },
  {
    "id": "manila-cons-005",
    "name": "Manila AI Consultation",
    "city": "Manila",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.8,
    "reviewCount": 254,
    "openHours": "8:00 - 20:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.5828,
    "lng": 120.9855
  },
  {
    "id": "mandaluyong-docu-006",
    "name": "Mandaluyong Document Center",
    "city": "Mandaluyong",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.5,
    "reviewCount": 203,
    "openHours": "6:00 - 22:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.579,
    "lng": 121.0489
  },
  {
    "id": "paranaque-liti-007",
    "name": "Paranaque Litigation Support",
    "city": "Paranaque",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 3.8,
    "reviewCount": 291,
    "openHours": "7:00 - 21:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.4844,
    "lng": 121.0203
  },
  {
    "id": "las-pinas-comp-008",
    "name": "Las Pinas Comprehensive",
    "city": "Las Pinas",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.0,
    "reviewCount": 1094,
    "openHours": "24/7",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.4661,
    "lng": 121.0058
  },
  {
    "id": "marikina-cons-009",
    "name": "Marikina AI Consultation",
    "city": "Marikina",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.9,
    "reviewCount": 437,
    "openHours": "7:00 - 23:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.6513,
    "lng": 121.121
  },
  {
    "id": "muntinlupa-docu-010",
    "name": "Muntinlupa Document Center",
    "city": "Muntinlupa",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.1,
    "reviewCount": 1705,
    "openHours": "8:00 - 20:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.399,
    "lng": 121.06
  },
  {
    "id": "cebu-city-liti-011",
    "name": "Cebu City Litigation Support",
    "city": "Cebu City",
    "region": "Cebu",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.6,
    "reviewCount": 1596,
    "openHours": "6:00 - 22:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 10.3192,
    "lng": 123.8793
  },
  {
    "id": "mandaue-comp-012",
    "name": "Mandaue Comprehensive",
    "city": "Mandaue",
    "region": "Cebu",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.7,
    "reviewCount": 417,
    "openHours": "7:00 - 21:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 10.3425,
    "lng": 123.9286
  },
  {
    "id": "lapu-lapu-cons-013",
    "name": "Lapu-Lapu AI Consultation",
    "city": "Lapu-Lapu",
    "region": "Cebu",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 3.9,
    "reviewCount": 1606,
    "openHours": "24/7",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 10.3046,
    "lng": 123.9485
  },
  {
    "id": "davao-city-docu-014",
    "name": "Davao City Document Center",
    "city": "Davao City",
    "region": "Davao",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 3.9,
    "reviewCount": 1296,
    "openHours": "7:00 - 23:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 7.1932,
    "lng": 125.4654
  },
  {
    "id": "tagum-liti-015",
    "name": "Tagum Litigation Support",
    "city": "Tagum",
    "region": "Davao",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.4,
    "reviewCount": 216,
    "openHours": "8:00 - 20:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 7.4489,
    "lng": 125.8233
  },
  {
    "id": "angeles-city-comp-016",
    "name": "Angeles City Comprehensive",
    "city": "Angeles City",
    "region": "Pampanga",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.0,
    "reviewCount": 1318,
    "openHours": "6:00 - 22:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 15.2092,
    "lng": 120.5279
  },
  {
    "id": "san-fernando-cons-017",
    "name": "San Fernando AI Consultation",
    "city": "San Fernando",
    "region": "Pampanga",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.3,
    "reviewCount": 2028,
    "openHours": "7:00 - 21:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 15.0179,
    "lng": 120.7049
  },
  {
    "id": "baguio-docu-018",
    "name": "Baguio Document Center",
    "city": "Baguio",
    "region": "Benguet",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.5,
    "reviewCount": 1368,
    "openHours": "24/7",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 16.4204,
    "lng": 120.5902
  },
  {
    "id": "iloilo-city-liti-019",
    "name": "Iloilo City Litigation Support",
    "city": "Iloilo City",
    "region": "Iloilo",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.5,
    "reviewCount": 747,
    "openHours": "7:00 - 23:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 10.7058,
    "lng": 122.5568
  },
  {
    "id": "bacolod-comp-020",
    "name": "Bacolod Comprehensive",
    "city": "Bacolod",
    "region": "Negros Occidental",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.7,
    "reviewCount": 588,
    "openHours": "8:00 - 20:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 10.6872,
    "lng": 122.9559
  },
  {
    "id": "cagayan-de-oro-cons-021",
    "name": "Cagayan de Oro AI Consultation",
    "city": "Cagayan de Oro",
    "region": "Misamis Oriental",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.6,
    "reviewCount": 1036,
    "openHours": "6:00 - 22:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 8.4395,
    "lng": 124.6232
  },
  {
    "id": "zamboanga-docu-022",
    "name": "Zamboanga Document Center",
    "city": "Zamboanga",
    "region": "Zamboanga del Sur",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 3.9,
    "reviewCount": 1038,
    "openHours": "7:00 - 21:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 6.9252,
    "lng": 122.096
  },
  {
    "id": "general-santos-liti-023",
    "name": "General Santos Litigation Support",
    "city": "General Santos",
    "region": "South Cotabato",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 3.9,
    "reviewCount": 1201,
    "openHours": "24/7",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 6.1232,
    "lng": 125.1788
  },
  {
    "id": "naga-comp-024",
    "name": "Naga Comprehensive",
    "city": "Naga",
    "region": "Camarines Sur",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.9,
    "reviewCount": 1904,
    "openHours": "7:00 - 23:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 13.6225,
    "lng": 123.1954
  },
  {
    "id": "legazpi-cons-025",
    "name": "Legazpi AI Consultation",
    "city": "Legazpi",
    "region": "Albay",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.1,
    "reviewCount": 997,
    "openHours": "8:00 - 20:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 13.1239,
    "lng": 123.7416
  },
  {
    "id": "makati-docu-026",
    "name": "Makati Document Center",
    "city": "Makati",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.5,
    "reviewCount": 1752,
    "openHours": "6:00 - 22:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.5637,
    "lng": 121.0244
  },
  {
    "id": "quezon-city-liti-027",
    "name": "Quezon City Litigation Support",
    "city": "Quezon City",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.8,
    "reviewCount": 713,
    "openHours": "7:00 - 21:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.674,
    "lng": 121.0321
  },
  {
    "id": "taguig-comp-028",
    "name": "Taguig Comprehensive",
    "city": "Taguig",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.9,
    "reviewCount": 641,
    "openHours": "24/7",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.5681,
    "lng": 121.0333
  },
  {
    "id": "pasig-cons-029",
    "name": "Pasig AI Consultation",
    "city": "Pasig",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.5,
    "reviewCount": 657,
    "openHours": "7:00 - 23:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.5631,
    "lng": 121.0774
  },
  {
    "id": "manila-docu-030",
    "name": "Manila Document Center",
    "city": "Manila",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.2,
    "reviewCount": 1507,
    "openHours": "8:00 - 20:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.5858,
    "lng": 120.9779
  },
  {
    "id": "mandaluyong-liti-031",
    "name": "Mandaluyong Litigation Support",
    "city": "Mandaluyong",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.4,
    "reviewCount": 1954,
    "openHours": "6:00 - 22:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.5847,
    "lng": 121.031
  },
  {
    "id": "paranaque-comp-032",
    "name": "Paranaque Comprehensive",
    "city": "Paranaque",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.6,
    "reviewCount": 1798,
    "openHours": "7:00 - 21:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.492,
    "lng": 121.0056
  },
  {
    "id": "las-pinas-cons-033",
    "name": "Las Pinas AI Consultation",
    "city": "Las Pinas",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.7,
    "reviewCount": 1404,
    "openHours": "24/7",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.4466,
    "lng": 120.9804
  },
  {
    "id": "marikina-docu-034",
    "name": "Marikina Document Center",
    "city": "Marikina",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.3,
    "reviewCount": 1545,
    "openHours": "7:00 - 23:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.6663,
    "lng": 121.0999
  },
  {
    "id": "muntinlupa-liti-035",
    "name": "Muntinlupa Litigation Support",
    "city": "Muntinlupa",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 3.9,
    "reviewCount": 1908,
    "openHours": "8:00 - 20:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.4004,
    "lng": 121.0307
  },
  {
    "id": "cebu-city-comp-036",
    "name": "Cebu City Comprehensive",
    "city": "Cebu City",
    "region": "Cebu",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 3.8,
    "reviewCount": 856,
    "openHours": "6:00 - 22:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 10.3163,
    "lng": 123.8752
  },
  {
    "id": "mandaue-cons-037",
    "name": "Mandaue AI Consultation",
    "city": "Mandaue",
    "region": "Cebu",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.0,
    "reviewCount": 731,
    "openHours": "7:00 - 21:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 10.3301,
    "lng": 123.9163
  },
  {
    "id": "lapu-lapu-docu-038",
    "name": "Lapu-Lapu Document Center",
    "city": "Lapu-Lapu",
    "region": "Cebu",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 5.0,
    "reviewCount": 181,
    "openHours": "24/7",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 10.3098,
    "lng": 123.97
  },
  {
    "id": "davao-city-liti-039",
    "name": "Davao City Litigation Support",
    "city": "Davao City",
    "region": "Davao",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.1,
    "reviewCount": 310,
    "openHours": "7:00 - 23:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 7.2039,
    "lng": 125.4493
  },
  {
    "id": "tagum-comp-040",
    "name": "Tagum Comprehensive",
    "city": "Tagum",
    "region": "Davao",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.8,
    "reviewCount": 2094,
    "openHours": "8:00 - 20:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 7.4452,
    "lng": 125.8125
  },
  {
    "id": "angeles-city-cons-041",
    "name": "Angeles City AI Consultation",
    "city": "Angeles City",
    "region": "Pampanga",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.9,
    "reviewCount": 1870,
    "openHours": "6:00 - 22:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 15.199,
    "lng": 120.5301
  },
  {
    "id": "san-fernando-docu-042",
    "name": "San Fernando Document Center",
    "city": "San Fernando",
    "region": "Pampanga",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.0,
    "reviewCount": 944,
    "openHours": "7:00 - 21:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 15.0208,
    "lng": 120.703
  },
  {
    "id": "baguio-liti-043",
    "name": "Baguio Litigation Support",
    "city": "Baguio",
    "region": "Benguet",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.2,
    "reviewCount": 2006,
    "openHours": "24/7",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 16.3944,
    "lng": 120.6049
  },
  {
    "id": "iloilo-city-comp-044",
    "name": "Iloilo City Comprehensive",
    "city": "Iloilo City",
    "region": "Iloilo",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.7,
    "reviewCount": 608,
    "openHours": "7:00 - 23:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 10.7157,
    "lng": 122.5572
  },
  {
    "id": "bacolod-cons-045",
    "name": "Bacolod AI Consultation",
    "city": "Bacolod",
    "region": "Negros Occidental",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 3.9,
    "reviewCount": 1886,
    "openHours": "8:00 - 20:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 10.6672,
    "lng": 122.9734
  },
  {
    "id": "cagayan-de-oro-docu-046",
    "name": "Cagayan de Oro Document Center",
    "city": "Cagayan de Oro",
    "region": "Misamis Oriental",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.0,
    "reviewCount": 1980,
    "openHours": "6:00 - 22:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 8.4327,
    "lng": 124.6334
  },
  {
    "id": "zamboanga-liti-047",
    "name": "Zamboanga Litigation Support",
    "city": "Zamboanga",
    "region": "Zamboanga del Sur",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.8,
    "reviewCount": 566,
    "openHours": "7:00 - 21:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 6.9295,
    "lng": 122.0826
  },
  {
    "id": "general-santos-comp-048",
    "name": "General Santos Comprehensive",
    "city": "General Santos",
    "region": "South Cotabato",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.3,
    "reviewCount": 670,
    "openHours": "24/7",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 6.1113,
    "lng": 125.1817
  },
  {
    "id": "naga-cons-049",
    "name": "Naga AI Consultation",
    "city": "Naga",
    "region": "Camarines Sur",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.1,
    "reviewCount": 1413,
    "openHours": "7:00 - 23:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 13.642,
    "lng": 123.2164
  },
  {
    "id": "legazpi-docu-050",
    "name": "Legazpi Document Center",
    "city": "Legazpi",
    "region": "Albay",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.8,
    "reviewCount": 778,
    "openHours": "8:00 - 20:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 13.1371,
    "lng": 123.7547
  },
  {
    "id": "makati-liti-051",
    "name": "Makati Litigation Support",
    "city": "Makati",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 5.0,
    "reviewCount": 465,
    "openHours": "6:00 - 22:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.5669,
    "lng": 121.0068
  },
  {
    "id": "quezon-city-comp-052",
    "name": "Quezon City Comprehensive",
    "city": "Quezon City",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 3.8,
    "reviewCount": 1321,
    "openHours": "7:00 - 21:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.6718,
    "lng": 121.0614
  },
  {
    "id": "taguig-cons-053",
    "name": "Taguig AI Consultation",
    "city": "Taguig",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.2,
    "reviewCount": 1341,
    "openHours": "24/7",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.5531,
    "lng": 121.0521
  },
  {
    "id": "pasig-docu-054",
    "name": "Pasig Document Center",
    "city": "Pasig",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.9,
    "reviewCount": 489,
    "openHours": "7:00 - 23:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.5891,
    "lng": 121.0777
  },
  {
    "id": "manila-liti-055",
    "name": "Manila Litigation Support",
    "city": "Manila",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 3.8,
    "reviewCount": 1995,
    "openHours": "8:00 - 20:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.5849,
    "lng": 120.9929
  },
  {
    "id": "mandaluyong-comp-056",
    "name": "Mandaluyong Comprehensive",
    "city": "Mandaluyong",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.9,
    "reviewCount": 1609,
    "openHours": "6:00 - 22:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.5899,
    "lng": 121.0437
  },
  {
    "id": "paranaque-cons-057",
    "name": "Paranaque AI Consultation",
    "city": "Paranaque",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 3.9,
    "reviewCount": 1460,
    "openHours": "7:00 - 21:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.4849,
    "lng": 121.015
  },
  {
    "id": "las-pinas-docu-058",
    "name": "Las Pinas Document Center",
    "city": "Las Pinas",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.6,
    "reviewCount": 355,
    "openHours": "24/7",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.4659,
    "lng": 120.999
  },
  {
    "id": "marikina-liti-059",
    "name": "Marikina Litigation Support",
    "city": "Marikina",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.2,
    "reviewCount": 936,
    "openHours": "7:00 - 23:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.6585,
    "lng": 121.1041
  },
  {
    "id": "muntinlupa-comp-060",
    "name": "Muntinlupa Comprehensive",
    "city": "Muntinlupa",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.5,
    "reviewCount": 492,
    "openHours": "8:00 - 20:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.3974,
    "lng": 121.0513
  },
  {
    "id": "cebu-city-cons-061",
    "name": "Cebu City AI Consultation",
    "city": "Cebu City",
    "region": "Cebu",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.6,
    "reviewCount": 1948,
    "openHours": "6:00 - 22:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 10.3082,
    "lng": 123.8989
  },
  {
    "id": "mandaue-docu-062",
    "name": "Mandaue Document Center",
    "city": "Mandaue",
    "region": "Cebu",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.3,
    "reviewCount": 1807,
    "openHours": "7:00 - 21:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 10.3178,
    "lng": 123.929
  },
  {
    "id": "lapu-lapu-liti-063",
    "name": "Lapu-Lapu Litigation Support",
    "city": "Lapu-Lapu",
    "region": "Cebu",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.3,
    "reviewCount": 1287,
    "openHours": "24/7",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 10.2989,
    "lng": 123.9506
  },
  {
    "id": "davao-city-comp-064",
    "name": "Davao City Comprehensive",
    "city": "Davao City",
    "region": "Davao",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.3,
    "reviewCount": 1483,
    "openHours": "7:00 - 23:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 7.1951,
    "lng": 125.4527
  },
  {
    "id": "tagum-cons-065",
    "name": "Tagum AI Consultation",
    "city": "Tagum",
    "region": "Davao",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.9,
    "reviewCount": 1730,
    "openHours": "8:00 - 20:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 7.441,
    "lng": 125.8099
  },
  {
    "id": "angeles-city-docu-066",
    "name": "Angeles City Document Center",
    "city": "Angeles City",
    "region": "Pampanga",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.1,
    "reviewCount": 1459,
    "openHours": "6:00 - 22:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 15.2025,
    "lng": 120.5453
  },
  {
    "id": "san-fernando-liti-067",
    "name": "San Fernando Litigation Support",
    "city": "San Fernando",
    "region": "Pampanga",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.8,
    "reviewCount": 1638,
    "openHours": "7:00 - 21:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 15.0349,
    "lng": 120.6891
  },
  {
    "id": "baguio-comp-068",
    "name": "Baguio Comprehensive",
    "city": "Baguio",
    "region": "Benguet",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.8,
    "reviewCount": 401,
    "openHours": "24/7",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 16.4007,
    "lng": 120.5921
  },
  {
    "id": "iloilo-city-cons-069",
    "name": "Iloilo City AI Consultation",
    "city": "Iloilo City",
    "region": "Iloilo",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.4,
    "reviewCount": 1840,
    "openHours": "7:00 - 23:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 10.704,
    "lng": 122.5444
  },
  {
    "id": "bacolod-docu-070",
    "name": "Bacolod Document Center",
    "city": "Bacolod",
    "region": "Negros Occidental",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.9,
    "reviewCount": 1278,
    "openHours": "8:00 - 20:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 10.6823,
    "lng": 122.9635
  },
  {
    "id": "cagayan-de-oro-liti-071",
    "name": "Cagayan de Oro Litigation Support",
    "city": "Cagayan de Oro",
    "region": "Misamis Oriental",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.4,
    "reviewCount": 599,
    "openHours": "6:00 - 22:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 8.4373,
    "lng": 124.6402
  },
  {
    "id": "zamboanga-comp-072",
    "name": "Zamboanga Comprehensive",
    "city": "Zamboanga",
    "region": "Zamboanga del Sur",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.9,
    "reviewCount": 1862,
    "openHours": "7:00 - 21:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 6.9201,
    "lng": 122.094
  },
  {
    "id": "general-santos-cons-073",
    "name": "General Santos AI Consultation",
    "city": "General Santos",
    "region": "South Cotabato",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.3,
    "reviewCount": 460,
    "openHours": "24/7",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 6.1277,
    "lng": 125.1651
  },
  {
    "id": "naga-docu-074",
    "name": "Naga Document Center",
    "city": "Naga",
    "region": "Camarines Sur",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.4,
    "reviewCount": 1241,
    "openHours": "7:00 - 23:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 13.6402,
    "lng": 123.2083
  },
  {
    "id": "legazpi-liti-075",
    "name": "Legazpi Litigation Support",
    "city": "Legazpi",
    "region": "Albay",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.3,
    "reviewCount": 1741,
    "openHours": "8:00 - 20:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 13.1293,
    "lng": 123.7598
  },
  {
    "id": "makati-comp-076",
    "name": "Makati Comprehensive",
    "city": "Makati",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.5,
    "reviewCount": 749,
    "openHours": "6:00 - 22:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.5526,
    "lng": 121.0192
  },
  {
    "id": "quezon-city-cons-077",
    "name": "Quezon City AI Consultation",
    "city": "Quezon City",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.5,
    "reviewCount": 1573,
    "openHours": "7:00 - 21:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.6829,
    "lng": 121.0586
  },
  {
    "id": "taguig-docu-078",
    "name": "Taguig Document Center",
    "city": "Taguig",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.9,
    "reviewCount": 1013,
    "openHours": "24/7",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.5669,
    "lng": 121.043
  },
  {
    "id": "pasig-liti-079",
    "name": "Pasig Litigation Support",
    "city": "Pasig",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.4,
    "reviewCount": 630,
    "openHours": "7:00 - 23:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.5865,
    "lng": 121.0965
  },
  {
    "id": "manila-comp-080",
    "name": "Manila Comprehensive",
    "city": "Manila",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.1,
    "reviewCount": 1692,
    "openHours": "8:00 - 20:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.5999,
    "lng": 120.9968
  },
  {
    "id": "mandaluyong-cons-081",
    "name": "Mandaluyong AI Consultation",
    "city": "Mandaluyong",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.1,
    "reviewCount": 258,
    "openHours": "6:00 - 22:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.5813,
    "lng": 121.0419
  },
  {
    "id": "paranaque-docu-082",
    "name": "Paranaque Document Center",
    "city": "Paranaque",
    "region": "Metro Manila",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.2,
    "reviewCount": 1928,
    "openHours": "7:00 - 21:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 14.4862,
    "lng": 121.0111
  },
  {
    "id": "las-pinas-liti-083",
    "name": "Las Pinas Litigation Support",
    "city": "Las Pinas",
    "region": "Metro Manila",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.1,
    "reviewCount": 1521,
    "openHours": "24/7",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 14.4545,
    "lng": 120.9845
  },
  {
    "id": "marikina-comp-084",
    "name": "Marikina Comprehensive",
    "city": "Marikina",
    "region": "Metro Manila",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.3,
    "reviewCount": 777,
    "openHours": "7:00 - 23:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 14.6415,
    "lng": 121.1015
  },
  {
    "id": "muntinlupa-cons-085",
    "name": "Muntinlupa AI Consultation",
    "city": "Muntinlupa",
    "region": "Metro Manila",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.0,
    "reviewCount": 960,
    "openHours": "8:00 - 20:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 14.4039,
    "lng": 121.0429
  },
  {
    "id": "cebu-city-docu-086",
    "name": "Cebu City Document Center",
    "city": "Cebu City",
    "region": "Cebu",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.9,
    "reviewCount": 140,
    "openHours": "6:00 - 22:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 10.3073,
    "lng": 123.8938
  },
  {
    "id": "mandaue-liti-087",
    "name": "Mandaue Litigation Support",
    "city": "Mandaue",
    "region": "Cebu",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.3,
    "reviewCount": 112,
    "openHours": "7:00 - 21:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 10.3383,
    "lng": 123.9349
  },
  {
    "id": "lapu-lapu-comp-088",
    "name": "Lapu-Lapu Comprehensive",
    "city": "Lapu-Lapu",
    "region": "Cebu",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.3,
    "reviewCount": 1926,
    "openHours": "24/7",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 10.3272,
    "lng": 123.951
  },
  {
    "id": "davao-city-cons-089",
    "name": "Davao City AI Consultation",
    "city": "Davao City",
    "region": "Davao",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.7,
    "reviewCount": 1218,
    "openHours": "7:00 - 23:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 7.2055,
    "lng": 125.4556
  },
  {
    "id": "tagum-docu-090",
    "name": "Tagum Document Center",
    "city": "Tagum",
    "region": "Davao",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.4,
    "reviewCount": 658,
    "openHours": "8:00 - 20:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 7.4586,
    "lng": 125.8226
  },
  {
    "id": "angeles-city-liti-091",
    "name": "Angeles City Litigation Support",
    "city": "Angeles City",
    "region": "Pampanga",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.2,
    "reviewCount": 1490,
    "openHours": "6:00 - 22:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 15.1935,
    "lng": 120.5264
  },
  {
    "id": "san-fernando-comp-092",
    "name": "San Fernando Comprehensive",
    "city": "San Fernando",
    "region": "Pampanga",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.8,
    "reviewCount": 1983,
    "openHours": "7:00 - 21:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 15.0398,
    "lng": 120.7007
  },
  {
    "id": "baguio-cons-093",
    "name": "Baguio AI Consultation",
    "city": "Baguio",
    "region": "Benguet",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 3.8,
    "reviewCount": 906,
    "openHours": "24/7",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 16.3975,
    "lng": 120.6015
  },
  {
    "id": "iloilo-city-docu-094",
    "name": "Iloilo City Document Center",
    "city": "Iloilo City",
    "region": "Iloilo",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 3.9,
    "reviewCount": 977,
    "openHours": "7:00 - 23:00",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 10.7211,
    "lng": 122.557
  },
  {
    "id": "bacolod-liti-095",
    "name": "Bacolod Litigation Support",
    "city": "Bacolod",
    "region": "Negros Occidental",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 3.9,
    "reviewCount": 876,
    "openHours": "8:00 - 20:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 10.6633,
    "lng": 122.9637
  },
  {
    "id": "cagayan-de-oro-comp-096",
    "name": "Cagayan de Oro Comprehensive",
    "city": "Cagayan de Oro",
    "region": "Misamis Oriental",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 4.2,
    "reviewCount": 1901,
    "openHours": "6:00 - 22:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 8.4413,
    "lng": 124.6329
  },
  {
    "id": "zamboanga-cons-097",
    "name": "Zamboanga AI Consultation",
    "city": "Zamboanga",
    "region": "Zamboanga del Sur",
    "type": "consultation",
    "equipment": [
      "AI Legal Consultation Booth",
      "Video Conference Suite",
      "Document Scanner",
      "Digital Signature Pad",
      "Case File Storage"
    ],
    "priceRange": "$",
    "rating": 4.8,
    "reviewCount": 616,
    "openHours": "7:00 - 21:00",
    "description": "A fully automated AI legal consultation center. Get instant legal advice and document review.",
    "lat": 6.9271,
    "lng": 122.096
  },
  {
    "id": "general-santos-docu-098",
    "name": "General Santos Document Center",
    "city": "General Santos",
    "region": "South Cotabato",
    "type": "documentation",
    "equipment": [
      "Auto Contract Generator",
      "Notarization Kiosk",
      "Legal Template Library",
      "E-Filing Terminal",
      "Document Verification"
    ],
    "priceRange": "$$$",
    "rating": 4.7,
    "reviewCount": 206,
    "openHours": "24/7",
    "description": "Self-service legal document preparation center with AI-powered drafting and filing.",
    "lat": 6.1296,
    "lng": 125.176
  },
  {
    "id": "naga-liti-099",
    "name": "Naga Litigation Support",
    "city": "Naga",
    "region": "Camarines Sur",
    "type": "litigation",
    "equipment": [
      "AI Courtroom Simulator",
      "Evidence Analysis Suite",
      "Deposition Recording",
      "Trial Preparation AI",
      "Appeal Filing System"
    ],
    "priceRange": "$$$$",
    "rating": 4.6,
    "reviewCount": 1699,
    "openHours": "7:00 - 23:00",
    "description": "Advanced AI litigation support center for trial preparation and courtroom strategy.",
    "lat": 13.6461,
    "lng": 123.1979
  },
  {
    "id": "legazpi-comp-100",
    "name": "Legazpi Comprehensive",
    "city": "Legazpi",
    "region": "Albay",
    "type": "comprehensive",
    "equipment": [
      "AI Legal Consultation",
      "Contract Generator",
      "Courtroom Simulator",
      "Notarization",
      "E-Filing",
      "Mediation Room",
      "Legal Library"
    ],
    "priceRange": "$$$",
    "rating": 3.8,
    "reviewCount": 606,
    "openHours": "8:00 - 20:00",
    "description": "Full-service unmanned legal facility offering consultation, documentation, and litigation support.",
    "lat": 13.1505,
    "lng": 123.7355
  }
]

export const LEGAL_ISSUES: LegalIssue[] = [
  {
    "id": "contract-dispute",
    "name": "Contract Dispute",
    "category": "Civil",
    "relatedSpecialties": [
      "civil",
      "contract",
      "consumer"
    ]
  },
  {
    "id": "divorce",
    "name": "Divorce / Family Matter",
    "category": "Family",
    "relatedSpecialties": [
      "family",
      "civil",
      "real_estate"
    ]
  },
  {
    "id": "criminal-charge",
    "name": "Criminal Charge",
    "category": "Criminal",
    "relatedSpecialties": [
      "criminal",
      "white_collar",
      "fraud"
    ]
  },
  {
    "id": "employment-issue",
    "name": "Employment Issue",
    "category": "Labor",
    "relatedSpecialties": [
      "labor",
      "employment",
      "discrimination"
    ]
  },
  {
    "id": "business-formation",
    "name": "Business Formation",
    "category": "Corporate",
    "relatedSpecialties": [
      "corporate",
      "compliance",
      "governance"
    ]
  },
  {
    "id": "ip-infringement",
    "name": "IP Infringement",
    "category": "IP",
    "relatedSpecialties": [
      "ip",
      "patent",
      "trademark",
      "copyright"
    ]
  },
  {
    "id": "immigration",
    "name": "Immigration Issue",
    "category": "Immigration",
    "relatedSpecialties": [
      "immigration",
      "visa",
      "asylum"
    ]
  },
  {
    "id": "tax-problem",
    "name": "Tax Problem",
    "category": "Tax",
    "relatedSpecialties": [
      "tax",
      "international_tax",
      "estate_planning"
    ]
  },
  {
    "id": "debt-issue",
    "name": "Debt / Bankruptcy",
    "category": "Financial",
    "relatedSpecialties": [
      "bankruptcy",
      "debt_restructuring",
      "creditor_rights"
    ]
  },
  {
    "id": "property-dispute",
    "name": "Property Dispute",
    "category": "Property",
    "relatedSpecialties": [
      "real_estate",
      "civil",
      "land_use"
    ]
  },
  {
    "id": "traffic-violation",
    "name": "Traffic Violation",
    "category": "Criminal",
    "relatedSpecialties": [
      "traffic",
      "criminal"
    ]
  },
  {
    "id": "workplace-injury",
    "name": "Workplace Injury",
    "category": "Labor",
    "relatedSpecialties": [
      "labor",
      "workplace_safety",
      "employment"
    ]
  }
]

export const SPECIALTY_LABELS: Record<string, string> = {
  "civil": "Civil Law",
  "contract": "Contract Law",
  "family": "Family Law",
  "real_estate": "Real Estate Law",
  "consumer": "Consumer Protection",
  "criminal": "Criminal Law",
  "white_collar": "White Collar Crime",
  "traffic": "Traffic Law",
  "juvenile": "Juvenile Law",
  "fraud": "Fraud",
  "labor": "Labor Law",
  "employment": "Employment Law",
  "workplace_safety": "Workplace Safety",
  "discrimination": "Anti-Discrimination",
  "union": "Union Law",
  "corporate": "Corporate Law",
  "ma": "M&A",
  "securities": "Securities Law",
  "compliance": "Compliance",
  "governance": "Corporate Governance",
  "ip": "Intellectual Property",
  "patent": "Patent Law",
  "trademark": "Trademark Law",
  "copyright": "Copyright Law",
  "trade_secret": "Trade Secret",
  "immigration": "Immigration Law",
  "visa": "Visa Law",
  "deportation": "Deportation Defense",
  "asylum": "Asylum Law",
  "tax": "Tax Law",
  "international_tax": "International Tax",
  "estate_planning": "Estate Planning",
  "audit": "Audit Defense",
  "environmental": "Environmental Law",
  "energy": "Energy Law",
  "land_use": "Land Use",
  "bankruptcy": "Bankruptcy Law",
  "debt_restructuring": "Debt Restructuring",
  "creditor_rights": "Creditor Rights",
  "international": "International Law",
  "trade": "Trade Law",
  "arbitration": "Arbitration"
}

export const LANGUAGE_LABELS: Record<string, string> = {
  "en": "English",
  "ja": "Japanese",
  "zh": "Chinese",
  "tl": "Filipino",
  "de": "German",
  "fr": "French",
  "ko": "Korean",
  "ms": "Malay"
}

// Backward compatibility alias
export const SYMPTOMS = LEGAL_ISSUES