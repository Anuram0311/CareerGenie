const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const earthScienceProfessions = [
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Geologist",
        description: "Study the solid Earth, the rocks of which it is composed, and the processes by which they change over time, mapping ancient histories to predict future events.",
        summary: "The rock experts piecing together the Earth's billions of years of history and locating vital natural resources.",
        skills: ["Geological Mapping", "Mineralogy", "Stratigraphy", "Field Sampling", "GIS Software"],
        salaryRange: "India: ₹5L - ₹15L | Global: $65K - $115K",
        educationPath: "B.Sc Geology → M.Sc Geology",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Oil & Gas", "Mining", "Environmental Consulting", "Government Surveys"],
        futureScope: "Steady demand. Despite the shift to green energy, geologists are still heavily needed to locate rare-earth metals for batteries.",
        jobDemandTrend: "Stable",
        certifications: ["Professional Geologist (PG) License"],
        roadmap: ["Degree in Geology", "Conduct deep field surveys", "Locate massive mineral deposits", "Chief Geologist"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Earth Systems Geophysicist",
        description: "Utilize physics, such as gravity, magnetic, and seismic methods, to measure and analyze the massive unseen structures deep inside the Earth.",
        summary: "The deep-earth physicists using seismic waves to 'see' underground structures and locate valuable resources.",
        skills: ["Seismic Data Processing", "Magnetic Surveying", "Python / MATLAB", "Geological Modeling", "Signal Processing"],
        salaryRange: "India: ₹7L - ₹22L | Global: $80K - $135K",
        educationPath: "B.Sc Physics/Geology → M.Sc Geophysics",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Energy Exploration", "Mining", "Geotechnical Engineering", "Academia"],
        futureScope: "Extremely lucrative. They are the scientists solely responsible for discovering new multibillion-dollar oil or mineral reserves.",
        jobDemandTrend: "High Demand, Niche",
        certifications: ["Society of Exploration Geophysicists (SEG) Certs"],
        roadmap: ["Geophysics degree", "Master seismic reflection", "Map deep underground resources", "Senior Exploration Geophysicist"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Seismologist",
        description: "Focus purely on the study of earthquakes and the propagation of elastic waves through the Earth, attempting to predict and map massive tectonic shifts.",
        summary: "The earthquake scientists tracking tectonic plates and warning cities of impending natural disasters.",
        skills: ["Seismic Network Setup", "Wave Mechanics", "Statistical Forecasting", "Python (ObsPy)", "Geohazard Assessment"],
        salaryRange: "India: ₹6L - ₹18L | Global: $70K - $125K",
        educationPath: "B.Sc Geology/Physics → M.Sc/Ph.D Seismology",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Government Seismology Networks", "Universities", "Insurance (Risk Assessment)", "Oil & Gas"],
        futureScope: "Vital for human survival in affected regions. Developing exact predictive AI models for earthquakes is their current major frontier.",
        jobDemandTrend: "Stable, Policy Driven",
        certifications: ["Advanced Seismographic Data Analysis"],
        roadmap: ["Ph.D in Seismology", "Manage earthquake sensor networks", "Develop early-warning systems", "Director of Seismology Institute"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Meteorologist",
        description: "Analyze atmospheric conditions globally to forecast short-term weather patterns, issue severe storm warnings, and study atmospheric physics.",
        summary: "The atmospheric forecasters predicting daily weather and preparing humanity for massive incoming storms.",
        skills: ["Weather Forecasting", "Atmospheric Thermodynamics", "Doppler Radar Analysis", "Numerical Weather Prediction (NWP)", "Communication"],
        salaryRange: "India: ₹5L - ₹16L | Global: $65K - $110K",
        educationPath: "B.Sc Meteorology / Atmospheric Sciences → M.Sc",
        yearsOfStudy: "5 Years",
        industriesHiring: ["National Weather Services", "Airlines", "Broadcasting Networks", "Agriculture"],
        futureScope: "As extreme weather patterns increase globally, incredibly precise localized meteorology is becoming vastly more important.",
        jobDemandTrend: "Growing",
        certifications: ["Certified Broadcast Meteorologist (CBM) - Optional"],
        roadmap: ["Meteorology degree", "Analyze radar models", "Predict severe storm cells", "Chief Forecaster"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Climatologist",
        description: "Study massively long-term weather patterns and shifts in the Earth's climate over decades or centuries, primarily focusing on the impact of global warming.",
        summary: "The macro-scientists tracking exactly how and why the Earth's entire climate is shifting over the centuries.",
        skills: ["Climate Modeling", "Paleoclimatology", "Big Data Analytics", "Statistical R/Python", "Public Policy Knowledge"],
        salaryRange: "India: ₹6L - ₹18L | Global: $75K - $120K",
        educationPath: "B.Sc Earth Science → M.Sc/Ph.D Climatology",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Government Environmental Agencies", "International NGOs (UNEP)", "Universities"],
        futureScope: "Extremely critical. Climatologists provide the absolute baseline data that forces governments to sign global emissions treaties.",
        jobDemandTrend: "Very High Demand",
        certifications: ["Advanced Climate Modeling Certifications"],
        roadmap: ["Climatology degree", "Model decadal temperature shifts", "Draft global climate reports", "Senior Climate Policy Advisor"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Oceanographer",
        description: "Study the terrifyingly massive and complex physical and biological properties of the world's oceans, from deep-sea trenches to global ocean currents.",
        summary: "The deep-sea explorers researching the physics, biology, and massive currents of the world's oceans.",
        skills: ["Physical Oceanography", "Marine Biology basics", "Sonar Mapping", "Data Modeling", "Seagoing Experience"],
        salaryRange: "India: ₹6L - ₹15L | Global: $65K - $115K",
        educationPath: "B.Sc Marine Science/Physics → M.Sc Oceanography",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Naval Defense", "Marine Research Institutes", "Oil & Gas Offshore", "Environmental Agencies"],
        futureScope: "Extremely important. The ocean drives the global climate, and oceanographers are unlocking how it absorbs the world's carbon.",
        jobDemandTrend: "Steady",
        certifications: ["Sea Survival Training / SCUBA"],
        roadmap: ["Oceanography degree", "Go on months-long research cruises", "Map deep-sea currents", "Lead Oceanographic Researcher"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Hydrologist",
        description: "Study the movement, distribution, and critical quality of all water on Earth, managing underground aquifers, massive rivers, and severe flood risks.",
        summary: "The water distribution experts tracking exactly where the Earth's fresh water flows and how much is left.",
        skills: ["Fluid Mechanics", "Groundwater Modeling", "GIS", "Water Quality Analytics", "Civil Engineering basics"],
        salaryRange: "India: ₹5L - ₹16L | Global: $70K - $115K",
        educationPath: "B.Sc Earth Science / Civil Engineering → M.Sc Hydrology",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Government Water Boards", "Agricultural Conglomerates", "Environmental Consulting", "Mining"],
        futureScope: "Water is rapidly becoming the world's most valuable resource. Hydrologists are needed to prevent cities from entirely running dry.",
        jobDemandTrend: "High Demand",
        certifications: ["Certified Professional Hydrologist (CPH)"],
        roadmap: ["Hydrology degree", "Model subterranean water aquifers", "Plan state-wide drought management", "Chief Hydrologist"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Volcanologist",
        description: "Study the formation, eruptive activity, and hazardous output of volcanoes, risking their lives to monitor active magma chambers and predict eruptions.",
        summary: "The extreme scientists monitoring active volcanoes to predict eruptions and evacuate populations.",
        skills: ["Igneous Petrology", "Gas Emission Monitoring", "Seismic Data Analysis", "Thermal Imaging", "Helicopter/Field Survival"],
        salaryRange: "India: ₹6L - ₹15L | Global: $70K - $120K",
        educationPath: "B.Sc Geology → M.Sc/Ph.D Volcanology",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["Government Geological Surveys", "Universities", "Volcano Observatories", "Aviation (Ash Tracking)"],
        futureScope: "Very niche but heavily respected. Their direct warnings save thousands of lives when massive stratovolcanoes suddenly awaken.",
        jobDemandTrend: "Niche, Stable",
        certifications: ["Advanced Field Safety & Wilderness Survival"],
        roadmap: ["Volcanology Ph.D", "Collect gas samples from active craters", "Model magma chamber pressure", "Director of Volcano Observatory"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Paleontologist",
        description: "Study the incredibly long history of life on Earth through the excavation and rigorous anatomical analysis of plant and animal fossils, including dinosaurs.",
        summary: "The ancient-life detectives digging up and analyzing fossils to piece together the history of evolution.",
        skills: ["Fossil Excavation", "Comparative Anatomy", "Evolutionary Biology", "Stratigraphy", "Radiometric Dating"],
        salaryRange: "India: ₹4L - ₹12L | Global: $60K - $100K",
        educationPath: "B.Sc Geology/Biology → M.Sc/Ph.D Paleontology",
        yearsOfStudy: "8 Years",
        industriesHiring: ["Natural History Museums", "Universities", "Government Land Management"],
        futureScope: "Almost entirely academic and museum-based. Hugely competitive, usually requiring a Ph.D to secure a full-time research position.",
        jobDemandTrend: "Highly Competitive, Academic",
        certifications: ["Museum Curation Certifications (Optional)"],
        roadmap: ["Ph.D in Paleontology", "Lead massive fossil digs", "Publish evolutionary discoveries", "Tenured Professor / Museum Curator"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Soil Scientist",
        description: "Analyze the chemical, physical, and biological properties of soil to radically improve agricultural crop yields and prevent massive ecological erosion.",
        summary: "The fundamental agricultural scientists ensuring the dirt we stand on can actually grow enough food for humanity.",
        skills: ["Soil Chemistry", "Agronomy", "Erosion Control", "GIS Field Mapping", "Microbiology Basics"],
        salaryRange: "India: ₹4L - ₹14L | Global: $60K - $95K",
        educationPath: "B.Sc Agriculture / Earth Science → M.Sc Soil Science",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Agricultural Giants", "Government Farming Departments", "Environmental Consulting", "Forestry"],
        futureScope: "Very important. Decades of heavy farming have degraded global soil; these scientists are needed to literally save the ability to grow crops.",
        jobDemandTrend: "Steady",
        certifications: ["Certified Professional Soil Scientist (CPSS)"],
        roadmap: ["Soil science degree", "Analyze industrial fertilizer impact", "Develop regenerative farming techniques", "Lead Agricultural Scientist"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Environmental Geoscientist",
        description: "Combine heavy geology with environmental science to specifically manage how massive man-made infrastructure impacts the stability of the Earth below it.",
        summary: "The civil-geology experts ensuring massive skyscrapers and dams don't collapse into unstable ground.",
        skills: ["Geotechnical Engineering Basics", "Site Remediation", "Groundwater Contamination Analysis", "Earth Work Regulations"],
        salaryRange: "India: ₹5L - ₹16L | Global: $70K - $115K",
        educationPath: "B.Sc Geology/Environmental Science → M.Sc",
        yearsOfStudy: "5 Years",
        industriesHiring: ["Heavy Construction Firms", "Mining", "Environmental Auditing", "Urban Planning"],
        futureScope: "High demand in rapidly developing nations where massive skyscrapers and subways must be built on safe, rigorously tested geological foundations.",
        jobDemandTrend: "High Demand",
        certifications: ["Professional Geoscientist (P.Geo)"],
        roadmap: ["Geoscience degree", "Test soil/rock stability for heavy construction", "Manage toxic site cleanups", "Principal Geoscientist"]
    },
    {
        domain: "Science",
        branch: "Earth Science",
        title: "Remote Sensing Specialist",
        description: "Use incredibly advanced satellite, drone, and aircraft sensor data to map huge portions of the Earth's surface without ever physically touching it.",
        summary: "The satellite-data wizards mapping everything from secret military bases to massive deforestation from space.",
        skills: ["GIS (Geographic Information Systems)", "Satellite Imagery Analysis (LiDAR/SAR)", "Python", "Image Processing", "Photogrammetry"],
        salaryRange: "India: ₹6L - ₹18L | Global: $75K - $125K",
        educationPath: "B.Sc Earth Science/CS → M.Sc Remote Sensing / GIS",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Defense and Intelligence", "Space Agencies", "Agricultural Tech Startups", "Google Maps/Earth"],
        futureScope: "Explosive demand. The amount of visual data generated by low-orbit satellites is so massive that experts are desperately needed to decode it.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["GIS Professional (GISP)"],
        roadmap: ["Remote Sensing Degree", "Program AI to recognize satellite images", "Map global ecological changes", "Director of Geospatial Analytics"]
    }
];

const seedEarthScience = async () => {
    try {
        await Career.deleteMany({ branch: "Earth Science" });
        await Career.insertMany(earthScienceProfessions);
        console.log('Earth Science Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedEarthScience();
