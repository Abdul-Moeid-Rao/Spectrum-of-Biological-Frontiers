import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const EditorialBoard: React.FC = () => {
    const eic = {
        name: 'Prof. Alexandra Sterling',
        title: 'Editor-in-Chief',
        institution: 'University of Oxford, UK',
        specialty: 'Synthetic Biology & Signal Pathways',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    };

    const editors = [
        { name: 'Dr. Hiroshi Tanaka', institution: 'University of Tokyo', specialty: 'Marine Genomics' },
        { name: 'Prof. Elena Rodriguez', institution: 'University of Barcelona', specialty: 'Epigenetics' },
        { name: 'Dr. Samuel Okoro', institution: 'University of Cape Town', specialty: 'Microbiome Diversity' },
        { name: 'Dr. Isabella Rossi', institution: 'Sapienza University of Rome', specialty: 'Neurobiology' },
        { name: 'Prof. Liam Anderson', institution: 'Harvard University', specialty: 'CRISPR Technology' },
        { name: 'Dr. Mei Ling', institution: 'Tsinghua University', specialty: 'Plant Physiology' },
        { name: 'Prof. Julian Vane', institution: 'Yale University', specialty: 'Astrobiology' },
        { name: 'Dr. Sarah Smith', institution: 'University of Sydney', specialty: 'Structural Biology' },
    ];

    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-white">
            <section className="text-center space-y-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Leadership</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight uppercase tracking-tight">Editorial Leadership</h1>
                    <p className="text-black/50 max-w-2xl mx-auto text-lg leading-relaxed mt-8">
                        Our board consists of globally recognized specialists dedicated to scientific rigor and editorial excellence.
                    </p>
                </motion.div>
            </section>

            {/* Editor-in-Chief */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-brand-navy border border-white/5 rounded-[3rem] overflow-hidden p-8 lg:p-16 relative shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center relative z-10">
                        <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <img src={eic.image} alt={eic.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="lg:col-span-2 space-y-8">
                            <div className="space-y-3">
                                <span className="text-brand-teal text-xs font-bold uppercase tracking-widest">{eic.title}</span>
                                <h2 className="text-4xl font-display font-bold text-white">{eic.name}</h2>
                                <p className="text-white/70 font-medium text-lg">{eic.institution}</p>
                            </div>
                            <p className="text-white/60 text-lg leading-relaxed italic border-l-4 border-brand-teal pl-8">
                                "Prof. Sterling has pioneered research in signal transduction for over two decades. Under her leadership, Spectrum has expanded its reach to include emerging frontiers in astrobiology and quantum biology."
                            </p>
                            <div className="flex items-center space-x-6 pt-6">
                                <button className="flex items-center space-x-2 text-sm font-bold text-white hover:text-brand-teal transition-colors group">
                                    <Mail size={18} className="group-hover:scale-110 transition-transform" /> <span>Contact Office</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Associate Editors Grid */}
            <section className="space-y-16">
                <h3 className="text-3xl font-display font-bold text-black border-l-4 border-brand-teal pl-8 uppercase tracking-tight">Associate Editors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {editors.map((editor, idx) => (
                        <motion.div
                            key={editor.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-8 bg-white border border-black/5 rounded-3xl shadow-sm hover:shadow-md hover:border-brand-teal/20 transition-all group"
                        >
                            <div className="space-y-4">
                                <h4 className="text-lg font-bold text-black group-hover:text-brand-teal transition-colors font-display">{editor.name}</h4>
                                <div className="space-y-1">
                                    <p className="text-[11px] text-brand-teal uppercase font-bold tracking-widest">{editor.specialty}</p>
                                    <p className="text-xs text-black/40 italic leading-relaxed">{editor.institution}</p>
                                </div>
                                <div className="h-px bg-black/5 w-8 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Join the Board CTA */}
            <section className="py-24 bg-brand-teal/5 border border-brand-teal/10 rounded-[3rem] text-center space-y-8">
                <h3 className="text-3xl font-display font-bold text-black">Interested in joining the board?</h3>
                <p className="text-black/50 max-w-2xl mx-auto text-lg leading-relaxed px-8">
                    We are always looking for distinguished experts to contribute to our reviewing process and editorial decisions.
                </p>
                <button className="px-10 py-5 bg-black text-white font-bold rounded-2xl hover:bg-brand-navy transition-all shadow-xl shadow-black/10">
                    Apply for Editorial Role
                </button>
            </section>
        </div>
    );
};

export default EditorialBoard;
