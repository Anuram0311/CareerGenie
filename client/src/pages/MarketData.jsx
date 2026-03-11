import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowLeft, TrendingUp, Briefcase, Zap, Globe, BarChart3, Award } from 'lucide-react';

const trendingCareers = [
    { title: "AI/ML Engineer", growth: "+45%", demand: 95, color: "bg-indigo-500", industry: "Technology" },
    { title: "Data Scientist", growth: "+35%", demand: 88, color: "bg-teal-500", industry: "Data/Tech" },
    { title: "Renewable Energy Tech", growth: "+68%", demand: 82, color: "bg-green-500", industry: "Engineering" },
    { title: "Healthcare Administrator", growth: "+32%", demand: 90, color: "bg-red-500", industry: "Medical" },
    { title: "Financial Analyst", growth: "+20%", demand: 75, color: "bg-blue-500", industry: "Commerce" },
    { title: "Cybersecurity Analyst", growth: "+40%", demand: 92, color: "bg-purple-500", industry: "Technology" }
];

const highDemandSkills = [
    { name: "Cloud Computing", category: "Technical", level: 90 },
    { name: "Artificial Intelligence", category: "Technical", level: 95 },
    { name: "Data Analysis", category: "Analytical", level: 85 },
    { name: "Project Management", category: "Leadership", level: 80 },
    { name: "Digital Marketing", category: "Commerce", level: 75 },
    { name: "Clinical Research", category: "Medical", level: 70 }
];

const MarketData = () => {
    return (
        <div className="flex flex-col animate-fade-in py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-10">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
                <div className="flex items-center space-x-5 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center shadow-inner">
                        <Map className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            Global Market Data
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                            Real-time insights into trending careers, high-demand skills, and emerging global industries.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Stats Summary Cards */}
                <div className="bg-white dark:bg-dark-card p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center space-x-4">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl text-indigo-600 dark:text-indigo-400">
                        <TrendingUp className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Avg Growth</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">+28.5%</h3>
                    </div>
                </div>
                <div className="bg-white dark:bg-dark-card p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center space-x-4">
                    <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-2xl text-teal-600 dark:text-teal-400">
                        <Briefcase className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">New Jobs Added</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">2.4M</h3>
                    </div>
                </div>
                <div className="bg-white dark:bg-dark-card p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center space-x-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl text-purple-600 dark:text-purple-400">
                        <Globe className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Global Reach</p>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white">142 Countries</h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Trending Careers Section */}
                <div className="bg-white dark:bg-dark-card rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                                <Zap className="w-6 h-6 mr-3 text-yellow-500" /> Trending Careers
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Fastest growing professions globally</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {trendingCareers.map((career, idx) => (
                            <div key={idx} className="group">
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">{career.title}</h4>
                                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">{career.industry}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm font-bold text-green-500">{career.growth} YoY</span>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${career.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${career.demand}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* High Demand Skills Section */}
                <div className="bg-white dark:bg-dark-card rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                                <Award className="w-6 h-6 mr-3 text-indigo-500" /> High-Demand Skills
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Most requested abilities by top employers</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {highDemandSkills.map((skill, idx) => (
                            <div key={idx} className="flex items-center">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                                    <BarChart3 className="w-6 h-6 text-gray-400" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between mb-1">
                                        <h4 className="font-bold text-gray-900 dark:text-white">{skill.name}</h4>
                                        <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                                        <div
                                            className="bg-indigo-500 dark:bg-indigo-400 h-full rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{skill.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Emerging Technologies Banner */}
            <div className="bg-gradient-to-r from-teal-900 to-indigo-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-widest uppercase mb-4">
                            Emerging Tech
                        </span>
                        <h2 className="text-3xl font-extrabold text-white mb-2">Automated Future</h2>
                        <p className="text-teal-100 max-w-lg leading-relaxed">
                            Web3, Quantum Computing, and Generative AI are projected to create 97 million new roles across global markets by 2030. Stay ahead of the curve by exploring these technical domains.
                        </p>
                    </div>
                    <Link to="/domains" className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
                        Explore Tech Domains
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default MarketData;
