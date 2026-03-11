const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const quantumProfessions = [
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Computing Engineer",
        description: "Develop and implement algorithms and architectures specifically designed to run on advanced quantum computers to solve historically impossible problems.",
        summary: "The futuristic engineers writing software for machines that compute using quantum physics instead of standard binary code.",
        skills: ["Quantum Mechanics", "Qiskit / Cirq", "Linear Algebra", "Python/C++", "Algorithm Design"],
        salaryRange: "India: ₹15L - ₹40L+ | Global: $120K - $200K+",
        educationPath: "Ph.D or M.Tech in Physics, CS, or Mathematics",
        yearsOfStudy: "6 to 8+ Years",
        industriesHiring: ["Tech Giants (IBM, Google, Microsoft)", "National Defense Labs", "Quantum Startups"],
        futureScope: "Extremely elite and niche. Quantum computing is expected to revolutionize drug discovery, finance, and AI over the next 20 years.",
        jobDemandTrend: "Emerging, Highly Paid",
        certifications: ["IBM Certified Associate Developer - Quantum Computation using Qiskit"],
        roadmap: ["Advanced Math & Physics Degree", "Master Qiskit framework", "Translate classical problems to quantum", "Lead Quantum Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Software Developer",
        description: "Write the software programs, compilers, and application layers that allow classical computers to interface with and command quantum processing units (QPUs).",
        summary: "The developers building the software bridge between standard laptops and futuristic quantum mainframes.",
        skills: ["Q#", "Python", "Quantum Compilers", "Classical-Quantum Hybrid Algorithms", "Software Engineering"],
        salaryRange: "India: ₹12L - ₹35L | Global: $110K - $180K",
        educationPath: "B.Tech/M.Tech in CS with Quantum Physics knowledge",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Quantum software startups (Rigetti, IonQ)", "Tech Giants", "Research Universities"],
        futureScope: "Huge potential. Standard software developers will eventually need these tools to write applications that utilize both CPU and QPU power.",
        jobDemandTrend: "Rapidly Growing",
        certifications: ["QWorld / Qiskit certifications"],
        roadmap: ["CS Degree", "Master hybrid quantum-classical coding", "Develop quantum SDKs", "Principal Quantum Developer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Algorithm Researcher",
        description: "Theorize and invent entirely novel mathematical algorithms that provide extreme computational speedups exclusively on quantum hardware (like Shor's algorithm).",
        summary: "Pure math theorists inventing the equations that will decode the universe's toughest problems.",
        skills: ["Advanced Mathematics", "Cryptography", "Theoretical Computer Science", "Quantum Error Correction", "Algorithm Complexity Analysis"],
        salaryRange: "India: ₹18L - ₹50L+ | Global: $150K - $250K+",
        educationPath: "Ph.D in Theoretical CS, Mathematics, or Quantum Physics",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["Top Tier Universities", "Corporate AI/Quantum Labs (Google DeepMind)"],
        futureScope: "The bleeding edge of mathematical invention. These researchers literally define what quantum computers will be used for in the future.",
        jobDemandTrend: "Elite Role, Massively Funded",
        certifications: ["Published research in Nature, PRL, or major algorithmic journals"],
        roadmap: ["Complete Ph.D", "Publish groundbreaking quantum algorithms", "Join elite corporate/academic lab", "Chief Quantum Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Hardware Engineer",
        description: "Design, build, and maintain the fragile, super-cooled physical hardware components (qubits, dilution refrigerators, cryogenics) required for a quantum computer to exist.",
        summary: "The brilliant materials scientists and engineers who literally build the physical quantum computers.",
        skills: ["Superconducting Circuits", "Cryogenics", "Microwave Engineering", "Nanofabrication", "Solid State Physics"],
        salaryRange: "India: ₹12L - ₹35L | Global: $120K - $190K+",
        educationPath: "Ph.D in Applied Physics, Electrical Engineering, or Material Science",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Hardware OEMs (IBM, Intel, D-Wave)", "Defense Agencies"],
        futureScope: "Incredibly difficult but fundamentally necessary. Building stable qubits is currently the biggest bottleneck in the entire industry.",
        jobDemandTrend: "Niche, Highly Demanded",
        certifications: ["Nanofabrication cleanroom certifications"],
        roadmap: ["Physics/Hardware Degree", "Master extreme cryogenic engineering", "Design stable multi-qubit chips", "Lead Hardware Architect"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Cryptography Specialist",
        description: "Design unbreakable encryption systems based on quantum mechanics (QKD) to protect data against the future threat of quantum computers breaking classical encryption.",
        summary: "Security experts building unbreakable encryption to prepare the world for 'Y2Q' (The Quantum Threat).",
        skills: ["Quantum Key Distribution (QKD)", "Post-Quantum Cryptography (PQC)", "Cybersecurity", "Number Theory", "Lattice-based cryptography"],
        salaryRange: "India: ₹14L - ₹40L | Global: $130K - $200K",
        educationPath: "M.Tech/Ph.D in Cryptography, Math, or CS",
        yearsOfStudy: "6 Years",
        industriesHiring: ["National Intelligence Agencies (NSA)", "Banking/Finance Security", "Telecom"],
        futureScope: "Governments and banks are currently pouring billions into this field out of fear that a functioning quantum computer will instantly hack all modern banking.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["Advanced Cybersecurity and Cryptography certs"],
        roadmap: ["Master classical encryption", "Research lattice/quantum cryptography", "Secure massive data networks", "CISO (Quantum Security)"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Physicist",
        description: "Conduct primary, foundational research into the deepest laws of quantum mechanics—superposition, entanglement, and interference—to discover completely new ways to process data.",
        summary: "The pure scientists studying the fabric of reality to unlock the secrets behind quantum mechanics.",
        skills: ["Quantum Field Theory", "High-level Calculus", "Experimental Physics", "Data Analytics", "Research Writing"],
        salaryRange: "India: ₹8L - ₹25L | Global: $90K - $160K",
        educationPath: "Ph.D in Theoretical or Experimental Physics",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["Academia", "Government Research (DOE/CERN)", "Deep Tech Startups"],
        futureScope: "Foundational. All engineering in the quantum space relies entirely on the discoveries made by these physicists.",
        jobDemandTrend: "Steady, Academia Focused",
        certifications: ["Major physics journal publications"],
        roadmap: ["Advanced physics degree", "Conduct baseline quantum experiments", "Publish findings", "Tenured Professor / Principal Investigator"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Systems Engineer",
        description: "Integrate the fragile quantum processing unit (QPU) with massive classical supercomputers, managing the incredibly complex infrastructure required to make them work together.",
        summary: "The integration experts who plug a freezing quantum core into a standard corporate server farm.",
        skills: ["Systems Engineering", "HPC (High-Performance Computing)", "Linux Networking", "Hardware Integration", "Signal Processing"],
        salaryRange: "India: ₹10L - ₹30L | Global: $110K - $170K",
        educationPath: "B.Tech/M.Tech in Electrical/Computer Engineering",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Supercomputing Centers", "Cloud Providers (Adding quantum access)", "Aerospace"],
        futureScope: "Critical role for scaling. Real-world applications require quantum computers and classical supercomputers to 'talk' to each other instantly.",
        jobDemandTrend: "Growing",
        certifications: ["HPC infrastructure certs"],
        roadmap: ["Engineering Degree", "Master HPC clusters", "Design classical-quantum interfaces", "Lead Systems Integrator"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum AI Researcher",
        description: "Combine Quantum Computing with Artificial Intelligence (QML), investigating how quantum algorithms can train neural networks infinitely faster than standard GPUs.",
        summary: "Researchers fusing the two most powerful tech buzzwords (Quantum + AI) to create ultra-fast machine learning models.",
        skills: ["Quantum Machine Learning (QML)", "PyTorch / TensorFlow", "Qiskit Machine Learning", "Linear Algebra", "Optimization Algorithms"],
        salaryRange: "India: ₹15L - ₹45L | Global: $140K - $220K",
        educationPath: "Ph.D in AI or Quantum CS",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["OpenAI / DeepMind", "Pharmaceuticals (Drug Discovery AI)", "Fintech"],
        futureScope: "The absolute Holy Grail of tech right now. A working QML model could theoretically solve AI training bottlenecks overnight.",
        jobDemandTrend: "Elite Role, Highly Subsidized",
        certifications: ["Publications in both AI and Quantum conferences"],
        roadmap: ["Master classical AI/ML", "Learn quantum computing fundamentals", "Write hybrid QML layers", "Principal QML Scientist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Simulation Engineer",
        description: "Use quantum computers exactly as they were initially intended: to perfectly simulate the quantum mechanics of complex molecules and chemical reactions for drug and material discovery.",
        summary: "Engineers using quantum computers to simulate chemistry and discover new medicines instantly.",
        skills: ["Computational Chemistry", "VQE (Variational Quantum Eigensolver)", "Quantum Chemistry packages", "Python", "Physics"],
        salaryRange: "India: ₹12L - ₹35L | Global: $115K - $180K",
        educationPath: "Ph.D in Computational Chemistry or Quantum Physics",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Pharmaceuticals (Pfizer, Moderna)", "Material Science (Battery Tech)", "Chemical Manufacturing"],
        futureScope: "This is widely considered to be the first actually profitable use-case for quantum computers. Huge demand in pharma.",
        jobDemandTrend: "Specialized, High Demand",
        certifications: ["Focus on biochemical simulation expertise"],
        roadmap: ["Chemistry/Physics background", "Simulate molecules on classical HPC", "Migrate simulation to quantum hardware", "Lead Quantum Chemist"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Applications Developer",
        description: "Focus on the end-user side, utilizing high-level cloud APIs (like AWS Braket) to write enterprise software that routes specific complex problems to remote quantum computers.",
        summary: "Software developers who write commercial applications that leverage cloud-based quantum processing.",
        skills: ["AWS Braket / Azure Quantum", "Cloud Architecture", "Python (Jupyter Notebooks)", "Enterprise Software Dev", "API Integration"],
        salaryRange: "India: ₹10L - ₹28L | Global: $100K - $160K",
        educationPath: "B.Tech in CS + Training in Quantum Cloud Platforms",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Logistics (Routing Optimization)", "Finance (Portfolio Optimization)", "SaaS Companies"],
        futureScope: "Massive potential. You don't need a Ph.D to do this; just the ability to send standard cloud data to a quantum API for fast calculation.",
        jobDemandTrend: "Rapidly Emerging",
        certifications: ["AWS Certified Developer - Associate", "Quantum Platform Certs"],
        roadmap: ["CS Degree", "Master Cloud infrastructure", "Develop cloud apps that ping quantum nodes", "Senior Quantum App Developer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Control Engineer",
        description: "Write the highly precise microwave pulse programming and feedback loop codes that manipulate individual superconducting qubits without breaking their fragile state.",
        summary: "The extremely meticulous engineers who write the commands to flip individual quantum bits.",
        skills: ["RF / Microwave Engineering", "FPGA Programming", "Digital Signal Processing", "Python/C", "Low-latency Control Systems"],
        salaryRange: "India: ₹10L - ₹30L | Global: $110K - $175K",
        educationPath: "M.Tech in Electrical Engineering or Physics",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Hardware OEMs", "National Labs", "Telecom Equipment Co's"],
        futureScope: "Very stable niche. The precision required to control qubits translates perfectly to advanced radar and telecom if they leave the quantum field.",
        jobDemandTrend: "Niche, Highly Demanded",
        certifications: ["Advanced RF Engineering courses"],
        roadmap: ["Electrical Engineering Degree", "Master microwave signal generation", "Write strict FPGA control loops", "Lead Qubit Control Engineer"]
    },
    {
        domain: "Engineering & Technology",
        branch: "Quantum Computing",
        title: "Quantum Information Scientist",
        description: "Study the fundamental nature of how information is stored, transmitted, and processed at the subatomic level, defining the mathematical limits of quantum computing.",
        summary: "The visionary theorists determining the absolute physical limits of how much mathematical data the universe can hold.",
        skills: ["Information Theory", "Quantum Teleportation Concepts", "Complex Math", "Linear Algebra", "Scientific Publication"],
        salaryRange: "India: ₹10L - ₹35L | Global: $100K - $180K",
        educationPath: "Ph.D in Physics or Mathematics",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["Academia", "Corporate Think-Tanks (Microsoft Station Q)", "Deep Tech Funds"],
        futureScope: "The absolute purest form of Quantum computing research. Highly academic, focusing on theories that might not be built for decades.",
        jobDemandTrend: "Steady, Elite Academic",
        certifications: ["High-impact peer-reviewed publications"],
        roadmap: ["Complete Ph.D", "Publish theories on quantum data limits", "Lead global quantum think-tank", "Principal Scientist"]
    }
];

const seedQuantum = async () => {
    try {
        await Career.deleteMany({ branch: "Quantum Computing" });
        await Career.insertMany(quantumProfessions);
        console.log('Quantum Computing Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedQuantum();
