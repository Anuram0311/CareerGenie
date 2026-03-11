const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const accountingFinanceProfessions = [
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Chartered Accountancy (CA)",
        description: "Chartered Accountancy involves the management of finances for an entity. It includes managing financial accounts, budgeting, auditing, business strategy, and taxation. Professionals in this field ensure the financial stability and regulatory compliance of organizations.",
        skills: ["Accounting", "Taxation", "Auditing", "Financial Reporting", "Analytical Thinking", "Ethics"],
        salaryRange: "India: ₹8 LPA - ₹20 LPA | Global: $60,000 - $120,000+ per year",
        educationPath: "Bachelor's in Commerce (B.Com) [Optional] -> CA Foundation -> CA Intermediate -> CA Final",
        futureScope: "With growing compliance and complex tax structures globally, the demand for CAs is consistently high, expanding into international finance and strategic business consulting.",
        roadmap: [
            "Beginner: Audit Assistant / Junior Accountant",
            "Mid: Senior Auditor / Financial Analyst",
            "Senior: Finance Manager / Audit Partner",
            "Expert: Chief Financial Officer (CFO)"
        ],
        certifications: ["ICAI Certification"],
        summary: "A challenging but highly rewarding profession providing central authority on a company's financial health, highly respected globally.",
        yearsOfStudy: "4.5 to 5 Years",
        industriesHiring: ["Accounting Firms", "Corporate Sector", "Banking & Finance", "Consultancy Firms"],
        jobDemandTrend: "Very High",
        governmentJobs: "Opportunities in Public Sector Banks, CAG, IRS, and various government financial departments.",
        competitiveExams: ["CA Foundation", "CA Intermediate", "CA Final"],
        privateSectorOpportunities: "High demand in Big 4 firms, MNCs, and Private Banks.",
        licenseRequired: "ICAI Membership (India)",
        internshipRequirements: "3 years of mandatory Articleship under a practicing CA.",
        riskLevel: "Very High"
    },
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Cost & Management Accountancy (CMA)",
        description: "CMA professionals specialize in cost management, financial planning, and management accounting. They help organizations make strategic business decisions by evaluating costs, operational efficiency, and profitability.",
        skills: ["Cost Accounting", "Financial Planning", "Strategic Management", "Data Analysis", "Budgeting"],
        salaryRange: "India: ₹6 LPA - ₹15 LPA | Global: $55,000 - $110,000 per year",
        educationPath: "Class 12th -> CMA Foundation -> CMA Intermediate -> CMA Final",
        futureScope: "Increasing focus on cost optimization and sustainable business practices makes CMAs highly sought after in manufacturing and service industries globally.",
        roadmap: [
            "Beginner: Cost Assistant / Financial Analyst",
            "Mid: Cost Accountant / Budget Analyst",
            "Senior: Financial Controller",
            "Expert: Chief Financial Officer (CFO) / Cost Partner"
        ],
        certifications: ["ICMAI Certification"],
        summary: "An excellent pathway for professionals passionate about combining accounting mechanisms with business strategy and organizational efficiency.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Manufacturing Sector", "IT & Services", "Consulting", "Public Sector"],
        jobDemandTrend: "High",
        governmentJobs: "Roles available in prominent PSUs, Indian Cost Accounts Service (ICoAS), and state treasuries.",
        competitiveExams: ["CMA Foundation", "CMA Inter", "CMA Final"],
        privateSectorOpportunities: "Strong demand in manufacturing giants, Big 4 auditing firms, and financial organizations.",
        licenseRequired: "ICMAI Membership",
        internshipRequirements: "15 months of practical training.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Company Secretary (CS)",
        description: "A Company Secretary ensures that a company complies with statutory and regulatory requirements and that decisions of the board of directors are implemented. They are the legal link between the company, its board of directors, and shareholders.",
        skills: ["Corporate Law", "Compliance Management", "Drafting", "Corporate Governance", "Negotiation"],
        salaryRange: "India: ₹5 LPA - ₹12 LPA | Global: $50,000 - $100,000+ per year",
        educationPath: "Class 12th -> CSEET -> CS Executive -> CS Professional",
        futureScope: "As corporate governance becomes stricter globally, the role of CS as key managerial personnel is expanding significantly.",
        roadmap: [
            "Beginner: Management Trainee / Junior CS",
            "Mid: Assistant Company Secretary",
            "Senior: Company Secretary / Legal Head",
            "Expert: Director / Key Managerial Personnel (KMP)"
        ],
        certifications: ["ICSI Certification"],
        summary: "A prestigious profession handling the legal and compliance aspects of corporate businesses, essential for transparent corporate governance.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Corporate Firms", "Law Firms", "Consulting", "Investment Banks"],
        jobDemandTrend: "High",
        governmentJobs: "Opportunities in regulatory bodies like SEBI, RBI, MCA, and various public sector undertakings.",
        competitiveExams: ["CSEET", "CS Executive", "CS Professional"],
        privateSectorOpportunities: "Mandatory requirement for listed companies; high demand in all large private entities.",
        licenseRequired: "ICSI Membership",
        internshipRequirements: "21 months of practical training.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Certified Public Accountant (CPA)",
        description: "CPA is a globally recognized accounting designation. CPAs handle accounting, taxation, reporting, and auditing processes for corporations and individual clients, maintaining the highest standard of international financial regulations.",
        skills: ["US GAAP", "International Auditing", "Taxation Laws", "Financial Reporting", "Critical Thinking"],
        salaryRange: "India: ₹8 LPA - ₹18 LPA | Global: $70,000 - $150,000+ per year",
        educationPath: "Bachelor's Degree (B.Com/BBA) -> 120-150 College Credits -> Uniform CPA Exam -> Licensure",
        futureScope: "With globalization, cross-border businesses require accounting professionals familiar with international standards like US GAAP, driving immense global CPA demand.",
        roadmap: [
            "Beginner: Staff Accountant / Audit Associate",
            "Mid: Senior Accountant / Tax Manager",
            "Senior: Director of Accounting / Partner",
            "Expert: CFO / International Finance Director"
        ],
        certifications: ["AICPA Licensing"],
        summary: "The highest standard of competence in the field of Accountancy globally, offering unparalleled international career mobility.",
        yearsOfStudy: "1 to 2 Years (Post Graduation)",
        industriesHiring: ["MNCs", "Big 4 Accounting Firms", "Global Banks", "IT Giants"],
        jobDemandTrend: "Very High",
        governmentJobs: "Opportunities in US governmental accounting bodies or international financial organizations.",
        competitiveExams: ["Uniform CPA Examination"],
        privateSectorOpportunities: "Top tier roles in Big 4 firms and financial outsourcing centers worldwide.",
        licenseRequired: "State Board of Accountancy License (USA)",
        internshipRequirements: "1 to 2 years of professional experience depending on the state board.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Investment Banking",
        description: "Investment Bankers help corporations, governments, and other groups raise capital through equity or debt. They also provide strategic advisory services for mergers, acquisitions, and restructuring.",
        skills: ["Financial Modeling", "Valuation", "M&A Advisory", "Negotiation", "Quantitative Analysis"],
        salaryRange: "India: ₹12 LPA - ₹30+ LPA | Global: $85,000 - $200,000+ per year",
        educationPath: "Bachelor's Degree -> MBA in Finance / CFA -> Analyst Training Programs",
        futureScope: "Continued corporate expansions, mergers, and capital raising ensure investment banking remains one of the most lucrative and high-growth sectors.",
        roadmap: [
            "Beginner: Investment Banking Analyst",
            "Mid: Associate / Vice President",
            "Senior: Director / Executive Director",
            "Expert: Managing Director / Partner"
        ],
        certifications: ["CFA", "Series 79 (US)"],
        summary: "A highly fast-paced, intensely competitive, and exceptionally well-compensated career dealing strictly in high-level corporate finance.",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Investment Banks", "Private Equity", "Venture Capital", "Hedge Funds"],
        jobDemandTrend: "High",
        governmentJobs: "Select roles in RBI, Ministry of Finance, and sovereign wealth funds.",
        competitiveExams: ["CAT/GMAT (for MBA)", "CFA Exams"],
        privateSectorOpportunities: "Goldman Sachs, JP Morgan, Morgan Stanley, and boutique investment firms.",
        licenseRequired: "Dependent on geography (e.g., FINRA in USA)",
        internshipRequirements: "Summer internships during MBA/Undergrad are highly critical.",
        riskLevel: "Very High"
    },
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Financial Analysis",
        description: "Financial Analysts evaluate investment opportunities, analyze financial data, and forecast trends to help businesses make informed decisions. They assess the performance of stocks, bonds, and other investments.",
        skills: ["Financial Forecasting", "Data Analysis", "Excel Mastery", "Corporate Finance", "Trend Analysis"],
        salaryRange: "India: ₹5 LPA - ₹15 LPA | Global: $60,000 - $110,000 per year",
        educationPath: "Bachelor's Degree (Finance/Economics) -> Financial Modeling Certification / CFA (Optional)",
        futureScope: "Big data and advanced analytics are transforming the field, significantly increasing the need for perceptive financial analysts across all corporate sectors.",
        roadmap: [
            "Beginner: Junior Financial Analyst",
            "Mid: Senior Analyst / Portfolio Manager",
            "Senior: Director of Financial Planning",
            "Expert: Chief Investment Officer (CIO)"
        ],
        certifications: ["CFA", "FMVA"],
        summary: "A core finance role perfect for numbers-oriented individuals seeking to drive business strategy through strict data analysis.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Banking", "Insurance", "Tech Sector", "Manufacturing"],
        jobDemandTrend: "High",
        governmentJobs: "Roles in regulatory authorities, statistical departments, and public enterprise finance divisions.",
        competitiveExams: ["CFA Exams"],
        privateSectorOpportunities: "Extensive opportunities across all Fortune 500 companies and startup ecosystems.",
        licenseRequired: "None usually required; CFA preferred",
        internshipRequirements: "Recommended 3-6 months internship in finance or accounting.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Risk Management",
        description: "Risk Managers identify, evaluate, and mitigate financial, operational, and strategic risks that could negatively impact an organization. They use statistical models and market knowledge to protect company assets.",
        skills: ["Risk Assessment", "Statistical Analysis", "Regulatory Compliance", "Problem Solving", "Strategic Planning"],
        salaryRange: "India: ₹7 LPA - ₹18 LPA | Global: $70,000 - $130,000 per year",
        educationPath: "Bachelor's in Finance/Math -> FRM Certification / MBA Finance",
        futureScope: "With rising cybersecurity threats, market volatility, and strict regulations, enterprise risk management has become a critical board-level focus.",
        roadmap: [
            "Beginner: Risk Analyst",
            "Mid: Senior Risk Manager",
            "Senior: Director of Risk",
            "Expert: Chief Risk Officer (CRO)"
        ],
        certifications: ["FRM (Financial Risk Manager)", "PRM"],
        summary: "An analytical career defending organizations against financial downfall, suited for detail-oriented strategists.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Banks", "Insurance", "Consulting", "Tech Companies"],
        jobDemandTrend: "Very High",
        governmentJobs: "Roles in Central Banks, financial regulatory bodies (SEBI, RBI), and government insurance sectors.",
        competitiveExams: ["FRM Exams"],
        privateSectorOpportunities: "Critical roles in commercial banking, investment banking, and large corporate treasuries.",
        licenseRequired: "FRM Charterholder (preferred)",
        internshipRequirements: "Preferred experience in banking or actuarial departments.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Auditing",
        description: "Auditors review financial records to ensure accuracy, proper tax payments, and compliance with regulations. They assess internal controls and provide independent assurance that an organization's risk management, governance, and internal control processes are operating effectively.",
        skills: ["Auditing Standards", "Attention to Detail", "Analytical Skills", "Ethics", "Compliance"],
        salaryRange: "India: ₹5 LPA - ₹14 LPA | Global: $55,000 - $100,000 per year",
        educationPath: "Bachelor's in Commerce/Accounting -> Professional Qualification (CA/CIA/CPA)",
        futureScope: "Constant regulatory changes ensure continuous demand for skilled auditors (both internal and external) to maintain organizational integrity.",
        roadmap: [
            "Beginner: Junior Auditor",
            "Mid: Senior Auditor / Audit Manager",
            "Senior: Audit Director",
            "Expert: Partner / Chief Audit Executive"
        ],
        certifications: ["CIA (Certified Internal Auditor)", "CISA"],
        summary: "A fundamental accounting role heavily focused on ensuring statutory compliance and preventing financial fraud.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Auditing Firms", "Corporate Sector", "Government", "NGOs"],
        jobDemandTrend: "Stable/High",
        governmentJobs: "CAG (Comptroller and Auditor General) of India, state audit departments, tax authorities.",
        competitiveExams: ["CIA Exams", "CISA Exams"],
        privateSectorOpportunities: "Massive demand in the Big 4, internal corporate audit functions.",
        licenseRequired: "CA/CPA/CIA (varies by level)",
        internshipRequirements: "Articleship or 1-2 years audit associate experience.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Tax Consultancy",
        description: "Tax Consultants provide expert advice to individuals and corporations on minimizing tax liabilities while ensuring compliance with complex tax laws at local, national, and international levels.",
        skills: ["Tax Laws", "Financial Math", "Communication", "Research Skills", "Attention to Detail"],
        salaryRange: "India: ₹6 LPA - ₹15 LPA | Global: $60,000 - $120,000 per year",
        educationPath: "Bachelor's in Accounting/Law -> CA / CPA / LLB -> Specialization in Taxation",
        futureScope: "Increasing globalization requires complex cross-border tax knowledge (transfer pricing, international tax), creating highly specialized and lucrative niches.",
        roadmap: [
            "Beginner: Tax Associate",
            "Mid: Tax Manager",
            "Senior: Tax Director",
            "Expert: Tax Partner / Head of Taxation"
        ],
        certifications: ["Enrolled Agent (US)", "Diploma in International Taxation"],
        summary: "A dynamic legal-financial hybrid career helping entities navigate the complex web of domestic and international tax legislations.",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Accounting Firms", "Law Firms", "MNCs", "Independent Consultancies"],
        jobDemandTrend: "High",
        governmentJobs: "Roles in direct/indirect tax departments, IRS, Ministry of Finance.",
        competitiveExams: ["CA/CPA", "State Bar Exams"],
        privateSectorOpportunities: "Tax advisory roles in consulting giants, standalone tax practices.",
        licenseRequired: "CA or Legal practice license.",
        internshipRequirements: "Practical experience under a registered tax practitioner.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Accounting & Finance",
        title: "Financial Planning & Wealth Management",
        description: "Wealth Managers and Financial Planners advise individuals and families on how to manage their money, covering investments, estate planning, taxation, retirement, and insurance.",
        skills: ["Client Relationship", "Investment Strategy", "Financial Planning", "Empathy", "Sales"],
        salaryRange: "India: ₹4 LPA - ₹15+ LPA | Global: $60,000 - $130,000+ per year",
        educationPath: "Bachelor's Degree -> CFP (Certified Financial Planner) Certification",
        futureScope: "Growing affluent populations globally are driving a personalized approach to wealth generation, preservation, and legacy planning.",
        roadmap: [
            "Beginner: Financial Advisor Trainee",
            "Mid: Wealth Manager / Senior Financial Planner",
            "Senior: Private Banker / Director",
            "Expert: Managing Partner / Head of Wealth Management"
        ],
        certifications: ["CFP Certification"],
        summary: "A highly client-facing role combining deep financial knowledge with excellent interpersonal skills to grow robust private portfolios.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Banks", "Wealth Management Firms", "Family Offices", "Independent Advisory"],
        jobDemandTrend: "High",
        governmentJobs: "Limited roles; strictly private sector focused.",
        competitiveExams: ["CFP Exams"],
        privateSectorOpportunities: "High opportunities in private banking divisions, wealth tech platforms, and mutual funds.",
        licenseRequired: "SEBI RIA (India) / FINRA (US)",
        internshipRequirements: "Sales or advisory internship in a financial institution.",
        riskLevel: "Low to Moderate"
    }
];

const seedAccountingFinanceData = async () => {
    try {
        await Career.deleteMany({ branch: "Accounting & Finance" });
        await Career.insertMany(accountingFinanceProfessions);
        console.log('Accounting & Finance Professions Seeded Successfully!'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedAccountingFinanceData();
