const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const mechProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Design Engineer",
        description: "Focus on creating blueprints, models, and prototypes for machines, products, or systems using CAD tools.",
        summary: "Architects of functional products taking them from concept to digital model.",
        skills: ["AutoCAD", "SolidWorks", "Product Design", "FEA", "GD&T"],
        salaryRange: "India: ₹4L - ₹12L | Global: $65K - $110K",
        educationPath: "B.Tech/B.E. in Mechanical Engineering or Design Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Automotive", "Aerospace", "Consumer Electronics", "Heavy Machinery"],
        futureScope: "High demand with the rise of 3D modeling, additive manufacturing, and sustainable design.",
        jobDemandTrend: "Stable growth",
        certifications: ["CSWP (Certified SolidWorks Professional)", "Autodesk Certified Professional"],
        roadmap: ["Earn Mechanical degree", "Master CAD software", "Build strong portfolio of designs", "Work as Junior Design Engineer", "Become Lead Design Engineer or Product Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Production & Manufacturing Engineer",
        description: "Oversee the manufacturing processes to ensure products are produced efficiently, safely, and cost-effectively.",
        summary: "Optimization experts ensuring factory floors run smoothly and outputs meet quality standards.",
        skills: ["Lean Manufacturing", "Six Sigma", "Process Optimization", "Quality Control", "Supply Chain Knowledge"],
        salaryRange: "India: ₹3.5L - ₹15L | Global: $60K - $105K",
        educationPath: "B.Tech/B.E. in Mechanical or Production Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["FMCG", "Automotive", "Textiles", "Heavy Equipment"],
        futureScope: "Steady demand evolving alongside Industry 4.0 and Smart Manufacturing technologies.",
        jobDemandTrend: "High Demand",
        certifications: ["Six Sigma Green/Black Belt", "Certified Manufacturing Engineer (CMfgE)"],
        roadmap: ["Complete engineering degree", "Gain floor experience via internships", "Learn lean frameworks", "Become Plant/Production Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Automotive Engineer",
        description: "Design, develop, and manufacture terrestrial vehicles and their specialized subsystems.",
        summary: "Creators of next-gen vehicles, focusing on performance, safety, and fuel efficiency.",
        skills: ["Vehicle Dynamics", "IC Engines", "EV Powertrains", "Thermodynamics", "CAD/CAE"],
        salaryRange: "India: ₹4.5L - ₹18L | Global: $70K - $120K",
        educationPath: "B.Tech in Mechanical or Automobile Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Automobile OEMs", "EV Startups", "Auto Ancillaries"],
        futureScope: "Massive growth driven by global transition to Electric Vehicles (EV) and Autonomous Driving.",
        jobDemandTrend: "Rapidly Growing",
        certifications: ["Certified Automotive Engineer", "EV Certification Courses"],
        roadmap: ["Understand core mechanical principles", "Specialize in EV/Vehicle dynamics", "Join OEM graduate program", "Lead system engineering"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Project Engineer",
        description: "Manage technical and financial aspects of large engineering projects ensuring they meet deadlines and budgets.",
        summary: "The bridge between technical engineering and project management keeping massive projects on rail.",
        skills: ["Project Management", "Budgeting", "Risk Assessment", "Communication", "Technical Planning"],
        salaryRange: "India: ₹5L - ₹20L | Global: $75K - $130K",
        educationPath: "B.Tech in Mechanical Engineering + PMP or MBA (optional)",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Construction", "Oil & Gas", "Infrastructure", "EPC Companies"],
        futureScope: "Essential role across all scaling heavy industries with continuous solid demand.",
        jobDemandTrend: "Consistently High",
        certifications: ["PMP (Project Management Professional)", "PRINCE2"],
        roadmap: ["Start as Junior Engineer", "Develop timeline/budgeting skills", "Acquire PMP", "Manage full lifecycle mega-projects"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Research & Development (R&D) Engineer",
        description: "Investigate and develop new materials, technologies, or products to give companies a competitive edge.",
        summary: "Innovators working on the edge of science to invent tomorrow's mechanical solutions.",
        skills: ["Experimental Design", "Data Analysis", "Advanced Thermodynamics", "Material Science", "Prototyping"],
        salaryRange: "India: ₹6L - ₹25L | Global: $85K - $140K",
        educationPath: "M.Tech or Ph.D. in specialized Mechanical fields",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Defense", "Aerospace", "Biotech", "Advanced Materials"],
        futureScope: "Critical for pushing the boundaries of sustainable and hyper-efficient technologies.",
        jobDemandTrend: "Selective but High Growth",
        certifications: ["Patents", "Research Publications"],
        roadmap: ["Graduate studies (MS/Ph.D)", "Join corporate R&D lab or university", "Publish research/Patents", "Lead R&D division"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Robotics & Automation Engineer",
        description: "Design automated systems and robotic devices used in manufacturing and various smart applications.",
        summary: "Builders of robots and automated systems replacing manual human labor.",
        skills: ["Kinematics", "C++/Python", "Control Systems", "PLC Programming", "Mechatronics"],
        salaryRange: "India: ₹5L - ₹22L | Global: $80K - $135K",
        educationPath: "B.Tech in Mechanical/Mechatronics",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Manufacturing Automation", "Logistics", "Healthcare tech"],
        futureScope: "Explosive growth as every industry adopts automation and robotics to scale.",
        jobDemandTrend: "Extremely High",
        certifications: ["Certified Automation Professional (CAP)"],
        roadmap: ["Learn mechanics and coding", "Master PLCs and controllers", "Build autonomous projects", "Senior Mechatronics Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "CNC Programmer",
        description: "Write code to automate power-driven machines that cut and finish metal, plastic, or wood.",
        summary: "Translators of 3D CAD models into precise machine-readable manufacturing code.",
        skills: ["G-Code/M-Code", "CAM Software (Mastercam)", "Machining Tools", "Precision Reading"],
        salaryRange: "India: ₹2.5L - ₹8L | Global: $45K - $80K",
        educationPath: "Diploma in Mechanical or B.Tech",
        yearsOfStudy: "2 to 4 Years",
        industriesHiring: ["Machining Shops", "Component Manufacturers", "Aerospace parts"],
        futureScope: "Continues to be a stable backbone of custom and precision manufacturing.",
        jobDemandTrend: "Stable",
        certifications: ["NIMS CNC Certification", "Mastercam Certified"],
        roadmap: ["Learn basic machining", "Master CAM software and G-code", "Become Lead Programmer or Shop Floor Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Piping Engineer",
        description: "Design and build piping routes for fluid and gas transport in industrial facilities.",
        summary: "Specialists ensuring the safe and efficient transport of fluids in massive industrial plants.",
        skills: ["PDMS / SP3D", "Fluid Mechanics", "Stress Analysis", "P&ID Reading", "Material Standards"],
        salaryRange: "India: ₹4L - ₹18L | Global: $75K - $125K",
        educationPath: "B.Tech in Mechanical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Oil & Gas", "Petrochemicals", "Water Treatment", "Power Plants"],
        futureScope: "Strong and stable due to ongoing global energy and infrastructure development.",
        jobDemandTrend: "High in Energy Sectors",
        certifications: ["Piping Engineering Diploma", "ASME Codes mastery"],
        roadmap: ["Engineering degree", "Diploma in piping design", "Work in EPC firm", "Become Lead Piping / Layout Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Site Engineer",
        description: "Manage day-to-day operations on construction or installation sites, ensuring designs are executed correctly.",
        summary: "The on-ground commanders supervising mechanical installations in real-time.",
        skills: ["Site Supervision", "Safety Protocols", "HVAC / Plumbing Installation", "Team Management"],
        salaryRange: "India: ₹3L - ₹10L | Global: $55K - $95K",
        educationPath: "B.Tech or Diploma in Mechanical Engineering",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Construction", "MEP (Mechanical, Electrical, Plumbing) Contractors"],
        futureScope: "Evergreen demand directly tied to global urbanization and real estate expansion.",
        jobDemandTrend: "Consistent",
        certifications: ["OSHA Safety Certification", "HVAC Design"],
        roadmap: ["Start as trainee on-site", "Learn practical dispute resolution", "Become Site Manager / MEP Head"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Aerospace Mechanical Engineer",
        description: "Apply mechanical engineering principles specifically to the design and testing of aircraft and spacecraft.",
        summary: "Elite engineers building structure and propulsion systems for the sky and beyond.",
        skills: ["Aerodynamics", "Propulsion", "Lightweight Materials", "Advanced FEA / CFD"],
        salaryRange: "India: ₹6L - ₹25L | Global: $90K - $150K",
        educationPath: "B.Tech Mechanical + M.Tech Aerospace",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Aerospace (Boeing, Airbus)", "Space Agencies (ISRO, NASA)", "Defense Contractors"],
        futureScope: "Very lucrative and expanding with the private space race and drone technology.",
        jobDemandTrend: "Growing rapidy",
        certifications: ["Six Sigma", "Systems Engineering Certifications"],
        roadmap: ["Strong grasp of fluid dynamics", "Master CFD software", "Join aerospace corporation", "Lead systems integrator"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Mechanical Engineering",
        title: "Marine Mechanical Engineer",
        description: "Design, build, and maintain the internal mechanical systems of ships, submarines, and offshore platforms.",
        summary: "Experts ensuring massive sea vessels operate safely traversing the world's oceans.",
        skills: ["Marine Power Systems", "Hydraulics", "Naval Architecture basics", "Corrosion Control"],
        salaryRange: "India: ₹5L - ₹30L+ | Global: $80K - $160K+",
        educationPath: "B.Tech in Marine or Mechanical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Shipping Lines", "Shipyards", "Oil Rigs", "Navy"],
        futureScope: "Stable and high paying, tied strongly to global trade and shipping logistics.",
        jobDemandTrend: "Stable",
        certifications: ["Marine Engineer Officer Certificate of Competency (CoC)"],
        roadmap: ["Maritime degree/training", "Pass CoC exams", "Sail as Junior Engineer", "Promote to Chief Engineer"]
    }
];

const seedMech = async () => {
    try {
        // Clear old ones if we want, or just insert
        await Career.deleteMany({ branch: "Mechanical Engineering" });
        await Career.insertMany(mechProfessions);
        console.log('Mechanical Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedMech();
