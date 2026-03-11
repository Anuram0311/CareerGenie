import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, RefreshCw, Send } from 'lucide-react';

const quizQuestions = [
    {
        id: 1,
        question: "Which activity interests you the most?",
        options: [
            { text: "Building machines, systems, or software", type: "tech" },
            { text: "Researching nature, conducting lab experiments, or analyzing data", type: "science" },
            { text: "Creative arts, media, writing, or design", type: "arts" },
            { text: "Helping people medically and improving healthcare", type: "medical" },
            { text: "Business, finance, management, and global markets", type: "commerce" },
            { text: "Law, justice, policy-making, and defending rights", type: "law" }
        ]
    },
    {
        id: 2,
        question: "What type of problems do you enjoy solving?",
        options: [
            { text: "Technical bugs, structural flaws, or engineering challenges", type: "tech" },
            { text: "Scientific mysteries, environmental issues, or empirical research", type: "science" },
            { text: "Communication gaps, visual design, or emotional expression", type: "arts" },
            { text: "Physical illnesses, mental health conditions, or physiological puzzles", type: "medical" },
            { text: "Economic inefficiencies, marketing strategies, or business growth", type: "commerce" },
            { text: "Legal disputes, ethical dilemmas, or contractual negotiations", type: "law" }
        ]
    },
    {
        id: 3,
        question: "What work environment do you prefer?",
        options: [
            { text: "Tech hubs, server rooms, or engineering workshops", type: "tech" },
            { text: "Research laboratories, observatories, or field research sites", type: "science" },
            { text: "Design studios, art galleries, theaters, or open creative spaces", type: "arts" },
            { text: "Hospitals, clinics, or medical research centers", type: "medical" },
            { text: "Corporate offices, stock markets, or dynamic startups", type: "commerce" },
            { text: "Courtrooms, law firms, or government chambers", type: "law" }
        ]
    },
    {
        id: 4,
        question: "When facing a major challenge, what is your first instinct?",
        options: [
            { text: "Draft a technical blueprint or write an algorithm", type: "tech" },
            { text: "Form a hypothesis and conduct empirical tests", type: "science" },
            { text: "Brainstorm unique and visually or emotionally resonant ideas", type: "arts" },
            { text: "Look for a clinical diagnosis to treat the core issue", type: "medical" },
            { text: "Calculate risks versus rewards to find a profitable solution", type: "commerce" },
            { text: "Analyze rules, research precedents, and debate outcomes", type: "law" }
        ]
    },
    {
        id: 5,
        question: "What kind of legacy or impact do you want to leave on the world?",
        options: [
            { text: "Building the digital and physical infrastructure of tomorrow", type: "tech" },
            { text: "Discovering new scientific principles and expanding human knowledge", type: "science" },
            { text: "Inspiring people through brilliant literature, media, and art", type: "arts" },
            { text: "Saving lives and improving global health standards", type: "medical" },
            { text: "Driving the global economy, creating jobs, and innovating markets", type: "commerce" },
            { text: "Ensuring justice, fighting corruption, and shaping equitable policies", type: "law" }
        ]
    },
    {
        id: 6,
        question: "Which subjects did you naturally gravitate towards in school?",
        options: [
            { text: "Computer Science, Mathematics, or IT", type: "tech" },
            { text: "Physics, Chemistry, or Environmental Studies", type: "science" },
            { text: "Literature, Fine Arts, History, or Languages", type: "arts" },
            { text: "Biology, Anatomy, or Health Sciences", type: "medical" },
            { text: "Economics, Accounting, or Business Studies", type: "commerce" },
            { text: "Civics, Political Science, or Debate", type: "law" }
        ]
    },
    {
        id: 7,
        question: "How do you prefer to handle information?",
        options: [
            { text: "Coding it into software or building hardware around it", type: "tech" },
            { text: "Analyzing experimental data and publishing research papers", type: "science" },
            { text: "Transforming it into compelling stories, designs, or art", type: "arts" },
            { text: "Using patient data to formulate treatment plans", type: "medical" },
            { text: "Using financial data and market trends to maximize profit", type: "commerce" },
            { text: "Using evidence and constitutional laws to formulate arguments", type: "law" }
        ]
    },
    {
        id: 8,
        question: "In a professional team, what role do you usually take?",
        options: [
            { text: "The builder who creates tools and systems for the team", type: "tech" },
            { text: "The researcher who provides evidence-based insights", type: "science" },
            { text: "The visionary who designs the presentation and aesthetics", type: "arts" },
            { text: "The caregiver who ensures team wellbeing and safety", type: "medical" },
            { text: "The manager who drives execution, sales, and strategy", type: "commerce" },
            { text: "The mediator who ensures rules are followed and disputes are settled", type: "law" }
        ]
    },
    {
        id: 9,
        question: "Which of these practical skills do you feel most confident in?",
        options: [
            { text: "Programming, troubleshooting devices, or analyzing logical systems", type: "tech" },
            { text: "Executing experiments, graphing data, or systematic observation", type: "science" },
            { text: "Graphic design, public speaking, or creative writing", type: "arts" },
            { text: "First aid CPR, biological understanding, or patient care", type: "medical" },
            { text: "Financial accounting, sales negotiation, or team management", type: "commerce" },
            { text: "Debating, contract drafting, or understanding policy nuances", type: "law" }
        ]
    },
    {
        id: 10,
        question: "How would your friends describe your core personality trait?",
        options: [
            { text: "Logical, precise, and highly analytical", type: "tech" },
            { text: "Curious, inquisitive, and detail-oriented", type: "science" },
            { text: "Expressive, imaginative, and unconventional", type: "arts" },
            { text: "Empathetic, caring, and highly observant", type: "medical" },
            { text: "Ambitious, persuasive, and strategically minded", type: "commerce" },
            { text: "Principled, articulate, and fiercely just", type: "law" }
        ]
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const handleOptionSelect = (type) => {
        setAnswers({ ...answers, [currentQuestion]: type });
    };

    const handleNext = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const calculateResult = () => {
        const counts = Object.values(answers).reduce((acc, type) => {
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});

        let topDomainType = '';
        let maxCount = 0;

        for (const [type, count] of Object.entries(counts)) {
            if (count > maxCount) {
                maxCount = count;
                topDomainType = type;
            }
        }

        // We will store the internal "type" token so Result.jsx can map it correctly
        // to both the DB domain string and the frontend route.
        localStorage.setItem('quizResultType', topDomainType || 'tech');
        navigate('/result');
    };

    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-10 text-gray-900 dark:text-white">
                <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                    Career Discovery Quiz
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Answer these scenario-based questions to determine which major professional domain aligns perfectly with your interests.
                </p>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors">
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Question {currentQuestion + 1} of {quizQuestions.length}
                        </span>
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                            {Math.round(progress)}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-primary-500 to-indigo-500 h-full rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                        {quizQuestions[currentQuestion].question}
                    </h2>
                    <div className="space-y-4">
                        {quizQuestions[currentQuestion].options.map((option, index) => {
                            const isSelected = answers[currentQuestion] === option.type;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleOptionSelect(option.type)}
                                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 transform ${isSelected
                                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-md scale-[1.01]'
                                        : 'border-transparent bg-gray-50 dark:bg-gray-800/50 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.01]'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 transition-colors ${isSelected ? 'border-primary-500 bg-primary-500' : 'border-gray-400'
                                            }`}>
                                            {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-white"></div>}
                                        </div>
                                        <span className={`text-lg transition-colors ${isSelected ? 'text-primary-800 dark:text-primary-200 font-bold' : 'text-gray-700 dark:text-gray-300 font-medium'}`}>{option.text}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="flex justify-between items-center pt-8 border-t border-gray-100 dark:border-gray-800">
                    <button
                        onClick={handlePrev}
                        disabled={currentQuestion === 0}
                        className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all ${currentQuestion === 0
                            ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed opacity-0 pointer-events-none'
                            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                    >
                        <ChevronLeft className="h-5 w-5 mr-2" />
                        Previous
                    </button>

                    {currentQuestion < quizQuestions.length - 1 ? (
                        <button
                            onClick={handleNext}
                            disabled={!answers[currentQuestion]}
                            className={`flex items-center px-8 py-3.5 rounded-xl font-bold transition-all shadow-md ${!answers[currentQuestion]
                                ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:-translate-y-1'
                                }`}
                        >
                            Next
                            <ChevronRight className="h-5 w-5 ml-2" />
                        </button>
                    ) : (
                        <button
                            onClick={calculateResult}
                            disabled={!answers[currentQuestion]}
                            className={`flex items-center px-10 py-3.5 rounded-xl font-black transition-all shadow-lg ${!answers[currentQuestion]
                                ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-xl hover:-translate-y-1 animate-pulse'
                                }`}
                        >
                            See Results
                            <Send className="h-5 w-5 ml-3" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
