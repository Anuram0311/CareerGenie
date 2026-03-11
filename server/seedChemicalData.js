const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const chemicalProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Process Engineer",
        description: "Design, implement, control, and optimize large-scale chemical processes within manufacturing plants.",
        summary: "Architects of industrial chemical processes converting raw materials into usable products efficiently.",
        skills: ["Process Simulation (Aspen HYSYS)", "Mass & Heat Transfer", "P&ID Development", "Unit Operations", "Thermodynamics"],
        salaryRange: "India: ₹4L - ₹15L | Global: $75K - $125K",
        educationPath: "B.Tech/B.E. in Chemical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Oil & Gas", "Petrochemicals", "FMCG", "Pharmaceuticals", "Specialty Chemicals"],
        futureScope: "Steady demand with growing focus on optimizing processes for lower carbon emissions.",
        jobDemandTrend: "Stable",
        certifications: ["Certified Process Professional", "Six Sigma Green Belt"],
        roadmap: ["Chemical Engineering degree", "Master simulation tools", "Work as Junior Process Engineer", "Become Lead Process Designer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Production Engineer (Chemical)",
        description: "Oversee the day-to-day operations of a chemical manufacturing plant, ensuring targets, safety, and quality are met.",
        summary: "The on-floor commanders ensuring chemical plants operate smoothly and hit production targets.",
        skills: ["Production Planning", "Manpower Management", "EHS Compliance", "Troubleshooting", "Lean Manufacturing"],
        salaryRange: "India: ₹3.5L - ₹12L | Global: $65K - $110K",
        educationPath: "B.Tech/B.E. in Chemical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Fertilizers", "Polymers", "Textile Manufacturing", "Paints & Coatings"],
        futureScope: "Evergreen demand directly tied to mass manufacturing cycles.",
        jobDemandTrend: "Consistent",
        certifications: ["Certified Manufacturing Engineer (CMfgE)"],
        roadmap: ["Engineering degree", "Start on the shop floor as shift engineer", "Master lean techniques", "Become Plant Production Head"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Plant Engineer",
        description: "Maintain and upgrade the physical equipment and infrastructure of a chemical process plant.",
        summary: "The guardians of heavy machinery and complex infrastructure in large chemical facilities.",
        skills: ["Maintenance Management", "Equipment Reliability", "Cost Control", "Safety Protocols (HAZOP)", "Project Engineering"],
        salaryRange: "India: ₹4L - ₹14L | Global: $70K - $115K",
        educationPath: "B.Tech in Chemical or Mechanical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Chemical Plants", "Pulp & Paper", "Food Processing", "Cement"],
        futureScope: "Crucial role that evolves alongside automation and preventative maintenance technologies.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Certified Maintenance & Reliability Professional (CMRP)"],
        roadmap: ["Understand plant machinery", "Gain reliability engineering experience", "Manage plant shutdowns", "Chief Plant Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Quality Control Engineer",
        description: "Ensure that chemical products meet specified purity, safety, and regulatory standards before they reach the market.",
        summary: "The rigorous gatekeepers preventing defective or dangerous chemicals from leaving the factory.",
        skills: ["Analytical Chemistry", "Statistical Process Control (SPC)", "ISO Standards", "Laboratory Equipment (HPLC/GC)", "Auditing"],
        salaryRange: "India: ₹3L - ₹12L | Global: $60K - $100K",
        educationPath: "B.Tech in Chemical Engineering or M.Sc in Chemistry",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Pharmaceuticals", "Food & Beverage", "Cosmetics", "Agrochemicals"],
        futureScope: "Demand rises securely with stricter global safety and regulatory requirements.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Quality Engineer (CQE)", "ISO 9001 Lead Auditor"],
        roadmap: ["Degree in Chemical/Chemistry", "Master lab analysis techniques", "Lead QA/QC audits", "Quality Assurance Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Petrochemical Engineer",
        description: "Specialize in the extraction, refining, and processing of oil and natural gas down into usable chemicals and plastics.",
        summary: "Experts refining raw fossil fuels into the foundational fuels and plastics for modern society.",
        skills: ["Refining Processes", "Catalysis", "Petrophysics", "Fractional Distillation", "Fluid Mechanics"],
        salaryRange: "India: ₹5L - ₹20L | Global: $90K - $150K",
        educationPath: "B.Tech in Chemical Engineering, preferably with Petrochemical specialization",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Oil Refineries", "Petrochemical Plants", "Energy Companies"],
        futureScope: "Highly lucrative but shifting slowly towards greener alternatives; high demand remains for decades.",
        jobDemandTrend: "Stable but Adapting",
        certifications: ["API Certifications", "Refinery Process Operations"],
        roadmap: ["Chemical degree", "Focus on fractional distillation and cracking", "Join refinery operations", "Lead Refinery Process Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Refinery Engineer",
        description: "Optimize the day-to-day conversion processes within a petroleum refinery ensuring maximum yield and efficiency.",
        summary: "Optimization specialists squeezing maximum value out of every drop of crude oil.",
        skills: ["Cracking & Reforming", "Energy Optimization", "DCS Controls", "Yield Maximization", "HAZOP"],
        salaryRange: "India: ₹5.5L - ₹25L+ | Global: $95K - $160K",
        educationPath: "B.Tech/M.Tech in Chemical Engineering",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Major Oil Corporations", "National Oil Companies (NOCs)"],
        futureScope: "Critical role ensuring global energy security while transitioning to cleaner petroleum processes.",
        jobDemandTrend: "Steady",
        certifications: ["Energy Management Certifications"],
        roadmap: ["Start as shift engineer at a refinery", "Specialize in specific conversion units", "Lead refinery optimization unit"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Polymer Engineer",
        description: "Design, analyze, and modify polymer materials (plastics, rubbers, composites) to meet specific industrial requirements.",
        summary: "Material innovators engineering stronger, lighter, and more sustainable plastics and rubbers.",
        skills: ["Polymer Chemistry", "Extrusion & Molding Processes", "Material Testing", "Rheology", "Composite Design"],
        salaryRange: "India: ₹4L - ₹14L | Global: $70K - $115K",
        educationPath: "B.Tech in Polymer/Chemical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Automotive", "Packaging", "Aerospace Composites", "Medical Devices"],
        futureScope: "High growth specifically in developing biodegradable and easily recyclable polymers.",
        jobDemandTrend: "Growing",
        certifications: ["Plastics Engineering Certifications"],
        roadmap: ["Degree in Polymer/Chemical Eng.", "Master molding processes", "Develop novel composite blends", "Senior Polymer Consultant"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Pharmaceutical Process Engineer",
        description: "Scale up laboratory drug syntheses into mass production without compromising extreme purity or FDA regulations.",
        summary: "The engineers scaling up life-saving drugs from test tubes to mass-produced batches.",
        skills: ["cGMP Compliance", "Reaction Engineering", "Sterilization Processes", "Scale-Up Design", "Validation protocols"],
        salaryRange: "India: ₹4.5L - ₹18L | Global: $85K - $135K",
        educationPath: "B.Tech in Chemical Engineering or B.Pharma + M.Tech in Pharmaceutical Operations",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Pharmaceuticals", "Biotech", "API Manufacturers"],
        futureScope: "Extremely secure, high-growth sector due to global healthcare demands and advanced biologics.",
        jobDemandTrend: "Consistently High",
        certifications: ["cGMP Training", "FDA Regulatory Affairs"],
        roadmap: ["Master reaction scaling", "Understand strict compliance codes", "Work in API manufacturing", "Lead Pharmaceutical Tech Transfer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Environmental Chemical Engineer",
        description: "Develop processes to reduce chemical waste, treat effluents, and ensure industrial compliance with environmental laws.",
        summary: "Green champions designing chemical systems that protect the planet from industrial waste.",
        skills: ["Effluent Treatment Plant (ETP) Design", "Scrubber Systems", "Air Pollution Control", "Carbon Capture", "EIA"],
        salaryRange: "India: ₹4L - ₹15L | Global: $75K - $120K",
        educationPath: "B.Tech in Chemical Engineering + M.Tech in Environmental Engineering",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Consultancies", "Mining", "All Chemical Manufacturing Plants", "Government Agencies"],
        futureScope: "Massive exponential growth globally to combat climate change and pollution regulations.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["LEED Certification", "ISO 14001 Auditor"],
        roadmap: ["Degree in Chemical Eng.", "Specialize in waste treatment", "Design zero-liquid-discharge (ZLD) systems", "Chief Sustainability Officer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Safety Engineer (Chemical Industry)",
        description: "Identify chemical hazards, design risk mitigation protocols, and ensure zero-accident environments in highly volatile plants.",
        summary: "The critical defense line preventing chemical explosions, spills, and catastrophic industrial accidents.",
        skills: ["HAZOP / HAZID", "Process Safety Management (PSM)", "Fire Protection Systems", "Risk Assessment", "Regulatory Compliance"],
        salaryRange: "India: ₹4.5L - ₹16L | Global: $80K - $125K",
        educationPath: "B.Tech in Chemical Engineering + Safety Diploma/Certifications",
        yearsOfStudy: "4.5 to 5 Years",
        industriesHiring: ["Refineries", "Petrochemicals", "Agrochemicals", "Auditing Firms"],
        futureScope: "Mandatory requirement in all chemical industries; completely insulated from economic downturns.",
        jobDemandTrend: "High Demand",
        certifications: ["NEBOSH", "Certified Safety Professional (CSP)"],
        roadmap: ["Chemical degree", "Acquire NEBOSH certification", "Conduct risk assessments", "Become HSE (Health, Safety, Environment) Head"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Research & Development (R&D) Engineer - Chemical",
        description: "Invent new chemical products, optimize catalysts, or pioneer entirely novel reaction processes in a laboratory setting.",
        summary: "Scientists pushing the boundaries of chemical reactions to invent tomorrow's revolutionary materials.",
        skills: ["Experimental Design", "Advanced Kinetics", "Catalyst Development", "Spectroscopy", "Patent Writing"],
        salaryRange: "India: ₹6L - ₹20L | Global: $90K - $140K",
        educationPath: "M.Tech or Ph.D. in Chemical Engineering or Applied Chemistry",
        yearsOfStudy: "6 to 8+ Years",
        industriesHiring: ["Specialty Chemicals", "Advanced Materials", "Corporate R&D Labs", "Academia"],
        futureScope: "Highly critical for developing next-gen sustainable materials, batteries, and pure catalysts.",
        jobDemandTrend: "Specialized, High Growth",
        certifications: ["Research Publications", "Patents Drafts"],
        roadmap: ["Master's or Ph.D.", "Postdoctoral research", "Join Corporate R&D lab", "Lead Research Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Chemical Engineering",
        title: "Biochemical Engineer",
        description: "Combine biological sciences and chemical engineering to design processes for producing biofuels, lab-grown food, or biomedicines.",
        summary: "Pioneers merging biology and chemical engineering to design sustainable biofuels and bioplastics.",
        skills: ["Bioreactor Design", "Fermentation Technology", "Downstream Processing", "Cell Culture", "Microbiology"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $135K",
        educationPath: "B.Tech in Biochemical or Chemical Engineering + M.Tech in Bioprocess Eng.",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Biofuels", "Biopharmaceuticals", "Alternative Proteins (Food Tech)", "Brewing/Distilling"],
        futureScope: "One of the most futuristic and fastest-growing niches to solve food and fuel crises.",
        jobDemandTrend: "Rapidly Emerging",
        certifications: ["Bioprocessing Certifications"],
        roadmap: ["Chemical Eng. degree", "Specialize in microbiology/bioreactors", "Work in synthetic biology lab", "Lead Bioprocess Designer"]
    }
];

const seedChemical = async () => {
    try {
        await Career.deleteMany({ branch: "Chemical Engineering" });
        await Career.insertMany(chemicalProfessions);
        console.log('Chemical Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedChemical();
