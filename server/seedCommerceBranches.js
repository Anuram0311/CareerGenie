const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Branch = require('./models/Branch');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const commerceBranches = [
    {
        name: "Accounting & Finance",
        description: "Focus on financial recording, reporting, analysis, and management for individuals and organizations to ensure economic growth and stability.",
        domain: "Commerce"
    },
    {
        name: "Banking & Financial Services",
        description: "Study the operational aspects of banking institutions, wealth management, insurance, and the allocation of funds within the financial sector.",
        domain: "Commerce"
    },
    {
        name: "Business Management",
        description: "Learn organizational administration, strategic planning, human resources, and operations to effectively lead and manage dynamic corporate environments.",
        domain: "Commerce"
    },
    {
        name: "Economics",
        description: "Analyze the production, distribution, and consumption of goods and services, exploring micro and macroeconomic factors driving global markets.",
        domain: "Commerce"
    },
    {
        name: "Marketing",
        description: "Understand consumer behavior, brand management, digital advertising, and market research to promote products and drive strategic business growth.",
        domain: "Commerce"
    },
    {
        name: "International Business",
        description: "Explore the complexities of cross-border trade, global supply chains, international finance, and multinational corporate strategies in a globalized world.",
        domain: "Commerce"
    },
    {
        name: "Entrepreneurship",
        description: "Develop skills required to innovate, start, and scale new business ventures, managing risks and identifying opportunities in competitive markets.",
        domain: "Commerce"
    },
    {
        name: "E-Commerce",
        description: "Study digital business models, online retail systems, internet marketing, and the technical infrastructure required for successful online trade.",
        domain: "Commerce"
    },
    {
        name: "Taxation",
        description: "Specialize in tax laws, corporate compliance, financial planning, and the assessment of tax liabilities for individuals and diverse corporate entities.",
        domain: "Commerce"
    },
    {
        name: "Investment & Stock Market",
        description: "Gain expertise in portfolio management, equity analysis, capital markets, and financial instruments necessary for effective wealth generation and trading.",
        domain: "Commerce"
    }
];

const seedCommerceBranches = async () => {
    try {
        await Branch.deleteMany({ domain: "Commerce" });
        await Branch.insertMany(commerceBranches);
        console.log('Commerce Branches Seeded!'.yellow.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedCommerceBranches();
