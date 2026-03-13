import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Dna, Brain, Waves, Sparkles, Sprout, Database, ShieldCheck } from 'lucide-react';

const AimsScope: React.FC = () => {
    const areas = [
        { title: 'Molecular & Cellular Biology', icon: <Microscope size={24} />, desc: 'Signal transduction, cell cycle, organelle function, and molecular interactions.' },
        { title: 'Genetics & Genomics', icon: <Dna size={24} />, desc: 'Epigenetics, CRISPR-Cas9, population genetics, and evolutionary genomics.' },
        { title: 'Neuroscience', icon: <Brain size={24} />, desc: 'Neural circuits, cognitive modeling, sensory systems, and neurodegeneration.' },
        { title: 'Marine Biology', icon: <Waves size={24} />, desc: 'Deep-sea ecosystems, coral reef dynamics, and marine biotechnology.' },
        { title: 'Biotechnology', icon: <Sparkles size={24} />, desc: 'Synthetic biology, bioengineering, and therapeutic development.' },
        { title: 'Ecology & Environment', icon: <Sprout size={24} />, desc: 'Climate impact on biodiversity, conservation genetics, and microbiome studies.' },
        { title: 'Bioinformatics', icon: <Database size={24} />, desc: 'Computational modeling, structural biology, and big data in life sciences.' },
        { title: 'Ethics in Biology', icon: <ShieldCheck size={24} />, desc: 'Bioethical frameworks for emerging technologies and clinical trials.' },
    ];

    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-white">
            <section className="text-center space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Focus & Direction</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight">Aims & Scope</h1>
                    <p className="text-black/50 max-w-3xl mx-auto text-xl leading-relaxed mt-8">
                        Spectrum of Biological Frontiers provides a forum for the publication of significant research across all areas of biological sciences, focusing on high-quality, peer-reviewed, and original investigations.
                    </p>
                </motion.div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-bold text-black border-l-4 border-brand-teal pl-8 uppercase tracking-tight">Our Primary Aims</h2>
                        <ul className="space-y-6 text-black/60 text-base leading-relaxed ml-8">
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-4 font-bold">•</span>
                                To disseminate high-quality research findings to a global audience through open access.
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-4 font-bold">•</span>
                                To facilitate interdisciplinary discussions between specialized biological domains.
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-4 font-bold">•</span>
                                To bridge the gap between basic research and its biotechnology applications.
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-4 font-bold">•</span>
                                To maintain a rigorous yet constructive and helpful peer-review environment.
                            </li>
                        </ul>
                    </div>

                    <div className="p-10 bg-brand-teal/5 border border-brand-teal/10 rounded-[2rem] space-y-6">
                        <h3 className="text-2xl font-display font-bold text-black">Interdisciplinary Focus</h3>
                        <p className="text-sm text-black/50 leading-relaxed italic">
                            "We particularly encourage submissions that cross traditional boundaries, such as biochemical approaches to ecological problems or computational models applied to neural signal modulation."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {areas.map((area, idx) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-8 bg-white border border-black/5 shadow-sm rounded-3xl hover:border-brand-teal/20 transition-all flex flex-col space-y-6"
                        >
                            <div className="text-brand-teal w-12 h-12 bg-brand-teal/5 rounded-2xl flex items-center justify-center">{area.icon}</div>
                            <div className="space-y-3">
                                <h4 className="text-lg font-bold text-black leading-tight">{area.title}</h4>
                                <p className="text-sm text-black/40 leading-relaxed">{area.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <section className="pt-24 border-t border-black/5 text-center">
                <h3 className="text-2xl font-display font-bold text-black mb-10">Article Types We Accept</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {['Original Research', 'Comprehensive Reviews', 'Short Communications', 'Case Studies', 'Methodology Articles', 'Letters to Editor'].map(type => (
                        <span key={type} className="px-8 py-3 bg-white border border-black/5 rounded-2xl text-sm text-black/60 font-medium shadow-sm">
                            {type}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AimsScope;
