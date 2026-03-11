const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const forensicProfessions = [
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Forensic Scientist",
        description: "Apply comprehensive scientific principles to analyze raw physical evidence collected from crime scenes, presenting rigorous, objective findings in courts of law.",
        summary: "The multidisciplinary scientists who transform chaotic crime scene evidence into undeniable legal facts.",
        skills: ["Trace Evidence Analysis", "Chain of Custody", "Laboratory Quality Control", "Microscopy", "Legal Testimony Testimony"],
        salaryRange: "India: ₹4L - ₹12L | Global: $60K - $100K",
        educationPath: "B.Sc Forensic Science → M.Sc Forensic Science",
        yearsOfStudy: "5 Years",
        industriesHiring: ["State/Federal Crime Labs", "Police Departments", "Private Detective Agencies", "Government Forensic Science Labs (FSLs)"],
        futureScope: "Extremely stable. The legal system absolutely relies on accredited forensic scientists to convert physical evidence into convictions.",
        jobDemandTrend: "Stable, Government Driven",
        certifications: ["Certification from National Forensic Boards"],
        roadmap: ["Degree in Forensic Science", "Join government crime lab", "Master trace evidence analysis", "Senior Forensic Reporting Officer"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Crime Scene Investigator",
        description: "Physically respond to active crime scenes to meticulously secure, document, photograph, and collect critical physical evidence before it is destroyed or contaminated.",
        summary: "The elite first-responders who secure and extract hidden evidence from active crime scenes.",
        skills: ["Crime Scene Photography", "Evidence Packaging", "Latent Print Processing", "Blood Spatter Analysis Basics", "Meticulous Documentation"],
        salaryRange: "India: ₹3.5L - ₹10L | Global: $55K - $95K",
        educationPath: "B.Sc Forensic Science/Criminology → specialized Police Academy training",
        yearsOfStudy: "3 to 4 Years (+ Field Training)",
        industriesHiring: ["Local Law Enforcement", "Federal Investigation Bureaus (FBI/CBI)", "Military Police Units"],
        futureScope: "Grueling but necessary work. CSIs are the absolute frontline of the entire forensic process; if they fail to collect it properly, the lab cannot test it.",
        jobDemandTrend: "Consistent",
        certifications: ["Certified Crime Scene Investigator (CCSI)"],
        roadmap: ["Degree + Police Academy", "Field training at active crime scenes", "Master evidence recovery", "Lead CSI / Scene Commander"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Forensic Pathologist",
        description: "Medical doctors specialized in determining the exact cause, manner, and mechanism of sudden, violent, or suspicious deaths by performing rigorous autopsies.",
        summary: "The medical death-detectives performing autopsies to discover exactly how and why a murder victim died.",
        skills: ["Autopsy Execution", "Human Anatomy/Histology", "Toxicology Interpretation", "Trauma Analysis", "Expert Medical Testimony"],
        salaryRange: "India: ₹12L - ₹30L+ | Global: $150K - $300K+",
        educationPath: "MBBS (Medicine) → MD Pathology → Fellowship in Forensic Pathology",
        yearsOfStudy: "13 to 15 Years",
        industriesHiring: ["City/State Medical Examiner Offices", "Hospitals", "Federal Law Enforcement Centers"],
        futureScope: "Elite, intensely demanding, and extremely well paid. There is a massive global shortage of certified, board-passed forensic pathologists.",
        jobDemandTrend: "Extreme Shortage, Ultra-High Demand",
        certifications: ["Board Certification in Anatomic and Forensic Pathology"],
        roadmap: ["Complete Medical School", "Complete Anatomic Pathology Residency", "Complete Forensic Fellowship", "Chief Medical Examiner"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Forensic Toxicologist",
        description: "Perform highly complex chemical tests on bodily fluids and tissues to identify the presence of illegal drugs, massive poison doses, or lethal environmental chemicals.",
        summary: "The poison experts analyzing blood and organs to find out what toxic substances killed or incapacitated a victim.",
        skills: ["Mass Spectrometry (GC-MS/LC-MS)", "Pharmacokinetics", "Analytical Chemistry", "Postmortem Fluid Extraction", "Courtroom Defense"],
        salaryRange: "India: ₹5L - ₹15L | Global: $75K - $125K",
        educationPath: "B.Sc Chemistry/Toxicology → M.Sc Forensic Toxicology",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Medical Examiner Labs", "Sports Anti-Doping Agencies (WADA)", "Hospital Clinical Labs", "Government (CBI/FBI) Labs"],
        futureScope: "Crucial for fighting the opioid epidemic globally. Toxicologists determine if a death was an accidental overdose or a calculated poisoning.",
        jobDemandTrend: "High Demand",
        certifications: ["American Board of Forensic Toxicology (ABFT) certification"],
        roadmap: ["Toxicology degree", "Analyze postmortem blood samples", "Identify novel synthetic drugs", "Chief Forensic Toxicologist"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Forensic Biologist",
        description: "Analyze devastating biological evidence—such as blood, saliva, hair, and semen—left at violent crime scenes to extract DNA profiles that identify suspects or victims.",
        summary: "The DNA experts matching biological evidence from crime scenes to specific human suspects.",
        skills: ["DNA Extraction/Amplification", "STR Analysis", "Serology (Blood typing)", "CODIS (DNA Database) Management", "Sterile Lab Protocols"],
        salaryRange: "India: ₹5L - ₹14L | Global: $65K - $115K",
        educationPath: "B.Sc Biology/Genetics → M.Sc Forensic Biology",
        yearsOfStudy: "5 Years",
        industriesHiring: ["State DNA Trace Labs", "Federal Intelligence", "Private Genetic Genealogy Labs", "Paternity Testing Centers"],
        futureScope: "Extremely secure. DNA is the 'gold standard' of modern criminal convictions, and courts legally mandate forensic biologists to testify on their findings.",
        jobDemandTrend: "High Demand",
        certifications: ["FBI Quality Assurance Standards compliant training"],
        roadmap: ["Genetics/Biology degree", "Process violent crime biological evidence", "Upload profiles to national DNA databases", "DNA Technical Leader"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Crime Lab Forensic Chemist",
        description: "Analyze non-biological trace physical evidence—such as massive explosives, illegal street drugs, glass shards, and gunshot residue—to link suspects to crimes.",
        summary: "The explosive and drug specialists identifying strange chemical powders and physical trace evidence.",
        skills: ["Spectroscopy (FTIR/Raman)", "Chromatography", "Explosives/Arson Analysis", "Narcotics Identification", "Trace Transfer Theory"],
        salaryRange: "India: ₹5L - ₹14L | Global: $70K - $110K",
        educationPath: "B.Sc Chemistry → M.Sc Forensic Chemistry",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Government Narcotics Bureaus (DEA/NCB)", "Customs and Border Protection", "Bomb Squad Labs"],
        futureScope: "Highly vital. These chemists are required to legally prove a confiscated white powder is actually fentanyl or cocaine before a trial can even begin.",
        jobDemandTrend: "Stable, Crucial",
        certifications: ["Specialized Drug Enforcement Agency (DEA) training"],
        roadmap: ["Forensic Chemistry degree", "Test bulk narcotics seizures", "Analyze terrorist explosive signatures", "Lead Arson/Explosives Analyst"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Digital Device Forensic Expert",
        description: "Extract, decrypt, and meticulously analyze digital data hidden inside seized smartphones, laptops, and hard drives to uncover criminal communications and financial fraud.",
        summary: "The device hackers extracting encrypted chats, deleted emails, and hidden files from suspects' cell phones.",
        skills: ["Data Recovery/Carving", "Mobile Device Extraction (Cellebrite)", "Cryptography breaking", "File System Forensics", "Network Traffic Logging"],
        salaryRange: "India: ₹8L - ₹22L | Global: $90K - $150K",
        educationPath: "B.Tech Computer Science → M.Sc Digital Forensics / Cyber Security",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Cyber Crime Police Cells", "Intelligence Agencies (NSA/RAW)", "Corporate Incident Response Teams", "Big 4 Audit Firms"],
        futureScope: "Explosive demand. Practically 100% of modern crimes—from murder to corporate espionage—leave a massive digital trail on smartphones.",
        jobDemandTrend: "Extremely High Volume",
        certifications: ["GIAC Certified Forensic Examiner (GCFE)", "EnCase Certified Examiner"],
        roadmap: ["Cyber Security degree", "Extract encrypted phone data", "Track bitcoin/dark-web transactions", "Head of Digital Investigations"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Forensic Psychologist",
        description: "Apply deep human psychology to the criminal justice system, evaluating whether a defendant is mentally competent to stand trial or profiling serial offenders.",
        summary: "The criminal profilers evaluating the sanity and hidden motivations of violent offenders.",
        skills: ["Clinical Psychological Assessment", "Criminal Profiling", "Risk Assessment", "Victimology", "Expert Court Testimony"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Sc Psychology → M.A. Clinical Psychology → Ph.D/Psy.D in Forensic Psychology",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Prisons / Correctional Facilities", "State Courts", "Federal Investigation Agencies (FBI BAU)", "Private Legal Consulting"],
        futureScope: "A difficult, highly academic, but necessary field. They dictate whether a serial offender is insane or legally responsible for their actions.",
        jobDemandTrend: "Niche, Highly Specialized",
        certifications: ["Specialized Board Certification in Forensic Psychology"],
        roadmap: ["Ph.D in Psychology", "Evaluate violent offenders in prisons", "Assess trial competency for courts", "Chief Criminal Profiler"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Forensic Anthropologist",
        description: "Examine massively degraded, burned, or ancient human skeletal remains to determine the victim's age, sex, ancestry, and the exact physical trauma that caused death.",
        summary: "The bone experts identifying badly burned or decomposed human victims by studying their skeletal remains.",
        skills: ["Human Osteology", "Skeletal Trauma Analysis", "Biological Profiling", "Excavation/Taphonomy", "Report Writing"],
        salaryRange: "India: ₹5L - ₹15L | Global: $70K - $115K",
        educationPath: "B.Sc Anthropology/Biology → M.Sc → Ph.D in Biological Anthropology",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Medical Examiner Offices (Consultant)", "Universities", "Disaster Victim Identification (DVI) Teams", "Human Rights NGOs"],
        futureScope: "Highly specialized and relatively small field. Often utilized during massive mass-disaster events (plane crashes) or discovering hidden mass graves.",
        jobDemandTrend: "Highly Academic, Consulting Based",
        certifications: ["American Board of Forensic Anthropology (ABFA)"],
        roadmap: ["Complete Ph.D", "Consult on decomposed murder cases", "Deploy to massive disaster sites", "Lead Forensic Anthropologist"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Ballistics Expert",
        description: "Analyze fired bullets, massive cartridge cases, and exact gunshot residue patterns to definitively link a specific firearm to a violent crime scene.",
        summary: "The firearms specialists matching tiny scratches on a fired bullet to the exact gun of the murder suspect.",
        skills: ["Firearms Examination", "Toolmark Analysis", "Microscopic Comparison", "Trajectory Reconstruction", "Gunpowder Residue Testing"],
        salaryRange: "India: ₹5L - ₹14L | Global: $65K - $105K",
        educationPath: "B.Sc Physics / Forensic Science → Specialized Police/Federal Ballistics Training",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["State Forensic Laboratories", "Military Police", "Federal Bureaus (ATF/CBI)"],
        futureScope: "Extremely stable. The ability to definitively prove a suspect's gun fired the lethal bullet is a cornerstone of violent crime prosecution.",
        jobDemandTrend: "Stable",
        certifications: ["Association of Firearm and Tool Mark Examiners (AFTE) Certification"],
        roadmap: ["Physics/Forensics degree", "Train under a master examiner", "Test-fire suspect weapons", "Chief Firearms Examiner"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Fingerprint Analyst",
        description: "Extract, enhance, and rigorously compare completely invisible 'latent' fingerprints left at crime scenes against massive national criminal databases.",
        summary: "The ridge-pattern experts unearthing hidden fingerprints and mathematically linking them to known criminals.",
        skills: ["Latent Print Development (Chemical/Powder)", "Pattern Recognition (ACE-V Methodology)", "AFIS Database Operation", "Microscopy"],
        salaryRange: "India: ₹4L - ₹10L | Global: $55K - $95K",
        educationPath: "B.Sc Forensic Science/Criminology → Rigorous Agency Training",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Local/State Police Departments", "Border Security", "Federal Intelligence Bureaus"],
        futureScope: "Automation via AI is heavily altering this field, but human verification in court remains an absolute legal necessity.",
        jobDemandTrend: "Stable, Evolving",
        certifications: ["International Association for Identification (IAI) Certification"],
        roadmap: ["Degree + Agency Training", "Process raw crime scene tape", "Run comparisons in AFIS", "Senior Latent Print Examiner"]
    },
    {
        domain: "Science",
        branch: "Forensic Science",
        title: "Cyber Security Investigation Analyst",
        description: "Trace complex national cyber-attacks, identifying exactly how international hackers breached massive corporate networks or stole millions in crypto.",
        summary: "The network detectives tracking down exactly how hackers broke into a bank or government server.",
        skills: ["Malware Reverse Engineering", "Network Packet Analysis (Wireshark)", "Log Auditing", "Threat Hunting", "Cloud Security"],
        salaryRange: "India: ₹10L - ₹28L | Global: $100K - $160K",
        educationPath: "B.Tech Computer Science → M.Sc Cyber Security",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Financial Institutions (Banks)", "Federal Cyber Command", "Private Cyber Security Firms (FireEye/Mandiant)"],
        futureScope: "One of the most desperately needed careers on Earth. Global cybercrime causes trillions in damages, requiring massive squads of active investigators.",
        jobDemandTrend: "Massive Growth, Elite",
        certifications: ["Certified Incident Handler (GCIH)", "OSCP"],
        roadmap: ["Cyber Security degree", "Analyze massive corporate network breaches", "Reverse engineer advanced malware", "Director of Cyber Incident Response"]
    }
];

const seedForensic = async () => {
    try {
        await Career.deleteMany({ branch: "Forensic Science" });
        await Career.insertMany(forensicProfessions);
        console.log('Forensic Science Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedForensic();
