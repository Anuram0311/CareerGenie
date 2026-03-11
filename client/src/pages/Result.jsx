import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';
import CareerCard from '../components/CareerCard';
import { CheckCircle, RefreshCw, Layers, Monitor, Stethoscope, Briefcase, Landmark, Palette, FlaskConical } from 'lucide-react';

// Domain mapping to link Quiz types -> DB exact strings -> Frontend URLs and Icons
const domainMap = {
    tech: {
        display: "Engineering & Technology",
        apiQuery: "Engineering & Technology",
        pathSlug: "engineering-and-technology",
        icon: Monitor,
        colorClass: "text-blue-500",
        bgClass: "bg-blue-100 dark:bg-blue-900/30",
        shadowClass: "from-blue-400 to-indigo-500"
    },
    medical: {
        display: "Medical / Healthcare",
        apiQuery: "Medical / Healthcare",
        pathSlug: "medical",
        icon: Stethoscope,
        colorClass: "text-red-500",
        bgClass: "bg-red-100 dark:bg-red-900/30",
        shadowClass: "from-red-400 to-orange-500"
    },
    law: {
        display: "Law",
        apiQuery: "Law",
        pathSlug: "law",
        icon: Briefcase,
        colorClass: "text-purple-500",
        bgClass: "bg-purple-100 dark:bg-purple-900/30",
        shadowClass: "from-purple-400 to-fuchsia-500"
    },
    commerce: {
        display: "Commerce",
        apiQuery: "Commerce",
        pathSlug: "commerce",
        icon: Landmark,
        colorClass: "text-green-500",
        bgClass: "bg-green-100 dark:bg-green-900/30",
        shadowClass: "from-green-400 to-emerald-500"
    },
    arts: {
        display: "Arts & Humanities",
        apiQuery: "Arts & Humanities",
        pathSlug: "arts",
        icon: Palette,
        colorClass: "text-pink-500",
        bgClass: "bg-pink-100 dark:bg-pink-900/30",
        shadowClass: "from-pink-400 to-rose-500"
    },
    science: {
        display: "Science",
        apiQuery: "Science",
        pathSlug: "science",
        icon: FlaskConical,
        colorClass: "text-teal-500",
        bgClass: "bg-teal-100 dark:bg-teal-900/30",
        shadowClass: "from-teal-400 to-cyan-500"
    }
};

const Result = () => {
    const [domainData, setDomainData] = useState(null);
    const [recommendedCareers, setRecommendedCareers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResults = async () => {
            const quizResultType = localStorage.getItem('quizResultType');

            if (!quizResultType || !domainMap[quizResultType]) {
                navigate('/quiz');
                return;
            }

            const data = domainMap[quizResultType];
            setDomainData(data);

            try {
                // Fetch recommended careers explicitly using the DB string
                const response = await api.get(`/careers?domain=${encodeURIComponent(data.apiQuery)}`);
                // Get up to 3 random careers from that domain for recommendations
                const shuffled = response.data.sort(() => 0.5 - Math.random());
                setRecommendedCareers(shuffled.slice(0, 3));

            } catch (error) {
                console.error("Failed to fetch recommended careers", error);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [navigate]);

    if (loading || !domainData) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    const Icon = domainData.icon;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
            <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center p-4 ${domainData.bgClass} rounded-full mb-6 relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-tr ${domainData.shadowClass} opacity-25 rounded-full animate-ping`}></div>
                    <CheckCircle className={`h-16 w-16 ${domainData.colorClass} relative z-10`} />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Your Ideal Career Domain
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Based on your exact answers, you show an incredibly strong natural aptitude for:
                </p>

                <div className="mt-10 relative inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-r ${domainData.shadowClass} blur-xl opacity-40 rounded-3xl`}></div>
                    <div className="relative glass-panel px-10 py-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl inline-flex items-center hover:scale-[1.02] transition-transform duration-300">
                        <div className={`w-16 h-16 rounded-2xl ${domainData.bgClass} flex items-center justify-center mr-6 shadow-sm`}>
                            <Icon className={`h-8 w-8 ${domainData.colorClass}`} />
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white transition-colors">
                            {domainData.display}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-10 border-b border-gray-100 dark:border-gray-800 pb-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
                        Top Recommended Professions
                    </h3>
                    <Link
                        to={`/domain/${domainData.pathSlug}`}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-full shadow-md text-white bg-primary-600 hover:bg-primary-700 transition transform hover:-translate-y-1"
                    >
                        Explore Complete {domainData.display} Map &rarr;
                    </Link>
                </div>

                {recommendedCareers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recommendedCareers.map((career) => (
                            <CareerCard key={career._id} career={career} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center p-12 bg-gray-50 dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-gray-800">
                        <p className="text-lg text-gray-500">No specific professions found for this domain yet.</p>
                    </div>
                )}
            </div>

            <div className="mt-20 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                    onClick={() => navigate('/quiz')}
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 shadow-sm text-lg font-bold rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors transform hover:-translate-y-1"
                >
                    <RefreshCw className="h-5 w-5 mr-2" />
                    Retake Quiz
                </button>
                {!user && (
                    <Link
                        to="/register"
                        className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent shadow-md text-lg font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors transform hover:-translate-y-1"
                    >
                        Create account to save results
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Result;
