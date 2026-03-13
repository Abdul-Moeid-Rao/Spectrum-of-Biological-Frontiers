import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Link as LinkIcon, AlertCircle,
    BookOpen, Download, HelpCircle, ArrowRight
} from 'lucide-react';

const AuthorGuidelines: React.FC = () => {
    const steps = [
        { title: 'Prepare Manuscript', desc: 'Ensure your work follows our formatting guidelines: Font size 12, double spaced, line numbers included.' },
        { title: 'Check Ethics', desc: 'Verify all ethical requirements including authorship, data transparency, and COI declarations.' },
        { title: 'Final Formatting', desc: 'Use our BibTeX or EndNote styles for citations. Check figure resolution (min 300 DPI).' },
    ];

    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-white">
            <section className="text-center space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Submission Guide</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight uppercase tracking-tight">Author Guidelines</h1>
                    <p className="text-black/50 max-w-3xl mx-auto text-xl leading-relaxed mt-8">
                        Everything you need to know to prepare and submit your manuscript to Spectrum of Biological Frontiers.
                    </p>
                </motion.div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-24">
                    <section className="space-y-12">
                        <h2 className="text-3xl font-display font-bold text-black flex items-center border-l-4 border-brand-teal pl-8 uppercase tracking-tight">
                            Formatting Checklist
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                'Title Page: Include full titles, author names, and affiliations.',
                                'Abstract: 150-300 words without citations.',
                                'Keywords: 5-8 relevant academic terms.',
                                'Main Text: IMRAD structure (Intro, Methods, Results, and Discussion).',
                                'References: ACS or AMA style preferred.',
                                'Figures: TIFF or EPS format, high resolution.'
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="flex items-center space-x-6 p-6 bg-white border border-black/5 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="p-2 bg-brand-teal/5 text-brand-teal rounded-xl">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <span className="text-base text-black/70 font-medium leading-relaxed">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-12">
                        <h2 className="text-3xl font-display font-bold text-black flex items-center border-l-4 border-brand-teal pl-8 uppercase tracking-tight">
                            Submission Steps
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="p-10 bg-slate-50 border border-black/5 rounded-[2.5rem] space-y-6 relative overflow-hidden group transition-all hover:bg-white hover:shadow-xl">
                                    <span className="text-6xl font-display font-bold text-black/5 absolute -right-4 -bottom-4 group-hover:text-brand-teal/10 transition-colors uppercase leading-none">Step {idx + 1}</span>
                                    <h4 className="text-lg font-bold text-black group-hover:text-brand-teal transition-colors font-display">0{idx + 1}. {step.title}</h4>
                                    <p className="text-sm text-black/50 leading-relaxed relative z-10">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="space-y-12">
                    <div className="p-10 bg-brand-navy border border-white/5 rounded-[3rem] space-y-8 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-2xl font-display font-bold text-white relative z-10">Resources</h3>
                        <div className="space-y-4 relative z-10">
                            <button className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all group">
                                <div className="flex items-center">
                                    <Download size={20} className="text-brand-teal mr-4" /> Manuscript Template
                                </div>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all group">
                                <div className="flex items-center">
                                    <LinkIcon size={20} className="text-brand-teal mr-4" /> EndNote Style File
                                </div>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all group">
                                <div className="flex items-center">
                                    <BookOpen size={20} className="text-brand-teal mr-4" /> Reference Guide
                                </div>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="p-10 bg-brand-accent/5 border border-brand-accent/20 rounded-[3rem] space-y-6">
                        <div className="flex items-center space-x-4 text-brand-accent">
                            <AlertCircle size={28} />
                            <h3 className="text-lg font-display font-bold text-black uppercase tracking-widest">Important</h3>
                        </div>
                        <p className="text-sm text-black/60 leading-relaxed font-medium italic">
                            Submissions not adhering to the anonymous review standards will be returned to the author before editorial screening.
                        </p>
                    </div>

                    <div className="text-center p-10 border border-black/5 rounded-[3rem] bg-slate-50/50 space-y-4 shadow-inner">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-black/5">
                            <HelpCircle size={32} className="text-brand-teal" />
                        </div>
                        <h4 className="text-lg font-display font-bold text-black">Need clarification?</h4>
                        <p className="text-xs text-black/40 leading-relaxed">Our editorial office is available to assist with technical queries.</p>
                        <button className="w-full py-4 mt-4 text-[11px] text-white bg-black font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-brand-navy transition-all shadow-lg shadow-black/10">Contact Office</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorGuidelines;
