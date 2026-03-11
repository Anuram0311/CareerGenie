const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const csProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Software Developer",
        description: "Design, develop, test, and maintain software applications and systems to meet user needs and organizational goals.",
        summary: "The foundational builders of desktop, mobile, and web applications that power modern life.",
        skills: ["Java/C++/Python", "Data Structures", "Algorithms", "Version Control (Git)", "Agile Methodologies"],
        salaryRange: "India: ₹4L - ₹20L | Global: $70K - $130K",
        educationPath: "B.Tech/B.E. in Computer Science or related degree",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Tech Companies", "Finance", "Healthcare", "E-commerce"],
        futureScope: "Continuous and robust demand, adapting to AI tools and cloud-native development.",
        jobDemandTrend: "Consistently High",
        certifications: ["AWS Certified Developer", "Oracle Certified Professional"],
        roadmap: ["Computer Science degree", "Master 2+ programming languages", "Work as Junior Developer", "Become Senior Software Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Full Stack Developer",
        description: "Develop both client-side and server-side software, ensuring seamless integration between the frontend user interface and backend databases.",
        summary: "Versatile developers who can build an entire web application from the database to the browser.",
        skills: ["HTML/CSS/JS", "React/Angular", "Node.js/Django", "SQL/NoSQL", "RESTful APIs"],
        salaryRange: "India: ₹6L - ₹25L | Global: $85K - $150K",
        educationPath: "B.Tech in Computer Science or Software Engineering Bootcamps",
        yearsOfStudy: "4 Years (or 6-12 month Bootcamp)",
        industriesHiring: ["Startups", "SaaS Companies", "E-commerce", "Digital Agencies"],
        futureScope: "Extremely high demand as companies look for versatile developers who can handle end-to-end features.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["Meta Front-End Developer", "IBM Full-Stack Software Developer"],
        roadmap: ["Learn HTML/CSS/JS", "Master a frontend framework", "Learn backend routing and DBs", "Lead Full Stack Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Backend Developer",
        description: "Build and maintain the server-side logic, databases, and APIs that power the hidden functionality of web applications.",
        summary: "The architects of data flow and business logic hidden behind the user interface.",
        skills: ["Node.js/Python/Go", "Database Design", "API Development", "Microservices", "Caching (Redis)"],
        salaryRange: "India: ₹5L - ₹22L | Global: $80K - $145K",
        educationPath: "B.Tech in Computer Science or IT",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Cloud Providers", "Fintech", "Large Scale Web Enterprises"],
        futureScope: "Vital for scaling applications to handle millions of users securely and efficiently.",
        jobDemandTrend: "High Demand",
        certifications: ["AWS Certified Solutions Architect", "MongoDB Node.js Developer"],
        roadmap: ["CS degree", "Focus on advanced data structures", "Master scalable database design", "Senior Backend Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Frontend Developer",
        description: "Implement visual elements that users see and interact with in a web application using modern JavaScript frameworks.",
        summary: "Translators of UI/UX designs into fast, interactive, and responsive web pages.",
        skills: ["JavaScript (ES6+)", "React/Vue/Svelte", "CSS/Tailwind", "Web Performance", "Responsive Design"],
        salaryRange: "India: ₹4L - ₹18L | Global: $75K - $130K",
        educationPath: "B.Tech in CS or focused Self-Taught/Bootcamp path",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Tech Startups", "Marketing Agencies", "Product Companies"],
        futureScope: "Steady demand. Evolving heavily with the introduction of WebAssembly and complex browser APIs.",
        jobDemandTrend: "Consistent",
        certifications: ["Google Mobile Web Specialist", "Frontend Masters Certifications"],
        roadmap: ["Master CSS & Vanilla JS", "Learn a modern framework (React)", "Focus on web accessibility/performance", "Senior Frontend Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "System Software Engineer",
        description: "Develop the low-level software that directly operates computer hardware, such as operating systems, compilers, and network drivers.",
        summary: "Engineers writing the crucial low-level code that connects hardware chips to high-level applications.",
        skills: ["C/C++", "Rust", "Operating System Concepts", "Computer Architecture", "Kernel Development"],
        salaryRange: "India: ₹8L - ₹30L+ | Global: $100K - $170K+",
        educationPath: "B.Tech or M.Tech in Computer Science / Electronics",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Hardware Manufacturers (Intel, AMD, Apple)", "OS Vendors (Microsoft, Canonical)", "Game Engine Developers"],
        futureScope: "Highly lucrative and difficult to master. Huge push toward memory-safe languages like Rust.",
        jobDemandTrend: "Specialized, Highly Paid",
        certifications: ["Linux Kernel Developer Training"],
        roadmap: ["Master C/C++", "Study OS design and memory management", "Contribute to open-source kernels", "Principal Systems Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Application Developer",
        description: "Design and code software specifically tailored for mobile platforms (iOS/Android) or specialized desktop environments.",
        summary: "Creators of the mobile apps and specialized desktop software we use daily.",
        skills: ["Swift/Kotlin", "React Native / Flutter", "Mobile UI/UX", "App Store Deployment", "API Integration"],
        salaryRange: "India: ₹4L - ₹20L | Global: $80K - $135K",
        educationPath: "B.Tech in Computer Science or Software Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Mobile App Agencies", "Consumer Tech", "Enterprise Mobility"],
        futureScope: "Strong and consistent. Increasing focus on cross-platform development frameworks.",
        jobDemandTrend: "High Demand",
        certifications: ["Apple Certified iOS Developer", "Associate Android Developer"],
        roadmap: ["Learn mobile specific languages", "Publish apps on App Store/Play Store", "Master state management", "Lead Mobile Developer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Game Developer",
        description: "Program the logic, physics, and gameplay mechanics for video games across consoles, PC, and mobile using game engines.",
        summary: "The code magicians bringing interactive digital worlds and characters to life.",
        skills: ["C# / C++", "Unity / Unreal Engine", "3D Math & Physics", "Game Optimization", "AI Behaviors"],
        salaryRange: "India: ₹4L - ₹18L | Global: $70K - $120K",
        educationPath: "B.Tech in CS or specific B.Sc in Game Design/Development",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["AAA Game Studios", "Indie Game Companies", "VR/AR Startups", "EdTech"],
        futureScope: "Rapid evolution with the rise of AR/VR, Metaverse concepts, and AI-driven NPC behaviors.",
        jobDemandTrend: "Growing but Competitive",
        certifications: ["Unity Certified Programmer", "Unreal Engine Developer"],
        roadmap: ["Learn 3D math and C#", "Build indie game portfolio", "Join a game studio", "Lead Gameplay Programmer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "DevOps Engineer",
        description: "Bridge the gap between development and operations by automating software deployment, testing, and server infrastructure.",
        summary: "The automation experts ensuring code travels safely and instantly from developer laptops to live servers.",
        skills: ["CI/CD pipelines", "Docker / Kubernetes", "AWS / Azure", "Infrastructure as Code (Terraform)", "Linux/Bash Scripting"],
        salaryRange: "India: ₹8L - ₹28L | Global: $100K - $160K",
        educationPath: "B.Tech in CS/IT + cloud/automation experience",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Almost all mid-to-large Tech Companies", "SaaS Providers", "Banking"],
        futureScope: "Absolutely critical role. Continually expanding as \"Platform Engineering\" and DevSecOps.",
        jobDemandTrend: "Extremely High",
        certifications: ["Certified Kubernetes Administrator (CKA)", "AWS Certified DevOps Engineer"],
        roadmap: ["Master Linux and scripting", "Learn CI/CD and containers", "Manage cloud infrastructure", "Head of Platform Engineering"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Systems Analyst",
        description: "Analyze how well software, hardware, and the wider IT system fit the business needs and translate them into technical specs for developers.",
        summary: "The vital link translating human business needs into exact technical requirements for developers.",
        skills: ["Requirement Gathering", "UML / Flowcharting", "Business Understanding", "SQL", "Stakeholder Communication"],
        salaryRange: "India: ₹5L - ₹16L | Global: $75K - $120K",
        educationPath: "B.Tech in CS/IT or BCA/MCA",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["IT Consultancies", "Banks", "Government", "Large Enterprises"],
        futureScope: "Steady demand. Shift towards integrating AI tools and large ERP systems efficiently into businesses.",
        jobDemandTrend: "Stable",
        certifications: ["Certified Systems Analyst", "CBAP (Certified Business Analysis Professional)"],
        roadmap: ["Gain tech/coding background", "Develop strong communication skills", "Work as IT consultant", "Senior IT Business Partner"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Database Administrator",
        description: "Ensure that vast databases run efficiently, remain highly secure, and never lose data by managing backups and optimization.",
        summary: "The guardians of corporate data, ensuring high-speed access and infallible security.",
        skills: ["SQL Tuning", "RDBMS (Oracle, PostgreSQL)", "NoSQL (MongoDB, Cassandra)", "Data Backup/Recovery", "Cybersecurity Basics"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Tech in CS/IT or specialized DB administration courses",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Finance/Banking", "Healthcare", "E-commerce", "Government"],
        futureScope: "Evolving heavily into Cloud Database Engineering and Data Engineering roles.",
        jobDemandTrend: "Stable but evolving",
        certifications: ["Oracle Database Certification", "AWS Certified Database"],
        roadmap: ["Learn SQL inside out", "Understand indexing and optimization", "Manage DB clusters", "Data Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Network Engineer",
        description: "Design, implement, maintain, and troubleshoot the computer networks that allow organizations to communicate internally and globally.",
        summary: "The infrastructure builders designing the secure \"highways\" that internet data travels on.",
        skills: ["Routing & Switching", "BGP/OSPF", "Firewall Configuration", "Network Security", "Cloud Networking"],
        salaryRange: "India: ₹4L - ₹15L | Global: $75K - $125K",
        educationPath: "B.Tech in CS/ECE/IT",
        yearsOfStudy: "4 Years",
        industriesHiring: ["ISPs", "Telecom", "Data Centers", "Large Enterprises"],
        futureScope: "Transitioning towards Software-Defined Networking (SDN) and Cloud Network Architecture.",
        jobDemandTrend: "Steady",
        certifications: ["CCNA / CCNP", "CompTIA Network+"],
        roadmap: ["Acquire CCNA", "Configure routers and switches", "Learn cloud network topology", "Chief Network Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Computer Science",
        title: "Technical Architect",
        description: "Make high-level design choices and dictate technical standards, including software coding standards, tools, and platforms.",
        summary: "The master builders who design the overarching structure and technology stack of massive software projects.",
        skills: ["System Design", "Scalability Architecture", "Cloud Native Design", "Tech Stack Selection", "Leadership"],
        salaryRange: "India: ₹15L - ₹50L+ | Global: $150K - $250K+",
        educationPath: "B.Tech in CS/IT + 10+ years of deep engineering experience",
        yearsOfStudy: "4 Years + 10 Years Experience",
        industriesHiring: ["All Major Tech Firms", "SaaS Companies", "E-commerce giants"],
        futureScope: "Extremely high value and secure. Required to make the toughest decisions in modern software scaling.",
        jobDemandTrend: "Highly Paid, Elite Role",
        certifications: ["AWS Certified Solutions Architect – Professional", "TOGAF"],
        roadmap: ["10+ years coding experience", "Design distributed systems", "Mentor engineering teams", "VP of Engineering / CTO"]
    }
];

const seedComputerScience = async () => {
    try {
        await Career.deleteMany({ branch: "Computer Science" });
        await Career.insertMany(csProfessions);
        console.log('Computer Science Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedComputerScience();
