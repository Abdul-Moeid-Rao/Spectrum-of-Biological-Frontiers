import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText, Users, Upload, CheckCircle2,
    ArrowRight, ArrowLeft, Plus, Trash2,
    Info, AlertCircle, Loader2, Bookmark
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SubmitManuscript: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: 'Original Research',
        title: '',
        abstract: '',
        keywords: '',
        authors: [{ name: '', email: '', institution: '', isCorresponding: true }],
        files: { manuscript: null as File | null, coverLetter: null as File | null }
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const addAuthor = () => {
        setFormData({
            ...formData,
            authors: [...formData.authors, { name: '', email: '', institution: '', isCorresponding: false }]
        });
    };

    const removeAuthor = (index: number) => {
        const newAuthors = formData.authors.filter((_, i) => i !== index);
        setFormData({ ...formData, authors: newAuthors });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsSubmitting(false);
        navigate('/dashboard/submissions');
    };

    return (
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
            {/* Progress Stepper */}
            <div className="mb-12">
                <div className="flex items-center justify-between relative max-w-3xl mx-auto">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 z-0"></div>
                    <div className="absolute top-1/2 left-0 h-0.5 bg-brand-teal -translate-y-1/2 z-0 transition-all duration-500" style={{ width: `${((step - 1) / 4) * 100}%` }}></div>

                    {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className="relative z-10 flex flex-col items-center space-y-2">
                            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${step === num ? 'bg-brand-navy border-brand-teal text-brand-teal scale-110 shadow-[0_0_15px_rgba(0,201,177,0.3)]' :
                                    step > num ? 'bg-brand-teal border-brand-teal text-brand-navy' : 'bg-brand-navy border-white/10 text-white/30'
                                }`}>
                                {step > num ? <CheckCircle2 size={18} /> : <span className="text-xs font-bold font-mono">{num}</span>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between max-w-3xl mx-auto mt-4">
                    {['Metadata', 'Abstract', 'Authors', 'Files', 'Review'].map((label, idx) => (
                        <span key={label} className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-colors ${step >= idx + 1 ? 'text-white' : 'text-white/20'}`}>
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 lg:p-12 glass relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none"></div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-2xl">
                                    <Bookmark size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-white">Manuscript Metadata</h2>
                                    <p className="text-white/40 text-sm">Define the primary details of your research.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-2 lg:col-span-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Submission Type</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {['Original Research', 'Review Article', 'Short Communication', 'Case Study'].map(type => (
                                            <button
                                                key={type}
                                                onClick={() => setFormData({ ...formData, type })}
                                                className={`p-4 rounded-xl border text-xs font-bold transition-all ${formData.type === type
                                                        ? 'bg-brand-teal/20 border-brand-teal text-brand-teal'
                                                        : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white'
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2 lg:col-span-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Manuscript Title</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Enter the full title of your manuscript..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-lg font-display placeholder:text-white/10 focus:border-brand-teal/50 transition-colors"
                                    ></textarea>
                                </div>

                                <div className="space-y-2 lg:col-span-2">
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Keywords (Comma separated)</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Molecular Pathways, CRISPR-Cas9, Genetic Sequencing..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm text-white focus:border-brand-teal/50 transition-colors"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-2xl">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-white">Full Abstract</h2>
                                    <p className="text-white/40 text-sm">Provide a concise summary of your research objectives and findings.</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-brand-teal/5 p-4 rounded-2xl border border-brand-teal/10 flex items-start space-x-3">
                                    <Info size={18} className="text-brand-teal mt-0.5" />
                                    <p className="text-[11px] text-brand-teal/70 leading-relaxed font-medium">
                                        Abstracts should typically be between 150-300 words. Avoid citations and undefined abbreviations.
                                    </p>
                                </div>
                                <textarea
                                    rows={12}
                                    placeholder="Type or paste your abstract here..."
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-8 text-white text-sm leading-relaxed placeholder:text-white/10 focus:border-brand-teal/50 transition-colors"
                                ></textarea>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-2xl">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-display font-bold text-white">Author List</h2>
                                        <p className="text-white/40 text-sm">Add all contributing authors and their affiliations.</p>
                                    </div>
                                </div>
                                <button
                                    onClick={addAuthor}
                                    className="flex items-center space-x-2 text-brand-teal hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                                >
                                    <Plus size={16} /> <span>Add Author</span>
                                </button>
                            </div>

                            <div className="space-y-4">
                                {formData.authors.map((author, index) => (
                                    <div key={index} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end relative group">
                                        <div className="space-y-1">
                                            <label className="text-[10px] uppercase font-bold tracking-widest text-white/20">Full Name</label>
                                            <input type="text" className="w-full bg-brand-navy border border-white/10 rounded-lg py-2 px-3 text-xs text-white" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] uppercase font-bold tracking-widest text-white/20">Email</label>
                                            <input type="email" className="w-full bg-brand-navy border border-white/10 rounded-lg py-2 px-3 text-xs text-white" />
                                        </div>
                                        <div className="space-y-1 lg:col-span-1">
                                            <label className="text-[10px] uppercase font-bold tracking-widest text-white/20">Institution</label>
                                            <input type="text" className="w-full bg-brand-navy border border-white/10 rounded-lg py-2 px-3 text-xs text-white" />
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input type="checkbox" defaultChecked={author.isCorresponding} className="w-4 h-4 rounded bg-white/5 border-white/10 text-brand-teal" />
                                                <span className="text-[10px] text-white/40 uppercase font-bold">Corresponding</span>
                                            </label>
                                            {index > 0 && (
                                                <button onClick={() => removeAuthor(index)} className="p-2 text-red-500/40 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all ml-auto">
                                                    <Trash2 size={16} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-12"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-2xl">
                                    <Upload size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-white">Document Upload</h2>
                                    <p className="text-white/40 text-sm">Upload your primary manuscript and supporting documents.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {['Manuscript (PDF/Docx)', 'Cover Letter (Optional)'].map((label, idx) => (
                                    <div key={label} className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center space-y-4 hover:border-brand-teal/40 transition-all group cursor-pointer bg-white/[0.02]">
                                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/20 group-hover:text-brand-teal transition-colors">
                                            <Upload size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white">{label}</h4>
                                            <p className="text-[10px] text-white/30 uppercase mt-1">Drag & drop or browse</p>
                                        </div>
                                        <div className="text-[10px] text-white/20">Max file size: 25MB</div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 bg-brand-accent/5 border border-brand-accent/10 rounded-2xl flex items-start space-x-4">
                                <AlertCircle size={20} className="text-brand-accent mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-white">Anonymization Requirement</h4>
                                    <p className="text-xs text-white/40 leading-relaxed mt-1">
                                        For double-blind review, please ensure the main manuscript file DOES NOT contain author names or institutional affiliations.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 5 && (
                        <motion.div
                            key="step5"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <CheckCircle2 size={48} className="text-brand-teal mx-auto" />
                                <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Ready for Submission</h2>
                                <p className="text-white/50 text-base max-w-xl mx-auto">
                                    Please review your data carefully. Once submitted, you will not be able to edit the manuscript until the first review cycle is complete.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/20 mb-2">Manuscript Title</h4>
                                        <p className="text-sm text-white font-medium italic">"Neural mapping of bioluminescent organisms in deep sea ecosystems"</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/20 mb-2">Primary Author</h4>
                                        <p className="text-sm text-white font-medium">Dr. John Doe (University of Oxford)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center space-y-6">
                                <label className="flex items-center space-x-3 cursor-pointer group p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-teal/30 transition-all max-w-lg">
                                    <input type="checkbox" className="w-5 h-5 rounded bg-brand-navy border-white/10 text-brand-teal" />
                                    <span className="text-[11px] text-white/60 leading-relaxed">
                                        I confirm that the research is original, all authors have agreed to submission, and the findings have not been published elsewhere.
                                    </span>
                                </label>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full max-w-sm py-5 bg-brand-teal text-brand-navy font-bold rounded-2xl hover:bg-white transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-[0_0_30px_rgba(0,201,177,0.3)]"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <div className="p-1 mr-3 bg-brand-navy/10 rounded-full"><ArrowRight size={18} /></div>}
                                    Confirm Final Submission
                                </button>
                                <p className="text-[10px] text-white/20 uppercase font-mono tracking-tighter">Average first decision: 24 days</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer Actions */}
                {step < 5 && (
                    <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                        <button
                            onClick={prevStep}
                            disabled={step === 1}
                            className={`flex items-center text-sm font-bold transition-colors ${step === 1 ? 'text-white/10 cursor-not-allowed' : 'text-white/40 hover:text-white'}`}
                        >
                            <ArrowLeft size={18} className="mr-2" /> Previous Step
                        </button>
                        <div className="flex items-center space-x-6 text-[10px] font-mono font-bold tracking-[0.2em] text-white/20">
                            STEP {step} OF 5
                        </div>
                        <button
                            onClick={nextStep}
                            className="px-10 py-4 bg-white text-brand-navy font-bold rounded-xl hover:bg-brand-teal transition-all flex items-center group shadow-xl"
                        >
                            Next Step <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubmitManuscript;
