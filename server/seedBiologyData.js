const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const biologyProfessions = [
    {
        domain: "Science",
        branch: "Biology",
        title: "Microbiologist",
        description: "Study microscopic organisms such as bacteria, viruses, algae, and fungi, understanding their life cycles to combat diseases or create new antibiotics.",
        summary: "The microscopic detectives analyzing bacteria and viruses to protect global health.",
        skills: ["Microbial Culturing", "PCR / Gel Electrophoresis", "Aseptic Techniques", "Virology", "Quality Control"],
        salaryRange: "India: ₹4L - ₹12L | Global: $65K - $110K",
        educationPath: "B.Sc Microbiology → M.Sc Microbiology",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Pharmaceuticals", "Healthcare/Hospitals", "Food & Beverage Quality", "Agrochemicals"],
        futureScope: "Extremely vital. The ongoing fight against antibiotic-resistant bacteria ensures massive long-term job security.",
        jobDemandTrend: "Consistently High",
        certifications: ["Clinical Microbiology Certification"],
        roadmap: ["Microbiology degree", "Work in clinical labs analyzing samples", "Research new antibiotics", "Senior Microbiologist"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Geneticist",
        description: "Analyze the fundamental DNA of humans, animals, and plants to understand how traits are inherited, discovering the root biological causes of inherited diseases.",
        summary: "The DNA specialists mapping the genetic blueprints of life to cure inherited diseases.",
        skills: ["DNA Sequencing", "Bioinformatics (Python/R)", "CRISPR/Gene Editing Basics", "Statistical Analysis", "Cytogenetics"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $135K",
        educationPath: "B.Sc Genetics/Biology → M.Sc Genetics → Ph.D",
        yearsOfStudy: "5 to 8+ Years",
        industriesHiring: ["Biotechnology", "Hospitals (Clinical Genetics)", "Agricultural Research", "Forensics"],
        futureScope: "Explosive growth. Gene-editing technologies like CRISPR are revolutionizing human healthcare and agriculture globally.",
        jobDemandTrend: "High Growth",
        certifications: ["American Board of Medical Genetics (or equivalent)"],
        roadmap: ["Ph.D in Genetics", "Analyze large genomic datasets", "Develop gene-therapy targets", "Principal Geneticist"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Biotechnologist",
        description: "Combine biological sciences with modern technology to modify living organisms, creating vaccines, bio-fuels, and genetically modified drought-resistant crops.",
        summary: "The bio-engineers using living cells as microscopic factories to produce medicine and fuels.",
        skills: ["Recombinant DNA Technology", "Fermentation Processes", "Cell Line Development", "Downstream Processing", "GLP/GMP Standards"],
        salaryRange: "India: ₹5L - ₹15L | Global: $75K - $125K",
        educationPath: "B.Tech/B.Sc Biotechnology → M.Tech/M.Sc",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Biopharma Startups", "Bio-Energy", "Agricultural Biotech", "Cosmetics"],
        futureScope: "The backbone of modern medicine. Crucial for producing synthetic insulin, mRNA vaccines, and lab-grown meat.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Bioprocessing/GMP Certifications"],
        roadmap: ["Biotech degree", "Master cell culturing techniques", "Scale up bio-manufacturing", "Lead Bioprocess Engineer"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Molecular Biologist",
        description: "Study the exact physical and chemical interactions between complex biological molecules (like RNA, DNA, and proteins) that govern single-cell operation.",
        summary: "The ultimate cell-mechanics studying exactly how RNA and proteins interact to keep cells alive.",
        skills: ["Western Blotting", "Gene Cloning", "Flow Cytometry", "Protein Purification", "Molecular Assays"],
        salaryRange: "India: ₹6L - ₹16L | Global: $80K - $130K",
        educationPath: "B.Sc Biology → M.Sc Molecular Biology → Ph.D",
        yearsOfStudy: "8 Years",
        industriesHiring: ["Cancer Research Institutes", "Pharmaceuticals", "National Health Labs", "Academia"],
        futureScope: "Fundamental to all future cancer research and personalized medicine (creating drugs tailored to an individual’s DNA).",
        jobDemandTrend: "Steady, Highly Specialized",
        certifications: ["Advanced Laboratory Techniques Certifications"],
        roadmap: ["Ph.D in Molecular Biology", "Research specific cellular pathways", "Discover new drug targets", "Head of Molecular Research"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Zoologist",
        description: "Study the evolution, anatomy, behavior, and habitats of animals, working both in extreme field environments and controlled laboratory settings.",
        summary: "The animal experts studying species evolution, behavior, and physical anatomy across the globe.",
        skills: ["Animal Behavior Analysis", "Taxonomy", "Field Research/Survival", "Data Collection", "Statistical Modeling"],
        salaryRange: "India: ₹4L - ₹10L | Global: $60K - $100K",
        educationPath: "B.Sc Zoology → M.Sc Zoology",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Zoos and Aquariums", "Wildlife Conservation NGOs", "Government Wildlife Departments", "Academia"],
        futureScope: "Crucial for species preservation and understanding zoonotic diseases (viruses jumping from animals to humans).",
        jobDemandTrend: "Stable, Niche",
        certifications: ["Wildlife Handling/Rehabilitation"],
        roadmap: ["Zoology degree", "Conduct extensive field research", "Publish animal behavior studies", "Chief Conservation Officer"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Botanist",
        description: "Specialize entirely in the study of plant life, researching plant genetics, diseases, and their crucial role in massive global ecosystems.",
        summary: "The plant scientists studying everything from microscopic algae to massive redwood forests.",
        skills: ["Plant Taxonomy", "Agrostology", "Soil Science Basics", "Field Mapping (GIS)", "Genomics basics"],
        salaryRange: "India: ₹4L - ₹10L | Global: $60K - $95K",
        educationPath: "B.Sc Botany → M.Sc Botany",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Agricultural Corporations", "Botanical Gardens", "Forestry Departments", "Environmental Consultancies"],
        futureScope: "Highly relevant. Botanists are directly at the forefront of creating genetically modified crops to survive extreme climate change.",
        jobDemandTrend: "Stable",
        certifications: ["Certified Professional Soil Scientist or Agronomist"],
        roadmap: ["Botany degree", "Classify rare plant species", "Develop drought-resistant crops", "Senior Botanist"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Marine Biologist",
        description: "Study the incredible diversity of life operating entirely underwater, from microscopic plankton to massive deep-sea whales, and the health of their oceanic habitats.",
        summary: "Oceanic researchers studying the complex ecosystems and incredibly strange life forms living deep underwater.",
        skills: ["SCUBA Diving", "Oceanography basics", "Marine Conservation", "Sonar Mapping Analysis", "Statistical Software"],
        salaryRange: "India: ₹5L - ₹12L | Global: $65K - $100K",
        educationPath: "B.Sc Marine Biology / Zoology → M.Sc",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Aquariums", "Marine Research Institutes", "Fisheries Departments", "Environmental NGOs"],
        futureScope: "Crucial for monitoring the devastating effects of ocean acidification and overfishing on global food supplies.",
        jobDemandTrend: "Highly Competitive",
        certifications: ["Advanced SCUBA (PADI/NAUI)", "Boating Licenses"],
        roadmap: ["Marine Biology degree", "Log extensive underwater hours", "Publish coral/species research", "Director of Marine Conservation"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Wildlife Biologist",
        description: "Focus purely on how wild animals interact directly with their ecosystems, spending heavy amounts of time in remote wilderness tracking population changes.",
        summary: "The wilderness trackers heavily monitoring the health and migration patterns of endangered species.",
        skills: ["Population Tracking (Telemetry/GPS)", "Wildlife Trafficking Laws", "Ecosystem Management", "Survival Skills", "Data Analysis"],
        salaryRange: "India: ₹4L - ₹10L | Global: $60K - $95K",
        educationPath: "B.Sc Wildlife Biology / Forestry → M.Sc",
        yearsOfStudy: "5 Years",
        industriesHiring: ["National Parks Service", "Forestry Commissions", "Wildlife NGOs (WWF)", "Eco-Tourism"],
        futureScope: "A difficult, physical career completely necessary for attempting to stop the ongoing global mass extinction of wildlife.",
        jobDemandTrend: "Competitive, Niche",
        certifications: ["Wildlife Tracking and Immobilization Training"],
        roadmap: ["Wildlife Biology degree", "Live in field stations for months", "Manage massive national park habitats", "Chief Wildlife Warden"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Clinical Research Scientist",
        description: "Design, oversee, and rigorously document massive human clinical trials to test the sheer safety and efficacy of newly invented pharmaceuticals.",
        summary: "The medical trial directors ensuring new drugs actually cure patients without causing deadly side effects.",
        skills: ["Clinical Trial Design", "FDA/EMA Regulations", "Data Management", "Bioethics", "Pharmacovigilance"],
        salaryRange: "India: ₹6L - ₹18L | Global: $85K - $140K",
        educationPath: "B.Sc Life Sciences → M.Sc Clinical Research",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Contract Research Orgs (CROs)", "Major Pharmaceuticals", "Research Hospitals"],
        futureScope: "Extremely high demand. No pharmaceutical company can legally sell a drug without employing clinical researchers to prove it works.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Clinical Research Professional (CCRP)"],
        roadmap: ["Clinical Research degree", "Monitor initial Phase-1 trials", "Oversee massive global Phase-3 trials", "Director of Clinical Operations"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Biomedical Scientist",
        description: "Operate strictly inside healthcare laboratories analyzing human tissue, blood, and fluids to diagnose severe illnesses and directly aid doctors in patient treatment.",
        summary: "The critical hospital scientists running the deep pathology tests that doctors use to diagnose patients.",
        skills: ["Histology", "Hematology", "Clinical Biochemistry", "Immunology", "Laboratory Automation"],
        salaryRange: "India: ₹5L - ₹14L | Global: $70K - $115K",
        educationPath: "B.Sc Biomedical Science",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Hospitals (Pathology Depts)", "Private Diagnostic Labs", "Public Health Boards", "Blood Banks"],
        futureScope: "Massive volume of jobs available constantly. The global healthcare system collapses immediately without biomedical scientists running blood tests.",
        jobDemandTrend: "Extremely High Volume",
        certifications: ["State Registration as a Biomedical Scientist"],
        roadmap: ["Biomedical degree", "Master all hospital pathology departments", "Manage elite diagnostic machines", "Chief Pathology Scientist"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Ecologist",
        description: "Study the incredibly complex, mathematical relationships between thousands of different organisms, plants, and the physical environment inside a single ecosystem.",
        summary: "The big-picture scientists analyzing how entire forests, deserts, and oceans function as single living systems.",
        skills: ["Ecosystem Modeling", "GIS Mapping", "Statistical R/Python", "Biodiversity Auditing", "Environmental Impact Assessments (EIA)"],
        salaryRange: "India: ₹5L - ₹12L | Global: $65K - $105K",
        educationPath: "B.Sc Ecology / Environmental Biology → M.Sc",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Environmental Consultancies", "Government Planning Departments", "Mining (Reclamation)", "NGOs"],
        futureScope: "Highly relevant. Corporations are now legally mandated to hire ecologists to prove their factories will not destroy local ecosystems.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Certified Ecologist (ESA)"],
        roadmap: ["Ecology degree", "Conduct corporate EIAs", "Model climate change impact on massive biomes", "Senior Consulting Ecologist"]
    },
    {
        domain: "Science",
        branch: "Biology",
        title: "Biology Professor / Lecturer",
        description: "Teach highly complex biological sciences at the university level while independently securing grant funding to run a specialized cellular or environmental research lab.",
        summary: "The academic leaders responsible for educating the entire next generation of doctors, geneticists, and scientists.",
        skills: ["Pedagogy", "Grant Writing", "Scientific Publishing", "Curriculum Design", "PhD-level Independent Research"],
        salaryRange: "India: ₹6L - ₹20L | Global: $75K - $130K",
        educationPath: "B.Sc → M.Sc → Ph.D in Biological Sciences",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Universities", "Pre-Med Elite Colleges", "Research Institutes"],
        futureScope: "Highly prestigious and stable, providing the ability to conduct independent research without corporate profit pressures.",
        jobDemandTrend: "Steady, Competitive",
        certifications: ["State Level Eligibility Test (SLET/NET)"],
        roadmap: ["Complete Ph.D", "Complete Postdoc research", "Secure tenure-track teaching position", "Tenured Biology Professor"]
    }
];

const seedBiology = async () => {
    try {
        await Career.deleteMany({ branch: "Biology" });
        await Career.insertMany(biologyProfessions);
        console.log('Biology Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedBiology();
