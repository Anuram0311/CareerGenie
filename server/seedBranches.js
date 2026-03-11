const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const branches = [
    { name: "Mechanical Engineering", description: "Design, analyze, manufacture, and maintain mechanical systems.", domain: "Engineering & Technology" },
    { name: "Civil Engineering", description: "Design, construct, and maintain physical and naturally built environments.", domain: "Engineering & Technology" },
    { name: "Electrical Engineering", description: "Study, design, and apply equipment, devices, and systems which use electricity.", domain: "Engineering & Technology" },
    { name: "Chemical Engineering", description: "Convert raw materials into useful products using chemistry and physics.", domain: "Engineering & Technology" },
    { name: "Aerospace Engineering", description: "Design and build aircraft and spacecraft.", domain: "Engineering & Technology" },
    { name: "Automobile Engineering", description: "Design, manufacture, and operate motorcycles, automobiles, and trucks.", domain: "Engineering & Technology" },
    { name: "Marine Engineering", description: "Design, build, and maintain vehicles and structures used on or around water.", domain: "Engineering & Technology" },
    { name: "Computer Science", description: "Study of computation, information, and automation.", domain: "Engineering & Technology" },
    { name: "Information Technology", description: "Use of computers to store, retrieve, transmit, and manipulate data or information.", domain: "Engineering & Technology" },
    { name: "Artificial Intelligence & Machine Learning", description: "Create systems capable of learning and problem-solving.", domain: "Engineering & Technology" },
    { name: "Data Science", description: "Extract knowledge and insights from noisy, structured and unstructured data.", domain: "Engineering & Technology" },
    { name: "Internet of Things", description: "Network of physical objects embedded with sensors and software.", domain: "Engineering & Technology" },
    { name: "Cyber Security", description: "Protect computer systems and networks from information disclosure or damage.", domain: "Engineering & Technology" },
    { name: "Robotics Engineering", description: "Design, construct, operate, and use robots.", domain: "Engineering & Technology" },
    { name: "Blockchain Technology", description: "Develop decentralized, distributed ledgers that record provenance of a digital asset.", domain: "Engineering & Technology" },
    { name: "Cloud Computing", description: "Delivery of computing services over the internet.", domain: "Engineering & Technology" },
    { name: "Quantum Computing", description: "Develop computer technology based on the principles of quantum theory.", domain: "Engineering & Technology" },
    { name: "Space Technology", description: "Technology developed by space science or the aerospace industry for use in spaceflight.", domain: "Engineering & Technology" }
];

const seedBranches = async () => {
    try {
        await Branch.deleteMany({ domain: "Engineering & Technology" });
        await Branch.create(branches);
        console.log('Branches Seeded!'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedBranches();
