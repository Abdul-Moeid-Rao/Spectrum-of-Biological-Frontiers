import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, X, User, LogOut, ChevronDown, Search } from 'lucide-react';
import type { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const navLinks = [
        { name: 'About', path: '/about' },
        {
            name: 'Journal', path: '/journal/overview', dropdown: [
                { name: 'Aims & Scope', path: '/journal/aims-scope' },
                { name: 'Editorial Board', path: '/journal/editorial-board' },
                { name: 'Indexing', path: '/journal/indexing' },
            ]
        },
        {
            name: 'Authors', path: '/authors/guidelines', dropdown: [
                { name: 'Guidelines', path: '/authors/guidelines' },
                { name: 'Charges (APC)', path: '/authors/apc' },
                { name: 'Submissions', path: '/authors/submissions' },
            ]
        },
        { name: 'Archives', path: '/archives' },
        { name: 'Ethics', path: '/ethics' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-black/5' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-[1920px] mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2 lg:space-x-3 group shrink-0">
                        <span className="text-xl lg:text-2xl font-display font-bold tracking-tight text-black">
                            SPECTRUM
                        </span>
                        <div className="w-[1px] h-8 lg:h-10 bg-black/10 transition-colors hidden lg:block"></div>
                        <div className="flex flex-col -space-y-1">
                            <span className="text-[9px] lg:text-[10px] uppercase font-mono font-bold tracking-widest text-brand-teal">Biological</span>
                            <span className="text-[9px] lg:text-[10px] uppercase font-mono font-bold tracking-widest text-black/60">Frontiers</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center lg:space-x-4 xl:space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    to={link.path}
                                    className="flex items-center space-x-1 text-sm font-medium text-black/80 hover:text-brand-teal transition-colors py-2"
                                >
                                    <span>{link.name}</span>
                                    {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                                </Link>

                                {link.dropdown && (
                                    <div className="absolute top-full left-0 w-48 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                                        <div className="bg-white border border-black/5 rounded-lg shadow-xl overflow-hidden glass">
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    to={sub.path}
                                                    className="block px-4 py-2 text-xs text-black/70 hover:bg-brand-teal hover:text-white transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Auth/CTA Buttons */}
                    <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-5 shrink-0">
                        <button className="p-2 text-black/70 hover:text-brand-teal transition-colors">
                            <Search size={18} />
                        </button>
                        <div className="h-5 w-px bg-black/10 hidden xl:block"></div>

                        {isAuthenticated ? (
                            <div className="flex items-center space-x-3 xl:space-x-5">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center space-x-2 text-[10px] xl:text-xs font-bold text-black hover:text-brand-teal transition-colors uppercase tracking-widest"
                                >
                                    <User size={16} />
                                    <span className="hidden xl:inline">Dashboard</span>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-black/70 hover:text-red-500 transition-colors"
                                    title="Logout"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center lg:space-x-3 xl:space-x-5">
                                <Link to="/login" className="text-[10px] xl:text-xs font-bold text-black/80 hover:text-black transition-colors uppercase tracking-widest">
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-4 xl:px-6 py-2 xl:py-2.5 bg-brand-teal text-white text-[10px] xl:text-[11px] font-bold rounded-lg hover:bg-black transition-all transform hover:scale-105 shadow-sm uppercase tracking-widest"
                                >
                                    Register
                                </Link>
                            </div>
                        )}

                        <Link
                            to="/submit"
                            className="px-4 xl:px-6 py-2 xl:py-2.5 border border-brand-teal text-brand-teal text-[10px] xl:text-[11px] font-bold rounded-lg hover:bg-brand-teal hover:text-white transition-all shadow-sm uppercase tracking-widest"
                        >
                            Submit Manuscript
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-black hover:text-brand-teal"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-80 bg-white z-50 lg:hidden shadow-2xl border-l border-black/5"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-10">
                                    <span className="text-xl font-display font-bold text-black">Menu</span>
                                    <button onClick={() => setIsMenuOpen(false)} className="text-black/70">
                                        <X size={24} />
                                    </button>
                                </div>

                                <nav className="flex flex-col space-y-8 overflow-y-auto flex-grow">
                                    {navLinks.map((link) => (
                                        <div key={link.name}>
                                            <Link
                                                to={link.path}
                                                onClick={() => !link.dropdown && setIsMenuOpen(false)}
                                                className="text-sm font-bold text-black hover:text-brand-teal transition-colors uppercase tracking-[0.2em] block"
                                            >
                                                {link.name}
                                            </Link>
                                            {link.dropdown && (
                                                <div className="mt-4 ml-4 flex flex-col space-y-4 border-l-2 border-brand-teal/10 pl-4">
                                                    {link.dropdown.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            to={sub.path}
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="text-xs font-bold text-black/50 hover:text-brand-teal transition-colors uppercase tracking-widest"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-8 border-t border-black/5 flex flex-col space-y-4">
                                    {!isAuthenticated ? (
                                        <>
                                            <Link
                                                to="/login"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="w-full py-4 text-center border border-black/10 text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to="/register"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="w-full py-4 text-center bg-brand-teal text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-brand-teal/20"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    ) : (
                                        <button
                                            onClick={handleLogout}
                                            className="w-full py-4 text-center border border-red-500/10 text-red-500 text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl"
                                        >
                                            Logout
                                        </button>
                                    )}
                                    <Link
                                        to="/submit"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full py-4 text-center border border-brand-teal text-brand-teal text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl"
                                    >
                                        Submit Manuscript
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
