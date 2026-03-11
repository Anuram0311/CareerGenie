const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const literatureProfessions = [
    {
        domain: "Arts",
        branch: "Literature",
        title: "Author / Novelist",
        description: "Conceptualize, draft, and publish original books, fiction stories, and narrative prose to entertain, inform, or challenge readers globally.",
        summary: "The creative storytellers writing the books, novels, and series that define global culture.",
        skills: ["Creative Writing", "Narrative Pacing", "World Building", "Self-Editing", "Publishing Industry Knowledge"],
        salaryRange: "India: ₹3L - ₹20L+ (Varies by royalty) | Global: $40K - $100K+ (Highly variable)",
        educationPath: "B.A. Literature / Creative Writing (Optional) → M.A. / MFA (Optional)",
        yearsOfStudy: "3 to 5 Years (Self-taught heavily prevalent)",
        industriesHiring: ["Publishing Houses", "Self-Publishing Platforms (Amazon KDP)", "Literary Agencies"],
        futureScope: "Highly competitive but creatively fulfilling. The rise of self-publishing and audiobooks has vastly expanded direct-to-reader profit margins. Freelancing Opportunities: Yes, completely autonomous and freelance-centric.",
        jobDemandTrend: "Variable, Talent-Driven",
        certifications: ["Creative Writing Workshops/Fellowships"],
        roadmap: ["Write initial manuscripts", "Secure a literary agent or self-publish", "Build a dedicated reader base", "Bestselling Author"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Poet",
        description: "Express intense emotions, abstract ideas, and social commentary through highly structured, rhythmical, and carefully chosen language.",
        summary: "The emotional artists using cadence, rhyme, and metaphor to express the deepest aspects of the human condition.",
        skills: ["Lyrical Composition", "Rhythmic Analysis", "Metaphorical Thinking", "Public Performance (Spoken Word)", "Deep Vocabulary"],
        salaryRange: "India: ₹2L - ₹8L (Often supplemental) | Global: $30K - $70K (Mostly grant/academic based)",
        educationPath: "B.A. English / Literature → MFA in Poetry",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Literary Magazines", "Universities (Academia)", "Arts Councils", "Spoken Word Collectives"],
        futureScope: "Extremely niche. Most professional poets sustain themselves through university teaching positions, grants, and public performances. Freelancing Opportunities: Yes, through freelance commissions and self-published chapbooks.",
        jobDemandTrend: "Niche, Passion-Driven",
        certifications: ["Poetry Fellowships (e.g., NEA)"],
        roadmap: ["Publish individual poems in literary journals", "Compile a full-length book/chapbook", "Perform public readings", "Poet Laureate / Tenured Professor"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Screenwriter",
        description: "Write exactly formatted scripts, dialogue, and stage directions for massive Hollywood movies, television series, and streaming platforms.",
        summary: "The structural writers designing the blueprints for movies and television shows.",
        skills: ["Three-Act Structure", "Dialogue Writing", "Visual Storytelling", "Pitching", "Industry Formatting (Final Draft)"],
        salaryRange: "India: ₹5L - ₹30L+ | Global: $70K - $200K+ (WGA minimums apply)",
        educationPath: "B.A. Film/Literature → MFA Screenwriting (Optional)",
        yearsOfStudy: "3 to 5 Years",
        industriesHiring: ["Hollywood/Bollywood Studios", "Streaming Services (Netflix/Amazon)", "Independent Production Companies"],
        futureScope: "Incredibly lucrative but ruthlessly competitive. Streaming services have created a massive explosion in demand for continuous narrative content. Freelancing Opportunities: Yes, entirely freelance/contract-based via writers' guilds.",
        jobDemandTrend: "Competitive, High Reward",
        certifications: ["Writers Guild of America (WGA) Membership"],
        roadmap: ["Write spec scripts", "Secure talent representation (Agent)", "Sell scripts or join a TV writers' room", "Showrunner / Lead Screenwriter"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Playwright / Script Writer",
        description: "Write dramatic scripts and dialogue exclusively intended for live theatrical, stage, or specialized radio performances.",
        summary: "The theatrical writers crafting intimate, live-action plays performed on Broadway or local stages.",
        skills: ["Theatrical Staging Knowledge", "Character Development", "Monologue Writing", "Collaborative Adaptation", "Live Pacing"],
        salaryRange: "India: ₹3L - ₹12L | Global: $40K - $90K",
        educationPath: "B.A. Theater Arts / Literature → MFA Playwriting",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Theaters (Broadway/West End)", "Radio Drama Producers", "Arts Festivals", "Academic Institutions"],
        futureScope: "Highly prestigious. Successful plays are often adapted into massive Hollywood films, providing a secondary route to immense success. Freelancing Opportunities: Yes, script commissions are heavily freelance.",
        jobDemandTrend: "Niche, Stable",
        certifications: ["Memberships in Dramatists Guilds"],
        roadmap: ["Write short one-act plays", "Get staged at local theater festivals", "Secure off-Broadway runs", "Award-Winning Playwright"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Editor",
        description: "Critically review, revise, and heavily restructure raw written manuscripts to ensure absolute clarity, grammatical perfection, and narrative flow.",
        summary: "The meticulous polishers who turn raw, messy drafts into published, flawless masterpieces.",
        skills: ["Developmental Editing", "Grammar/Syntax Mastery", "Style Guides (Chicago/AP)", "Fact-Checking", "Author Communication"],
        salaryRange: "India: ₹4L - ₹12L | Global: $55K - $90K",
        educationPath: "B.A. English / Journalism / Mass Communication",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Major Publishing Houses", "Magazines & Newspapers", "Corporate Marketing Departments", "Academic Journals"],
        futureScope: "Extremely stable. No piece of professional writing, from Harry Potter to the New York Times, is ever published without an editor. Freelancing Opportunities: Yes, highly sought after for freelance manuscript editing.",
        jobDemandTrend: "Stable, High Demand",
        certifications: ["ACES Certificate in Editing"],
        roadmap: ["Editorial Assistant", "Associate Editor", "Manage specific book genres/authors", "Editor-in-Chief"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Content Writer",
        description: "Write highly engaging, optimized electronic content such as blog posts, website copy, and articles to drive digital traffic and brand awareness.",
        summary: "The digital storytellers writing the massive volume of blogs and web content we read daily.",
        skills: ["SEO Optimization", "Digital Copywriting", "Audience Research", "CMS Operations (WordPress)", "Adaptable Tone"],
        salaryRange: "India: ₹3L - ₹8L | Global: $45K - $80K",
        educationPath: "B.A. English / Communications / Marketing",
        yearsOfStudy: "3 Years",
        industriesHiring: ["Digital Marketing Agencies", "Tech Startups", "E-commerce Brands", "Media Outlets"],
        futureScope: "Massive volume of jobs available globally. Every company needs a web presence, requiring constant written content. Freelancing Opportunities: Yes, one of the most accessible and widespread freelance careers globally.",
        jobDemandTrend: "Extremely High Volume",
        certifications: ["HubSpot Content Marketing / Google SEO Certifications"],
        roadmap: ["Junior Content Writer", "Master SEO strategies", "Manage corporate blogs", "Head of Digital Content Strategy"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Copywriter",
        description: "Write intensely persuasive, mathematically tested advertising text specifically designed to make consumers instantly buy a product or click a link.",
        summary: "The advertising psychologists using written words to instantly generate millions in corporate sales.",
        skills: ["Persuasive Writing", "Consumer Psychology", "A/B Testing", "Conversion Rate Optimization (CRO)", "Brand Voice Mastery"],
        salaryRange: "India: ₹4L - ₹15L | Global: $60K - $110K",
        educationPath: "B.A. Advertising / English / Psychology",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Advertising Agencies (Ogilvy/McCann)", "Tech SaaS Companies", "Direct-Response Marketers"],
        futureScope: "Extremely lucrative. A copywriter who can write an email that generates $1M in sales is arguably the most valuable employee in a company. Freelancing Opportunities: Yes, elite freelance copywriters charge immense fees per project.",
        jobDemandTrend: "High Demand, Lucrative",
        certifications: ["Direct Response Copywriting Courses"],
        roadmap: ["Write basic ad copy", "Master conversion psychology", "Write multi-million dollar ad campaigns", "Chief Creative Director (Copy)"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Technical Writer",
        description: "Translate unbelievably complex engineering or software concepts into simple, readable instruction manuals and documentation for normal users.",
        summary: "The technical translators who turn complex software code into easy-to-read user manuals.",
        skills: ["Complex Information Synthesis", "API Documentation", "Software Knowledge (Markdown/Git)", "User Experience (UX) Writing"],
        salaryRange: "India: ₹6L - ₹18L | Global: $75K - $120K",
        educationPath: "B.A. English + B.Sc Computer Science / IT Background",
        yearsOfStudy: "4 Years",
        industriesHiring: ["Software Giants (Microsoft/Google)", "Engineering Firms", "Medical Device Manufacturers", "Aerospace"],
        futureScope: "Highly stable and very well paid. Tech companies desperately need writers who understand code but can write flawless English. Freelancing Opportunities: Yes, massive freelance market for writing API docs for startups.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Certified Professional Technical Communicator (CPTC)"],
        roadmap: ["Write basic user manuals", "Learn API and developer logic", "Manage massive software documentation libraries", "Lead Technical Writer"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Literary Critic",
        description: "Analyze, interpret, and rigorously evaluate published literature to dictate cultural relevance, artistic merit, and historical context.",
        summary: "The academic judges who review and assign cultural value to literature, poetry, and modern novels.",
        skills: ["Literary Theory", "Critical Analysis", "Deep Historical Context", "Academic Writing", "Media Publishing"],
        salaryRange: "India: ₹4L - ₹10L | Global: $50K - $90K",
        educationPath: "B.A. Literature → M.A. / Ph.D in Literature",
        yearsOfStudy: "5 to 8 Years",
        industriesHiring: ["Major Newspapers (NYT/Guardian)", "Literary Magazines", "Academic Journals", "Publishing Houses"],
        futureScope: "Prestigious but highly competitive. Top critics hold immense power; a brilliant review in the NYT can instantly create a bestselling author. Freelancing Opportunities: Yes, most modern critics freelance reviews to multiple magazines.",
        jobDemandTrend: "Niche, Prestige-Driven",
        certifications: ["Extensive published reviews"],
        roadmap: ["Write reviews for local papers", "Develop a unique critical voice", "Publish in elite literary journals", "Senior Critic / Editor-at-Large"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Translator",
        description: "Translate entire novels, legal documents, and poetry from a foreign language into a native language without losing the author's original soul and tone.",
        summary: "The cultural bridges translating foreign masterpieces into new languages for global audiences.",
        skills: ["Bilingual/Multilingual Fluency", "Cultural Nuance Understanding", "Creative Adaptation", "Grammar Mastery", "Translation Software (CAT Tools)"],
        salaryRange: "India: ₹4L - ₹12L | Global: $50K - $95K",
        educationPath: "B.A. Foreign Languages / Literature + Translation Studies",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Global Publishing Houses", "International NGOs (UN/EU)", "Localization Agencies", "Game Studios"],
        futureScope: "Crucial for globalizing literature. The massive success of translated works (like Japanese Manga or Nordic Noir) has exploded demand. Freelancing Opportunities: Yes, the vast majority of literary translation is freelance.",
        jobDemandTrend: "Steady Growth",
        certifications: ["American Translators Association (ATA) Certification"],
        roadmap: ["Master a secondary language", "Translate short stories/articles", "Translate massive bestselling novels", "Elite Literary Translator"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Publisher",
        description: "Manage the absolute financial, legal, and operational process of turning a raw manuscript into a printed book, distributed to millions of stores globally.",
        summary: "The business executives of the book world, deciding what gets printed and how it makes money.",
        skills: ["Market Trend Analysis", "Contract Negotiation", "Financial Modeling", "Distribution Logistics", "Talent Scouting"],
        salaryRange: "India: ₹8L - ₹25L+ | Global: $80K - $150K+",
        educationPath: "B.A. Literature → MBA or M.A. in Publishing",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Big 5 Publishing Houses (Penguin/Macmillan)", "Independent Presses", "Academic Textbook Publishers"],
        futureScope: "Extremely powerful role. They dictate the cultural zeitgeist by choosing which authors receive million-dollar marketing budgets. Freelancing Opportunities: No, heavily corporate and salaried.",
        jobDemandTrend: "Competitive, Executive",
        certifications: ["Publishing Institute Certificates (e.g., Columbia Publishing Course)"],
        roadmap: ["Editorial Assistant", "Acquisitions Editor", "Curate a profitable list of authors", "Publisher / CEO"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Literary Journalist",
        description: "Combine the hard-hitting facts of journalism with the beautiful narrative prose of literature to write massive, engaging long-form magazine features.",
        summary: "The long-form narrators writing the deeply researched, beautiful feature stories in magazines like The New Yorker.",
        skills: ["Narrative Non-Fiction", "Deep Investigative Research", "Interviewing Tactics", "Story Pacing", "Fact-Checking"],
        salaryRange: "India: ₹4L - ₹14L | Global: $55K - $100K",
        educationPath: "B.A. Journalism / Literature → MFA Narrative Nonfiction",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Elite Magazines (The Atlantic, New Yorker)", "Long-form Digital Media", "Book Publishers (True Crime/Biographies)"],
        futureScope: "Highly respected. The best literary journalists often adapt their articles into massive, award-winning non-fiction books. Freelancing Opportunities: Yes, exclusively pitching feature articles to massive magazines as a freelancer.",
        jobDemandTrend: "Niche, Highly Respected",
        certifications: ["Journalism Fellowships"],
        roadmap: ["Write short news pieces", "Pitch long-form narrative features", "Publish a massive non-fiction book", "Award-Winning Staff Writer"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Literature Professor",
        description: "Teach completely advanced university courses dissecting classic and modern literature, while publishing original intense academic research on literary history.",
        summary: "The academic guardians of human history and culture, teaching the masterpieces of world literature.",
        skills: ["Pedagogy", "Academic Publishing", "Deep Historical Knowledge", "Literary Theory", "Public Speaking"],
        salaryRange: "India: ₹6L - ₹20L | Global: $70K - $130K",
        educationPath: "B.A. → M.A. → Ph.D in Literature / English",
        yearsOfStudy: "8 to 10 Years",
        industriesHiring: ["Universities", "Elite Preparatory Schools", "Academic Research Institutes"],
        futureScope: "Extremely stable but requires immense dedication. Tenure-track positions are incredibly difficult to secure but offer lifetime employment. Freelancing Opportunities: No, highly institutionalized.",
        jobDemandTrend: "Steady, Academic",
        certifications: ["State Level Eligibility Exams (e.g., NET in India)"],
        roadmap: ["Complete Ph.D in specific literary era", "Publish peer-reviewed papers", "Secure tenure-track", "Tenured Literature Professor"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Creative Writing Specialist",
        description: "Consult heavily on narrative structures for video games, interactive media, comics, and trans-media franchises, ensuring the story remains engaging across all platforms.",
        summary: "The narrative architects building stories for video games, comic books, and interactive media.",
        skills: ["Interactive Storytelling", "Branching Narratives", "Game Engine Knowledge (Twine/Unreal)", "World Building", "Scriptwriting"],
        salaryRange: "India: ₹5L - ₹18L | Global: $70K - $130K",
        educationPath: "B.A. Creative Writing / Game Design",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["AAA Video Game Studios", "Comic Book Publishers", "Virtual Reality (VR) Developers", "Transmedia Agencies"],
        futureScope: "Explosive growth. The video game industry dwarfs Hollywood in revenue, and they desperately need writers who understand branching, player-driven narratives. Freelancing Opportunities: Yes, heavily utilized as freelance narrative consultants.",
        jobDemandTrend: "Explosive Demand",
        certifications: ["Narrative Design Workshops"],
        roadmap: ["Write indie game scripts", "Master branching dialogue trees", "Write for AAA massive RPGs", "Lead Narrative Director"]
    },
    {
        domain: "Arts",
        branch: "Literature",
        title: "Speech Writer",
        description: "Ghostwrite massive, historically significant, and incredibly persuasive speeches for Presidents, CEOs, and global leaders designed to move millions of listeners.",
        summary: "The invisible authors writing the famous speeches delivered by politicians and global billionaires.",
        skills: ["Rhetorical Devices", "Political Knowledge", "Voice Mimicry", "Persuasion", "Crisis Communication"],
        salaryRange: "India: ₹6L - ₹25L+ | Global: $80K - $160K+",
        educationPath: "B.A. English / Political Science / Communications",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Federal Governments (Prime Minister/President offices)", "Fortune 500 CEOs", "Political Campaigns", "PR Firms"],
        futureScope: "Extremely powerful behind-the-scenes role. The words of a top speechwriter can literally swing a national election or save a crashing company. Freelancing Opportunities: Yes, elite executive speechwriters often work on massive freelance retainers.",
        jobDemandTrend: "Elite, High Impact",
        certifications: ["Public Relations / Rhetoric specialized courses"],
        roadmap: ["Write local PR statements", "Develop a persuasive political voice", "Draft speeches for Senators/CEOs", "Chief Presidential Speechwriter"]
    }
];

const seedLiterature = async () => {
    try {
        await Career.deleteMany({ branch: "Literature" });
        await Career.insertMany(literatureProfessions);
        console.log('Literature Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedLiterature();
