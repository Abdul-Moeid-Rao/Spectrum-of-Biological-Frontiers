import React from 'react';
import { motion } from 'framer-motion';
import {
    Database,
    Link as LinkIcon, BadgeCheck, Zap, Layers
} from 'lucide-react';

const Indexing: React.FC = () => {
    const databases = [
        { name: 'Scopus', rank: 'Q1', category: 'Biological Sciences' },
        { name: 'PubMed / MEDLINE', rank: 'Core', category: 'Life Sciences' },
        { name: 'Web of Science', rank: 'SCIE', category: 'Multidisciplinary' },
        { name: 'Google Scholar', rank: 'N/A', category: 'General' },
        { name: 'BIOSIS Previews', rank: 'Premium', category: 'Biology' },
        { name: 'DOAJ', rank: 'Seal', category: 'Open Access' },
        { name: 'Chemical Abstracts', rank: 'CAS', category: 'Biochemistry' },
        { name: 'Embase', rank: 'Ready', category: 'Biomedical' },
    ];

    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-white">
            <section className="text-center space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Global Discovery</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight uppercase tracking-tight">Indexing & Visibility</h1>
                    <p className="text-black/50 max-w-3xl mx-auto text-xl leading-relaxed mt-8">
                        Spectrum of Biological Frontiers is indexed by leading academic databases, ensuring your research is discoverable by millions of scholars worldwide.
                    </p>
                </motion.div>
            </section>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {databases.map((db, idx) => (
                    <motion.div
                        key={db.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-10 bg-white border border-black/5 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 shadow-sm hover:shadow-xl hover:border-brand-teal/20 transition-all group"
                    >
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-teal border border-black/5 group-hover:scale-110 transition-transform duration-500">
                            <Database size={28} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-lg font-bold text-black font-display">{db.name}</h4>
                            <div className="inline-block px-3 py-1 bg-brand-teal/5 text-brand-teal text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-brand-teal/10">
                                {db.rank}
                            </div>
                            <p className="text-[10px] text-black/30 uppercase font-mono mt-4 font-bold tracking-widest">{db.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start py-24 border-y border-black/5 bg-slate-50/30">
                <div className="space-y-12 px-8">
                    <h2 className="text-4xl font-display font-bold text-black border-l-4 border-brand-teal pl-8">Discovery Infrastructure</h2>
                    <div className="space-y-8">
                        <div className="flex items-start space-x-6 p-8 bg-white rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-4 bg-brand-teal/5 text-brand-teal rounded-2xl">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black font-display">OAI-PMH Support</h4>
                                <p className="text-sm text-black/50 leading-relaxed mt-3 font-medium">
                                    We support the Open Archives Initiative Protocol for Metadata Harvesting, allowing seamless integration with institutional repositories.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6 p-8 bg-white rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-4 bg-brand-teal/5 text-brand-teal rounded-2xl">
                                <Layers size={28} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black font-display">Full-Text XML</h4>
                                <p className="text-sm text-black/50 leading-relaxed mt-3 font-medium">
                                    Articles are delivered in high-quality JATS XML format to all major indexers, improving machine readability and indexing accuracy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-12 bg-brand-navy border border-white/5 rounded-[4rem] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="flex items-center space-x-6 text-brand-teal mb-12">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <BadgeCheck size={32} />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">Journal Certification</h3>
                    </div>

                    <div className="space-y-6 text-base text-white/60 font-medium">
                        <div className="flex items-center justify-between py-4 border-b border-white/5">
                            <span className="text-white/80">COPE Member</span>
                            <span className="px-3 py-1 bg-brand-teal/20 text-brand-teal font-mono text-[10px] font-bold rounded-lg border border-brand-teal/30">VERIFIED</span>
                        </div>
                        <div className="flex items-center justify-between py-4 border-b border-white/5">
                            <span className="text-white/80">DOAJ Seal</span>
                            <span className="px-3 py-1 bg-brand-teal/20 text-brand-teal font-mono text-[10px] font-bold rounded-lg border border-brand-teal/30">VERIFIED</span>
                        </div>
                        <div className="flex items-center justify-between py-4 border-b border-white/5">
                            <span className="text-white/80">CLOCKSS Archive</span>
                            <span className="px-3 py-1 bg-brand-teal/20 text-brand-teal font-mono text-[10px] font-bold rounded-lg border border-brand-teal/30">ACTIVE</span>
                        </div>
                    </div>

                    <button className="w-full mt-12 flex items-center justify-center space-x-3 py-6 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all shadow-lg group">
                        <LinkIcon size={18} className="text-brand-teal group-hover:rotate-45 transition-transform" /> 
                        <span>View Indexing Certificates</span>
                    </button>
                </div>
            </section>
            <div className="text-center pt-24">
                <p className="text-xs text-black/30 italic max-w-2xl mx-auto font-medium uppercase tracking-widest leading-loose">
                    Indexing status is updated quarterly. For specific database inclusion queries, please contact our technical metadata team.
                </p>
            </div>
        </div>
    );
};

export default Indexing;
