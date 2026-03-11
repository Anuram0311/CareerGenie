const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const automobileProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Automotive Design Engineer",
        description: "Focus on designing the aesthetics, aerodynamics, and ergonomics of vehicles using advanced 3D modeling and surfacing tools.",
        summary: "The creative and technical architects defining the look, shape, and structure of tomorrow's vehicles.",
        skills: ["CATIA Surfaces", "Alias AutoStudio", "Ergonomics", "Aerodynamics", "Clay Modeling"],
        salaryRange: "India: ₹5L - ₹18L | Global: $75K - $125K",
        educationPath: "B.Tech in Automobile/Mechanical + Master's in Transportation Design",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Automobile OEMs", "Design Studios", "EV Startups"],
        futureScope: "High demand as completely new vehicle architectures emerge for electric and autonomous driving.",
        jobDemandTrend: "Stable Growth",
        certifications: ["Automotive Design Certification"],
        roadmap: ["Engineering degree", "Master Class-A surfacing", "Join OEM design studio", "Lead Exterior/Interior Designer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Vehicle Dynamics Engineer",
        description: "Analyze and optimize the ride, handling, steering, and braking characteristics of a vehicle to ensure safety and comfort.",
        summary: "Experts tuning the suspension and chassis to make vehicles handle perfectly on the road or track.",
        skills: ["ADAMS/Car", "Suspension Design", "Kinematics", "MATLAB", "Tire Mechanics"],
        salaryRange: "India: ₹6L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Tech in Automobile/Mechanical Engineering",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Automotive OEMs", "Motorsport Teams", "Tire Manufacturers"],
        futureScope: "Crucial role as electric vehicles bring completely new weight distributions and torque profiles.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["Vehicle Dynamics Training Seminars"],
        roadmap: ["Degree in Automobile Eng.", "Focus on multibody dynamics", "Test vehicles on tracks", "Chief Chassis Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Powertrain Engineer",
        description: "Design and develop the systems that generate power and deliver it to the road surface, including engines, transmissions, and axles.",
        summary: "The engineers designing the heart of the vehicle, whether combustion engine or electric motor.",
        skills: ["IC Engines", "Transmission Design", "Thermodynamics", "NVH (Noise, Vibration, Harshness)", "FEA"],
        salaryRange: "India: ₹5.5L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Tech in Automobile or Mechanical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["OEMs", "Tier-1 Suppliers (Bosch, ZF)", "Heavy Commercial Vehicles"],
        futureScope: "Evolving rapidly from internal combustion to hybrid and pure electric powertrains.",
        jobDemandTrend: "Steady but Evolving",
        certifications: ["Powertrain Optimization Certifications"],
        roadmap: ["Engineering degree", "Choose ICE or EV specialization", "Join powertrain development team", "Powertrain Architecture Lead"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Automotive Production Engineer",
        description: "Plan, manage, and optimize the high-speed assembly lines and manufacturing processes that build cars at scale.",
        summary: "The conductors of massive auto factories, ensuring thousands of cars are built flawlessly every day.",
        skills: ["Lean Manufacturing", "Robotics integration", "Supply Chain", "Six Sigma", "JIT / Kaizen"],
        salaryRange: "India: ₹4L - ₹15L | Global: $70K - $115K",
        educationPath: "B.Tech in Automobile or Production Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Car Assembly Plants", "Component Manufacturers"],
        futureScope: "Extremely stable, supported by the continuous need for extreme efficiency and factory automation (Industry 4.0).",
        jobDemandTrend: "Consistently High",
        certifications: ["Six Sigma Black Belt", "Lean Manufacturing Certification"],
        roadmap: ["Engineering degree", "Work on the assembly line as a shift supervisor", "Master lean tools", "Plant Operations Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Automotive Testing Engineer",
        description: "Conduct rigorous physical and software tests to validate vehicle safety, durability, crashworthiness, and performance standards.",
        summary: "The ultimate validators crashing, freezing, and baking cars to ensure they survive the real world.",
        skills: ["Crash Testing (LS-DYNA)", "Data Acquisition (DAQ)", "NVH Testing", "Regulatory Homologation", "Durability Rigs"],
        salaryRange: "India: ₹4.5L - ₹16L | Global: $75K - $120K",
        educationPath: "B.Tech in Automobile Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Automotive OEMs", "Independent Testing Labs (ARAI, TÜV)", "Government Safety Boards"],
        futureScope: "Always crucial due to constantly tightening global safety and emission regulations.",
        jobDemandTrend: "Stable Growth",
        certifications: ["Automotive Testing and Homologation Certifications"],
        roadmap: ["Degree in Automobile Eng.", "Work in validation labs", "Run physical crash/climate tests", "Lead Homologation Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "EV (Electric Vehicle) Engineer",
        description: "Specialize entirely in the unique architecture of battery-electric vehicles, including motors, inverters, and high-voltage safety.",
        summary: "Pioneers designing the battery packs and electric drives leading the global transport revolution.",
        skills: ["Battery Management Systems (BMS)", "Motor Calibration", "High Voltage Safety", "Thermal Management", "Power Electronics"],
        salaryRange: "India: ₹6L - ₹25L | Global: $90K - $150K",
        educationPath: "B.Tech in Automobile/Electrical + Specialization in EV Technology",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["EV Startups", "Legacy Auto making EV transition", "Battery Manufacturers"],
        futureScope: "The single fastest-growing sub-branch in automotive engineering today.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["Certified EV Professional", "High Voltage Safety Level 3"],
        roadmap: ["Engineering degree", "Focus on battery chemistry and motors", "Join EV R&D team", "Chief EV Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Automotive R&D Engineer",
        description: "Research novel materials, completely new aerodynamic shapes, or advanced autonomous driving sensors years before they hit the market.",
        summary: "The advanced scientists looking 10 years into the future of human transport.",
        skills: ["Advanced Material Science", "Rapid Prototyping", "Sensor Fusion (Lidar/Radar)", "Experimental Design"],
        salaryRange: "India: ₹6L - ₹22L | Global: $85K - $145K",
        educationPath: "M.Tech or Ph.D. in Automobile/Mechanical Engineering",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Corporate Advanced R&D Labs", "Autonomous Driving Startups", "Universities"],
        futureScope: "Extremely vital for staying competitive in safety, lightweighting, and self-driving technology.",
        jobDemandTrend: "Specialized, High Growth",
        certifications: ["Patents", "Publications"],
        roadmap: ["Master's/Ph.D.", "Publish research", "Join Advanced Engineering team at an OEM", "Head of Automotive R&D"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Automotive Quality Engineer",
        description: "Ensure that every single vehicle and component rolling off the line meets absolute perfection and international quality standards like IATF 16949.",
        summary: "The strict gatekeepers preventing defective cars from ever reaching the customer.",
        skills: ["APQP", "PPAP", "FMEA", "IATF 16949 Standards", "Root Cause Analysis (8D)"],
        salaryRange: "India: ₹4L - ₹14L | Global: $70K - $110K",
        educationPath: "B.Tech in Automobile or Mechanical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["All Auto OEMs", "Tier-1, Tier-2, Tier-3 Parts Suppliers"],
        futureScope: "Mandatory, recession-proof role in the hyper-competitive automotive manufacturing space.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Quality Engineer (CQE)", "IATF 16949 Internal Auditor"],
        roadmap: ["Engineering degree", "Master quality core tools (PPAP, FMEA)", "Audit suppliers", "Quality Assurance Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Service Engineer (Automobile)",
        description: "Work on the after-sales side, diagnosing complex vehicle problems at dealerships, managing warranties, and training mechanics.",
        summary: "The ultimate diagnostic experts keeping vehicles running reliably long after they are sold.",
        skills: ["OBD-II Diagnostics", "Customer Communication", "Warranty Management", "Technical Training", "Electrical Troubleshooting"],
        salaryRange: "India: ₹3L - ₹10L | Global: $55K - $90K",
        educationPath: "Diploma or B.Tech in Automobile Engineering",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Dealership Networks", "OEM Regional Offices", "Large Fleet Operators"],
        futureScope: "Becoming much more software-focused as modern cars become 'computers on wheels'.",
        jobDemandTrend: "Steady",
        certifications: ["ASE Master Technician (Global)", "OEM Specific Certifications (e.g., Master Tech)"],
        roadmap: ["Diploma/Degree", "Work as diagnostic technician", "Become Regional Service Manager", "Head of After-Sales"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Motorsport Engineer",
        description: "Design, build, and tune extreme-performance racing cars for competitions like Formula 1, WRC, or Le Mans.",
        summary: "Elite engineers working under extreme pressure to extract every millisecond of speed from race cars.",
        skills: ["Race Data Analysis (MoTeC)", "Aero Tuning", "Carbon Fiber Design", "Engine Mapping", "Pit Wall Strategy"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $150K+",
        educationPath: "B.Tech followed by specialized M.Sc in Motorsport Engineering (often in UK/Europe)",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Formula Racing Teams", "Rally Teams", "Performance Tuning Shops"],
        futureScope: "Extremely difficult to enter, highly prestigious, with tech eventually trickling down to passenger cars.",
        jobDemandTrend: "Highly Competitive, Niche",
        certifications: ["Specialized Motorsport Training"],
        roadmap: ["Engineering degree & Formula Student experience", "Master's in Motorsport Eng", "Join junior race team", "F1 Race Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Emission Control Engineer",
        description: "Design exhaust after-treatment systems (like Catalytic Converters and DPFs) to reduce the pollutants emitted by combustion engines.",
        summary: "Environmental specialists ensuring the last generation of combustion engines meets incredibly strict green laws.",
        skills: ["Exhaust Gas Recirculation (EGR)", "Catalyst Chemistry", "Fluid Dynamics", "Euro 6 / BS6 Norms", "Engine Calibration"],
        salaryRange: "India: ₹5L - ₹16L | Global: $75K - $125K",
        educationPath: "B.Tech in Automobile or Chemical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Engine Manufacturers", "Emissions Technology Suppliers (Faurecia, Tenneco)"],
        futureScope: "Critical in the short term for ICEs, transitioning gradually into thermal management for EVs.",
        jobDemandTrend: "Stable (Term-limited for ICE)",
        certifications: ["Emissions Compliance Certifications"],
        roadmap: ["Automobile degree", "Learn global emission norms", "Design exhaust treatments", "Lead Homologation for Emissions"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Automobile Engineering",
        title: "Automotive Electronics Engineer",
        description: "Integrate radar, infotainment, sensors, and electronic control units (ECUs) into the modern vehicle's architecture.",
        summary: "The engineers integrating the autonomous sensors and massive touchscreens into modern dashboard systems.",
        skills: ["CAN Bus / LIN Bus", "AUTOSAR", "Embedded C", "Functional Safety (ISO 26262)", "Hardware-in-the-Loop (HIL)"],
        salaryRange: "India: ₹6L - ₹22L | Global: $85K - $140K",
        educationPath: "B.Tech in Electronics/Automobile Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Tier-1 Electronics Suppliers", "OEMs", "Tech Giants entering Auto (Apple, Google)"],
        futureScope: "Immense growth as cars evolve into fully connected, autonomous smart devices.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["ISO 26262 Functional Safety Certification"],
        roadmap: ["Electronics/Automotive degree", "Learn automotive communication protocols", "Test ECUs", "Chief Vehicle Electronics Architect"]
    }
];

const seedAutomobile = async () => {
    try {
        await Career.deleteMany({ branch: "Automobile Engineering" });
        await Career.insertMany(automobileProfessions);
        console.log('Automobile Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedAutomobile();
