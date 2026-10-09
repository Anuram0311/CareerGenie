const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const Branch = require('./models/Branch');
const Career = require('./models/Career');
const User = require('./models/User');

// Load environment variables
dotenv.config();

const branchFiles = [
    { file: 'seedBranches.js', domain: 'Engineering & Technology' },
    { file: 'seedScienceBranches.js', domain: 'Science' },
    { file: 'seedArtsBranches.js', domain: 'Arts' },
    { file: 'seedMedicalBranches.js', domain: 'Medical' },
    { file: 'seedCommerceBranches.js', domain: 'Commerce' },
    { file: 'seedLawBranches.js', domain: 'Law' }
];

const parseArrayFromFile = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/const\s+\w+\s*=\s*(\[[\s\S]*?\]);/);
    if (!match) {
        throw new Error(`Could not find array assignment in ${filePath}`);
    }
    return new Function(`return ${match[1]}`)();
};

const seedBranches = async () => {
    console.log('\n--- Seeding Branches for All 6 Categories ---'.cyan.bold);
    const branchOps = [];
    const domainCounts = {};

    for (const bf of branchFiles) {
        const fullPath = path.join(__dirname, bf.file);
        if (!fs.existsSync(fullPath)) {
            console.warn(`Branch file not found: ${bf.file}`.yellow);
            continue;
        }

        const items = parseArrayFromFile(fullPath);
        domainCounts[bf.domain] = items.length;

        for (const item of items) {
            branchOps.push({
                updateOne: {
                    filter: { name: item.name },
                    update: {
                        $set: {
                            name: item.name,
                            domain: item.domain || bf.domain,
                            description: item.description,
                            coreFocusAreas: item.coreFocusAreas || [],
                            typicalIssuesHandled: item.typicalIssuesHandled || [],
                            industriesInvolved: item.industriesInvolved || [],
                            globalRelevance: item.globalRelevance || '',
                            futureScope: item.futureScope || ''
                        }
                    },
                    upsert: true
                }
            });
        }
    }

    if (branchOps.length > 0) {
        await Branch.bulkWrite(branchOps);
    }

    console.log('Branches seeded successfully (upserted without duplicates):'.green.bold);
    for (const [domain, count] of Object.entries(domainCounts)) {
        console.log(`  ✓ ${domain}: ${count} branches`.green);
    }
    console.log(`  Total branches in DB: ${branchOps.length}`.cyan);
};

const seedCareers = async () => {
    console.log('\n--- Seeding Careers Across All Branches ---'.cyan.bold);
    const branchFileNames = branchFiles.map(b => b.file);
    const careerFiles = fs.readdirSync(__dirname).filter(f =>
        f.startsWith('seed') &&
        f.endsWith('.js') &&
        !branchFileNames.includes(f) &&
        f !== 'seeder.js'
    );

    const careerOps = [];
    const seenTitles = new Set();
    let duplicatesSkipped = 0;

    for (const cf of careerFiles) {
        const fullPath = path.join(__dirname, cf);
        try {
            const items = parseArrayFromFile(fullPath);
            for (const item of items) {
                if (!item.title || !item.domain || !item.branch) continue;
                if (seenTitles.has(item.title)) {
                    duplicatesSkipped++;
                    continue;
                }
                seenTitles.add(item.title);

                careerOps.push({
                    updateOne: {
                        filter: { title: item.title },
                        update: { $set: item },
                        upsert: true
                    }
                });
            }
        } catch (err) {
            console.warn(`Could not parse ${cf}: ${err.message}`.yellow);
        }
    }

    if (careerOps.length > 0) {
        await Career.bulkWrite(careerOps);
    }

    console.log(`Careers seeded successfully: ${careerOps.length} unique professions`.green.bold);
    if (duplicatesSkipped > 0) {
        console.log(`  (Safely resolved ${duplicatesSkipped} duplicate titles across datasets)`.gray);
    }
};

const importData = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME || 'careergenie'
        });
        console.log(`MongoDB Connected: ${conn.connection.host} (DB: ${conn.connection.name})`.green.inverse);

        const branchesOnly = process.argv.includes('--branches');

        await seedBranches();

        if (!branchesOnly) {
            await seedCareers();
        }

        console.log('\nMaster Seeding Completed Successfully!'.green.inverse);
        process.exit(0);
    } catch (err) {
        console.error('Error with data seeding:'.red, err);
        process.exit(1);
    }
};

const deleteData = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME || 'careergenie'
        });
        console.log(`MongoDB Connected: ${conn.connection.host} (DB: ${conn.connection.name})`.red.inverse);

        await Branch.deleteMany();
        await Career.deleteMany();
        console.log('All branches and careers destroyed...'.red.inverse);
        process.exit(0);
    } catch (err) {
        console.error('Error destroying data:'.red, err);
        process.exit(1);
    }
};

if (process.argv.includes('-d')) {
    deleteData();
} else {
    importData();
}
