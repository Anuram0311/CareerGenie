const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const scienceBranches = [
    { name: "Physics", description: "The study of matter, energy, and the fundamental forces of the universe.", domain: "Science" },
    { name: "Chemistry", description: "The study of the composition, structure, properties, and reactions of matter.", domain: "Science" },
    { name: "Mathematics", description: "The study of numbers, quantities, shapes, and patterns using pure logic.", domain: "Science" },
    { name: "Biology", description: "The study of living organisms, their anatomy, physiology, and ecosystems.", domain: "Science" },
    { name: "Environmental Science", description: "The study of the environment and solutions to environmental problems.", domain: "Science" },
    { name: "Earth Science", description: "The study of the Earth's physical constitution, atmosphere, and oceans.", domain: "Science" },
    { name: "Astronomy", description: "The study of celestial objects, space, and the physical universe as a whole.", domain: "Science" },
    { name: "Forensic Science", description: "The application of scientific methods and techniques to investigate crimes.", domain: "Science" }
];

const seedScienceBranches = async () => {
    try {
        await Branch.deleteMany({ domain: "Science" });
        await Branch.insertMany(scienceBranches);
        console.log('Science Branches Seeded!'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedScienceBranches();
