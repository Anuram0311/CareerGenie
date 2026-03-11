import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-dark-card border-t dark:border-gray-800 transition-colors">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="flex flex-col mb-6 md:mb-0 col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Compass className="h-8 w-8 text-primary-600 dark:text-primary-500 mr-2" />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                                CareerGenie
                            </span>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white tracking-wider text-sm mb-2 uppercase">About the Platform</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
                            CareerGenie is your comprehensive platform for discovering modern career paths, professional domains, and structured roadmaps. We empower students and professionals to make data-driven decisions for their future.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm mb-2">Quick Links</h3>
                        <Link to="/" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">Home</Link>
                        <Link to="/quiz" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">Career Paths</Link>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h3 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm mb-2">Domains</h3>
                        <Link to="/domain/technology" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">Technology</Link>
                        <Link to="/domain/healthcare" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">Healthcare</Link>
                        <Link to="/domain/commerce" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">Commerce</Link>
                        <Link to="/domain/law" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">Law</Link>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex items-center justify-center">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} CareerGenie. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
