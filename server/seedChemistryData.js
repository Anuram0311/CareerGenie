const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const chemistryProfessions = [
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Organic Chemist",
        description: "Study and design carbon-based compounds, leading to the creation of new drugs, plastics, food additives, and agricultural chemicals.",
        summary: "The molecular architects designing the carbon-based chemical compounds that form medicines and modern materials.",
        skills: ["Spectroscopy (NMR/IR)", "Chromatography (HPLC/GC)", "Organic Synthesis", "Chemical Handling", "Data Analysis"],
        salaryRange: "India: ₹5L - ₹15L | Global: $70K - $120K",
        educationPath: "B.Sc Chemistry → M.Sc Organic Chemistry (Ph.D preferred for R&D)",
        yearsOfStudy: "5 to 8 Years",
        industriesHiring: ["Pharmaceuticals", "Agrochemicals", "Petrochemicals", "FMCG (Cosmetics)"],
        futureScope: "Extremely stable. The foundation of the entire pharmaceutical and chemical manufacturing world.",
        jobDemandTrend: "Consistently High",
        certifications: ["Good Laboratory Practice (GLP) Training"],
        roadmap: ["Degree in Chemistry", "Master organic synthesis techniques", "Work in R&D labs", "Lead Research Scientist"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Inorganic Chemist",
        description: "Study the properties and behavior of inorganic and organometallic compounds, focusing on metals, minerals, and advanced materials.",
        summary: "Specialists focusing on the non-carbon world, exploring new metals, catalysts, and superconductors.",
        skills: ["X-ray Crystallography", "Coordination Chemistry", "Catalysis", "Spectrophotometry", "Material Characterization"],
        salaryRange: "India: ₹5L - ₹14L | Global: $70K - $115K",
        educationPath: "B.Sc Chemistry → M.Sc Inorganic Chemistry (Ph.D for advanced roles)",
        yearsOfStudy: "5 to 8 Years",
        industriesHiring: ["Mining & Metallurgy", "Microelectronics", "Battery Manufacturing", "Catalyst Producers"],
        futureScope: "High demand driven by the extreme need for new, efficient battery materials (Lithium-ion / Solid-state) and semiconductor components.",
        jobDemandTrend: "Growing",
        certifications: ["Material Characterization Specialization"],
        roadmap: ["Degree in Chemistry", "Specialize in metal compounds", "Develop industrial catalysts/batteries", "Senior Materials Scientist"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Physical Chemist",
        description: "Combine physics and chemistry to deeply understand how matter behaves on a molecular and atomic level, and how chemical reactions occur.",
        summary: "The boundary-pushers applying physics formulas to explain how chemical reactions actually happen at the molecular level.",
        skills: ["Thermodynamics", "Quantum Chemistry", "Computational Modeling", "Laser Spectroscopy", "Mathematics"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Sc Chemistry/Physics → M.Sc Physical Chemistry → Ph.D",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Advanced R&D Labs", "Renewable Energy (Solar/Fuel Cells)", "Academia"],
        futureScope: "Crucial for green energy. They are the scientists figuring out how to make chemical energy transfer (like in solar panels) 100% efficient.",
        jobDemandTrend: "Specialized, Stable",
        certifications: ["Computational Chemistry Software certifications"],
        roadmap: ["Master advanced math and thermodynamics", "Learn computational modeling", "Research laser/energy transfer", "Principal Investigator"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Analytical Chemist",
        description: "Use highly exacting scientific instruments to determine the precise chemical composition of substances, ensuring safety and quality standards.",
        summary: "The precision experts who test food, drugs, and water to find out exactly what chemicals are inside them.",
        skills: ["Mass Spectrometry", "HPLC / GC", "Quality Control/Assurance", "Method Development", "Lab Automation"],
        salaryRange: "India: ₹4L - ₹12L | Global: $65K - $110K",
        educationPath: "B.Sc Chemistry → M.Sc Analytical Chemistry",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Pharmaceutical Quality Control", "Food & Beverage", "Environmental Testing", "Forensic Labs"],
        futureScope: "The most widely demanded chemistry role globally. Every physical product manufactured needs to be chemically analyzed for safety.",
        jobDemandTrend: "Extremely High Volume",
        certifications: ["ISO 17025 Lead Auditor", "Six Sigma (Lab Quality)"],
        roadmap: ["Master lab instruments (HPLC)", "Run daily industrial quality tests", "Develop new testing methods", "QA/QC Lab Director"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Biochemist",
        description: "Study the chemical principles of living things, decoding DNA, proteins, and cell parts to understand diseases and develop lifesaving medicines.",
        summary: "The bridge between biology and chemistry, studying the molecular reactions that keep living things alive.",
        skills: ["Molecular Biology", "Protein Purification", "Genetic Engineering basics", "Cell Culture", "Assay Development"],
        salaryRange: "India: ₹6L - ₹16L | Global: $75K - $125K",
        educationPath: "B.Sc Biochemistry/Chemistry → M.Sc Biochemistry (Ph.D highly recommended)",
        yearsOfStudy: "5 to 8 Years",
        industriesHiring: ["Biotechnology Startups", "Pharmaceutical R&D", "Healthcare Diagnostics", "Agriculture"],
        futureScope: "Massive growth. Heavily involved in developing mRNA vaccines, cancer immunotherapies, and synthetic biological tissues.",
        jobDemandTrend: "High Growth",
        certifications: ["Clinical Laboratory Science (CLS) certification"],
        roadmap: ["Degree in Biochemistry", "Master protein / DNA extraction", "Research disease pathways", "Director of Biological R&D"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Industrial Chemist",
        description: "Take small-scale laboratory chemical reactions and scale them up to produce millions of gallons of commercial products safely in factory environments.",
        summary: "The chemical engineers who turn beaker-sized lab experiments into massive factory-level production lines.",
        skills: ["Process Optimization", "Chemical Plant Operations", "Reaction Kinetics", "Safety Protocols (OSHA)", "Troubleshooting"],
        salaryRange: "India: ₹5L - ₹18L | Global: $75K - $120K",
        educationPath: "B.Sc/B.Tech in Chemistry or Chemical Engineering",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Chemical Manufacturing", "Petrochemical Refineries", "Paints & Coatings", "FMCG"],
        futureScope: "Very stable. Responsible for ensuring the global supply chain of raw chemical materials functions perfectly without explosive accidents.",
        jobDemandTrend: "Stable, High Volume",
        certifications: ["Process Safety Management (PSM)"],
        roadmap: ["Degree in applied chemistry", "Work on factory floors", "Optimize massive reactor yields", "Plant Operations Manager"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Pharmaceutical Chemist",
        description: "Discover, design, and synthesize entirely new chemical entities with the specific goal of curing human diseases and alleviating symptoms.",
        summary: "The lifesaving inventors who actually synthesize and refine the chemical pills and medicines we take.",
        skills: ["Medicinal Chemistry", "Drug Design", "Pharmacology", "Organic Synthesis", "Patent Law basics"],
        salaryRange: "India: ₹6L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Sc Chemistry → M.Sc Pharmaceutical Chemistry → Ph.D",
        yearsOfStudy: "7 to 9 Years",
        industriesHiring: ["Major Pharma (Pfizer/Novartis)", "Contract Research Organizations (CROs)", "Biotech"],
        futureScope: "Highly lucrative and deeply prestigious, though drug discovery timelines are notoriously slow and difficult.",
        jobDemandTrend: "Steady, Highly Paid",
        certifications: ["Clinical Trial Regulatory Training"],
        roadmap: ["Ph.D in Medicinal Chemistry", "Synthesize novel compounds", "Test for drug efficacy", "Principal Scientist (Pharma)"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Materials Chemist",
        description: "Study how different molecules combine to create entirely new physical materials with incredible properties like extreme heat resistance or super-flexibility.",
        summary: "The inventors of bizarre new substances, from flexible smartphone screens to ultra-light aircraft metals.",
        skills: ["Polymer Synthesis", "Nanomaterials", "Thermal Analysis (TGA/DSC)", "Spectroscopy", "Solid State Chemistry"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Sc Chemistry → M.Sc/Ph.D in Materials Science",
        yearsOfStudy: "5 to 8 Years",
        industriesHiring: ["Aerospace (SpaceX/Boeing)", "Consumer Electronics", "Automotive", "Textiles (Gore-Tex)"],
        futureScope: "Critical role. Future technology (like foldable phones and space elevators) is entirely bottlenecked by the need for better materials.",
        jobDemandTrend: "High Demand",
        certifications: ["Specialization in Nanotechnology"],
        roadmap: ["Material Science Degree", "Synthesize new plastics/metals", "Test tensile/thermal limits", "Lead Materials Innovator"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Environmental Chemist",
        description: "Test soil, air, and water to track exactly how chemicals and industrial waste interact with the natural environment, and find ways to clean it up.",
        summary: "The ecological protectors analyzing water and air to track and neutralize dangerous industrial pollution.",
        skills: ["Environmental Monitoring", "Trace Metal Analysis", "Toxicology", "EPA Regulations", "Field Sampling"],
        salaryRange: "India: ₹5L - ₹14L | Global: $65K - $110K",
        educationPath: "B.Sc Chemistry/Environmental Science → M.Sc",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Government Agencies (EPA)", "Waste Management", "Non-Profits", "Agricultural Companies"],
        futureScope: "Growing rapidly as global climate change and chemical pollution laws become vastly more strict worldwide.",
        jobDemandTrend: "Growing",
        certifications: ["Certified Environmental Professional (CEP)"],
        roadmap: ["Degree in Enviro-Chemistry", "Collect field samples", "Write government compliance reports", "Chief Environmental Consultant"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Forensic Chemist",
        description: "Apply highly detailed chemical analysis to physical evidence from crime scenes—such as blood, drugs, explosives, and gunshot residue—to solve crimes.",
        summary: "The real-world CSI scientists using chemical analysis to provide undeniable proof in criminal court cases.",
        skills: ["Trace Evidence Analysis", "GC-MS / FTIR", "Toxicology", "Chain of Custody", "Legal Testimony Testimony"],
        salaryRange: "India: ₹6L - ₹15L | Global: $70K - $115K",
        educationPath: "B.Sc Chemistry → M.Sc Forensic Science",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Government Crime Labs", "Law Enforcement Academies", "Private Detective Agencies"],
        futureScope: "Highly stable and fascinating career. Requires absolute meticulousness as their chemical results dictate legal convictions.",
        jobDemandTrend: "Stable, Niche",
        certifications: ["Certification from Forensic Boards (e.g., ABC)"],
        roadmap: ["Degree in Chemistry", "Master trace analysis", "Provide expert witness testimony in court", "Crime Lab Director"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Polymer Chemist",
        description: "Specialize entirely in the creation and manipulation of large macromolecule chains to create every form of plastic, rubber, foam, and synthetic fiber.",
        summary: "The plastics experts designing everything from biodegradable water bottles to highly durable car tires.",
        skills: ["Polymerization Techniques", "Rheology", "Thermal Analysis", "Extrusion/Molding", "Green Chemistry"],
        salaryRange: "India: ₹6L - ₹16L | Global: $75K - $125K",
        educationPath: "B.Sc Chemistry → M.Sc Polymer Chemistry",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Plastics Manufacturing", "Automotive", "Packaging Companies", "Biomedical Devices"],
        futureScope: "Massive shift occurring now. The entire industry is desperately pivoting to hire polymer chemists who can create truly biodegradable plastics.",
        jobDemandTrend: "Changing & Growing",
        certifications: ["Polymer Engineering Certifications"],
        roadmap: ["Degree in Chemistry", "Create novel synthetic plastics", "Focus on bio-degradable solutions", "Senior Polymer Scientist"]
    },
    {
        domain: "Science",
        branch: "Chemistry",
        title: "Research Scientist (Chemistry)",
        description: "A generalized title for highly advanced chemists leading their own independent fundamental research programs inside large institutions or universities.",
        summary: "The elite, grant-funded academics pushing the boundaries of what is chemically possible.",
        skills: ["Grant Writing", "Independent Research", "Scientific Publication", "Team Leadership", "Advanced Analytical Chemistry"],
        salaryRange: "India: ₹8L - ₹25L | Global: $90K - $150K",
        educationPath: "Ph.D in Chemistry + Postdoctoral Fellowship",
        yearsOfStudy: "8 to 10+ Years",
        industriesHiring: ["Universities", "National Research Institutes", "Global Corporate R&D"],
        futureScope: "Elite and academically rigorous. These scientists define the next 20 years of chemical industrial applications through base research.",
        jobDemandTrend: "Steady, Competitive",
        certifications: ["Extensive peer-reviewed publications"],
        roadmap: ["Complete Ph.D", "Complete Postdoc", "Secure independent research funding", "Tenured Principal Investigator"]
    }
];

const seedChemistry = async () => {
    try {
        await Career.deleteMany({ branch: "Chemistry" });
        await Career.insertMany(chemistryProfessions);
        console.log('Chemistry Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedChemistry();
