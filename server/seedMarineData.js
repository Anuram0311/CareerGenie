const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const marineProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Marine Design Engineer",
        description: "Focus on designing the mechanical systems, propulsion machinery, and internal layouts of marine vessels.",
        summary: "The creative architects drafting the internal mechanical blueprints and power systems for ocean-going vessels.",
        skills: ["AutoCAD / Rhino3D", "Marine Propulsion Systems", "Fluid Dynamics", "HVAC Design (Marine)", "Piping Design"],
        salaryRange: "India: ₹5L - ₹16L | Global: $75K - $130K",
        educationPath: "B.Tech in Marine or Mechanical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Ship Design Consultancies", "Naval Engineering Firms", "Defense Contractors"],
        futureScope: "Steady demand with a strong push toward designing hybrid and zero-emission marine propulsion systems.",
        jobDemandTrend: "Stable",
        certifications: ["Ship Design Software Certifications"],
        roadmap: ["Degree in Marine Eng", "Master marine design software", "Work under senior naval architect", "Lead Marine Designer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Shipbuilding Engineer",
        description: "Manage and oversee the physical construction, welding, and assembly of ships in massive dry docks.",
        summary: "On-site commanders turning digital blueprints into massive floating steel structures.",
        skills: ["Shipyard Management", "Heavy Welding Standards", "Quality Control", "Structural Assembly", "Project Management"],
        salaryRange: "India: ₹4L - ₹15L | Global: $70K - $125K",
        educationPath: "B.Tech in Marine Engineering or Naval Architecture",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Shipyards", "Defense / Navy Ports", "Commercial Port Authorities"],
        futureScope: "Consistently required as global trade relies heavily on the continuous construction of larger cargo vessels.",
        jobDemandTrend: "Consistent",
        certifications: ["PMP", "Welding Inspection Certification (CSWIP)"],
        roadmap: ["Marine Degree", "Gain shipyard floor experience", "Learn heavy structural assembly", "Shipyard Operations Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Marine Maintenance Engineer",
        description: "Perform critical maintenance, diagnostics, and repairs on vessel engines and auxiliary systems while out at sea.",
        summary: "The ultimate frontline troubleshooters keeping massive cargo ships powered in the middle of the ocean.",
        skills: ["Engine Diagnostics", "Hydraulics", "Pneumatics", "Generator Maintenance", "Safety Protocols (SOLAS)"],
        salaryRange: "India: ₹8L - ₹25L+ | Global: $90K - $160K+",
        educationPath: "B.Tech in Marine Engineering + STCW Certifications",
        yearsOfStudy: "4 Years + Sea Time",
        industriesHiring: ["Merchant Navy", "Cruise Lines", "Offshore Logistics fleets"],
        futureScope: "Extremely high paying and secure, heavily dependent on global shipping supply chains.",
        jobDemandTrend: "High Demand",
        certifications: ["Marine Engineer Officer Certificate of Competency (CoC)"],
        roadmap: ["B.Tech Marine", "Sail as Junior Engineer", "Pass CoC exams", "Promote to Chief Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Offshore Engineer",
        description: "Design, construct, and maintain stationary offshore structures like oil rigs, wind farms, and deep-sea drilling platforms.",
        summary: "Specialists building and maintaining extreme man-made structures anchored in the deep ocean.",
        skills: ["Offshore Structural Design", "Subsea Mooring", "Wave Mechanics", "Corrosion Control", "SACS Software"],
        salaryRange: "India: ₹7L - ₹22L | Global: $95K - $155K",
        educationPath: "B.Tech in Civil/Marine Engineering + M.Tech Offshore Structures",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Oil & Gas Explorers", "Offshore Wind Developers", "Heavy Marine Contractors"],
        futureScope: "Transitioning rapidly from fossil fuel rigs directly into massive offshore wind farm installations.",
        jobDemandTrend: "Adapting and Growing",
        certifications: ["BOSIET (Basic Offshore Safety)"],
        roadmap: ["Engineering degree", "Master wave dynamics and corrosion", "Work on rig installations", "Lead Offshore Structural Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Naval Architect",
        description: "Design the hull shape, stability, buoyancy, and overall hydrodynamics of every type of marine vessel.",
        summary: "The masterminds behind the external shape and physics that keep massive iron ships floating perfectly.",
        skills: ["Hydrodynamics", "Stability Calculations (Maxsurf)", "Hull Form Optimization", "Finite Element Analysis"],
        salaryRange: "India: ₹6L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Tech in Naval Architecture",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Shipyards", "Defense/Navy", "Luxury Yacht Builders", "Marine Consultancies"],
        futureScope: "High demand for optimizing hull shapes to severely cut fuel costs in global shipping.",
        jobDemandTrend: "Stable Growth",
        certifications: ["Naval Architecture Professional Licenses"],
        roadmap: ["Naval Architecture degree", "Focus heavily on fluid dynamics", "Join ship design consultancy", "Principal Naval Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Marine Electrical Engineer",
        description: "Design and maintain the massive electrical power generation and distribution grids operating isolated aboard ships.",
        summary: "Experts running floating mini-power grids that keep every system on the vessel alive.",
        skills: ["High Voltage Systems", "Marine Switchboards", "Automation (PLC)", "Power Distribution", "Navigation Electronics"],
        salaryRange: "India: ₹6L - ₹22L | Global: $85K - $145K",
        educationPath: "B.Tech in Electrical/Marine Engineering (Electro-Technical Officer course)",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Merchant Navy", "Cruise Ships", "Shipbuilders"],
        futureScope: "Critical role as ships become increasingly automated and switch to diesel-electric hybrid engines.",
        jobDemandTrend: "High Demand",
        certifications: ["Electro-Technical Officer (ETO) Certification"],
        roadmap: ["Electrical degree", "Complete ETO course", "Sail on commercial ships", "Chief Electro-Technical Officer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Marine Surveyor",
        description: "Inspect ships and offshore structures to ensure compliance with maritime laws, assess damage for insurance, and certify seaworthiness.",
        summary: "The ultimate maritime inspectors ensuring the legal and physical safety of international shipping.",
        skills: ["Maritime Regulations (IMO/MARPOL)", "Non-Destructive Testing (NDT)", "Condition Assessment", "Report Writing"],
        salaryRange: "India: ₹7L - ₹25L | Global: $90K - $150K",
        educationPath: "B.Tech Marine + Years of sea service (usually Chief Engineers/Captains)",
        yearsOfStudy: "4 Years + 10 Years Experience",
        industriesHiring: ["Classification Societies (DNV, Lloyd's)", "Marine Insurance Companies", "Government Maritime Boards"],
        futureScope: "Highly respected, lucrative, and eternally required by international maritime law.",
        jobDemandTrend: "Specialized, Stable",
        certifications: ["Registered Marine Surveyor", "Lead Auditor Training"],
        roadmap: ["Sail for 10+ years to Chief Engineer", "Move ashore", "Join classification society", "Senior Marine Inspector"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Port & Harbor Engineer",
        description: "Design, construct, and manage civil marine infrastructure like docks, breakwaters, and deep-water terminals.",
        summary: "Civil-marine specialists building the massive infrastructure where the ocean meets the land.",
        skills: ["Coastal Engineering", "Dredging Operations", "Geotechnical Engineering", "Breakwater Design", "Port Operations Layout"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Tech in Civil/Marine Engineering + M.Tech Coastal Engineering",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Port Authorities", "Heavy Civil Contractors", "Logistics Corporations", "Government"],
        futureScope: "Growing globally as ships get larger, requiring deeper ports and stronger coastal defenses against rising seas.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Coastal Engineering specific certs"],
        roadmap: ["Civil Eng degree", "Master coastal hydrodynamics", "Work on port expansions", "Chief Port Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Subsea Engineer",
        description: "Design and deploy equipment operating entirely underwater, such as pipelines, wellheads, and remotely operated vehicles (ROVs).",
        summary: "Extreme engineers building robots and pipelines designed to survive the crushing pressure of the ocean floor.",
        skills: ["Subsea Pipeline Design", "ROV Operations", "Pressure Vessel Mechanics", "Underwater Acoustics", "Corrosion Engineering"],
        salaryRange: "India: ₹8L - ₹28L | Global: $100K - $160K+",
        educationPath: "B.Tech Mechanical/Marine + Master's in Subsea Engineering",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Deepwater Oil & Gas", "Undersea Telecom Cable firms", "Oceanographic Research"],
        futureScope: "Highly lucrative and vital for tapping deep ocean energy reserves and laying global internet backbone cables.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["Subsea Engineering / ROV Pilot training"],
        roadmap: ["Engineering degree", "Master hyperbaric mechanics", "Work on offshore ROV teams", "Subsea Systems Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Marine Systems Engineer",
        description: "Integrate multiple distinct sub-systems (propulsion, navigation, life support) into one cohesive, functioning vessel architecture.",
        summary: "The grand architects ensuring all individual complex ship systems 'talk' to each other perfectly.",
        skills: ["Systems Integration", "Requirement Analysis", "FMEA", "Cross-disciplinary Knowledge"],
        salaryRange: "India: ₹6L - ₹20L | Global: $85K - $135K",
        educationPath: "B.Tech Marine/Electrical + Systems Engineering experience",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Shipbuilders", "Defense Fleet Navies", "Marine Consultancies"],
        futureScope: "Crucial as ships transition to highly complex 'smart' vessels requiring heavy software-hardware integration.",
        jobDemandTrend: "Growing",
        certifications: ["Systems Engineering Professional (INCOSE)"],
        roadmap: ["Marine degree", "Understand both software and engine mechanics", "Work in integration yard", "Lead Systems Integrator"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Ship Operations Engineer",
        description: "Work ashore for shipping lines to oversee the technical, routing, and fuel efficiency performance of entire fleets of vessels.",
        summary: "The onshore commanders managing logistics and efficiency for fleets traversing the globe.",
        skills: ["Fleet Management", "Fuel Optimization", "Logistics Planning", "Regulatory Compliance", "Data Analytics"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Tech Marine Engineering + MBA in Maritime/Logistics",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Global Shipping Lines (Maersk, MSC)", "Logistics Startups", "Port Operators"],
        futureScope: "Evolving into a highly data-driven role focusing on cutting fuel consumption via AI routing.",
        jobDemandTrend: "Steady",
        certifications: ["Maritime Law and Logistics"],
        roadmap: ["Marine degree", "Sail briefly or enter shipping logistics", "Learn AI routing tech", "Fleet Technical Superintendent"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Marine Engineering",
        title: "Marine Safety Engineer",
        description: "Design risk mitigation protocols, fire suppression systems, and evacuation routes for ships and offshore platforms.",
        summary: "The ultimate safety line preventing maritime disasters and protecting lives at sea.",
        skills: ["Safety Management Systems (ISM Code)", "Fire Dynamics", "Risk Assessment", "Regulatory Compliance (SOLAS)"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $125K",
        educationPath: "B.Tech Marine + Marine Safety Certifications",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Cruise Lines", "Offshore Oil Rigs", "Shipyards", "Government Coast Guards"],
        futureScope: "Absolutely essential and heavily regulated by international maritime law, meaning zero job cuts during downturns.",
        jobDemandTrend: "Consistently High",
        certifications: ["NEBOSH", "Advanced Marine Firefighting"],
        roadmap: ["Marine background", "Acquire international safety certificates", "Audit vessels", "Head of Maritime Safety"]
    }
];

const seedMarine = async () => {
    try {
        await Career.deleteMany({ branch: "Marine Engineering" });
        await Career.insertMany(marineProfessions);
        console.log('Marine Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedMarine();
