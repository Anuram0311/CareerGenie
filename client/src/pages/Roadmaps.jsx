import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Target, Monitor, Stethoscope, Landmark, Briefcase, Palette } from 'lucide-react';

const domainRoadmaps = {
    tech: {
        name: "Technology & Engineering",
        icon: Monitor,
        color: "text-blue-500",
        bg: "bg-blue-100 dark:bg-blue-900/30",
        stages: [
            {
                level: "Beginner",
                title: "Foundation & Fundamentals",
                duration: "0-2 Years",
                subjects: ["Introduction to Computer Science", "Data Structures & Algorithms", "Basic Mathematics & Logic"],
                skills: ["Python / JavaScript", "Command Line", "Git & Version Control"],
                certifications: ["CS50x", "CompTIA IT Fundamentals"]
            },
            {
                level: "Intermediate",
                title: "Specialization & Application",
                duration: "2-4 Years",
                subjects: ["Database Management", "System Design", "Web/Mobile Frameworks"],
                skills: ["React / Node.js", "SQL & NoSQL", "API Development"],
                certifications: ["AWS Certified Developer", "Google Associate Cloud Engineer"]
            },
            {
                level: "Advanced",
                title: "Architecture & Leadership",
                duration: "5+ Years",
                subjects: ["Distributed Systems", "Machine Learning", "Advanced Security"],
                skills: ["Cloud Architecture", "Team Leadership", "Microservices"],
                certifications: ["AWS Solutions Architect Professional", "CISM"]
            }
        ]
    },
    medical: {
        name: "Healthcare & Medical",
        icon: Stethoscope,
        color: "text-red-500",
        bg: "bg-red-100 dark:bg-red-900/30",
        stages: [
            {
                level: "Beginner",
                title: "Pre-Med & Sciences",
                duration: "3-4 Years",
                subjects: ["Biology", "Organic Chemistry", "Anatomy & Physiology"],
                skills: ["Laboratory Research", "Basic First Aid", "Medical Terminology"],
                certifications: ["CPR / Basic Life Support (BLS)", "EMT Basic"]
            },
            {
                level: "Intermediate",
                title: "Medical School & Clinicals",
                duration: "4 Years",
                subjects: ["Pathology", "Pharmacology", "Clinical Rotations"],
                skills: ["Patient Diagnosis", "Medical Charting", "Surgical Basics"],
                certifications: ["USMLE Step 1 & 2 (or equivalent)"]
            },
            {
                level: "Advanced",
                title: "Residency & Fellowship",
                duration: "3-7+ Years",
                subjects: ["Specialized Medicine (Surgery, Pediatrics, etc.)", "Medical Ethics"],
                skills: ["Advanced Life Support", "Team Leadership", "Complex Diagnostics"],
                certifications: ["Board Certification in Specialty", "Medical License"]
            }
        ]
    },
    commerce: {
        name: "Commerce & Finance",
        icon: Landmark,
        color: "text-green-500",
        bg: "bg-green-100 dark:bg-green-900/30",
        stages: [
            {
                level: "Beginner",
                title: "Business Fundamentals",
                duration: "1-3 Years",
                subjects: ["Micro/Macro Economics", "Financial Accounting", "Marketing Principles"],
                skills: ["Excel Proficiency", "Basic Data Analysis", "Business Communication"],
                certifications: ["Bloomberg Market Concepts", "Google Analytics"]
            },
            {
                level: "Intermediate",
                title: "Core Specialization",
                duration: "3-5 Years",
                subjects: ["Corporate Finance", "Investment Banking", "Strategic Management"],
                skills: ["Financial Modeling", "Risk Assessment", "Market Research"],
                certifications: ["CFA Level 1", "Certified Public Accountant (CPA) Basics"]
            },
            {
                level: "Advanced",
                title: "Executive & Strategy",
                duration: "5+ Years",
                subjects: ["Global Market Strategy", "Mergers & Acquisitions", "Organizational Leadership"],
                skills: ["Executive Negotiation", "Portfolio Management", "Strategic Forecasting"],
                certifications: ["CFA Charterholder", "MBA"]
            }
        ]
    }
};

const Roadmaps = () => {
    const [activeDomain, setActiveDomain] = useState('tech');

    const roadmap = domainRoadmaps[activeDomain];

    return (
        <div className="flex flex-col animate-fade-in py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-10">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-5 mb-6 md:mb-0">
                        <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shadow-inner">
                            <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                Educational Roadmaps
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
                                Step-by-step career progression blueprints. Select a domain to explore the journey from beginner to advanced.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Domain Selector */}
                <div className="w-full lg:w-1/4">
                    <div className="bg-white dark:bg-dark-card rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sticky top-24">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Select Domain</h3>
                        <div className="space-y-3">
                            {Object.entries(domainRoadmaps).map(([key, data]) => {
                                const isActive = activeDomain === key;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setActiveDomain(key)}
                                        className={`w-full flex items-center p-4 rounded-2xl transition-all duration-300 border-2 ${isActive ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 shadow-sm' : 'bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                                    >
                                        <data.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500'}`} />
                                        <span className={`font-bold text-left ${isActive ? 'text-indigo-900 dark:text-indigo-100' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {data.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                        {/* Placeholder generic buttons to imply a larger list */}
                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 space-y-3 opacity-60">
                            <button className="w-full flex items-center p-4 rounded-2xl bg-transparent border-2 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800 cursor-not-allowed" disabled>
                                <Briefcase className="w-5 h-5 mr-3 text-gray-500" />
                                <span className="font-bold text-left text-gray-500">Law & Justice</span>
                            </button>
                            <button className="w-full flex items-center p-4 rounded-2xl bg-transparent border-2 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800 cursor-not-allowed" disabled>
                                <Palette className="w-5 h-5 mr-3 text-gray-500" />
                                <span className="font-bold text-left text-gray-500">Arts & Design</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Vertical Roadmap Timeline */}
                <div className="w-full lg:w-3/4">
                    <div className="bg-white dark:bg-dark-card rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 sm:p-10">
                        <div className="flex items-center mb-10">
                            <div className={`w-12 h-12 rounded-xl ${roadmap.bg} flex items-center justify-center mr-4`}>
                                <roadmap.icon className={`w-6 h-6 ${roadmap.color}`} />
                            </div>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                                {roadmap.name} Roadmap
                            </h2>
                        </div>

                        <div className="relative border-l-4 border-indigo-100 dark:border-indigo-900/30 ml-6 md:ml-10 space-y-12 pb-8">
                            {roadmap.stages.map((stage, idx) => (
                                <div key={idx} className="relative pl-10 md:pl-16">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[22px] top-1 bg-white dark:bg-dark-card p-1 rounded-full border-4 border-indigo-500">
                                        <div className="w-5 h-5 bg-indigo-500 rounded-full"></div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                            <div>
                                                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
                                                    Stage {idx + 1}: {stage.level}
                                                </span>
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                                            </div>
                                            <span className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400 font-semibold flex items-center text-sm md:text-base">
                                                <Target className="w-4 h-4 mr-2" /> Timeline: {stage.duration}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center uppercase tracking-wider">
                                                    <BookOpen className="w-4 h-4 mr-2 text-indigo-500" /> Core Subjects
                                                </h4>
                                                <ul className="space-y-2">
                                                    {stage.subjects.map((sub, i) => (
                                                        <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                                                            <span className="text-indigo-400 mr-2">•</span> {sub}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center uppercase tracking-wider">
                                                    <Briefcase className="w-4 h-4 mr-2 text-teal-500" /> Critical Skills
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {stage.skills.map((skill, i) => (
                                                        <span key={i} className="px-3 py-1 bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                                                Recommended Certifications
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {stage.certifications.map((cert, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 rounded-lg text-sm font-medium">
                                                        🏆 {cert}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmaps;
