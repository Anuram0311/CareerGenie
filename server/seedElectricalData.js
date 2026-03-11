const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const electricalProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Power Systems Engineer",
        description: "Analyze, design, and maintain the electrical grids and networks that transmit and distribute electricity across large regions.",
        summary: "Guardians of the electrical grid, ensuring continuous power distribution from generation to end-users.",
        skills: ["Power System Analysis (ETAP/PSCAD)", "Grid Integration", "Load Flow Analysis", "High Voltage Engineering", "Smart Grid Technologies"],
        salaryRange: "India: ₹4L - ₹18L | Global: $75K - $130K",
        educationPath: "B.Tech in Electrical Engineering + M.Tech in Power Systems (Optional)",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Power Utilities", "Grid Operators", "Renewables", "EPC Contractors"],
        futureScope: "Crucial for integrating renewable energy sources into legacy power grids and developing smart cities.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Power Engineer", "Smart Grid Professional"],
        roadmap: ["Electrical Eng degree", "Master power simulation tools", "Work in power transmission utility", "Senior Power Systems Consultant"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Electrical Design Engineer",
        description: "Design and draft electrical systems, circuits, and equipment layouts for various applications, ranging from buildings to machinery.",
        summary: "Architects of electrical layouts and circuits for large-scale infrastructure and industrial machinery.",
        skills: ["AutoCAD Electrical", "Revit MEP", "Circuit Design", "Code Compliance (NEC/IEC)", "Panel Design"],
        salaryRange: "India: ₹3.5L - ₹14L | Global: $70K - $120K",
        educationPath: "B.Tech/B.E. in Electrical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["MEP Consultancies", "Manufacturing", "Automotive", "Construction"],
        futureScope: "Continuous demand across all sectors needing updated, safe, and efficient electrical layouts.",
        jobDemandTrend: "Stable",
        certifications: ["AutoCAD Certified Professional", "Lighting Design Certification"],
        roadmap: ["Engineering degree", "Master drafting software", "Work as Junior Design Engineer", "Become Principal Electrical Designer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Control Systems Engineer",
        description: "Design and manage systems that control the behavior of complex machinery and industrial processes automatically.",
        summary: "Brain-builders for industrial machines, orchestrating complex automated processes.",
        skills: ["PLC/SCADA", "DCS", "PID Tuning", "MATLAB/Simulink", "Industrial Automation"],
        salaryRange: "India: ₹4.5L - ₹16L | Global: $80K - $135K",
        educationPath: "B.Tech in Electrical or Instrumentation Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Manufacturing Automation", "Oil & Gas", "Robotics", "Pharmaceuticals"],
        futureScope: "Extremely high growth tied to Industry 4.0, smart factories, and process automation.",
        jobDemandTrend: "Rapidly Growing",
        certifications: ["Certified Automation Professional (CAP)"],
        roadmap: ["Learn PLC programming", "Understand control theory", "Troubleshoot factory systems", "Lead Automation Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Power Electronics Engineer",
        description: "Develop electronic circuits and solid-state systems that control and convert electrical power efficiently.",
        summary: "Innovators designing the high-efficiency converters and inverters that power modern electronics and EVs.",
        skills: ["Circuit Simulation (LTspice)", "Inverter Design", "PCB Design", "Thermal Management", "Battery Management Systems (BMS)"],
        salaryRange: "India: ₹5L - ₹22L | Global: $85K - $145K",
        educationPath: "B.Tech in Electrical/Electronics + M.Tech in Power Electronics",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Electric Vehicle (EV) Manufacturers", "Consumer Electronics", "Aerospace"],
        futureScope: "Massive demand driven entirely by the EV revolution and portable renewable electronics.",
        jobDemandTrend: "Extremely High",
        certifications: ["Power Electronics Specialization"],
        roadmap: ["Electrical/Electronics degree", "Focus on solid-state devices", "Join R&D or EV firm", "Principal Power Electronics Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Electrical Maintenance Engineer",
        description: "Oversee the regular inspection, repair, and optimal functioning of electrical equipment and factory machinery.",
        summary: "The frontline troubleshooters ensuring factories and power plants never experience unscheduled downtime.",
        skills: ["Troubleshooting", "Preventive Maintenance", "Motor/Generator Repair", "Safety Protocols", "HV/LV Systems"],
        salaryRange: "India: ₹3L - ₹10L | Global: $60K - $100K",
        educationPath: "B.Tech or Diploma in Electrical Engineering",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Manufacturing Plants", "Facilities Management", "Hospitals", "Data Centers"],
        futureScope: "Evergreen necessity to keep existing infrastructure and heavy machinery functional.",
        jobDemandTrend: "Consistent",
        certifications: ["Certified Maintenance & Reliability Professional (CMRP)"],
        roadmap: ["Diploma/Degree", "Work on shop floor maintenance", "Master predictive maintenance techniques", "Plant Maintenance Head"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Instrumentation Engineer",
        description: "Design, install, and calibrate sensors and instruments used to monitor and control engineering systems.",
        summary: "Specialists in the precise measurement and calibration of temperature, pressure, and flow in massive industries.",
        skills: ["Sensor Calibration", "Process Control", "DCS/PLC", "Telemetry", "Analytical Instrumentation"],
        salaryRange: "India: ₹4L - ₹15L | Global: $75K - $125K",
        educationPath: "B.Tech in Instrumentation or Electrical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Petrochemicals", "Pharmaceuticals", "Food & Beverage", "Water Treatment"],
        futureScope: "Growing as industries require tighter quality control and more precise automated measurements.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Certified Control Systems Technician (CCST)"],
        roadmap: ["Engineering degree", "Learn calibration standards", "Work in heavy process industry", "Lead Instrumentation Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Renewable Energy Engineer",
        description: "Design, implement, and optimize power generation systems utilizing solar, wind, and other renewable sources.",
        summary: "Pioneers of the green revolution, building sustainable energy farms around the world.",
        skills: ["Solar Photovoltaics", "Wind Turbine Engineering", "Energy Storage", "Grid Tying", "PVSyst"],
        salaryRange: "India: ₹4.5L - ₹18L | Global: $80K - $135K",
        educationPath: "B.Tech in Electrical Engineering with electives/M.Tech in Renewable Energy",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Solar Developers", "Wind Farm Operators", "Green Energy Consultancies", "Government"],
        futureScope: "One of the fastest-growing engineering tracks due to extreme global push for net-zero emissions.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["NABCEP Certification", "LEED Green Associate"],
        roadmap: ["Electrical degree", "Specialize in solar/wind systems", "Lead installations at energy farms", "Chief Renewable Energy Officer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "High Voltage Engineer",
        description: "Specialize in equipment and safety protocols dealing with extreme electrical voltages, typically for long-distance power grids.",
        summary: "Experts tackling extreme power levels to ensure safe transmission across continents.",
        skills: ["Insulation Coordination", "HVDC/HVAC Transmission", "Transformer Testing", "Switchgear Design", "Safety Protocols"],
        salaryRange: "India: ₹5L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Tech + M.Tech in High Voltage Engineering",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Grid Operators", "Heavy Equipment Manufacturers", "Testing Laboratories"],
        futureScope: "Stable but highly specialized role vital for modernizing and expanding national power grids.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["High Voltage Safety Certification"],
        roadmap: ["Master's in HV Engineering", "Work in high voltage testing labs", "Join transmission utility", "Lead HV Projects"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Substation Engineer",
        description: "Design and oversee the construction of power substations that step voltage up or down for consumer distribution.",
        summary: "Designers of the critical junction points in the global electrical supply chain.",
        skills: ["Substation Layouts", "Relay Protection", "Earthing Design", "Equipment Sizing", "AutoCAD"],
        salaryRange: "India: ₹4L - ₹16L | Global: $75K - $125K",
        educationPath: "B.Tech in Electrical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Power Distribution Companies", "EPC Contractors", "Railways"],
        futureScope: "Consistent demand driven by expanding civic infrastructure and power distribution upgrades.",
        jobDemandTrend: "Consistent",
        certifications: ["Substation Design Certification"],
        roadmap: ["Electrical degree", "Learn substation layouts and codes", "Work under senior EPC contractors", "Lead Substation Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Protection Engineer",
        description: "Design relay logics and protective systems to isolate faults and prevent catastrophic damage to the power grid.",
        summary: "The ultimate safety specialists preventing electrical explosions and massive blackouts.",
        skills: ["Relay Coordination", "Fault Analysis", "Testing (Omicron/Doble)", "Microprocessor Relays"],
        salaryRange: "India: ₹4.5L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Tech in Electrical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Utilities", "Oil & Gas", "Mining", "Consulting Firms"],
        futureScope: "Critical role that grows complex alongside the integration of smart grids and renewables.",
        jobDemandTrend: "High Demand",
        certifications: ["Protective Relay Testing Certification"],
        roadmap: ["Understand core power systems", "Specialize in fault analysis and relays", "Join grid utility", "Senior Protection Specialist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Electrical Project Engineer",
        description: "Manage timelines, budgets, and teams for large-scale electrical installations, ensuring compliance and quality.",
        summary: "Leaders driving complex electrical installations from initial blueprint to final commissioning.",
        skills: ["Project Management", "Budget Estimation", "Contract Management", "Resource Allocation", "Team Leadership"],
        salaryRange: "India: ₹6L - ₹25L | Global: $85K - $140K",
        educationPath: "B.Tech in Electrical Engineering + PMP",
        yearsOfStudy: "4 Years + Certifications",
        industriesHiring: ["EPC Firms", "Real Estate", "Infrastructure", "Power Generation"],
        futureScope: "Always required wherever new industries, buildings, or infrastructure are being erected.",
        jobDemandTrend: "Consistently High",
        certifications: ["Project Management Professional (PMP)"],
        roadmap: ["Engineering degree", "Gain site/design experience", "Acquire PMP", "Manage multi-million dollar electrical projects"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Electrical Engineering",
        title: "Embedded Systems Engineer",
        description: "Combine hardware design and software programming to create dedicated computer systems inside larger mechanical or electrical devices.",
        summary: "The bridge between electronics and software, bringing smart devices to life.",
        skills: ["C/C++", "Microcontrollers (ARM, PIC)", "RTOS", "PCB Design", "IoT Protocols"],
        salaryRange: "India: ₹5L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Tech in Electrical / Electronics Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Consumer Electronics", "Automotive (EVs)", "Medical Devices", "Aerospace"],
        futureScope: "Massive exponential growth with the rise of IoT, smart appliances, and autonomous vehicles.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["Certified Embedded Systems Engineer"],
        roadmap: ["Learn basic electronics and C", "Master microcontroller programming", "Develop IoT projects", "Lead Embedded Systems Architect"]
    }
];

const seedElectrical = async () => {
    try {
        await Career.deleteMany({ branch: "Electrical Engineering" });
        await Career.insertMany(electricalProfessions);
        console.log('Electrical Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedElectrical();
