const mongoose = require('mongoose');
require('dotenv').config();

const titles = ['Stock Trader', 'Equity Research Analyst', 'Portfolio Manager', 'Investment Banker', 'Mutual Fund Manager', 'Hedge Fund Manager', 'Financial Market Analyst', 'Derivatives Trader (Futures & Options)', 'Quantitative Analyst (Quant)', 'Algorithmic Trading Specialist', 'Commodity Trader', 'Forex Trader', 'Investment Advisor', 'Wealth Manager', 'Technical Analyst'];

mongoose.connect(process.env.MONGO_URI).then(async () => {
    const C = require('./models/Career');
    const existing = await C.find({ title: { $in: titles } });
    console.log(JSON.stringify(existing.map(e => e.title)));
    process.exit();
});
