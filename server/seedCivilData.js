const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const civilProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Structural Engineer",
        description: "Analyze, design, plan, and research structural components and structural systems to achieve design goals and ensure the safety and comfort of users or occupants.",
        summary: "Architects of safety and stability in buildings and large infrastructures.",
        skills: ["STAAD Pro", "ETABS", "AutoCAD", "Structural Analysis", "Steel & Concrete Design"],
        salaryRange: "India: ₹4L - ₹15L | Global: $70K - $120K",
        educationPath: "B.Tech/B.E. in Civil Engineering, often followed by M.Tech in Structural Engineering",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Construction", "Consulting Firms", "Infrastructure Developers", "Government Agencies"],
        futureScope: "Steady demand for building safer, taller, and more earthquake-resistant structures globally.",
        jobDemandTrend: "Stable and High",
        certifications: ["Chartered Engineer (CEng)", "SE (Structural Engineer) License"],
        roadmap: ["Earn Civil Engineering degree", "Specialize in structures (M.Tech)", "Learn structural software", "Become a licensed Structural Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Site Engineer (Civil)",
        description: "Manage parts of a construction project, organize staff, oversee quality control, and ensure health and safety checks are adhered to.",
        summary: "On-ground managers ensuring construction blueprints become physical reality safely and on time.",
        skills: ["Site Management", "Quality Control", "Surveying", "Health & Safety", "Basic AutoCad"],
        salaryRange: "India: ₹3L - ₹10L | Global: $60K - $95K",
        educationPath: "B.Tech/B.E. or Diploma in Civil Engineering",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Contractors", "Real Estate Builders", "Infrastructure Companies"],
        futureScope: "Evergreen demand directly tied to urbanization and housing needs.",
        jobDemandTrend: "Consistently High",
        certifications: ["OSHA Safety Certification", "Construction Management Courses"],
        roadmap: ["Graduate in Civil Eng.", "Start as Junior Site Engineer", "Gain practical execution experience", "Promote to Senior Site Engineer or Project Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Construction Engineer",
        description: "Combine engineering and management skills to oversee the planning, design, and construction of large infrastructure projects like roads, buildings, and dams.",
        summary: "The link between the design team and the site execution team.",
        skills: ["Project Management", "Cost Estimation", "Scheduling (Primavera/MS Project)", "Contract Administration"],
        salaryRange: "India: ₹4.5L - ₹18L | Global: $75K - $130K",
        educationPath: "B.Tech in Civil Engineering, optionally an MBA in Construction Management",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["EPC Firms", "Large Scale Developers", "Government Infrastructure Departments"],
        futureScope: "Growing need for efficient mega-project execution and smart city development.",
        jobDemandTrend: "High Growth",
        certifications: ["PMP (Project Management Professional)", "CCM (Certified Construction Manager)"],
        roadmap: ["Acquire engineering degree", "Gain field experience", "Learn project management software", "Become Construction Manager/Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Geotechnical Engineer",
        description: "Investigate the soil and rock below the surface to determine their engineering properties and how they will interact with proposed construction.",
        summary: "Soil and foundation experts who ensure structures don't sink, slide, or collapse.",
        skills: ["Soil Mechanics", "Foundation Design", "Geological Surveying", "Risk Assessment", "Plaxis 2D/3D"],
        salaryRange: "India: ₹5L - ₹16L | Global: $75K - $125K",
        educationPath: "B.Tech in Civil Engineering + M.Tech in Geotechnical Engineering",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Specialized Consulting Firms", "Mining", "Infrastructure (Tunnels/Dams)"],
        futureScope: "Critical for complex projects like underground transport, deep foundations, and offshore structures.",
        jobDemandTrend: "Specialized and Growing",
        certifications: ["Diplomate, Geotechnical Engineering (D.GE)"],
        roadmap: ["Degree in Civil", "Master's in Geotech", "Work with soil investigation firms", "Lead Geotechnical Consultant"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Transportation Engineer",
        description: "Plan, design, operate, and maintain everyday systems, such as streets and highways, as well as larger projects like airports, ship ports, mass transit systems, and harbors.",
        summary: "Designers of the vascular system of society: roads, railways, and airports.",
        skills: ["Traffic Engineering", "Highway Design (Civil 3D)", "Urban Planning", "Transit Systems"],
        salaryRange: "India: ₹4L - ₹15L | Global: $70K - $115K",
        educationPath: "B.Tech in Civil Engineering, often followed by M.Tech in Transportation",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Government (NHAI, DOTs)", "Smart City Planners", "Transport Consultants"],
        futureScope: "High demand driven by global infrastructure upgrades and sustainable mass transit push.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Professional Traffic Operations Engineer (PTOE)"],
        roadmap: ["Civil Eng. degree", "Focus on transportation modeling", "Join government or consulting agency", "Lead Urban Transport Projects"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Environmental Engineer",
        description: "Use the principles of engineering, soil science, biology, and chemistry to develop solutions to environmental problems like waste disposal, public health, and water pollution.",
        summary: "Engineers protecting public health and the environment through sustainable civil infrastructure.",
        skills: ["Water Treatment Design", "Waste Management", "Environmental Impact Assessment", "Sustainability Protocols"],
        salaryRange: "India: ₹4.5L - ₹14L | Global: $75K - $120K",
        educationPath: "B.Tech in Civil or Environmental Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Water Boards", "Environmental NGOs", "Industrial Corporations", "Consultancies"],
        futureScope: "Extremely high long-term growth due to climate change initiatives and strict environmental regulations.",
        jobDemandTrend: "Rapidly Growing",
        certifications: ["Board Certified Environmental Engineer (BCEE)", "LEED Accreditation"],
        roadmap: ["Focus on environmental sciences", "Learn waste/water treatment systems", "Work on sustainability projects", "Chief Environmental Consultant"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Water Resources Engineer",
        description: "Design new equipment and systems for water resource management facilities, including pipelines, reservoirs, and pumping stations.",
        summary: "Managing the world's most vital resource through dams, canals, and flood defense systems.",
        skills: ["Hydraulics", "Hydrology", "GIS Mapping", "HEC-RAS / HEC-HMS", "Fluid Mechanics"],
        salaryRange: "India: ₹5L - ₹16L | Global: $75K - $125K",
        educationPath: "B.Tech in Civil Engineering + M.Tech in Water Resources",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Irrigation Departments", "Hydroelectric Power Companies", "Consulting Engineers"],
        futureScope: "Crucial for fighting drought, managing floods, and generating clean hydroelectric power.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Floodplain Manager (CFM)"],
        roadmap: ["Degree in Civil", "Master's in Hydraulics/Water Resources", "Work on dam/canal projects", "Lead Hydrologist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Urban Planning Engineer",
        description: "Develop plans and programs for the use of land and physical facilities of cities, towns, and metropolitan areas.",
        summary: "Visionaries designing the layout and zoning of tomorrow's smart cities.",
        skills: ["GIS (Geographic Information Systems)", "Zoning Laws", "Urban Sociology", "Master Planning", "AutoCAD Map 3D"],
        salaryRange: "India: ₹5L - ₹18L | Global: $70K - $110K",
        educationPath: "B.Tech in Civil Engineering + Master's in Urban Planning",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Municipal Corporations", "Real Estate Developers", "Smart City Consultants"],
        futureScope: "Massive potential as populations shift to urban centers rapidly requiring structured expansion.",
        jobDemandTrend: "Growing",
        certifications: ["AICP (American Institute of Certified Planners) equivalent"],
        roadmap: ["Civil/Architecture degree", "Master's in Urban Planning", "Join city planning council", "Become Chief City Planner"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Quantity Surveyor",
        description: "Manage all costs relating to building and civil engineering projects, from the initial calculations to the final figures.",
        summary: "The financial accountants of the construction world, maximizing project value.",
        skills: ["Cost Estimation", "Bill of Quantities (BOQ)", "Tendering", "Contract Law", "AutoCAD"],
        salaryRange: "India: ₹3.5L - ₹14L | Global: $65K - $110K",
        educationPath: "B.Tech in Civil Engineering or degree in Quantity Surveying",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Construction Firms", "Consultancies", "Client Organizations (Banks/Developers)"],
        futureScope: "Always in demand as every project requires strict budget and cost-control management.",
        jobDemandTrend: "Steady",
        certifications: ["MRICS (Member of Royal Institution of Chartered Surveyors)"],
        roadmap: ["Civil Eng. degree", "Focus on cost estimating software", "Work as Junior QS", "Become Commercial Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Civil Project Manager",
        description: "Plan, direct, and coordinate activities in civil engineering companies and on construction sites.",
        summary: "The ultimate leaders combining deep civil knowledge with elite team and time management.",
        skills: ["Leadership", "Budgeting", "Risk Management", "Client Communication", "Scheduling"],
        salaryRange: "India: ₹8L - ₹30L+ | Global: $90K - $160K+",
        educationPath: "B.Tech in Civil Engineering + extensive experience or MBA",
        yearsOfStudy: "4 to 6 Years + Experience",
        industriesHiring: ["All Major Infrastructure and Construction Companies"],
        futureScope: "Highest paying role in civil engineering with immense growth potential.",
        jobDemandTrend: "High Demand",
        certifications: ["PMP", "PRINCE2"],
        roadmap: ["Gain years of site/design experience", "Acquire management skills", "Take charge of minor projects", "Lead mega-projects"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Highway Engineer",
        description: "Specialize in the planning, design, construction, and operation of highways, roads, and other vehicular facilities.",
        summary: "Experts dedicated exclusively to building efficient and safe road networks.",
        skills: ["Pavement Design", "Geometric Design", "Civil 3D / MX Road", "Traffic Flow Theory"],
        salaryRange: "India: ₹4L - ₹15L | Global: $70K - $115K",
        educationPath: "B.Tech in Civil Engineering (Specialization in Highway/Transportation preferred)",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Road Construction Companies", "Government Agencies (NHAI)", "Consultants"],
        futureScope: "Stable, backed by continuous governmental infrastructure spending.",
        jobDemandTrend: "Steady",
        certifications: ["Certified Highway Safety Professional"],
        roadmap: ["Civil degree", "Learn road design software", "Join road contractor", "Senior Highway Designer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Civil Engineering",
        title: "Bridge Engineer",
        description: "A highly specialized structural engineer focused on the design, analysis, and construction of bridges and overpasses.",
        summary: "Elite structural specialists spanning rivers, valleys, and highways with massive structures.",
        skills: ["Pre-stressed Concrete Design", "Steel Structures", "Dynamic Analysis", "Bridge Design Software (MIDAS Civil)"],
        salaryRange: "India: ₹6L - ₹20L | Global: $80K - $130K",
        educationPath: "B.Tech in Civil Engineering + M.Tech in Structural Engineering",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Specialized Structural Consultancies", "Large EPC Contractors", "Government Transport orgs"],
        futureScope: "Very prestigious and continually demanded for connecting remote/urban infrastructure.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["SE (Structural Engineering) specific to bridges"],
        roadmap: ["Master's in Structures", "Focus heavily on dynamic loads and concrete", "Apprentice under Senior Bridge Engineer", "Lead Bridge Architect"]
    }
];

const seedCivil = async () => {
    try {
        await Career.deleteMany({ branch: "Civil Engineering" });
        await Career.insertMany(civilProfessions);
        console.log('Civil Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedCivil();
