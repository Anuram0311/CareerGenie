const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Branch = require('./models/Branch');

dotenv.config({ path: __dirname + '/.env' });

mongoose.connect(process.env.MONGO_URI);

const medicalBranches = [
    {
        domain: "Medical",
        name: "MBBS/Medicine",
        description: "The core field of allopathic medicine, focusing on diagnosing, treating, and preventing illnesses."
    },
    {
        domain: "Medical",
        name: "Nursing",
        description: "Dedicated to patient care, recovery, health education, and assisting doctors in medical procedures."
    },
    {
        domain: "Medical",
        name: "Physiotherapy",
        description: "Focuses on rehabilitating patients through physical movement, exercise, and therapy rather than medication."
    },
    {
        domain: "Medical",
        name: "Pharmacy",
        description: "The science of preparing, dispensing, and reviewing drugs to ensure safe and effective medication use."
    },
    {
        domain: "Medical",
        name: "Dentistry",
        description: "Specialized field dealing with oral health, including teeth, gums, and maxillofacial surgeries."
    },
    {
        domain: "Medical",
        name: "Biomedical Science",
        description: "The study of human biology, diseases, and medical research to develop new treatments and technologies."
    },
    {
        domain: "Medical",
        name: "Public Health",
        description: "Focuses on protecting and improving the health of populations through education, policy-making, and disease prevention."
    },
    {
        domain: "Medical",
        name: "Medical Laboratory",
        description: "Involves clinical testing, analyzing samples, and operating specialized equipment to aid disease diagnosis."
    },
    {
        domain: "Medical",
        name: "Radiology",
        description: "Specializes in medical imaging techniques like X-rays, MRIs, and CT scans to diagnose and treat diseases."
    },
    {
        domain: "Medical",
        name: "Ayurveda",
        description: "A traditional holistic medical system originating in India, utilizing natural herbs, diet, and lifestyle treatments."
    },
    {
        domain: "Medical",
        name: "Homeopathy",
        description: "An alternative medical system based on the principle of 'like cures like' using highly diluted natural substances."
    },
    {
        domain: "Medical",
        name: "Veterinary Science",
        description: "The branch of medicine dedicated to the health, treatment, and well-being of animals."
    }
];

const seedMedicalBranches = async () => {
    try {
        await Branch.deleteMany({ domain: "Medical" });
        await Branch.insertMany(medicalBranches);
        console.log('Medical Branches Seeded Successfully!'.green.inverse);
        process.exit();
    } catch (err) {
        console.error('DB ERROR:', err.message);
        process.exit(1);
    }
};

seedMedicalBranches();
