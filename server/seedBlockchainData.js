const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const blockchainProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Blockchain Developer",
        description: "Build and optimize the foundational blockchain architecture and consensus protocols that power decentralized applications.",
        summary: "The core engineers building the unhackable digital ledgers that power cryptocurrencies and Web3.",
        skills: ["C++ / Go / Rust", "Cryptography", "Consensus Algorithms", "Data Structures", "P2P Networks"],
        salaryRange: "India: ₹10L - ₹35L | Global: $110K - $180K",
        educationPath: "B.Tech in CS + Deep understanding of cryptography",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Blockchain Foundations (Ethereum/Solana)", "Fintech", "Crypto Exchanges"],
        futureScope: "Extremely high value as major corporations and governments slowly adopt secure decentralized ledgers.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Blockchain Developer", "Hyperledger Fabric Administrator"],
        roadmap: ["Master Python/C++", "Understand blockchain architecture deeply", "Build core protocols", "Lead Protocol Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Smart Contract Developer",
        description: "Write the self-executing code (smart contracts) deployed securely on blockchains like Ethereum to automate financial transactions without a middleman.",
        summary: "The developers writing the immutable, self-executing code that powers DeFi and NFTs.",
        skills: ["Solidity / Vyper", "Hardhat / Truffle", "EVM (Ethereum Virtual Machine)", "Web3.js / Ethers.js", "Security Auditing"],
        salaryRange: "India: ₹12L - ₹40L+ | Global: $120K - $200K+",
        educationPath: "B.Tech in CS + Specialized Solidity Training",
        yearsOfStudy: "4 Years",
        industriesHiring: ["DeFi Platforms", "NFT Marketplaces", "Web3 Gaming"],
        futureScope: "Incredibly lucrative but highly stressful. A single bug can cost millions, making this a highly specialized elite role.",
        jobDemandTrend: "Specialized, Highly Paid",
        certifications: ["Certified Smart Contract Developer"],
        roadmap: ["Learn Solidity thoroughly", "Write complex multi-sig contracts", "Perform security audits", "Lead Smart Contract Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Blockchain Architect",
        description: "Design the high-level infrastructure of an enterprise blockchain solution, deciding between private, public, or hybrid ledgers for large corporations.",
        summary: "The grand visionary designing massive enterprise blockchain networks for banks and supply chains.",
        skills: ["System Architecture", "Hyperledger Fabric / Corda", "Cloud Integration", "Enterprise Security", "Tokenomics"],
        salaryRange: "India: ₹18L - ₹50L+ | Global: $150K - $250K+",
        educationPath: "B.Tech CS + 10+ years backend/system architecture experience",
        yearsOfStudy: "4 Years + Extensive Experience",
        industriesHiring: ["Global Consultancies (IBM, Big 4)", "Major Supply Chain Corporations"],
        futureScope: "Extremely secure. Required by old-world corporations trying to figure out how to transition to secure digital ledgers.",
        jobDemandTrend: "Elite Role, High Demand",
        certifications: ["Certified Blockchain Solution Architect (CBSA)"],
        roadmap: ["Extensive software architecture experience", "Master enterprise blockchain tools", "Design Fortune 500 ledgers", "Chief Blockchain Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Blockchain Security Engineer",
        description: "Audits smart contracts line-by-line before deployment to find vulnerabilities, preventing catastrophic financial millions from being stolen.",
        summary: "The elite code-breakers who hunt for million-dollar bugs in smart contracts before hackers find them.",
        skills: ["Smart Contract Auditing", "Reentrancy Attacks", "Flash Loan Exploits", "Fuzzing (Echidna/Mythril)", "Reverse Engineering"],
        salaryRange: "India: ₹15L - ₹45L+ | Global: $140K - $250K+",
        educationPath: "B.Tech in CS + Deep Cybersecurity & Solidity background",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Smart Contract Auditing Firms (CertiK, Trail of Bits)", "Major DeFi Protocols"],
        futureScope: "Arguably the highest hourly rate in tech. Heavily relied upon since blockchain code is 'immutable' (cannot be changed once deployed).",
        jobDemandTrend: "Explosive Demand",
        certifications: ["Decentralized Security Auditing Certs"],
        roadmap: ["Master Smart Contract Dev", "Learn every major historical hack", "Audit massive codebases", "Principal Security Auditor"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Cryptocurrency Analyst",
        description: "Analyze market trends, whitepapers, tokenomics, and on-chain data to advise crypto funds and institutions on which digital assets to invest in.",
        summary: "Financial experts analyzing raw blockchain data and token utility to predict the next big crypto asset.",
        skills: ["On-Chain Data Analysis (Dune/Glassnode)", "Financial Modeling", "Market Sentiment Analysis", "Tokenomics Evaluation"],
        salaryRange: "India: ₹8L - ₹30L | Global: $90K - $160K",
        educationPath: "Degree in Finance, Economics, or Tech",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Crypto Hedge Funds", "Venture Capital", "Crypto Exchanges (Binance/Coinbase)"],
        futureScope: "Highly volatile but incredibly lucrative during bull markets. Acts as the bridge between Wall Street and Web3.",
        jobDemandTrend: "Market Dependent",
        certifications: ["CFA (Plus Crypto Specialization)"],
        roadmap: ["Finance Degree", "Master on-chain data tools", "Manage institutional crypto portfolios", "Crypto Fund Partner"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "DeFi Developer",
        description: "Build Decentralized Finance (DeFi) protocols like decentralized exchanges, lending platforms, and yield aggregators on top of existing blockchains.",
        summary: "Software engineers rebuilding traditional Wall Street services entirely with autonomous code.",
        skills: ["Solidity", "Automated Market Makers (AMM)", "Liquidity Pools", "Flash Loans", "Financial Mathematics"],
        salaryRange: "India: ₹14L - ₹45L | Global: $130K - $210K",
        educationPath: "B.Tech in CS with deep understanding of finance",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["DeFi Startups (Uniswap/Aave ecosystems)", "Crypto VCs"],
        futureScope: "Incredibly high demand. Decentralized Finance aims to completely automate banking, loans, and trading.",
        jobDemandTrend: "Very High Growth",
        certifications: ["Expertise built mostly through open-source contributions"],
        roadmap: ["Master Solidity", "Understand complex AMM math", "Deploy secure lending protocols", "Lead DeFi Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Web3 Developer",
        description: "Integrate standard web frontends (React/Vue) with decentralized blockchain backends via Web3 libraries, creating user-friendly dApps.",
        summary: "The bridge engineers making complex blockchain applications easy for average consumers to use.",
        skills: ["React.js / Next.js", "Ethers.js / Web3.js", "Wallet Connect integration", "RPC Nodes", "IPFS"],
        salaryRange: "India: ₹8L - ₹30L | Global: $100K - $150K",
        educationPath: "B.Tech in CS or Full Stack Bootcamp + Web3 focus",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Web3 Startups", "NFT Marketplaces", "Crypto Wallets (MetaMask)"],
        futureScope: "Massive demand. Blockchain technology is heavily bottlenecked by terrible user interfaces; these devs fix that.",
        jobDemandTrend: "Consistently High",
        certifications: ["Web3 Developer Bootcamps"],
        roadmap: ["Learn front-end (React)", "Learn wallet integrations", "Build full dApp frontends", "Senior Web3 Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Blockchain Consultant",
        description: "Advise non-crypto businesses (like logistics or healthcare companies) on whether blockchain technology can actually solve their data transparency problems.",
        summary: "The business strategists helping traditional companies figure out if they actually need a blockchain.",
        skills: ["Business Strategy", "Blockchain Fundamentals", "Client Communication", "Use-Case Analysis", "Project Management"],
        salaryRange: "India: ₹10L - ₹35L | Global: $100K - $160K",
        educationPath: "MBA + B.Tech or strong IT background",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Global Consulting Firms (Deloitte, EY)", "Enterprise Tech"],
        futureScope: "Steady. Most companies want to use blockchain but don't know how; consultants provide the initial realistic roadmap.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Certified Blockchain Business Foundations"],
        roadmap: ["Tech/Business background", "Analyze realistic enterprise blockchain use-cases", "Advise corporate boards", "Partner at Consulting Firm"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Crypto Compliance Analyst",
        description: "Ensure that cryptocurrency exchanges and DeFi platforms comply perfectly with international Anti-Money Laundering (AML) and KYC regulations.",
        summary: "The legal watchdogs ensuring crypto platforms don't get shut down by government agencies.",
        skills: ["KYC / AML Laws", "Chainalysis / Transaction Tracing", "Regulatory Compliance (SEC/MiCA)", "Risk Assessment"],
        salaryRange: "India: ₹7L - ₹22L | Global: $85K - $130K",
        educationPath: "Degree in Law, Finance, or Business",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Crypto Exchanges", "Stablecoin Issuers", "Fintech startups", "Government Agencies"],
        futureScope: "Explosive growth as world governments start heavily regulating the crypto sector. Impossible to operate legally without them.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Anti-Money Laundering Specialist (CAMS)"],
        roadmap: ["Legal/Finance background", "Master crypto tracing software", "Draft global regulatory policies", "Chief Compliance Officer (CCO)"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "NFT Platform Developer",
        description: "Specialized developers who build out large-scale Non-Fungible Token ecosystems for digital art, gaming assets, and tokenized real-world assets.",
        summary: "The engineers building the complex software platforms that mint, trade, and store digital ownership tokens.",
        skills: ["ERC-721 / ERC-1155 Standards", "IPFS Storage", "Solidity", "Marketplace backend architecture", "Royalty mechanics"],
        salaryRange: "India: ₹8L - ₹30L | Global: $100K - $155K",
        educationPath: "B.Tech in CS or Software Development Bootcamp",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["NFT Marketplaces (OpenSea / Blur)", "AAA Gaming Studios", "Music/Art platforms"],
        futureScope: "Highly reliant on the NFT market cycle, though shifting heavily towards real-world asset tokenization (real estate, event tickets).",
        jobDemandTrend: "Niche, High Reward",
        certifications: ["Blockchain Development Bootcamps"],
        roadmap: ["Master Solidity & Web3.js", "Build NFT minting dApps", "Scale marketplace architectures", "Lead NFT Platform Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Blockchain Project Manager",
        description: "Oversee the lifecycle of decentralized application (dApp) builds, managing the communication between smart contract auditors, front-end devs, and marketing.",
        summary: "The organizational leaders keeping chaotic, fast-paced Web3 development teams on schedule.",
        skills: ["Agile/Scrum Frameworks", "Basic Web3 Understanding", "Community Management", "Jira/Trello", "Global Remote Leadership"],
        salaryRange: "India: ₹9L - ₹28L | Global: $95K - $145K",
        educationPath: "Degree in any field + Project Management Certs",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Web3 Startups", "DAOs (Decentralized Autonomous Organizations)", "Crypto Dev Shops"],
        futureScope: "Vital role. Web3 moves infinitely faster than traditional tech, requiring PMs who understand both tech jargon and global remote teams.",
        jobDemandTrend: "Steady Growth",
        certifications: ["PMP", "Certified ScrumMaster (CSM)"],
        roadmap: ["Project Management experience", "Pivot into Web3 ecosystem", "Manage multi-million dollar protocol launches", "Web3 Operations Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Blockchain Technology",
        title: "Tokenomics Specialist",
        description: "Design the exact mathematical supply-and-demand mechanics of a new cryptocurrency token to ensure it doesn't inflate or collapse instantly.",
        summary: "The economic architects drafting the complex math models that dictate exactly how a cryptocurrency functions over decades.",
        skills: ["Game Theory", "Macroeconomics", "Mathematical Modeling", "Vesting Schedules", "Liquidity mechanics"],
        salaryRange: "India: ₹10L - ₹35L+ | Global: $110K - $180K+",
        educationPath: "Degree in Economics, Math, or Game Theory",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["New Crypto Protocols", "Web3 Gaming", "Crypto Consultancies"],
        futureScope: "Extremely difficult and highly demanded. A protocol dies instantly if the tokenomics are poorly mathematically modeled.",
        jobDemandTrend: "Niche, Highly Paid",
        certifications: ["Advanced Economics/Game Theory courses"],
        roadmap: ["Economics/Math Degree", "Master decentralized game theory", "Design complex vesting schedules", "Lead Economic Designer"]
    }
];

const seedBlockchain = async () => {
    try {
        await Career.deleteMany({ branch: "Blockchain Technology" });
        await Career.insertMany(blockchainProfessions);
        console.log('Blockchain Technology Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedBlockchain();
