import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ExternalLink, ArrowRight, ArrowLeft, CheckCircle2,
    Loader2, BadgeCheck
} from 'lucide-react';

const registerSchema = z.object({
    firstName: z.string().min(2, 'Required'),
    lastName: z.string().min(2, 'Required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Min 8 characters'),
    institution: z.string().min(2, 'Required'),
    department: z.string().min(2, 'Required'),
    country: z.string().min(2, 'Required'),
    orcid: z.string().regex(/^(\d{4}-){3}\d{3}[\dX]$/, 'Invalid ORCID format (e.g. 0000-0002-1825-0097)').optional().or(z.literal('')),
    interests: z.string().min(5, 'Please list a few interests'),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    const { register, handleSubmit, trigger } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    const nextStep = async () => {
        let fieldsToValidate: (keyof RegisterFormValues)[] = [];
        if (step === 1) fieldsToValidate = ['firstName', 'lastName', 'email', 'password'];
        else if (step === 2) fieldsToValidate = ['institution', 'department', 'country'];

        const isValid = await trigger(fieldsToValidate);
        if (isValid) setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const onSubmit = async (data: RegisterFormValues) => {
        setIsLoading(true);
        // Simulate API registration
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Registration data:', data);
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => navigate('/login'), 5000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full text-center space-y-6 glass p-12 rounded-3xl border border-brand-teal/20"
                >
                    <div className="w-20 h-20 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={48} className="text-brand-teal" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white">Registration Complete</h2>
                    <p className="text-white/60 leading-relaxed">
                        Thank you for joining Spectrum! A verification link has been sent to your email. You will be redirected to login shortly.
                    </p>
                    <Link to="/login" className="inline-block text-brand-teal font-bold hover:underline">
                        Go to Login now
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-teal/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px]"></div>

            <div className="w-full max-w-2xl relative z-10">
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden glass shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                        {/* Sidebar / Progress */}
                        <div className="lg:col-span-2 bg-white/[0.02] border-r border-white/5 p-8 lg:p-10 hidden lg:block">
                            <h1 className="text-2xl font-display font-bold text-white mb-10">Join Our <br /><span className="text-brand-teal">Community</span></h1>

                            <div className="space-y-8">
                                {[
                                    { s: 1, t: 'Account Details', d: 'Secure your profile' },
                                    { s: 2, t: 'Affiliation', d: 'Professional details' },
                                    { s: 3, t: 'Research Profile', d: 'ORCID & Interests' }
                                ].map((item) => (
                                    <div key={item.s} className="flex items-start space-x-4">
                                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold transition-colors ${step === item.s ? 'bg-brand-teal border-brand-teal text-brand-navy shadow-[0_0_15px_rgba(0,201,177,0.3)]' :
                                                step > item.s ? 'bg-white/10 border-white/20 text-brand-teal' : 'border-white/10 text-white/30'
                                            }`}>
                                            {step > item.s ? <CheckCircle2 size={16} /> : item.s}
                                        </div>
                                        <div>
                                            <p className={`text-sm font-bold ${step >= item.s ? 'text-white' : 'text-white/30'}`}>{item.t}</p>
                                            <p className="text-[10px] uppercase font-mono tracking-widest text-white/30">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-20 pt-10 border-t border-white/5">
                                <p className="text-xs text-white/30 leading-relaxed italic">
                                    "Advancing science through collaborative excellence and open transparency."
                                </p>
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="lg:col-span-3 p-8 lg:p-10">
                            <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col">
                                <div className="flex-grow">
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">First Name</label>
                                                        <input {...register('firstName')} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Last Name</label>
                                                        <input {...register('lastName')} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Email Address</label>
                                                    <input {...register('email')} type="email" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Create Password</label>
                                                    <input {...register('password')} type="password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Institution / University</label>
                                                    <input {...register('institution')} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Department</label>
                                                    <input {...register('department')} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Country</label>
                                                    <input {...register('country')} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">ORCID ID (Optional)</label>
                                                        <a href="https://orcid.org" target="_blank" rel="noreferrer" className="text-[10px] text-brand-teal hover:underline flex items-center">
                                                            What is this? <ExternalLink size={10} className="ml-1" />
                                                        </a>
                                                    </div>
                                                    <input {...register('orcid')} placeholder="0000-0000-0000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white font-mono focus:border-brand-teal/50 transition-colors" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Research Interests</label>
                                                    <textarea {...register('interests')} rows={4} placeholder="e.g. Molecular Biology, Neural Correlates, CRISPR..." className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                                </div>
                                                <div className="p-4 bg-brand-teal/5 rounded-xl border border-brand-teal/20">
                                                    <p className="text-[10px] leading-relaxed text-brand-teal/70">
                                                        By registering, you agree to our Editorial Policies and Ethics Standards. You may be invited as a reviewer based on your listed interests.
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="mt-12 flex items-center justify-between">
                                    {step > 1 ? (
                                        <button type="button" onClick={prevStep} className="flex items-center text-sm font-bold text-white/40 hover:text-white transition-colors">
                                            <ArrowLeft size={16} className="mr-2" /> Previous
                                        </button>
                                    ) : (
                                        <Link to="/login" className="text-sm text-white/40 hover:text-brand-teal transition-colors underline underline-offset-4 decoration-white/10">Already registered?</Link>
                                    )}

                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="px-8 py-3 bg-white text-brand-navy font-bold rounded-xl hover:bg-brand-teal transition-all flex items-center group"
                                        >
                                            Next Step <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="px-8 py-3 bg-brand-teal text-brand-navy font-bold rounded-xl hover:bg-white transition-all flex items-center shadow-[0_0_20px_rgba(0,201,177,0.4)] disabled:opacity-50"
                                        >
                                            {isLoading ? <Loader2 size={18} className="animate-spin mr-2" /> : <BadgeCheck size={18} className="mr-2" />}
                                            Complete Registration
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
