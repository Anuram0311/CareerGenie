const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const fineArtsProfessions = [
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Fine Artist",
        description: "Devote life entirely to the creation of purely aesthetic, non-commercial artwork—spanning painting, drawing, or mixed media—driven solely by personal artistic vision.",
        summary: "The pure visionaries creating artwork solely for emotional expression and gallery exhibition.",
        skills: ["Mastery of Chosen Medium", "Conceptual Thinking", "Art History", "Self-Promotion", "Portfolio Curation (15+ Signature Cohesive Pieces)"],
        salaryRange: "India: ₹2L - ₹20L+ | Global: $20K - $100K+ (Extremely variable based on gallery success)",
        educationPath: "BFA (Bachelor of Fine Arts) → MFA (Master of Fine Arts)",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["High-End Art Galleries", "Museum Exhibitions", "Private Billionaire Collectors", "Corporate Art Buyers"],
        futureScope: "A difficult, highly romanticized, but deeply fulfilling career. Success relies almost entirely on getting 'discovered' by an elite gallery. Freelancing/Exhibition Opportunities: Yes, entirely independent. Constant gallery staging is required.",
        jobDemandTrend: "Niche, Talent-Driven",
        certifications: ["Prestigious Art Residencies (e.g., MacDowell)"],
        roadmap: ["Student: Learn foundational techniques", "Emerging Artist: Local group shows", "Established Artist: Solo gallery representation", "Master Artist: Work acquired by National Museums"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Sculptor",
        description: "Transform raw, unyielding materials like marble, bronze, clay, or modern plastics into massive, three-dimensional physical art installations.",
        summary: "The three-dimensional artists carving, casting, and welding physical materials into beautiful forms.",
        skills: ["Spatial Intelligence", "Material Science (Bronze/Stone/Clay)", "Welding/Carving", "Anatomy/Proportions", "Portfolio Curation (3D Documentation & Maquettes)"],
        salaryRange: "India: ₹3L - ₹15L | Global: $40K - $85K",
        educationPath: "BFA Sculpture → MFA Sculpture (Optional)",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Public Arts Commissions (Govt)", "Museums", "Theatrical Set Design", "Bronze Foundries"],
        futureScope: "Extremely physical and highly respected. Cities constantly commission massive bronze or abstract steel sculptures for public parks. Freelancing/Exhibition Opportunities: Yes, predominantly commissioned by cities or private estates.",
        jobDemandTrend: "Steady, Commission-Based",
        certifications: ["Specialized Bronze Casting/Welding safety certs"],
        roadmap: ["Student: Clay modeling / basic casting", "Emerging Artist: Small gallery pieces", "Established Artist: Public city commissions", "Master Artist: Monumental global installations"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Art Conservator",
        description: "Combine extreme chemistry, art history, and meticulous steady hands to restore, clean, and preserve ancient, priceless masterpieces from decay.",
        summary: "The scientific artists who use chemistry to repair and save 500-year-old priceless paintings.",
        skills: ["Chemistry / Material Science", "Microscopic Analysis", "X-Ray / Infrared Imaging", "Flawless Color Matching", "Extreme Patience"],
        salaryRange: "India: ₹5L - ₹15L | Global: $60K - $100K",
        educationPath: "B.A. Art History + B.Sc Chemistry → M.A. Art Conservation",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["National Museums (Louvre/Metropolitan)", "Historical Societies", "Elite Private Collectors", "Auction Houses"],
        futureScope: "High prestige and immense responsibility. A conservator might be the only person allowed to physically touch a $100 million Da Vinci painting. Freelancing/Exhibition Opportunities: Yes, elite private collectors hire freelance conservators extensively.",
        jobDemandTrend: "Niche, Highly Specialized",
        certifications: ["American Institute for Conservation (AIC) Peer Review"],
        roadmap: ["Student: Chemistry and Art History", "Emerging Artist: Assistant Conservator", "Established Artist: Lead Restorer for specific eras", "Master Artist: Chief Conservator of a National Museum"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Printmaker",
        description: "Utilize historical transfer techniques like etching, lithography, and woodcut to press highly intricate, limited-edition art prints onto archival paper.",
        summary: "The mechanical artists carving wood and metal plates to create beautiful, limited-edition stamped artworks.",
        skills: ["Etching / Engraving", "Lithography Chemistry", "Relief Carving", "Press Operation", "Portfolio Curation (Editioned Print Series)"],
        salaryRange: "India: ₹3L - ₹10L | Global: $35K - $75K",
        educationPath: "BFA Printmaking",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Fine Art Presses", "Graphic Design Studios", "Textile Manufacturing", "Publishing Houses"],
        futureScope: "A beautiful synthesis of art and machinery. Printmaking allows fine artists to democratize their work by selling limited 'editions' rather than one expensive original. Freelancing/Exhibition Opportunities: Yes, heavily reliant on indie art fairs.",
        jobDemandTrend: "Stable, Niche",
        certifications: ["Master Printer Apprenticeship Programs"],
        roadmap: ["Student: Learn acid etching safely", "Emerging Artist: Sell editions at print fairs", "Established Artist: Contracted by major presses", "Master Artist: Master Printer / Studio Owner"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Ceramic Artist",
        description: "Spin, mold, and fire raw earth (clay and porcelain) in massive kilns to create functional pottery or complex, abstract ceramic sculptures.",
        summary: "The earth-shapers turning wet clay into beautiful, permanent glass-like sculptures using extreme heat.",
        skills: ["Wheel Throwing", "Glaze Chemistry", "Kiln Firing (Gas/Electric/Wood)", "Sculptural Building", "Portfolio Curation (Functional vs Sculptural forms)"],
        salaryRange: "India: ₹2L - ₹12L | Global: $30K - $70K",
        educationPath: "BFA Ceramics or Studio Apprenticeship",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Independent Studios", "Interior Decor/Architecture", "Fine Dining (Custom Dishware)", "Galleries"],
        futureScope: "Experiencing a massive modern renaissance. High-end restaurants and interior designers are abandoning factory plates for bespoke, handmade ceramic art. Freelancing/Exhibition Opportunities: Yes, highly entrepreneurial/freelance.",
        jobDemandTrend: "Growing Culturally",
        certifications: ["Specialized Glaze Chemistry Workshops"],
        roadmap: ["Student: Center clay on the wheel", "Emerging Artist: Sell mugs/bowls at craft fairs", "Established Artist: Gallery-represented ceramic sculptures", "Master Artist: Internationally renowned ceramicist"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Installation Artist",
        description: "Design and physically construct massive, temporary, room-sized immersive art environments using light, sound, and mixed materials to completely surround the viewer.",
        summary: "The spatial visionaries transforming entire museum rooms into interactive, mind-bending visual experiences.",
        skills: ["Spatial Architecture", "Multimedia Integration (Light/Sound)", "Carpentry/Rigging", "Grant Writing", "Portfolio Curation (Video walkthroughs of spaces)"],
        salaryRange: "India: ₹4L - ₹15L | Global: $50K - $100K (Mostly Grant/Commission funded)",
        educationPath: "MFA Fine Arts / Sculpture / Architecture",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Biennials (Venice Biennale)", "Contemporary Art Museums", "Massive Music Festivals (Coachella/Burning Man)"],
        futureScope: "The bleeding edge of contemporary art. Audiences today crave 'Instagrammable', immersive experiences (like Yayoi Kusama's Infinity Rooms). Freelancing/Exhibition Opportunities: Yes, funded entirely by massive grants or city commissions.",
        jobDemandTrend: "High Demand in Contemporary Spaces",
        certifications: ["Major Art Council Grants/Fellowships"],
        roadmap: ["Student: Build small room dioramas", "Emerging Artist: Local gallery installations", "Established Artist: City-funded public installations", "Master Artist: Headline the Venice Biennale"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Performance Artist",
        description: "Use their own physical body, endurance, and direct audience interaction in real-time as the actual medium of the artwork, challenging social norms.",
        summary: "The radical artists using their own physical bodies and endurance as the art piece itself.",
        skills: ["Physical Stamina/Endurance", "Psychological Provocation", "Public Speaking/Silence", "Theatrical Staging", "Portfolio Curation (Video/Photo Documentation)"],
        salaryRange: "India: ₹1L - ₹8L | Global: $20K - $70K (Funded via grants/teaching)",
        educationPath: "BFA / MFA Fine Arts / Theatre",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Avant-Garde Galleries", "Contemporary Museums", "Underground Theatres", "Universities"],
        futureScope: "The most controversial and difficult niche in Fine Arts (think Marina Abramović). It requires immense psychological endurance and is highly academic. Freelancing/Exhibition Opportunities: Yes, completely independent and heavily reliant on arts grants.",
        jobDemandTrend: "Niche, Highly Academic",
        certifications: ["Not applicable; deeply portfolio/reputation based"],
        roadmap: ["Student: Experimental theatre", "Emerging Artist: Underground gallery performances", "Established Artist: Museum-commissioned durational pieces", "Master Artist: Global cultural icon"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Art Historian",
        description: "Rigorously study, document, and analyze the entire timeline of global human art to definitively explain how historical politics and culture influenced painting and sculpture.",
        summary: "The academic scholars explaining exactly why the Mona Lisa was painted and what it meant to the Renaissance.",
        skills: ["Archival Research", "Multiple Language Fluency Context", "Academic Writing", "Visual Analysis", "Historical Contextualization"],
        salaryRange: "India: ₹5L - ₹15L | Global: $60K - $110K",
        educationPath: "B.A. Art History → M.A. → Ph.D Art History",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Universities", "National Museums", "Auction Houses (Sotheby’s)", "Publishing (Academic)"],
        futureScope: "Extremely stable but highly academic. They are the ultimate authenticators; an art historian's verified opinion can change a painting's value from $1,000 to $10,000,000. Freelancing/Exhibition Opportunities: No, usually highly institutionalized.",
        jobDemandTrend: "Steady, Academic",
        certifications: ["Publishing in Peer-Reviewed Art Journals"],
        roadmap: ["Student: Memorize artistic eras", "Emerging Artist: Publish first peer-reviewed paper", "Established Artist: Tenured Professor / Senior Researcher", "Master Artist: World Authority on a specific Art Era"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Fine Art Critic",
        description: "Critically evaluate modern and historical art exhibitions, publishing highly influential reviews in elite magazines to dictate current artistic trends to the public.",
        summary: "The elite writers judging and reviewing gallery shows for major newspapers and art magazines.",
        skills: ["Aesthetic Judgment", "Persuasive Writing", "Deep Art History Knowledge", "Networking", "Cultural Trend Forecasting"],
        salaryRange: "India: ₹4L - ₹12L | Global: $50K - $95K",
        educationPath: "B.A. Art History / Journalism",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Elite Magazines (Artforum/ARTnews)", "Major Newspapers (NYT)", "Academic Journals"],
        futureScope: "Very prestigious. A brilliant art critic holds immense power over the art market, capable of making or breaking an emerging artist's entire career with one review. Freelancing/Exhibition Opportunities: Yes, heavy freelance writing for varied publications.",
        jobDemandTrend: "Competitive, Prestige-Driven",
        certifications: ["Extensive published portfolio"],
        roadmap: ["Student: Write for university papers", "Emerging Artist: Review local indie galleries", "Established Artist: Staff writer for Artforum", "Master Artist: Chief Art Critic for a Major Global Newspaper"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Gallery Curator",
        description: "Operate commercial art spaces, actively scouting new artistic talent, organizing breathtaking exhibitions, and violently negotiating sales to wealthy private collectors.",
        summary: "The commercial art directors discovering new painters and selling their work to billionaires.",
        skills: ["Art Appraising", "High-End Sales/Negotiation", "Exhibition Design", "Talent Scouting", "Elite Client Networking"],
        salaryRange: "India: ₹6L - ₹30L+ | Global: $60K - $150K+ (Commission-heavy)",
        educationPath: "B.A. Art History / Arts Management",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Commercial Art Galleries (Gagosian/Pace)", "Corporate Art Advisories", "Art Fairs (Art Basel)"],
        futureScope: "Extremely lucrative. This is the 'business' side of Fine Art. Top gallery curators act as elite brokers for the ultra-wealthy. Freelancing/Exhibition Opportunities: Yes, independent art advisors work freelance for billionaires.",
        jobDemandTrend: "Highly Competitive, Lucrative",
        certifications: ["Arts Administration/Management courses"],
        roadmap: ["Student: Gallery Assistant", "Emerging Artist: Junior Art Dealer", "Established Artist: Director of a mid-tier gallery", "Master Artist: Owner/Partner of a Blue-Chip Global Gallery"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Museum Curator",
        description: "Acquire, protect, and meticulously display historically significant, priceless artworks for public education inside massive state or national institutions.",
        summary: "The intellectual guardians of national museums, deciding exactly which ancient paintings the public sees.",
        skills: ["Academic Research", "Grant Acquisition", "Artifact Preservation", "Public Education Planning", "Curatorial Leadership"],
        salaryRange: "India: ₹5L - ₹18L | Global: $65K - $120K",
        educationPath: "Ph.D in Art History / Museum Studies",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["National Museums (Smithsonian/Tate)", "State Cultural Departments", "Historical Archives"],
        futureScope: "The pinnacle of academic art careers. Unlike gallery curators who sell art, museum curators protect it for the public forever. Freelancing/Exhibition Opportunities: No, highly institutionalized government/trust jobs.",
        jobDemandTrend: "Highly Competitive, Academic",
        certifications: ["Association of Art Museum Curators (AAMC)"],
        roadmap: ["Student: Museum intern/docent", "Emerging Artist: Assistant Curator", "Established Artist: Head of a specific museum wing (e.g., Renaissance)", "Master Artist: Chief Curator of a National Museum"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Fine Art Professor",
        description: "Teach advanced studio techniques (painting/sculpture) and art theory to university students while maintaining a rigorous personal exhibition schedule.",
        summary: "The dual-threat masters who teach art at the university level while still painting and exhibiting their own work.",
        skills: ["Pedagogy / Teaching", "Advanced Studio Techniques", "Critique Leading", "Academic Publishing", "Portfolio Curation (Ongoing Exhibitions)"],
        salaryRange: "India: ₹6L - ₹20L | Global: $70K - $130K",
        educationPath: "MFA (Master of Fine Arts) is strictly required.",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Universities", "Elite Art Conservatories (RISD/CalArts)"],
        futureScope: "The holy grail for many fine artists. It provides a highly stable, excellent salary (via tenure) while completely funding their personal art practice. Freelancing/Exhibition Opportunities: Yes, professors are expected to continuously exhibit in galleries.",
        jobDemandTrend: "Stable, Highly Coveted",
        certifications: ["MFA Degree is the terminal requirement in Fine Arts"],
        roadmap: ["Student: Excel in MFA program", "Emerging Artist: Adjunct/Visiting Professor", "Established Artist: Tenure-Track Professor", "Master Artist: Tenured Department Chair"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Contemporary Artist",
        description: "Break all traditional rules of painting and sculpture by using AI, rubbish, digital media, or extreme concepts to create jarring, modern, thought-provoking gallery pieces.",
        summary: "The modern rule-breakers using bizarre concepts and new tech to create the art of the 21st century.",
        skills: ["Conceptual Disruption", "Multimedia Fluency", "Provocation", "Trend Analysis", "Portfolio Curation (Highly Abstract/Conceptual)"],
        salaryRange: "India: ₹3L - ₹25L+ | Global: $40K - $200K+ (Highly variable)",
        educationPath: "BFA / MFA Contemporary Arts",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Contemporary Art Galleries", "Modern Art Museums (MoMA/Tate Modern)", "Private Collectors"],
        futureScope: "Extremely polarizing but wildly lucrative at the top (think Damien Hirst or Banksy). It requires massive conceptual bravery to redefine what 'art' even is. Freelancing/Exhibition Opportunities: Yes, entirely independent and gallery-driven.",
        jobDemandTrend: "Niche, High Risk/High Reward",
        certifications: ["Residencies in major art hubs (Berlin/NY/London)"],
        roadmap: ["Student: Experiment with non-traditional media", "Emerging Artist: Indie conceptual shows", "Established Artist: Represented by a major Blue-Chip gallery", "Master Artist: Retrospective at MoMA"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Mixed Media Artist",
        description: "Blend entirely different traditional mediums—such as oil paint, digital photography, torn newspaper, and welded metal—into a single, chaotic, beautiful canvas.",
        summary: "The collage masters blending paint, photographs, and trash into stunning, textured artworks.",
        skills: ["Material Blending (Collage/Assemblage)", "Adhesive Chemistry", "Compositional Balance", "Resource Scavenging", "Portfolio Curation (Highly Textured Works)"],
        salaryRange: "India: ₹2L - ₹12L | Global: $35K - $80K",
        educationPath: "BFA Studio Art / Mixed Media",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Boutique Art Galleries", "Interior Design Consultancies", "Fashion Brand Collaborations"],
        futureScope: "Very popular in modern interior design and boutique galleries. The heavy texture of mixed media pieces makes them impossible to replicate digitally, holding high value. Freelancing/Exhibition Opportunities: Yes, heavily reliant on freelance commissions.",
        jobDemandTrend: "Steady",
        certifications: ["Specialized workshops in Assemblage/Collage"],
        roadmap: ["Student: Experiment combining paint and photo", "Emerging Artist: Sell heavily textured pieces locally", "Established Artist: Secure boutique gallery representation", "Master Artist: Major international mixed media exhibitions"]
    },
    {
        domain: "Arts",
        branch: "Fine Arts",
        title: "Fresco / Mural Conservator",
        description: "Climb massive scaffolding in ancient churches or historical buildings to meticulously repair and restore ancient plaster paintings (Frescos) painted directly into walls.",
        summary: "The ancient-architecture specialists saving 1,000-year-old ceiling paintings and temple walls.",
        skills: ["Plaster Chemistry", "Scaffolding Operation", "Renaissance Art History", "Extreme Precision", "Climate/Moisture Control"],
        salaryRange: "India: ₹6L - ₹18L | Global: $65K - $110K",
        educationPath: "M.A. Art Conservation + specialized Architectural Heritage training",
        yearsOfStudy: "6 to 8 Years",
        industriesHiring: ["UNESCO World Heritage Organizations", "Governments (Archaeological Surveys)", "Vatican / Diocesan Trusts"],
        futureScope: "An incredibly elite, specialized niche. When the Sistine Chapel or the Ajanta Caves need cleaning, these are the only people on Earth permitted to do it. Freelancing/Exhibition Opportunities: Yes, contracted by global heritage sites.",
        jobDemandTrend: "Elite, Extremely Niche",
        certifications: ["Architectural Conservation specialized diplomas (e.g., in Italy)"],
        roadmap: ["Student: Learn plaster chemistry", "Emerging Artist: Assistant on heritage sites", "Established Artist: Lead restorer for a historical church", "Master Artist: UNESCO Chief Conservator"]
    }
];

const seedFineArts = async () => {
    try {
        await Career.deleteMany({ branch: "Fine Arts" });
        await Career.insertMany(fineArtsProfessions);
        console.log('Fine Arts Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedFineArts();
