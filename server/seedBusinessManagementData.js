const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const businessManagementProfessions = [
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Business Analyst",
        description: "Business Analysts evaluate a company's business model and its integration with technology. They analyze large datasets to find inefficiencies, understand market trends, and recommend data-driven solutions to improve organizational processes.",
        skills: ["Data Analysis", "SQL/Python", "Business Intelligence", "Process Improvement", "Stakeholder Communication"],
        salaryRange: "India: ₹6 LPA - ₹18 LPA | Global: $65,000 - $110,000 per year",
        educationPath: "BBA / B.Com / B.Tech -> MBA / Specialization in Business Analytics",
        futureScope: "With digital transformation accelerating globally, the ability to translate complex data into actionable business strategy makes Business Analysts indispensable across all sectors.",
        roadmap: [
            "Entry: Junior Business Analyst",
            "Manager: Business Analyst / Senior BA",
            "Senior Manager: Lead BA / Product Owner",
            "CEO: Chief Data Officer / CEO"
        ],
        certifications: ["CBAP", "PMP", "Certified Analytics Professional"],
        summary: "A highly analytical role acting as the bridge between IT capabilities and strategic business objectives.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["IT Services", "Consulting", "Finance", "E-commerce", "Healthcare"],
        jobDemandTrend: "Very High",
        governmentJobs: "Hired in public sector units (PSUs) and e-governance projects on contract/regular basis.",
        competitiveExams: ["CAT", "GMAT", "XAT (for MBA entry)"],
        privateSectorOpportunities: "Massive demand in MNCs, tech giants, and large financial institutions.",
        licenseRequired: "None",
        internshipRequirements: "Data Analytics or Business Development internship highly recommended.",
        riskLevel: "Low to Moderate"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Operations Manager",
        description: "Operations Managers oversee the production of goods or provision of services. They optimize supply chains, manage quality control, coordinate diverse departments, and ensure the organization operates at maximum efficiency and minimum cost.",
        skills: ["Supply Chain Management", "Process Optimization", "Leadership", "Budgeting", "Quality Control"],
        salaryRange: "India: ₹8 LPA - ₹25+ LPA | Global: $70,000 - $130,000+ per year",
        educationPath: "BBA / B.Com / B.Tech -> MBA in Operations Management",
        futureScope: "Continuous global emphasis on 'lean' business practices and rapid e-commerce delivery logistics guarantees long-term highly compensated roles in operations.",
        roadmap: [
            "Entry: Operations Executive",
            "Manager: Operations Manager",
            "Senior Manager: General Manager Operations",
            "Director: Chief Operating Officer (COO)"
        ],
        certifications: ["Six Sigma (Green/Black Belt)", "APICS CSCP"],
        summary: "The backbone of any physical product or large-scale service company, ensuring daily business runs smoothly and profitably.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Manufacturing", "E-commerce", "Logistics", "Healthcare", "Aviation"],
        jobDemandTrend: "High",
        governmentJobs: "Roles in manufacturing PSUs (BHEL, SAIL), Railways, and Defense logistics.",
        competitiveExams: ["CAT", "XAT", "SNAP (for MBA in Operations)"],
        privateSectorOpportunities: "Extensive scope in e-commerce giants (Amazon, Flipkart) and FMCG companies.",
        licenseRequired: "None",
        internshipRequirements: "Industrial training or supply chain internship is critical.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Human Resource Manager",
        description: "HR Managers oversee the recruiting, interviewing, and hiring of new staff. They serve as a link between management and employees, handling employee relations, payroll, benefits, training, and corporate culture.",
        skills: ["Talent Acquisition", "Conflict Resolution", "Labor Laws", "Organizational Psychology", "Empathy"],
        salaryRange: "India: ₹5 LPA - ₹18 LPA | Global: $60,000 - $115,000 per year",
        educationPath: "BBA / BA Psychology -> MBA in Human Resources (HRM)",
        futureScope: "As the focus shifts towards employee well-being, remote work dynamics, and finding niche talent, strategic HR professionals are vital to corporate success.",
        roadmap: [
            "Entry: HR Executive / Recruiter",
            "Manager: HR Manager",
            "Senior Manager: VP / Director of HR",
            "Director: Chief Human Resources Officer (CHRO)"
        ],
        certifications: ["SHRM-CP", "PHR"],
        summary: "A people-centric career focused on building and maintaining a company's most valuable asset: its workforce.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Corporate Sector (All)", "IT & Tech", "Manufacturing", "Consulting"],
        jobDemandTrend: "Stable",
        governmentJobs: "HR roles in all Major PSUs (ONGC, NTPC) through specialized exams (e.g., UGC NET).",
        competitiveExams: ["TISSNET", "XAT", "CAT (for top HR programs)"],
        privateSectorOpportunities: "Required in every mid to large scale company globally.",
        licenseRequired: "None",
        internshipRequirements: "Recruitment or generalist HR internship is highly preferred.",
        riskLevel: "Low"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Marketing Manager",
        description: "Marketing Managers estimate the demand for products/services, identify potential markets, and develop comprehensive strategies to maximize profits, market share, and brand awareness.",
        skills: ["Digital Marketing", "Market Research", "Brand Management", "Creative Strategy", "Data Analytics"],
        salaryRange: "India: ₹7 LPA - ₹25+ LPA | Global: $70,000 - $140,000+ per year",
        educationPath: "BBA / B.Com / Mass Comm -> MBA in Marketing",
        futureScope: "The digital age has completely revolutionized marketing. Data-driven marketers who understand consumer psychology and digital algorithms are among the highest-paid professionals.",
        roadmap: [
            "Entry: Marketing Executive / Management Trainee",
            "Manager: Brand Manager / Marketing Manager",
            "Senior Manager: VP of Marketing",
            "Director: Chief Marketing Officer (CMO)"
        ],
        certifications: ["Google Analytics", "HubSpot Certifications", "Meta Blueprint"],
        summary: "A dynamic, creative, and highly strategic role responsible for the public face and revenue generation strategies of a brand.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["FMCG", "Tech Sector", "E-commerce", "Advertising Agencies", "Automotive"],
        jobDemandTrend: "High",
        governmentJobs: "Marketing Officers recruited in public sector banks and few enterprise PSUs.",
        competitiveExams: ["CAT", "XAT", "NMAT (for MBA in Marketing)"],
        privateSectorOpportunities: "Extensive opportunities; FMCG (HUL, P&G) marketing roles are highly coveted.",
        licenseRequired: "None",
        internshipRequirements: "Sales or digital marketing internships are crucial.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Sales Manager",
        description: "Sales Managers direct organizations' sales teams. They set sales goals, analyze data, and develop training programs for the organization's sales representatives to drive revenue growth.",
        skills: ["B2B/B2C Sales", "Negotiation", "Client Relationship", "Lead Generation", "Team Leadership"],
        salaryRange: "India: ₹6 LPA - ₹30+ LPA (Heavy Incentives) | Global: $65,000 - $150,000+ per year",
        educationPath: "BBA / Any Bachelor's -> MBA in Marketing/Sales (Optional but preferred for top roles)",
        futureScope: "Sales is the lifeblood of any business. Excellent salespeople are always in demand regardless of economic conditions, with uncapped earning potential.",
        roadmap: [
            "Entry: Sales Executive / BDM",
            "Manager: Area / Regional Sales Manager",
            "Senior Manager: National Sales Head",
            "Director: Chief Revenue Officer (CRO)"
        ],
        certifications: ["Certified Sales Professional (CSP)"],
        summary: "A high-energy, target-driven career offering direct impact on company revenue and corresponding high financial rewards.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["FMCG", "Software (SaaS)", "Real Estate", "Pharma", "Financial Services"],
        jobDemandTrend: "Very High",
        governmentJobs: "Limited; mostly focused in the private corporate sector.",
        competitiveExams: ["CAT/MAT (for standard entry into management programs)"],
        privateSectorOpportunities: "The most robust job market in the private sector globally.",
        licenseRequired: "None",
        internshipRequirements: "Field sales or tele-sales internship is highly recommended.",
        riskLevel: "High (Target Driven)"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Project Manager",
        description: "Project Managers are responsible for planning, executing, and closing projects. They define project scopes, manage resources, mitigate risks, and ensure projects are delivered on time and within budget.",
        skills: ["Agile/Scrum", "Risk Management", "Budgeting", "Team Coordination", "Strategic Planning"],
        salaryRange: "India: ₹10 LPA - ₹25+ LPA | Global: $80,000 - $140,000+ per year",
        educationPath: "BBA / B.Tech / B.Com -> PMP Certification or MBA",
        futureScope: "As businesses adopt project-based structures to execute complex digital and physical goals, certified project managers are essential across IT, construction, and consulting.",
        roadmap: [
            "Entry: Project Coordinator / Analyst",
            "Manager: Project Manager / Scrum Master",
            "Senior Manager: Senior PM / Program Manager",
            "Director: PMO Director / VP of Operations"
        ],
        certifications: ["PMP (Project Management Professional)", "CSM (Certified ScrumMaster)", "PRINCE2"],
        summary: "A highly organized leadership role functioning as the orchestrator of complex business initiatives across multiple departments.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["IT Services", "Construction & Engineering", "Consulting", "Healthcare"],
        jobDemandTrend: "High",
        governmentJobs: "Contractual PM roles in smart city projects, NHAI, and digital India initiatives.",
        competitiveExams: ["PMP Examination (Requires prior experience)"],
        privateSectorOpportunities: "Massive demand in IT MNCs (TCS, Infosys, IBM) and large engineering firms.",
        licenseRequired: "None strictly, but PMP heavily preferred.",
        internshipRequirements: "Experience in project coordination or operations is required before PM roles.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Product Manager",
        description: "Product Managers identify the customer need and the larger business objectives that a product or feature will fulfill, articulate what success looks like, and rally a team to turn that vision into a reality.",
        skills: ["Product Strategy", "User Experience (UX)", "Data Analytics", "Agile Methodologies", "Cross-functional Leadership"],
        salaryRange: "India: ₹15 LPA - ₹40+ LPA | Global: $100,000 - $200,000+ per year",
        educationPath: "B.Tech / BBA -> MBA / Specialized Product Management Course",
        futureScope: "Often called the 'Mini-CEO' of a product, Product Managers are currently the most sought-after professionals in the tech and startup ecosystems globally.",
        roadmap: [
            "Entry: Associate Product Manager (APM)",
            "Manager: Product Manager",
            "Senior Manager: Group / Senior Product Manager",
            "Director: Chief Product Officer (CPO) / CEO"
        ],
        certifications: ["AIPMM Certified Product Manager", "CSPO (Certified Scrum Product Owner)"],
        summary: "An elite intersection of business strategy, design, and technology, carrying immense responsibility and corresponding high compensation.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Tech Startups", "SaaS Companies", "E-commerce", "Fintech", "Consumer Electronics"],
        jobDemandTrend: "Very High",
        governmentJobs: "Very limited; primarily exists in the aggressive private tech sector.",
        competitiveExams: ["CAT/GMAT (for entry via top MBA programs)"],
        privateSectorOpportunities: "Top tier tech companies (Google, Microsoft, Amazon, Uber) aggressively hire PMs.",
        licenseRequired: "None",
        internshipRequirements: "Internships in software development, design, or business strategy.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Supply Chain Manager",
        description: "Supply Chain Managers manage the entire lifecycle of a product (i.e., from the acquisition of raw materials to the delivery of the final product to the consumer). They look for ways to streamline operations and reduce costs.",
        skills: ["Logistics", "Procurement", "Inventory Management", "Negotiation", "Analytics"],
        salaryRange: "India: ₹8 LPA - ₹20+ LPA | Global: $75,000 - $130,000 per year",
        educationPath: "BBA / B.Tech / B.Com -> MBA in Supply Chain / Operations Management",
        futureScope: "Global disruptions have highlighted supply chain vulnerabilities. Companies are investing heavily in resilient, tech-driven supply chains, ensuring long-term demand for SCM professionals.",
        roadmap: [
            "Entry: Supply Chain Analyst / Logistics Coordinator",
            "Manager: Supply Chain Manager / Procurement Head",
            "Senior Manager: Director of Global Supply Chain",
            "Director: Chief Supply Chain Officer (CSCO)"
        ],
        certifications: ["CSCP (Certified Supply Chain Professional)", "CIPS"],
        summary: "A global logistical role connecting raw materials to end consumers, critical to the profitability of any manufacturing or retail business.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["E-commerce", "FMCG", "Automotive", "Pharmaceuticals", "Retail"],
        jobDemandTrend: "High",
        governmentJobs: "Roles in defense logistics, FCI, and major public sector manufacturing units.",
        competitiveExams: ["CAT", "XAT", "SNAP (for MBA)"],
        privateSectorOpportunities: "Critical roles in companies like Amazon, Reliance, Unilever, and Nestle.",
        licenseRequired: "None",
        internshipRequirements: "Industrial or retail logistics internship highly advantageous.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Management Consultant",
        description: "Management Consultants help organizations solve complex issues, create value, maximize growth, and improve business performance. They use their business skills to provide objective advice and specialized expertise.",
        skills: ["Problem Solving", "Strategic Planning", "Financial Modeling", "Presentation Skills", "Industry Analysis"],
        salaryRange: "India: ₹15 LPA - ₹35+ LPA | Global: $90,000 - $200,000+ per year",
        educationPath: "Top Tier Bachelor's Degree -> Top Tier MBA (IIMs/Ivy League)",
        futureScope: "Consulting provides unmatched exposure to C-suite problems across multiple industries. It remains the premier career choice for top-tier MBA graduates.",
        roadmap: [
            "Entry: Associate / Business Analyst",
            "Manager: Consultant / Engagement Manager",
            "Senior Manager: Principal / Associate Partner",
            "Director: Partner / Managing Director"
        ],
        certifications: ["Lean Six Sigma", "PMP (Optional)"],
        summary: "The apex of corporate problem-solving; an intense, high-travel, highly elite career advising CEOs of Fortune 500 companies.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Management Consulting Firms (MBB)", "Big 4 strategy arms", "Boutique Consultancies"],
        jobDemandTrend: "Stable/High",
        governmentJobs: "Hired externally for major national policy planning or restructuring PSUs (e.g., via NITI Aayog).",
        competitiveExams: ["CAT/GMAT (Requires 99+ percentile for MBB entry)"],
        privateSectorOpportunities: "Dominated by McKinsey, BCG, Bain, AT Kearney, and Big 4.",
        licenseRequired: "None",
        internshipRequirements: "Summer internship at a top consulting firm during MBA.",
        riskLevel: "High (Intense Work pressure)"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Entrepreneur",
        description: "Entrepreneurs identify market gaps and create new businesses or startups to solve those problems. They assume all massive financial and operational risks with the expectation of generating significant profit and impact.",
        skills: ["Visionary Leadership", "Risk Taking", "Sales & Pitching", "Financial Management", "Resilience"],
        salaryRange: "India: Variable (Loss making to Hundreds of Crores) | Global: Limitless",
        educationPath: "Any Degree (Optional) -> MBA in Entrepreneurship (Optional) -> Actual Market Execution",
        futureScope: "With robust digital infrastructure and vast venture capital available, the landscape for building massively scalable businesses has never been better globally.",
        roadmap: [
            "Entry: Aspiring Founder / Ideation",
            "Manager: Bootstrapped / Seed Stage Founder",
            "Senior Manager: Series A/B Funded Founder",
            "CEO: Unicorn CEO / Serial Entrepreneur"
        ],
        certifications: ["None required; market success is the only credential."],
        summary: "The ultimate business path wielding maximum risk and maximum reward, requiring total dedication to creating something from nothing.",
        yearsOfStudy: "Continuous Real-World Learning",
        industriesHiring: ["Self-Employed / Founder"],
        jobDemandTrend: "N/A (Self-Created)",
        governmentJobs: "N/A. However, governments provide grants and schemes (Startup India) to support them.",
        competitiveExams: ["None"],
        privateSectorOpportunities: "Creating the private sector yourself.",
        licenseRequired: "Business incorporation and industry-specific licenses required.",
        internshipRequirements: "Working briefly in an early-stage startup is the best preparation.",
        riskLevel: "Very High"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Business Development Manager",
        description: "Business Development Managers identify new sales leads, pitch goods or services to new clients, and maintain a good working relationship with new contacts. They drive the strategic expansion of the company's market reach.",
        skills: ["B2B Sales", "Networking", "Strategic Partnerships", "Negotiation", "Market Research"],
        salaryRange: "India: ₹6 LPA - ₹20+ LPA | Global: $70,000 - $130,000+ per year",
        educationPath: "BBA / B.Com / B.Tech -> MBA in Marketing (Preferred)",
        futureScope: "Crucial for tech startups and B2B companies looking to scale rapidly. Effective 'BizDev' leaders easily transition into overarching leadership roles.",
        roadmap: [
            "Entry: Business Development Executive (BDE)",
            "Manager: Business Development Manager (BDM)",
            "Senior Manager: Head of Partnerships / VP of BD",
            "Director: Chief Revenue Officer (CRO)"
        ],
        certifications: ["None strictly required"],
        summary: "A more strategic evolution of pure sales, focusing on long-term corporate partnerships and expanding the company's foundational footprint.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["SaaS", "IT Services", "EdTech", "Fintech", "Manufacturing"],
        jobDemandTrend: "Very High",
        governmentJobs: "Limited; occasionally recruited for public-private partnership (PPP) cells.",
        competitiveExams: ["CAT/MAT (for standard entry into management programs)"],
        privateSectorOpportunities: "Extensive scope in the startup ecosystem and IT sector.",
        licenseRequired: "None",
        internshipRequirements: "Sales, marketing, or PR internship.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Corporate Strategist",
        description: "Corporate Strategists evaluate a company's overall business operations to ensure they align with the Board's long-term vision. They analyze competitors, identify M&A opportunities, and chart the 5 to 10-year growth trajectory of massive corporations.",
        skills: ["Strategic Planning", "Financial Modeling", "M&A Assessment", "Macroeconomic Analysis", "Executive Communication"],
        salaryRange: "India: ₹15 LPA - ₹40+ LPA | Global: $100,000 - $220,000+ per year",
        educationPath: "B.Tech / B.Com -> Top Tier MBA -> Ex-Management Consultant (Usually)",
        futureScope: "As markets disrupt rapidly, large corporations heavily rely on inner strategy teams to pivot operations, acquire startups, and maintain dominance.",
        roadmap: [
            "Entry: Strategy Analyst",
            "Manager: Corporate Strategy Manager",
            "Senior Manager: VP of Corporate Strategy",
            "Director: Chief Strategy Officer (CSO)"
        ],
        certifications: ["CFA (Beneficial)"],
        summary: "The internal brain-trust of a major corporation, acting as in-house management consultants dictating the future of the company.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Tech Giants", "FMCG Conglomerates", "Media", "Telecom", "Large Banks"],
        jobDemandTrend: "High",
        governmentJobs: "Advisory roles in NITI Aayog or strategic cells of Maharatna PSUs.",
        competitiveExams: ["CAT / GMAT"],
        privateSectorOpportunities: "Roles in Reliance, Tata Sons, Google, Microsoft strategy divisions.",
        licenseRequired: "None",
        internshipRequirements: "Management consulting internship heavily preferred.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Retail Manager",
        description: "Retail Managers are responsible for the daily operations of expansive retail stores or regional store networks. They maximize profit and minimize costs, manage staff, ensure promotions are run accurately, and maintain high customer satisfaction.",
        skills: ["Inventory Management", "Customer Experience", "Team Leadership", "Merchandising", "Sales Forecasting"],
        salaryRange: "India: ₹5 LPA - ₹15 LPA | Global: $50,000 - $100,000 per year",
        educationPath: "BBA in Retail Management / B.Com -> MBA (Retail/Marketing)",
        futureScope: "Despite e-commerce growth, massive omnichannel retail (combining offline experience with online delivery) is booming, requiring expert physical ops managers.",
        roadmap: [
            "Entry: Store Management Trainee",
            "Manager: Store Manager",
            "Senior Manager: Area / Regional / Zonal Manager",
            "Director: Head of Retail Operations"
        ],
        certifications: ["Retail Management Certifications"],
        summary: "A highly active, floor-level management role critical to the success of massive retail chains and luxury brands.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Supermarket Chains", "Fashion Apparel", "Luxury Brands", "Electronics Retail"],
        jobDemandTrend: "Stable",
        governmentJobs: "Roles in state-run emporiums and massive public cooperative stores.",
        competitiveExams: ["None specific; general MBA entrances."],
        privateSectorOpportunities: "High demand in Reliance Retail, Shoppers Stop, Aditya Birla Fashion, Zara.",
        licenseRequired: "None",
        internshipRequirements: "On-floor retail associate internship.",
        riskLevel: "Low"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "International Business Manager",
        description: "International Business Managers coordinate business operations across international borders. They deal with global supply chains, international trade laws, foreign currency exchange, and cultural barriers in marketing.",
        skills: ["Cross-cultural Negotiation", "International Trade Law", "Foreign Languages", "Global Supply Chain", "FX Management"],
        salaryRange: "India: ₹8 LPA - ₹25 LPA | Global: $80,000 - $150,000+ per year",
        educationPath: "BBA (International Business) -> MBA in International Business (IB)",
        futureScope: "With globalization, companies expand rapidly across borders. Professionals who navigate complex geopolitical laws and international markets are exceptionally valuable.",
        roadmap: [
            "Entry: Export/Import Executive",
            "Manager: Regional Manager (APAC/EMEA)",
            "Senior Manager: Director of International Operations",
            "Director: President of Global Operations"
        ],
        certifications: ["CGBP (Certified Global Business Professional)"],
        summary: "A globally expansive career combining trade logistics, international relations, and corporate strategy.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["MNCs", "Export/Import Firms", "Shipping & Logistics", "Tech Hardware"],
        jobDemandTrend: "High",
        governmentJobs: "Opportunities in the Ministry of Commerce, IIFT, and various export promotion councils.",
        competitiveExams: ["IIFT Exam", "CAT", "GMAT"],
        privateSectorOpportunities: "Extensive travel-heavy roles in diverse global corporations spanning tech to agriculture.",
        licenseRequired: "None",
        internshipRequirements: "Internship in an export house or international logistics firm.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Business Management",
        title: "Startup Founder",
        description: "A Startup Founder is an entrepreneur who specifically builds scalable, highly innovative (usually tech-enabled) companies. They raise venture capital, hire early teams, build the MVP, and aggressively seek hyper-growth.",
        skills: ["Product Vision", "Fundraising", "Grit/Resilience", "Rapid Iteration", "Storytelling"],
        salaryRange: "India: Low initial to Multi-Million exits | Global: Low initial to Billion Dollar exits",
        educationPath: "No strict path. Often B.Tech / Design / Top MBA dropouts or graduates.",
        futureScope: "The bedrock of modern innovation. The startup ecosystem provides the highest ceiling of wealth creation and societal impact available in the modern economy.",
        roadmap: [
            "Entry: Idea / Garage Phase",
            "Manager: MVP / Seed Stage",
            "Senior Manager: Achieving Product-Market Fit / Series A",
            "CEO: Scaling / IPO / Exit"
        ],
        certifications: ["None"],
        summary: "The highest stress, highest reward career possible—inventing the future while navigating extreme uncertainty and financial risk.",
        yearsOfStudy: "Real world trial and error",
        industriesHiring: ["Self-Employed (Venture Backed)"],
        jobDemandTrend: "N/A (Self-Created)",
        governmentJobs: "N/A",
        competitiveExams: ["None"],
        privateSectorOpportunities: "Creating disruptive businesses intended to eventually go public or be acquired by giants.",
        licenseRequired: "Significant legal setup required (Incorporation, IP, Equity structuring).",
        internshipRequirements: "Working directly under an early-stage startup founder is the best preparation.",
        riskLevel: "Very High"
    }
];

const seedBusinessManagementProfessions = async () => {
    try {
        await Career.deleteMany({ branch: "Business Management" });
        await Career.insertMany(businessManagementProfessions);
        console.log('Business Management Professions Seeded Successfully!'.magenta.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedBusinessManagementProfessions();
