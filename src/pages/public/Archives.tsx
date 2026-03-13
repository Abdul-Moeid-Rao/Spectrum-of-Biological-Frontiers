import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Archives: React.FC = () => {
    const [activeYear, setActiveYear] = useState('2026');

    const volumes = [
        { year: '2026', volume: '12', issues: ['Issue 1 - Spring', 'Issue 2 - Summer', 'Issue 3 - Autumn'] },
        { year: '2025', volume: '11', issues: ['Issue 1', 'Issue 2', 'Issue 3', 'Issue 4'] },
        { year: '2024', volume: '10', issues: ['Issue 1', 'Issue 2', 'Issue 3', 'Issue 4'] },
        { year: '2023', volume: '9', issues: ['Issue 1', 'Issue 2', 'Issue 3', 'Issue 4'] },
    ];

    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-white">
            <section className="text-center space-y-8 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Historical Record</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight uppercase tracking-tight">Journal Archives</h1>
                    <p className="text-black/50 text-xl leading-relaxed mt-8 max-w-3xl mx-auto">
                        Browse through over a decade of biological breakthroughs. Use the filters to find specific volumes or issues.
                    </p>
                </motion.div>
            </section>

            {/* horizontal Year Filter */}
            <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-wrap justify-center items-center gap-4 bg-slate-50 p-3 rounded-[2.5rem] border border-black/5 shadow-inner">
                    {['2026', '2025', '2024', '2023', '2022', '2021'].map(year => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`px-8 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${activeYear === year 
                                ? 'bg-black text-white shadow-xl scale-105' 
                                : 'text-black/40 hover:bg-black/5 hover:text-black'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            {/* Archives Grid */}
            <div className="max-w-6xl mx-auto pt-8">
                <div className="grid grid-cols-1 gap-16">
                    {volumes.filter(v => v.year === activeYear).map((vol) => (
                        <div key={vol.volume} className="space-y-12">
                            <div className="flex items-center space-x-8">
                                <h3 className="text-3xl font-display font-bold text-black uppercase tracking-tight">Volume {vol.volume} <span className="text-brand-teal">/</span> {vol.year}</h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-black/5 to-transparent"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {vol.issues.map((issue, idx) => (
                                    <motion.div
                                        key={issue}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <Link
                                            to={`/archives/${vol.volume}/${idx + 1}`}
                                            className="block p-10 bg-white border border-black/5 rounded-[3rem] hover:border-brand-teal/40 transition-all group shadow-sm hover:shadow-2xl relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                            
                                            <div className="space-y-8 relative z-10">
                                                <div className="w-16 h-16 bg-slate-50 rounded-2xl border border-black/5 flex items-center justify-center text-black/20 group-hover:text-brand-teal group-hover:bg-white group-hover:border-brand-teal/20 group-hover:shadow-lg transition-all duration-500">
                                                    <BookOpen size={32} />
                                                </div>
                                                <div className="space-y-3">
                                                    <h4 className="text-xl font-bold text-black group-hover:text-brand-teal transition-colors font-display leading-tight">{issue}</h4>
                                                    <p className="text-[10px] text-black/30 uppercase tracking-[0.2em] font-mono font-bold">14 Articles Published</p>
                                                </div>
                                                <div className="flex items-center text-[10px] font-bold text-brand-teal uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                    View Issue <ChevronRight size={14} className="ml-2" />
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State / More info */}
                <div className="mt-40 p-16 bg-slate-50 rounded-[4rem] border border-black/5 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden shadow-inner">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-black/5 relative z-10">
                        <Book className="text-black/5" size={48} />
                    </div>
                    <div className="space-y-4 relative z-10">
                        <h4 className="text-2xl font-display font-bold text-black uppercase tracking-tight">Legacy Repository</h4>
                        <p className="text-black/40 text-sm italic max-w-md font-medium leading-relaxed">For research published before 2020, please visit our legacy repository or contact the institutional librarian.</p>
                    </div>
                    <button className="px-12 py-5 bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-navy transition-all shadow-2xl shadow-black/20 relative z-10">Access Legacy Archives</button>
                </div>
            </div>
        </div>
    );
};

export default Archives;
