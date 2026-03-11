const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const bankingFinanceProfessions = [
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Bank Probationary Officer (PO)",
        description: "A Bank PO works in the managerial cadre of a bank. They are responsible for overseeing branch operations, managing customer relationships, handling loan processing, and ensuring smooth administrative functions within the branch.",
        skills: ["Banking Operations", "Customer Service", "Loan Processing", "Leadership", "Financial Analytics"],
        salaryRange: "India: ₹6 LPA - ₹12 LPA | Global: N/A (Role specific to Indian Banking System)",
        educationPath: "Bachelor's Degree (Any Discipline) -> Competitive Exam (IBPS/SBI) -> Interview -> Training",
        futureScope: "Excellent career progression within the public and private banking sectors, leading up to top management roles like General Manager or even CMD of the bank.",
        roadmap: [
            "Beginner: Probationary Officer / Management Trainee",
            "Mid: Assistant Manager / Branch Manager",
            "Senior: Chief Manager / Assistant General Manager",
            "Expert: General Manager / Managing Director"
        ],
        certifications: ["JAIIB", "CAIIB (Internal Banking Certifications)"],
        summary: "A highly sought-after and secure government-backed banking career offering rapid progression and comprehensive exposure to the banking industry.",
        yearsOfStudy: "1 Year (Exam Preparation)",
        industriesHiring: ["Public Sector Banks", "Private Sector Banks", "Regional Rural Banks"],
        jobDemandTrend: "Stable",
        governmentJobs: "Extensive opportunities in SBI, IBPS participating banks, and other nationalized banks.",
        competitiveExams: ["IBPS PO", "SBI PO", "RRB PO"],
        privateSectorOpportunities: "Similar roles exist in major private banks (HDFC, ICICI, Axis) through their own PO programs.",
        licenseRequired: "None",
        internshipRequirements: "1 to 2 years of probation period typically required post selection.",
        riskLevel: "Low"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Bank Clerk",
        description: "Bank Clerks are the frontline staff in banks, handling day-to-day customer transactions, cash deposits, withdrawals, NEFT/RTGS transfers, and assisting customers with basic account inquiries and services.",
        skills: ["Customer Assistance", "Cash Handling", "Data Entry", "Basic Accounting", "Communication"],
        salaryRange: "India: ₹3.5 LPA - ₹6 LPA | Global: N/A",
        educationPath: "Bachelor's Degree (Any Discipline) -> Competitive Exam (IBPS/SBI Clerk)",
        futureScope: "Consistent internal promotion exams allow clerks to upgrade to the officer cadre (PO) relatively quickly within a few years of service.",
        roadmap: [
            "Entry: Junior Clerk / Cashier",
            "Officer: Senior Clerk / Head Cashier",
            "Manager: Assistant Manager (via internal exams)",
            "Senior Executive: Branch Manager"
        ],
        certifications: ["JAIIB", "CAIIB (for promotions)"],
        summary: "A stable entry-level role in the banking sector with fixed working hours, offering a clear pathway to higher managerial positions through internal promotions.",
        yearsOfStudy: "6 Months to 1 Year (Exam Prep)",
        industriesHiring: ["Public Sector Banks", "Private Sector Banks", "Cooperative Banks"],
        jobDemandTrend: "Stable",
        governmentJobs: "Massive recruitment drives annually by SBI, IBPS, and state cooperative banks.",
        competitiveExams: ["IBPS Clerk", "SBI Clerk", "RBI Assistant"],
        privateSectorOpportunities: "Private banks hire constantly for frontline teller and customer service roles.",
        licenseRequired: "None",
        internshipRequirements: "Training period provided post-recruitment.",
        riskLevel: "Low"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "RBI Grade B Officer",
        description: "RBI Grade B Officers work for the central bank of India. They manage inflation, currency circulation, design national financial policies, and oversee the regulatory compliance of all commercial banks in the country.",
        skills: ["Macroeconomics", "Policy Making", "Financial Regulation", "Analytical Skills", "Governance"],
        salaryRange: "India: ₹15 LPA - ₹25 LPA | Global: N/A",
        educationPath: "Bachelor's Degree (Min 60%) -> RBI Grade B Phase 1 & 2 -> Interview",
        futureScope: "Considered the pinnacle of banking jobs in India. Officers gain immense knowledge of macroeconomics, often leading to roles in global financial institutions like the IMF or World Bank.",
        roadmap: [
            "Entry: Grade B Officer (Manager)",
            "Officer: Assistant General Manager",
            "Manager: General Manager / Chief General Manager",
            "Senior Executive: Executive Director / Deputy Governor"
        ],
        certifications: ["None strictly required; FRM/CFA beneficial for progression"],
        summary: "The most prestigious banking career in India, directly involved in shaping the nation's economic framework and monetary policy.",
        yearsOfStudy: "1 to 2 Years (Intense Exam Prep)",
        industriesHiring: ["Reserve Bank of India (Central Bank)"],
        jobDemandTrend: "Highly Competitive",
        governmentJobs: "Direct recruitment strictly by the Reserve Bank of India.",
        competitiveExams: ["RBI Grade B Examination"],
        privateSectorOpportunities: "High exit value into private banking leadership roles, consulting, or corporate strategy.",
        licenseRequired: "None",
        internshipRequirements: "Extensive internal training provided by RBI.",
        riskLevel: "Low"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Investment Banker",
        description: "Investment Bankers assist corporate clients, governments, and institutions in raising capital. They provide strategic advice on mergers, acquisitions, restructuring, and underwrite new debt and equity offerings.",
        skills: ["Financial Modeling", "Corporate Valuation", "M&A Advisory", "Negotiation", "Networking"],
        salaryRange: "India: ₹15 LPA - ₹40+ LPA | Global: $85,000 - $250,000+ per year",
        educationPath: "Bachelor's in Finance/Economics -> Top Tier MBA / CFA -> Analyst Training",
        futureScope: "As global markets expand and corporate consolidation continues, top-tier investment bankers remain in exceptional demand with unmatched compensation trajectories.",
        roadmap: [
            "Entry: Investment Banking Analyst",
            "Officer: Associate",
            "Manager: Vice President / Director",
            "Senior Executive: Managing Director (MD)"
        ],
        certifications: ["CFA", "Series 79 (For US markets)"],
        summary: "A high-stakes, extremely lucrative, and fast-paced career focusing on massive corporate financial transactions and capital raising.",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Investment Banks", "Private Equity", "Venture Capital", "Boutique Advisory Firms"],
        jobDemandTrend: "High",
        governmentJobs: "Very limited; occasionally in sovereign wealth funds or top financial ministries.",
        competitiveExams: ["CAT/GMAT (for top MBAs)", "CFA Exams"],
        privateSectorOpportunities: "Dominated by the private sector (Goldman Sachs, JP Morgan, Morgan Stanley, Avendus).",
        licenseRequired: "Market-specific regulatory licenses (e.g., FINRA in US).",
        internshipRequirements: "Summer internships at investment banks during MBA are critical.",
        riskLevel: "Very High"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Financial Analyst (Banking/Corporate)",
        description: "Financial Analysts examine financial data to guide business and investment decisions. They evaluate historical and current data, study economic and business trends, and assess the performance of stocks, bonds, and other investments.",
        skills: ["Financial Forecasting", "Excel Mastery", "Data Analysis", "Accounting Principles", "Trend Analysis"],
        salaryRange: "India: ₹6 LPA - ₹18 LPA | Global: $65,000 - $120,000 per year",
        educationPath: "Bachelor's in Finance/Commerce -> Financial Modeling Certification / CFA Prep",
        futureScope: "Crucial for corporate strategy and investment firms alike. Big data analytics is making this role even more pivotal in highly competitive business environments.",
        roadmap: [
            "Entry: Junior Financial Analyst",
            "Officer: Senior Financial Analyst",
            "Manager: Portfolio Manager / Finance Manager",
            "Senior Executive: Chief Investment Officer (CIO) / CFO"
        ],
        certifications: ["CFA", "FMVA (Financial Modeling & Valuation Analyst)"],
        summary: "The backbone of corporate finance and investment strategy, ideal for detail-oriented individuals who excel at analyzing numbers.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Banking", "Corporate Finance Departments", "Insurance", "Tech Sector"],
        jobDemandTrend: "High",
        governmentJobs: "Available in public sector enterprise finance departments and regulatory bodies.",
        competitiveExams: ["CFA Levels 1-3"],
        privateSectorOpportunities: "Extensive opportunities globally across almost every mid-to-large sized corporation.",
        licenseRequired: "None strictly required, but CFA is industry standard.",
        internshipRequirements: "3-6 months internship in corporate finance or equity research highly recommended.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Loan Officer",
        description: "Loan officers evaluate, authorize, or recommend approval of commercial, real estate, or credit loans. They analyze the financial status, credit history, and property evaluations of applicants to determine loan viability.",
        skills: ["Credit Analysis", "Risk Assessment", "Customer Service", "Sales Skills", "Financial Regulations"],
        salaryRange: "India: ₹4 LPA - ₹10 LPA | Global: $50,000 - $90,000 per year",
        educationPath: "Bachelor's in Commerce/Finance -> Bank Training Programs",
        futureScope: "As real estate and business sectors continuously grow, the demand for retail and commercial loan officers remains highly stable and lucrative.",
        roadmap: [
            "Entry: Loan Processing Trainee",
            "Officer: Retail / Commercial Loan Officer",
            "Manager: Credit Manager / Branch Loan Head",
            "Senior Executive: Regional Head of Lending"
        ],
        certifications: ["Certified Mortgage Banker (Global)", "IIBF Certifications (India)"],
        summary: "A critical customer-facing banking role balancing sales targets with strict risk management and credit underwriting.",
        yearsOfStudy: "3 Years",
        industriesHiring: ["Commercial Banks", "Credit Unions", "NBFCs", "Mortgage Companies"],
        jobDemandTrend: "Stable",
        governmentJobs: "Recruited through IBPS/SBI as specialist officers or general POs handling credit.",
        competitiveExams: ["IBPS PO/SO", "SBI PO"],
        privateSectorOpportunities: "High demand in private banks (HDFC, ICICI) and NBFCs (Bajaj Finance, Muthoot).",
        licenseRequired: "Banking/Mortgage license in certain global jurisdictions.",
        internshipRequirements: "On-the-job training provided by the hiring bank.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Credit Analyst",
        description: "Credit Analysts determine the creditworthiness of people or companies applying for loans. They analyze financial statements, economic trends, and market conditions to mitigate the risk of default for the lending institution.",
        skills: ["Financial Statement Analysis", "Credit Risk Modeling", "Industry Research", "Attention to Detail", "Reporting"],
        salaryRange: "India: ₹5 LPA - ₹15 LPA | Global: $60,000 - $100,000 per year",
        educationPath: "Bachelor's in Finance/Accounting -> CA/CMA/MBA Finance",
        futureScope: "With rising corporate lending and complex financial instruments, specialized credit analysts are increasingly vital for maintaining institutional financial health.",
        roadmap: [
            "Entry: Junior Credit Analyst",
            "Officer: Senior Credit Analyst",
            "Manager: Credit Risk Manager",
            "Senior Executive: Chief Credit Officer"
        ],
        certifications: ["CRA (Certified Research Analyst)", "CFA"],
        summary: "An analytical, behind-the-scenes banking role crucial for protecting banks from bad loans and financial defaults.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Commercial Banks", "Credit Rating Agencies", "Investment Banks", "NBFCs"],
        jobDemandTrend: "High",
        governmentJobs: "Hired as Specialist Officers (Credit) in public sector banks.",
        competitiveExams: ["IBPS Specialist Officer (Credit)", "CA Exams"],
        privateSectorOpportunities: "High demand in credit rating agencies (CRISIL, ICRA) and private banking loan divisions.",
        licenseRequired: "None required.",
        internshipRequirements: "Experience in audit or accounting firm is advantageous.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Risk Manager",
        description: "Risk Managers identify, measure, and manage the financial, operational, and credit risks faced by a banking institution. They ensure the bank remains compliant with Basel norms and internal risk appetites.",
        skills: ["Risk Modeling", "Basel Norms", "Quantitative Analysis", "Regulatory Compliance", "Stress Testing"],
        salaryRange: "India: ₹8 LPA - ₹25 LPA | Global: $80,000 - $150,000+ per year",
        educationPath: "Bachelor's in Math/Stats/Finance -> MBA Finance / FRM -> Professional Experience",
        futureScope: "Stringent global banking regulations (Basel III/IV) and complex cyber/market threats make Risk Managers one of the most highly paid and critical roles in banking today.",
        roadmap: [
            "Entry: Risk Analyst",
            "Officer: Senior Risk Analyst",
            "Manager: Risk Manager / AVP Risk",
            "Senior Executive: Chief Risk Officer (CRO)"
        ],
        certifications: ["FRM (Financial Risk Manager) by GARP", "PRM"],
        summary: "A highly specialized, quantitative role focused entirely on defending the financial institution against market crashes, defaults, and operational failures.",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Banks", "Insurance Firms", "Asset Management Companies", "Fintech"],
        jobDemandTrend: "Very High",
        governmentJobs: "Hired as Specialist Officers in PSB Risk management departments; roles in RBI.",
        competitiveExams: ["FRM Exams", "Bank SO Exams"],
        privateSectorOpportunities: "Intense demand in private sector banking, hedge funds, and major NBFCs.",
        licenseRequired: "FRM Charter preferred.",
        internshipRequirements: "Prior experience in banking operations or analytics required.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Insurance Officer",
        description: "Insurance Officers (or Administrative Officers) handle the underwriting, claims processing, and policy administration for insurance companies. They assess risk parameters before issuing policies and ensure legitimate claims are settled.",
        skills: ["Risk Calculation", "Policy Underwriting", "Claims Management", "Regulatory Knowledge", "Customer Relations"],
        salaryRange: "India: ₹6 LPA - ₹12 LPA | Global: $55,000 - $95,000 per year",
        educationPath: "Bachelor's Degree -> Competitive Exam (LIC/NIACL) or Actuarial Science route",
        futureScope: "The insurance sector in emerging markets is vastly under-penetrated, offering immense growth and job security as health, life, and general insurance adoption rises.",
        roadmap: [
            "Entry: Administrative Officer (AO) / Assistant",
            "Officer: Assistant Manager / Underwriter",
            "Manager: Branch / Divisional Manager",
            "Senior Executive: Zonal Manager / Director"
        ],
        certifications: ["Licentiate / Associate / Fellowship by III (Insurance Institute of India)"],
        summary: "A stable and highly rewarding career managing financial protection products, with excellent public sector opportunities.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Life Insurance Companies", "General Insurance Companies", "Reinsurance Firms"],
        jobDemandTrend: "Stable",
        governmentJobs: "Massive recruitment by public sector giants like LIC, NIACL, OICL, GIC.",
        competitiveExams: ["LIC AAO / ADO", "NIACL AO / Assistant"],
        privateSectorOpportunities: "High demand in private sector giants (HDFC Life, ICICI Lombard, Bajaj Allianz).",
        licenseRequired: "IRDAI licensing for agents/brokers, internal certifications for officers.",
        internshipRequirements: "Training provided post-selection.",
        riskLevel: "Low"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Stock Market Trader",
        description: "Stock Market Traders buy and sell equity, derivatives, commodities, or currencies on financial markets. They analyze price trends, market news, and quantitative indicators to generate short-term or long-term profits.",
        skills: ["Technical Analysis", "Fundamental Analysis", "Risk Management", "Emotional Control", "Algorithmic Trading"],
        salaryRange: "India: Variable / ₹5 LPA - ₹50+ LPA | Global: Variable / $70,000 - $300,000+ per year",
        educationPath: "Bachelor's Degree (Finance/Math) -> NISM Certifications -> Extensive Market Practice",
        futureScope: "With the boom in retail participation and algorithmic trading, skilled proprietary traders and quantitative traders possess limitless earning potential.",
        roadmap: [
            "Entry: Junior Proprietary Trader / Analyst",
            "Officer: Senior Equity Trader / Derivatives Trader",
            "Manager: Desk Head / Trading Manager",
            "Senior Executive: Portfolio Manager / Hedge Fund Partner"
        ],
        certifications: ["NISM Series VIII (Equity Derivatives)", "NCFM"],
        summary: "A high-risk, high-reward profession demanding immense psychological discipline, quick decision-making, and deep market understanding.",
        yearsOfStudy: "3 Years (Plus continuous self-learning)",
        industriesHiring: ["Proprietary Trading Firms", "Brokerage Houses", "Hedge Funds", "Self-Employed"],
        jobDemandTrend: "High",
        governmentJobs: "None. Strictly private or self-employed.",
        competitiveExams: ["NISM Certifications"],
        privateSectorOpportunities: "Working for major brokerages (Zerodha, AngelOne, Motilal Oswal) or prop desks.",
        licenseRequired: "NISM/SEBI Registration required to trade for clients.",
        internshipRequirements: "Shadowing a professional trader or working as a dealer in a brokerage firm.",
        riskLevel: "Very High"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Mutual Fund Advisor",
        description: "Mutual Fund Advisors guide retail and institutional investors in selecting suitable mutual fund schemes based on their risk appetite, financial goals, and market conditions. They manage investment portfolios and track fund performance.",
        skills: ["Investment Strategy", "Asset Allocation", "Client Relationship Management", "Sales", "Market Knowledge"],
        salaryRange: "India: ₹4 LPA - ₹15+ LPA (Commission/Incentive heavily) | Global: $60,000 - $120,000+ per year",
        educationPath: "Bachelor's Degree -> NISM VA Certification -> AMFI Registration",
        futureScope: "As systematic investment plans (SIPs) become the primary saving tool for the middle class, the demand for certified advisors to construct and manage these portfolios is skyrocketing.",
        roadmap: [
            "Entry: Mutual Fund Distributor/Agent",
            "Officer: Wealth Executive",
            "Manager: Regional Wealth Manager / Portfolio Manager",
            "Senior Executive: VP - Wealth Management"
        ],
        certifications: ["NISM Series V-A: Mutual Fund Distributors Certification", "CFP"],
        summary: "A highly entrepreneurial role combining financial product knowledge with consultative sales, helping average citizens build wealth over time.",
        yearsOfStudy: "1 to 3 Years",
        industriesHiring: ["Asset Management Companies (AMCs)", "Banks", "Wealth Management Firms", "Self-Employed"],
        jobDemandTrend: "High",
        governmentJobs: "Opportunities in public sector mutual funds (UTI, SBI Mutual Fund).",
        competitiveExams: ["NISM V-A Exam"],
        privateSectorOpportunities: "Massive scale in private banks, NBFCs, and independent distributor networks.",
        licenseRequired: "ARN (AMFI Registration Number) is mandatory in India.",
        internshipRequirements: "Sales or advisory internship highly beneficial.",
        riskLevel: "Low to Moderate"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Treasury Manager",
        description: "Treasury Managers manage an organization's liquidity, funding, capital, and financial risk (like foreign exchange and interest rate risk). They ensure the company has the cash flow required for operations while maximizing returns on idle funds.",
        skills: ["Liquidity Management", "FX Trading", "Cash Flow Forecasting", "Risk Hedging", "Corporate Finance"],
        salaryRange: "India: ₹10 LPA - ₹30 LPA | Global: $90,000 - $160,000 per year",
        educationPath: "Bachelor's in Commerce/Finance -> CA / MBA Finance / CFA -> Banking Experience",
        futureScope: "Treasury is the financial nerve center of any large bank or MNC. Globalization and fluctuating currencies make expert treasury management indispensable.",
        roadmap: [
            "Entry: Treasury Analyst / Dealer",
            "Officer: Treasury Executive",
            "Manager: Head of Treasury / ALM Manager",
            "Senior Executive: Treasurer / Chief Financial Officer (CFO)"
        ],
        certifications: ["Certified Treasury Professional (CTP)"],
        summary: "A specialized, high-responsibility role managing 'the bank's own money', distinct from customer deposits, deeply involved in money markets and FX.",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Commercial Banks", "MNC Corporate Treasuries", "NBFCs", "Central Banks"],
        jobDemandTrend: "Stable/High",
        governmentJobs: "Treasury departments of all public sector banks and RBI.",
        competitiveExams: ["CA / CFA"],
        privateSectorOpportunities: "Critical role in all large private sector banks and multinational corporations.",
        licenseRequired: "None directly, but professional degrees are standard.",
        internshipRequirements: "Prior experience in banking operations or corporate finance.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Relationship Manager (Banking)",
        description: "Relationship Managers manage and grow a portfolio of High Net-Worth Individuals (HNIs) or corporate clients for a bank. They cross-sell banking products, advise on wealth management, and serve as the single point of contact for premium clients.",
        skills: ["Client Acquisition", "Sales & Negotiation", "Wealth Advisory", "Networking", "Product Knowledge"],
        salaryRange: "India: ₹5 LPA - ₹20+ LPA | Global: $65,000 - $140,000+ per year",
        educationPath: "Bachelor's Degree -> MBA / PGDM -> Bank Specific Training",
        futureScope: "Banks heavily rely on Relationship Managers to drive their top-line revenue through fee income and CASA growth, making this a highly incentivized and secure career path.",
        roadmap: [
            "Entry: Assistant Relationship Manager",
            "Officer: Relationship Manager (RM)",
            "Manager: Senior RM / Branch Head",
            "Senior Executive: Wealth/Corporate Banking Head"
        ],
        certifications: ["NISM (various series), IRDAI (for insurance cross-sell)"],
        summary: "The ultimate sales and advisory role in banking, highly rewarding for dynamic individuals with immense networking and communication capabilities.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Private Wealth Management", "Retail Banking", "Corporate Banking", "Fintech"],
        jobDemandTrend: "Very High",
        governmentJobs: "Increasing recruitment in public sector banks specifically for Wealth Management divisions.",
        competitiveExams: ["CAT/MAT for MBA entry"],
        privateSectorOpportunities: "The largest recruiting segment for private sector banks globally.",
        licenseRequired: "NISM/IRDAI certifications required for selling specific products in India.",
        internshipRequirements: "Sales or marketing internship highly preferred.",
        riskLevel: "Low to Moderate"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Financial Consultant",
        description: "Financial Consultants are independent or firm-backed experts who advise businesses or individuals on tax planning, investments, restructuring, improving financial efficiency, and overall wealth generation.",
        skills: ["Business Consulting", "Financial Restructuring", "Tax Planning", "Investment Strategy", "Communication"],
        salaryRange: "India: ₹8 LPA - ₹25+ LPA | Global: $75,000 - $150,000+ per year",
        educationPath: "Bachelor's in Commerce -> CA / MBA Finance / CPA -> Practical Experience",
        futureScope: "Consulting remains one of the fastest-growing sectors. Businesses constantly seek external, unbiased expertise to navigate complex financial challenges and expansions.",
        roadmap: [
            "Entry: Consulting Analyst",
            "Officer: Consultant / Associate",
            "Manager: Engagement Manager / Principal",
            "Senior Executive: Partner / Director"
        ],
        certifications: ["CPA, CA, CFA"],
        summary: "A broad, dynamic role that offers exposure to multiple industries, solving complex financial pain points for an array of prestigious clients.",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Big 4 Consulting Firms", "Boutique Consultancies", "Self-Employed", "KPOs"],
        jobDemandTrend: "High",
        governmentJobs: "Hired on contract basis for specialized government projects or PSUs.",
        competitiveExams: ["Professional qualification exams (CA/CPA)"],
        privateSectorOpportunities: "Dominated by top consulting firms (McKinsey, BCG, Bain, Deloitte, PwC).",
        licenseRequired: "CA/CPA if providing signed audits or tax returns.",
        internshipRequirements: "Articleship or consulting internship is mandatory for top roles.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Banking & Financial Services",
        title: "Compliance Officer (Banking)",
        description: "Compliance Officers ensure that a bank operates within the legal and regulatory frameworks set by bodies like the RBI, SEBI, or SEC. They monitor transactions, conduct internal audits, and enforce anti-money laundering (AML) protocols.",
        skills: ["Regulatory Knowledge", "AML / KYC Policies", "Auditing", "Ethical Judgment", "Legal Drafting"],
        salaryRange: "India: ₹7 LPA - ₹20 LPA | Global: $70,000 - $130,000 per year",
        educationPath: "Bachelor's in Law (LLB) / Commerce / CS -> Banking Experience -> Compliance Certification",
        futureScope: "With global tightening of financial regulations, heavy penalties for non-compliance, and rising financial crimes, the regulatory compliance function has grown exponentially in importance and compensation.",
        roadmap: [
            "Entry: Legal/Compliance Analyst",
            "Officer: Compliance Officer",
            "Manager: Head of Compliance / AML Officer",
            "Senior Executive: Chief Compliance Officer (CCO)"
        ],
        certifications: ["CAMS (Certified Anti-Money Laundering Specialist)", "CS"],
        summary: "The internal police of the banking world, ensuring the institution avoids billion-dollar fines and maintains extreme ethical and legal standards.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Banks", "Fintech Companies", "Cryptocurrency Exchanges", "NBFCs"],
        jobDemandTrend: "Very High",
        governmentJobs: "Roles in regulatory enforcement agencies and public sector banks' legal/compliance departments.",
        competitiveExams: ["IBPS SO (Law Officer)"],
        privateSectorOpportunities: "Critical mandate in all private banking and modern fintech institutions.",
        licenseRequired: "CS / LLB preferred; CAMS for specialized AML roles.",
        internshipRequirements: "Legal or audit internship highly valued.",
        riskLevel: "Moderate"
    }
];

const seedBankingFinanceData = async () => {
    try {
        await Career.deleteMany({ branch: "Banking & Financial Services" });
        await Career.insertMany(bankingFinanceProfessions);
        console.log('Banking & Financial Services Professions Seeded Successfully!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedBankingFinanceData();
