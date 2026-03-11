const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const cloudProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Cloud Engineer",
        description: "Design, deploy, and manage an organization's cloud-based systems and processes, ensuring servers and databases operate efficiently worldwide.",
        summary: "The versatile engineers building and maintaining the massive off-site server networks that run modern businesses.",
        skills: ["AWS/Azure/GCP", "Linux Administration", "Networking (DNS/VPN)", "Docker", "Basic Python/Bash scripting"],
        salaryRange: "India: ₹6L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Tech in CS/IT + Cloud Certifications",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Tech Startups", "SaaS Companies", "Streaming Services", "Enterprise IT"],
        futureScope: "Extremely stable. All traditional on-premise physical servers are continually being migrated to the cloud.",
        jobDemandTrend: "Consistently High",
        certifications: ["AWS Certified Solutions Architect – Associate", "Microsoft Certified: Azure Administrator"],
        roadmap: ["Master Linux and Networking", "Earn Associate Cloud Certs", "Manage basic cloud deployments", "Senior Cloud Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Cloud Architect",
        description: "Design the high-level, overarching strategy for an organization's entire cloud migration and architecture, ensuring perfect scalability and cost-efficiency.",
        summary: "The grand designers plotting out exactly how a corporation will structure its entire digital footprint in the cloud.",
        skills: ["Enterprise Architecture", "Hybrid Cloud Design", "Disaster Recovery Strategy", "Cost Optimization", "Security/Compliance"],
        salaryRange: "India: ₹18L - ₹45L+ | Global: $140K - $220K+",
        educationPath: "B.Tech CS + 8+ years system engineering experience",
        yearsOfStudy: "4 Years + 8+ Years Experience",
        industriesHiring: ["Global Consultancies", "Fortune 500 Enterprises", "Cloud Providers"],
        futureScope: "Extremely secure executive-level engineering role. Bad cloud architecture costs companies millions in server fees.",
        jobDemandTrend: "Elite Role, High Demand",
        certifications: ["AWS Certified Solutions Architect – Professional", "Google Cloud Professional Cloud Architect"],
        roadmap: ["Extensive software/IT experience", "Master multi-cloud strategy", "Design massive corporate migrations", "Chief Cloud Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Cloud Solutions Architect",
        description: "Focus on designing highly specific, tailored cloud-based solutions (like a new scalable app backend) to solve explicit business problems for clients.",
        summary: "Client-facing experts designing customized, scalable cloud software solutions for specific business needs.",
        skills: ["System Design", "Microservices Architecture", "Pre-Sales Technical Understanding", "Serverless Computing", "Client Communication"],
        salaryRange: "India: ₹15L - ₹40L | Global: $130K - $200K",
        educationPath: "B.Tech in CS + 5+ years development/cloud experience",
        yearsOfStudy: "4 Years + 5+ Years Experience",
        industriesHiring: ["B2B SaaS Vendors", "Cloud Consultancies", "Enterprise Tech Sales"],
        futureScope: "Highly lucrative as it bridges the gap between purely technical cloud engineering and high-level business sales.",
        jobDemandTrend: "High Demand",
        certifications: ["AWS/Azure Architect Professional Certs"],
        roadmap: ["Work as senior developer/engineer", "Learn enterprise sales engineering", "Design tailored client systems", "Partner Solutions Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "DevOps Engineer (Cloud)",
        description: "Automate the entire software delivery pipeline directly in the cloud, allowing developers to release new updates to millions of users seamlessly and without crashing.",
        summary: "The automation wizards building the pipelines that reliably push code from a developer's laptop to live cloud servers.",
        skills: ["CI/CD (Jenkins, GitLab CI)", "Infrastructure as Code (Terraform)", "Kubernetes/Docker", "AWS/Azure", "Python/Go"],
        salaryRange: "India: ₹8L - ₹28L | Global: $100K - $160K",
        educationPath: "B.Tech in CS/IT",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Practically all modern software companies", "Fintech", "E-commerce"],
        futureScope: "One of the most demanded roles in tech globally. Modern software requires continuous, automated, safe deployments.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["Certified Kubernetes Administrator (CKA)", "AWS Certified DevOps Engineer"],
        roadmap: ["Master Linux and scripting", "Learn automation and CI/CD", "Deploy code continuously to cloud", "Lead DevOps Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Cloud Infrastructure Security Engineer",
        description: "Design and implement impenetrable security policies, firewalls, and encryption exclusively for massive cloud environments (AWS/Azure) to prevent data breaches.",
        summary: "Specialists ensuring that corporate data hosted entirely on the public cloud remains strictly locked down.",
        skills: ["Cloud Security Posture Management (CSPM)", "IAM Policies", "Docker/Kubernetes Security", "DevSecOps", "Penetration Testing basics"],
        salaryRange: "India: ₹10L - ₹30L | Global: $115K - $170K",
        educationPath: "B.Tech in CS + specialized Cloud Security Certifications",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Fintech/Banking", "Healthcare Data", "Cloud Providers", "Cybersecurity Firms"],
        futureScope: "Extremely critical. As data moves entirely off-premise, securing it in the public cloud is a corporation's highest priority.",
        jobDemandTrend: "Very High Growth",
        certifications: ["CCSP (Certified Cloud Security Professional)", "AWS Certified Security"],
        roadmap: ["Master Cloud Architecture", "Focus entirely on cloud vulnerabilities", "Implement zero-trust clouds", "Principal Cloud Security Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Site Reliability Engineer (SRE)",
        description: "Apply deep software engineering practices directly to IT operations, writing code to automate away manual tasks and ensure massive cloud platforms never go offline.",
        summary: "Elite coders hired specifically to make sure massive websites (like Netflix or Google) never crash.",
        skills: ["Go / Python / Java", "Kubernetes", "Observability (Prometheus/Grafana)", "Incident Response", "Distributed Systems"],
        salaryRange: "India: ₹12L - ₹35L | Global: $120K - $180K+",
        educationPath: "B.Tech in CS (Heavy Software Engineering Focus)",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Tech Giants (Google, Meta)", "Streaming Services", "High-Traffic E-commerce"],
        futureScope: "Originated by Google. Highly elite role that replaces standard 'SysAdmins' with pure software engineers.",
        jobDemandTrend: "Specialized, Highly Paid",
        certifications: ["Focus primarily on open-source contributions and system design skills"],
        roadmap: ["Master a backend language (Go/Python)", "Understand complex distributed systems", "Write automation code for uptime", "Lead SRE"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Cloud Infrastructure Engineer",
        description: "Focus entirely on coding and provisioning the raw foundational computing resources (servers, networking, storage) in the cloud using Infrastructure as Code (IaC).",
        summary: "Engineers writing code that summons and configures thousands of virtual servers instantly.",
        skills: ["Terraform", "Ansible / Chef / Puppet", "Linux Admin", "AWS / GCP", "Networking Foundations"],
        salaryRange: "India: ₹8L - ₹25L | Global: $95K - $155K",
        educationPath: "B.Tech in CS/IT",
        yearsOfStudy: "4 Years",
        industriesHiring: ["SaaS Providers", "Data Centers", "Large Enterprises"],
        futureScope: "Manual server configuration is dead. Writing code to spin up infrastructure is the mandatory standard.",
        jobDemandTrend: "Consistently High",
        certifications: ["HashiCorp Certified: Terraform Associate"],
        roadmap: ["Master Linux and networking", "Learn Terraform thoroughly", "Automate massive server spin-ups", "Senior Infrastructure Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "AWS Cloud Engineer",
        description: "Specialize entirely in the Amazon Web Services ecosystem, utilizing their specific suite of 200+ tools to build highly performant cloud architectures.",
        summary: "Meticulous experts focused entirely on building and optimizing within the Amazon Web Services ecosystem.",
        skills: ["EC2 / S3 / RDS", "AWS Lambda", "CloudFormation", "VPC Networking", "IAM"],
        salaryRange: "India: ₹6L - ₹22L | Global: $90K - $145K",
        educationPath: "B.Tech CS + AWS Certifications",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Majority of modern tech startups and enterprises globally"],
        futureScope: "AWS remains the dominant market leader in public cloud. Deep expertise in their specific tools guarantees employment.",
        jobDemandTrend: "Extremely High",
        certifications: ["AWS Certified Developer", "AWS Certified SysOps Administrator"],
        roadmap: ["Learn basic networking", "Master the core AWS services", "Deploy serverless AWS apps", "AWS Solutions Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Azure Cloud Engineer",
        description: "Specialize entirely in Microsoft Azure, focusing heavily on integrating enterprise Windows/Active Directory environments natively into the cloud.",
        summary: "Experts utilizing the Microsoft Azure cloud, highly demanded by massive corporations transitioning off legacy Windows servers.",
        skills: ["Azure Virtual Machines", "Azure Active Directory", "ARM Templates", "PowerShell", "Office 365 Integration"],
        salaryRange: "India: ₹6L - ₹22L | Global: $90K - $145K",
        educationPath: "B.Tech CS/IT + Azure Certifications",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Fortune 500 Enterprises", "Government Agencies", "Healthcare Systems"],
        futureScope: "Azure is growing incredibly fast by converting old-world corporate on-premise Windows servers directly to their cloud.",
        jobDemandTrend: "High Growth",
        certifications: ["Microsoft Certified: Azure Administrator Associate"],
        roadmap: ["Master Windows Server/PowerShell", "Learn Azure networking", "Migrate enterprise workloads", "Azure Solutions Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Google Cloud Engineer",
        description: "Specialize entirely in Google Cloud Platform (GCP), utilizing it heavily for its industry-leading data analytics, machine learning, and Kubernetes tools.",
        summary: "Specialists using Google's cloud infrastructure, heavily utilized by companies focusing on Big Data and Kubernetes.",
        skills: ["Google Kubernetes Engine (GKE)", "BigQuery", "Compute Engine", "VPC", "GCP IAM"],
        salaryRange: "India: ₹7L - ₹24L | Global: $95K - $150K",
        educationPath: "B.Tech CS + GCP Certifications",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Data-heavy Startups", "AdTech", "Retail/E-commerce"],
        futureScope: "GCP is arguably the leader in pure data processing and open-source integration (Kubernetes), securing strong niche demand.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Associate Cloud Engineer (GCP)", "Professional Cloud Developer (GCP)"],
        roadmap: ["Master Linux and containers", "Deploy GKE clusters", "Build BigQuery data pipelines", "GCP Solutions Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Cloud Consultant",
        description: "Travel (or consult remotely) to assess a traditional company's existing IT infrastructure and provide the strategic roadmap required to successfully migrate them to the cloud.",
        summary: "The business and technical advisors guiding old-school companies safely onto modern cloud platforms.",
        skills: ["Migration Strategy (Lift-and-Shift vs Refactor)", "TCO (Total Cost of Ownership) Analysis", "Client Communication", "Multi-Cloud strategy"],
        salaryRange: "India: ₹10L - ₹30L | Global: $100K - $160K",
        educationPath: "MBA + B.Tech or strong IT background",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Global Consulting Firms (Accenture, Capgemini)", "Cloud Vendor Professional Services"],
        futureScope: "Highly lucrative route combining cloud architecture knowledge with executive-level business communication.",
        jobDemandTrend: "High Demand",
        certifications: ["Multi-cloud Architect Certifications (AWS/Azure/GCP)"],
        roadmap: ["Extensive IT deployment experience", "Analyze massive corporate IT budgets", "Advise C-level executives on migration", "Partner at Consulting Firm"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cloud Computing",
        title: "Cloud Operations Engineer",
        description: "Monitor and manage live cloud environments day-to-day, checking logs, optimizing cloud spending/billing, and ensuring databases are performing well.",
        summary: "The day-to-day operators ensuring cloud servers stay healthy, fast, and under budget.",
        skills: ["FinOps (Cloud Cost Management)", "Monitoring (Datadog/New Relic)", "Patch Management", "ITIL Frameworks", "Basic Scripting"],
        salaryRange: "India: ₹5L - ₹16L | Global: $75K - $120K",
        educationPath: "B.Tech in IT/CS or BCA/MCA",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Managed Service Providers (MSPs)", "Large scaling startups", "Corporate IT Departments"],
        futureScope: "Crucial for preventing corporations from overspending millions on unused virtual servers (FinOps is booming).",
        jobDemandTrend: "Steady",
        certifications: ["FinOps Certified Practitioner", "AWS Certified SysOps Administrator"],
        roadmap: ["Learn basic cloud administration", "Master cloud billing and monitoring tools", "Optimize massive server fleets", "Cloud Operations Manager"]
    }
];

const seedCloud = async () => {
    try {
        await Career.deleteMany({ branch: "Cloud Computing" });
        await Career.insertMany(cloudProfessions);
        console.log('Cloud Computing Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedCloud();
