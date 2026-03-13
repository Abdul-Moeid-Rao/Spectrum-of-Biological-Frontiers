import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Globe } from 'lucide-react';

const About: React.FC = () => {
    const sections = [
        {
            title: 'Our Mission',
            content: 'Spectrum of Biological Frontiers aims to accelerate the global exchange of knowledge by providing a high-impact, open-access platform for groundbreaking biological research. We believe in rigorous peer-review, transparent science, and academic luxury.',
            icon: <Target className="text-brand-teal" size={32} />,
        },
        {
            title: 'Open Access Policy',
            content: 'All articles published are made immediately available worldwide under an open access license. This means everyone has free and unlimited access to the full-text of all articles published in our journal.',
            icon: <Globe className="text-brand-teal" size={32} />,
        },
        {
            title: 'Editorial Standards',
            content: 'Our editorial board consists of world-renowned experts who ensure every manuscript undergoes a rigorous double-blind peer review process, maintaining the highest standards of scientific integrity.',
            icon: <Shield className="text-brand-teal" size={32} />,
        }
    ];

    return (
        <div className="pt-40 pb-20 bg-white">
            <section className="container mx-auto px-4 lg:px-8 mb-24 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] mb-6 block">About the Journal</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight">Our Story & <br />Standards</h1>
                    <p className="text-black/50 max-w-2xl mx-auto text-xl leading-relaxed mt-8">
                        Established in 2012, Spectrum has grown from a niche publication to a leading voice in modern biological sciences.
                    </p>
                </motion.div>
            </section>

            {/* Mission Grid */}
            <section className="container mx-auto px-4 lg:px-8 mb-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {sections.map((sec, idx) => (
                        <motion.div
                            key={sec.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 bg-white border border-black/5 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow space-y-8"
                        >
                            <div className="w-20 h-20 bg-brand-teal/5 rounded-3xl flex items-center justify-center">
                                {sec.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-display font-bold text-black">{sec.title}</h3>
                                <p className="text-black/60 leading-relaxed text-base">{sec.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* History Timeline */}
            <section className="bg-slate-50/50 py-40 border-y border-black/5">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-black text-center mb-24">Journal <span className="text-brand-teal">Timeline</span></h2>

                    <div className="max-w-4xl mx-auto space-y-16 relative">
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black/5 -translate-x-1/2"></div>

                        {[
                            { year: '2012', desc: 'Spectrum of Biological Frontiers founded in Cambridge, UK.' },
                            { year: '2015', desc: 'Achieved first Impact Factor and indexing in Scopus.' },
                            { year: '2018', desc: 'Transitioned to 100% Gold Open Access model.' },
                            { year: '2022', desc: 'Reached milestone of 10,000 global citations.' },
                            { year: '2026', desc: 'Launch of the new digital platform experience.' },
                        ].map((item, idx) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}
                            >
                                <div className="w-full md:w-1/2 p-4 md:p-10">
                                    <div className={`p-8 bg-white rounded-3xl border border-black/5 shadow-sm ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <span className="text-brand-teal font-mono font-bold text-2xl block mb-3">{item.year}</span>
                                        <p className="text-black/60 text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-brand-teal rounded-full -translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                                <div className="hidden md:block w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-40 container mx-auto px-4 lg:px-8 text-center bg-white">
                <h2 className="text-4xl font-display font-bold text-black mb-20 whitespace-pre">Global Impact  <span className="text-brand-teal">Indicators</span></h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <p className="text-5xl font-bold text-black font-display">4.82</p>
                        <p className="text-xs uppercase font-mono tracking-[0.2em] text-black/40 font-bold">Impact Factor</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-5xl font-bold text-black font-display">6.1</p>
                        <p className="text-xs uppercase font-mono tracking-[0.2em] text-black/40 font-bold">CiteScore</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-5xl font-bold text-black font-display">Q1</p>
                        <p className="text-xs uppercase font-mono tracking-[0.2em] text-black/40 font-bold">SJR Ranking</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-5xl font-bold text-black font-display">92%</p>
                        <p className="text-xs uppercase font-mono tracking-[0.2em] text-black/40 font-bold">Author Satisfaction</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
