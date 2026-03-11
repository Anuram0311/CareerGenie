import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { ChevronLeft, ArrowRight, Library, Search } from 'lucide-react';

const slugToDomain = {
    'engineering-and-technology': 'Engineering & Technology',
    'science': 'Science',
    'arts': 'Arts',
    'medical': 'Medical',
    'commerce': 'Commerce',
    'law': 'Law'
};

const DomainBranches = () => {
    const { domainPath } = useParams();
    const domainName = slugToDomain[domainPath] || domainPath.replace(/-/g, ' ');

    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/careers/domains/${encodeURIComponent(domainName)}/branches`);
                setBranches(response.data);
            } catch (err) {
                setError('Failed to fetch branches. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (domainName) {
            fetchBranches();
        }
    }, [domainName]);

    const filteredBranches = branches.filter(branch =>
        branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        branch.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in-up">
            <div className="mb-6">
                <Link to="/domains" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Domains
                </Link>
            </div>

            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 capitalize">
                    {domainName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">Branches</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Explore different specializations under this domain. Select a branch to view specific career paths and professions.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"></div>
                </div>
            ) : error ? (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-md text-center max-w-2xl mx-auto">
                    {error}
                </div>
            ) : (
                <>
                    {branches.length > 0 && (
                        <div className="mb-8 max-w-2xl mx-auto relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search branches..."
                                className="pl-10 block w-full border border-gray-300 dark:border-gray-600 rounded-full shadow-sm py-3 px-4 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 transition-colors"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    )}

                    {filteredBranches.length === 0 ? (
                        <div className="text-center py-16 bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Library className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">No branches found</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your search or check back later.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBranches.map((branch) => (
                                <Link
                                    key={branch._id}
                                    to={`/branch/${encodeURIComponent(branch.name)}`}
                                    className="group block h-full focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-xl"
                                >
                                    <div className="bg-white dark:bg-dark-card rounded-xl p-6 h-full flex flex-col relative transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg">

                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {branch.name}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
                                            {branch.description}
                                        </p>

                                        <div className="mt-auto flex items-center font-medium text-primary-600 dark:text-primary-400 text-sm">
                                            Explore
                                            <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DomainBranches;
