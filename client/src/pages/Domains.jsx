import React from 'react';
import { Link } from 'react-router-dom';
import { MonitorPlay, Microscope, Palette, HeartPulse, Briefcase, Scale, ArrowRight } from 'lucide-react';

const domainCategories = [
    {
        id: 'engineering',
        name: 'Engineering & Technology',
        path: 'engineering-and-technology',
        description: 'Design, build, and innovate with cutting-edge technology and engineering principles.',
        icon: MonitorPlay,
        gradient: 'from-blue-500 to-indigo-600',
        bgBox: 'bg-blue-50 dark:bg-blue-900/20',
        iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
        id: 'science',
        name: 'Science',
        path: 'science',
        description: 'Explore the natural world through observation, experimentation, and advanced research.',
        icon: Microscope,
        gradient: 'from-purple-500 to-fuchsia-600',
        bgBox: 'bg-purple-50 dark:bg-purple-900/20',
        iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
        id: 'arts',
        name: 'Arts',
        path: 'arts',
        description: 'Express creativity through visual arts, music, literature, and dynamic performance.',
        icon: Palette,
        gradient: 'from-pink-500 to-rose-600',
        bgBox: 'bg-pink-50 dark:bg-pink-900/20',
        iconColor: 'text-pink-600 dark:text-pink-400'
    },
    {
        id: 'medical',
        name: 'Medical',
        path: 'medical',
        description: 'Advance human health through patient care, medicine, and clinical discoveries.',
        icon: HeartPulse,
        gradient: 'from-red-500 to-orange-600',
        bgBox: 'bg-red-50 dark:bg-red-900/20',
        iconColor: 'text-red-600 dark:text-red-400'
    },
    {
        id: 'commerce',
        name: 'Commerce',
        path: 'commerce',
        description: 'Drive business growth, manage finances, and lead organizational success globally.',
        icon: Briefcase,
        gradient: 'from-emerald-500 to-teal-600',
        bgBox: 'bg-emerald-50 dark:bg-emerald-900/20',
        iconColor: 'text-emerald-600 dark:text-emerald-400'
    },
    {
        id: 'law',
        name: 'Law',
        path: 'law',
        description: 'Uphold justice, navigate legal systems, and advocate for human rights and policies.',
        icon: Scale,
        gradient: 'from-amber-500 to-yellow-600',
        bgBox: 'bg-amber-50 dark:bg-amber-900/20',
        iconColor: 'text-amber-600 dark:text-amber-400'
    }
];

const Domains = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    Explore Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">Domains</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-balance">
                    Choose your area of interest to discover structured career paths, branches, and specific professions tailored to your goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {domainCategories.map((domain) => {
                    const Icon = domain.icon;
                    return (
                        <Link
                            key={domain.id}
                            to={`/domain/${domain.path}`}
                            className="group block h-full focus:outline-none focus:ring-4 focus:ring-primary-500/50 rounded-2xl"
                        >
                            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl">

                                {/* Top Gradient Accent */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${domain.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                {/* Icon Container */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm ${domain.bgBox}`}>
                                    <Icon className={`h-8 w-8 ${domain.iconColor}`} strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {domain.name}
                                </h2>

                                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed line-clamp-2 mb-6 flex-grow">
                                    {domain.description}
                                </p>

                                {/* Action Link */}
                                <div className="mt-auto flex items-center font-semibold text-primary-600 dark:text-primary-400 text-sm">
                                    <span className="relative overflow-hidden">
                                        Explore Domain
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-600 dark:bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                    </span>
                                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Domains;
