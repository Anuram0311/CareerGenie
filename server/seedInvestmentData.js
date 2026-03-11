const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const investmentProfessions = [
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Stock Trader",
        description: "Stock Traders buy and sell shares of companies on the stock market to strictly maximize short-term and medium-term profits. They meticulously analyze market trends, financial news, and chart patterns to execute rapid buy/sell orders.",
        skills: ["Technical Analysis", "Fundamental Analysis", "Risk Management", "Market Psychology"],
        salaryRange: "India: ₹4 LPA - ₹30+ LPA | Global: $60,000 - $150,000+ per year",
        educationPath: "B.Com / BBA / BA Economics -> NISM Certifications",
        futureScope: "With digital brokerages democratizing access, trading volume is consistently breaking records. Highly skilled traders who master disciplined risk management can achieve extraordinary financial independence.",
        roadmap: [
            "Entry: Junior Trader",
            "Manager: Senior Proprietary Trader",
            "Senior Manager: Desk Head",
            "Director: Independent Wealth Creator"
        ],
        certifications: ["NISM Series VIII", "NCFM"],
        summary: "A high-speed, dynamic profession aiming for rapid capital appreciation. Technical Skill Requirement: High. Income Potential: Unlimited. Work Nature: Highly Analytical / High Pressure.",
        yearsOfStudy: "1 to 3 Years (Market Experience)",
        industriesHiring: ["Brokerage Firms", "Proprietary Trading Desks", "Self-Employed"],
        jobDemandTrend: "High Demand (Global)",
        governmentJobs: "N/A",
        privateSectorOpportunities: "High opportunities in proprietary trading firms and top institutional brokerages.",
        licenseRequired: "Optional (NISM/NCFM needed for institutional roles)",
        freelanceOpportunities: "Exceptional possibility for Day Trading and Self-trading.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Equity Research Analyst",
        description: "Equity Research Analysts study a company’s financial statements, market standing, and competitive landscape to determine the true value of its stock. Their meticulous research reports advise institutional investors on whether to 'buy, hold, or sell'.",
        skills: ["Financial Modeling", "Valuation (DCF)", "Industry Analysis", "Report Writing"],
        salaryRange: "India: ₹6 LPA - ₹25 LPA | Global: $70,000 - $150,000 per year",
        educationPath: "B.Com / BBA / Economics -> CA / CFA / MBA Finance",
        futureScope: "As long as capital markets exist, accurate valuations will be necessary. Top research analysts command enormous respect and dictate massive capital flows across the economy.",
        roadmap: [
            "Entry: Junior Analyst",
            "Manager: Senior Equity Analyst",
            "Senior Manager: VP - Equity Research",
            "Director: Head of Research"
        ],
        certifications: ["CFA (Highly Recommended)", "NISM Series XV (Research Analyst)"],
        summary: "A deeply analytical career focused on uncovering the true worth of businesses. Technical Skill Requirement: High. Income Potential: High. Work Nature: Highly Analytical / Strategic.",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Investment Banks", "Mutual Funds", "Brokerages"],
        jobDemandTrend: "Stable ongoing Demand (Global)",
        governmentJobs: "Advisory roles in state infrastructure banks or RBI.",
        privateSectorOpportunities: "Top tier roles in major multinational banks and domestic brokerages.",
        licenseRequired: "Yes (NISM for India)",
        freelanceOpportunities: "Possible as an independent market commentator or blogger.",
        riskLevel: "Low to Moderate"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Portfolio Manager",
        description: "Portfolio Managers make the ultimate investment decisions for mutual funds, pension funds, or high-net-worth individuals. They strategically allocate capital across various asset classes to maximize long-term returns while strictly managing risk boundaries.",
        skills: ["Asset Allocation", "Macro-Economics", "Risk Management", "Investment Strategy"],
        salaryRange: "India: ₹15 LPA - ₹50+ LPA | Global: $120,000 - $300,000+ per year",
        educationPath: "MBA Finance (Top Tier) / CA -> CFA Charterholder",
        futureScope: "The accumulation of wealth globally means there is an ever-increasing pool of capital requiring expert management to beat inflation and generate alpha.",
        roadmap: [
            "Entry: Equity Research Analyst",
            "Manager: Co-Fund Manager",
            "Senior Manager: Lead Portfolio Manager",
            "Director: Chief Investment Officer (CIO)"
        ],
        certifications: ["CFA Charter (Gold Standard)"],
        summary: "The apex role in mutual fund ecosystems, controlling billions in assets. Technical Skill Requirement: Very High. Income Potential: High. Work Nature: Highly Strategic / High Pressure.",
        yearsOfStudy: "6+ Years",
        industriesHiring: ["Asset Management Companies (AMCs)", "Private Banks", "Family Offices"],
        jobDemandTrend: "High Demand (Global)",
        governmentJobs: "Managing massive state pension funds (EPFO).",
        privateSectorOpportunities: "Highly prestigious and lucrative institutional roles worldwide.",
        licenseRequired: "Yes (PMS Registration/NISM)",
        freelanceOpportunities: "Can operate massive independent PMS (Portfolio Management Services) firms.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Investment Banker (Capital Markets)",
        description: "Investment Bankers act as intermediaries between entities needing capital and those with capital. They underwrite massive IPOs, orchestrate complex Mergers & Acquisitions (M&A), and issue billion-dollar corporate bonds.",
        skills: ["Financial Modeling", "M&A Structuring", "Capital Markets", "Pitch Deck Creation"],
        salaryRange: "India: ₹15 LPA - ₹40+ LPA | Global: $100,000 - $250,000+ per year",
        educationPath: "Top-tier B.Tech / B.Com -> Top-tier MBA Finance (IIM/Ivy League)",
        futureScope: "Investment Banking remains the most elite, high-paying, and prestigious sector in global finance, crucial for the massive corporate restructurings driving the modern economy.",
        roadmap: [
            "Entry: Investment Banking Analyst",
            "Manager: Associate / VP",
            "Senior Manager: Director",
            "Director: Managing Director (MD)"
        ],
        certifications: ["CFA (Optional)"],
        summary: "A high-octane profession driving the largest corporate deals in the world. Technical Skill Requirement: High. Income Potential: Unlimited. Work Nature: Highly Strategic / Extreme Pressure.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Investment Banks (Bulge Bracket & Boutiques)"],
        jobDemandTrend: "Cyclical but highly lucrative (Global)",
        governmentJobs: "Roles advising the government on massive disinvestment programs.",
        privateSectorOpportunities: "Elite roles at global bulge bracket banks and large domestic financial houses.",
        licenseRequired: "Regulatory licenses required for deal execution.",
        freelanceOpportunities: "Consulting on smaller M&A deals as a boutique advisor.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Mutual Fund Manager",
        description: "Similar to a Portfolio Manager but exclusively running publicly pooled mutual funds. They are legally accountable to retail investors to generate superior returns while adhering strictly to the fund's published investment mandate.",
        skills: ["Stock Selection", "Sector Rotation", "Compliance", "Quantitative Analysis"],
        salaryRange: "India: ₹20 LPA - ₹100+ LPA | Global: $150,000 - $500,000+ per year",
        educationPath: "MBA Finance / CA -> CFA -> 10+ years market experience",
        futureScope: "With rising financial literacy, SIPs are witnessing historic inflows, ensuring fund managers control increasingly enormous AUM (Assets Under Management).",
        roadmap: [
            "Entry: Analyst",
            "Manager: Assistant Fund Manager",
            "Senior Manager: Mutual Fund Manager",
            "Director: CIO - Asset Management"
        ],
        certifications: ["CFA", "NISM Series VA"],
        summary: "The celebrated faces of retail investing, managing enormous pools of public money. Technical Skill Requirement: Very High. Income Potential: High. Work Nature: Strategic / Analytical.",
        yearsOfStudy: "6+ Years",
        industriesHiring: ["Mutual Fund Houses (HDFC AMC, SBI MF, etc.)"],
        jobDemandTrend: "Stable Elite Demand",
        governmentJobs: "Top positions at public sector-backed AMCs (like UTI or SBI MF).",
        privateSectorOpportunities: "Apex positions in all major global and domestic asset management companies.",
        licenseRequired: "Yes (SEBI Mandated Licenses)",
        freelanceOpportunities: "Rare, due to the regulatory nature of retail pooled funds.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Hedge Fund Manager",
        description: "Hedge Fund Managers cater exclusively to ultra-high-net-worth individuals and massive institutions. They use complex, high-risk, aggressively leveraged strategies to guarantee absolute returns regardless of market crashes.",
        skills: ["Advanced Derivatives", "Short Selling", "Quantitative Modeling", "Arbitrage"],
        salaryRange: "India: ₹30 LPA - ₹100+ LPA | Global: $200,000 - Millions per year",
        educationPath: "Elite Mathematics / Economics / Finance background -> CFA",
        futureScope: "Hedge funds operate with the highest profit margins in finance. Elite managers who can protect wealth during recessions have an infinite runway for extreme wealth generation.",
        roadmap: [
            "Entry: Quantitative Analyst",
            "Manager: Sector Head",
            "Senior Manager: Hedge Fund Manager",
            "Director: General Partner / Fund Owner"
        ],
        certifications: ["CFA", "CAIA (Chartered Alternative Investment Analyst)"],
        summary: "The most exclusive, aggressive, and highly rewarded role in capital markets. Technical Skill Requirement: Extreme. Income Potential: Unlimited. Work Nature: Highly Analytical / Extreme Risk & Pressure.",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Hedge Funds", "Alternative AMCs"],
        jobDemandTrend: "Niche but Ultra-Premium (Global)",
        governmentJobs: "N/A",
        privateSectorOpportunities: "Dominated entirely by elite private offshore and onshore funds.",
        licenseRequired: "Yes (AIF regulations in India, SEC in the US)",
        freelanceOpportunities: "Launching your own alternative investment fund (AIF).",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Financial Market Analyst",
        description: "Financial Market Analysts keep a constant pulse on the global economy. They study macroeconomic indicators, central bank policies, and geopolitical events to forecast broader equity, bond, and currency market movements.",
        skills: ["Macroeconomics", "Forecasting", "Data Visualization", "Econometrics"],
        salaryRange: "India: ₹5 LPA - ₹18 LPA | Global: $65,000 - $120,000 per year",
        educationPath: "BA Economics / B.Com -> MA Economics / MBA Finance",
        futureScope: "In an interconnected global economy, analysts who can predict the ripple effects of interest rate hikes or trade wars are essential to mitigating institutional risk.",
        roadmap: [
            "Entry: Junior Market Analyst",
            "Manager: Market Strategist",
            "Senior Manager: Chief Economist",
            "Director: Global Head of Strategy"
        ],
        certifications: ["CFA", "FRM (Financial Risk Manager)"],
        summary: "The macroeconomic brains forecasting the underlying currents that move stock indices. Technical Skill Requirement: High. Income Potential: Moderate to High. Work Nature: Analytical / Strategic.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Central Banks", "Investment Banks", "Financial Media"],
        jobDemandTrend: "Stable Demand (Global)",
        governmentJobs: "Roles in SEBI, RBI, and Ministry of Finance.",
        privateSectorOpportunities: "Key roles in large banks establishing top-down investment themes.",
        licenseRequired: "Optional (NISM/CFA preferred)",
        freelanceOpportunities: "Possible as independent economic columnists or advisors.",
        riskLevel: "Low to Moderate"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Derivatives Trader (Futures & Options)",
        description: "Derivatives Traders buy and sell complex financial contracts whose value is tied to an underlying asset. They employ highly complex hedging and speculative strategies to profit from market volatility.",
        skills: ["Options Greeks", "Volatility Arbitrage", "Risk Management", "Hedging"],
        salaryRange: "India: ₹6 LPA - ₹40+ LPA | Global: $80,000 - $200,000+ per year",
        educationPath: "B.Tech / B.Com -> NISM Equity Derivatives Certification",
        futureScope: "Options trading volumes have exploded globally. Expert traders dealing in high-speed F&O strategies are crucial for market liquidity and proprietary firm profits.",
        roadmap: [
            "Entry: Junior Options Trader",
            "Manager: Senior Derivatives Trader",
            "Senior Manager: Head of Derivatives Desk",
            "Director: Managing Partner"
        ],
        certifications: ["NISM Series VIII (Equity Derivatives)"],
        summary: "A highly mathematical, rapid-fire trading role capitalizing on market volatility. Technical Skill Requirement: High. Income Potential: Unlimited. Work Nature: Highly Analytical / High Pressure.",
        yearsOfStudy: "2 to 4 Years",
        industriesHiring: ["Prop Trading Desks", "Brokerages", "Hedge Funds"],
        jobDemandTrend: "Extremely High (Global & India)",
        governmentJobs: "N/A",
        privateSectorOpportunities: "Massive institutional demand for expert derivatives dealers.",
        licenseRequired: "Yes (NISM Series 8 strongly required)",
        freelanceOpportunities: "A massive segment relies on independent F&O retail trading.",
        riskLevel: "Very High"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Quantitative Analyst (Quant)",
        description: "Quants design complex mathematical models to identify deeply hidden, highly profitable market inefficiencies. They rely heavily on statistical probabilities, calculus, and machine learning to inform algorithmic trading systems.",
        skills: ["Python/C++", "Stochastic Calculus", "Machine Learning", "Statistical Arbitrage"],
        salaryRange: "India: ₹15 LPA - ₹60+ LPA | Global: $150,000 - $350,000+ per year",
        educationPath: "B.Tech (Computer Science) / Master's in Mathematics or Physics",
        futureScope: "As markets become hyper-efficient, the only way institutions can generate Alpha is through the hyper-complex mathematical models developed exclusively by elite Quants.",
        roadmap: [
            "Entry: Quant Researcher",
            "Manager: Senior Quant Analyst",
            "Senior Manager: Head of Quantitative Strategy",
            "Director: Chief Quant / Fund Partner"
        ],
        certifications: ["CQF (Certificate in Quantitative Finance)"],
        summary: "The ultimate mathematical rocket scientists of Wall Street and Dalal Street. Technical Skill Requirement: Extreme. Income Potential: Extreme. Work Nature: Deeply Analytical.",
        yearsOfStudy: "5 to 6+ Years",
        industriesHiring: ["High Frequency Trading (HFT) Firms", "Quant Hedge Funds", "Investment Banks"],
        jobDemandTrend: "High Demand for niche talent (Global)",
        governmentJobs: "N/A",
        privateSectorOpportunities: "Lucrative opportunities at HFT giants and top-tier proprietary funds.",
        licenseRequired: "None",
        freelanceOpportunities: "Building and licensing proprietary algorithmic trading models to firms.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Algorithmic Trading Specialist",
        description: "Algorithmic Trading Specialists take the mathematical models designed by Quants and translate them into brutally fast, zero-latency execution code. They ensure the trading servers can execute thousands of transactions per second.",
        skills: ["Low Latency C++ / Python", "API Integration", "Network Engineering", "System Architecture"],
        salaryRange: "India: ₹12 LPA - ₹50+ LPA | Global: $120,000 - $250,000+ per year",
        educationPath: "B.Tech in Computer Science / IT",
        futureScope: "Over 70% of global trades are executed by algorithms. The speed and efficiency of code directly translates to millions of dollars in arbitrage profits, ensuring massive tech demand.",
        roadmap: [
            "Entry: Algo Developer",
            "Manager: Lead System Architect",
            "Senior Manager: Head of Algorithmic Execution",
            "Director: CTO - Trading"
        ],
        certifications: ["N/A (Purely Coding Mastery)"],
        summary: "A pure computer science role operating at the bleeding edge of global finance and networking infrastructure. Technical Skill Requirement: High. Income Potential: High. Work Nature: Highly Analytical.",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Prop Trading Firms", "Hedge Funds", "Fintech"],
        jobDemandTrend: "Explosive Demand (Global)",
        governmentJobs: "N/A",
        privateSectorOpportunities: "Critical roles spanning tech firms and financial institutions.",
        licenseRequired: "None",
        freelanceOpportunities: "Developing custom trading bots for retail clients on popular broker APIs.",
        riskLevel: "Moderate"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Commodity Trader",
        description: "Commodity Traders speculate on the price movements of physical raw materials such as Crude Oil, Gold, Silver, and agricultural products. They monitor global supply chain disruptions and geopolitical distress to execute macro-trades.",
        skills: ["Global Supply Chain Economics", "Futures Contracts", "Technical Analysis", "Geopolitical Awareness"],
        salaryRange: "India: ₹5 LPA - ₹25+ LPA | Global: $70,000 - $160,000+ per year",
        educationPath: "B.Com / BBA / Economics -> NISM Commodity Derivatives",
        futureScope: "With rising global conflicts and climate change impacting supply chains constantly, commodities exhibit incredible volatility and opportunity for highly skilled traders.",
        roadmap: [
            "Entry: Junior Commodity Analyst",
            "Manager: Commodity Trader",
            "Senior Manager: Head of Commodities Desk",
            "Director: Managing Director"
        ],
        certifications: ["NISM Series XVI (Commodity Derivatives)"],
        summary: "A high-stakes trading career focused exclusively on the physical raw materials that run the global economy. Technical Skill Requirement: Moderate. Income Potential: High. Work Nature: Analytical / Strategic.",
        yearsOfStudy: "3 Years",
        industriesHiring: ["Commodity Exchanges (MCX)", "Agri-businesses", "Energy Companies"],
        jobDemandTrend: "Stable Demand (Global)",
        governmentJobs: "Roles in governmental agricultural pricing boards.",
        privateSectorOpportunities: "Huge demand in physical trading houses and massive commodity producers.",
        licenseRequired: "Yes (NISM for institutional roles)",
        freelanceOpportunities: "High; self-trading on commodity exchanges.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Forex Trader",
        description: "Forex Traders buy and sell national currencies on the foreign exchange market—the largest, most liquid market in the world. They profit from microscopic changes in global exchange rates driven by interest rates and inflation data.",
        skills: ["Technical Analysis", "Macro-Economics", "Leverage Management", "Currency Futures"],
        salaryRange: "India: ₹5 LPA - ₹30+ LPA | Global: $80,000 - $200,000+ per year",
        educationPath: "B.Com / BA Economics -> NISM Currency Derivatives",
        futureScope: "The forex market operates 24/5 globally. Institutions require expert currency dealers to hedge their massive overseas corporate exposures, providing unending career opportunities.",
        roadmap: [
            "Entry: FX Trainee",
            "Manager: Forex Dealer",
            "Senior Manager: FX Desk Head",
            "Director: Chief Currency Strategist"
        ],
        certifications: ["NISM Series I (Currency Derivatives)"],
        summary: "A 24-hour global trading role navigating the massive trillion-dollar daily volume of world currencies. Technical Skill Requirement: High. Income Potential: Unlimited. Work Nature: High Pressure / Analytical.",
        yearsOfStudy: "3 Years",
        industriesHiring: ["Commercial Banks", "Forex Brokers", "MNC Corporate Treasuries"],
        jobDemandTrend: "Very High Demand (Global)",
        governmentJobs: "Role in RBI Forex Reserve Management.",
        privateSectorOpportunities: "Every large bank operates a massive corporate and interbank FX desk.",
        licenseRequired: "Optional (NISM required for institutional roles)",
        freelanceOpportunities: "Very High; the retail spot forex market is massive globally.",
        riskLevel: "High"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Investment Advisor",
        description: "Investment Advisors assess a client's financial situation, risk appetite, and life goals to recommend a personalized blueprint of stocks, mutual funds, and insurance. They legally guide retail clients toward long-term financial independence.",
        skills: ["Financial Planning", "Client Relationship Management", "Tax Planning", "Asset Allocation"],
        salaryRange: "India: ₹4 LPA - ₹15 LPA | Global: $60,000 - $120,000 per year",
        educationPath: "B.Com / BBA -> CFP / NISM Investment Adviser",
        futureScope: "As the massive global middle class acquires more wealth, the necessity for ethical, SEBI-registered, transparent financial guidance is skyrocketing.",
        roadmap: [
            "Entry: Associate Financial Planner",
            "Manager: Investment Advisor",
            "Senior Manager: Lead Advisor",
            "Director: Founder - Advisory Firm"
        ],
        certifications: ["CFP (Certified Financial Planner)", "NISM Series X-A & X-B"],
        summary: "A deeply satisfying consultative role steering families towards financial freedom. Technical Skill Requirement: Moderate. Income Potential: Moderate. Work Nature: Analytical / Relationship-Oriented.",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Wealth Management Firms", "Banks", "Independent Practice"],
        jobDemandTrend: "Rapidly Growing (India & Global)",
        governmentJobs: "N/A",
        privateSectorOpportunities: "Employment available at every major retail bank and financial distributor.",
        licenseRequired: "Yes (SEBI Registered Investment Advisor - RIA)",
        freelanceOpportunities: "Exceptional; opening an independent SEBI RIA firm.",
        riskLevel: "Low"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Wealth Manager",
        description: "Wealth Managers provide an elite, VIP-level financial service tailored exclusively for Ultra-High-Net-Worth Individuals (UHNWIs) and large family offices. They integrate estate planning, elite tax mitigation, philanthropy, and aggressive global stock portfolios.",
        skills: ["Private Banking", "VIP Client Relationship", "Estate Planning", "Global Investing"],
        salaryRange: "India: ₹10 LPA - ₹40+ LPA | Global: $100,000 - $250,000+ per year",
        educationPath: "MBA Finance (Top Tier) / CA / CFP",
        futureScope: "The concentration of wealth at the top has created a massive boom in exclusive 'Family Offices'. Wealth Managers are essentially the financial concierges for billionaires.",
        roadmap: [
            "Entry: Junior Relationship Manager",
            "Manager: Wealth Manager",
            "Senior Manager: VP Private Banking",
            "Director: Head of Wealth Management"
        ],
        certifications: ["CWM (Chartered Wealth Manager)", "CFP"],
        summary: "The white-glove tier of financial advisory, guarding and compounding the wealth of the elite 1%. Technical Skill Requirement: High. Income Potential: High. Work Nature: Strategic / Relationship-Oriented.",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Private Banks", "Family Offices", "Boutique Wealth Firms"],
        jobDemandTrend: "High Demand (Global)",
        governmentJobs: "N/A",
        privateSectorOpportunities: "Extremely lucrative roles in the Private Banking divisions of foreign banks.",
        licenseRequired: "Yes (Relevant NISM/Regulatory licenses)",
        freelanceOpportunities: "Operating a boutique independent wealth firm for multi-millionaire families.",
        riskLevel: "Low"
    },
    {
        domain: "Commerce",
        branch: "Investment & Stock Market",
        title: "Technical Analyst",
        description: "Technical Analysts completely ignore a company's financial balance sheet. Instead, they study price charts, utilizing mathematical indicators to predict the exact short-term direction of a stock's price action.",
        skills: ["Charting software", "Trend Analysis", "Candlestick Patterns", "Momentum Indicators"],
        salaryRange: "India: ₹4 LPA - ₹18 LPA | Global: $60,000 - $120,000 per year",
        educationPath: "Any Degree -> CMT (Chartered Market Technician)",
        futureScope: "Technical analysis forms the absolute basis of almost all institutional day trading. Skilled chart readers will always find employment forecasting momentum for prop desks and media channels.",
        roadmap: [
            "Entry: Junior Chart Analyst",
            "Manager: Technical Analyst",
            "Senior Manager: Head of Technical Research",
            "Director: Chief Market Strategist"
        ],
        certifications: ["CMT", "NISM Series VIII"],
        summary: "A visually and mathematically focused career predicting the heartbeat of the stock market solely through graphical charts. Technical Skill Requirement: Moderate to High. Income Potential: Moderate. Work Nature: Analytical.",
        yearsOfStudy: "2 to 3 Years",
        industriesHiring: ["Brokerages", "Financial Media", "Prop Desks"],
        jobDemandTrend: "Stable Demand (Global)",
        governmentJobs: "N/A",
        privateSectorOpportunities: "Crucial roles internally at brokerage houses advising clients when to enter/exit.",
        licenseRequired: "Optional (NISM required for public broadcast)",
        freelanceOpportunities: "Massive online presence; operating subscription-based advisory newsletters.",
        riskLevel: "Moderate"
    }
];

const seedData = async () => {
    try {
        await Career.deleteMany({ branch: "Investment & Stock Market" });
        await Career.insertMany(investmentProfessions);
        console.log('Investment & Stock Market Professions Appended Successfully!'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
