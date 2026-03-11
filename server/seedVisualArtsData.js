const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const visualArtsProfessions = [
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Painter",
        description: "Create profound, emotive visual artwork using oils, acrylics, and watercolors on physical canvases to express abstract ideas, landscapes, or portraits.",
        summary: "The traditional artists expressing raw human emotion and beautiful landscapes through physical paint and canvas.",
        skills: ["Color Theory", "Brushwork Techniques", "Composition", "Art History", "Portfolio Curation (10+ High-Quality Physical Pieces)"],
        salaryRange: "India: ₹2L - ₹20L+ | Global: $30K - $100K+ (Highly variable based on gallery sales)",
        educationPath: "BFA (Bachelor of Fine Arts) in Painting / Self-Taught",
        yearsOfStudy: "4 Years (Lifelong practice)",
        industriesHiring: ["Art Galleries", "Museums", "Private Collectors", "Interior Design Firms"],
        futureScope: "A purist, passionate path. Income thrives on building a profound personal brand and securing gallery representation. Freelance Opportunities: Yes, entirely independent and freelance-driven.",
        jobDemandTrend: "Niche, Talent-Driven",
        certifications: ["Exhibition Awards / Residency Programs"],
        roadmap: ["Beginner: Paint daily & sell locally", "Intermediate: Join group gallery exhibitions", "Professional: Solo gallery shows", "Expert: Globally collected artist"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Illustrator",
        description: "Draw highly specific, stylized images—either traditional or digital—to visually explain concepts, accompany text in books, or design brand mascots.",
        summary: "The visual storytellers drawing the beautiful images seen in children's books, magazines, and brand campaigns.",
        skills: ["Digital Illustration (Procreate/Photoshop)", "Anatomy Drawing", "Visual Storytelling", "Client Communication", "Portfolio Curation (Versatile Style Showcase)"],
        salaryRange: "India: ₹3L - ₹10L | Global: $45K - $85K",
        educationPath: "BFA in Illustration / Graphic Design",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Book Publishing", "Advertising Agencies", "Editorial Magazines", "Animation Studios"],
        futureScope: "Extremely viable and rapidly evolving with digital media. Illustrators are constantly needed for advertising and editorial content. Freelance Opportunities: Yes, a massive and highly lucrative freelance market exists globally.",
        jobDemandTrend: "Stable, High Demand",
        certifications: ["Advanced Digital Art Masterclasses"],
        roadmap: ["Beginner: Fan art / small commissions", "Intermediate: Editorial magazine illustrations", "Professional: Lead illustrator for publishing houses", "Expert: World-renowned signature style"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Sketch Artist",
        description: "Specialize in rapid, highly accurate pencil, charcoal, or digital sketches often used in law enforcement (forensics), courtroom observations, or live event portraiture.",
        summary: "The rapid-draw experts creating high-accuracy portraits for police departments, courts, and live events.",
        skills: ["Facial Anatomy", "Rapid Observation", "Shading/Cross-Hatching", "Patience and Focus", "Interviewing (for Forensic work)"],
        salaryRange: "India: ₹2L - ₹6L | Global: $35K - $70K",
        educationPath: "BFA or specialized Diploma in Drawing / Forensics",
        yearsOfStudy: "2 to 3 Years",
        industriesHiring: ["Law Enforcement Agencies (CBI/FBI)", "Media/News (Courtroom Sketches)", "Tourism (Live Caricature)"],
        futureScope: "A specialized niche. Forensic sketch artists remain vital for generating suspect composites directly from traumatized witness memories. Freelance Opportunities: Yes, mostly gig-based or contracted by police departments.",
        jobDemandTrend: "Niche, Stable",
        certifications: ["Forensic Facial Imaging Certification (IAI)"],
        roadmap: ["Beginner: Live portraits/caricatures", "Intermediate: Courtroom sketching", "Professional: Law enforcement composite artist", "Expert: Lead Forensic Artist"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Digital Artist",
        description: "Utilize advanced software, drawing tablets, and 3D modeling tools to paint and construct immersive digital artwork for video games, movies, and NFT markets.",
        summary: "The modern painters replacing physical canvas with drawing tablets to create flawless digital masterpieces.",
        skills: ["Adobe Photoshop", "ZBrush / Blender basics", "Digital Painting Techniques", "Lighting/Rendering", "Portfolio Curation (High-Res Digital Renders)"],
        salaryRange: "India: ₹4L - ₹15L | Global: $55K - $110K",
        educationPath: "BFA Digital Art / Animation",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Video Game Studios", "VFX Houses", "Web3/Crypto Art Platforms", "Marketing Agencies"],
        futureScope: "Massive growth. Digital art is the absolute backbone of modern entertainment, from mobile game assets to massive Hollywood matte paintings. Freelance Opportunities: Yes, incredibly common globally via ArtStation/Upwork.",
        jobDemandTrend: "High Growth",
        certifications: ["Autodesk / Adobe Certified Expert"],
        roadmap: ["Beginner: Online portfolio building", "Intermediate: Junior artist at a game studio", "Professional: Senior Digital Painter", "Expert: Art Director / Lead Digital Concept Artist"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Concept Artist",
        description: "Design the initial, unseen visual foundation—characters, vehicles, and environments—that dictates exactly how a video game or blockbuster sci-fi movie will eventually look.",
        summary: "The imaginative architects designing the brilliant monsters, spaceships, and heroes of movies and video games.",
        skills: ["Rapid Ideation", "World Building", "Photobashing", "Perspective/Scale Mastery", "Portfolio Curation (Iterative Design Breakdowns)"],
        salaryRange: "India: ₹5L - ₹20L | Global: $65K - $120K+",
        educationPath: "BFA Entertainment Design / Concept Art",
        yearsOfStudy: "4 Years",
        industriesHiring: ["AAA Video Game Developers (Naughty Dog/Ubisoft)", "Film Studios (Marvel/Disney)", "Animation Houses"],
        futureScope: "The absolute elite tier of digital art. A single concept artist's sketch can define the entire billion-dollar aesthetic of a Star Wars film. Freelance Opportunities: Yes, elite concept artists contract per movie/game.",
        jobDemandTrend: "Highly Competitive, Elite",
        certifications: ["Gnomon School of Visual Effects Diplomas"],
        roadmap: ["Beginner: Prop/Weapon concept designs", "Intermediate: Environment design", "Professional: Lead Character Concept Artist", "Expert: Principal Visual Architect"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Graphic Novelist",
        description: "Write, draw, and ink massive, book-length comic narratives that blend the deep pacing of literature with the striking visual impact of sequential art.",
        summary: "The dual-threat creators who write gripping novels and draw every single page themselves.",
        skills: ["Sequential Storytelling", "Inking and Coloring", "Panel Layout/Pacing", "Typography/Lettering", "Scriptwriting"],
        salaryRange: "India: ₹3L - ₹12L | Global: $40K - $90K (Heavily royalty-based)",
        educationPath: "BFA Sequential Art / Illustration",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Major Comic Publishers (DC/Marvel/Image)", "Book Publishers (Scholastic)", "Independent/Kickstarter"],
        futureScope: "Booming. Graphic novels are one of the fastest-growing sectors in global publishing, appealing heavily to young adults and cinematic adaptations. Freelance Opportunities: Yes, creators often retain IP and self-publish.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Sequential Art Masterclasses"],
        roadmap: ["Beginner: Self-published webcomics", "Intermediate: Indie graphic novel release", "Professional: Traditional publishing deal", "Expert: Bestselling / Eisner Award-Winning Creator"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Comic Artist",
        description: "Draw dynamic, action-packed sequential panels for monthly comic book series, focusing specifically on anatomy, intense action angles, and perfect pacing.",
        summary: "The action-oriented draftspeople drawing the monthly adventures of Batman, Spider-Man, and Manga heroes.",
        skills: ["Dynamic Human Anatomy", "Perspective Drawing", "Draftsmanship", "Speed/Deadline Management", "Portfolio Curation (Sequential Action Pages)"],
        salaryRange: "India: ₹3L - ₹10L | Global: $45K - $85K (Paid per page)",
        educationPath: "BFA Sequential Art / Highly Portfolio Driven",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Comic Publishers (Marvel/DC/Dark Horse)", "Manga Studios", "Animation Storyboard Teams"],
        futureScope: "Highly demanding and deadline-driven. Successful comic artists build massive fanbases and sell original physical artwork for extreme premiums. Freelance Opportunities: Yes, they operate entirely as freelancers paid strictly per page.",
        jobDemandTrend: "Stable, Culturally Impactful",
        certifications: ["Kubert School Diplomas (Optional)"],
        roadmap: ["Beginner: Indie comic anthologies", "Intermediate: Regular artist on a monthly comic", "Professional: Exclusive contract with Marvel/DC", "Expert: Legendary Creator / IP Owner"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Art Director",
        description: "Manage and dictate the entire visual aesthetic and style guide for a magazine, advertising campaign, or video game, leading a large team of subordinate artists.",
        summary: "The visual generals commanding teams of artists and graphic designers to ensure a project looks stunning and cohesive.",
        skills: ["Project Management", "Brand Identity", "Visual Aesthetics", "Typography/Layout", "Leadership"],
        salaryRange: "India: ₹8L - ₹30L | Global: $80K - $150K+",
        educationPath: "BFA Graphic Design / Visual Arts + Management Experience",
        yearsOfStudy: "5+ Years of Industry Experience",
        industriesHiring: ["Advertising Agencies", "Publishing Houses", "Game Studios", "Corporate Marketing"],
        futureScope: "The ultimate leadership goal for many artists. Art Directors make high-level aesthetic decisions rather than drawing the final lines themselves. Freelance Opportunities: Yes, acting as freelance consultants for major brand overhauls.",
        jobDemandTrend: "Competitive, Executive",
        certifications: ["Management / Branding Masterclasses"],
        roadmap: ["Beginner: Junior Graphic Designer", "Intermediate: Senior Designer", "Professional: Art Director", "Expert: Chief Creative Officer (CCO)"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Visual Designer",
        description: "Design exactly how digital interfaces, mobile applications, and software platforms look and feel, blending pure artistic aesthetics with technical user experience (UX) logic.",
        summary: "The tech-savvy artists making the apps and websites you use every day look beautiful and easy to read.",
        skills: ["UI/UX Principles", "Figma / Adobe XD", "Color Theory for Screens", "Typography", "Portfolio Curation (Interactive Prototypes)"],
        salaryRange: "India: ₹5L - ₹20L | Global: $70K - $130K",
        educationPath: "B.Des (Bachelor of Design) / Graphic Design",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Tech Startups", "Software Giants (Google/Apple)", "Digital Agencies", "E-Commerce"],
        futureScope: "Massive demand. As every business moves online, they desperately require artists who understand how to make digital screens visually appealing. Freelance Opportunities: Yes, highly lucrative freelance UI/UX contracts globally.",
        jobDemandTrend: "Extremely High Demand",
        certifications: ["Google UX Design Certificate"],
        roadmap: ["Beginner: Web/App asset designer", "Intermediate: Senior UI designer", "Professional: Lead Visual Designer", "Expert: Head of Product Design"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Exhibition Designer",
        description: "Architect and physically stage massive, immersive walkthrough environments for museums, art galleries, and trade shows to safely and beautifully display artifacts.",
        summary: "The spatial artists who design exactly how museum artifacts and gallery paintings are displayed to the public.",
        skills: ["Spatial Design / 3D Modeling", "Lighting Design", "Visitor Flow Psychology", "Carpentry/Fabrication Basics", "Curatorial Collaboration"],
        salaryRange: "India: ₹4L - ₹14L | Global: $55K - $95K",
        educationPath: "B.Des Interior Design / BFA / Museum Studies",
        yearsOfStudy: "4 Years",
        industriesHiring: ["National Museums", "Art Galleries", "Trade Show/Event Planners", "Cultural Heritage Sites"],
        futureScope: "Stable and very fulfilling. Modern museums rely heavily on interactive, beautiful exhibition designs to attract younger generations. Freelance Opportunities: Yes, often contracted per major museum exhibit.",
        jobDemandTrend: "Steady, Niche",
        certifications: ["Museum Exhibition Design Certificates"],
        roadmap: ["Beginner: Assistant designer", "Intermediate: Manage standard gallery layouts", "Professional: Lead designer for national museums", "Expert: Global Exhibition Consultant"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Mural Artist",
        description: "Paint massive, culturally significant, or corporate-branded artwork directly onto the sides of large city buildings, interior walls, and public infrastructure.",
        summary: "The large-scale painters turning massive city buildings and corporate offices into brilliant works of art.",
        skills: ["Large-Scale Proportions (Grid Method)", "Spray Paint / Aerosol Mastery", "Scaffolding Safety", "Weatherproofing", "Public Client Negotiation"],
        salaryRange: "India: ₹3L - ₹15L | Global: $40K - $100K+ (Charge per square foot)",
        educationPath: "BFA Painting / Self-Taught Street Art Background",
        yearsOfStudy: "3+ Years of physical scaling practice",
        industriesHiring: ["City Councils / Urban Development", "Corporate Offices (Google/Facebook)", "Restaurants/Cafes", "Private Real Estate"],
        futureScope: "Booming. Cities use murals to reduce graffiti and gentrify neighborhoods, while modern tech offices constantly commission interior murals to inspire employees. Freelance Opportunities: Yes, 100% freelance and contract-based.",
        jobDemandTrend: "Growing Culturally",
        certifications: ["OSHA Scaffolding / Working at Heights Safety Certs"],
        roadmap: ["Beginner: Small cafe interior walls", "Intermediate: City-funded public art initiatives", "Professional: Corporate office murals", "Expert: Internationally renowned street artist"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Storyboard Artist",
        description: "Draw hundreds of fast, sequential, comic-like panels that pre-visualize exactly how a movie director's camera will move and frame a shot before filming begins.",
        summary: "The cinematic illustrators drawing the entire movie on paper before the cameras even turn on.",
        skills: ["Cinematic Framing (Wides/Close-ups)", "Perspective Drawing", "Rapid Speed Sketching", "Camera Optics Knowledge", "Animatics (ToonBoom)"],
        salaryRange: "India: ₹4L - ₹12L | Global: $60K - $110K",
        educationPath: "BFA Animation / Film Production",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Film and TV Studios", "Animation Houses (Pixar/Dreamworks)", "Advertising Agencies", "Video Game Cinematics"],
        futureScope: "Extremely secure. No massive blockbuster (especially CGI-heavy films like Marvel) is ever filmed without first being fully drawn by storyboard artists. Freelance Opportunities: Yes, hired strictly on a per-movie or per-commercial freelance basis.",
        jobDemandTrend: "High Demand",
        certifications: ["Animation Guild (TAG) Membership"],
        roadmap: ["Beginner: Storyboard 30-second commercials", "Intermediate: TV animation storyboards", "Professional: Feature film sequences", "Expert: Lead Story Artist / Episodic Director"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Tattoo Artist",
        description: "Operate high-speed motorized needles to permanently embed brilliant, custom-designed ink artwork deep into the dermis layer of human skin safely and hygienically.",
        summary: "The ultimate permanent artists, designing and embedding flawless ink masterpieces into human skin.",
        skills: ["Machine Operation (Coil/Rotary)", "Bloodborne Pathogen Safety", "Custom Linework/Shading", "Client Pain Management", "Portfolio Curation (Healed Tattoos)"],
        salaryRange: "India: ₹3L - ₹20L+ | Global: $50K - $150K+ (Hourly rates can be immense)",
        educationPath: "Formal Tattoo Apprenticeship (1-3 years)",
        yearsOfStudy: "2 to 3 Years directly under a Master Artist",
        industriesHiring: ["Tattoo Studios", "Tattoo Conventions", "Private High-End Ateliers"],
        futureScope: "Massive cultural acceptance has caused the industry to explode. Elite tattoo artists can charge thousands of dollars per day and have massive global waiting lists. Freelance Opportunities: Yes, artists are essentially independent contractors renting chairs.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["Bloodborne Pathogens Certification / State Health Licenses"],
        roadmap: ["Beginner: Shop apprentice (Cleaning/Drawing)", "Intermediate: Junior artist taking walk-ins", "Professional: Fully booked custom artist", "Expert: World-renowned signature style / Shop Owner"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Photo Editor / Retoucher",
        description: "Use advanced software to rigorously clean, color-correct, composite, and entirely reconstruct digital photographs for high-end fashion magazines and advertising.",
        summary: "The digital magicians who make fashion models look flawless and product photos look perfect.",
        skills: ["Advanced Photoshop/Lightroom", "Color Grading", "Frequency Separation (Skin Retouching)", "Compositing", "Non-Destructive Editing"],
        salaryRange: "India: ₹3L - ₹10L | Global: $45K - $85K",
        educationPath: "BFA Photography / Graphic Design",
        yearsOfStudy: "3 Years",
        industriesHiring: ["Fashion Magazines (Vogue/GQ)", "E-Commerce Giants", "Advertising Agencies", "Wedding/Event Studios"],
        futureScope: "Stable and highly necessary. While AI is speeding up workflows, high-end brands still demand human editors for flawless, magazine-quality skin and lighting retouching. Freelance Opportunities: Yes, incredibly high volume freelance industry.",
        jobDemandTrend: "Stable",
        certifications: ["Adobe Certified Professional (Photoshop)"],
        roadmap: ["Beginner: Basic wedding/event color correction", "Intermediate: E-Commerce product retouching", "Professional: High-end fashion editorial retouching", "Expert: Lead retoucher for massive ad campaigns"]
    },
    {
        domain: "Arts",
        branch: "Visual Arts",
        title: "Art Curator",
        description: "Acquire, preserve, and strategically organize massive collections of historical and contemporary artwork into cohesive, emotionally impactful museum exhibitions.",
        summary: "The intellectual guardians of art galleries, deciding exactly which paintings the public sees and why.",
        skills: ["Art History Mastery", "Grant Writing", "Artifact Preservation Basics", "Exhibition Narrative Building", "Networking (Collectors/Artists)"],
        salaryRange: "India: ₹4L - ₹15L | Global: $55K - $110K",
        educationPath: "M.A. or Ph.D in Art History / Curatorial Studies",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["National/State Art Museums", "Commercial Art Galleries", "Private Billionaire Collections", "Auction Houses (Sotheby's/Christie's)"],
        futureScope: "Highly prestigious and incredibly competitive. Curators wield massive power in the art world, as their selection can instantly legitimize a new artist. Freelance Opportunities: Yes, independent curators organize pop-up shows globally.",
        jobDemandTrend: "Niche, Highly Competitive",
        certifications: ["Association of Art Museum Curators (AAMC) Guidelines"],
        roadmap: ["Beginner: Gallery assistant / Researcher", "Intermediate: Assistant Curator", "Professional: Head Curator of a specific department", "Expert: Museum Director / Chief Curator"]
    }
];

const seedVisualArts = async () => {
    try {
        await Career.deleteMany({ branch: "Visual Arts" });
        await Career.insertMany(visualArtsProfessions);
        console.log('Visual Arts Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedVisualArts();
