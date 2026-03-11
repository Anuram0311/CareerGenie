import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Compass, ArrowRight, Sparkles } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 glass-panel border-b dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2.5 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-indigo-500/40 group-hover:-translate-y-0.5 transition-all duration-300">
                                <Compass className="h-6 w-6 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600 dark:from-teal-400 dark:to-indigo-400 group-hover:opacity-90 transition-opacity duration-300">
                                CareerGenie
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-5">
                        <Link to="/" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium transition-colors">
                            Home
                        </Link>
                        <Link to="/domains" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium transition-colors">
                            Domains
                        </Link>
                        <Link to="/quiz" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium transition-colors">
                            Career Paths
                        </Link>

                        <button
                            onClick={toggleTheme}
                            className="p-2 ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-700" />}
                        </button>

                        <div className="flex items-center space-x-3 ml-2 border-l pl-4 dark:border-gray-700">
                            {user ? (
                                <>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Hi, {user.name}</span>
                                    <button
                                        onClick={handleLogout}
                                        className="px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 transition-colors"
                                >
                                    Login
                                </Link>
                            )}
                            <Link
                                to="/domains"
                                className="px-4 py-2 text-sm font-medium text-white flex items-center bg-primary-600 hover:bg-primary-700 shadow-md rounded-md transition-colors"
                            >
                                Explore Careers
                                <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-700" />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-b dark:border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-primary-400 dark:hover:bg-gray-800"
                        >
                            Home
                        </Link>
                        <Link
                            to="/domains"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-primary-400 dark:hover:bg-gray-800"
                        >
                            Domains
                        </Link>
                        <Link
                            to="/quiz"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-primary-400 dark:hover:bg-gray-800"
                        >
                            Career Paths
                        </Link>
                        <Link
                            to="/domains"
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full text-center px-4 py-2 mt-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 flex justify-center items-center"
                        >
                            Explore Careers
                        </Link>

                        <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                            {user ? (
                                <div>
                                    <div className="px-3 py-2 flex items-center">
                                        <span className="text-base font-medium text-gray-800 dark:text-gray-100">User: {user.name}</span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="mt-2 w-full block px-3 py-2 text-left rounded-md text-base font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full mt-2 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white dark:bg-dark-card dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
