const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const designProfessions = [
    {
        domain: "Arts",
        branch: "Design",
        title: "Graphic Designer",
        description: "Combine text, images, and brand guidelines to create stunning visual communication materials such as logos, brochures, and digital advertisements.",
        summary: "The fundamental visual communicators designing the logos, posters, and ads we see everywhere.",
        skills: ["Adobe Illustrator/Photoshop", "Typography", "Color Theory", "Layout Design (InDesign)", "Portfolio Curation (Versatile Brand Campaigns)"],
        salaryRange: "India: ₹3L - ₹12L | Global: $45K - $85K",
        educationPath: "B.Des / BFA Graphic Design",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Advertising Agencies", "Corporate Marketing (In-House)", "Publishing", "Tech Startups"],
        futureScope: "Extremely stable but evolving. The rise of AI tools means designers must focus heavily on high-level creative direction rather than basic pixel-pushing. Freelancing Opportunities: Yes, incredibly common gig on Upwork/Fiverr.",
        jobDemandTrend: "Stable, Evolving with AI",
        certifications: ["Adobe Certified Professional"],
        roadmap: ["Beginner: Junior Designer", "Junior: Mid-Weight Graphic Designer", "Senior: Senior Designer", "Lead: Art Director", "Creative Director: Chief Creative Officer"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "UI Designer",
        description: "Focus entirely on the exact visual aesthetics of digital interfaces—designing the buttons, icons, colors, and typography for mobile apps and websites.",
        summary: "The pixel-perfect digital artists making the exact screens and buttons you tap on your phone.",
        skills: ["Figma / Adobe XD", "Visual Hierarchy", "Micro-Interactions/Animation", "Responsive Design", "Portfolio Curation (Interactive High-Fidelity Prototypes)"],
        salaryRange: "India: ₹4L - ₹18L | Global: $65K - $120K",
        educationPath: "B.Des Interaction Design / Graphic Design",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Tech Giants (Apple/Google)", "Software Startups", "E-Commerce", "Digital Agencies"],
        futureScope: "Explosive growth. Every single new app, website, or digital billboard requires an elite UI designer to ensure it looks modern and beautiful. Freelancing Opportunities: Yes, highly paid freelance contracts are abundant globally.",
        jobDemandTrend: "High Growth",
        certifications: ["Google UX/UI Design Certificate"],
        roadmap: ["Beginner: UI Intern / Asset Creator", "Junior: UI Designer", "Senior: Senior UI Designer", "Lead: Lead Product Designer", "Creative Director: VP of Design Strategy"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "UX Designer",
        description: "Rigorously study how humans interact with technology, conducting user research to map out the psychological flow and wireframes of software before it is built.",
        summary: "The psychological architects deciding exactly how an app should logically behave to feel intuitive.",
        skills: ["User Flow Mapping", "Wireframing (Balsamiq/Figma)", "A/B Testing", "User Psychology/Empathy", "Portfolio Curation (Deep UX Case Studies)"],
        salaryRange: "India: ₹6L - ₹22L+ | Global: $75K - $140K+",
        educationPath: "B.Des / HCI (Human-Computer Interaction) Degree",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Tech/SaaS Companies", "Banks (FinTech)", "Healthcare Tech", "Automotive (In-Car UI)"],
        futureScope: "Absolutely critical. Beautiful UI is useless if the UX is confusing. As software runs everything from cars to hospitals, UX designers are the ultimate product strategists. Freelancing Opportunities: Yes, UX consulting is a massive freelance market.",
        jobDemandTrend: "Extremely High Demand",
        certifications: ["Nielsen Norman Group (NN/g) UX Certification"],
        roadmap: ["Beginner: UX Researcher", "Junior: UX Designer", "Senior: Senior UX Architect", "Lead: Principal UX Designer", "Creative Director: Chief Experience Officer (CXO)"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Product Designer",
        description: "Blend the roles of UI and UX seamlessly while heavily prioritizing the business goals and market viability of the digital or physical product being created.",
        summary: "The holistic designers responsible for how a product looks, works, and succeeds in the market.",
        skills: ["UI/UX Synthesis", "Product Strategy", "Market Research", "Agile Methodologies", "Portfolio Curation (End-to-End Product Launches)"],
        salaryRange: "India: ₹8L - ₹30L+ | Global: $90K - $160K+",
        educationPath: "B.Des Product Design / Interaction Design",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Silicon Valley Tech Firms", "Global E-Commerce Platforms", "Consumer Electronics", "Startups"],
        futureScope: "The highest paying individual contributor role in tech outside of engineering. They literally 'own' the success of a feature from conception to launch. Freelancing Opportunities: Yes, contract/freelance Product Designers command immense hourly rates.",
        jobDemandTrend: "Highly Lucrative, Rapid Growth",
        certifications: ["Product School / Scrum Product Owner certifications"],
        roadmap: ["Beginner: Junior Designer", "Junior: Product Designer", "Senior: Senior Product Designer", "Lead: Staff Product Designer", "Creative Director: VP of Product"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Industrial Designer",
        description: "Engineer the exact aesthetic curves, ergonomics, and physical materials of mass-produced physical objects, from modern kitchen appliances to PlayStation controllers.",
        summary: "The designers of the physical world, creating the beautiful hardware we physically hold.",
        skills: ["3D CAD Modeling (SolidWorks/Rhino)", "Ergonomics / Human Factors", "Material Science (Alloys/Plastics)", "Rapid Prototyping (3D Printing)", "Portfolio Curation (Physical Renderings & Prototypes)"],
        salaryRange: "India: ₹4L - ₹18L | Global: $65K - $115K",
        educationPath: "B.Des Industrial Design",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Consumer Electronics (Sony/Apple)", "Home Appliance Manufacturers", "Medical Device Corporations", "Furniture Design"],
        futureScope: "Extremely stable. The push for sustainable, eco-friendly physical products requires industrial designers to constantly reinvent how hardware is manufactured. Freelancing Opportunities: Yes, industrial design consulting for hardware startups is lucrative.",
        jobDemandTrend: "Steady, Niche",
        certifications: ["Certified SolidWorks Professional (CSWP)"],
        roadmap: ["Beginner: CAD Drafter", "Junior: Junior Industrial Designer", "Senior: Senior Hardware Designer", "Lead: Principal Industrial Designer", "Creative Director: Chief Design Officer (Hardware)"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Fashion Designer",
        description: "Conceptualize, sketch, and direct the manufacturing of entirely new lines of clothing and accessories, forecasting global cultural trends years in advance.",
        summary: "The trendsetters drafting the clothing, aesthetics, and materials worn on global runways and streets.",
        skills: ["Pattern Making / Draping", "Textile Science", "Trend Forecasting", "Fashion Sketching (Digital/Physical)", "Portfolio Curation (Seasonal Lookbooks)"],
        salaryRange: "India: ₹4L - ₹40L+ | Global: $50K - $200K+ (Highly Variable)",
        educationPath: "B.Des Fashion Design",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Luxury Fashion Houses (Gucci/Prada)", "Fast Fashion (Zara/H&M)", "Retail Brands", "Film/TV Wardrobe"],
        futureScope: "Intensely competitive. The industry is currently shifting massively towards sustainable fashion and digital wearable tech. Freelancing Opportunities: Yes, independent boutique designers or freelance pattern makers.",
        jobDemandTrend: "Highly Competitive",
        certifications: ["Specialized Tailoring / Couture masterclasses"],
        roadmap: ["Beginner: Assistant Designer / Intern", "Junior: Pattern Maker / Junior Designer", "Senior: Head Designer (Specific Line)", "Lead: Creative Director for a Branch", "Creative Director: Global Fashion House Director"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Interior Designer",
        description: "Transform the psychological energy and physical utility of barren indoor spaces—like luxury homes, corporate offices, or restaurants—via furniture, lighting, and spatial flow.",
        summary: "The architectural artists redesigning the exact feeling and functionality of indoor environments.",
        skills: ["AutoCAD / SketchUp", "Lighting/Acoustic Science", "Color/Material Sourcing", "Building Codes/Safety", "Portfolio Curation (High-Res 3D Arch-Viz)"],
        salaryRange: "India: ₹3L - ₹20L+ | Global: $55K - $110K",
        educationPath: "B.Des Interior Design / B.Sc Interior Architecture",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Architecture Firms", "Real Estate Developers", "Hospitality (Hotels/Restaurants)", "Corporate Head offices"],
        futureScope: "Booming. Remote work has caused a massive surge in people wanting to aggressively redesign their homes, while corporations are entirely reworking office spaces. Freelancing Opportunities: Yes, interior design is heavily driven by independent boutique firms.",
        jobDemandTrend: "High Growth",
        certifications: ["NCIDQ (National Council for Interior Design Qualification)"],
        roadmap: ["Beginner: CAD Drafter / Assistant", "Junior: Junior Interior Designer", "Senior: Project Manager (Residential/Commercial)", "Lead: Lead Designer", "Creative Director: Partner / Firm Owner"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Textile Designer",
        description: "Invent the exact physical weave patterns, printed graphics, and chemical properties of massive rolls of fabric used for high fashion, car interiors, and home furniture.",
        summary: "The foundational designers creating the actual fabrics and patterns that other designers use.",
        skills: ["Weave Structure Knowledge", "Digital Print Design (Photoshop/NedGraphics)", "Dye Chemistry", "Trend Analysis", "Portfolio Curation (Fabric Swatches & Digital Repeats)"],
        salaryRange: "India: ₹3L - ₹12L | Global: $50K - $90K",
        educationPath: "B.Des Textile Design",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Apparel Manufacturers", "Automotive Interior Decors", "Home Furnishing Brands", "Textile Mills"],
        futureScope: "Extremely stable. Without textile designers, the fashion and furniture industries literally have no raw materials to work with. There is a massive push for eco-friendly fabrics. Freelancing Opportunities: Yes, selling bespoke repeating patterns to brands as a freelancer.",
        jobDemandTrend: "Steady",
        certifications: ["Sustainable Textile Certifications"],
        roadmap: ["Beginner: Studio Assistant", "Junior: Print/Weave Designer", "Senior: Senior Textile Designer", "Lead: Head of Fabric Development", "Creative Director: Textile Brand Owner / Global Director"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Animation Designer",
        description: "Rig and mathematically animate digital 2D/3D characters, ensuring every single frame of movement obeys physics, weight, and extreme emotional expression.",
        summary: "The digital puppeteers creating realistic movement and emotion in movies and video games.",
        skills: ["Keyframe Animation (Maya/Blender)", "Physics/Weight Simulation", "Character Rigging", "Timing and Pacing", "Portfolio Curation (Dynamic Animation Demo Reels)"],
        salaryRange: "India: ₹4L - ₹15L | Global: $65K - $120K",
        educationPath: "BFA / B.Des Animation",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Major Animation Studios (Pixar/Netflix)", "AAA Video Game Studios", "VFX Houses", "Ad Agencies"],
        futureScope: "Massive demand driven by the global hunger for animated series and massive video games. Highly specialized technical animators (riggers) command immense salaries. Freelancing Opportunities: Yes, contract-based work between blockbuster films/games.",
        jobDemandTrend: "High Growth, Technical",
        certifications: ["Autodesk Maya Certified Professional"],
        roadmap: ["Beginner: Rotoscoping / Clean-up Artist", "Junior: Junior Animator", "Senior: Senior Character Animator", "Lead: Animation Supervisor", "Creative Director: Director of Animation"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Motion Graphics Designer",
        description: "Animate typography, logos, and vector art to create incredibly sleek, fast-paced title sequences for movies, tech commercials, and YouTube channel intros.",
        summary: "The slick visual designers who make logos spin, text fly, and graphics bounce perfectly to music.",
        skills: ["Adobe After Effects", "Cinema 4D Basics", "Kinetic Typography", "Rhythm/Audio Syncing", "Portfolio Curation (High-Energy Motion Reels)"],
        salaryRange: "India: ₹4L - ₹14L | Global: $60K - $100K",
        educationPath: "B.Des Graphic Design / Motion Design",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Tech Giant Marketing Teams", "Broadcast Networks (ESPN/CNN)", "Digital Ad Agencies", "UI/UX Micro-interaction Teams"],
        futureScope: "Every single digital screen requires motion. Tech companies rely heavily on motion designers to make their software commercials look incredibly high-end. Freelancing Opportunities: Yes, an incredibly fast-paced, highly lucrative freelance ecosystem.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["School of Motion bootcamps"],
        roadmap: ["Beginner: Junior Motion Designer", "Junior: Mid-Weight Animator", "Senior: Senior Motion Designer", "Lead: Art Director (Motion)", "Creative Director: Executive Creative Director"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Video Game Designer",
        description: "Draft the absolute psychological core of a video game—designing the rules, level layouts, combat pacing, and completely balancing the difficulty curve so it remains fun.",
        summary: "The architects of fun, designing the exact rules, levels, and pacing of video games.",
        skills: ["Game Engines (Unreal/Unity)", "System Balancing (Math)", "Level Block-outs", "Player Psychology", "Portfolio Curation (Playable Prototypes & Design Docs)"],
        salaryRange: "India: ₹5L - ₹20L | Global: $70K - $130K",
        educationPath: "B.Des Game Design / Computer Science (Optional)",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["AAA Console Developers", "Mobile/Gacha Game Studios", "Indie Game Collectives", "VR/AR Tech Firms"],
        futureScope: "Extremely cutthroat but culturally dominant. The video game industry dwarfs the film and music industries combined, and elite game designers dictate the success of billion-dollar franchises. Freelancing Opportunities: Yes, indie designers often pitch concepts as freelancers.",
        jobDemandTrend: "Competitive, Highly Lucrative",
        certifications: ["Unreal Engine Blueprint/Design Certifications"],
        roadmap: ["Beginner: QA Tester / Level Design Intern", "Junior: Systems / Level Designer", "Senior: Senior Game Designer", "Lead: Lead Game Designer", "Creative Director: Game Director (Vision Holder)"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Web Designer",
        description: "Write basic front-end code (HTML/CSS) while simultaneously designing the visual layouts of massive corporate websites to ensure they are responsive and beautiful on any screen.",
        summary: "The hybrid designers who both draw and code the aesthetic layouts of websites.",
        skills: ["Webflow / WordPress / HTML/CSS", "Responsive Grids", "Typography", "Visual Hierarchy", "Portfolio Curation (Live, Functioning Websites)"],
        salaryRange: "India: ₹3L - ₹12L | Global: $55K - $95K",
        educationPath: "B.Des Graphic Design or Self-Taught",
        yearsOfStudy: "2 to 4 Years",
        industriesHiring: ["Web Development Agencies", "E-Commerce", "SaaS Companies", "Freelance Local Businesses"],
        futureScope: "Evolving rapidly. With tools like Webflow and Framer, Web Designers can now build incredibly complex, high-end websites without needing a hardcore software engineer. Freelancing Opportunities: Yes, designing websites for local/mid-sized businesses is a massive freelance market.",
        jobDemandTrend: "Stable, Shifting to No-Code Tools",
        certifications: ["Webflow Expert Certification / Google Mobile Web Specialist"],
        roadmap: ["Beginner: Junior Web Designer", "Junior: Front-End / Web Designer", "Senior: Senior Web Designer", "Lead: Lead Digital Designer", "Creative Director: Digital Agency Partner"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Visual Communication Designer",
        description: "A hyper-advanced form of graphic design focusing strictly on explaining incredibly complex, data-heavy information (like government policies or medical data) through simple visual infographics.",
        summary: "The analytical designers turning complex, boring data into beautiful, easy-to-understand infographics.",
        skills: ["Data Visualization (Tableau/Illustrator)", "Information Architecture", "Cognitive Psychology", "Typography", "Portfolio Curation (Complex Data Infographics)"],
        salaryRange: "India: ₹4L - ₹14L | Global: $65K - $110K",
        educationPath: "B.Des Visual Communication",
        yearsOfStudy: "4 Years",
        industriesHiring: ["News Organizations (NYT/Reuters)", "Tech/Data Giants", "Government/NGOs", "Healthcare Think Tanks"],
        futureScope: "Extremely stable. As the world produces more complex data, there is a desperate need for designers who can actually make that data readable for normal humans. Freelancing Opportunities: Yes, consulting for corporate annual reports and presentations.",
        jobDemandTrend: "High Growth, Niche Data Field",
        certifications: ["Data Visualization Specializations"],
        roadmap: ["Beginner: Infographic Designer", "Junior: Visual Data Designer", "Senior: Senior Visual Communicator", "Lead: Information Architecture Lead", "Creative Director: Chief Design Officer (Data)"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Packaging Designer",
        description: "Engineer both the physical shape and the vibrant exterior graphics of cardboard, plastic, and glass product packaging to guarantee the item stands out dramatically on a grocery shelf.",
        summary: "The highly specialized designers engineering exactly how a product looks inside its box.",
        skills: ["3D Packaging CAD (Esko/ArtiosCAD)", "Print Production Mechanics", "Brand Identity", "Eco-Materials Knowledge", "Portfolio Curation (Physical 3D Mockups)"],
        salaryRange: "India: ₹4L - ₹15L | Global: $60K - $105K",
        educationPath: "B.Des Graphic Design / Industrial Design",
        yearsOfStudy: "4 Years",
        industriesHiring: ["FMCG (Unilever/P&G)", "Cosmetic/Beauty Brands", "Luxury Goods", "Food & Beverage Distributors"],
        futureScope: "Crucial. You can have the best product in the world, but if the box is ugly, nobody buys it. Massive current push for zero-plastic, biodegradable packaging innovation. Freelancing Opportunities: Yes, highly sought-after for boutique independent brands.",
        jobDemandTrend: "Steady, Shifting to Eco-Packaging",
        certifications: ["Sustainable Packaging Certifications"],
        roadmap: ["Beginner: Packaging Production Artist", "Junior: Packaging Designer", "Senior: Senior Brand Packaging Designer", "Lead: Global Packaging Lead", "Creative Director: Head of Structural & Brand Design"]
    },
    {
        domain: "Arts",
        branch: "Design",
        title: "Automotive Concept Designer",
        description: "Sketch the incredibly sleek, aerodynamic, and futuristic exterior and interior curves for the absolute next generation of electric and hyper-performance vehicles.",
        summary: "The highly elite industrial artists sketching the futuristic curves of tomorrow's electric cars.",
        skills: ["Alias AutoStudio / Advanced 3D modeling", "Class-A Surfacing", "Aerodynamics Basics", "Clay Sculpting (1:4 scale)", "Portfolio Curation (Highly Polished Car Renders)"],
        salaryRange: "India: ₹6L - ₹25L+ | Global: $85K - $160K+",
        educationPath: "B.Des Transportation/Automotive Design",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Global Automakers (Tesla/BMW/Ford)", "EV Startups", "Defense Mobility Contractors", "Boutique Hypercar Brands"],
        futureScope: "The absolute elite tier of industrial design. Extremely competitive and hard to break into, but designing the exterior of an iconic sports car guarantees legendary status. Freelancing Opportunities: No, completely locked into massive corporate design studios under extreme NDAs.",
        jobDemandTrend: "Elite, Extremely Competitive",
        certifications: ["Specialized Automotive Design Bootcamps"],
        roadmap: ["Beginner: Studio Sketcher", "Junior: Exterior/Interior Concept Designer", "Senior: Senior Automotive Designer", "Lead: Chief Designer (Specific Vehicle Model)", "Creative Director: Global Head of Automotive Design"]
    }
];

const seedDesign = async () => {
    try {
        await Career.deleteMany({ branch: "Design" });
        await Career.insertMany(designProfessions);
        console.log('Design Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDesign();
