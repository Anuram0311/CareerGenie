const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const cyberSecurityProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Cyber Security Analyst",
        description: "Monitor computer networks for security breaches, investigate violations, and install firewalls and data encryption programs to protect sensitive data.",
        summary: "The frontline digital guards protecting an organization's network and data from cyber threats.",
        skills: ["SIEM (Splunk/LogRhythm)", "Vulnerability Scanning", "Network Protocols", "Incident Response", "Encryption Methods"],
        salaryRange: "India: ₹5L - ₹15L | Global: $75K - $120K",
        educationPath: "B.Tech in CS/IT + Cybersecurity certifications",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Banking/Finance", "Healthcare", "Government", "IT Consultancies"],
        futureScope: "Massive, unstoppable growth as global ransomware attacks and data regulations multiply.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["CompTIA Security+", "CySA+"],
        roadmap: ["IT Degree", "Get Security+", "Work in a SOC (Security Operations Center)", "Senior Security Analyst"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Ethical Hacker",
        description: "Legally break into computer systems and networks to test their defenses, finding and fixing vulnerabilities before malicious hackers can exploit them.",
        summary: "The 'good guy' hackers hired to find weaknesses in corporate systems before the bad guys do.",
        skills: ["Penetration Testing", "Kali Linux", "Metasploit", "Social Engineering", "Web App Security"],
        salaryRange: "India: ₹6L - ₹20L | Global: $90K - $140K",
        educationPath: "B.Tech in CS/IT + specialized Ethical Hacking training",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Cybersecurity Firms", "Tech Giants", "Banks", "Defense Contractors"],
        futureScope: "Highly lucrative. As software becomes vastly more complex, 'bug bounties' and proactive hacking become mandatory.",
        jobDemandTrend: "High Demand",
        certifications: ["CEH (Certified Ethical Hacker)", "OSCP (Offensive Security Certified Professional)"],
        roadmap: ["Master networking and Linux", "Earn CEH certification", "Perform authorized attacks", "Lead Red Team Hacker"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Penetration Tester",
        description: "Focus deeply on simulating sophisticated cyberattacks on specific targeted software, networks, or hardware to expose extreme vulnerabilities.",
        summary: "Specialized attack simulators executing highly targeted, complex hacks on enterprise systems.",
        skills: ["Advanced Exploit Development", "Burp Suite", "Python/Bash Scripting", "Reverse Engineering", "Network Sniffing"],
        salaryRange: "India: ₹8L - ₹25L | Global: $100K - $155K",
        educationPath: "B.Tech in CS/Cybersecurity + Advanced offensive certs",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Consulting Firms", "Govt Intelligence", "SaaS Companies"],
        futureScope: "An elite tier of ethical hacking, specifically focusing on complex, multi-stage digital infiltrations.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["OSCP", "OSWE (Offensive Security Web Expert)"],
        roadmap: ["Gain heavy offensive security certs", "Write custom exploits", "Lead corporate pentests", "Principal Penetration Tester"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Security Engineer",
        description: "Build, configure, and maintain the underlying security systems, firewalls, and architectural defenses that protect an organization's digital assets.",
        summary: "The structural builders constructing the digital walls, vaults, and alarms that protect corporate data.",
        skills: ["Firewall Configuration (Palo Alto/Cisco)", "Intrusion Detection Systems (IDS/IPS)", "Endpoint Security", "Python Scripting", "IAM"],
        salaryRange: "India: ₹7L - ₹22L | Global: $95K - $145K",
        educationPath: "B.Tech in CS/IT",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Major Corporations", "Cloud Providers", "Telecom"],
        futureScope: "Extremely stable. The engineers who actually build the defenses the analysts monitor.",
        jobDemandTrend: "Consistently High",
        certifications: ["CISSP", "Cisco CCNP Security"],
        roadmap: ["CS Degree", "Implement secure network designs", "Automate security patching", "Senior Security Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Network Security Engineer",
        description: "Focus specifically on securing the expansive networks (LAN/WAN/Cloud) that allow data to travel, encrypting traffic and halting unauthorized access.",
        summary: "Traffic controllers ensuring malicious data never travels across corporate or cloud networks.",
        skills: ["VPNs / IPsec", "BGP/OSPF Routing Security", "Zero Trust Architecture", "DDoS Mitigation", "Packet Analysis"],
        salaryRange: "India: ₹6L - ₹20L | Global: $90K - $140K",
        educationPath: "B.Tech in Network Engineering or CS",
        yearsOfStudy: "4 Years",
        industriesHiring: ["ISPs", "Enterprise Datacenters", "Streaming giants"],
        futureScope: "Evolving rapidly into securing cloud-native networks (SD-WAN) and implementing Zero Trust models.",
        jobDemandTrend: "Steady Growth",
        certifications: ["CCIE Security", "Palo Alto Networks Certified Network Security Administrator"],
        roadmap: ["Master routing and switching", "Focus entirely on perimeter defense", "Design Zero Trust networks", "Lead Network Security Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Security Operations Center (SOC) Analyst",
        description: "Work in a command center environment monitoring live security dashboards 24/7, identifying, categorizing, and reacting to real-time cyber threats.",
        summary: "The 24/7 digital sentinels constantly monitoring screens for the first sign of a cyber attack.",
        skills: ["SIEM Triage", "Threat Hunting", "Log Analysis", "Malware Analysis", "Fast Decision Making"],
        salaryRange: "India: ₹4L - ₹12L | Global: $65K - $105K",
        educationPath: "B.Tech in IT/CS or Cybersecurity Diploma",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Managed Security Service Providers (MSSPs)", "Banks", "Large Tech Firms"],
        futureScope: "The absolute best entry point into a cybersecurity career. High burnout, but incredible learning potential.",
        jobDemandTrend: "Extremely High (Entry Level)",
        certifications: ["CompTIA CySA+", "Cisco CyberOps Associate"],
        roadmap: ["Get basic security certs", "Work Tier 1 SOC shifts", "Move to advanced Threat Hunting (Tier 3)", "SOC Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Incident Response Analyst",
        description: "The digital 'first responders' who dive into the chaos immediately after a major data breach to contain the damage, eradicate the hacker, and restore systems.",
        summary: "The digital firefighters called in immediately to stop an active cyber attack and save the network.",
        skills: ["Digital Forensics", "Malware Reverse Engineering", "Crisis Management", "Memory Forensics", "Endpoint Detection & Response (EDR)"],
        salaryRange: "India: ₹8L - ₹25L | Global: $100K - $150K",
        educationPath: "B.Tech CS + Specialized Forensics Training",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Elite Cyber Consultancies (Mandiant, CrowdStrike)", "Government", "Banks"],
        futureScope: "Highly stressful but incredibly lucrative. The people companies call when they are actively losing millions.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["GCIH (GIAC Certified Incident Handler)"],
        roadmap: ["Heavy SOC experience", "Master forensics tools", "Lead breach containment teams", "Director of Incident Response"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Cyber Forensics Expert",
        description: "Investigate cybercrimes by rigorously extracting, preserving, and analyzing digital evidence from computers and phones for legal court proceedings.",
        summary: "Digital detectives gathering legal proof of cybercrimes from heavily damaged or encrypted devices.",
        skills: ["EnCase / FTK", "Data Recovery", "Mobile Forensics", "Chain of Custody", "Legal Testimony"],
        salaryRange: "India: ₹7L - ₹22L | Global: $90K - $140K",
        educationPath: "Bachelors in Digital Forensics or Computer Science",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Law Enforcement (CBI/FBI)", "Private Detective Agencies", "Big 4 Accounting (Fraud Depts)"],
        futureScope: "Crucial for legally prosecuting hackers and internal corporate fraud.",
        jobDemandTrend: "Niche, Stable",
        certifications: ["CHFI (Computer Hacking Forensic Investigator)"],
        roadmap: ["CS Degree", "Master forensic extraction software", "Provide expert witness testimony", "Chief Forensics Investigator"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Cloud Security Engineer",
        description: "Design and implement impenetrable security architectures specifically for massive cloud environments like AWS, Azure, and Google Cloud.",
        summary: "Specialists ensuring that corporate data hosted entirely on the public cloud remains locked down.",
        skills: ["AWS/Azure Security tools", "Cloud Security Posture Management (CSPM)", "IAM Policies", "Docker/Kubernetes Security", "DevSecOps"],
        salaryRange: "India: ₹10L - ₹30L | Global: $115K - $170K",
        educationPath: "B.Tech CS + Heavy Cloud Certifications",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Cloud Native Startups", "SaaS Enterprises", "Financial Tech"],
        futureScope: "Currently one of the highest paying and most demanded roles as every company moves to the cloud.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["AWS Certified Security – Specialty", "CCSP (Certified Cloud Security Professional)"],
        roadmap: ["Master Cloud Architecture", "Focus entirely on cloud vulnerabilities", "Secure massive data lakes", "Principal Cloud Security Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Information Security Manager",
        description: "Oversee an organization's entire cybersecurity program, managing teams of analysts, handling security budgets, and ensuring compliance with data laws.",
        summary: "The executive leaders directing overall corporate defensive strategy and handling security budgets.",
        skills: ["Risk Assessment", "Compliance (GDPR/HIPAA)", "Security Policy Writing", "Team Leadership", "Budgeting"],
        salaryRange: "India: ₹15L - ₹40L | Global: $130K - $190K",
        educationPath: "B.Tech + MBA + 8+ years Cybersecurity experience",
        yearsOfStudy: "4 Years + Extensive Experience",
        industriesHiring: ["All Large Enterprises", "Healthcare Systems", "Government Agencies"],
        futureScope: "Highly secure management role. Required to bridge the gap between technical security and executive business boards.",
        jobDemandTrend: "High Demand",
        certifications: ["CISM (Certified Information Security Manager)", "CISSP"],
        roadmap: ["10+ years as Security Engineer/Analyst", "Earn CISM", "Manage security operations teams", "CISO"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Application Security Engineer",
        description: "Work directly with software developers to ensure that the actual code of applications is written securely from day one, preventing future hacks.",
        summary: "The code reviewers ensuring software developers don't accidentally write easily hackable code.",
        skills: ["Secure Coding Practices", "SAST / DAST tools", "OWASP Top 10", "Code Review (Java/Python/JS)", "Threat Modeling"],
        salaryRange: "India: ₹9L - ₹28L | Global: $110K - $165K",
        educationPath: "B.Tech CS (Heavy focus on Software Engineering)",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Software Dev Companies", "Fintech", "E-commerce Giants"],
        futureScope: "Massive shift towards 'DevSecOps' means these engineers are desperately needed to secure code as it's written.",
        jobDemandTrend: "Very High Growth",
        certifications: ["CASE (Certified Application Security Engineer)", "GWAPT"],
        roadmap: ["Work as Software Developer", "Transition to finding vulnerabilities in code", "Implement DevSecOps pipelines", "Head of AppSec"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Cyber Security",
        title: "Chief Information Security Officer (CISO)",
        description: "The ultimate executive responsible for an organization's entire information and data security. Bears the final responsibility if a mega-breach occurs.",
        summary: "The highest-ranking cybersecurity executive, defining global security strategy for massive corporations.",
        skills: ["Enterprise Risk Management", "Board-level Communication", "Global Compliance Laws", "Crisis Leadership", "Strategic Vision"],
        salaryRange: "India: ₹35L - ₹1Cr+ | Global: $200K - $400K+",
        educationPath: "B.Tech CS + MBA + 15+ years distinguished security experience",
        yearsOfStudy: "6 Years + 15+ Years Experience",
        industriesHiring: ["Fortune 500", "Global Banks", "Multinational Tech Firms"],
        futureScope: "The absolute pinnacle of the field. A C-suite executive role equal in importance to a CFO or CTO.",
        jobDemandTrend: "Elite Executive Role",
        certifications: ["CISSP", "CISM", "CGEIT"],
        roadmap: ["15+ years fighting cyber threats", "Lead massive corporate security divisions", "Present risk to corporate boards", "CISO"]
    }
];

const seedCyberSecurity = async () => {
    try {
        await Career.deleteMany({ branch: "Cyber Security" });
        await Career.insertMany(cyberSecurityProfessions);
        console.log('Cyber Security Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedCyberSecurity();
