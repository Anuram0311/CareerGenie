const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const mathProfessions = [
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Pure Mathematician",
        description: "Study deeply abstract mathematical concepts such as topology, number theory, and advanced algebra to expand the fundamental boundaries of human logic.",
        summary: "The theoretical masterminds discovering entirely new realms of pure logic and abstract mathematics.",
        skills: ["Abstract Algebra", "Topology", "Number Theory", "Mathematical Proof Construction", "Advanced Logic"],
        salaryRange: "India: ₹8L - ₹20L | Global: $80K - $140K",
        educationPath: "B.Sc Mathematics → M.Sc Mathematics → Ph.D in Pure Math",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Universities", "Advanced Cryptography Organizations", "Defense Labs"],
        futureScope: "Crucial for fundamental human knowledge. Current pure math discoveries eventually map to future quantum computing and astrophysics.",
        jobDemandTrend: "Elite, Academic Focus",
        certifications: ["Fellowship of Mathematical Societies"],
        roadmap: ["Ph.D in abstract math", "Publish high-impact theories", "Solve open mathematical problems", "Tenured Mathematics Professor"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Applied Mathematician",
        description: "Use complex mathematical theories and computational models to solve extreme real-world problems in engineering, finance, and the sciences.",
        summary: "The problem-solvers using heavy mathematics to untangle the real world's most complex industrial issues.",
        skills: ["Differential Equations", "Numerical Analysis", "MATLAB/Python", "Mathematical Modeling", "Optimization"],
        salaryRange: "India: ₹8L - ₹24L | Global: $90K - $150K",
        educationPath: "B.Sc/B.Tech → M.Sc in Applied Mathematics",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Aerospace", "Finance/Wall Street", "Government Labs", "Tech Giants (Google/Amazon)"],
        futureScope: "Incredibly high demand. Tech giants desperately need applied mathematicians to optimize logistics mapping and AI neural networks.",
        jobDemandTrend: "High Growth",
        certifications: ["Expertise in Mathematical Software (MATLAB/Mathematica)"],
        roadmap: ["Degree in Applied Math", "Model fluid dynamics or supply chains", "Lead industrial optimizations", "Chief Mathematical Modeler"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Statistician",
        description: "Apply deep probability theory to design surveys, collect massive amounts of data, and draw airtight conclusions that drive national or corporate policies.",
        summary: "The probability experts turning massive raw data into concrete, provable societal and business facts.",
        skills: ["Statistical Inference", "Probability Theory", "R / SAS / Python", "Experimental Design", "A/B Testing"],
        salaryRange: "India: ₹7L - ₹22L | Global: $85K - $135K",
        educationPath: "B.Sc Statistics/Mathematics → M.Sc Statistics",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Healthcare (Biostatistics)", "Government (Census)", "Market Research", "Pharma"],
        futureScope: "Extremely stable. Every FDA drug trial and every government census relies entirely on certified professional statisticians.",
        jobDemandTrend: "Consistently High",
        certifications: ["Accredited Professional Statistician (PStat)"],
        roadmap: ["Degree in Statistics", "Analyze biological/financial trials", "Design massive national surveys", "Director of Statistical Analysis"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Actuary",
        description: "Use heavy mathematics, statistics, and financial theory to calculate the exact probability of risk and financial loss for massive insurance pools.",
        summary: "The ultra-specialized math professionals who mathematically calculate the financial risk of death, accidents, and disasters.",
        skills: ["Actuarial Mathematics", "Risk Management", "Financial Modeling", "Probability Theory", "Excel/VBA/Python"],
        salaryRange: "India: ₹10L - ₹35L | Global: $110K - $200K",
        educationPath: "B.Sc Mathematics/Actuarial Science + Rigorous Actuarial Exams",
        yearsOfStudy: "3 to 4 Years (+ 5 to 7 years clearing global exams)",
        industriesHiring: ["Insurance Corporations", "Pension Funds", "Risk Consultancies", "Investment Banks"],
        futureScope: "Regarded as one of the best, most stable, and highest-paying math careers globally, protected by incredibly difficult board exams.",
        jobDemandTrend: "Elite, High Demand",
        certifications: ["Fellow of the Institute of Actuaries (FIA / FSA)"],
        roadmap: ["Clear initial Actuary exams", "Work in life/health insurance", "Achieve Fellowship status", "Chief Risk Officer"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Mathematical Data Analyst",
        description: "Leverage a strong mathematical background to parse through messy corporate datasets, finding logical patterns that answer urgent business questions.",
        summary: "The logic-driven analysts using pure math to clean and extract value from corporate data.",
        skills: ["SQL", "Statistical Modeling", "Python (Pandas/NumPy)", "Data Visualization (Tableau)", "Linear Algebra"],
        salaryRange: "India: ₹6L - ₹18L | Global: $75K - $120K",
        educationPath: "B.Sc Mathematics/Statistics",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["E-commerce", "Banking", "Telecommunications", "Logistics"],
        futureScope: "Massive volume of jobs available globally. A mathematics degree provides a massive edge in data analysis over business degrees.",
        jobDemandTrend: "Extremely High Volume",
        certifications: ["Google/IBM Data Analytics Certificates"],
        roadmap: ["Mathematics degree", "Master Python/SQL", "Analyze consumer patterns", "Lead Data Analyst"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Operations Research Analyst",
        description: "Use advanced mathematical and analytical methods to help massive global organizations investigate complex issues, deeply optimizing their supply chains and workflows.",
        summary: "The efficiency masters using math to optimize how global shipping fleets, factories, and military logistics operate.",
        skills: ["Linear Programming", "Optimization Algorithms", "Simulation Software (AnyLogic)", "Supply Chain Math", "Python"],
        salaryRange: "India: ₹7L - ₹22L | Global: $85K - $140K",
        educationPath: "B.Sc Mathematics → M.Sc Operations Research",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Airlines", "Military/Defense Logistics", "Global Shipping (Amazon/FedEx)", "Manufacturing"],
        futureScope: "Crucial for large corporations. Saving 1% efficiency on Amazon's shipping routes via math saves billions of dollars.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["INFORMS Certified Analytics Professional (CAP)"],
        roadmap: ["Operations Research degree", "Model global shipping routes", "Optimize airline scheduling", "Director of Operations Yield"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Mathematical Cryptographer",
        description: "Invent and analyze the deeply complex mathematical algorithms and ciphers required to secure global financial transactions and military communications.",
        summary: "The code-makers using sheer number theory to build unbreakable digital locks for the world's data.",
        skills: ["Number Theory", "Abstract Algebra", "Cryptographic Protocols (RSA/ECC)", "C++ / Rust", "Cybersecurity"],
        salaryRange: "India: ₹12L - ₹35L | Global: $120K - $180K",
        educationPath: "B.Sc Math/CS → M.Sc/Ph.D Cryptography",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Intelligence Agencies (NSA/GCHQ)", "Blockchain Core Teams", "Global Banks", "Tech Giants"],
        futureScope: "Extremely high value. The imminent threat of Quantum Computers breaking modern encryption ensures massive demand for Post-Quantum Cryptographers.",
        jobDemandTrend: "Elite, Critical Demand",
        certifications: ["Specialized Post-Quantum Math Research"],
        roadmap: ["Ph.D in Cryptography", "Invent new encryption algorithms", "Secure global blockchains or state secrets", "Chief Cryptographic Architect"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Mathematical Quant Analyst",
        description: "Apply highly abstract stochastic calculus and differential equations entirely toward algorithmic trading, pricing complex derivatives on Wall Street.",
        summary: "The famous 'Quants' using extreme mathematics to predict the chaotic movements of the global stock market.",
        skills: ["Stochastic Calculus", "C++ Low-Latency Coding", "Financial Derivatives", "Time-Series Analysis", "Machine Learning"],
        salaryRange: "India: ₹15L - ₹50L+ | Global: $150K - $350K+",
        educationPath: "Ph.D in Mathematics, Physics, or Quantitative Finance",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["Hedge Funds (Jane Street, Citadel)", "Investment Banks", "High-Frequency Trading Firms"],
        futureScope: "The absolute highest paying application of math globally. Completely dominated by Ph.D level physicists and mathematicians.",
        jobDemandTrend: "Ultra-Competitive, Elite",
        certifications: ["Certificate in Quantitative Finance (CQF)"],
        roadmap: ["Math Ph.D", "Create low-latency trading algos", "Price exotic derivatives", "Head Quantitative Researcher"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Mathematical Modeler",
        description: "Translate chaotic real-world phenomena (like the spread of a virus, climate change, or traffic jams) into strict mathematical equations that can be simulated via computer.",
        summary: "The simulation experts converting real-world chaos (like pandemics and storms) into predictable mathematical code.",
        skills: ["Differential Equations", "Dynamical Systems", "Python/C++", "Simulation Design", "Domain Knowledge (Bio/Eco/Traffic)"],
        salaryRange: "India: ₹7L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Sc/M.Sc in Applied Mathematics",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Epidemiology Centers (CDC/WHO)", "Climate Change NGOs", "Urban Planning Departments", "Gaming (Physics Engines)"],
        futureScope: "Highly relevant. Their models directly dictated global government policies during the COVID-19 pandemic and guide climate action.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Expertise in supercomputing simulations"],
        roadmap: ["Applied Math Degree", "Model viral spread or urban traffic", "Provide data to policymakers", "Senior Lead Modeler"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Mathematics Professor / Lecturer",
        description: "Educate high-level students in advanced calculus, geometry, and algebra while conducting elite-level mathematical research at a university.",
        summary: "The academic mentors shaping the next generation of engineers, data scientists, and pure mathematicians.",
        skills: ["Pedagogy", "Advanced Higher Math", "Grant Writing", "Academic Publishing", "Curriculum Design"],
        salaryRange: "India: ₹6L - ₹22L | Global: $75K - $140K",
        educationPath: "B.Sc → M.Sc → Ph.D in Mathematics",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Universities", "Elite Preparatory Schools", "Research Institutes"],
        futureScope: "Extremely stable. Every single STEM degree worldwide requires students to pass through university mathematics professors.",
        jobDemandTrend: "Steady, Academic",
        certifications: ["National Eligibility Exams for teaching (e.g., NET)"],
        roadmap: ["Complete Ph.D", "Secure Postdoctoral fellowship", "Publish math theories", "Tenured Mathematics Professor"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Computational Mathematician",
        description: "Operate at the absolute intersection of computer science and math, designing the fundamental algorithms that allow supercomputers to solve massive equations.",
        summary: "The algorithm architects figuring out how to make supercomputers calculate impossible equations efficiently.",
        skills: ["Algorithm Design", "High-Performance Computing (HPC)", "Parallel Processing (CUDA)", "Numerical Linear Algebra", "C / Fortran"],
        salaryRange: "India: ₹10L - ₹30L | Global: $100K - $160K",
        educationPath: "B.Sc Math/CS → M.Sc Computational Mathematics",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Supercomputing Facilities", "AI / Deep Learning companies", "Aerospace Design", "Weather Forecasting"],
        futureScope: "Critical. As AI models scale to trillions of parameters, computational mathematicians are needed to make the matrix multiplication physically possible.",
        jobDemandTrend: "High Demand",
        certifications: ["CUDA/Parallel Computing specialized training"],
        roadmap: ["Intersect Math with advanced CS", "Optimize supercomputer logic", "Design AI/Simulation algorithms", "Principal Computational Scientist"]
    },
    {
        domain: "Science",
        branch: "Mathematics",
        title: "Financial Analyst (Mathematics)",
        description: "Utilize deep calculus and statistical background to model corporate valuations, assess M&A targets, and optimize the overarching financial health of massive companies.",
        summary: "The corporate finance experts using rigorous math to evaluate multi-billion dollar business decisions.",
        skills: ["Financial Modeling (DCF/LBO)", "Corporate Valuations", "Advanced Excel/VBA", "Accounting Principles", "Data Analytics"],
        salaryRange: "India: ₹7L - ₹25L | Global: $80K - $140K",
        educationPath: "B.Sc Mathematics → MBA in Finance",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Investment Banks", "Private Equity Firms", "Corporate Treasury Departments", "Big 4 Consultancies"],
        futureScope: "A math degree combined with an MBA makes for an incredibly elite, highly recruited financial analyst capable of rigorous logistical breakdowns.",
        jobDemandTrend: "High Volume, Lucrative",
        certifications: ["Chartered Financial Analyst (CFA)"],
        roadmap: ["Math degree + Finance certs", "Build corporate valuation models", "Lead M&A analytics", "Chief Financial Officer (CFO)"]
    }
];

const seedMathematics = async () => {
    try {
        await Career.deleteMany({ branch: "Mathematics" });
        await Career.insertMany(mathProfessions);
        console.log('Mathematics Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedMathematics();
