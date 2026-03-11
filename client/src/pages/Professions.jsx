import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import CareerCard from '../components/CareerCard';
import { Search, ChevronLeft } from 'lucide-react';

const Professions = () => {
    const { branchName } = useParams();
    const decodedBranch = decodeURIComponent(branchName);
    const navigate = useNavigate();

    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCareersByBranch = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/careers?branch=${encodeURIComponent(decodedBranch)}`);
                setCareers(response.data);
            } catch (err) {
                setError('Failed to fetch professions for this branch.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (branchName) {
            fetchCareersByBranch();
        }
    }, [branchName, decodedBranch]);

    const filteredCareers = careers.filter(career => {
        return career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6">
                <button onClick={() => navigate(-1)} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Branches
                </button>
            </div>

            <div className="md:flex md:items-center md:justify-between mb-8">
                <div className="flex-1 min-w-0">
                    <h2 className="text-3xl font-bold leading-7 text-gray-900 dark:text-white sm:text-4xl sm:truncate capitalize">
                        {decodedBranch} <span className="text-primary-600 dark:text-primary-400 font-light text-2xl">Professions</span>
                    </h2>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"></div>
                </div>
            ) : error ? (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-md text-center">
                    {error}
                </div>
            ) : (
                <>
                    <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 mb-8 max-w-2xl mx-auto">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by title, skill, or keyword..."
                                className="pl-10 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mb-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                        Showing {filteredCareers.length} out of {careers.length} professions
                    </div>

                    {filteredCareers.length === 0 ? (
                        <div className="text-center py-20 bg-gray-50 dark:bg-dark-card rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                            <p className="text-gray-500 dark:text-gray-400 text-lg">No professions found matching your criteria.</p>
                            <button
                                onClick={() => setSearchTerm('')}
                                className="mt-4 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline"
                            >
                                Clear Search
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCareers.map((career) => (
                                <CareerCard key={career._id} career={career} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Professions;
