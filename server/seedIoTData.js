const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const iotProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "IoT Engineer",
        description: "Design and implement comprehensive Internet of Things systems, connecting physical sensors and devices to the cloud.",
        summary: "The versatile engineers building bridges between digital software and thousands of physical sensors.",
        skills: ["C/C++ & Python", "IoT Protocols (MQTT/CoAP)", "Cloud Platforms (AWS IoT)", "Sensor Interfacing", "Networking"],
        salaryRange: "India: ₹6L - ₹20L | Global: $80K - $135K",
        educationPath: "B.Tech in Electronics/CS/IoT",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Consumer Electronics", "Logistics", "Smart Home Tech", "Telecom"],
        futureScope: "Explosive growth as everyday objects rapidly gain internet connectivity and data tracking.",
        jobDemandTrend: "Consistently High",
        certifications: ["AWS Certified IoT Device Defender", "Certified IoT Professional"],
        roadmap: ["Master Python and basic electronics", "Build connected Arduino/Raspberry Pi clusters", "Deploy to cloud layers", "Senior IoT Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "IoT Solutions Architect",
        description: "Translate high-level business goals into complex, end-to-end IoT architectures, from edge hardware selection to cloud data analytics.",
        summary: "The visionary designers planning out million-device smart networks for entire cities or corporations.",
        skills: ["System Architecture", "Edge Computing", "Mega Cloud Services", "IoT Security", "Business Strategy"],
        salaryRange: "India: ₹15L - ₹45L | Global: $130K - $200K+",
        educationPath: "B.Tech in CS/ECE + 8+ Years of IoT engineering experience",
        yearsOfStudy: "4 Years + 8+ Years Experience",
        industriesHiring: ["Smart City Planners", "Enterprise Consultancies", "Cloud Providers"],
        futureScope: "Extremely secure. Required to prevent catastrophic scaling failures in massive IoT networks.",
        jobDemandTrend: "High Demand, Elite Role",
        certifications: ["AWS Certified Solutions Architect", "Certified IoT Architect (IoT-Inc)"],
        roadmap: ["Extensive hardware & cloud experience", "Understand enterprise scaling", "Design massive integrated systems", "Chief Technology Officer (IoT)"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "IoT Embedded Engineer",
        description: "Design the specialized, low-power computer systems dedicated to specific tasks that live inside larger mechanical IoT devices.",
        summary: "The meticulous engineers writing code that runs on tiny microchips hidden inside smart devices.",
        skills: ["Embedded C/C++", "Microcontrollers (ARM, PIC)", "RTOS", "PCB Understanding", "Hardware Debugging"],
        salaryRange: "India: ₹5L - ₹18L | Global: $75K - $130K",
        educationPath: "B.Tech in Electronics & Communication or CS",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Automotive", "Medical Devices", "Aerospace", "Consumer Electronics"],
        futureScope: "Historically robust and continuously necessary as 'dumb' hardware becomes 'smart'.",
        jobDemandTrend: "Stable",
        certifications: ["Certified Embedded Systems Engineer"],
        roadmap: ["Learn basic circuitry", "Master C and microcontrollers", "Write RTOS applications", "Lead Embedded Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "IoT Security Engineer",
        description: "Identify vulnerabilities and implement encryption/firewalls specifically for edge devices and IoT fleets to prevent hacker takeovers.",
        summary: "The digital bodyguards protecting vulnerable smart homes and medical devices from cyber attacks.",
        skills: ["IoT Cryptography", "Penetration Testing", "Network Security", "Firmware Analysis", "Protocol Security (TLS/SSL)"],
        salaryRange: "India: ₹8L - ₹25L | Global: $90K - $150K",
        educationPath: "B.Tech in CS/ECE + Cybersecurity Specialized Certs",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Cybersecurity Firms", "Defense", "Smart Home / Appliances", "Healthcare Data"],
        futureScope: "Massive demand. The rapid rush to build IoT devices created billions of vulnerable access points that explicitly require defending.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["Certified IoT Security Practitioner", "CEH"],
        roadmap: ["CS/ECE Degree", "Master network vulnerabilities", "Audit massive device fleets", "Senior IoT Security Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "IoT Data Analyst",
        description: "Parse through the endless, rapid stream of unstructured data that billions of IoT sensors continuously produce to find business insights.",
        summary: "The detectives making sense of the chaotic, never-ending terabytes of data streaming from smart devices.",
        skills: ["Time-series Databases", "Python / R", "Data Visualization", "SQL", "Apache Kafka"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $125K",
        educationPath: "Bachelors in Math, CS, or Data Science",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Manufacturing Analytics", "Smart Agriculture", "Logistics Fleets", "Retail"],
        futureScope: "Highly required. Collecting IoT data is useless without analysts who can actually interpret it.",
        jobDemandTrend: "High Demand",
        certifications: ["Data Analytics Certifications"],
        roadmap: ["Learn Python and SQL", "Handle streaming time-series data", "Build predictive dashboards", "Lead Data Analyst"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "Firmware Engineer",
        description: "Write the low-level, permanent software that is inextricably programmed into the Read-Only Memory of hardware instruments.",
        summary: "The highly specialized coders defining the permanent instructions etched directly into hardware chips.",
        skills: ["Assembly Language", "Bare Metal C", "Hardware Timers", "Logic Analyzers", "Bootloaders"],
        salaryRange: "India: ₹6L - ₹22L | Global: $85K - $140K",
        educationPath: "B.Tech/M.Tech in ECE / Electronics",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Semiconductor Companies (Intel/AMD)", "IoT Hardware Startups", "Telecom"],
        futureScope: "Extremely difficult and valuable skill set. Highly protected against economic shifts.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["Advanced Microcontroller programming courses"],
        roadmap: ["Degree in Electronics", "Master bare-metal coding", "Write low-level bootloaders", "Principal Firmware Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "Hardware Design Engineer",
        description: "Design the physical circuit boards, select microchips, and optimize the battery consumption for the physical bodies of IoT devices.",
        summary: "The electrical innovators drawing the complex circuit boards that power physical IoT devices.",
        skills: ["PCB Design (Altium / Eagle)", "Analog/Digital Circuitry", "Power Management", "Signal Integrity", "Component Sourcing"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Tech in Electrical/Electronics Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Hardware OEMs", "Robotics Startups", "Wearables (Apple, Garmin)", "Defense"],
        futureScope: "Steady and robust. Miniaturization of technology requires incredibly talented circuit designers.",
        jobDemandTrend: "Steady Growth",
        certifications: ["IPC PCB Design Certification"],
        roadmap: ["Electrical Degree", "Master PCB layout software", "Design high-speed circuits", "Lead Electronic Hardware Designer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "IoT Cloud Engineer",
        description: "Focus entirely on the backend server architectures that receive, organize, and store the millions of pings from Edge devices worldwide.",
        summary: "The cloud experts building massive digital net that catches and organizes all IoT device data.",
        skills: ["AWS/Azure/GCP", "Serverless Architecture", "MQTT Broker Management", "NoSQL (DynamoDB)", "Node.js/Python"],
        salaryRange: "India: ₹8L - ₹24L | Global: $95K - $150K",
        educationPath: "B.Tech CS/IT + Cloud Certifications",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Cloud Providers", "Connected Car Companies", "Smart Home Tech"],
        futureScope: "Highly critical role as businesses shift drastically from on-premise servers to managed cloud ingestion.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["AWS Certified Developer", "Azure IoT Developer Specialty"],
        roadmap: ["CS Degree", "Master cloud serverless tech", "Build high-throughput ingestion APIs", "Senior Cloud Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "Industrial IoT Engineer",
        description: "Deploy heavy-duty IoT sensors in manufacturing, mining, and oil rigs to predict machine failure and monitor worker safety.",
        summary: "Specialists bringing the Internet of Things to massive, dirty, and dangerous factories (Industry 4.0).",
        skills: ["SCADA / PLC Systems", "Industrial Protocols (Modbus, OPC UA)", "Predictive Maintenance", "Rugged Hardware Design"],
        salaryRange: "India: ₹6L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Tech in Instrumentation/Mechatronics",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Manufacturing giants", "Oil & Gas", "Mining", "Automotive Assembly"],
        futureScope: "Incredibly massive sector (IIoT). Companies save millions predicting when a factory machine will break.",
        jobDemandTrend: "Specialized, High Growth",
        certifications: ["Certified Automation Professional (CAP)"],
        roadmap: ["Engineering degree", "Integrate legacy SCADA systems", "Deploy wireless industrial sensors", "IIoT Program Director"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "Smart Devices Engineer",
        description: "Focus purely on consumer-facing intelligent hardware, such as smartwatches, fitness trackers, and voice-assisted home appliances.",
        summary: "The creators of the smartwatches, interactive displays, and connected fitness rings we wear daily.",
        skills: ["Bluetooth Low Energy (BLE)", "Battery Optimization", "Wearable Sensors (Accelerometers/HR)", "C/C++"],
        salaryRange: "India: ₹6L - ₹22L | Global: $90K - $145K",
        educationPath: "B.Tech in Electronics/CS",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Consumer Electronics (Apple, Samsung)", "Health Tech Startups", "Fitness Brands"],
        futureScope: "Always high in demand as the public appetite for connected health trackers and home gadgets continuously expands.",
        jobDemandTrend: "Growing",
        certifications: ["Wearable Technology Seminars / BLE Certifications"],
        roadmap: ["Electronics/CS degree", "Master ultra-low-power coding", "Work on consumer prototypes", "Lead Wearables Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "IoT Application Developer",
        description: "Write the web or mobile applications that humans actually use to interact with, control, and view the data of their IoT devices.",
        summary: "The software UI devs who build the apps you use to control your smart lights or view your fitness stats.",
        skills: ["React Native / Flutter", "REST APIs / WebSockets", "UI/UX Design", "JavaScript / Swift"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Tech in CS or Software Development Bootcamp",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["IoT Software Agencies", "Smart Home Companies", "Automotive (Connected Car Apps)"],
        futureScope: "Extremely stable. All hardware requires an elegant human interface to actually be sellable.",
        jobDemandTrend: "High Demand",
        certifications: ["Mobile App Development Certifications"],
        roadmap: ["Learn React/Swift", "Master WebSocket data streams", "Publish controller apps", "Senior App Developer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Internet of Things",
        title: "Sensor Systems Engineer",
        description: "Specialize entirely in the physics and material science of inventing new types of physical sensors (temperature, pressure, chemical).",
        summary: "The highly specialized physicists and engineers inventing entirely new ways for computers to measure the physical world.",
        skills: ["Material Science", "Analog Signal Processing", "MEMS Technology", "Physics", "Transducer Design"],
        salaryRange: "India: ₹7L - ₹22L | Global: $95K - $145K",
        educationPath: "M.Tech or Ph.D. in Physics, Material Science, or Instrumentation",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Sensor Manufacturers (Bosch, STMicroelectronics)", "Defense labs", "Medical Devices"],
        futureScope: "Highly niche but irreplaceable. Finding cheaper, smaller ways to detect chemicals or movement is the backbone of IoT.",
        jobDemandTrend: "Niche, High Value",
        certifications: ["Published research in sensor tech"],
        roadmap: ["Advanced Physics/Hardware degree", "Research new transducer materials", "Patented sensor designs", "Principal Sensor Scientist"]
    }
];

const seedIoT = async () => {
    try {
        await Career.deleteMany({ branch: "Internet of Things" });
        await Career.insertMany(iotProfessions);
        console.log('IoT Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedIoT();
