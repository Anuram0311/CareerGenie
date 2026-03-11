const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const dataProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Data Scientist",
        description: "Extract actionable insights from massive datasets using advanced statistics, machine learning, and programming.",
        summary: "The analytical minds turning complex raw data into predictive business decisions.",
        skills: ["Python/R", "Machine Learning (Scikit-Learn)", "Statistics", "Data Storytelling", "SQL"],
        salaryRange: "India: ₹8L - ₹25L | Global: $95K - $160K",
        educationPath: "B.Tech/M.Tech in CS, Stats, or Data Science",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Tech Giants", "Finance/Banking", "E-commerce", "Healthcare"],
        futureScope: "Consistently ranked among the most promising careers globally as data generation explodes.",
        jobDemandTrend: "Consistently High",
        certifications: ["IBM Data Science Professional Certificate", "Google Data Analytics"],
        roadmap: ["Master Python and Stats", "Build predictive models", "Analyze business problems", "Lead Data Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Data Analyst",
        description: "Collect, clean, and interpret data sets to answer specific business questions and create dashboards for stakeholders.",
        summary: "Interpreters translating past and present data into clear, understandable business reports.",
        skills: ["SQL", "Excel/Spreadsheets", "Tableau/PowerBI", "Basic Python/R", "Data Cleaning"],
        salaryRange: "India: ₹4L - ₹12L | Global: $65K - $100K",
        educationPath: "Bachelors in Math, CS, Economics, or Business",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Retail", "Marketing Agencies", "Logistics", "All Corporate Sectors"],
        futureScope: "Extremely stable entry-point into the world of Data Science and Business Intelligence.",
        jobDemandTrend: "High Demand",
        certifications: ["Google Data Analytics Professional", "Microsoft Certified: Data Analyst Associate"],
        roadmap: ["Learn Excel & SQL", "Master Tableau/PowerBI", "Present insights to teams", "Senior Data Analyst"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Business Intelligence (BI) Analyst",
        description: "Focus on creating data visualizations, reports, and dashboards to help executives make strategic business decisions.",
        summary: "Visual storytellers building the dashboards that CEOs and executives stare at every day.",
        skills: ["PowerBI / Tableau / Looker", "Data Modeling", "SQL", "Business Strategy", "ETL Basics"],
        salaryRange: "India: ₹5L - ₹15L | Global: $75K - $115K",
        educationPath: "Bachelors in Business, Finance, or IT",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Consulting Firms (Big 4)", "Banking", "SaaS Enterprises"],
        futureScope: "Crucial for enterprise strategy. Moving deeply into 'Self-Service BI' tools powered by AI.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Tableau Desktop Specialist", "Microsoft Power BI Data Analyst"],
        roadmap: ["Understand business KPIs", "Build complex BI dashboards", "Automate reporting", "BI Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Data Engineer",
        description: "Build, test, and maintain the massive architectures (databases and large-scale processing systems) that allow data scientists to work.",
        summary: "The essential data plumbers ensuring data flows smoothly, cleanly, and securely from source to analysis.",
        skills: ["Python/Scala", "SQL/NoSQL", "Apache Spark", "Airflow", "Cloud Data Warehouses (Snowflake/Redshift)"],
        salaryRange: "India: ₹8L - ₹24L | Global: $95K - $155K",
        educationPath: "B.Tech in Computer Science or Software Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Tech Startups", "Streaming Services", "Healthcare", "Fintech"],
        futureScope: "Currently seeing massive demand scaling faster than Data Scientists, as clean infrastructure is required first.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["Google Cloud Professional Data Engineer", "AWS Certified Data Analytics"],
        roadmap: ["Master SQL and Python", "Build ETL pipelines", "Manage Cloud Data Lakes", "Lead Data Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Big Data Engineer",
        description: "Specialize entirely in processing, storing, and analyzing 'Big Data'—datasets so massive and fast-moving that traditional databases fail.",
        summary: "Specialists handling petabytes of streaming data that would break normal computers.",
        skills: ["Hadoop Ecosystem", "Apache Kafka", "Apache Flink", "NoSQL (Cassandra, HBase)", "Distributed Computing"],
        salaryRange: "India: ₹10L - ₹30L | Global: $110K - $170K",
        educationPath: "B.Tech/M.Tech CS focused on Distributed Systems",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Social Media Giants", "AdTech", "High-Frequency Trading", "IoT Systems"],
        futureScope: "Highly lucrative. Required wherever unstructured, real-time data needs to be processed simultaneously.",
        jobDemandTrend: "Specialized, Highly Paid",
        certifications: ["Databricks Certified Data Engineer Professional"],
        roadmap: ["CS Degree", "Master distributed computing", "Build real-time streaming engines", "Principal Big Data Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Data Architect",
        description: "Design the overarching blueprint for an organization's data management framework, ensuring data security, accessibility, and scale.",
        summary: "The grand designers plotting out exactly where and how a corporation stores its millions of gigabytes of data.",
        skills: ["Data Modeling", "Enterprise Architecture", "Cloud Storage Design", "Data Governance", "Master Data Management (MDM)"],
        salaryRange: "India: ₹15L - ₹40L+ | Global: $130K - $200K+",
        educationPath: "B.Tech/M.Tech + 8+ years of data engineering experience",
        yearsOfStudy: "4 Years + 8+ Years Experience",
        industriesHiring: ["Multinational Corporations", "Banks", "Healthcare Networks"],
        futureScope: "Extremely secure, high-level position. Required to prevent companies from drowning in unorganized 'data swamps'.",
        jobDemandTrend: "Elite Role, High Demand",
        certifications: ["TOGAF", "AWS Certified Solutions Architect (focusing on Data)"],
        roadmap: ["Work as Data Engineer", "Understand enterprise compliance", "Design massive cloud data lakes", "Chief Data Officer (CDO)"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Statistical Analyst",
        description: "Apply rigorous mathematical and statistical theories to solve complex problems in finance, insurance, and medical research.",
        summary: "Pure mathematicians using probability to predict risks and discover buried patterns.",
        skills: ["Advanced Statistics (ANOVA, Regression)", "R / SAS / SPSS", "Probability Theory", "Experimental Design", "A/B Testing"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $130K",
        educationPath: "M.Sc or Ph.D in Statistics or Applied Mathematics",
        yearsOfStudy: "5 to 8 Years",
        industriesHiring: ["Insurance (Actuarial)", "Pharmaceuticals (Clinical Trials)", "Government", "Academia"],
        futureScope: "Extremely stable. The foundational math behind modern Machine Learning relies entirely on these principles.",
        jobDemandTrend: "Steady",
        certifications: ["SAS Certified Advanced Programmer"],
        roadmap: ["Degree in pure Mathematics/Statistics", "Master R or SAS", "Design clinical/business trials", "Chief Statistician"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Machine Learning Data Specialist",
        description: "Focus entirely on annotating, cleaning, and preparing training datasets specifically tailored for feeding Machine Learning models.",
        summary: "The curators of the raw data teaching AI what to look for.",
        skills: ["Data Annotation", "Data Augmentation", "Regex", "Basic Scripting (Python)", "Quality Assurance"],
        salaryRange: "India: ₹3L - ₹10L | Global: $50K - $90K",
        educationPath: "Bachelors in any technical field",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["AI Training Startups (Scale AI)", "Autonomous Driving", "Tech Research Labs"],
        futureScope: "Large demand currently for human-in-the-loop AI training (RLHF), acting as a stepping stone into Data Science.",
        jobDemandTrend: "Growing",
        certifications: ["Entry-level AI/Data courses"],
        roadmap: ["Understand basics of ML", "Master dataset cleaning/labeling", "Learn Python scripting", "Data Engineer / ML Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Quantitative Analyst",
        description: "Design extremely complex mathematical models to price financial derivatives, manage risk, or predict stock market movements.",
        summary: "The 'Quants'—elite math wizards writing the algorithms that trade millions on Wall Street in milliseconds.",
        skills: ["Stochastic Calculus", "C++ / Python", "Time-Series Analysis", "Financial Modeling", "Algorithmic Trading"],
        salaryRange: "India: ₹12L - ₹45L+ | Global: $150K - $300K+",
        educationPath: "Ph.D in Physics, Math, or Quantitative Finance",
        yearsOfStudy: "6 to 8+ Years",
        industriesHiring: ["Hedge Funds", "Investment Banks (Goldman Sachs)", "High-Frequency Trading Firms"],
        futureScope: "One of the most intensely competitive and highly compensated roles on the planet.",
        jobDemandTrend: "Highly Competitive, Elite Paid",
        certifications: ["CQF (Certificate in Quantitative Finance)"],
        roadmap: ["Ph.D in heavy Math/Physics", "Master C++ for speed", "Design trading algorithms", "Portfolio Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Data Visualization Specialist",
        description: "Combine data analysis with graphic design to create striking, interactive visual representations of complex datasets.",
        summary: "Artists of the data world, turning billions of rows of data into beautiful, interactive charts.",
        skills: ["D3.js", "Tableau", "UI/UX Design principles", "Data Journalism", "JavaScript"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $125K",
        educationPath: "Bachelors in CS, Design, or Data Science",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Media Organizations (NYT, Bloomberg)", "Marketing Agencies", "Data Consultancies"],
        futureScope: "Unique niche combining programming with art. High demand in media and public-facing corporate reports.",
        jobDemandTrend: "Niche, Steady",
        certifications: ["Information Design Certifications"],
        roadmap: ["Learn JS and Graphic Design", "Master D3.js", "Build interactive web dashboards", "Lead Visualization Designer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Analytics Consultant",
        description: "Work with external clients to assess their data needs, build analytics infrastructures, and provide strategic business advice based on data.",
        summary: "The traveling data experts hired by companies to fix their data problems and improve profits.",
        skills: ["Client Communication", "Business Strategy", "Multi-platform BI tools", "Project Management", "SQL"],
        salaryRange: "India: ₹8L - ₹22L | Global: $90K - $145K",
        educationPath: "MBA + B.Tech in IT/CS",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Consulting Firms (McKinsey, BCG, Accenture)", "B2B SaaS"],
        futureScope: "Highly lucrative route combining heavy technical skill with high-level executive business strategy.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Analytics Professional (CAP)"],
        roadmap: ["Data/Business Degree", "Work in BI/Analytics", "Consult multiple clients on data strategy", "Partner at Consulting Firm"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Data Science",
        title: "Research Data Analyst",
        description: "Analyze massive datasets in scientific, academic, or medical contexts to uncover disease patterns, environmental shifts, or social trends.",
        summary: "The data scientists pushing the boundaries of human knowledge in academia and medicine.",
        skills: ["R / Python", "Bioinformatics (Optional)", "Survey Data Analysis", "SPSS", "Academic Writing"],
        salaryRange: "India: ₹5L - ₹15L | Global: $70K - $115K",
        educationPath: "M.Sc or Ph.D in specific scientific fields (Biology, Sociology, etc.)",
        yearsOfStudy: "5 to 8 Years",
        industriesHiring: ["Universities", "Pharmaceutical Research", "NGOs / Government (WHO)"],
        futureScope: "Critically important for public health, genomics, and climate change tracking.",
        jobDemandTrend: "Specialized, Stable",
        certifications: ["Publications in Scientific Journals"],
        roadmap: ["Advanced science degree", "Learn R and data modeling", "Analyze clinical/survey data", "Lead Primary Researcher"]
    }
];

const seedDataScience = async () => {
    try {
        await Career.deleteMany({ branch: "Data Science" });
        await Career.insertMany(dataProfessions);
        console.log('Data Science Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDataScience();
