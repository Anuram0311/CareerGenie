const mongoose = require('mongoose');
const Career = require('./models/Career');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
    const careers = await Career.find({});
    console.log(`Found ${careers.length} careers`);
    process.exit(0);
}).catch(console.error);
