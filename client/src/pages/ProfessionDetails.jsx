import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { Bookmark, BookmarkCheck, ChevronLeft, Briefcase, DollarSign, GraduationCap, TrendingUp, Layers, Map, Award, BookOpen, Clock, Building, LineChart, Landmark, MapPin, Library, Microscope, Building2, FileText, Globe, Stethoscope, Hospital, BadgeAlert, Plane, UserCircle, Laptop, ShieldAlert } from 'lucide-react';

const ProfessionDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [career, setCareer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const fetchCareerDetails = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/careers/${id}`);
                setCareer(response.data);

                // In a real app with proper save functionality endpoint
                // You'd check if user.savedCareers includes response.data._id
                if (user && user.savedCareers) {
                    setIsSaved(user.savedCareers.includes(id));
                }
            } catch (err) {
                setError('Failed to fetch career details. Not found.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCareerDetails();
    }, [id, user]);

    const toggleSave = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        // Mock toggle state for visual feedback until we have an endpoint
        setIsSaved(!isSaved);
        // TODO: Connect this to actual backend save point -> /api/users/save-career/:id
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    if (error || !career) {
        return (
            <div className="text-center py-20 px-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Profession Not Found</h2>
                <p className="text-gray-500 mb-6">{error}</p>
                <Link
                    to="/domains"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                    Browse All Domains
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-6">
                <Link
                    to={`/domains/${encodeURIComponent(career.domain)}`}
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to {career.domain}
                </Link>
            </div>

            <div className="glass-panel overflow-hidden shadow rounded-2xl p-6 md:p-10 border-t-4 border-t-primary-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                        <div className="flex items-center flex-wrap gap-2 mb-3">
                            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full dark:text-primary-300 dark:bg-primary-900/40">
                                <Layers className="w-3 h-3 mr-1" />
                                {career.domain}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-300 dark:bg-indigo-900/40 capitalize">
                                {career.branch}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white capitalize leading-tight">
                            {career.title}
                        </h1>
                    </div>

                    <button
                        onClick={toggleSave}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isSaved
                            ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-dark-card dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-800'
                            }`}
                    >
                        {isSaved ? (
                            <>
                                <BookmarkCheck className="h-5 w-5 mr-2" />
                                Saved
                            </>
                        ) : (
                            <>
                                <Bookmark className="h-5 w-5 mr-2" />
                                Save Career
                            </>
                        )}
                    </button>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-10 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-dark-bg p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                    <p>{career.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
                            <GraduationCap className="h-6 w-6 mr-2 text-primary-500" />
                            Education Path
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-dark-bg p-4 rounded-lg whitespace-pre-line">
                            {career.educationPath}
                        </p>

                        <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                            <DollarSign className="h-6 w-6 mr-2 text-green-500" />
                            Salary Range
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-xl font-medium bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-4 rounded-lg inline-block">
                            {career.salaryRange}
                        </p>

                        {career.yearsOfStudy && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Clock className="h-6 w-6 mr-2 text-orange-500" />
                                    Years of Study
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg font-medium">
                                    {career.yearsOfStudy}
                                </p>
                            </>
                        )}

                        {career.industriesHiring && career.industriesHiring.length > 0 && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Building className="h-6 w-6 mr-2 text-cyan-500" />
                                    Industries Hiring
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {career.industriesHiring.map((industry, index) => (
                                        <span key={index} className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 rounded-md text-sm">
                                            {industry}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
                            <TrendingUp className="h-6 w-6 mr-2 text-indigo-500" />
                            Future Scope
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg">
                            {career.futureScope}
                        </p>

                        {career.jobDemandTrend && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <LineChart className="h-6 w-6 mr-2 text-rose-500" />
                                    Job Demand Trend
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 font-semibold bg-rose-50 dark:bg-rose-900/10 text-rose-700 dark:text-rose-400 p-4 rounded-lg shadow-sm border border-rose-100 dark:border-rose-900/30">
                                    {career.jobDemandTrend}
                                </p>
                            </>
                        )}

                        {career.governmentJobs && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Landmark className="h-6 w-6 mr-2 text-blue-500" />
                                    Government Jobs
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                                    {career.governmentJobs}
                                </p>
                            </>
                        )}

                        {career.fieldWork && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <MapPin className="h-6 w-6 mr-2 text-emerald-500" />
                                    Field Work Requirements
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg">
                                    {career.fieldWork}
                                </p>
                            </>
                        )}

                        {career.academicOpportunities && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Library className="h-6 w-6 mr-2 text-teal-500" />
                                    Government / Academic Opportunities
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/10 p-4 rounded-lg">
                                    {career.academicOpportunities}
                                </p>
                            </>
                        )}

                        {career.researchOpportunities && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Microscope className="h-6 w-6 mr-2 text-fuchsia-500" />
                                    Research Opportunities
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-fuchsia-50 dark:bg-fuchsia-900/10 p-4 rounded-lg">
                                    {career.researchOpportunities}
                                </p>
                            </>
                        )}

                        {career.privateSectorOpportunities && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Building2 className="h-6 w-6 mr-2 text-blue-600" />
                                    Private Sector Opportunities
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                                    {career.privateSectorOpportunities}
                                </p>
                            </>
                        )}

                        {career.ngoOpportunities && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Globe className="h-6 w-6 mr-2 text-pink-500" />
                                    NGO / International Organization Opportunities
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg">
                                    {career.ngoOpportunities}
                                </p>
                            </>
                        )}

                        {career.licenseRequired && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <BadgeAlert className="h-6 w-6 mr-2 text-amber-500" />
                                    Required License
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 font-medium bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                                    {career.licenseRequired}
                                </p>
                            </>
                        )}

                        {career.hospitalClinicOpportunities && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Hospital className="h-6 w-6 mr-2 text-red-500" />
                                    Hospital / Clinic / Corporate Opportunities
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
                                    {career.hospitalClinicOpportunities}
                                </p>
                            </>
                        )}

                        {career.internshipRequirements && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Stethoscope className="h-6 w-6 mr-2 text-sky-500" />
                                    Internship Requirements
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-sky-50 dark:bg-sky-900/10 p-4 rounded-lg">
                                    {career.internshipRequirements}
                                </p>
                            </>
                        )}

                        {career.internationalJobOpportunities && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Plane className="h-6 w-6 mr-2 text-emerald-600" />
                                    International Job Opportunities
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg">
                                    {career.internationalJobOpportunities}
                                </p>
                            </>
                        )}

                        {career.freelanceOpportunities && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <UserCircle className="h-6 w-6 mr-2 text-indigo-500" />
                                    Freelancing Opportunities
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg">
                                    {career.freelanceOpportunities}
                                </p>
                            </>
                        )}

                        {career.remoteWorkPossibilities && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <Laptop className="h-6 w-6 mr-2 text-slate-600" />
                                    Remote Work Possibilities
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                                    {career.remoteWorkPossibilities}
                                </p>
                            </>
                        )}

                        {career.riskLevel && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <ShieldAlert className="h-6 w-6 mr-2 text-red-600" />
                                    Risk Level
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-200 dark:border-red-900/30 font-medium">
                                    {career.riskLevel}
                                </p>
                            </>
                        )}

                        {career.competitiveExams && career.competitiveExams.length > 0 && (
                            <>
                                <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                                    <FileText className="h-6 w-6 mr-2 text-violet-500" />
                                    Competitive Exams
                                </h3>
                                <div className="flex flex-col gap-2 mt-4">
                                    {career.competitiveExams.map((exam, index) => (
                                        <div key={index} className="px-4 py-3 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 text-violet-900 dark:text-violet-300 rounded-md text-sm font-medium">
                                            {exam}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700 mt-8">
                            <Briefcase className="h-6 w-6 mr-2 text-purple-500" />
                            Required Skills
                        </h3>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {career.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Extra Sections for Roadmap, Certifications and Summary */}
                <div className="mt-12 space-y-10">
                    {/* Career Roadmap */}
                    {career.roadmap && career.roadmap.length > 0 && (
                        <div>
                            <h3 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
                                <Map className="h-7 w-7 mr-3 text-orange-500" />
                                Career Roadmap
                            </h3>
                            <div className="relative border-l-2 border-orange-200 dark:border-orange-900/50 pl-6 ml-3 space-y-6">
                                {career.roadmap.map((step, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="absolute -left-[35px] top-1 h-4 w-4 rounded-full bg-orange-500 border-2 border-white dark:border-dark-card z-10"></div>
                                        <p className="text-gray-700 dark:text-gray-300">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Certifications */}
                    {career.certifications && career.certifications.length > 0 && (
                        <div>
                            <h3 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
                                <Award className="h-7 w-7 mr-3 text-yellow-500" />
                                Recommended Certifications
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                {career.certifications.map((cert, idx) => (
                                    <li key={idx}>{cert}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Overall Summary */}
                    <div className="bg-primary-50 dark:bg-primary-900/10 rounded-xl p-6 border border-primary-100 dark:border-primary-900/30">
                        <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
                            <BookOpen className="h-6 w-6 mr-3 text-primary-600 dark:text-primary-400" />
                            Overall Career Summary
                        </h3>
                        {career.summary ? (
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                {career.summary}
                            </p>
                        ) : (
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                A career as a <span className="font-semibold text-primary-700 dark:text-primary-400 capitalize">{career.title}</span> in the <span className="font-semibold text-primary-700 dark:text-primary-400">{career.domain}</span> domain offers a {career.salaryRange} salary potential and requires a structured path through {career.educationPath}. With required skills like {career.skills && career.skills.length > 0 ? career.skills.slice(0, 3).join(', ') : 'specific proficiencies'}, professionals can expect to follow a steady roadmap to success, backed by positive future prospects: "{career.futureScope}".
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionDetails;
