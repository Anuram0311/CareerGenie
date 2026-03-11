const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const spaceProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Space Systems Engineer",
        description: "Design, integrate, and manage the complex, multi-disciplinary systems required for spacecraft, satellites, and deep-space missions to function perfectly.",
        summary: "The master integrators ensuring all complex parts of a spacecraft actually work together in the harsh vacuum of space.",
        skills: ["Systems Engineering", "Requirements Analysis", "Risk Management", "Spacecraft Subsystems", "MATLAB"],
        salaryRange: "India: ₹8L - ₹25L | Global: $95K - $155K",
        educationPath: "B.Tech/M.Tech in Aerospace/Systems Engineering",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Space Agencies (NASA/ISRO/ESA)", "Private Spaceflight (SpaceX/Blue Origin)", "Defense Space Sector"],
        futureScope: "Explosive growth as humanity accelerates towards establishing permanent bases on the Moon and Mars.",
        jobDemandTrend: "Consistently High",
        certifications: ["INCOSE Systems Engineering Professional (ASEP/CSEP)"],
        roadmap: ["Aerospace Degree", "Master subsystem integration", "Manage complex mission architectures", "Chief Systems Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Satellite Engineer",
        description: "Design, build, and test the intricate electronic and mechanical systems for Earth-orbiting satellites used in communication, weather, and defense.",
        summary: "The specialized engineers building the orbital machines that enable global internet, GPS, and weather forecasting.",
        skills: ["Orbital Mechanics", "RF/Microwave Engineering", "Telemetry", "Thermal Control Systems", "Power Management"],
        salaryRange: "India: ₹7L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Tech in Electronics/Aerospace/Mechanical",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Satellite Providers (Starlink/Viasat)", "Telecommunications", "Defense Contractors"],
        futureScope: "Massive demand driven by the deployment of mega-constellations (thousands of small satellites providing global internet).",
        jobDemandTrend: "High Growth",
        certifications: ["Certified Satellite Professional (CSP)"],
        roadmap: ["Electronics Degree", "Master RF and space-environments", "Design satellite subsystems", "Lead Satellite Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Spacecraft Propulsion Engineer",
        description: "Design, test, and manufacture the massive chemical rocket engines and efficient electric thrusters that propel vehicles out of the atmosphere and through deep space.",
        summary: "The rocket scientists explicitly designing the powerful engines that lift humanity off the planet.",
        skills: ["Thermodynamics", "Fluid Dynamics", "Chemical/Electric Propulsion", "Combustion Analysis", "ANSYS"],
        salaryRange: "India: ₹9L - ₹28L | Global: $100K - $160K",
        educationPath: "B.Tech/M.Tech in Aerospace/Mechanical Engineering",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Private Rocket Builders (SpaceX/Rocket Lab)", "Defense Contractors (Lockheed Martin)", "Space Agencies"],
        futureScope: "Extremely secure. Reusable rockets have drastically lowered launch costs, leading to a massive boom in propulsion design.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["Advanced Propulsion Seminars and Certs"],
        roadmap: ["Aerospace Degree", "Master thermodynamics and fluid mechanics", "Test static rocket fires", "Principal Propulsion Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Spacecraft Design Engineer",
        description: "Focus heavily on the structural, thermal, and mechanical design of the physical vehicle, ensuring it survives the violent shaking of launch and extreme temperature of space.",
        summary: "The structural innovators designing the ultra-light, incredibly strong physical bodies of spacecraft.",
        skills: ["CAD (SolidWorks/CATIA)", "Finite Element Analysis (FEA)", "Materials Science (Composites)", "Structural Dynamics", "Thermal Analysis"],
        salaryRange: "India: ₹7L - ₹22L | Global: $90K - $145K",
        educationPath: "B.Tech in Mechanical or Aerospace Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Spacecraft Manufacturers", "Component Suppliers", "Advanced R&D Labs"],
        futureScope: "Crucial role. Lightweight composites and 3D printing are fundamentally changing how spacecraft are physically built.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Certified SolidWorks Professional (CSWP)", "FEA specializations"],
        roadmap: ["Mechanical Degree", "Master CAD and material stress", "Design spacecraft hulls", "Lead Mechanical Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Mission Control Engineer",
        description: "The ground-based experts who monitor the live telemetry data of spacecraft during flight, communicating with astronauts and executing critical maneuvers.",
        summary: "The 'Houston, we have a problem' professionals keeping missions safe from the ground.",
        skills: ["Real-time Telemetry Analysis", "Crisis Management", "Mission Planning", "Flight Dynamics", "Clear Communication"],
        salaryRange: "India: ₹8L - ₹26L | Global: $95K - $150K",
        educationPath: "B.Tech in Aerospace/CS/Physics",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Space Agencies (NASA/ISRO/ESA)", "Commercial Spaceflight Operators"],
        futureScope: "Highly respected and intense. As commercial spaceflights to the ISS and Moon increase, more private mission control centers are being built.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["Flight Controller Certifications (Internal Agency)"],
        roadmap: ["STEM Degree", "Train extensively in mission simulators", "Work backend console positions", "Flight Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Launch Operations Engineer",
        description: "Manage the chaotic and highly dangerous physical infrastructure at the launch pad, ensuring the rocket is safely fueled, integrated, and cleared for liftoff.",
        summary: "The on-site directors ensuring massive rockets are safely checked, fueled, and launched on schedule.",
        skills: ["Pad Infrastructure Systems", "Propellant Loading (Cryogenics)", "Safety Protocols", "Integration Operations", "Logistics"],
        salaryRange: "India: ₹7L - ₹24L | Global: $90K - $145K",
        educationPath: "B.Tech in Mechanical/Aerospace/Industrial Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Spaceports (Kennedy Space Center/Sriharikota)", "Private Launch Companies"],
        futureScope: "Vital. Weekly rocket launches are becoming the norm, requiring hundreds of engineers just to manage the physical launchpads.",
        jobDemandTrend: "High Growth",
        certifications: ["Launch Operations & Safety Training"],
        roadmap: ["Engineering Degree", "Work physically at the launchpad", "Manage cryogenic fueling", "Launch Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Space Research Scientist",
        description: "Analyze the data beamed back from deep space probes to discover new planets, study cosmic radiation, and understand the fundamental origins of the universe.",
        summary: "The pure scientists decoding the mysteries of the universe using data from orbital telescopes and probes.",
        skills: ["Astrophysics", "Python/R Data Analysis", "Spectroscopy", "Image Processing", "Scientific Publication"],
        salaryRange: "India: ₹7L - ₹20L | Global: $85K - $130K",
        educationPath: "Ph.D in Astrophysics, Astronomy, or Planetary Science",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["Universities", "National Observatories", "Space Agencies (JPL/NASA)"],
        futureScope: "Highly academic but eternally vital. The James Webb Space Telescope and future Mars rovers ensure decades of data to analyze.",
        jobDemandTrend: "Steady, Academia Focused",
        certifications: ["Peer-reviewed journal publications"],
        roadmap: ["Advanced Physics degree", "Publish deep-space findings", "Lead planetary research missions", "Principal Investigator"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Astrodynamics Engineer",
        description: "Use deep mathematics and physics to calculate the exact orbital trajectories necessary to slingshot spacecraft safely across the solar system.",
        summary: "The orbital mechanics geniuses charting exact flight paths through the gravity wells of planets.",
        skills: ["Orbital Mechanics", "Trajectory Optimization", "STK (Systems Tool Kit)", "MATLAB/Python", "Calculus/Physics"],
        salaryRange: "India: ₹10L - ₹28L | Global: $105K - $160K",
        educationPath: "M.Tech or Ph.D in Aerospace Engineering or Applied Math",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Deep Space Mission Ops", "Defense (Missile Defense)", "Satellite Nav providers"],
        futureScope: "Extremely difficult and niche. Necessary for avoiding space debris and navigating complex multi-year missions to outer planets.",
        jobDemandTrend: "Niche, High Value",
        certifications: ["AGI STK Certifications"],
        roadmap: ["Advanced Math/Physics degree", "Master STK and trajectory math", "Plot deep-space maneuvers", "Chief Flight Dynamics Officer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Payload Engineer",
        description: "Focus entirely on the specialized cargo (the 'payload') the rocket is carrying, whether it's a multi-million-dollar telescope or an experimental biology lab.",
        summary: "Specialists ensuring the multi-million-dollar cargo survives the violent journey into orbit perfectly intact.",
        skills: ["Systems Integration", "Cleanroom Protocols", "Vibration/Shock Testing", "EMC/EMI shielding", "Interface Management"],
        salaryRange: "India: ₹8L - ₹22L | Global: $90K - $145K",
        educationPath: "B.Tech in Mechanical or Electrical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Scientific Payload Builders", "Commercial Space Transport", "Military Satellites"],
        futureScope: "Steady demand. A rocket is just a giant truck—the payload engineer ensures the actual valuable cargo works when it arrives.",
        jobDemandTrend: "Stable",
        certifications: ["Payload Integration specific training"],
        roadmap: ["Engineering Degree", "Master cleanroom standards", "Integrate fragile cargo to rocket fairings", "Payload Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Space Robotics Engineer",
        description: "Design autonomous rovers, robotic arms, and deep-space drones capable of navigating extremely hostile planetary surfaces without human control.",
        summary: "The roboticists building the rovers and drones that explore Mars and the distant moons.",
        skills: ["ROS (Robot Operating System)", "Machine Vision (OpenCV)", "Kinematics", "Radiation-Hardened Electronics", "C++"],
        salaryRange: "India: ₹9L - ₹26L | Global: $100K - $155K",
        educationPath: "M.Tech in Robotics / Mechatronics",
        yearsOfStudy: "6 Years",
        industriesHiring: ["JPL (Jet Propulsion Laboratory)", "Lunar Landers (Astrobotic)", "Defense"],
        futureScope: "Explosive growth. Humans cannot survive deep space easily, so autonomous robots will be the primary explorers for the next century.",
        jobDemandTrend: "Emerging, High Demand",
        certifications: ["Advanced Robotics & AI Certs"],
        roadmap: ["Robotics Degree", "Master autonomous navigation", "Build extreme-environment robots", "Lead Planetary Robotics Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Ground Systems Engineer",
        description: "Architect and maintain the massive antennas, server farms, and deep space network dishes required on Earth to actually communicate with satellites.",
        summary: "The engineers building the giant communication dishes that maintain contact with deep space.",
        skills: ["RF Communications", "Antenna Design", "Signal Processing", "Network Architecture", "Linux Admin"],
        salaryRange: "India: ₹7L - ₹20L | Global: $85K - $135K",
        educationPath: "B.Tech in Electronics & Telecommunication or IT",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Deep Space Network (DSN) Ops", "Satellite ISPs", "Telecom"],
        futureScope: "Consistently required. As we push further into the solar system, more powerful and sensitive ground stations are mandatory.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Advanced Telecom/RF Certifications"],
        roadmap: ["Telecom Degree", "Master RF signals", "Manage massive dish arrays", "Director of Ground Operations"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Space Technology",
        title: "Space Data Analyst",
        description: "Cull through the petabytes of telemetry, optical, and sensor data continuously beamed down from orbit to find anomalies, optimize satellite health, or sell insights.",
        summary: "The big data experts processing the sheer volume of information being transmitted from space every second.",
        skills: ["Python (Pandas/NumPy)", "SQL", "Machine Learning", "Time-series databases", "Data Visualization"],
        salaryRange: "India: ₹8L - ₹22L | Global: $90K - $140K",
        educationPath: "B.Tech in CS or Data Science",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Earth Observation Companies (Planet/Maxar)", "Space Startups", "Defense Intelligence"],
        futureScope: "Massive market. 'Space-as-a-Service' software companies thrive entirely on selling synthesized data collected from orbit.",
        jobDemandTrend: "High Demand",
        certifications: ["Data Analytics / Deep Learning certifications"],
        roadmap: ["Data Science Degree", "Master massive geospatial datasets", "Implement ML for anomaly detection", "Lead Space Data Scientist"]
    }
];

const seedSpace = async () => {
    try {
        await Career.deleteMany({ branch: "Space Technology" });
        await Career.insertMany(spaceProfessions);
        console.log('Space Technology Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedSpace();
