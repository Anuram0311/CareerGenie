import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, DollarSign, GraduationCap } from 'lucide-react';

const CareerCard = ({ career }) => {
    return (
        <div className="glass-panel rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-100 rounded-full dark:text-primary-300 dark:bg-primary-900/40 mb-2 border border-primary-200 dark:border-primary-800">
                            {career.domain}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                            {career.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 capitalize">
                            Branch: {career.branch}
                        </p>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-2">
                    {career.summary || career.description}
                </p>
            </div>

            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <Link
                    to={`/profession/${career._id}`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm flex items-center transition-colors"
                >
                    Explore
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
                <button className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Save Career">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default CareerCard;
