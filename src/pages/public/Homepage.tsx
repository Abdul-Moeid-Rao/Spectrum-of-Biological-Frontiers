import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Zap, ChevronRight } from 'lucide-react';
import ArticleCard from '../../components/journal/ArticleCard';

const Homepage: React.FC = () => {
    const stats = [
        { label: 'Published Articles', value: '2,450+', icon: <BookOpen size={24} /> },
        { label: 'Global Authors', value: '1,200', icon: <Users size={24} /> },
        { label: 'Total Citations', value: '15.2K', icon: <Award size={24} /> },
        { label: 'Avg. Review Time', value: '24 Days', icon: <Zap size={24} /> },
    ];

    const featuredArticles = [
        {
            id: '1',
            title: 'Neural Mapping of Bioluminescent Organisms in Deep Sea Ecosystems',
            authors: ['Dr. Sarah Chen', 'Marcus Thorne', 'Aria Vane'],
            abstract: 'This study presents a comprehensive mapping of neural Pathways associated with bioluminescence in deep-sea Cephalopods, revealing highly specialized signal modulation techniques used for inter-species communication...',
            doi: '10.1234/sbf.2026.001',
            category: 'Marine Neurobiology',
            publishDate: 'March 10, 2026',
            downloadCount: 452,
        },
        {
            id: '2',
            title: 'CRISPR-Cas9 Transformations in Xerophytic Flora: A Sustainability Review',
            authors: ['Elena Rodriguez', 'John Smith'],
            abstract: 'Advancements in CRISPR-Cas9 technology have enabled precise genome editing in xerophytic plant species, offering potential solutions for sustainable agriculture in arid climates. We analyze the morphological changes...',
            doi: '10.1234/sbf.2026.042',
            category: 'Genetic Engineering',
            publishDate: 'February 28, 2026',
            downloadCount: 891,
        },
        {
            id: '3',
            title: 'Microbiome Diversity in High-Altitude Microbialites',
            authors: ['Liam Neeson', 'Dr. Kai Wong'],
            abstract: 'Investigation into the microbial complexity of living microbialites found in high-altitude Andean lakes. DNA sequencing reveals a unique metabolic versatility among the dominant Cyanobacteria populations...',
            doi: '10.1234/sbf.2026.089',
            category: 'Astrobiology',
            publishDate: 'March 05, 2026',
            downloadCount: 310,
        },
    ];

    return (
        <div className="overflow-hidden bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[120px]"></div>
                    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                                Redefining Academic Excellence
                            </span>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-black leading-[1.1] mb-8">
                                Discover the <span className="text-gradient">Spectrum</span> of <br />
                                Biological Frontiers
                            </h1>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl mx-auto mb-10">
                                A premium, open-access journal dedicated to publishing groundbreaking research across all domains of biological sciences. Rigorous peer review meets modern academic luxury.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                        >
                            <Link
                                to="/submit"
                                className="px-10 py-4 bg-brand-teal text-white font-bold rounded-xl hover:bg-brand-navy transition-all transform hover:scale-105 flex items-center group shadow-lg shadow-brand-teal/20"
                            >
                                Submit Manuscript <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/archives"
                                className="px-10 py-4 border-2 border-black/5 text-black font-bold rounded-xl hover:bg-black/5 transition-all flex items-center shadow-sm"
                            >
                                Explore Archives
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Abstract Element Example */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-20 left-10 w-32 h-32 border-2 border-brand-teal/10 rounded-full hidden lg:block"
                />
            </section>

            {/* Stats Section */}
            <section className="py-24 border-y border-black/5 bg-slate-50/50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center space-y-2"
                            >
                                <div className="mx-auto w-14 h-14 flex items-center justify-center text-brand-teal mb-4 bg-white shadow-sm border border-black/5 rounded-2xl">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-black">{stat.value}</div>
                                <div className="text-[10px] uppercase tracking-widest text-black/40 font-mono font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-6 md:space-y-0">
                        <div className="space-y-4">
                            <span className="text-brand-teal text-sm font-bold uppercase tracking-widest flex items-center">
                                <div className="w-8 h-px bg-brand-teal mr-3"></div>
                                Knowledge Frontier
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-black">Featured Research</h2>
                        </div>
                        <Link to="/archives" className="flex items-center text-sm font-bold text-black/50 hover:text-brand-teal transition-colors group uppercase tracking-widest">
                            View All Articles <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {featuredArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Issue Section */}
            <section className="py-32 relative">
                <div className="absolute inset-0 bg-brand-navy pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="bg-brand-navy border border-white/5 rounded-[3rem] overflow-hidden p-8 lg:p-20 shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <span className="px-6 py-2 bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full border border-brand-accent/30 w-fit">
                                    Current Issue
                                </span>
                                <h2 className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight">
                                    Volume 12, Issue 3 <br />
                                    <span className="text-white/40">Spring 2026 Collection</span>
                                </h2>
                                <p className="text-white/70 leading-relaxed italic text-xl border-l-4 border-brand-teal pl-8">
                                    "This issue explores the intersection of quantum biology and cellular signaling, presenting 14 peer-reviewed manuscripts that challenge our understanding of biological energy transfer."
                                </p>
                                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                    <Link to="/archives/12/3" className="w-full sm:w-auto px-10 py-4 bg-white text-brand-navy font-bold rounded-xl hover:bg-brand-teal hover:text-white transition-all text-center shadow-lg">
                                        Explore Issue
                                    </Link>
                                    <button className="w-full sm:w-auto px-10 py-4 border-2 border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all text-center">
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[3/4] bg-white/[0.03] rounded-3xl border border-white/10 flex items-center justify-center p-12 overflow-hidden group shadow-inner">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-transparent group-hover:scale-105 transition-transform duration-700"></div>
                                    <div className="text-center relative z-10">
                                        <div className="w-24 h-px bg-brand-teal mx-auto mb-8"></div>
                                        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-6 font-mono">Spectrum Journal Group</span>
                                        <h3 className="text-4xl font-display font-bold text-white mb-10 tracking-tight">Vol 12 Iss 3</h3>
                                        <div className="w-48 h-48 border border-brand-teal/30 rounded-full mx-auto flex items-center justify-center">
                                            <div className="w-36 h-36 border border-brand-teal/20 rounded-full flex items-center justify-center bg-brand-teal/5">
                                                <BookOpen size={56} className="text-brand-teal/60" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/20 rounded-full blur-[80px]"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-[80px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-brand-teal/5 relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-10">
                        <div className="w-20 h-1 bg-brand-teal rounded-full mb-4"></div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-black leading-tight">Ready to publish your research?</h2>
                        <p className="text-black/60 text-xl max-w-2xl mx-auto leading-relaxed">
                            Join over 1,200 world-class researchers who have chosen Spectrum of Biological Frontiers for its rigorous peer-review and global visibility.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full pt-6">
                            <Link to="/register" className="w-full sm:w-auto px-12 py-5 bg-brand-navy text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl shadow-brand-navy/20">
                                Create Author Account
                            </Link>
                            <Link to="/authors/guidelines" className="w-full sm:w-auto px-12 py-5 border-2 border-black/10 text-black font-bold rounded-2xl hover:bg-black hover:text-white transition-all text-center">
                                Author Guidelines
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
