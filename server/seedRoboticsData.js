const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const roboticsProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Robotics Engineer",
        description: "Design, build, and maintain robots and robotic systems used in manufacturing, healthcare, aerospace, and everyday applications.",
        summary: "The master builders creating physical machines that think and move autonomously.",
        skills: ["C++/Python", "ROS (Robot Operating System)", "Kinematics", "Sensors & Actuators", "Mechanical Design Basics"],
        salaryRange: "India: ₹6L - ₹20L | Global: $85K - $140K",
        educationPath: "B.Tech in Robotics, Mechatronics, or Mechanical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Manufacturing", "Medical Devices", "Space Exploration (ISRO/NASA)", "Defense"],
        futureScope: "Incredibly high demand as automation replaces dangerous or repetitive human labor globally.",
        jobDemandTrend: "Consistently High",
        certifications: ["ROS Developer Certificate", "Certified Robotics Engineer"],
        roadmap: ["Degree in Robotics/Mechatronics", "Master ROS and Python", "Prototype physical robots", "Senior Robotics Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Robotics Design Engineer",
        description: "Focus on the physical mechanics, structural integrity, and visual design of the robotic chassis, ensuring it can withstand physical loads.",
        summary: "The structural artists drawing the physical bones, joints, and chassis of future robots.",
        skills: ["SolidWorks / AutoCAD", "Material Science", "Finite Element Analysis (FEA)", "3D Printing/Prototyping", "Motor Sizing"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Tech in Mechanical or Robotics Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Automotive Assembly", "Consumer Robotics", "AgriTech", "Aerospace"],
        futureScope: "Extremely stable. The software part of a robot is useless without a structurally sound physical shell.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Certified SolidWorks Professional (CSWP)"],
        roadmap: ["Mechanical Engineering degree", "Master CAD and 3D prototyping", "Design extreme-environment robots", "Lead Mechanical Design Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Automation Engineer",
        description: "Design and implement systems that allow factory machines and robotic arms to operate entirely independently with zero human intervention.",
        summary: "The efficiency experts eliminating repetitive human labor by connecting smart machines together.",
        skills: ["PLC Programming (Siemens/Allen-Bradley)", "SCADA", "Industrial Networking", "HMI Design", "Electrical Troubleshooting"],
        salaryRange: "India: ₹5L - ₹18L | Global: $75K - $125K",
        educationPath: "B.Tech in Electrical, Instrumentation, or Mechatronics",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Manufacturing (FMCG)", "Automotive", "Pharmaceuticals", "Oil & Gas"],
        futureScope: "Crucial for Industry 4.0. Factories must automate to survive, keeping demand for these engineers permanent.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Automation Professional (CAP)"],
        roadmap: ["Degree in Instrumentation", "Master PLC and SCADA", "Automate massive assembly lines", "Director of Automation"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Mechatronics Engineer",
        description: "The ultimate cross-disciplinary engineers who blend mechanical engineering, electronics, and software to create 'smart' electromechanical systems.",
        summary: "The versatile hybrid engineers who simultaneously understand the metal, the microchip, and the code.",
        skills: ["Microcontrollers", "Control Theory", "Mechanical Design", "C/C++", "Circuit Design"],
        salaryRange: "India: ₹6L - ₹20L | Global: $80K - $135K",
        educationPath: "B.Tech in Mechatronics",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Automotive (EVs)", "Aerospace", "Consumer Electronics", "Medical Tech"],
        futureScope: "Considered the most future-proof engineering discipline since almost all future tech will involve moving physical parts controlled by code.",
        jobDemandTrend: "Rapidly Growing",
        certifications: ["Mechatronics Systems Certification (Siemens)"],
        roadmap: ["Mechatronics Degree", "Build smart consumer products", "Design complex vehicle subsystems", "Lead Systems Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Control Systems Engineer (Robotics)",
        description: "Write the highly complex mathematical algorithms that govern exactly how a robot balances, moves, and reacts to physical disturbances.",
        summary: "The invisible math geniuses writing the physics engines that prevent robots from falling over.",
        skills: ["PID Controllers", "MATLAB / Simulink", "Linear/Non-Linear Control", "Signal Processing", "Dynamics"],
        salaryRange: "India: ₹8L - ₹25L | Global: $95K - $150K",
        educationPath: "M.Tech or Ph.D. in Control Systems / Robotics",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Boston Dynamics/Similar", "Autonomous Drones", "Space Agencies", "Submarine Tech"],
        futureScope: "Highly elite and heavily compensated. The brains making bipedal humanoid robots actually possible.",
        jobDemandTrend: "Specialized, Highly Paid",
        certifications: ["Advanced Control Theory specialization"],
        roadmap: ["Advanced Math/Physics degree", "Master MATLAB simulations", "Write stability algorithms for hardware", "Principal Control Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Industrial Robotics Engineer",
        description: "Install, program, and maintain the massive robotic arms used in heavy industries for welding, painting, and heavy material lifting.",
        summary: "The tech specialists configuring the giant, powerful robot arms seen in massive car factories.",
        skills: ["FANUC / KUKA / ABB Programming", "Teach Pendants", "End-of-Arm Tooling (EOAT)", "Safety Interlocks", "Roboguide"],
        salaryRange: "India: ₹5L - ₹18L | Global: $80K - $130K",
        educationPath: "B.Tech in Mechatronics or Specialized Diploma",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Automotive Manufacturing", "Heavy Machinery", "Logistics/Warehousing"],
        futureScope: "Extremely stable. The backbone role of modern global manufacturing.",
        jobDemandTrend: "Consistently High",
        certifications: ["FANUC / KUKA specific certifications"],
        roadmap: ["Learn industrial safety", "Program massive welding robots", "Optimize factory floor speeds", "Lead Industrial Automation Manager"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "AI Robotics Engineer",
        description: "Inject modern Artificial Intelligence directly into physical robots, enabling them to 'see', 'think', and learn from their mistakes using neural networks.",
        summary: "The elite software developers giving physical robots a digital brain to learn on their own.",
        skills: ["Reinforcement Learning", "Computer Vision (OpenCV)", "TensorFlow / PyTorch", "ROS2", "Python"],
        salaryRange: "India: ₹10L - ₹30L | Global: $110K - $170K",
        educationPath: "B.Tech in CS/AI + Specialization in Robotics",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["AI Robotics Startups", "Autonomous Vehicles", "Advanced Defense Tech"],
        futureScope: "The absolute bleeding edge of technology. Embedding LLMs and deep learning directly into humanoid bodies.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["DeepLearning.AI", "Udacity Robotics Software Engineer Core"],
        roadmap: ["Master ML algorithms", "Translate AI decisions to physical servo movements", "Train autonomous agents", "Chief AI Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Robotics Software Engineer",
        description: "Write the core operating system software, pathplanning algorithms, and node communications that act as the central nervous system for a robot.",
        summary: "The code developers building the vast software network that connects a robot's hardware array.",
        skills: ["C++", "Python", "ROS / ROS2", "Linux/Ubuntu", "Path Planning (A*, Dijkstra)"],
        salaryRange: "India: ₹8L - ₹26L | Global: $95K - $160K",
        educationPath: "B.Tech in Computer Science or Software Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Self-Driving Tech", "Warehouse Automation (Amazon)", "Agri-Robotics"],
        futureScope: "Extremely high. Every single sensor, motor, and camera requires thousands of lines of code to communicate perfectly.",
        jobDemandTrend: "High Demand",
        certifications: ["ROS2 Developer Certification"],
        roadmap: ["CS Degree", "Master Linux environments", "Write ROS nodes for sensor fusion", "Senior Robotics Software Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Robotics Hardware Engineer",
        description: "Design the intricate custom printed circuit boards (PCBs), select the microprocessors, and manage the power distribution to run power-hungry robotic systems.",
        summary: "The electrical wizards creating the custom motherboards and power networks hidden inside robots.",
        skills: ["PCB Design", "Embedded Systems", "Power Electronics", "Motor Drivers", "Signal Integrity"],
        salaryRange: "India: ₹7L - ₹22L | Global: $90K - $145K",
        educationPath: "B.Tech in Electronics and Communication Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Consumer Robotics", "Drone Companies", "Defense/Space"],
        futureScope: "Stable and highly compensated. Power limitations and battery optimization are the biggest physical bottleneck in robotics today.",
        jobDemandTrend: "Steady Growth",
        certifications: ["IPC PCB Design Certification"],
        roadmap: ["Electronics Degree", "Design custom robot micro-controllers", "Optimize battery usage", "Lead Hardware Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Autonomous Systems Engineer",
        description: "Focus entirely on creating machines that can navigate chaotic, unmapped, real-world environments without human input (like self-driving cars or drones).",
        summary: "The pioneers building vehicles and robots that can drive, fly, and navigate entirely by themselves.",
        skills: ["SLAM (Simultaneous Localization and Mapping)", "Lidar/Radar Processing", "Sensor Fusion", "Kalman Filters", "C++"],
        salaryRange: "India: ₹12L - ₹35L+ | Global: $120K - $200K+",
        educationPath: "M.Tech or Ph.D. in CS, Robotics, or Applied Math",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Autonomous Vehicle Companies (Waymo, Tesla)", "Drone Delivery", "Space Rovers"],
        futureScope: "The exact frontier of transportation. Solving full Level-5 autonomy is a trillion-dollar race.",
        jobDemandTrend: "Elite Role, Massively Funded",
        certifications: ["Udacity Self-Driving Car Engineer"],
        roadmap: ["Advanced Mathematics degree", "Master SLAM algorithms", "Write autonomous navigation systems", "Principal Navigation Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Robotics Simulation Engineer",
        description: "Create hyper-realistic 3D virtual worlds to test and train the code of unbuilt robots, ensuring they won't crash before spending millions to build them.",
        summary: "The virtual architects who build identical digital worlds to safely train robotic software.",
        skills: ["Gazebo / Isaac Sim", "Unreal Engine / Unity", "Physics Engines", "Python", "Digital Twin Tech"],
        salaryRange: "India: ₹8L - ₹24L | Global: $90K - $145K",
        educationPath: "B.Tech in CS/Game Design/Robotics",
        yearsOfStudy: "4 Years",
        industriesHiring: ["AI Training Companies", "Automotive R&D", "NVIDIA / Tech Giants"],
        futureScope: "Explosive demand. Training AI in the real world is slow and dangerous; training them in thousands of parallel simulated worlds is the future.",
        jobDemandTrend: "Rapidly Growing",
        certifications: ["NVIDIA Omniverse / Isaac Sim courses"],
        roadmap: ["Learn 3D physics engines", "Replicate exact real-world physics digitally", "Run 10,000x speed simulations", "Lead Virtual AI Trainer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Robotics Engineering",
        title: "Field Robotics Engineer",
        description: "The rugged engineers who travel to mines, oceans, or warzones to deploy, troubleshoot, and repair highly complex robotic systems in the harshest environments.",
        summary: "The adventurous, hands-on engineers keeping vital robotic operations running in extreme environments.",
        skills: ["On-site Troubleshooting", "Rapid Prototyping", "Electromechanical Repair", "Customer Success", "Adaptability"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $125K",
        educationPath: "B.Tech in Mechatronics or Electrical Engineering",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Mining & Excavation", "Offshore Oil & Gas", "Defense / Military", "Oceanic Research"],
        futureScope: "Highly secure and pays high hazard/travel bonuses. Robots will always eventually break down in mud, water, or dust.",
        jobDemandTrend: "Niche, Stable",
        certifications: ["Offshore Survival Certifications / Safety Certs"],
        roadmap: ["Engineering Degree", "Master field repairs", "Deploy massive robotic drills/subs", "Field Operations Director"]
    }
];

const seedRobotics = async () => {
    try {
        await Career.deleteMany({ branch: "Robotics Engineering" });
        await Career.insertMany(roboticsProfessions);
        console.log('Robotics Engineering Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedRobotics();
