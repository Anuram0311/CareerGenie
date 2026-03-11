const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const physicsProfessions = [
    {
        domain: "Science",
        branch: "Physics",
        title: "Theoretical Physicist",
        description: "Develop mathematical models and physical theories to explain, predict, and understand the fundamental laws of nature and the universe.",
        summary: "The conceptual masterminds using pure mathematics to decode the underlying rules of reality.",
        skills: ["Advanced Mathematics", "Quantum Mechanics", "General Relativity", "Analytical Thinking", "Computational Physics"],
        salaryRange: "India: ₹8L - ₹25L | Global: $90K - $160K",
        educationPath: "B.Sc Physics → M.Sc Physics → Ph.D in Theoretical Physics",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Universities", "Government Labs (Max Planck, Perimeter Institute)", "Deep Tech Research"],
        futureScope: "Essential for breaking past current technological limits in energy, computing, and space travel.",
        jobDemandTrend: "Elite Academic, Steady",
        certifications: ["High-impact peer-reviewed publications"],
        roadmap: ["Complete Ph.D in Physics", "Postdoctoral research", "Publish groundbreaking theories", "Tenured Professor / Principal Investigator"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Experimental Physicist",
        description: "Design and conduct complex physical experiments using massive equipment (like particle accelerators and lasers) to test the theories proposed by theoretical physicists.",
        summary: "The practical scientists building massive machines to prove or disprove the math governing the universe.",
        skills: ["Experimental Design", "Data Acquisition Systems", "Data Analysis (Python/C++)", "High-Precision Instrumentation", "Cryogenics/Optics"],
        salaryRange: "India: ₹9L - ₹28L | Global: $95K - $170K",
        educationPath: "B.Sc Physics → M.Sc Physics → Ph.D in Experimental Physics",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["National Labs (CERN, Fermilab, BARC)", "Aerospace", "Semiconductor R&D"],
        futureScope: "Extremely secure. No theory of reality can be accepted until an experimental physicist proves it in a lab.",
        jobDemandTrend: "High Demand",
        certifications: ["Specialized Lab Equipment Training"],
        roadmap: ["Complete Ph.D in Physics", "Master complex lab hardware", "Lead massive international experiments", "Director of Research Facility"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Astrophysicist",
        description: "Apply the laws of physics and chemistry to study celestial bodies, galaxies, black holes, and the massive-scale structure of the cosmos.",
        summary: "Scientists leveraging complex mathematics to understand the life cycles of stars and the edge of the universe.",
        skills: ["Telescopic Data Analysis", "Radiative Transfer", "Python (Astropy)", "Computational Modeling", "Fluid Dynamics"],
        salaryRange: "India: ₹8L - ₹26L | Global: $90K - $155K",
        educationPath: "B.Sc Physics/Astronomy → M.Sc → Ph.D in Astrophysics",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Space Agencies (NASA/ISRO/ESA)", "Observatories", "Universities"],
        futureScope: "Evolving heavily into a data science role due to the massive petabytes of data gathered by telescopes like James Webb.",
        jobDemandTrend: "Steady, Niche",
        certifications: ["Expertise in specific astronomical data pipelines"],
        roadmap: ["Degree in Astrophysics", "Conduct telescope observations", "Publish papers on stellar phenomena", "Senior Observational Astronomer"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Nuclear Physicist",
        description: "Study the building blocks and interactions of atomic nuclei, unlocking knowledge used for nuclear energy, deep-space propulsion, and advanced medical treatments.",
        summary: "Specialists studying the immense power locked inside the absolute center of atoms.",
        skills: ["Nuclear Reactor Physics", "Radiation Detection", "Monte Carlo Simulations (MCNP)", "Safety Regulations", "Thermodynamics"],
        salaryRange: "India: ₹10L - ₹30L | Global: $100K - $160K",
        educationPath: "B.Sc Physics → M.Sc Nuclear Physics / Engineering (Ph.D often required)",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Nuclear Power Plants", "Defense (Nuclear Deterrence)", "Medical Isotope production facilities (BARC)"],
        futureScope: "Crucial for global decarbonization. New Next-Gen modular nuclear reactors are creating a massive surge in demand.",
        jobDemandTrend: "Growing rapidly",
        certifications: ["Radiation Safety Officer (RSO) Certification"],
        roadmap: ["Master nuclear fission physics", "Work in national reactor labs", "Oversee next-gen reactor designs", "Chief Nuclear Scientist"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Particle Physicist",
        description: "Investigate the absolute smallest known particles in existence (quarks, leptons, bosons) using global-scale particle colliders to understand what matter truly is.",
        summary: "The ultimate reductionists smashing atoms together to find the basic puzzle pieces of reality.",
        skills: ["High Energy Physics", "Statistical Data Analysis (ROOT)", "Detector Hardware", "C++", "Quantum Field Theory"],
        salaryRange: "India: ₹10L - ₹35L | Global: $110K - $180K",
        educationPath: "B.Sc Physics → M.Sc Physics → Ph.D in High Energy Physics",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["CERN", "Fermilab", "Brookhaven National Laboratory", "Elite Universities"],
        futureScope: "Extremely elite and internationally collaborative. Particle physicists built the World Wide Web; their side-discoveries change the world.",
        jobDemandTrend: "Elite, Highly specialized",
        certifications: ["Extensive academic publication record"],
        roadmap: ["Complete Ph.D in Particle Physics", "Work on a major collider experiment (LHC)", "Discover new subatomic properties", "Lead Particle Collider Experiment"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Quantum Physics Researcher",
        description: "Focus purely on the bizarre and non-intuitive laws of quantum mechanics, studying superposition, entanglement, and quantum teleportation at a foundational level.",
        summary: "The scientists exploring the strange reality of quantum mechanics where particles exist in multiple states at once.",
        skills: ["Quantum Mechanics", "Linear Algebra", "Cryogenics", "Laser Optics", "Mathematical Physics"],
        salaryRange: "India: ₹12L - ₹40L | Global: $120K - $200K",
        educationPath: "B.Sc Physics → M.Sc Physics → Ph.D in Quantum Physics",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Quantum Computing Startups", "Defense Research Academies", "Deep Tech Companies (Google/IBM)"],
        futureScope: "This is currently the most heavily funded physics discipline globally due to the ongoing Quantum Computing race.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["Postdoctoral quantum research experience"],
        roadmap: ["Ph.D in Quantum Physics", "Conduct lab-based quantum entanglement tests", "Publish foundational papers", "Principal Quantum Scientist"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Condensed Matter Physicist",
        description: "Study how the properties of massive amounts of atoms behave when condensed together as solids or liquids, discovering new metals, superconductors, and semiconductors.",
        summary: "The material wizards discovering the strange new metals and superconductors that power modern electronics.",
        skills: ["Solid State Physics", "Nanotechnology", "Crystal Growth", "X-ray Diffraction", "Electron Microscopy"],
        salaryRange: "India: ₹9L - ₹30L | Global: $100K - $160K",
        educationPath: "B.Sc Physics → M.Sc/Ph.D in Condensed Matter Physics",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Semiconductor Manufacturing (Intel/TSMC)", "Battery/EV Tech", "Material Science Labs"],
        futureScope: "Massive. Every commercial smartphone, computer chip, and battery relies entirely on discoveries made by condensed matter physicists.",
        jobDemandTrend: "High Demand",
        certifications: ["Cleanroom nanofabrication certifications"],
        roadmap: ["Degree in Physics", "Master solid state physics", "Develop room-temperature superconductors", "Lead Materials Scientist"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Optical Physicist",
        description: "Study the fundamental properties of light, creating incredibly powerful lasers, fiber-optic communication networks, and advanced lenses for telescopes or microscopes.",
        summary: "The light manipulation experts designing lasers and fiber-optic cables that run the global internet.",
        skills: ["Laser Physics", "Photonics", "Lens/Mirror Design", "Zemax OpticStudio", "Fiber Optics"],
        salaryRange: "India: ₹8L - ₹27L | Global: $95K - $155K",
        educationPath: "B.Sc Physics → M.Sc/Ph.D in Optics or Photonics",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Telecom (Fiber Optics)", "Defense (Laser Weapons/Targeting)", "Medical Devices (Laser Surgery)"],
        futureScope: "Extremely stable. The push for faster global internet and safer medical surgeries relies directly on advanced photonics.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Laser Safety Officer (LSO)"],
        roadmap: ["Degree in Physics/Optics", "Design precision laser hardware", "Develop advanced photonic chips", "Chief Optical Engineer"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Medical Physicist",
        description: "Apply highly complex physics directly to healthcare, ensuring radiation treatments for cancer and MRI/CT diagnostic machines operate safely and precisely.",
        summary: "The crucial healthcare physicists ensuring radiation therapy kills cancer cells without harming patients.",
        skills: ["Radiation Dosimetry", "Medical Imaging (MRI/CT/PET)", "Radiation Safety", "Anatomy Basics", "Quality Assurance"],
        salaryRange: "India: ₹8L - ₹24L | Global: $110K - $185K",
        educationPath: "B.Sc Physics → M.Sc Medical Physics + Clinical Residency",
        yearsOfStudy: "6 to 7 Years",
        industriesHiring: ["Hospitals (Oncology Departments)", "Medical Equipment Manufacturers", "Cancer Research Centers"],
        futureScope: "One of the absolute highest-paying and most secure non-academic physics jobs. Mandated by law in every major hospital.",
        jobDemandTrend: "Consistent, High Demand",
        certifications: ["Board Certification in Medical Physics (ABR or equivalent)"],
        roadmap: ["M.Sc in Medical Physics", "Complete 2-year hospital residency", "Pass board exams", "Chief Medical Physicist"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Geophysicist",
        description: "Use seismic waves, gravity, and magnetic fields to 'see' deep underground, mapping exact locations of oil, water, fault lines, and tectonic plates.",
        summary: "Earth-detectives using physical waves to map the hidden structures, oil reserves, and fault lines deep underground.",
        skills: ["Seismic Data Processing", "Geological Modeling", "Python/MATLAB", "Magnetic/Gravity Surveying", "Field Geology"],
        salaryRange: "India: ₹8L - ₹25L | Global: $95K - $160K",
        educationPath: "B.Sc Physics/Geology → M.Sc Geophysics",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Oil & Gas Exploration", "Mining Corporations", "Environmental Consultancies", "Government Geological Surveys"],
        futureScope: "Transitioning toward green energy; geophysical mapping is now critical for locating rare-earth metals needed for EV batteries.",
        jobDemandTrend: "Adapting, Stable",
        certifications: ["Professional Geoscientist (P.Geo) registration"],
        roadmap: ["Degree in Geophysics", "Master seismic reflection data", "Locate massive underground critical mineral deposits", "Lead Exploration Geophysicist"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Space Physics Scientist",
        description: "Focus entirely on the physical environment of space itself, studying the solar wind, planetary magnetospheres, and space weather that can damage satellites.",
        summary: "The space forecasters studying the dangerous cosmic radiation and solar flares that impact Earth.",
        skills: ["Plasma Physics", "Magnetohydrodynamics", "Satellite Data Analysis", "Fortran/Python", "Space Weather Forecasting"],
        salaryRange: "India: ₹8L - ₹24L | Global: $90K - $145K",
        educationPath: "B.Sc Physics → M.Sc → Ph.D in Space Physics or Heliophysics",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["NOAA / Space Weather Prediction Centers", "Satellite Operators", "Defense (GPS Interruption Analysis)"],
        futureScope: "Crucial for modern society. A massive solar flare could wipe out global electrical grids; space physicists predict and track these.",
        jobDemandTrend: "Niche, High Importance",
        certifications: ["Focus on remote sensing and plasma physics research"],
        roadmap: ["Degree in Physics", "Study solar wind interaction with Earth", "Build models to predict solar flares", "Senior Heliophysicist"]
    },
    {
        domain: "Science",
        branch: "Physics",
        title: "Physics Lecturer / Professor",
        description: "Teach the incredibly complex laws of physics to undergraduate and graduate university students while simultaneously managing funding for independent research labs.",
        summary: "The academic leaders responsible for educating the next entire generation of engineers and scientists.",
        skills: ["Pedagogy (Teaching)", "Grant Writing", "Public Speaking", "Curriculum Development", "Academic Mentorship"],
        salaryRange: "India: ₹6L - ₹22L | Global: $75K - $150K",
        educationPath: "B.Sc → M.Sc → Ph.D in Physics + Postdoctoral Experience",
        yearsOfStudy: "8 to 12 Years",
        industriesHiring: ["Universities", "Elite High Schools", "Online Education Platforms (EdTech)"],
        futureScope: "Highly competitive, but getting a tenured university position essentially guarantees lifetime job security.",
        jobDemandTrend: "Steady, Highly Competitive",
        certifications: ["National Eligibility Test (NET) for India, Ph.D mandatory for Univ level"],
        roadmap: ["Complete Ph.D in specialized physics", "Complete multiple Postdocs", "Secure tenure-track position", "Tenured Physics Professor"]
    }
];

const seedPhysics = async () => {
    try {
        await Career.deleteMany({ branch: "Physics" });
        await Career.insertMany(physicsProfessions);
        console.log('Physics Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedPhysics();
