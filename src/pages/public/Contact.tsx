import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail, MapPin, Send, HelpCircle, Clock, ArrowRight
} from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-white">
            <section className="text-center space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Support & Inquiry</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight uppercase tracking-tight">Contact Our Office</h1>
                    <p className="text-black/50 max-w-3xl mx-auto text-xl leading-relaxed mt-8">
                        Have questions about your submission, peer review, or institutional agreements? Our dedicated support team is here to help.
                    </p>
                </motion.div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="space-y-12">
                    <div className="p-10 bg-white border border-black/5 rounded-[3rem] space-y-10 shadow-sm">
                        <div className="flex items-start space-x-6 group">
                            <div className="w-14 h-14 bg-brand-teal/5 rounded-2xl flex items-center justify-center text-brand-teal shrink-0 group-hover:scale-110 transition-transform duration-500">
                                <Mail size={28} />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-[11px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">Email Us</h4>
                                <p className="text-xs text-black/50 mb-2">Editoral Queries:</p>
                                <a href="mailto:office@spectrumjournal.org" className="text-brand-teal text-sm font-bold hover:text-brand-navy transition-colors">office@spectrumjournal.org</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 group">
                            <div className="w-14 h-14 bg-brand-teal/5 rounded-2xl flex items-center justify-center text-brand-teal shrink-0 group-hover:scale-110 transition-transform duration-500">
                                <MapPin size={28} />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-[11px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">Office Address</h4>
                                <p className="text-sm text-black/60 leading-relaxed font-medium">
                                    Academic Square, Suite 402<br />
                                    Kensington High Street<br />
                                    London, W8 5SA, United Kingdom
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 group">
                            <div className="w-14 h-14 bg-brand-teal/5 rounded-2xl flex items-center justify-center text-brand-teal shrink-0 group-hover:scale-110 transition-transform duration-500">
                                <Clock size={28} />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-[11px] font-bold text-black/30 uppercase tracking-[0.2em] mb-1">Working Hours</h4>
                                <p className="text-sm text-black/60 leading-relaxed font-medium">
                                    Monday – Friday<br />
                                    09:00 AM – 06:00 PM GMT
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 bg-brand-teal/5 border border-brand-teal/10 rounded-[3rem] space-y-6">
                        <div className="flex items-center space-x-4 text-brand-teal">
                            <div className="p-3 bg-white rounded-xl shadow-sm border border-brand-teal/10">
                                <HelpCircle size={24} />
                            </div>
                            <h3 className="text-lg font-display font-bold text-black uppercase tracking-widest">Help Center</h3>
                        </div>
                        <p className="text-sm text-black/50 leading-relaxed font-medium italic">
                            Check our Frequently Asked Questions for immediate answers regarding manuscript formatting and APC waivers.
                        </p>
                        <button className="text-sm font-bold text-black hover:text-brand-teal transition-colors flex items-center group">
                            Visit FAQ Hub <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-brand-navy border border-white/5 rounded-[4rem] p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                        <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-12 border-l-4 border-brand-teal pl-8 relative z-10">Send a Message</h3>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                            <div className="space-y-3">
                                <label className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/40 ml-1">Your Full Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-base text-white focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 transition-all outline-none shadow-inner" placeholder="John Doe" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/40 ml-1">Email Address</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-base text-white focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 transition-all outline-none shadow-inner" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-3 md:col-span-2">
                                <label className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/40 ml-1">Inquiry Subject</label>
                                <div className="relative">
                                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-base text-white focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 transition-all appearance-none outline-none shadow-inner">
                                        <option className="bg-brand-navy">Editorial Query</option>
                                        <option className="bg-brand-navy">Technical Support</option>
                                        <option className="bg-brand-navy">Membership & Billing</option>
                                        <option className="bg-brand-navy">Peer Review Assignment</option>
                                        <option className="bg-brand-navy">Other</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                                        <Send size={16} className="rotate-90" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 md:col-span-2">
                                <label className="text-[11px] uppercase font-bold tracking-[0.2em] text-white/40 ml-1">Your Message</label>
                                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-base text-white focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 transition-all outline-none shadow-inner resize-none" placeholder="How can we help you today?"></textarea>
                            </div>
                            <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                                <p className="text-[11px] text-white/20 italic font-medium uppercase tracking-widest text-center md:text-left">We typically respond within 1-2 business days.</p>
                                <button className="w-full md:w-auto px-12 py-5 bg-black text-white font-bold rounded-2xl hover:bg-brand-navy transition-all flex items-center justify-center shadow-2xl shadow-black/20 group border border-white/10">
                                    Send Inquiry <Send size={20} className="ml-3 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
