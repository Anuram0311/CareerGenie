import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import {
    ArrowLeft, Printer, Save, Plus, Trash2,
    User, Briefcase, GraduationCap, Code,
    Award, Layers, FileText
} from 'lucide-react';

// Default schema for a new resume
const initialResumeState = {
    personal: {
        fullName: 'Alex Carter',
        email: 'alex.carter@example.com',
        phone: '+1 (555) 123-4567',
        linkedin: 'linkedin.com/in/alexcarter',
        portfolio: 'alexcarter.dev'
    },
    summary: 'A highly motivated software engineer with 3+ years of experience in full-stack development. Passionate about building scalable applications and intuitive user interfaces. Adept at agile methodologies and cross-functional collaboration.',
    experience: [
        {
            id: '1',
            company: 'TechFlow Solutions',
            role: 'Senior Frontend Developer',
            duration: 'Jan 2021 - Present',
            description: 'Led the development of the core frontend architecture using React. Increased application performance by 40% through code splitting and tree shaking. Mentored 3 junior developers.'
        }
    ],
    education: [
        {
            id: '1',
            institution: 'University of California, Berkeley',
            degree: 'B.S. in Computer Science',
            year: 'Graduated May 2020'
        }
    ],
    skills: 'JavaScript, React, Node.js, TypeScript, Next.js, TailwinCSS, PostgreSQL, Git, Docker, AWS',
    projects: [
        {
            id: '1',
            title: 'CareerGenie Platform',
            link: 'github.com/alexcarter/careergenie',
            description: 'Built a full-stack career discovery platform with real-time psychometric testing.'
        }
    ],
    certifications: 'AWS Certified Developer (2022)\nGoogle Cloud Associate (2021)'
};

const ResumeBuilder = () => {
    const [resumeData, setResumeData] = useState(initialResumeState);
    const [savedMsg, setSavedMsg] = useState(false);
    const printRef = useRef();

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem('careerGenieResume');
        if (saved) {
            try {
                setResumeData(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse resume data");
            }
        }
    }, []);

    // Handlers
    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setResumeData(prev => ({ ...prev, personal: { ...prev.personal, [name]: value } }));
    };

    const handleBasicChange = (e) => {
        const { name, value } = e.target;
        setResumeData(prev => ({ ...prev, [name]: value }));
    };

    // Array Handlers
    const handleArrayChange = (field, id, key, value) => {
        setResumeData(prev => ({
            ...prev,
            [field]: prev[field].map(item => item.id === id ? { ...item, [key]: value } : item)
        }));
    };

    const addArrayItem = (field, emptyObj) => {
        setResumeData(prev => ({
            ...prev,
            [field]: [...prev[field], { id: Date.now().toString(), ...emptyObj }]
        }));
    };

    const removeArrayItem = (field, id) => {
        setResumeData(prev => ({
            ...prev,
            [field]: prev[field].filter(item => item.id !== id)
        }));
    };

    // Save & Print actions
    const handleSave = () => {
        localStorage.setItem('careerGenieResume', JSON.stringify(resumeData));
        setSavedMsg(true);
        setTimeout(() => setSavedMsg(false), 3000);
    };

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: `${resumeData.personal.fullName || 'Resume'}_CareerGenie`,
        pageStyle: `
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; margin: 0; }
            @page { margin: 0.5in; }
          }
        `
    });

    return (
        <div className="flex flex-col animate-fade-in py-8 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="flex items-center">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mr-6">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Link>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight flex items-center">
                        <FileText className="h-7 w-7 mr-3 text-indigo-500" /> Resume Builder
                    </h1>
                </div>
                <div className="flex space-x-3">
                    <button
                        onClick={handleSave}
                        className="flex items-center px-5 py-2.5 rounded-xl font-bold transition-all bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm"
                    >
                        <Save className="h-4 w-4 mr-2" />
                        {savedMsg ? 'Saved!' : 'Save Progress'}
                    </button>
                    <button
                        onClick={handlePrint}
                        className="flex items-center px-6 py-2.5 rounded-xl font-bold transition-all bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <Printer className="h-4 w-4 mr-2" /> Download PDF
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                {/* LEFT: FORM SECTION */}
                <div className="bg-white dark:bg-dark-card rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 overflow-y-auto max-h-[calc(100vh-160px)] custom-scrollbar">

                    {/* Personal Info */}
                    <section className="mb-10 block">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-800 pb-2">
                            <User className="h-5 w-5 mr-2 text-indigo-500" /> Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
                                <input type="text" name="fullName" value={resumeData.personal.fullName} onChange={handlePersonalChange} className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</label>
                                <input type="email" name="email" value={resumeData.personal.email} onChange={handlePersonalChange} className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</label>
                                <input type="text" name="phone" value={resumeData.personal.phone} onChange={handlePersonalChange} className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">LinkedIn</label>
                                <input type="text" name="linkedin" value={resumeData.personal.linkedin} onChange={handlePersonalChange} className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Portfolio / Website</label>
                                <input type="text" name="portfolio" value={resumeData.personal.portfolio} onChange={handlePersonalChange} className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white" />
                            </div>
                        </div>
                    </section>

                    {/* Summary */}
                    <section className="mb-10 block">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-800 pb-2">
                            <FileText className="h-5 w-5 mr-2 text-teal-500" /> Professional Summary
                        </h3>
                        <div>
                            <textarea name="summary" rows="4" value={resumeData.summary} onChange={handleBasicChange} className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none dark:text-white" placeholder="Write a brief professional summary..."></textarea>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-10 block">
                        <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <Briefcase className="h-5 w-5 mr-2 text-purple-500" /> Work Experience
                            </h3>
                            <button onClick={() => addArrayItem('experience', { company: '', role: '', duration: '', description: '' })} className="text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 px-3 py-1.5 rounded-lg flex items-center hover:bg-purple-200">
                                <Plus className="h-3 w-3 mr-1" /> Add
                            </button>
                        </div>
                        <div className="space-y-6">
                            {resumeData.experience.map((exp, index) => (
                                <div key={exp.id} className="relative p-5 bg-gray-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 rounded-2xl group">
                                    <button onClick={() => removeArrayItem('experience', exp.id)} className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Company</label>
                                            <input type="text" value={exp.company} onChange={(e) => handleArrayChange('experience', exp.id, 'company', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none dark:text-white" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Role</label>
                                            <input type="text" value={exp.role} onChange={(e) => handleArrayChange('experience', exp.id, 'role', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none dark:text-white" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Duration (e.g. Jan 2020 - Present)</label>
                                            <input type="text" value={exp.duration} onChange={(e) => handleArrayChange('experience', exp.id, 'duration', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none dark:text-white" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Description (Bullets recommended)</label>
                                            <textarea rows="3" value={exp.description} onChange={(e) => handleArrayChange('experience', exp.id, 'description', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none dark:text-white" placeholder="• Achieved X by doing Y..."></textarea>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-10 block">
                        <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <GraduationCap className="h-5 w-5 mr-2 text-blue-500" /> Education
                            </h3>
                            <button onClick={() => addArrayItem('education', { institution: '', degree: '', year: '' })} className="text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1.5 rounded-lg flex items-center hover:bg-blue-200">
                                <Plus className="h-3 w-3 mr-1" /> Add
                            </button>
                        </div>
                        <div className="space-y-4">
                            {resumeData.education.map((edu) => (
                                <div key={edu.id} className="relative p-5 bg-gray-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 rounded-2xl group">
                                    <button onClick={() => removeArrayItem('education', edu.id)} className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Institution</label>
                                            <input type="text" value={edu.institution} onChange={(e) => handleArrayChange('education', edu.id, 'institution', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Degree</label>
                                            <input type="text" value={edu.degree} onChange={(e) => handleArrayChange('education', edu.id, 'degree', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Year</label>
                                            <input type="text" value={edu.year} onChange={(e) => handleArrayChange('education', edu.id, 'year', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-10 block">
                        <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                                <Code className="h-5 w-5 mr-2 text-green-500" /> Projects
                            </h3>
                            <button onClick={() => addArrayItem('projects', { title: '', link: '', description: '' })} className="text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-3 py-1.5 rounded-lg flex items-center hover:bg-green-200">
                                <Plus className="h-3 w-3 mr-1" /> Add
                            </button>
                        </div>
                        <div className="space-y-4">
                            {resumeData.projects.map((proj) => (
                                <div key={proj.id} className="relative p-5 bg-gray-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 rounded-2xl group">
                                    <button onClick={() => removeArrayItem('projects', proj.id)} className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Project Name</label>
                                            <input type="text" value={proj.title} onChange={(e) => handleArrayChange('projects', proj.id, 'title', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Link (Optional)</label>
                                            <input type="text" value={proj.link} onChange={(e) => handleArrayChange('projects', proj.id, 'link', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Description</label>
                                            <textarea rows="2" value={proj.description} onChange={(e) => handleArrayChange('projects', proj.id, 'description', e.target.value)} className="w-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none dark:text-white"></textarea>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills & Certifications */}
                    <section className="mb-4 block">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-800 pb-2">
                            <Layers className="h-5 w-5 mr-2 text-orange-500" /> Skills & Certifications
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Technical Skills (comma separated)</label>
                                <textarea name="skills" rows="3" value={resumeData.skills} onChange={handleBasicChange} className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none dark:text-white" placeholder="React, Node.js, Python, Leadership..."></textarea>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Certifications (one per line)</label>
                                <textarea name="certifications" rows="3" value={resumeData.certifications} onChange={handleBasicChange} className="w-full bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none dark:text-white" placeholder="AWS Solutions Architect..."></textarea>
                            </div>
                        </div>
                    </section>

                </div>

                {/* RIGHT: LIVE PREVIEW SECTION */}
                <div className="bg-gray-200 dark:bg-gray-900 rounded-3xl p-4 lg:p-8 overflow-y-auto max-h-[calc(100vh-160px)] custom-scrollbar flex justify-center">

                    {/* The Actual Printable Canvas */}
                    <div
                        ref={printRef}
                        className="bg-white text-black w-full max-w-[800px] shadow-2xl overflow-hidden aspect-[1/1.414]"
                        style={{ padding: '0.6in' }}
                    >
                        {/* HEADER */}
                        <div className="border-b-2 border-gray-800 pb-4 mb-5 text-center">
                            <h1 className="text-4xl font-serif font-bold uppercase tracking-wide text-gray-900 m-0 p-0 leading-tight">
                                {resumeData.personal.fullName || 'YOUR NAME'}
                            </h1>
                            <div className="flex flex-wrap justify-center items-center gap-2 mt-2 text-xs font-sans text-gray-600">
                                {resumeData.personal.email && <span>{resumeData.personal.email}</span>}
                                {resumeData.personal.phone && <span>• {resumeData.personal.phone}</span>}
                                {resumeData.personal.linkedin && <span>• {resumeData.personal.linkedin}</span>}
                                {resumeData.personal.portfolio && <span>• {resumeData.personal.portfolio}</span>}
                            </div>
                        </div>

                        {/* SUMMARY */}
                        {resumeData.summary && (
                            <div className="mb-5">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-2">Professional Summary</h2>
                                <p className="text-xs text-gray-700 font-sans leading-relaxed text-justify">
                                    {resumeData.summary}
                                </p>
                            </div>
                        )}

                        {/* EXPERIENCE */}
                        {resumeData.experience.length > 0 && (
                            <div className="mb-5">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-3">Professional Experience</h2>
                                <div className="space-y-4">
                                    {resumeData.experience.map((exp, i) => (
                                        <div key={i} className="mb-2">
                                            <div className="flex justify-between items-baseline mb-0.5">
                                                <h3 className="text-sm font-bold text-gray-900">{exp.role || 'Role Title'}</h3>
                                                <span className="text-xs text-gray-600">{exp.duration || 'Duration'}</span>
                                            </div>
                                            <div className="text-xs italic text-gray-700 mb-1">{exp.company || 'Company Name'}</div>
                                            {exp.description && (
                                                <div className="text-xs text-gray-700 font-sans leading-relaxed whitespace-pre-line ml-3">
                                                    {exp.description}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* EDUCATION */}
                        {resumeData.education.length > 0 && (
                            <div className="mb-5">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-3">Education</h2>
                                <div className="space-y-2">
                                    {resumeData.education.map((edu, i) => (
                                        <div key={i} className="flex justify-between items-baseline">
                                            <div>
                                                <h3 className="text-sm font-bold text-gray-900">{edu.institution || 'University Name'}</h3>
                                                <div className="text-xs text-gray-700">{edu.degree || 'Degree'}</div>
                                            </div>
                                            <span className="text-xs text-gray-600">{edu.year || 'Year'}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* PROJECTS */}
                        {resumeData.projects.length > 0 && (
                            <div className="mb-5">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-3">Projects</h2>
                                <div className="space-y-3">
                                    {resumeData.projects.map((proj, i) => (
                                        <div key={i}>
                                            <h3 className="text-sm font-bold text-gray-900 inline-block mr-2">{proj.title || 'Project Title'}</h3>
                                            {proj.link && <span className="text-xs text-blue-600 underline">{proj.link}</span>}
                                            {proj.description && (
                                                <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">{proj.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* SKILLS & CERTS */}
                        <div className="grid grid-cols-2 gap-6">
                            {resumeData.skills && (
                                <div>
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-2">Skills</h2>
                                    <p className="text-xs text-gray-700 font-sans leading-relaxed">
                                        {resumeData.skills}
                                    </p>
                                </div>
                            )}
                            {resumeData.certifications && (
                                <div>
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-1 mb-2">Certifications</h2>
                                    <p className="text-xs text-gray-700 font-sans leading-relaxed whitespace-pre-line">
                                        {resumeData.certifications}
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilder;
