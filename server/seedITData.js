const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const itProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "IT Support Specialist",
        description: "Diagnose computer hardware, software, and network connectivity issues to assist end-users and ensure organizational IT flows smoothly.",
        summary: "The vital first line of defense for troubleshooting all tech problems within an organization.",
        skills: ["Troubleshooting", "Windows/macOS Admin", "Active Directory", "Ticketing Systems (ServiceNow/Jira)", "Customer Service"],
        salaryRange: "India: ₹3L - ₹8L | Global: $45K - $75K",
        educationPath: "B.Tech in IT / Diploma in Computer Applications / CompTIA A+",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["All Corporate Sectors", "Tech Consultancies", "Education", "Healthcare"],
        futureScope: "Extremely stable. Required everywhere, serving as the perfect entry point into advanced IT and Cyber roles.",
        jobDemandTrend: "Consistently High",
        certifications: ["CompTIA A+", "Google IT Support Professional"],
        roadmap: ["Get IT Diploma/Degree", "Pass CompTIA A+", "Work at Helpdesk", "Promote to Tier 2/3 Support"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "Systems Administrator",
        description: "Configure, manage, and maintain the servers, workstations, and computer systems that power daily business operations.",
        summary: "The backbone operators keeping internal servers and employee systems running securely 24/7.",
        skills: ["Linux/Windows Server Admin", "PowerShell/Bash Scripting", "Virtualization (VMware/Hyper-V)", "Backup & Disaster Recovery"],
        salaryRange: "India: ₹4L - ₹12L | Global: $65K - $100K",
        educationPath: "B.Tech in IT/CS or specialized server administration training",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Data Centers", "Mid-to-Large Enterprises", "Government", "Tech Companies"],
        futureScope: "Evolving into Cloud roles. Strong fundamentals in Systems Admin are still highly valued.",
        jobDemandTrend: "Stable but evolving to Cloud",
        certifications: ["Red Hat Certified System Administrator (RHCSA)", "Microsoft Certified: Windows Server"],
        roadmap: ["Work in IT Support", "Master Linux/Windows OS", "Manage server clusters", "Transition to Cloud/Platform Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "Network Administrator",
        description: "Manage and oversee the day-to-day operations of an organization's computer networks, ensuring high availability and security.",
        summary: "Managing routers, switches, and firewalls to keep data flowing seamlessly across local and wide areas.",
        skills: ["Cisco Routers/Switches", "LAN/WAN/WLAN", "Firewall Rules", "Network Monitoring (Wireshark/SolarWinds)", "IP Subnetting"],
        salaryRange: "India: ₹4L - ₹14L | Global: $65K - $105K",
        educationPath: "B.Tech in IT/Network Engineering + CCNA",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Telecommunications", "ISPs", "Corporate IT Departments", "Universities"],
        futureScope: "Solid demand, with a shift moving rapidly towards software-defined networking (SDN).",
        jobDemandTrend: "Steady",
        certifications: ["CCNA (Cisco Certified Network Associate)", "CompTIA Network+"],
        roadmap: ["IT Degree", "Acquire CCNA", "Manage corporate LANs", "Senior Network Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "Cloud Support Engineer",
        description: "Help customers and internal teams troubleshoot and deploy applications using mega cloud platforms like AWS, Azure, or GCP.",
        summary: "Specialists troubleshooting massive cloud infrastructure deployments for modern businesses.",
        skills: ["AWS / Azure / GCP Basics", "Linux administration", "Networking Basics", "Identity Access Management (IAM)", "Docker Basics"],
        salaryRange: "India: ₹5L - ₹16L | Global: $75K - $125K",
        educationPath: "B.Tech Current IT + Cloud Certifications",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Cloud Providers (Amazon, Google, Microsoft)", "Managed Service Providers (MSPs)", "SaaS Companies"],
        futureScope: "Explosive demand as small, medium, and large businesses all migrate legacy servers to the cloud.",
        jobDemandTrend: "Very High Growth",
        certifications: ["AWS Certified Cloud Practitioner", "Microsoft Certified: Azure Fundamentals"],
        roadmap: ["Learn basic networking/Linux", "Achieve Cloud Certs", "Join MSP or Cloud Provider", "Senior Cloud Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "IT Project Manager",
        description: "Plan, schedule, and execute large-scale IT projects, such as software rollouts, infrastructure upgrades, or cloud migrations, managing budgets and dev teams.",
        summary: "The decisive leaders bridging the gap between business objectives and technical IT execution.",
        skills: ["Agile/Scrum", "Budget Management", "Jira/Asana", "Risk Management", "Stakeholder Communication"],
        salaryRange: "India: ₹8L - ₹25L | Global: $90K - $150K",
        educationPath: "B.Tech IT/CS + MBA or PMP Certification",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["IT Consultancies (TCS, Infosys)", "Banks", "Healthcare", "Government"],
        futureScope: "Highly secure and lucrative as digital transformations require extreme coordination.",
        jobDemandTrend: "Consistently High",
        certifications: ["PMP", "Certified ScrumMaster (CSM)"],
        roadmap: ["Tech background", "Gain project leadership experience", "Get PMP certified", "IT Program Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "Infrastructure Engineer",
        description: "Design and maintain the foundational tech infrastructure (physical servers, cloud environments, and broad networks) required to run an enterprise.",
        summary: "The grand architects configuring the massive server and cloud environments that run enterprise software.",
        skills: ["Infrastructure as Code (Terraform/Ansible)", "Hybrid Cloud", "VMware/Nutanix", "Network Architecture", "Disaster Recovery Planning"],
        salaryRange: "India: ₹7L - ₹22L | Global: $85K - $140K",
        educationPath: "B.Tech IT/CS + Extensive Admin Experience",
        yearsOfStudy: "4 Years + 5+ Years Experience",
        industriesHiring: ["Data Centers", "Large Enterprises", "Cloud Hosting Companies"],
        futureScope: "Crucial for scaling startups into massive tech giants by utilizing modern IaC practices.",
        jobDemandTrend: "High Demand",
        certifications: ["ITIL Foundations", "AWS Certified SysOps Administrator"],
        roadmap: ["Start as SysAdmin", "Learn automation and Terraform", "Design hybrid systems", "Head of IT Infrastructure"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "Technical Support Engineer",
        description: "Provide deep, specialized technical support for complex B2B software products, resolving high-level code or infrastructure bugs for clients.",
        summary: "Elite problem solvers answering escalated, complex technical queries for specialized software users.",
        skills: ["Log Analysis", "Advanced Troubleshooting", "API Debugging", "SQL Queries", "Clear Communication"],
        salaryRange: "India: ₹4.5L - ₹14L | Global: $65K - $110K",
        educationPath: "B.Tech IT/CS or specialized product knowledge",
        yearsOfStudy: "4 Years",
        industriesHiring: ["B2B SaaS Companies (Salesforce, Oracle)", "Cybersecurity firms", "Enterprise Software providers"],
        futureScope: "Remains highly demanded as B2B software usage expands globally requiring 'Tier 3' expert support.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Product-specific certifications (e.g. Salesforce Administrator)"],
        roadmap: ["Join as Tier 1 Support", "Master the software product completely", "Handle high-priority bug escalations", "Customer Success / TAM Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "IT Security Analyst",
        description: "Monitor computer networks for security breaches, investigate violations, and install firewalls / data encryption programs to protect sensitive info.",
        summary: "The frontline digital guards protecting an organization's network and data from cyber threats.",
        skills: ["SIEM Tools (Splunk/LogRhythm)", "Vulnerability Scanning", "Network Protocols", "Incident Response", "Encryption Methods"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $125K",
        educationPath: "B.Tech IT/CS + Cybersecurity certifications",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Banking/Finance", "Healthcare", "Government", "IT Consultancies"],
        futureScope: "Massive, unstoppable growth as global ransomware attacks and data regulations multiply.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["CompTIA Security+", "CISSP (Eventually)", "CEH (Certified Ethical Hacker)"],
        roadmap: ["IT Degree", "Get Security+", "Work in a SOC (Security Operations Center)", "Senior Security Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "ERP Consultant",
        description: "Specialize in installing, customizing, and training staff on Enterprise Resource Planning software (like SAP or Oracle) to manage all company operations.",
        summary: "Specialists modifying massive ERP software platforms to perfectly fit a corporation's unique workflow.",
        skills: ["SAP / Oracle NetSuite", "Business Process Mapping", "Data Migration", "Stakeholder Training", "System Configuration"],
        salaryRange: "India: ₹6L - ₹25L | Global: $85K - $140K",
        educationPath: "B.Tech IT + MBA or specific ERP module certification",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Global IT Consultancies", "Manufacturing", "Supply Chain Firms", "Retail Corporations"],
        futureScope: "Highly lucrative and secure; large corporations absolutely depend on these monolithic systems.",
        jobDemandTrend: "High Demand",
        certifications: ["SAP Certified Application Associate", "Oracle ERP Cloud Certification"],
        roadmap: ["Tech/Business degree", "Learn a specific ERP module (e.g. SAP FICO)", "Implement projects for clients", "Lead ERP Solution Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "IT Operations Manager",
        description: "Oversee the entire IT department's daily functioning, ensuring all hardware, software, and personnel operate efficiently and within budget.",
        summary: "The ultimate directors keeping the entire IT department running smoothly, securely, and cost-effectively.",
        skills: ["ITIL/ITSM Frameworks", "Vendor Management", "Budgeting", "Team Leadership", "Disaster Recovery Planning"],
        salaryRange: "India: ₹10L - ₹35L+ | Global: $110K - $180K+",
        educationPath: "B.Tech IT/CS + MBA + Deep Industry Experience",
        yearsOfStudy: "6 Years + 8+ Years Experience",
        industriesHiring: ["All Large Enterprises", "Universities", "Healthcare Systems"],
        futureScope: "Essential executive role. Requires adopting AI and deep automation to continually reduce operational costs.",
        jobDemandTrend: "Stable, Highly Paid",
        certifications: ["ITIL Expert / Master", "CISM (Certified Information Security Manager)"],
        roadmap: ["Gain 8+ years across SysAdmin/Support", "Develop leadership/budgeting skills", "Manage IT divisions", "Chief Information Officer (CIO)"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "Solutions Architect",
        description: "Analyze a business problem and design a complete, multi-layered IT solution (hardware + software + cloud) tailored perfectly to fix it.",
        summary: "The grand viziers of IT, designing massive end-to-end technology solutions to solve complex business pain points.",
        skills: ["Cloud Architecture", "System Design", "Enterprise Integration", "Pre-Sales Technical Understanding", "Microservices"],
        salaryRange: "India: ₹15L - ₹45L+ | Global: $130K - $220K+",
        educationPath: "B.Tech IT/CS + 10+ years engineering experience",
        yearsOfStudy: "4 Years + Extensive Experience",
        industriesHiring: ["Cloud Providers", "Tier-1 Consultancies", "Enterprise Software Vendors"],
        futureScope: "Extremely high value. The pinnacle IT role linking pure business strategy with complex code architecture.",
        jobDemandTrend: "Elite Role, High Demand",
        certifications: ["AWS Certified Solutions Architect – Professional", "TOGAF"],
        roadmap: ["Extensive software/cloud experience", "Understand enterprise tech limits", "Design multi-million dollar IT systems", "Chief Technology Officer (CTO)"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Information Technology",
        title: "IT Auditor",
        description: "Review organizations' IT systems, infrastructure, and security policies to ensure they comply with internal policies and external federal regulations.",
        summary: "The rigid compliance officers ensuring IT systems are legally secure, compliant, and free from financial loopholes.",
        skills: ["CISA Standards", "Risk Management", "Compliance (GDPR/HIPAA/SOX)", "Control Testing", "IT Governance"],
        salaryRange: "India: ₹6L - ₹20L | Global: $80K - $130K",
        educationPath: "B.Tech IT/CS or Finance/Accounting with IT Certs",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Big 4 Accounting Firms (PwC, EY)", "Banks", "Government", "Publicly Traded Companies"],
        futureScope: "Recession-proof position. Tighter data privacy laws (like GDPR) ensure continuous high demand.",
        jobDemandTrend: "Consistently High",
        certifications: ["CISA (Certified Information Systems Auditor)"],
        roadmap: ["IT/Auditing background", "Pass CISA exam", "Audit large corporate systems", "IT Compliance Director"]
    }
];

const seedIT = async () => {
    try {
        await Career.deleteMany({ branch: "Information Technology" });
        await Career.insertMany(itProfessions);
        console.log('Information Technology Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedIT();
