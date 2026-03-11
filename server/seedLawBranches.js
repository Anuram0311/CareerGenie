const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Branch = require('./models/Branch');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const lawBranches = [
    {
        name: "Corporate Law",
        description: "Focus on the legal framework governing businesses, corporations, and their interactions, ensuring lawful corporate operations and transactions.",
        domain: "Law",
        coreFocusAreas: ["Mergers & Acquisitions", "Corporate Governance", "Securities Law", "Contracts"],
        typicalIssuesHandled: ["Shareholder Disputes", "Regulatory Compliance", "Business Restructuring"],
        industriesInvolved: ["Finance", "Technology", "Manufacturing", "Retail"],
        globalRelevance: "Critical for multinational corporations navigating complex, multi-jurisdictional trade policies and global equity markets.",
        futureScope: "Extremely high demand due to constant global M&A activities and increasingly complex cross-border corporate regulations."
    },
    {
        name: "Criminal Law",
        description: "Concerned with the system of rules that defines conduct prohibited by the state because it threatens and harms public safety and welfare.",
        domain: "Law",
        coreFocusAreas: ["Felonies & Misdemeanors", "White-collar Crimes", "Criminal Defense", "Prosecution"],
        typicalIssuesHandled: ["Fraud", "Homicide", "Theft", "Cybercrimes"],
        industriesInvolved: ["Government (Prosecution)", "Private Defense Firms", "Judiciary"],
        globalRelevance: "Fundamentally essential to the maintenance of law, order, and justice in every national jurisdiction globally.",
        futureScope: "Steady demand with an increasing specialization required for complex, modern white-collar offenses and international cybercrimes."
    },
    {
        name: "Civil Law",
        description: "Deals with disputes between individuals, organizations, or between the two, in which compensation is awarded to the victim.",
        domain: "Law",
        coreFocusAreas: ["Tort Law", "Contract Law", "Property Disputes", "Defamation"],
        typicalIssuesHandled: ["Breach of Contract", "Negligence Claims", "Personal Injury", "Wrongful Termination"],
        industriesInvolved: ["Insurance", "Corporate Entities", "Private Individuals"],
        globalRelevance: "The backbone of non-criminal dispute resolution, representing the majority of daily legal activities worldwide.",
        futureScope: "Continuous and massive volume of work ensuring stable, enduring demand across both private and corporate sectors."
    },
    {
        name: "Constitutional Law",
        description: "Focus on the interpretation and application of the country's constitution, dealing with the fundamental principles by which a state is governed.",
        domain: "Law",
        coreFocusAreas: ["Fundamental Rights", "State vs. Center Disputes", "Executive Powers", "Judicial Review"],
        typicalIssuesHandled: ["Rights Violations", "Legislative Validity", "Election Disputes"],
        industriesInvolved: ["Government bodies", "NGOs", "Supreme/High Courts"],
        globalRelevance: "Serves as the ultimate legal authority dictating the democratic framework and human rights of a nation.",
        futureScope: "Highly prestigious and critical for massive landmark judgments shaping national policy and public liberty."
    },
    {
        name: "International Law",
        description: "Govern the relations between sovereign states, international organizations, and the conduct of multinational trade and diplomacy.",
        domain: "Law",
        coreFocusAreas: ["Treaty Law", "Humanitarian Law", "International Trade", "Maritime Law"],
        typicalIssuesHandled: ["Cross-border Disputes", "Trade Sanctions", "Extradition", "Diplomatic Immunity"],
        industriesInvolved: ["United Nations (UN)", "WTO", "Multinational Corporations (MNCs)", "Diplomatic Services"],
        globalRelevance: "Absolutely essential in a globalized world dealing with international trade, climate agreements, and human rights.",
        futureScope: "Expanding rapidly as economic globalization intertwines nations, increasing the need for cross-border legal harmonization."
    },
    {
        name: "Intellectual Property Law",
        description: "Protect the rights of creators and inventors over their intellectual creations, including inventions, literary and artistic works, and symbols.",
        domain: "Law",
        coreFocusAreas: ["Patents", "Trademarks", "Copyrights", "Trade Secrets"],
        typicalIssuesHandled: ["Infringement Lawsuits", "Patent Filing", "Brand Protection", "Licensing Agreements"],
        industriesInvolved: ["Technology / Software", "Pharmaceuticals", "Entertainment & Media", "FMCG"],
        globalRelevance: "The bedrock of modern innovation economies, protecting multi-billion dollar tech, pharma, and entertainment assets globally.",
        futureScope: "One of the fastest-growing fields due to the explosion of digital content, AI generated work, and biotech innovations."
    },
    {
        name: "Tax Law",
        description: "Focus on the complex rules and policies that dictate how individuals and corporations must legally contribute wealth to the government.",
        domain: "Law",
        coreFocusAreas: ["Direct Tax", "Indirect Tax (GST/VAT)", "International Taxation", "Transfer Pricing"],
        typicalIssuesHandled: ["Tax Evasion Notices", "Corporate Restructuring", "Double Taxation", "Tax Litigation"],
        industriesInvolved: ["Big 4 Accounting", "Corporate Law Firms", "MNCs", "Wealth Management"],
        globalRelevance: "Every transaction worldwide has tax implications, making it a universal and hyper-lucrative legal necessity.",
        futureScope: "Extremely secure; as global tax nets tighten and laws fluctuate, expert tax lawyers are indispensable to wealth preservation."
    },
    {
        name: "Family Law",
        description: "Deal with domestic relations and family matters, focusing heavily on interpersonal legal issues and child welfare.",
        domain: "Law",
        coreFocusAreas: ["Divorce & Separation", "Child Custody", "Alimony", "Adoption & Surrogacy"],
        typicalIssuesHandled: ["Domestic Violence", "Prenuptial Agreements", "Inheritance Disputes"],
        industriesInvolved: ["Private Practice", "Family Courts", "Mediation Centers"],
        globalRelevance: "Universally required to mediate the most sensitive, personal, and universally common human disputes.",
        futureScope: "Perpetual demand driven by shifting social dynamics, high divorce rates, and evolving inheritance laws."
    },
    {
        name: "Environmental Law",
        description: "Regulate the interaction of humanity and the natural environment, aimed at reducing pollution and protecting ecology.",
        domain: "Law",
        coreFocusAreas: ["Pollution Control", "Resource Conservation", "Climate Change Litigation", "ESG Compliance"],
        typicalIssuesHandled: ["Toxic Spills", "Deforestation", "Carbon Credit Disputes", "Industrial Non-compliance"],
        industriesInvolved: ["Energy", "Manufacturing", "NGOs / Advocacy Groups", "Government Agencies"],
        globalRelevance: "Taking center stage globally as nations combat climate change and strictly enforce carbon and pollution mandates.",
        futureScope: "Aggressively expanding due to the rise of global ESG mandates required for massive corporate sustainability."
    },
    {
        name: "Labour & Employment Law",
        description: "Govern the relationship between employers, employees, trade unions, and the government to ensure fair workplace practices.",
        domain: "Law",
        coreFocusAreas: ["Workplace Discrimination", "Wage Disputes", "Union Negotiations", "Occupational Safety"],
        typicalIssuesHandled: ["Wrongful Termination", "Sexual Harassment (POSH)", "Severance Negotiations"],
        industriesInvolved: ["Human Resources (HR)", "Corporate Sector", "Manufacturing (Unions)", "Gig Economy"],
        globalRelevance: "Vital for stabilizing national economies by preventing exploitative practices and ensuring workforce productivity.",
        futureScope: "Highly evolving field due to the rise of remote work, gig economy labor classifications, and international contracting."
    },
    {
        name: "Cyber Law",
        description: "Address the legal issues related to the use of the Internet, dealing with digital privacy, data security, and online conduct.",
        domain: "Law",
        coreFocusAreas: ["Data Privacy (GDPR/DPDP)", "Cybersecurity", "E-commerce Regulations", "Digital Forensics"],
        typicalIssuesHandled: ["Data Breaches", "Identity Theft", "Software Piracy", "Online Defamation"],
        industriesInvolved: ["IT / Tech Giants", "Fintech", "E-commerce", "Government Agencies"],
        globalRelevance: "Crucial as human life universally shifts online, making digital data the most valuable commodity in the world.",
        futureScope: "Explosive growth trajectory alongside AI, blockchain, and global efforts to legally regulate massive big-tech monopolies."
    },
    {
        name: "Banking & Finance Law",
        description: "Focus on the highly regulated financial sector, navigating the complex rules governing banks, lending, and capital markets.",
        domain: "Law",
        coreFocusAreas: ["Debt Restructuring", "Insolvency & Bankruptcy", "Securitization", "Derivatives Regulation"],
        typicalIssuesHandled: ["Corporate Defaults", "Regulatory Fines", "Loan Syndication", "Cryptocurrency Compliance"],
        industriesInvolved: ["Commercial Banks", "Investment Banks", "Fintech Startups", "Asset Reconstruction"],
        globalRelevance: "Underpins the sheer functionality of the global economy, preventing institutional collapse and ensuring credit flow.",
        futureScope: "Highly lucrative and continuously demanding, driven by evolving fintech regulations and global economic cycles."
    },
    {
        name: "Real Estate / Property Law",
        description: "Govern the buying, selling, and use of land and buildings, ensuring secure and legal transfer of massive tangible assets.",
        domain: "Law",
        coreFocusAreas: ["Property Transactions", "Zoning Laws", "Landlord-Tenant Disputes", "Title Verification"],
        typicalIssuesHandled: ["Boundary Disputes", "Fraudulent Sales", "Construction Defect Litigation", "Lease Breaches"],
        industriesInvolved: ["Real Estate Developers", "Housing Finance", "Infrastructure", "Retail"],
        globalRelevance: "Real estate represents the largest asset class globally, requiring intensive legal scaffolding for every transaction.",
        futureScope: "Enduring stability as population growth continuously fuels urbanization, massive infrastructure, and commercial leasing."
    },
    {
        name: "Human Rights Law",
        description: "Dedicated to the protection of fundamental human liberties and fighting against systemic oppression and state abuses.",
        domain: "Law",
        coreFocusAreas: ["Refugee Asylum", "Civil Liberties", "Anti-Discrimination", "Genocide & War Crimes"],
        typicalIssuesHandled: ["Illegal Detention", "Police Brutality", "Free Speech Violations", "Human Trafficking"],
        industriesInvolved: ["International NGOs (Amnesty, HRW)", "UN Bodies", "Activism", "Pro Bono Practice"],
        globalRelevance: "The moral compass of international relations, maintaining decency and accountability within and between nations.",
        futureScope: "Essential, noble, and increasingly relevant as geopolitical instability and technological surveillance threaten global freedoms."
    },
    {
        name: "Arbitration & Dispute Resolution",
        description: "Provide an alternative to traditional court litigation, resolving complex commercial disputes privately, faster, and confidentially.",
        domain: "Law",
        coreFocusAreas: ["Commercial Arbitration", "Mediation", "Conciliation", "International Arbitration"],
        typicalIssuesHandled: ["Cross-border Contract Breaches", "Construction Disputes", "Joint Venture Failures"],
        industriesInvolved: ["MNCs", "International Trade", "Infrastructure", "Aviation"],
        globalRelevance: "The globally preferred mechanism for large corporations to bypass slow, public national court systems for swift justice.",
        futureScope: "Massive upward trend as corporate courts become heavily backlogged globally, pushing commercial entities toward private arbitration."
    }
];

const seedLawBranches = async () => {
    try {
        await Branch.deleteMany({ domain: "Law" });
        await Branch.insertMany(lawBranches);
        console.log('Law Branches Seeded Successfully!'.magenta.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedLawBranches();
