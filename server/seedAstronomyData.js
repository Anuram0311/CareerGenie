const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const astronomyProfessions = [
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Astronomer",
        description: "Study celestial objects (stars, planets, comets, and galaxies) and phenomena that originate outside the Earth's atmosphere to map the observable universe.",
        summary: "The fundamental sky-watchers cataloging the stars, planets, and galaxies of the known universe.",
        skills: ["Telescope Operation", "Data Analysis (Python)", "Stellar Navigation", "Mathematical Modeling", "Image Processing"],
        salaryRange: "India: ₹6L - ₹18L | Global: $70K - $120K",
        educationPath: "B.Sc Physics/Astronomy → M.Sc Astronomy → Ph.D",
        yearsOfStudy: "8 Years",
        industriesHiring: ["Observatories", "Universities", "Space Agencies (NASA/ESA)", "Planetariums"],
        futureScope: "Steady and heavily academic. Required to operate the massive new optical and radio telescopes being built globally.",
        jobDemandTrend: "Stable, Highly Academic",
        certifications: ["Specialization in Optical Astronomy Data"],
        roadmap: ["Ph.D in Astronomy", "Secure fellowship at an observatory", "Discover/catalog new celestial bodies", "Lead Astronomer"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Astronomy Astrophysicist",
        description: "Apply the strict laws of physics to deep space, explaining exactly how stars burn, black holes consume matter, and galaxies continuously expand.",
        summary: "The deep-space physicists deciphering the extreme gravitational and nuclear forces powering stars and black holes.",
        skills: ["Quantum Mechanics", "General Relativity", "Plasma Physics", "Computational Astrophysics", "Spectroscopy"],
        salaryRange: "India: ₹8L - ₹24L | Global: $85K - $140K",
        educationPath: "B.Sc Physics → M.Sc Astrophysics → Ph.D",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["National Research Labs", "Space Agencies", "Elite Universities", "Defense (Ballistics/Radiation)"],
        futureScope: "Extremely prestigious. They are currently leading the global search for Dark Matter and cracking the physics of singularities.",
        jobDemandTrend: "Elite, Highly Competitive",
        certifications: ["Advanced Computational Physics training"],
        roadmap: ["Ph.D in Astrophysics", "Publish high-impact gravity/stellar theories", "Secure grant funding", "Tenured Professor of Astrophysics"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Cosmologist",
        description: "Study the universe entirely as a single whole entity, tracing its ultimate origin starting from the Big Bang all the way to its theoretical end.",
        summary: "The ultimate big-picture scientists studying the birth, absolute size, and eventual death of the universe.",
        skills: ["Advanced Mathematics", "Theoretical Physics", "Data Analytics (CMB data)", "General Relativity", "Particle Physics"],
        salaryRange: "India: ₹8L - ₹20L | Global: $80K - $135K",
        educationPath: "B.Sc Physics/Math → M.Sc Physics → Ph.D in Cosmology",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Theoretical Physics Institutes (e.g., Perimeter Institute)", "Universities", "Astronomical Societies"],
        futureScope: "Completely theoretical and deeply mathematical. Cosmologists define humanity's understanding of our place in existence.",
        jobDemandTrend: "Niche, Deeply Academic",
        certifications: ["Postdoctoral Fellowships in Cosmology"],
        roadmap: ["Ph.D in Cosmology", "Analyze Big Bang radiation data", "Develop macro-universe theories", "Principal Theoretical Researcher"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Planetary Scientist",
        description: "Focus entirely on the physical geology, atmospheres, and histories of planets, moons, and asteroids inside and outside our solar system.",
        summary: "The alien-world geologists studying exactly what makes up the dirt, ice, and skies of other planets.",
        skills: ["Planetary Geology", "Atmospheric Modeling", "Remote Sensing", "Spectrometry", "GIS (Extraterrestrial)"],
        salaryRange: "India: ₹7L - ₹18L | Global: $75K - $125K",
        educationPath: "B.Sc Geology/Physics → M.Sc/Ph.D Planetary Science",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Space Exploration Companies (SpaceX)", "NASA Jet Propulsion Laboratory (JPL)", "Asteroid Mining Startups"],
        futureScope: "Explosive growth. As humanity prepares to establish lunar bases and mine asteroids, planetary scientists are the first ones consulted.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Specialization in Rover Data Analysis"],
        roadmap: ["Planetary Science degree", "Analyze Mars/Lunar rover data", "Identify landing zones for spacecraft", "Mission Lead Scientist"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Astronomy Research Scientist",
        description: "Lead generalized, massive-scale research teams analyzing petabytes of astronomical data to discover new exoplanets or rogue stars.",
        summary: "The team leaders directing massive data-mining efforts to discover undiscovered planets orbiting distant suns.",
        skills: ["Big Data Pipelines", "Machine Learning (AI)", "Grant Writing", "Project Management", "Statistical Astronomy"],
        salaryRange: "India: ₹8L - ₹25L | Global: $85K - $145K",
        educationPath: "Ph.D in Astronomy/Data Science",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["Global Space Agencies", "Private Space Contractors", "Elite Tech Consultancies (working with NASA)"],
        futureScope: "Very stable. The James Webb Space Telescope generates too much data for humans to read; these scientists use AI to sift through it.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Advanced AI/Machine Learning Certifications"],
        roadmap: ["Ph.D completion", "Write custom AI for telescope data", "Discover new exoplanets", "Chief Data Researcher (Astronomy)"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Observational Astronomer",
        description: "Spend cold, long nights directly operating multi-million dollar terrestrial telescopes at the highest, driest mountain peaks on Earth.",
        summary: "The hands-on experts who physically travel to giant telescopes in remote mountains to capture light from ancient galaxies.",
        skills: ["Telescope Engineering Basics", "Optical Physics", "Night Sky Navigation", "Image Calibration", "Cryogenics (Sensor Cooling)"],
        salaryRange: "India: ₹6L - ₹16L | Global: $70K - $115K",
        educationPath: "B.Sc Physics/Astronomy → M.Sc",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Remote Observatories (Hawaii/Chile)", "Universities", "Astronomical Equipment Manufacturers"],
        futureScope: "A highly adventurous and highly technical niche. Required to maintain and focus the world's most delicate glass mirrors.",
        jobDemandTrend: "Small but Stable",
        certifications: ["High-Altitude Survival/Operations Training"],
        roadmap: ["Astronomy degree", "Move to high-altitude observatory", "Manage telescope exposure times", "Director of Observatory Operations"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Theoretical Astrophysicist",
        description: "Never touch a telescope. Instead, they use massive supercomputers to mathematically model impossible things like wormholes, Dark Energy, and string theory.",
        summary: "The brilliant math-focused scientists modeling wormholes and multidimensional theories entirely on supercomputers.",
        skills: ["M-Theory / String Theory", "Supercomputer C++ Programming", "Multivariate Calculus", "Quantum Gravity Theories"],
        salaryRange: "India: ₹8L - ₹22L | Global: $85K - $135K",
        educationPath: "B.Sc Physics/Math → M.Sc → Ph.D in Theoretical Physics",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Advanced Theoretical Institutes", "Universities", "Quantum Computing Firms"],
        futureScope: "Incredibly prestigious. Their models dictate what observational astronomers should actually look for in the sky.",
        jobDemandTrend: "Elite, Highly Competitive",
        certifications: ["Expertise in Mathematical Modeling Software"],
        roadmap: ["Ph.D in Theoretical Physics", "Publish papers on Dark Matter math", "Design universe simulations", "Senior Theoretical Physicist"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Radio Astronomer",
        description: "Use massive fields of enormous satellite dishes to 'listen' to the radio waves emitted by dead stars, pulsars, and bizarre massive structures across the universe.",
        summary: "The invisible-light specialists using massive satellite dishes to map quasars and dead stars.",
        skills: ["Radio Frequency (RF) Engineering", "Signal Processing", "Interferometry", "Electrical Engineering Basics", "Python"],
        salaryRange: "India: ₹7L - ₹18L | Global: $75K - $125K",
        educationPath: "B.Sc Physics/Electrical Engineering → M.Sc Astronomy",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Radio Observatories (e.g., ALMA/VLA)", "Telecommunications", "Space Agencies"],
        futureScope: "Critical. Radio astronomy gave humanity the first actual picture of a black hole (M87) and is heavily funded globally.",
        jobDemandTrend: "Steady",
        certifications: ["RF Signal Analysis Certifications"],
        roadmap: ["Astronomy/Engineering degree", "Process massive RF interference arrays", "Discover new pulsars", "Lead Radio Astronomer"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Space Instrumentation Scientist",
        description: "Design and build the incredibly sensitive cameras, spectrometers, and laser sensors that are mounted onto space probes and sent to Jupiter or Mars.",
        summary: "The hardware engineers inventing the indestructible, ultra-sensitive cameras mounted to deep-space probes.",
        skills: ["Optics Engineering", "Vacuum Chamber Testing", "Thermal Dynamics", "Sensor Calibration", "Systems Engineering"],
        salaryRange: "India: ₹8L - ₹22L | Global: $85K - $140K",
        educationPath: "B.Tech/B.Sc Optical Engineering/Physics → M.Sc",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["SpaceX/Blue Origin", "NASA/ISRO", "Defense Contractors (Lockheed Martin)", "Optical Manufacturers"],
        futureScope: "Massive demand. Building a camera that can survive the radiation of Jupiter requires the absolute best instrumentation scientists on Earth.",
        jobDemandTrend: "High Growth",
        certifications: ["Cleanroom Operations Certification"],
        roadmap: ["Engineering/Physics degree", "Design radiation-hardened lenses", "Mount cameras to orbital probes", "Chief Space Payload Engineer"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Astronomy Satellite Analyst",
        description: "Download and parse down the raw, encrypted telemetry logic transmitted daily from orbiting space telescopes into readable scientific pictures and charts.",
        summary: "The data decoders turning encrypted binary numbers from the James Webb Telescope into beautiful color galaxies.",
        skills: ["Satellite Telemetry", "Data Decryption", "Photoshop/Image processing", "Python", "Cloud Computing (AWS/GCP)"],
        salaryRange: "India: ₹6L - ₹18L | Global: $75K - $120K",
        educationPath: "B.Sc Computer Science / Astronomy",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Space Data Corporations", "Government Space Agencies", "Weather Forecasting (NOAA)"],
        futureScope: "Very high volume. Dozens of commercial satellites are launched weekly, and all require analysts to decrypt their incoming data streams.",
        jobDemandTrend: "High Demand",
        certifications: ["Cloud Data Architecture Certifications"],
        roadmap: ["Degree with heavy IT/CS focus", "Automate satellite data pipelines", "Color-grade deep space imagery", "Senior Telemetry Analyst"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Astrochemist",
        description: "Use deep space telescopes to identify the molecular chemical signatures of distant gas clouds, searching for water, carbon, and the building blocks of life.",
        summary: "The deep-space chemists using light to figure out exactly what chemicals exist on planets trillions of miles away.",
        skills: ["Molecular Spectroscopy", "Quantum Chemistry", "Radio Astronomy Basics", "Physical Chemistry", "Data Analysis"],
        salaryRange: "India: ₹7L - ₹18L | Global: $75K - $130K",
        educationPath: "B.Sc Chemistry/Physics → M.Sc Astrochemistry",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["National Research Institutes", "Universities", "Advanced Chemical Labs"],
        futureScope: "Extremely vital. They are currently the ones mapping atmospheres of distant exoplanets to see if they possess oxygen or water.",
        jobDemandTrend: "Niche, High Impact",
        certifications: ["Advanced Spectral Analysis Training"],
        roadmap: ["Chemistry degree", "Analyze light spectrums from nebulas", "Identify complex organic molecules in space", "Lead Astrochemist"]
    },
    {
        domain: "Science",
        branch: "Astronomy",
        title: "Astrobiologist",
        description: "Combine extremophile biology, planetary geology, and astronomy to lead the scientific search for active microbial alien life in our solar system and beyond.",
        summary: "The ultimate alien-hunters searching for the biological chemical signatures of life under the ice of Europa or on Mars.",
        skills: ["Microbiology", "Extremophile Biology", "Planetary Geology", "Chemical Biomarkers", "Interdisciplinary Research"],
        salaryRange: "India: ₹6L - ₹18L | Global: $80K - $135K",
        educationPath: "B.Sc Biology/Geology → Ph.D Astrobiology",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["NASA Astrobiology Institute", "SETI Institute", "Universities"],
        futureScope: "The next great scientific frontier. As drones are sent to the icy moons of Jupiter and Saturn, astrobiologists will lead the hunt for life.",
        jobDemandTrend: "Growing, Prestige",
        certifications: ["Specialization in Extremophile Environments"],
        roadmap: ["Ph.D in Astrobiology", "Study bacteria in extreme Earth caves", "Design bio-sensors for Mars rovers", "Principal Astrobiologist"]
    }
];

const seedAstronomy = async () => {
    try {
        await Career.deleteMany({ branch: "Astronomy" });
        await Career.insertMany(astronomyProfessions);
        console.log('Astronomy Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedAstronomy();
