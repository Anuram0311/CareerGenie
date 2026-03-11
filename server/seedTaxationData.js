const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const taxationProfessions = [
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Tax Consultant",
        description: "Tax Consultants advise individuals and businesses on tax legislation and help them optimize their tax positions. They analyze financial information, prepare accurate tax returns, and ensure strict compliance with complex domestic tax laws.",
        skills: ["Income Tax", "Corporate Tax", "Tax Planning", "Financial Analysis"],
        salaryRange: "India: ₹4 LPA - ₹15 LPA | Global: $50,000 - $90,000 per year",
        educationPath: "B.Com / BBA -> CA / CMA / CPA (Optional but preferred)",
        futureScope: "With constantly evolving tax laws, businesses rely heavily on consultants to legally minimize tax liabilities and avoid severe penalties.",
        roadmap: [
            "Entry: Junior Tax Analyst",
            "Manager: Senior Tax Consultant",
            "Senior Manager: Tax Manager",
            "Director: Partner - Tax Advisory"
        ],
        certifications: ["CA", "CMA", "CPA"],
        summary: "An advisory-focused role providing strategic wealth protection and compliance services. Work Nature: Analytical & Compliance-Oriented.",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Accounting Firms", "Consultancies", "Corporate Houses"],
        jobDemandTrend: "High Demand",
        governmentJobs: "Contractual consulting roles for public sector units.",
        privateSectorOpportunities: "High demand in Big 4 and mid-tier accounting firms.",
        licenseRequired: "Optional (but required for official sign-offs)",
        freelanceOpportunities: "Excellent possibilities for private practice."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Tax Advisor",
        description: "Tax Advisors focus predominantly on long-term wealth strategy, estate planning, and minimizing overall tax burdens for high-net-worth clients or large corporations. They provide proactive guidance rather than just reactive compliance.",
        skills: ["Wealth Management", "Estate Planning", "Capital Gains Tax", "Regulatory Compliance"],
        salaryRange: "India: ₹6 LPA - ₹20 LPA | Global: $60,000 - $110,000 per year",
        educationPath: "B.Com / BBA / Law -> CA / MBA Finance / LL.B.",
        futureScope: "As wealth creation accelerates globally, the need for specialized advisors to structure family offices and corporate wealth efficiently is booming.",
        roadmap: [
            "Entry: Associate Advisor",
            "Manager: Tax Advisor",
            "Senior Manager: Principal Advisor",
            "Director: Managing Partner"
        ],
        certifications: ["CFP", "CA", "CPA"],
        summary: "A highly strategic profession focused on wealth maximization and proactive tax planning. Work Nature: Analytical and Strategy-Oriented.",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Wealth Management Firms", "Family Offices", "Private Banks"],
        jobDemandTrend: "Stable to High",
        governmentJobs: "Advisory roles in state financial planning departments.",
        privateSectorOpportunities: "Very lucrative roles in private banking and high-end consultancies.",
        licenseRequired: "Yes (CFP / CA preferred)",
        freelanceOpportunities: "High potential for boutique advisory firms."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Direct Tax Specialist",
        description: "Direct Tax Specialists focus exclusively on income tax, corporate tax, and wealth tax. They manage tax provisions, compute exact liabilities, file corporate returns, and stay updated with the latest Direct Tax Code amendments.",
        skills: ["Corporate Tax", "Income Tax Act", "TDS/TCS Regulations", "Tax Audits"],
        salaryRange: "India: ₹5 LPA - ₹18 LPA | Global: $55,000 - $100,000 per year",
        educationPath: "B.Com / BBA -> CA / CS / CMA",
        futureScope: "Corporate structures are becoming more transparent, demanding meticulous direct tax specialists to navigate stringent regulatory environments without risking profound audit failures.",
        roadmap: [
            "Entry: Direct Tax Executive",
            "Manager: Assistant Manager - Direct Taxation",
            "Senior Manager: Head of Direct Tax",
            "Director: VP - Taxation"
        ],
        certifications: ["CA", "Diploma in Direct Taxation"],
        summary: "A hardcore technical role managing the primary revenue assessment applied to businesses and individuals. Work Nature: Compliance and Analytical.",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["MNCs", "Manufacturing", "Big 4 Audit Firms"],
        jobDemandTrend: "Very High Demand",
        governmentJobs: "Opportunities through UPSC (IRS) or State Public Service Commissions.",
        privateSectorOpportunities: "Every large-scale company requires an in-house direct tax team.",
        licenseRequired: "Yes (CA highly valued)",
        freelanceOpportunities: "Moderate; mostly focuses on corporate consulting."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Indirect Tax Specialist (GST)",
        description: "Indirect Tax Specialists navigate the complex landscape of Goods and Services Tax (GST), Value Added Tax (VAT), and supply chain taxes. They ensure proper invoicing, claim input tax credits, and defend companies during GST audits.",
        skills: ["GST Laws", "Input Tax Credit (ITC) Rules", "Supply Chain Taxation", "Reconciliation"],
        salaryRange: "India: ₹4 LPA - ₹15 LPA | Global: $50,000 - $90,000 per year (VAT equivalents)",
        educationPath: "B.Com / BBA -> GST Certification / CA / CMA",
        futureScope: "GST regulations are intensely scrutinized by the government. Specialists are constantly required to resolve disputes, align supply chains, and seamlessly integrate tax rules with accounting ERPs.",
        roadmap: [
            "Entry: GST Associate",
            "Manager: Manager - Indirect Tax",
            "Senior Manager: AVP - Indirect Taxation",
            "Director: Global Indirect Tax Lead"
        ],
        certifications: ["GST Practitioner Certification", "CA / CMA"],
        summary: "A role strictly dealing with transaction-based taxes, critical for the daily operational flow of any business. Work Nature: Highly Compliance-Oriented.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["E-commerce", "FMCG", "Manufacturing", "Logistics"],
        jobDemandTrend: "Extremely High Demand in India",
        governmentJobs: "Roles alongside CBIC or as outsourced GST auditors.",
        privateSectorOpportunities: "Massive demand in retail, manufacturing, and e-commerce giants.",
        licenseRequired: "GST Practitioner License / CA required for sign-off",
        freelanceOpportunities: "High; practically every SME requires GST filing support."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Corporate Tax Manager",
        description: "Corporate Tax Managers lead the in-house tax departments of large enterprises. They oversee both direct and indirect tax reporting, manage external auditor relationships, and align tax strategy with overarching corporate financial goals.",
        skills: ["Team Leadership", "Corporate Tax Planning", "Financial Reporting", "Risk Management"],
        salaryRange: "India: ₹12 LPA - ₹35 LPA | Global: $90,000 - $160,000 per year",
        educationPath: "B.Com -> CA / CPA / MBA Finance",
        futureScope: "As global corporations expand, managing domestic and international corporate tax liabilities efficiently has become an apex priority for chief financial officers.",
        roadmap: [
            "Entry: Corporate Tax Analyst",
            "Manager: Corporate Tax Manager",
            "Senior Manager: General Manager - Taxation",
            "Director: Chief Tax Officer / CFO"
        ],
        certifications: ["CA", "CPA (for MNCs)"],
        summary: "A senior internal leadership role ensuring a corporation remains ethically compliant while maximizing its retained earnings. Work Nature: Strategic and Managerial.",
        yearsOfStudy: "5+ Years",
        industriesHiring: ["IT / SaaS", "Pharmaceuticals", "Automobile", "Conglomerates"],
        jobDemandTrend: "Stable and Highly Lucrative",
        governmentJobs: "Rarely applies, except in large Maharatna PSUs.",
        privateSectorOpportunities: "Premium roles available in every major corporate headquarters.",
        licenseRequired: "Yes (CA or equivalent is standard practice)",
        freelanceOpportunities: "Low; role demands full-time corporate commitment."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "International Tax Consultant",
        description: "International Tax Consultants handle cross-border taxation, Double Taxation Avoidance Agreements (DTAA), and expatriate tax policies. They help multinational corporations navigate the tax systems of multiple jurisdictions simultaneously.",
        skills: ["DTAA", "Expatriate Taxation", "Foreign Exchange Management Act (FEMA)", "Global Tax Structuring"],
        salaryRange: "India: ₹8 LPA - ₹25 LPA | Global: $80,000 - $150,000 per year",
        educationPath: "B.Com / Law -> CA / CPA / LL.M (International Tax)",
        futureScope: "With businesses expanding globally and remote work normalizing, international tax structuring has become one of the most intellectually demanding and highly compensated fields in tax.",
        roadmap: [
            "Entry: Analyst - International Tax",
            "Manager: Manager - Global Taxation",
            "Senior Manager: Director - International Tax",
            "Director: Partner - Global Mobility & Tax"
        ],
        certifications: ["Advanced Diploma in International Taxation (ADIT)"],
        summary: "An elite consulting tier focused on harmonizing tax compliance across international borders. Work Nature: Highly Analytical and Legal-Oriented.",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Big 4 Consultancies", "Top-tier Law Firms", "MNCs"],
        jobDemandTrend: "Growing rapidly",
        governmentJobs: "Specialized advisory for the Ministry of Finance regarding foreign treaties.",
        privateSectorOpportunities: "Dominated by premium consulting firms and enormous tech giants.",
        licenseRequired: "Yes (CA or Legal Practice License)",
        freelanceOpportunities: "Possible as an elite independent consultant."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Transfer Pricing Specialist",
        description: "Transfer Pricing Specialists focus on the pricing of transactions between enterprises under common ownership or control. They formulate policies, conduct economic analyses, and defend inter-company pricing models during government audits.",
        skills: ["Economic Profiling", "Benchmarking Analysis", "Transfer Pricing Regulations", "Financial Modeling"],
        salaryRange: "India: ₹7 LPA - ₹22 LPA | Global: $75,000 - $140,000 per year",
        educationPath: "B.Com / Economics -> CA / MBA Finance / CPA",
        futureScope: "Tax authorities worldwide are clamping down on profit shifting. Transfer pricing experts are critical to justifying corporate structures and avoiding multi-million dollar penalties.",
        roadmap: [
            "Entry: Transfer Pricing Analyst",
            "Manager: Transfer Pricing Manager",
            "Senior Manager: Principal - Transfer Pricing",
            "Director: Partner - Transfer Pricing"
        ],
        certifications: ["CA", "Specialized TP Course"],
        summary: "A highly specialized niche at the intersection of tax law, global economics, and supply chain management. Work Nature: Analytical and Economic Research-Oriented.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Consulting Firms", "Global Conglomerates", "Tech Companies"],
        jobDemandTrend: "High in Tier-1 cities",
        governmentJobs: "Roles evaluating corporate compliance on behalf of the Income Tax Dept.",
        privateSectorOpportunities: "Highly sought after by Big 4 firms and big pharma/tech manufacturing hubs.",
        licenseRequired: "No strict license, but CA/CPA is expected.",
        freelanceOpportunities: "Low to Moderate; typically requires backing of a large firm's resources."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Tax Compliance Officer",
        description: "Tax Compliance Officers ensure that all tax filings—direct, indirect, and local—are accurate and submitted strictly on time. They handle the operational groundwork, calculate tax provisions, and maintain meticulous tax documentation.",
        skills: ["Tax Filing Software", "Data Management", "Due Diligence", "Local Tax Laws"],
        salaryRange: "India: ₹3 LPA - ₹8 LPA | Global: $45,000 - $75,000 per year",
        educationPath: "B.Com / BBA -> M.Com / Tax Diploma",
        futureScope: "While automation handles basic data entry, human oversight by compliance officers remains essential to categorize complex transactions and avoid automated government notices.",
        roadmap: [
            "Entry: Tax Assistant",
            "Manager: Compliance Executive",
            "Senior Manager: Compliance Manager",
            "Director: Head of Regulatory Compliance"
        ],
        certifications: ["Diploma in Taxation", "Tally / ERP Certification"],
        summary: "A volume-driven, detail-oriented role dedicated to meeting government deadlines and maintaining flawless corporate records. Work Nature: Routine and Compliance-Oriented.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Retail", "Service Sectors", "Accounting Sub-contractors"],
        jobDemandTrend: "Stable Demand",
        governmentJobs: "Basic data processing roles within municipal and state tax departments.",
        privateSectorOpportunities: "Required in virtually every medium-to-large enterprise.",
        licenseRequired: "No",
        freelanceOpportunities: "High; taking on compliance contracts for multiple small businesses."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Tax Auditor",
        description: "Tax Auditors conduct formal examinations of business accounts specifically to verify that tax liabilities have been calculated correctly. They look for fraud, evasion, or genuine calculation errors in compliance with statutory audit protocols.",
        skills: ["Statutory Audit", "Forensic Accounting", "Risk Assessment", "Tax Act Sections"],
        salaryRange: "India: ₹6 LPA - ₹18 LPA | Global: $65,000 - $120,000 per year",
        educationPath: "B.Com -> CA (Mandatory for signing tax audits in India)",
        futureScope: "The regulatory necessity of tax audits for businesses crossing turnover thresholds ensures that Tax Auditors will always have a continuous, non-negotiable stream of work.",
        roadmap: [
            "Entry: Article Assistant / Audit Trainee",
            "Manager: Audit Manager",
            "Senior Manager: Senior Audit Manager",
            "Director: Audit Partner - Taxation"
        ],
        certifications: ["CA (Chartered Accountant)"],
        summary: "A statutory verification role ensuring public trust and government compliance by critically evaluating financial statements. Work Nature: Analytical and Investigative.",
        yearsOfStudy: "4.5 to 5 Years",
        industriesHiring: ["CA Firms", "Audit Firms", "Government Tax Bodies"],
        jobDemandTrend: "Mandatory statutory demand",
        governmentJobs: "Direct recruitment as Tax Inspectors or Auditors via SSC/UPSC.",
        privateSectorOpportunities: "Massive demand across mid-size and large CA firms.",
        licenseRequired: "Yes (CA Practice License Mandatory for Sign-off)",
        freelanceOpportunities: "Yes, as an independent practicing Chartered Accountant."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Tax Litigation Specialist",
        description: "Tax Litigation Specialists represent clients in front of tax tribunals, appellate authorities, or the High/Supreme Courts. They specialize in resolving complex tax disputes, notices, and search & seizure cases.",
        skills: ["Legal Drafting", "Argumentation", "Case Law Research", "Dispute Resolution"],
        salaryRange: "India: ₹8 LPA - ₹50+ LPA | Global: $90,000 - $250,000+ per year",
        educationPath: "B.Com / B.A. -> LL.B. -> LL.M. (Taxation) or CA + LL.B.",
        futureScope: "As the tax net widens, disputes between corporations and tax authorities are surging. Excellent litigators command extraordinary fees to save clients from massive financial penalties.",
        roadmap: [
            "Entry: Junior Associate / Counsel",
            "Manager: Senior Tax Counsel",
            "Senior Manager: Partner - Litigation",
            "Director: Senior Advocate (Designated)"
        ],
        certifications: ["Bar Council Enrollment"],
        summary: "A hardcore legal profession dedicated to intensely debating and defending client positions against state tax authorities. Work Nature: Highly Legal-Oriented.",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Law Firms", "Independent Practice", "Boutique Tax Litigators"],
        jobDemandTrend: "High Demand",
        governmentJobs: "Recruited as Government Standing Counsel to defend the state.",
        privateSectorOpportunities: "Hired on massive retainers by MNCs facing aggressive tax demands.",
        licenseRequired: "Yes (Advocate license or CA for tribunals)",
        freelanceOpportunities: "Yes; entirely feasible to run an independent litigation chamber."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Personal Income Tax Planner",
        description: "Personal Income Tax Planners cater specifically to salaried individuals, freelancers, and small business owners. They optimize personal investments (like insurance, mutual funds, real estate) to legally map out the lowest possible income tax liability.",
        skills: ["Section 80C to 80U", "Salary Structuring", "Capital Gains", "Investment Advisory"],
        salaryRange: "India: ₹3 LPA - ₹10 LPA | Global: $40,000 - $80,000 per year",
        educationPath: "B.Com / BBA -> CFP / Income Tax Course",
        futureScope: "Despite the push towards simplified tax regimes, complex personal investments still require professional planning, making this a stable evergreen career path.",
        roadmap: [
            "Entry: Tax Associate",
            "Manager: Individual Tax Consultant",
            "Senior Manager: HNI Tax Planner",
            "Director: Founder - Tax Advisory Firm"
        ],
        certifications: ["CFP", "NISM Advisory", "Diploma in Tax"],
        summary: "An accessible advisory role directly improving the take-home income and wealth generation capacity of the general public. Work Nature: Advisory and Financial Planning.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Financial Advisory Firms", "Retail Banks", "Fintech (Taxation platforms like Cleartax)"],
        jobDemandTrend: "Seasonal (peaks during tax season)",
        governmentJobs: "N/A directly.",
        privateSectorOpportunities: "Employed widely by wealth management firms and tax filing platforms.",
        licenseRequired: "Optional",
        freelanceOpportunities: "Exceptional; the most common freelance tax profession."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "GST Practitioner",
        description: "A GST Practitioner is a tax professional verified by the government to perform various tasks on behalf of a taxpayer on the GST portal. They handle everything from GST registration and monthly returns to cancellation and refund filings.",
        skills: ["GST Returns (GSTR-1, 3B, 9)", "E-way Bills", "Portal Navigation", "Client Management"],
        salaryRange: "India: ₹2.5 LPA - ₹8 LPA | Global: N/A (Region Specific)",
        educationPath: "B.Com -> Pass the official GST Practitioner Examination in India",
        futureScope: "Small and medium enterprises (MSMEs) form the backbone of the economy, and all of them legally require continuous GST compliance, ensuring a permanent and vast client base.",
        roadmap: [
            "Entry: GST Filing Assistant",
            "Manager: Independent GST Practitioner",
            "Senior Manager: Practice Head",
            "Director: Firm Owner"
        ],
        certifications: ["Government GST Practitioner License"],
        summary: "An operational and highly localized role securing the compliance backbone for millions of MSMEs in India. Work Nature: Pure Compliance.",
        yearsOfStudy: "3 Years",
        industriesHiring: ["SMEs", "Freelance Practice", "Local Trading Companies"],
        jobDemandTrend: "Extremely High Volume",
        governmentJobs: "N/A; but licensed by the government.",
        privateSectorOpportunities: "Hired internally by medium-sized manufacturing and trading units.",
        licenseRequired: "Yes (GSTP License)",
        freelanceOpportunities: "Incredibly high; most practitioners operate their own businesses."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Customs & Excise Specialist",
        description: "Customs and Excise Specialists focus on the taxes levied upon the import and export of goods. They interface with shipping companies, file shipping bills, handle customs clearance, and optimize Free Trade Agreement (FTA) benefits.",
        skills: ["Customs Act", "Foreign Trade Policy (FTP)", "Tariff Classifications", "Import/Export Operations"],
        salaryRange: "India: ₹4 LPA - ₹15 LPA | Global: $55,000 - $95,000 per year",
        educationPath: "B.Com / BBA in Logistics -> Custom Broker Exam / Foreign Trade Diploma",
        futureScope: "As global trade and supply chains become increasingly complex, experts who can rapidly clear goods through customs while minimizing duty payouts are indispensable to the logistics sector.",
        roadmap: [
            "Entry: Clearance Executive",
            "Manager: Customs Manager",
            "Senior Manager: Head of EXIM Taxation",
            "Director: Supply Chain Tax Director"
        ],
        certifications: ["Customs House Agent (CHA) License"],
        summary: "A dynamic, logistics-heavy tax role stationed at the intersection of international trade, supply chain velocity, and border taxation. Work Nature: Compliance and Logistics-Oriented.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Shipping Lines", "Freight Forwarders", "Large Exporters/Importers", "Manufacturing"],
        jobDemandTrend: "High Demand",
        governmentJobs: "Roles alongside CBIC as Custom Officers (via SSC CGL).",
        privateSectorOpportunities: "Required exclusively by companies directly involved in heavy physical trade.",
        licenseRequired: "Yes (CHA License for agency work)",
        freelanceOpportunities: "Moderate; mostly running independent CHA agencies."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Tax Policy Analyst",
        description: "Tax Policy Analysts work for governments, think-tanks, or global consulting units evaluating the macroeconomic effect of tax legislation. They study proposed tax laws, forecast revenue collections, and advise policymakers on economic impact.",
        skills: ["Macroeconomics", "Public Policy", "Econometrics", "Quantitative Research", "Data Modeling"],
        salaryRange: "India: ₹8 LPA - ₹20 LPA | Global: $70,000 - $130,000 per year",
        educationPath: "B.A. Economics / B.Com -> Master's in Economics / Public Policy",
        futureScope: "Nations constantly overhaul tax frameworks to stay globally competitive and fund infrastructure. Highly intellectual analysts are required to model the outcomes before laws pass.",
        roadmap: [
            "Entry: Research Associate",
            "Manager: Policy Analyst",
            "Senior Manager: Senior Economist / Policy Lead",
            "Director: Director of Economic Policy"
        ],
        certifications: ["Advanced Economics Degrees"],
        summary: "A macro-level, intellectual profession focused on shaping the laws of a nation rather than just following them. Work Nature: Research and Policy-Oriented.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Think Tanks", "Government Bodies", "Big 4 Policy Wings", "NGOs"],
        jobDemandTrend: "Niche but Stable",
        governmentJobs: "Roles in NITI Aayog, Ministry of Finance, and RBI.",
        privateSectorOpportunities: "Advising enormous trade bodies (like FICCI, CII) on lobbying efforts.",
        licenseRequired: "No",
        freelanceOpportunities: "Low; mostly employed by institutions."
    },
    {
        domain: "Commerce",
        branch: "Taxation",
        title: "Tax Technology Specialist",
        description: "Tax Technology Specialists bridge the gap between IT and taxation. They configure ERP systems (like SAP, Oracle) to automatically calculate tax, deploy compliance automation tools, and integrate e-invoicing solutions globally.",
        skills: ["SAP FICO / Tax Modules", "Tax Engines (Thomson Reuters/Vertex)", "Data Analytics", "Tech Implementations"],
        salaryRange: "India: ₹10 LPA - ₹30 LPA | Global: $85,000 - $160,000 per year",
        educationPath: "B.Tech + MBA / B.Com -> ERP Certifications",
        futureScope: "Tax authorities are moving to real-time digital reporting. The highest demand in the tax sphere right now is for professionals who can automate compliance through massive data pipelines.",
        roadmap: [
            "Entry: Tax Tech Analyst",
            "Manager: Tax Technology Manager",
            "Senior Manager: Solutions Architect - Tax",
            "Director: Head of Global Tax Tech"
        ],
        certifications: ["SAP FICO", "Vertex Certification", "Alteryx / PowerBI"],
        summary: "A lucrative, hybrid career transforming messy financial tax rules into streamlined, automated software algorithms. Work Nature: IT and Analytical.",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Big 4 Consultancies", "IT Giants (TCS, Infosys)", "MNC In-house Tech"],
        jobDemandTrend: "Explosive Demand",
        governmentJobs: "Roles involved in maintaining the national tax portal infrastructure (GSTN).",
        privateSectorOpportunities: "Extremely high salaries globally due to a massive shortage of tech-savvy tax experts.",
        licenseRequired: "No tax license, but tech vendor certifications required.",
        freelanceOpportunities: "Very high as specialized independent systems implementation consultants."
    }
];

const seedTaxationProfessions = async () => {
    try {
        await Career.insertMany(taxationProfessions);
        console.log('Taxation Professions Appended Successfully!'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedTaxationProfessions();
