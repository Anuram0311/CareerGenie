const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const environmentalProfessions = [
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Environmental Scientist",
        description: "Analyze environmental data to identify hazards to the ecological balance and human health, developing strategies to eliminate pollution.",
        summary: "The foundational researchers tracking pollution and developing active strategies to heal the planetary ecosystem.",
        skills: ["Environmental Sampling", "Data Analysis (R/Python)", "GIS Mapping", "Toxicology", "Regulatory Compliance"],
        salaryRange: "India: ₹5L - ₹15L | Global: $65K - $110K",
        educationPath: "B.Sc Environmental Science → M.Sc Environmental Science",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Government Agencies (EPA)", "Environmental Consultancies", "Manufacturing", "NGOs"],
        futureScope: "Extremely stable. Every major infrastructure project globally requires environmental scientists to assess ecological damage.",
        jobDemandTrend: "Consistently High",
        certifications: ["Certified Environmental Professional (CEP)"],
        roadmap: ["Degree in Enviro-Science", "Conduct field sampling and data gathering", "Lead environmental impact studies", "Senior Environmental Scientist"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Environmental Consultant",
        description: "Advise large corporations and governments on how to minimize their environmental footprint and strictly adhere to complex green regulations.",
        summary: "The corporate advisors bridging the gap between heavy industry profits and strict environmental laws.",
        skills: ["Environmental Law", "Corporate Sustainability", "Risk Assessment", "Auditing (ISO 14001)", "Report Writing"],
        salaryRange: "India: ₹6L - ₹18L | Global: $75K - $130K",
        educationPath: "B.Sc/B.Tech Environmental Science → MBA or M.Sc",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Big 4 Consultancies", "Oil & Gas", "Construction", "Renewable Energy"],
        futureScope: "Massive growth. As 'Carbon Taxes' and ESG (Environmental, Social, Governance) regulations become law, consultants are legally required.",
        jobDemandTrend: "High Growth",
        certifications: ["ISO 14001 Lead Auditor"],
        roadmap: ["Enviro-Science Degree", "Audit corporate pollution output", "Advise executives on green strategies", "Partner / Principal Consultant"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Climate Change Analyst",
        description: "Analyze massive historical climate datasets to model future global warming trends, helping governments prepare for rising sea levels and extreme weather.",
        summary: "The specialized data scientists forecasting exactly how climate change will physically alter the planet.",
        skills: ["Climate Modeling", "Python / R", "Big Data Analysis", "Meteorology Basics", "Policy Analysis"],
        salaryRange: "India: ₹7L - ₹20L | Global: $80K - $125K",
        educationPath: "B.Sc Physics/Environmental Sci → M.Sc Climate Science",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["United Nations / IPCC", "Government Policy Think Tanks", "Insurance Corporations (Risk Analysis)"],
        futureScope: "Crucial. Their predictive models dictate trillion-dollar decisions regarding coastal city defenses and agricultural planning.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Data Analytics / Python Certifications"],
        roadmap: ["Climate Science degree", "Model local weather shifts", "Predict global macro-climate changes", "Chief Climate Strategist"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Sustainability Specialist",
        description: "Work internally within a major corporation to overhaul their supply chain, energy use, and waste management to achieve a 'Net Zero' carbon footprint.",
        summary: "The internal corporate champions dedicated to turning massive, wasteful companies into lean, green operations.",
        skills: ["Life Cycle Assessment (LCA)", "ESG Reporting", "Energy Efficiency", "Supply Chain Auditing", "Stakeholder Engagement"],
        salaryRange: "India: ₹6L - ₹22L | Global: $75K - $135K",
        educationPath: "B.Sc Environmental Sci → M.Sc Sustainability / MBA",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Tech Giants (Apple/Google)", "FMCG (Unilever/Nestle)", "Fashion Industry", "Automotive"],
        futureScope: "Extremely lucrative. Every Fortune 500 company has pledged to become carbon neutral, requiring a dedicated sustainability department.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["LEED Green Associate", "GRI Sustainability Reporting"],
        roadmap: ["Degree in Sustainability", "Audit company energy usage", "Execute company-wide green initiatives", "Chief Sustainability Officer (CSO)"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Environmental Engineer (Science Background)",
        description: "Design physical systems and technologies to solve environmental issues, such as massive water treatment plants, air scrubbers, and recycling centers.",
        summary: "The builders designing the actual physical technology that cleans our water, air, and soil.",
        skills: ["Water Treatment Design", "Solid Waste Management", "AutoCAD", "Fluid Mechanics", "Air Pollution Control"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $135K",
        educationPath: "B.Tech Environmental Engineering / Civil Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Municipal Water Boards", "Heavy Engineering Firms", "Mining", "Waste Management Corps"],
        futureScope: "Highly stable. As populations grow, the physical engineering required to supply clean water and remove waste becomes drastically more complex.",
        jobDemandTrend: "Consistent",
        certifications: ["Professional Engineer (PE) License"],
        roadmap: ["Engineering Degree", "Design local water treatment systems", "Scale to massive industrial waste plants", "Lead Environmental Engineer"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Environmental Ecologist",
        description: "Study how local ecosystems react to pollution, logging, or urbanization, working to restore damaged habitats to their natural state.",
        summary: "The ecosystem restorers dedicated to fixing forests, rivers, and wetlands that have been damaged by human activity.",
        skills: ["Habitat Restoration", "Biodiversity Auditing", "Field Taxonomy", "GIS Mapping", "Botany/Zoology Basics"],
        salaryRange: "India: ₹5L - ₹14L | Global: $65K - $105K",
        educationPath: "B.Sc Ecology / Environmental Science → M.Sc",
        yearsOfStudy: "5 Years",
        industriesHiring: ["National Parks", "Environmental NGOs", "Mining (Reclamation departments)", "Forestry Comissions"],
        futureScope: "Crucial for 're-wilding' efforts. Legally mandated by governments when mining or logging companies finish extracting resources.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Certified Ecological Restoration Practitioner (CERP)"],
        roadmap: ["Ecology degree", "Survey damaged habitats", "Execute large-scale forest restorations", "Chief Restorative Ecologist"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Conservation Scientist",
        description: "Manage, improve, and protect natural resources (like massive forests and fresh water lakes) to maximize their use without permanently depleting them.",
        summary: "The resource managers balancing human needs (like logging and water) with the absolute survival of the natural environment.",
        skills: ["Natural Resource Management", "Forestry", "Soil Conservation", "Policy Enforcement", "Agroforestry"],
        salaryRange: "India: ₹5L - ₹15L | Global: $65K - $110K",
        educationPath: "B.Sc Forestry / Conservation Science → M.Sc",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Government Forestry Departments", "Lumber/Paper Corporations", "Wildlife Trusts", "Agriculture"],
        futureScope: "Very stable. With the threat of global resource depletion, strict scientific management of remaining forests and water is mandatory.",
        jobDemandTrend: "Stable",
        certifications: ["Society of American Foresters (SAF) certification"],
        roadmap: ["Conservation degree", "Monitor forest yields", "Design sustainable logging quotas", "Director of Natural Resources"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Environmental Policy Analyst",
        description: "Analyze scientific data to draft, evaluate, and lobby for new government laws regarding pollution, carbon emissions, and wildlife protection.",
        summary: "The law-makers turning hard environmental science into strict, enforceable government legislation.",
        skills: ["Environmental Law", "Policy Drafting", "Public Speaking/Lobbying", "Scientific Literacy", "Economics"],
        salaryRange: "India: ₹6L - ₹20L | Global: $75K - $130K",
        educationPath: "B.Sc Environmental Science → Master of Public Policy (MPP)",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Government Ministries (EPA/MoEFCC)", "Think Tanks", "International NGOs (Greenpeace)", "Lobbying Firms"],
        futureScope: "Extremely influential. A single policy analyst can draft an emissions law that forces an entire global industry to change its practices.",
        jobDemandTrend: "Competitive, High Influence",
        certifications: ["Public Policy / Environmental Law degrees"],
        roadmap: ["Science degree + Policy masters", "Research legislative impact", "Draft national environmental regulations", "Senior Policy Advisor"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Waste Management Specialist",
        description: "Design massive logistical structures to safely process, recycle, and dispose of municipal trash, electronic waste (e-waste), and toxic bio-hazards.",
        summary: "The logistical engineers solving the massive global crisis of where to safely put humanity's garbage and toxic e-waste.",
        skills: ["Hazardous Waste Handling (HAZWOPER)", "Recycling Logistics", "Landfill Engineering basics", "Circular Economy", "Regulatory Compliance"],
        salaryRange: "India: ₹5L - ₹16L | Global: $70K - $115K",
        educationPath: "B.Sc Environmental Science / B.Tech Engineering",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Municipal Waste Boards", "E-Waste Recycling Startups", "Nuclear/Chemical Plants", "Hospitals"],
        futureScope: "A rapidly modernizing industry. Transforming waste from a 'problem' into a profitable 'circular economy' (like mining e-waste for gold).",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Certified Solid Waste Management Professional"],
        roadmap: ["Enviro-Science Degree", "Manage local recycling logistics", "Design city-wide zero-waste systems", "Director of Waste Operations"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Water Resource Specialist",
        description: "Monitor and manage the quality, distribution, and preservation of massive fresh water supplies, including underground aquifers and major rivers.",
        summary: "The hydrologists intensely protecting and managing humanity's most critical and scarce resource: clean drinking water.",
        skills: ["Hydrology", "Water Quality Testing", "Aquifer Mapping", "Drought Management", "Fluid Dynamics Basics"],
        salaryRange: "India: ₹6L - ₹18L | Global: $75K - $125K",
        educationPath: "B.Sc Earth Science/Environmental Sci → M.Sc Hydrology",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Water Utility Companies", "Agricultural Giants", "Beverage Corporations (Coca-Cola/Pepsi)", "Government"],
        futureScope: "Critical. As global warming triggers extreme droughts, managing surviving fresh water resources will become one of the most important jobs on Earth.",
        jobDemandTrend: "High Demand, Critical",
        certifications: ["Certified Hydrologist"],
        roadmap: ["Hydrology degree", "Monitor local river basins", "Design state-wide drought survival protocols", "Chief Water Resource Manager"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Environmental Research Scientist",
        description: "Conduct fundamental lab and field research to discover new ways microplastics spread, how new toxins affect biology, or how to invent biodegradable alternatives.",
        summary: "The deepest level academics pushing the boundaries of what we know about humanity's impact on the Earth.",
        skills: ["Experimental Design", "Advanced Chromatography", "Ecotoxicology", "Grant Writing", "Scientific Publication"],
        salaryRange: "India: ₹7L - ₹20L | Global: $85K - $135K",
        educationPath: "B.Sc → M.Sc → Ph.D in Environmental Science",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Universities", "National Research Institutes", "Advanced Corporate R&D"],
        futureScope: "Highly prestigious. These are the scientists who first prove issues exist (like the depletion of the ozone layer or microplastics in blood).",
        jobDemandTrend: "Steady, Academic",
        certifications: ["Postdoctoral research fellowships"],
        roadmap: ["Ph.D in Enviro-Science", "Publish high-impact environmental studies", "Secure major research grants", "Tenured Principal Investigator"]
    },
    {
        domain: "Science",
        branch: "Environmental Science",
        title: "Environmental Impact Assessment (EIA) Analyst",
        description: "Specialists dedicated entirely to producing the massive, legally required 'EIA' reports that detail exactly how a new dam, highway, or factory will damage the earth before it is built.",
        summary: "The legal-scientific analysts who can stop a multi-billion dollar construction project if it will destroy too much nature.",
        skills: ["EIA Report Writing", "Regulatory Law (NEPA/CEQA)", "Multidisciplinary Science", "Stakeholder Mediation", "GIS"],
        salaryRange: "India: ₹6L - ₹18L | Global: $75K - $125K",
        educationPath: "B.Sc Environmental Science → M.Sc/PG Diploma in EIA",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Environmental Consultancies", "Real Estate Developers", "Government Infrastructure Boards", "Mining"],
        futureScope: "Mandatory by law in almost every country on Earth. No major infrastructure gets built without an EIA analyst approving it.",
        jobDemandTrend: "Extremely High Volume",
        certifications: ["Registered EIA Coordinator"],
        roadmap: ["Enviro-Science Degree", "Assist on local EIA reports", "Lead massive national infrastructure EIAs", "Senior EIA Principal Consulting Partner"]
    }
];

const seedEnvironmental = async () => {
    try {
        await Career.deleteMany({ branch: "Environmental Science" });
        await Career.insertMany(environmentalProfessions);
        console.log('Environmental Science Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedEnvironmental();
