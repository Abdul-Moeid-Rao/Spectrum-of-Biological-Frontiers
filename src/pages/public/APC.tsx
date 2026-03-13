import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Sparkles, AlertCircle, CheckCircle2, Info, ArrowRight } from 'lucide-react';

const APC: React.FC = () => {
    const fees = [
        { type: 'Standard APC', amount: '$1,850', target: 'Authors from High-Income Countries' },
        { type: 'Reduced APC', amount: '$850', target: 'Authors from Middle-Income Countries' },
        { type: 'Full Waiver', amount: '$0', target: 'Authors from Least Developed Countries' }
    ];

    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-white">
            <section className="text-center space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Funding & Access</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight uppercase tracking-tight">Article Processing Charges</h1>
                    <p className="text-black/50 max-w-3xl mx-auto text-xl leading-relaxed mt-8">
                        Spectrum of Biological Frontiers is a gold open access journal. To sustain our high-quality editorial services and worldwide dissemination, we charge a flat APC upon acceptance.
                    </p>
                </motion.div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {fees.map((fee, idx) => (
                    <motion.div
                        key={fee.type}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-10 rounded-[3rem] border flex flex-col items-center text-center space-y-8 relative overflow-hidden group transition-all duration-500 shadow-sm hover:shadow-xl ${idx === 0 ? 'bg-white border-brand-teal shadow-2xl shadow-brand-teal/10 scale-105 z-10' : 'bg-white border-black/5'
                            }`}
                    >
                        {idx === 0 && (
                            <div className="absolute top-8 right-8 p-2.5 bg-brand-teal/10 text-brand-teal rounded-full">
                                <Sparkles size={18} />
                            </div>
                        )}
                        <div className="space-y-2">
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">{fee.type}</h3>
                            <p className="text-6xl font-display font-bold text-black tracking-tighter">{fee.amount}</p>
                            <p className="text-[10px] text-black/20 uppercase font-mono tracking-widest pt-3 font-bold">Per Accepted Article</p>
                        </div>
                        <div className="h-px bg-black/5 w-16 group-hover:w-24 transition-all duration-500"></div>
                        <p className="text-base text-black/60 leading-relaxed font-medium px-4">{fee.target}</p>
                        <button className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${idx === 0 ? 'bg-brand-teal text-white hover:bg-brand-navy shadow-lg shadow-brand-teal/20' : 'bg-slate-50 text-black/60 hover:bg-black hover:text-white border border-black/5'
                            }`}>
                            Check Eligibility
                        </button>
                    </motion.div>
                ))}
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start py-32 border-t border-black/5">
                <div className="space-y-12">
                    <h2 className="text-4xl font-display font-bold text-black">What does the <br /><span className="text-brand-teal">APC cover?</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            'Rigorous Peer Review',
                            'Professional Editorial Check',
                            'Artistic Figure Correction',
                            'Global Indexing (Scopus, PubMed)',
                            'Long-term Archiving (CLOCKSS)',
                            'Immediate Open Access'
                        ].map(item => (
                            <div key={item} className="flex items-center space-x-4 group p-4 bg-slate-50/50 rounded-2xl border border-black/5 hover:border-brand-teal/20 transition-colors">
                                <CheckCircle2 size={24} className="text-brand-teal flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm text-black/70 font-bold">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-12 lg:p-16 bg-brand-navy border border-white/5 rounded-[3rem] space-y-10 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="flex items-center space-x-6 text-brand-accent relative z-10">
                        <div className="p-4 bg-brand-accent/10 rounded-2xl">
                            <AlertCircle size={32} />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">Waiver & Discount Policy</h3>
                    </div>
                    <p className="text-lg text-white/70 leading-relaxed italic border-l-4 border-brand-teal pl-8 relative z-10">
                        "We are committed to the principle that ability to pay should never be a barrier to publishing high-quality research. Our waiver system automatically applies to authors from low-income countries designated by the World Bank."
                    </p>
                    <div className="space-y-4 pt-6 relative z-10">
                        <button className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all group">
                            <div className="flex items-center"><Info size={20} className="text-brand-teal mr-4" /> Waiver Request Guidelines</div>
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all group">
                            <div className="flex items-center"><Globe size={20} className="text-brand-teal mr-4" /> List of Eligible Countries</div>
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="text-center bg-slate-50/50 py-24 px-8 rounded-[3rem] border border-black/5 shadow-inner">
                <div className="max-w-3xl mx-auto space-y-10">
                    <h3 className="text-3xl font-display font-bold text-black">Institutional Memberships</h3>
                    <p className="text-black/50 text-lg">
                        Check if your institution has an agreement with Spectrum to cover APCs for their researchers.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <input type="text" placeholder="Search your institution..." className="w-full sm:w-96 bg-white border border-black/10 rounded-2xl px-8 py-4 text-base text-black focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 transition-all shadow-sm" />
                        <button className="w-full sm:w-auto px-12 py-4 bg-brand-navy text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg">Search</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default APC;
