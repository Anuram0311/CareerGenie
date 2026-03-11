import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ArrowRight, Map, Compass, BookOpen, Star, Briefcase, Stethoscope, Landmark, Cog, Palette, Monitor, Activity, Zap, CheckCircle2, X } from 'lucide-react';

const Home = () => {
    const { user } = useContext(AuthContext);

    // Map exact domain routes based on Domains.jsx slug structures
    const domains = [
        { name: "Technology", path: "/domain/engineering-and-technology", icon: Monitor, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Healthcare", path: "/domain/medical", icon: Stethoscope, color: "text-red-500", bg: "bg-red-100 dark:bg-red-900/30" },
        { name: "Commerce", path: "/domain/commerce", icon: Landmark, color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" },
        { name: "Law", path: "/domain/law", icon: Briefcase, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "Engineering", path: "/domain/engineering-and-technology", icon: Cog, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30" },
        { name: "Arts & Humanities", path: "/domain/arts", icon: Palette, color: "text-pink-500", bg: "bg-pink-100 dark:bg-pink-900/30" },
    ];

    return (
        <div className="flex flex-col animate-fade-in">
            {/* Hero Section - Full-Screen Modern Design */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero_careers_3.png"
                        alt="Students and mentor exploring career paths digitally"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark/Vibrant Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-indigo-900/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/30"></div> {/* Additional darkening to ensure contrast */}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 md:mt-0">
                    <div className="max-w-3xl space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md text-sm font-semibold text-teal-300 shadow-sm">
                            <Star className="h-4 w-4 text-yellow-400 mr-2" />
                            Your Ultimate Career Architect
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                            Discover Your <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Future Career</span> <br className="hidden sm:block" />
                            with CareerGenie
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl border-l-4 border-teal-500 pl-4">
                            Your personal roadmap to professional success. Explore hundreds of career domains and professions to find the path that perfectly matches your passion and skills.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 pt-4">
                            <Link
                                to="/domains"
                                className="px-8 py-4 text-lg font-bold rounded-full text-white bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(45,212,191,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center transform group"
                            >
                                Explore Domains
                                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                to="/quiz"
                                className="px-8 py-4 text-lg font-bold rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
                            >
                                Take Career Quiz
                                <Compass className="ml-2 h-5 w-5 transform group-hover:rotate-45 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4 pt-6 opacity-90">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-xs font-bold text-white z-[${4 - i}]`}>
                                        {['JD', 'AM', 'SJ', 'RK'][i - 1]}
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-gray-300 font-medium">
                                <span className="text-white font-bold">10,000+</span> students guided
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative glows */}
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
            </section>


            {/* Feature Highlight Cards (Appended) */}
            <section id="features" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative z-10 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase mb-3">Platform Abilities</h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            Core Features Explained
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Psychometric Assessment", icon: Compass, color: "text-indigo-500", bg: "bg-indigo-100 dark:bg-indigo-900/30", description: "Take our scientifically backed quiz to align your inherent strengths with perfectly matching professional domains.", link: "/quiz" },
                            { title: "Global Market Data", icon: Map, color: "text-teal-500", bg: "bg-teal-100 dark:bg-teal-900/30", description: "Access deeply researched, constantly updated databases of global professions, salaries, and growth projections.", link: "/market-data" },
                            { title: "Educational Roadmaps", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30", description: "Follow step-by-step educational requirements, certifications, and early-career milestones to reach your goals.", link: "/roadmaps" },
                        ].map((feature, idx) => (
                            <Link to={feature.link} key={idx} className="block bg-white dark:bg-dark-card p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary-500/50">
                                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{feature.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section - Functional Working Cards */}
            <section className="py-20 bg-white dark:bg-dark-bg border-y border-gray-100 dark:border-gray-800 relative z-10 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm text-primary-600 dark:text-primary-400 font-bold tracking-widest uppercase mb-3">Why CareerGenie?</h2>
                        <p className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                            The Ultimate Career Architecture
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <Link to="/domains" className="group bg-gray-50 dark:bg-dark-card p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 flex flex-col items-start cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                <Map className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Explore Career Domains</h3>
                            <p className="text-gray-600 dark:text-gray-400 flex-grow">
                                Uncover dynamic opportunities across dozens of globally demanded specializations.
                            </p>
                            <span className="mt-4 font-bold text-primary-600 dark:text-primary-400 flex items-center text-sm">
                                View Domains <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        {/* Feature 2 */}
                        <Link to="/quiz" className="group bg-gray-50 dark:bg-dark-card p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 flex flex-col items-start cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                <Compass className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Discover Professional Paths</h3>
                            <p className="text-gray-600 dark:text-gray-400 flex-grow">
                                Drill down seamlessly from broad massive sectors into deep technical architectural niches.
                            </p>
                            <span className="mt-4 font-bold text-indigo-600 dark:text-indigo-400 flex items-center text-sm">
                                Discover More <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        {/* Feature 3 */}
                        <Link to="/domains" className="group bg-gray-50 dark:bg-dark-card p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 flex flex-col items-start cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                <ArrowRight className="h-7 w-7 text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Structured Career Roadmaps</h3>
                            <p className="text-gray-600 dark:text-gray-400 flex-grow">
                                Follow exact educational trajectories and corporate ladders from junior levels to executive suites.
                            </p>
                            <span className="mt-4 font-bold text-cyan-600 dark:text-cyan-400 flex items-center text-sm">
                                See Roadmaps <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        {/* Feature 4 */}
                        <Link to="/quiz" className="group bg-gray-50 dark:bg-dark-card p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 flex flex-col items-start cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                <BookOpen className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Career Discovery Quiz</h3>
                            <p className="text-gray-600 dark:text-gray-400 flex-grow">
                                Get accurate recommendations and insights matching your specific interests to global professions.
                            </p>
                            <span className="mt-4 font-bold text-purple-600 dark:text-purple-400 flex items-center text-sm">
                                Take Quiz <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Inspirational Quotes Section */}
            <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative z-10 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            Explore the World of Careers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                text: "The world is full of thousands of professions and career paths — discover the one that matches your passion.",
                                icon: Star
                            },
                            {
                                text: "Your future career is not limited to one path. Explore domains and unlock endless possibilities.",
                                icon: Compass
                            },
                            {
                                text: "From engineering to arts, medicine to business — every profession begins with exploration.",
                                icon: Map
                            },
                            {
                                text: "CareerGenie helps you discover the profession that truly fits your interests.",
                                icon: BookOpen
                            }
                        ].map((quote, idx) => (
                            <div key={idx} className="bg-white dark:bg-dark-card p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center group transform hover:-translate-y-2">
                                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                                    <quote.icon className="h-6 w-6" />
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 font-medium italic leading-relaxed">
                                    "{quote.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Domains Preview Section - Fixing Navigation */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-sm text-primary-600 dark:text-primary-400 font-bold tracking-widest uppercase mb-3">Sectors</h2>
                            <p className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                                Popular Domains
                            </p>
                        </div>
                        <Link to="/domains" className="hidden md:flex text-primary-600 dark:text-primary-400 font-bold hover:underline items-center text-lg mt-6 md:mt-0">
                            View All Domains <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {domains.map((domain, index) => (
                            <Link to={domain.path} key={index} className="group flex items-center p-6 bg-white dark:bg-dark-card rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-800 transform hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-16 h-16 rounded-xl ${domain.bg} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <domain.icon className={`h-8 w-8 ${domain.color}`} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {domain.name}
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center mt-1">
                                        Explore paths <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <Link to="/domains" className="mt-10 flex md:hidden text-primary-600 dark:text-primary-400 font-bold hover:underline items-center justify-center text-lg">
                        View All Domains <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Smart Suggestions & User Timeline Split Section (Appended) */}
            <section className="py-24 bg-white dark:bg-dark-bg transition-colors relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Smart Suggestions */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-sm text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase mb-3 flex items-center">
                                    <Zap className="w-5 h-5 mr-2" /> AI Powered
                                </h2>
                                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                                    Smart Recommendations
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                                    Based on recent community activity, we suggest exploring these specialized tools and pathways to accelerate your growth.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { icon: Compass, title: "Take the Deep-Dive Quiz", desc: "Unlock 5 new nuanced branches.", color: "text-indigo-500", bg: "bg-indigo-100 dark:bg-indigo-900/30", link: "/quiz" },
                                    { icon: BookOpen, title: "Review Corporate Law", desc: "Trending highly this week.", color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30", link: "/domain/law" },
                                    { icon: Map, title: "Update Your Resume", desc: "Align it with tech industry standards.", color: "text-teal-500", bg: "bg-teal-100 dark:bg-teal-900/30", link: "/resume-builder" }
                                ].map((suggestion, idx) => (
                                    <Link key={idx} to={suggestion.link} className="flex items-start p-6 bg-gray-50 dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary-500/50">
                                        <div className={`w-12 h-12 rounded-full ${suggestion.bg} flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <suggestion.icon className={`w-6 h-6 ${suggestion.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{suggestion.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{suggestion.desc}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 ml-auto text-gray-400 group-hover:text-primary-500 transition-colors mt-3 transform group-hover:translate-x-1" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity Timeline */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-sm text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase mb-3 flex items-center">
                                    <Activity className="w-5 h-5 mr-2" /> Live Updates
                                </h2>
                                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                                    Platform Activity
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                                    See what the community is achieving right now.
                                </p>
                            </div>

                            <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 space-y-8 pb-4">
                                {[
                                    { title: "New Roadmap Deployed", time: "10 mins ago", desc: "The 'Data Science Executive' roadmap is now live.", status: "text-teal-500" },
                                    { title: "Milestone Reached", time: "1 hour ago", desc: "We crossed 1.2M career explorations today!", status: "text-indigo-500" },
                                    { title: "Profession Update", time: "3 hours ago", desc: "Salary bands updated for medical pathways.", status: "text-purple-500" },
                                ].map((activity, idx) => (
                                    <div key={idx} className="relative pl-8 group">
                                        <div className="absolute -left-[11px] top-1 bg-white dark:bg-dark-bg">
                                            <CheckCircle2 className={`w-5 h-5 ${activity.status} bg-white dark:bg-dark-bg rounded-full`} />
                                        </div>
                                        <div className="bg-white dark:bg-dark-card p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 group-hover:shadow-md transition-shadow duration-300">
                                            <div className="flex justify-between items-center mb-1">
                                                <h4 className="text-base font-bold text-gray-900 dark:text-white">{activity.title}</h4>
                                                <span className="text-xs font-medium text-gray-400">{activity.time}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{activity.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
