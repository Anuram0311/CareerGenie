const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const aerospaceProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Aerospace Design Engineer",
        description: "Focus on designing the basic configuration, frame, and systems of aircraft and spacecraft using advanced CAD and aerodynamic principles.",
        summary: "The primary architects drafting the complete digital blueprints for aircraft and spacecraft.",
        skills: ["CATIA / SolidWorks", "Aerodynamic Design", "Systems Engineering", "GD&T", "Weight/Balance Calculation"],
        salaryRange: "India: ₹6L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Tech in Aerospace or Aeronautical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Aviation Manufacturers (Boeing/Airbus)", "Defense Labs", "Space Agencies", "Consulting"],
        futureScope: "High demand driven by global defense budgets, commercial air travel scaling, and new eVTOL tech.",
        jobDemandTrend: "High Growth",
        certifications: ["Professional Engineer (PE)", "AS9100 Quality Standard Training"],
        roadmap: ["Aerospace degree", "Master CAD and design lifecycle", "Work as Junior Designer", "Become Chief Aircraft Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Aircraft Structural Engineer",
        description: "Analyze the forces, stresses, and vibrations that act on aircraft structures and design lightweight yet incredibly strong frames.",
        summary: "Ensuring the structural integrity of machines flying at extreme speeds and altitudes.",
        skills: ["Finite Element Analysis (FEA)", "ANSYS / Nastran", "Fatigue Analysis", "Composite Materials", "Stress Testing"],
        salaryRange: "India: ₹5.5L - ₹18L | Global: $80K - $135K",
        educationPath: "B.Tech/M.Tech in Aerospace or Mechanical Engineering",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Aircraft OEMs", "Defense Contractors", "MRO facilities"],
        futureScope: "Steady requirement as manufacturers race to build lighter, more fuel-efficient composite aircraft.",
        jobDemandTrend: "Stable",
        certifications: ["Stress Analysis Certifications"],
        roadmap: ["Degree in Engineering", "Focus on FEA and solid mechanics", "Design wing/fuselage structures", "Principal Structural Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Propulsion Engineer",
        description: "Design, develop, and test engines and propulsion systems for jet aircraft, helicopters, and deep space launch vehicles.",
        summary: "Masters of thermodynamics building the massive jet and rocket engines that drive aerospace vehicles.",
        skills: ["Gas Dynamics", "Combustion Analysis", "CFD", "Jet Engine Design", "Thermodynamics"],
        salaryRange: "India: ₹6L - ₹22L | Global: $90K - $150K",
        educationPath: "B.Tech/M.Tech in Aerospace or Propulsion Engineering",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Engine Manufacturers (GE, Rolls-Royce)", "Space Agencies", "Defense"],
        futureScope: "Highly critical role, especially in the transition to sustainable aviation fuels and electric propulsion.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["CFD Specializations"],
        roadmap: ["Engineering degree", "Master fluid dynamics", "Join engine manufacturing firm", "Lead Propulsion Designer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Avionics Engineer",
        description: "Develop the critical electronic systems used in aerospace vehicles, including navigation, communications, and flight control systems.",
        summary: "The electrical minds behind the complex 'nervous system' and software of modern aircraft.",
        skills: ["Embedded Systems", "Flight Control Software", "C/C++", "Radar Systems", "DO-178C Standards"],
        salaryRange: "India: ₹6L - ₹20L | Global: $85K - $145K",
        educationPath: "B.Tech in Electronics/Avionics + M.Tech preferred",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Avionics Suppliers (Honeywell, Thales)", "OEMs", "SpaceTech Startups"],
        futureScope: "Massive demand as planes become increasingly autonomous and software-driven.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["DO-178C / DO-254 Training"],
        roadmap: ["Electronics/Avionics degree", "Write flight code and test sensors", "Work in integration labs", "Chief Avionics Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Flight Test Engineer",
        description: "Plan, execute, and analyze flight tests on new or modified aircraft to ensure they meet strict safety and performance regulations before mass production.",
        summary: "The absolute final validators who prove aircraft are safe to fly in extreme real-world conditions.",
        skills: ["Data Acquisition (DAQ)", "Telemetry Analysis", "Safety Regulatory Compliance (FAA/EASA)", "Risk Management"],
        salaryRange: "India: ₹7L - ₹25L | Global: $95K - $160K",
        educationPath: "B.Tech in Aerospace Engineering + Military/Civil aviation experience",
        yearsOfStudy: "4 Years + extensive training",
        industriesHiring: ["Aircraft OEMs", "Defense/Military", "Civil Aviation Authorities"],
        futureScope: "Highly prestigious, niche role ensuring global aviation remains the safest travel method.",
        jobDemandTrend: "Specialized, Stable",
        certifications: ["Test Pilot School (Optional/Advantageous)", "Flight Safety Checks"],
        roadmap: ["Aerospace degree", "Work in telemetry/ground testing", "Join flight test crew", "Lead Flight Test Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Aerodynamics Engineer",
        description: "Analyze the interaction between the moving aircraft and the air to optimize lift, reduce drag, and maximize fuel efficiency.",
        summary: "Fluid dynamics experts shaping the exterior curves of aircraft to slice perfectly through the air.",
        skills: ["Computational Fluid Dynamics (CFD)", "Wind Tunnel Testing", "STAR-CCM+ / OpenFOAM", "Fluid Mechanics"],
        salaryRange: "India: ₹5.5L - ₹18L | Global: $85K - $140K",
        educationPath: "B.Tech/M.Tech in Aerospace Engineering with CFD focus",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Aerospace OEMs", "Formula 1 / Automotive R&D", "Defense Tech"],
        futureScope: "Always crucial as OEMs constantly seek to reduce carbon footprints via extreme drag reduction.",
        jobDemandTrend: "Steady",
        certifications: ["Advanced CFD Certifications"],
        roadmap: ["Engineering degree", "Focus heavily on CFD math", "Run wind-tunnel correlations", "Senior Aerodynamicist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Satellite Systems Engineer",
        description: "Design and integrate complex orbiting satellites covering communication, GPS, weather tracking, and defense espionage.",
        summary: "Building the orbital infrastructure that handles the earth's global communications and GPS.",
        skills: ["Orbital Mechanics", "RF Communications", "Thermal Control Systems", "Space Radiation Shielding", "STK Software"],
        salaryRange: "India: ₹6L - ₹22L | Global: $90K - $150K",
        educationPath: "B.Tech in Aerospace/Electronics + M.Tech in Space Tech",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Space Agencies (ISRO/NASA)", "Private SpaceTech (SpaceX/Planet Labs)", "Telecom"],
        futureScope: "Experiencing a booming renaissance due to the massive deployment of LEO satellite constellations.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["Systems Engineering Professional (CSEP)"],
        roadmap: ["Aerospace/Electronics degree", "Focus on orbital dynamics and comms", "Join satellite startup/agency", "Satellite Program Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Spacecraft Systems Engineer",
        description: "Coordinate all engineering disciplines to successfully build deep-space exploration vessels, rovers, and human habitats.",
        summary: "The conductors of the space race, aligning all engineering disciplines to build deep space vessels.",
        skills: ["Systems Engineering", "Mission Planning", "Life Support Systems Design", "Risk Mitigation", "MBSE (Model-Based Systems Eng)"],
        salaryRange: "India: ₹8L - ₹30L+ | Global: $100K - $170K+",
        educationPath: "M.Tech or Ph.D. in Aerospace/Systems Engineering",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["NASA", "ESA", "ISRO", "Tier-1 Space Contractors (Lockheed Martin)"],
        futureScope: "Extremely prestigious. Growth is directly tied to international lunar and Mars exploration goals.",
        jobDemandTrend: "Specialized, High Growth",
        certifications: ["INCOSE Systems Engineering Certifications"],
        roadmap: ["Master's in Space Systems", "Work on sub-systems of spacecraft", "Adopt Systems Architecture perspective", "Lead Mission Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "UAV / Drone Engineer",
        description: "Design and implement unmanned aerial vehicles for defense, logistics, agriculture, and high-altitude surveillance.",
        summary: "Pioneers designing autonomous drones that are rapidly replacing helicopters and ground delivery.",
        skills: ["Pixhawk / ArduPilot", "Drone Aerodynamics", "Battery Optimization", "Computer Vison Integration", "Payload Design"],
        salaryRange: "India: ₹4L - ₹15L | Global: $75K - $130K",
        educationPath: "B.Tech in Aerospace, Robotics, or Mechatronics",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Drone Startups", "Defense", "Logistics (Amazon/Zipline)", "Agriculture Tech"],
        futureScope: "One of the most rapidly scaling hardware tech sectors heavily backed by VC funding globally.",
        jobDemandTrend: "Massive Growth",
        certifications: ["Commercial Drone Pilot License", "UAV Design certificates"],
        roadmap: ["Engineering degree", "Build custom drones and payloads", "Write autonomous flight paths", "Chief UAV Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Aircraft Maintenance Engineer (AME)",
        description: "Inspect, maintain, and certify civil aircraft before every single flight to ensure maximum safety protocols are met.",
        summary: "The final signature of safety before an aircraft is legally allowed to take off.",
        skills: ["Aviation Safety Regulations (DGCA/FAA)", "NDT (Non-Destructive Testing)", "Engine Repair", "Avionics Troubleshooting"],
        salaryRange: "India: ₹3.5L - ₹16L | Global: $65K - $110K",
        educationPath: "DGCA/EASA approved AME Diploma or B.Sc in Aircraft Maintenance",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Airlines", "MRO (Maintenance, Repair, and Overhaul) Companies"],
        futureScope: "High safety requirement makes this job completely mandatory and recession-proof in aviation.",
        jobDemandTrend: "High Demand",
        certifications: ["DGCA/EASA Part-66 License"],
        roadmap: ["Complete AME course", "Pass grueling licensing exams", "Gain massive practical hangar hours", "Licensed Certifying AME"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Rocket Propulsion Engineer",
        description: "Design liquid and solid rocket engines utilized exclusively for lifting spacecraft into orbit.",
        summary: "The true 'rocket scientists' designing extreme thrust systems for orbit and deep space.",
        skills: ["Cryogenics", "Combustion Instability", "Rocket Equation Dynamics", "Turbomachinery", "High-Temp Materials"],
        salaryRange: "India: ₹7L - ₹25L | Global: $95K - $160K",
        educationPath: "M.Tech or Ph.D. in Aerospace Engineering (Propulsion)",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["SpaceTech Startups (Skyroot, Agnikul)", "SpaceX", "ISRO", "Defense Missiles"],
        futureScope: "Highly lucrative but specialized; booming right now due to the privatization of the space sector.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Specialized Propulsion Research Grants/Patents"],
        roadmap: ["Advanced degree in rocketry", "Run static engine fire tests", "Master cryogenic fluid flow", "Lead Propulsion Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Aerospace Engineering",
        title: "Systems Integration Engineer (Aerospace)",
        description: "Ensure that millions of distinct physical and software parts from different global contractors come together to form one working aircraft.",
        summary: "The ultimate puzzle solvers combining millions of individual parts into one flawlessly flying machine.",
        skills: ["Interface Management", "Verification & Validation (V&V)", "Configuration Management", "Cross-functional Leadership"],
        salaryRange: "India: ₹6L - ₹22L | Global: $85K - $145K",
        educationPath: "B.Tech in Aerospace/Systems Engineering",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Large Aerospace OEMs", "Tier-1 Integrators"],
        futureScope: "Essential as aerospace projects are increasingly broken apart and outsourced globally to save costs.",
        jobDemandTrend: "Steady Growth",
        certifications: ["PMP", "INCOSE SEP"],
        roadmap: ["Engineering degree", "Work across multiple subsystem teams", "Master compliance matrices", "Senior Integration Director"]
    }
];

const seedAerospace = async () => {
    try {
        await Career.deleteMany({ branch: "Aerospace Engineering" });
        await Career.insertMany(aerospaceProfessions);
        console.log('Aerospace Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedAerospace();
