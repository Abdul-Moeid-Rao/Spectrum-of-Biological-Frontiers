import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, UserCheck, AlertTriangle, FileText, Scale, Send } from 'lucide-react';

const Ethics: React.FC = () => {
    const guidelines = [
        {
            title: 'Authorship & Contributions',
            icon: <UserCheck className="text-brand-teal" size={24} />,
            desc: 'All listed authors must have made significant contributions to the research. We follow the ICMJE criteria for authorship.'
        },
        {
            title: 'Plagiarism Policy',
            icon: <AlertTriangle className="text-brand-accent" size={24} />,
            desc: 'Spectrum has a zero-tolerance policy for plagiarism. Every submission is screened through iThenticate prior to peer review.'
        },
        {
            title: 'Data Integrity',
            icon: <ShieldCheck className="text-brand-teal" size={24} />,
            desc: 'Fabrication or falsification of data is a serious ethical breach. Authors may be asked to provide raw data for verification.'
        },
        {
            title: 'Conflict of Interest',
            icon: <Scale className="text-brand-teal" size={24} />,
            desc: 'Authors must declare all financial and non-financial competing interests that could influence the research findings.'
        }
    ];

    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-white">
            <section className="text-center space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Integrity First</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight uppercase tracking-tight">Publication Ethics</h1>
                    <p className="text-black/50 max-w-3xl mx-auto text-xl leading-relaxed mt-8">
                        We are committed to upholding the highest standards of publication ethics as outlined by the Committee on Publication Ethics (COPE).
                    </p>
                </motion.div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {guidelines.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-white border border-black/5 rounded-[2.5rem] flex space-x-8 items-start shadow-sm hover:shadow-xl hover:border-brand-teal/20 transition-all group"
                    >
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-black/5 group-hover:scale-110 transition-transform duration-500">
                            {item.icon}
                        </div>
                        <div className="space-y-3 pt-2">
                            <h3 className="text-2xl font-display font-bold text-black group-hover:text-brand-teal transition-colors">{item.title}</h3>
                            <p className="text-sm text-black/50 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <section className="p-12 lg:p-24 bg-brand-navy border border-white/5 rounded-[4rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                <div className="max-w-4xl mx-auto space-y-16 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="p-5 bg-brand-teal/10 text-brand-teal rounded-3xl border border-brand-teal/20">
                            <BookOpen size={40} />
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-display font-bold text-white">Ethical Oversight</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-lg text-white/60 leading-relaxed font-medium">
                        <div className="space-y-8">
                            <p className="border-l-4 border-brand-teal pl-8">
                                The journal editors have a duty to act if they suspect misconduct, whether an article is published or unpublished. This duty extends to both the authors and the reviewers.
                            </p>
                            <p className="border-l-4 border-white/10 pl-8">
                                In cases of suspected misconduct, the journal will follow the protocols formulated by COPE, which may involve contacting the authors' institutions.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <p className="border-l-4 border-brand-teal pl-8">
                                Reviewers should point out relevant published work that has not been cited by the authors. Any statement that an observation, derivation, or argument had been previously reported should be accompanied by the relevant citation.
                            </p>
                            <p className="border-l-4 border-white/10 pl-8">
                                Reviewers should also call to the Editor's attention any substantial similarity or overlap between the manuscript under consideration and any other published paper.
                            </p>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
                        <div className="space-y-2">
                            <h4 className="text-2xl font-display font-bold text-white">Suspect a breach?</h4>
                            <p className="text-brand-teal font-bold uppercase tracking-widest text-xs">Contact our ethical oversight committee anonymously.</p>
                        </div>
                        <button className="w-full lg:w-auto px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-brand-teal hover:text-white transition-all shadow-xl shadow-black/20 group">
                            Submit a Formal Complaint <Send size={18} className="inline ml-3 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            <div className="text-center pt-24 border-t border-black/5">
                <div className="inline-flex items-center space-x-6 px-8 py-4 bg-slate-50 border border-black/5 rounded-2xl text-[11px] text-black/40 font-mono font-bold uppercase tracking-widest shadow-inner cursor-pointer hover:bg-brand-teal/5 hover:border-brand-teal/20 transition-all group">
                    <FileText size={18} className="text-brand-teal group-hover:scale-110 transition-transform" />
                    <span>Download Full Ethical Guidelines (PDF)</span>
                </div>
            </div>
        </div>
    );
};

export default Ethics;
