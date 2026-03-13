import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Globe, Github } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'Journal',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Editorial Board', path: '/journal/editorial-board' },
                { name: 'Aims & Scope', path: '/journal/aims-scope' },
                { name: 'Archives', path: '/archives' },
                { name: 'Indexing', path: '/journal/indexing' },
            ],
        },
        {
            title: 'For Authors',
            links: [
                { name: 'Submission Guide', path: '/authors/guidelines' },
                { name: 'Submit Manuscript', path: '/submit' },
                { name: 'Processing Charges', path: '/authors/apc' },
                { name: 'Ethical Policies', path: '/ethics' },
                { name: 'Author Dashboard', path: '/dashboard' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Contact Us', path: '/contact' },
                { name: 'Privacy Policy', path: '/ethics' },
                { name: 'Terms of Service', path: '/ethics' },
                { name: 'FAQ', path: '/journal/overview' },
                { name: 'Latest News', path: '/' },
            ],
        },
    ];

    return (
        <footer className="bg-slate-50 border-t border-black/5 pt-20 pb-10">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link to="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-display font-bold text-black tracking-tight">SPECTRUM</span>
                            <div className="w-1 h-8 bg-brand-teal"></div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-teal">Biological</span>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-black/60">Frontiers</span>
                            </div>
                        </Link>
                        <p className="text-black/60 max-w-sm leading-relaxed text-sm">
                            An international, open-access, peer-reviewed journal dedicated to advancing the frontiers of modern biological sciences through rigorous academic standards and luxury platform experiences.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="p-2 bg-black/5 hover:bg-brand-teal hover:text-white rounded-full transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-black/5 hover:bg-brand-teal hover:text-white rounded-full transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-black/5 hover:bg-brand-teal hover:text-white rounded-full transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-black/5 hover:bg-brand-teal hover:text-white rounded-full transition-all duration-300">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Cols */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-black">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-sm text-black/50 hover:text-brand-teal transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white rounded-2xl border border-black/5 shadow-sm mb-12">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-brand-teal/10 rounded-xl text-brand-teal">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h5 className="font-bold text-black text-sm mb-1">Editorial Office</h5>
                            <p className="text-black/50 text-xs leading-relaxed">123 Academic Plaza, Science District<br />Cambridge, CB2 1AB, United Kingdom</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-brand-teal/10 rounded-xl text-brand-teal">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h5 className="font-bold text-black text-sm mb-1">Email Queries</h5>
                            <p className="text-black/50 text-xs">editorial@spectrumbio.org<br />submissions@spectrumbio.org</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-brand-teal/10 rounded-xl text-brand-teal">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h5 className="font-bold text-black text-sm mb-1">Journal Info</h5>
                            <p className="text-black/50 text-xs">ISSN (Online): 2345-6789<br />DOI: 10.1234/spectrum.bio</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:row items-center justify-between pt-10 border-t border-black/5 space-y-4 md:space-y-0 text-[11px] font-mono uppercase tracking-[0.2em] text-black/30">
                    <p>© {currentYear} SPECTRUM Journal Group. All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="hover:text-brand-teal transition-colors underline-offset-4 decoration-brand-teal/30 hover:underline">Cookies</a>
                        <a href="#" className="hover:text-brand-teal transition-colors underline-offset-4 decoration-brand-teal/30 hover:underline">Accessibility</a>
                        <a href="#" className="hover:text-brand-teal transition-colors underline-offset-4 decoration-brand-teal/30 hover:underline">Indexing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
