const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const artsBranches = [
    {
        name: "Literature",
        description: "Study written works of poetry, prose, and drama, emphasizing cultural and historical contexts.",
        domain: "Arts"
    },
    {
        name: "Performing Arts",
        description: "Explore the disciplines of dance, music, theater, and film played out before live audiences.",
        domain: "Arts"
    },
    {
        name: "Visual Arts",
        description: "Create art forms primarily perceived by the eye, such as drawing, painting, and sculpture.",
        domain: "Arts"
    },
    {
        name: "Fine Arts",
        description: "Focus on the aesthetics of art rather than utility, including painting, printmaking, and decorative arts.",
        domain: "Arts"
    },
    {
        name: "Media and Communication",
        description: "Study how information is conveyed through mass media, digital platforms, and human interaction.",
        domain: "Arts"
    },
    {
        name: "Design",
        description: "Combine aesthetics and functionality to create graphics, fashion, interiors, and industrial products.",
        domain: "Arts"
    },
    {
        name: "History",
        description: "Analyze, record, and interpret past human events to understand the foundations of modern society.",
        domain: "Arts"
    },
    {
        name: "Philosophy",
        description: "Investigate fundamental questions regarding human existence, knowledge, values, reason, and logic.",
        domain: "Arts"
    },
    {
        name: "Political Science",
        description: "Study the theory and practice of government structures, political behavior, and public policies.",
        domain: "Arts"
    },
    {
        name: "Sociology",
        description: "Examine the development, structure, and functioning of human groups and societies.",
        domain: "Arts"
    },
    {
        name: "Psychology",
        description: "Explore the human mind and behavior from a humanities and social sciences perspective.",
        domain: "Arts"
    },
    {
        name: "Languages and Linguistics",
        description: "Study the deep structure, evolution, and psychological context of global human languages.",
        domain: "Arts"
    },
    {
        name: "Journalism",
        description: "Investigate, report, and publish news and informational narratives across multiple media platforms.",
        domain: "Arts"
    },
    {
        name: "Public Administration",
        description: "Implement government policies and train civil servants to operate effectively in public sectors.",
        domain: "Arts"
    },
    {
        name: "Social Work",
        description: "Improve the active well-being of individuals, families, and communities through social reform.",
        domain: "Arts"
    },
    {
        name: "International Relations",
        description: "Analyze the dynamic interactions between nations, international NGOs, and massive global policies.",
        domain: "Arts"
    },
    {
        name: "Cultural Studies",
        description: "Examine how cultural practices relate to wider systems of power, society, and lived experiences.",
        domain: "Arts"
    },
    {
        name: "Tourism and Travel Studies",
        description: "Study the business, cultural impact, and logistics of global travel and hospitality management.",
        domain: "Arts"
    }
];

const seedArtsBranches = async () => {
    try {
        await Branch.deleteMany({ domain: "Arts" });
        await Branch.insertMany(artsBranches);
        console.log('Arts Branches Seeded!'.cyan.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedArtsBranches();
