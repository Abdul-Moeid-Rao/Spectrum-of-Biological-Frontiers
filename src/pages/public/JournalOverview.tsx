import React from 'react';
import { motion } from 'framer-motion';
import {
    Info, Calendar, Hash, Globe,
    FileCheck, Cpu, Database, Award
} from 'lucide-react';

const JournalOverview: React.FC = () => {
    const details = [
        { label: 'Journal Title', value: 'Spectrum of Biological Frontiers', icon: <FileCheck className="text-brand-teal" /> },
        { label: 'Abbreviation', value: 'Spec. Biol. Front.', icon: <Hash className="text-brand-teal" /> },
        { label: 'ISSN (Online)', value: '2542-891X', icon: <Globe className="text-brand-teal" /> },
        { label: 'Frequency', value: 'Quarterly (4 issues/year)', icon: <Calendar className="text-brand-teal" /> },
        { label: 'Sponsor', value: 'Spectrum Journal Group', icon: <Award className="text-brand-teal" /> },
        { label: 'Language', value: 'English (UK/US)', icon: <Cpu className="text-brand-teal" /> },
    ];

    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-white">
            <section className="text-center space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Core Identity</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight uppercase tracking-tight">Journal Overview</h1>
                    <p className="text-black/50 max-w-3xl mx-auto text-xl leading-relaxed mt-8">
                        Key facts, identifiers, and operational data for the Spectrum of Biological Frontiers platform.
                    </p>
                </motion.div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {details.map((item, idx) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-10 bg-white border border-black/5 rounded-[2.5rem] flex flex-col space-y-6 shadow-sm hover:shadow-md hover:border-brand-teal/20 transition-all group"
                    >
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-black/5 group-hover:scale-110 transition-transform duration-500">
                            {item.icon}
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-black/30 mb-1">{item.label}</h4>
                            <p className="text-xl font-bold text-black font-display">{item.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <section className="p-12 lg:p-24 bg-brand-navy border border-white/5 rounded-[4rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                <div className="max-w-4xl mx-auto space-y-16 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="p-5 bg-brand-teal/10 text-brand-teal rounded-3xl border border-brand-teal/20">
                            <Database size={40} />
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-display font-bold text-white">Archiving & Preservation</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-lg text-white/60 leading-relaxed font-medium">
                        <p className="border-l-4 border-brand-teal pl-8">
                            Spectrum of Biological Frontiers is committed to the long-term preservation of the scholarly record. All published content is archived in CLOCKSS and Portico, ensuring that the journal's content remains available to the scientific community regardless of future technical shifts.
                        </p>
                        <p className="border-l-4 border-white/10 pl-8">
                            Additionally, authors are encouraged to self-archive their pre-print and post-print versions in institutional or thematic repositories (e.g., bioRxiv, PubMed Central) provided proper attribution to the original source is maintained.
                        </p>
                    </div>
                </div>
            </section>

            <div className="text-center pt-24 border-t border-black/5">
                <div className="inline-flex items-center space-x-6 px-8 py-4 bg-slate-50 border border-black/5 rounded-2xl text-[11px] text-black/40 font-mono font-bold uppercase tracking-widest shadow-inner">
                    <Info size={16} className="text-brand-teal" />
                    <span>Registered Publication DOI Prefix: 10.1234/sbf</span>
                </div>
            </div>
        </div>
    );
};

export default JournalOverview;
