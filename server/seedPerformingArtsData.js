const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Career = require('./models/Career');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const performingArtsProfessions = [
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Actor (Film & Stage)",
        description: "Portray characters in film, television, theatre, and digital media to entertain or inform massive audiences by interpreting writer scripts under a director's guidance.",
        summary: "The faces of entertainment who bring fictional and historical characters to life on screen and stage.",
        skills: ["Method Acting", "Memorization", "Voice Modulation", "Camera Awareness", "Emotional Intelligence"],
        salaryRange: "India: ₹3L - ₹50L+ | Global: $40K - $1M+ (Highly Variable)",
        educationPath: "B.A. Theatre Arts / Drama → Specialized Acting Conservatory Training",
        yearsOfStudy: "3 to 4 Years (Continuous training required)",
        industriesHiring: ["Hollywood/Bollywood Studios", "Streaming Networks (Netflix)", "Broadway Theatre", "Advertising Agencies"],
        futureScope: "Extremely polarized. A tiny percentage achieves massive wealth, while most treat it as a passionate, supplemental career. Freelance Opportunities: Yes, almost completely freelance/contract-based per project.",
        jobDemandTrend: "Highly Competitive",
        certifications: ["National School of Drama (NSD) / Juilliard Diplomas"],
        roadmap: ["Beginner: Background extra / indie films", "Intermediate: Supporting roles in TV/Stage", "Professional: Lead roles in major productions", "Expert: A-List Global Actor"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Theatre Artist",
        description: "Perform exclusively in live theatrical settings, combining raw acting, live immediate audience feedback, and physical endurance over months of continuous shows.",
        summary: "The purist stage performers who deliver live, unedited emotional performances night after night.",
        skills: ["Live Improvisation", "Vocal Projection", "Stage Combat", "Physical Stamina", "Ensemble Collaboration"],
        salaryRange: "India: ₹2L - ₹10L | Global: $30K - $80K",
        educationPath: "B.A. Performing Arts / Drama",
        yearsOfStudy: "3 to 4 Years",
        industriesHiring: ["Regional Theatres", "Broadway/West End", "Touring Theatre Companies", "Fringe Festivals"],
        futureScope: "Highly respected but financially challenging. Many transition into film acting or coaching for higher pay. Freelance Opportunities: Yes, predominantly contract-to-contract per theatre season.",
        jobDemandTrend: "Stable, Niche Passion",
        certifications: ["Specialized workshops (e.g., Meisner/Stanislavski)"],
        roadmap: ["Beginner: Local community theatre", "Intermediate: Regional theatre contracts", "Professional: Broadway/National tours", "Expert: Renowned Stage Veteran"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Professional Dancer",
        description: "Use the human body to perform incredibly strenuous, highly choreographed movements set to music to express profound emotion or cultural storytelling.",
        summary: "The physical artists expressing complex musical rhythms and stories entirely through body movement.",
        skills: ["Physical Flexibility/Strength", "Rhythm and Timing", "Choreography Retention", "Various Dance Styles", "Performance Endurance"],
        salaryRange: "India: ₹3L - ₹15L | Global: $30K - $85K",
        educationPath: "B.A. Dance or Years of Elite Private Studio Training",
        yearsOfStudy: "10+ Years (Typically starting in childhood)",
        industriesHiring: ["Ballet/Contemporary Companies", "Music Video Productions", "Cruise Ships", "Theme Parks"],
        futureScope: "Very physically demanding with a relatively short career span as a primary performer; most naturally transition into choreography or teaching. Freelance Opportunities: Yes, highly gig-based.",
        jobDemandTrend: "Competitive, Physically Demanding",
        certifications: ["Royal Academy of Dance (RAD) Certifications"],
        roadmap: ["Beginner: Corps de ballet / Backup dancer", "Intermediate: Featured soloist", "Professional: Principal dancer", "Expert: Solo Artist / Artistic Director"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Choreographer",
        description: "Invent, design, and direct the exact complex physical dance routines specifically tailored for stage shows, massive concerts, and blockbuster films.",
        summary: "The creative directors of movement, designing the iconic dances seen in movies and concerts.",
        skills: ["Movement Composition", "Musical Pedagogy", "Leadership", "Spatial Awareness", "Rhythmic Translation"],
        salaryRange: "India: ₹5L - ₹25L+ | Global: $50K - $120K+",
        educationPath: "B.A. Choreography / Dance + Extensive Performance Experience",
        yearsOfStudy: "5+ Years performance, then transition to Choreography",
        industriesHiring: ["Film Studios", "Broadway Theatres", "Pop Star Tours", "Elite Dance Academies"],
        futureScope: "Highly lucrative for the top tier. Good choreographers are desperately needed to make pop stars and actors look brilliant on screen. Freelance Opportunities: Yes, massive freelance fees per project.",
        jobDemandTrend: "Steady Growth",
        certifications: ["Masterclasses with Elite Choreographers"],
        roadmap: ["Beginner: Choreograph local shows", "Intermediate: Music videos/indie films", "Professional: Major pop tours / Broadway", "Expert: World-Renowned Lead Choreographer"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Instrumental Musician",
        description: "Master a specific musical instrument (piano, violin, guitar) to perform complex live concerts, record studio albums, or play in massive symphony orchestras.",
        summary: "The instrumental experts delivering flawless musical performances in orchestras or rock bands.",
        skills: ["Sight Reading", "Perfect Pitch/Relative Pitch", "Instrumental Mastery", "Improvisation", "Live Performance Under Pressure"],
        salaryRange: "India: ₹3L - ₹15L | Global: $40K - $100K+",
        educationPath: "B.Mus (Bachelor of Music) / Conservatory Training",
        yearsOfStudy: "10+ Years of daily practice",
        industriesHiring: ["Symphony Orchestras", "Recording Studios (Session Work)", "Live Event Agencies", "Broadway Pits"],
        futureScope: "Classical routes (orchestras) are stable but intensely competitive. Session musicians for pop music have immense flexibility and pay. Freelance Opportunities: Yes, session work and gigging is heavily freelance.",
        jobDemandTrend: "Steady, Highly Competitive",
        certifications: ["Trinity College London / ABRSM Grades"],
        roadmap: ["Beginner: Local gigs/bands", "Intermediate: Session musician / touring", "Professional: Chair in a major orchestra", "Expert: Solo Virtuoso"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Singer / Vocalist",
        description: "Utilize the human vocal cords to produce highly controlled, melodic music across genres like Pop, Opera, Jazz, or Classical to entertain millions.",
        summary: "The vocal artists headlining massive concerts, operas, and recording global hit songs.",
        skills: ["Vocal Control/Range", "Breath Management", "Music Theory", "Stage Presence", "Harmonization"],
        salaryRange: "India: ₹4L - ₹50L+ | Global: $45K - $1M+ (Highly Variable)",
        educationPath: "B.Mus Vocal Performance / Extensive Private Vocal Coaching",
        yearsOfStudy: "5+ Years",
        industriesHiring: ["Record Labels", "Opera Houses", "Film/TV (Playback Singing)", "Ad Agencies (Jingles)"],
        futureScope: "The face of the music industry. The rise of social media (TikTok/YouTube) allows vocalists to bypass traditional record labels and directly monetize fans. Freelance Opportunities: Yes, completely freelance until signing a record deal.",
        jobDemandTrend: "Extremely Competitive",
        certifications: ["Classical Vocal Diplomas"],
        roadmap: ["Beginner: Chorus / Backup Singer", "Intermediate: Local solo gigs / YouTube covers", "Professional: Signed recording artist", "Expert: Global Headlining Star"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Music Composer",
        description: "Write entirely original musical scores, orchestrations, and sweeping atmospheric tracks for major blockbuster movies, video games, and symphonies.",
        summary: "The musical architects writing the emotional background sweeping scores for movies and video games.",
        skills: ["Orchestration", "Digital Audio Workstations (Logic/Cubase)", "Music Theory Mastery", "Film Scoring", "Piano Proficiency"],
        salaryRange: "India: ₹6L - ₹40L+ | Global: $60K - $200K+",
        educationPath: "B.Mus Composition / Film Scoring",
        yearsOfStudy: "4 to 6 Years",
        industriesHiring: ["Film and TV Studios", "AAA Video Game Developers", "Advertising Agencies", "Symphony Orchestras"],
        futureScope: "Massive demand in the video game sector. A single successful AAA video game score can provide lifelong royalties. Freelance Opportunities: Yes, film scoring is almost entirely freelance commissions.",
        jobDemandTrend: "High Growth",
        certifications: ["Berklee / Juilliard Composition Workshops"],
        roadmap: ["Beginner: Score short films/indie games", "Intermediate: TV show background tracks", "Professional: Major studio film composer", "Expert: Academy Award-Winning Composer"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Theatre Director",
        description: "Oversee the entire creative vision of a live theatrical play, managing the actors' performances, set design, pacing, and overall emotional impact of the show.",
        summary: "The visionary leaders who orchestrate every single element of a live stage play.",
        skills: ["Creative Vision", "Actor Coaching", "Script Analysis", "Staging/Blocking", "Leadership"],
        salaryRange: "India: ₹4L - ₹15L | Global: $50K - $110K",
        educationPath: "B.A. Directing / Theatre Arts → MFA Directing",
        yearsOfStudy: "6 Years",
        industriesHiring: ["Broadway/Commercial Theatre", "National Repertory Theatres", "Opera Companies", "Academia"],
        futureScope: "Tremendously powerful role within the art world. Many theatre directors eventually cross over into directing massive Hollywood films. Freelance Opportunities: Yes, directors are contracted per theatrical production.",
        jobDemandTrend: "Competitive",
        certifications: ["Stage Directors and Choreographers Society (SDC) Membership"],
        roadmap: ["Beginner: Direct fringe/indie plays", "Intermediate: Associate director for major shows", "Professional: Lead director for regional theatre", "Expert: Broadway Lead Director"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Film Director",
        description: "Command the entire set of a massive movie production, deciding exactly how the camera moves, how the actors perform, and how the final story is edited together.",
        summary: "The ultimate creative commanders responsible for the final look and feel of major movies.",
        skills: ["Visual Storytelling", "Cinematography Basics", "Actor Direction", "Massive Team Management", "Editing Vision"],
        salaryRange: "India: ₹10L - ₹50L+ | Global: $100K - $1M+ (Plus Box Office %)",
        educationPath: "B.A./MFA in Film and Television Directing",
        yearsOfStudy: "4 to 6 Years (+ Decades of practical set experience)",
        industriesHiring: ["Major Film Studios (Warner Bros/Disney)", "Streaming Giants (Netflix)", "Ad Agencies"],
        futureScope: "The absolute pinnacle of the film industry. A successful director commands millions per film and total creative control over hundreds of artists. Freelance Opportunities: Yes, directors are hired as elite independent contractors per movie.",
        jobDemandTrend: "Ultra-Competitive",
        certifications: ["Directors Guild of America (DGA) Membership"],
        roadmap: ["Beginner: Direct short films", "Intermediate: Direct commercials / indie features", "Professional: Direct studio TV episodes/films", "Expert: A-List Blockbuster Director"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Voice Over Artist",
        description: "Provide the unseen voice specifically recorded for animated movies, video game characters, audiobooks, and massive national commercial campaigns.",
        summary: "The vocal actors bringing animated characters, video games, and audiobooks to life from inside a sound booth.",
        skills: ["Vocal Acting/Range", "Accents/Dialects", "Lip Syncing (ADR)", "Home Studio Audio Engineering", "Breath Control"],
        salaryRange: "India: ₹4L - ₹20L | Global: $50K - $150K+",
        educationPath: "Acting Classes + Specific Voice Over Coaching",
        yearsOfStudy: "1 to 3 Years (Skill-based, not degree-dependent)",
        industriesHiring: ["Animation Studios", "Video Game Studios", "Audiobook Publishers (Audible)", "Advertising Networks"],
        futureScope: "Explosively growing. The massive boom in audiobooks and video games makes this one of the most reliable acting career paths today. Freelance Opportunities: Yes, incredibly high gig-economy volume recorded from home studios.",
        jobDemandTrend: "Growing Rapidly",
        certifications: ["Voice Over Masterclasses"],
        roadmap: ["Beginner: Record local radio ads", "Intermediate: Narrate audiobooks", "Professional: Voice video game/anime characters", "Expert: Lead Voice for Major Animation/Franchise"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Radio Jockey (RJ)",
        description: "Host live, unscripted radio or podcast broadcasts, specifically keeping millions of listeners engaged through humor, music curation, and celebrity interviews.",
        summary: "The extremely charismatic hosts driving live radio shows, podcasts, and global audio entertainment.",
        skills: ["Extemporaneous Speaking", "Humor/Charm", "Audio Console Operation", "Interviewing", "Audience Engagement"],
        salaryRange: "India: ₹4L - ₹18L | Global: $45K - $100K",
        educationPath: "B.A. Mass Communication / Journalism",
        yearsOfStudy: "3 Years",
        industriesHiring: ["Radio Broadcasting Networks", "Podcast Networks (Spotify)", "Sports Broadcasting", "Digital Media"],
        futureScope: "Evolving. Traditional radio is shrinking, but massive podcast networks are desperately hiring charismatic hosts for exclusive audio shows. Freelance Opportunities: Yes, many top RJs now freelance their own independent podcasts via Patreon.",
        jobDemandTrend: "Changing (Shifting to Podcasting)",
        certifications: ["Radio Broadcasting Diplomas"],
        roadmap: ["Beginner: Night shift local radio", "Intermediate: Prime time/Drive time host", "Professional: National syndicated host", "Expert: Elite Podcast Network Host"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Stand-up Comedian",
        description: "Write and perform totally original comedic routines live on stage, relying entirely on timing, crowd reading, and pure humor to entertain.",
        summary: "The ultimate solo performers, armed with nothing but a microphone and their own written jokes.",
        skills: ["Comedic Timing", "Joke Writing", "Crowd Work/Heckler Management", "Stage Presence", "Fearlessness"],
        salaryRange: "India: ₹3L - ₹50L+ | Global: $30K - $500K+ (Highly Variable)",
        educationPath: "None required. Strictly talent and stage-time based.",
        yearsOfStudy: "5 to 10 Years of continuous open-mics",
        industriesHiring: ["Comedy Clubs", "Streaming Services (Netflix Specials)", "Corporate Events", "Late Night TV"],
        futureScope: "Extremely difficult but massively lucrative for the 1% who succeed. A Netflix comedy special can launch a comedian into global superstardom overnight. Freelance Opportunities: Yes, completely freelance until signing massive tour/special deals.",
        jobDemandTrend: "Competitive, Talent-Driven",
        certifications: ["Improv / Comedy Writing classes (Optional)"],
        roadmap: ["Beginner: Unpaid open mics", "Intermediate: Paid club feature act", "Professional: Headlining national clubs", "Expert: Arena Tours / Netflix Specials"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Event Performer",
        description: "Perform highly polished, specialized acts—such as magic, acrobatics, fire dancing, or extreme stunts—specifically for massive corporate events, weddings, and festivals.",
        summary: "The incredibly skilled novelty entertainers booked for massive corporate events and high-end festivals.",
        skills: ["Specialized Talent (Magic/Acrobatics)", "Crowd Interaction", "Stamina", "Business Marketing", "Safety Protocols"],
        salaryRange: "India: ₹4L - ₹25L | Global: $40K - $120K",
        educationPath: "Circus Schools / Specialized Independent Training",
        yearsOfStudy: "5+ Years",
        industriesHiring: ["Cirque du Soleil", "Event Management Companies", "Luxury Cruise Lines", "Theme Parks"],
        futureScope: "Highly lucrative. 'B2B' (Business to Business) entertaining for massive corporate retreats pays drastically more than standard theatrical acting. Freelance Opportunities: Yes, this is an entirely freelance, gig-driven business.",
        jobDemandTrend: "Steady, Highly Lucrative",
        certifications: ["Specialized Guilds (e.g., Magic Circle)"],
        roadmap: ["Beginner: Local parties/weddings", "Intermediate: Corporate event bookings", "Professional: High-end luxury entertainment", "Expert: Global touring act / Cirque du Soleil"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Drama Teacher",
        description: "Teach exactly how to act, direct, and understand stagecraft to young students, fostering massive confidence and public speaking skills through the arts.",
        summary: "The academic mentors teaching the next generation of actors and confident public speakers in schools.",
        skills: ["Pedagogy", "Patience", "Play Directing", "Acting Techniques", "Child/Teen Psychology"],
        salaryRange: "India: ₹3L - ₹10L | Global: $45K - $85K",
        educationPath: "B.A. Drama + B.Ed (Bachelor of Education)",
        yearsOfStudy: "4 to 5 Years",
        industriesHiring: ["Public/Private High Schools", "Children's Theatre Academies", "Summer Camps", "Community Centers"],
        futureScope: "Extremely stable compared to active performing. Schools rely on drama teachers to direct yearly musicals and foster student confidence. Freelance Opportunities: No, generally salaried.",
        jobDemandTrend: "Stable, Academic",
        certifications: ["State Teaching License / Certification"],
        roadmap: ["Beginner: Substitute teaching / Camps", "Intermediate: Junior High Drama Teacher", "Professional: High School Theatre Director", "Expert: Head of Fine Arts Department"]
    },
    {
        domain: "Arts",
        branch: "Performing Arts",
        title: "Performance Coach",
        description: "Work one-on-one with elite A-list actors, massive politicians, or pop stars to specifically fix their accents, posture, and emotional delivery before massive events.",
        summary: "The elite secret weapons hired to make movie stars sound perfectly authentic and politicians look incredibly confident.",
        skills: ["Dialect Coaching", "Vocal Anatomy", "Psychological Coaching", "Discretion", "Extreme Empathy"],
        salaryRange: "India: ₹6L - ₹30L | Global: $70K - $200K+",
        educationPath: "MFA Acting / Speech Pathology / Extensive Industry Success",
        yearsOfStudy: "8+ Years",
        industriesHiring: ["Major Film Studios", "Record Labels (Vocal Coaching)", "Political Action Committees", "Corporate Executives"],
        futureScope: "The absolute elite tier of the industry. When a British actor needs to sound exactly like an American President, the studio pays a performance coach immense sums. Freelance Opportunities: Yes, incredibly high-paying freelance retainers.",
        jobDemandTrend: "Niche, Highly Lucrative",
        certifications: ["Speech/Dialect Masterclasses"],
        roadmap: ["Beginner: Coach local actors", "Intermediate: Coach TV/Broadway talent", "Professional: Hired by major film studios", "Expert: Personal Coach to A-List Celebrities"]
    }
];

const seedPerformingArts = async () => {
    try {
        await Career.deleteMany({ branch: "Performing Arts" });
        await Career.insertMany(performingArtsProfessions);
        console.log('Performing Arts Professions Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedPerformingArts();
