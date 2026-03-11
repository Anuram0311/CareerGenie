const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const mediaProfessions = [
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Journalist",
        description: "Investigate, verify, and report fast-breaking news, complex political events, and human interest stories across print and digital media to keep the public informed.",
        summary: "The dedicated truth-seekers investigating and reporting the daily events that shape our world.",
        skills: ["Investigative Research", "Interviewing Techniques", "Shorthand/Fast Typing", "Media Ethics / Libel Law", "Story Structuring"],
        salaryRange: "India: ₹3L - ₹12L | Global: $40K - $85K",
        educationPath: "B.A. Journalism / Mass Communication",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["National Newspapers", "Digital News Portals", "Magazines", "Wire Services (AP/Reuters)"],
        futureScope: "Crucial, but shifting heavily towards digital media and data-journalism. High-quality investigative journalism remains a pillar of democracy. Freelancing Opportunities: Yes, incredibly common to pitch freelance articles to various publications.",
        jobDemandTrend: "Stable, Evolving",
        certifications: ["Specialized Investigative Journalism Fellowships"],
        roadmap: ["Entry Level: Junior Reporter / Intern", "Mid Level: Beat Reporter (City/Politics)", "Senior Level: Investigative Feature Writer", "Leadership: Bureau Chief / Editor"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "News Reporter",
        description: "Operate constantly in the field, delivering live, on-the-scene updates of unfolding events, natural disasters, or political rallies directly to television or radio audiences.",
        summary: "The frontline broadcasters delivering live news directly from the scene of unfolding events.",
        skills: ["Live Broadcasting (Stand-ups)", "Improvisation", "Crisis Reporting", "Vocal Projection", "On-Camera Composure"],
        salaryRange: "India: ₹4L - ₹15L | Global: $45K - $90K",
        educationPath: "B.A. Broadcast Journalism / Mass Communication",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Television News Networks", "Radio Stations", "Local Cable Affiliates", "Digital Broadcasters"],
        futureScope: "Highly demanding and fast-paced. 24/7 news cycles ensure constant demand for reporters willing to travel immediately to breaking stories. Freelancing Opportunities: Yes, freelance stringers sell footage and reporting to networks.",
        jobDemandTrend: "Steady, Fast-Paced",
        certifications: ["Hostile Environment Training (for War Correspondents)"],
        roadmap: ["Entry Level: Field Assistant", "Mid Level: Local News Reporter", "Senior Level: National Correspondent", "Leadership: Chief Foreign Correspondent"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "News Anchor",
        description: "Serve as the definitive face of a major broadcast network, seamlessly delivering complex news scripts live regarding global politics, economics, and world events.",
        summary: "The charismatic, trusted faces of broadcast television, anchoring the nightly news for millions.",
        skills: ["Teleprompter Reading", "Impeccable Diction", "Charisma and Trustworthiness", "Live Interviewing", "Breaking News Ad-libbing"],
        salaryRange: "India: ₹8L - ₹50L+ | Global: $80K - $1M+ (Highly Variable)",
        educationPath: "B.A. Broadcast Journalism + Extensive On-Camera Experience",
        yearsOfStudy: "3 to 4 Years (Plus decades of reporting)",
        industriesHiring: ["National News Channels (CNN/BBC)", "Local Network Affiliates", "Digital Streaming News"],
        futureScope: "The absolute elite pinnacle of broadcast journalism. The top anchors wield immense sociopolitical influence and command massive salaries. Freelancing Opportunities: No, highly contracted and exclusive to networks.",
        jobDemandTrend: "Highly Competitive, Elite",
        certifications: ["Extensive On-Air Reporting Portfolio"],
        roadmap: ["Entry Level: Morning Show Co-Host", "Mid Level: Weekend Anchor", "Senior Level: Prime Time Daily Anchor", "Leadership: Managing Editor / Lead National Anchor"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Media Planner",
        description: "Strategically analyze massive demographic data to decide exactly where, when, and how a corporation should spend its multi-million dollar advertising budget.",
        summary: "The data-driven strategists deciding exactly which TV shows or websites should run a company's advertisements.",
        skills: ["Data Analytics / Demographics", "Budget Allocation", "Media Buying Software", "Market Research", "Negotiation"],
        salaryRange: "India: ₹5L - ₹18L | Global: $60K - $110K",
        educationPath: "B.A. Advertising / Media Studies / Marketing",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Advertising Agencies", "Corporate Marketing Departments", "Media Buying Firms", "Tech Giants"],
        futureScope: "Extremely lucrative and data-heavy. As digital advertising gets more complex, human planners are required to optimize massive corporate ad-spend. Freelancing Opportunities: Yes, acting as freelance media consultants for mid-sized brands.",
        jobDemandTrend: "High Growth",
        certifications: ["Google/Meta Certified Media Planning Professional"],
        roadmap: ["Entry Level: Junior Media Buyer", "Mid Level: Media Planner", "Senior Level: Ad Campaign Director", "Leadership: Chief Advertising Officer"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Public Relations (PR) Specialist",
        description: "Aggressively protect, shape, and promote the absolute public image of a massive corporation, celebrity, or politician, handling everything from press releases to crisis management.",
        summary: "The professional image-makers protecting exactly how the public perceives a brand or celebrity.",
        skills: ["Crisis Communication", "Press Release Writing", "Journalist Networking", "Brand Image Strategy", "Damage Control"],
        salaryRange: "India: ₹4L - ₹20L | Global: $55K - $120K",
        educationPath: "B.A. Public Relations / Corporate Communication",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["PR Agencies (Edelman/Ogilvy)", "Celebrity Talent Agencies", "Political Campaigns", "Corporate HQs"],
        futureScope: "Intense but essential. Whenever a massive corporate scandal hits, PR specialists are instantly deployed to save the company's valuation. Freelancing Opportunities: Yes, independent publicists manage specific celebrity/indie clients.",
        jobDemandTrend: "Stable, High Stress",
        certifications: ["Accreditation in Public Relations (APR)"],
        roadmap: ["Entry Level: PR Coordinator", "Mid Level: Account Executive", "Senior Level: Crisis Management Director", "Leadership: Head of Global Public Relations"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Corporate Communication Manager",
        description: "Manage all internal and external messaging for massive global companies, ensuring employees and shareholders understand the brand's exact vision and policies.",
        summary: "The official voice of a massive company, communicating directly to employees, investors, and the public.",
        skills: ["Executive Ghostwriting", "Internal Newsletters", "Shareholder Reports", "Speechwriting", "C-Suite Collaboration"],
        salaryRange: "India: ₹8L - ₹25L+ | Global: $80K - $150K",
        educationPath: "M.A. Corporate Communication / MBA",
        yearsOfStudy: "5 to 6 Years",
        industriesHiring: ["Multinational Corporations (MNCs)", "Tech Giants", "Banks / Financial Institutions", "Hospitals"],
        futureScope: "Extremely stable and lucrative. They act as the absolute bridge between the CEO and the 10,000 employees underneath them. Freelancing Opportunities: No, completely salaried and highly integrated into corporate structure.",
        jobDemandTrend: "Corporate, Executive Path",
        certifications: ["Certified Corporate Communicator programs"],
        roadmap: ["Entry Level: Internal Comms Specialist", "Mid Level: Communications Manager", "Senior Level: Director of Corporate Communications", "Leadership: VP of Communications"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Content Strategist",
        description: "Architect the massive, overarching yearly content plans for brands—deciding exactly what kind of blogs, videos, and articles are published to maximize audience growth.",
        summary: "The masterminds designing the exact long-term content strategy for massive digital brands.",
        skills: ["SEO Roadmapping", "Audience Persona Development", "Content Auditing", "Editorial Calendar Management", "Analytics interpretation"],
        salaryRange: "India: ₹6L - ₹20L | Global: $70K - $120K",
        educationPath: "B.A. Mass Communication / Digital Marketing",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Digital Marketing Agencies", "E-Commerce", "SaaS Companies", "Media Publishers"],
        futureScope: "Massive demand. They don't just write the blogs; they dictate exactly what the writers should write to ensure Google ranks the company first. Freelancing Opportunities: Yes, highly sought-after freelance digital strategists for startups.",
        jobDemandTrend: "High Growth",
        certifications: ["HubSpot Content Strategy / Google Analytics Certification"],
        roadmap: ["Entry Level: SEO Content Writer", "Mid Level: Content Editor", "Senior Level: Senior Content Strategist", "Leadership: Head of Content Marketing"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Social Media Manager",
        description: "Control the direct, daily online voice of a massive brand across Instagram, TikTok, and X, actively engaging with millions of customers in real-time.",
        summary: "The digital voices of massive brands, running their global Instagram, TikTok, and Twitter accounts.",
        skills: ["Platform Algorithms (TikTok/IG)", "Trend Forecasting", "Community Management", "Copywriting (Short-form)", "Social Analytics"],
        salaryRange: "India: ₹4L - ₹15L | Global: $50K - $95K",
        educationPath: "B.A. Digital Media / Communications",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Consumer Brands (Nike/Wendy's)", "Entertainment Franchises", "Political Figures", "Ad Agencies"],
        futureScope: "Universally necessary. A single viral tweet or TikTok can generate millions in sales for a brand overnight, making this role incredibly high-leverage. Freelancing Opportunities: Yes, incredibly common gig for managing local businesses.",
        jobDemandTrend: "Explosive Growth",
        certifications: ["Meta Social Media Marketing Professional"],
        roadmap: ["Entry Level: Social Media Coordinator", "Mid Level: Social Media Manager", "Senior Level: Director of Social Strategy", "Leadership: VP of Digital Audience Engagement"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Broadcast Producer",
        description: "Oversee the absolute complete execution of live TV or radio shows, directly commanding hosts, cameras, timings, and commercial breaks from a high-pressure control room.",
        summary: "The control-room generals dictating exactly what happens on live television minute by minute.",
        skills: ["Live Control Room Operation", "Rundown Assembly (iNews/ENPS)", "Decisive Leadership", "Time Management", "Script Editing"],
        salaryRange: "India: ₹6L - ₹25L | Global: $65K - $130K",
        educationPath: "B.A. Broadcast Journalism / Television Production",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Live News Networks (Fox/CNN)", "Sports Broadcasters (ESPN)", "Talk Shows", "Radio Syndicates"],
        futureScope: "Incredibly high stress but highly rewarding. The producer literally talks into the Anchor's earpiece while the show is live. There is zero room for error. Freelancing Opportunities: No, entirely network staff-based.",
        jobDemandTrend: "Stable, High Stress",
        certifications: ["Extensive Control Room hours"],
        roadmap: ["Entry Level: Production Assistant (PA)", "Mid Level: Line Producer", "Senior Level: Senior Executive Producer", "Leadership: Network Head of Production"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Video Producer",
        description: "Manage the entire lifecycle of a digital video project—from hiring the crew, securing the budget, shooting the footage, to overseeing the final editing.",
        summary: "The project managers of the video world, organizing budgets, crews, and edits for YouTube and Commercials.",
        skills: ["Budgeting", "Crew Management", "Pre-Production Logistics", "Video Editing Basics (Premiere)", "Storyboarding"],
        salaryRange: "India: ₹5L - ₹18L | Global: $60K - $110K",
        educationPath: "B.A. Film Production / Media Studies",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["YouTube Channels (MrBeast/MKBHD)", "Creative/Ad Agencies", "Corporate In-House Media", "Documentary Studios"],
        futureScope: "Digital video dominates internet traffic. Producers who can rapidly execute high-quality videos for YouTube/Corporate are in explosive demand. Freelancing Opportunities: Yes, heavily freelance; producers often jump from shoot to shoot.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Project Management Professional (PMP) - Optional"],
        roadmap: ["Entry Level: Production Assistant", "Mid Level: Associate Producer", "Senior Level: Lead Digital Video Producer", "Leadership: Head of Video Production"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Media Radio Jockey (RJ)",
        description: "Host dynamic, unscripted live audio broadcasts, blending music, interviews, breaking news, and audience call-ins to entertain millions of commuters.",
        summary: "The highly charismatic hosts driving live radio shows, podcasts, and audio entertainment.",
        skills: ["Charismatic Vocal Delivery", "Audio Console Operation", "Interviewing", "Improvisational Comedy", "Audience Engagement"],
        salaryRange: "India: ₹4L - ₹18L | Global: $45K - $100K",
        educationPath: "B.A. Mass Communication / Broadcast Journalism",
        yearsOfStudy: "3 Years",
        industriesHiring: ["National Radio Networks", "Podcast Networks", "SiriusXM / Satellite Radio", "Sports Radio"],
        futureScope: "Shifting heavily toward Podcasting. Traditional terrestrial radio is adapting, requiring RJs to transition their skills into massive digital on-demand audio formats. Freelancing Opportunities: Yes, top RJs often run independent Patreon podcasts.",
        jobDemandTrend: "Evolving to Podcasting",
        certifications: ["Radio Broadcasting Diplomas"],
        roadmap: ["Entry Level: Night/Weekend Host", "Mid Level: Prime-Time Drive Host", "Senior Level: Nationally Syndicated Host", "Leadership: Director of Audio Programming"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Television Presenter",
        description: "Serve as the energetic, engaging face of entertainment shows, reality TV competitions, or documentaries, guiding the audience through the televised experience.",
        summary: "The charismatic, energetic hosts leading game shows, reality TV, and entertainment broadcasts.",
        skills: ["On-Camera Charisma", "Teleprompter / Ear-Piece Navigation", "Live Audience Interaction", "Improvisation", "Memorization"],
        salaryRange: "India: ₹5L - ₹40L+ | Global: $60K - $500K+ (Highly Variable)",
        educationPath: "B.A. Mass Communication / Theatre / Specialized Hosting Classes",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Entertainment Networks", "Reality TV Producers", "Travel/Documentary Channels", "Sports Broadcasts"],
        futureScope: "Extremely competitive and lucrative. A great presenter can elevate a mediocre TV show into a global phenomenon. Freelancing Opportunities: Yes, normally hired as independent contractors per TV season.",
        jobDemandTrend: "Competitive, Elite",
        certifications: ["Specialized TV Hosting Masterclasses"],
        roadmap: ["Entry Level: Local entertainment reporter", "Mid Level: Host of niche cable shows", "Senior Level: Prime-time reality show host", "Leadership: Network Face / Executive Producer"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Media Analyst",
        description: "Use advanced software to scrape and analyze exactly how a brand is being discussed across thousands of newspapers, blogs, and tweets globally in real-time.",
        summary: "The media monitors tracking exactly when, where, and how a brand is mentioned on the internet globally.",
        skills: ["Media Intelligence Tools (Meltwater/Cision)", "Sentiment Analysis", "Data Visualization", "Trend Forecasting", "Report Compilation"],
        salaryRange: "India: ₹4L - ₹12L | Global: $55K - $95K",
        educationPath: "B.A. Media Studies / Data Analytics",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Media Intelligence Agencies", "PR Firms", "Political Polling Groups", "Fortune 500 Analytics"],
        futureScope: "Data is the new oil. Companies pay massive amounts to know exactly if a new product launch is being received positively or negatively on Twitter/News. Freelancing Opportunities: Yes, acting as freelance media monitors for medium brands.",
        jobDemandTrend: "Growing Data Field",
        certifications: ["Data Analytics / Meltwater Certifications"],
        roadmap: ["Entry Level: Media Monitor", "Mid Level: Senior Media Analyst", "Senior Level: Director of Insights and Analytics", "Leadership: Chief Data Officer (Communications)"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Communication Specialist",
        description: "Ensure that every single email, memo, and press release coming out of a company uses the exact same voice, tone, and grammatical structure.",
        summary: "The incredibly detail-oriented writers ensuring a company's voice is perfectly consistent everywhere.",
        skills: ["Style Guide Adherence", "Proofreading/Copyediting", "Corporate Voice Emulation", "Interdepartmental Coordination", "Document Formatting"],
        salaryRange: "India: ₹4L - ₹14L | Global: $50K - $85K",
        educationPath: "B.A. English / Communications",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Corporate HQs", "Non-Profits (NGOs)", "Healthcare Institutions", "Universities"],
        futureScope: "Stable and detail-oriented. A hospital or massive bank absolutely relies on these specialists to ensure critical patient/client emails are flawless. Freelancing Opportunities: Yes, freelance corporate editing is extremely common.",
        jobDemandTrend: "Stable",
        certifications: ["Corporate Communications Certificates"],
        roadmap: ["Entry Level: Communications Assistant", "Mid Level: Communication Specialist", "Senior Level: Senior Comms Manager", "Leadership: Director of Internal Operations Voice"]
    },
    {
        domain: "Arts",
        branch: "Media and Communication",
        title: "Digital Content Creator",
        description: "Operate as a one-person media empire—independently filming, editing, starring in, and marketing original viral videos directly to millions of YouTube or TikTok subscribers.",
        summary: "The independent internet stars shooting, editing, and starring in their own viral YouTube and TikTok videos.",
        skills: ["Algorithm Manipulation", "Video Production (Shooting/Editing)", "Audience Hooking", "Sponsorship Negotiation", "Charisma"],
        salaryRange: "India: ₹2L - ₹50L+ | Global: $30K - $1M+ (Entirely dependent on views/sponsors)",
        educationPath: "None required. Entirely portfolio and audience-driven.",
        yearsOfStudy: "Self-taught through massive experimentation.",
        industriesHiring: ["Self-Employed (YouTube/TikTok/Twitch)", "MCNs (Multi-Channel Networks)", "eSports Organizations"],
        futureScope: "The most desired career for modern youth. The top 1% achieve unimaginable wealth and cultural influence, completely bypassing traditional Hollywood gatekeepers. Freelancing Opportunities: Yes, this is the ultimate freelance/independent media career.",
        jobDemandTrend: "Explosive, Highly Saturated",
        certifications: ["Self-Taught / Algorithm Analysis"],
        roadmap: ["Entry Level: 0-10k Subscribers (Testing content)", "Mid Level: 100k Subscribers (Full-time income)", "Senior Level: 1M+ Subscribers (Hiring a team)", "Leadership: Independent Media Studio CEO"]
    }
];

const seedMediaComm = async () => {
    try {
        await Career.deleteMany({ branch: "Media and Communication" });
        await Career.insertMany(mediaProfessions);
        console.log('Media and Communication Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedMediaComm();
