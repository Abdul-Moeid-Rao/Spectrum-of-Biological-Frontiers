import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
    User, Mail, Building, Globe,
    Bell, Camera, Shield,
    Save, ExternalLink, Fingerprint
} from 'lucide-react';
import type { RootState } from '../../store';

const Profile: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.auth);

    return (
        <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-display font-bold text-white mb-2">Profile Settings</h1>
                <p className="text-white/50 text-sm">Manage your personal information and academic identity</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Navigation Sidebar */}
                <div className="lg:col-span-1 space-y-2">
                    {[
                        { name: 'Personal Information', icon: <User size={18} />, active: true },
                        { name: 'Academic Affiliation', icon: <Building size={18} />, active: false },
                        { name: 'Security & Password', icon: <Shield size={18} />, active: false },
                        { name: 'Notifications', icon: <Bell size={18} />, active: false },
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`w-full flex items-center space-x-3 px-6 py-4 rounded-xl text-sm font-medium transition-all ${item.active
                                    ? 'bg-brand-teal text-brand-navy shadow-lg shadow-brand-teal/10'
                                    : 'text-white/40 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 glass space-y-10"
                    >
                        {/* Profile Header */}
                        <div className="flex flex-col sm:row items-center space-y-6 sm:space-y-0 sm:space-x-8 pb-10 border-b border-white/5">
                            <div className="relative group">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-teal to-brand-accent flex items-center justify-center text-brand-navy text-3xl font-display font-bold">
                                    {user?.name?.charAt(0) || 'J'}
                                </div>
                                <button className="absolute bottom-0 right-0 p-2 bg-brand-navy border border-white/10 rounded-full text-brand-teal hover:bg-brand-teal hover:text-brand-navy transition-all shadow-xl">
                                    <Camera size={14} />
                                </button>
                            </div>
                            <div className="text-center sm:text-left space-y-1">
                                <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight">{user?.name || 'Dr. John Doe'}</h2>
                                <p className="text-white/40 text-sm font-mono">ID: USER-2026-X892</p>
                                <div className="flex items-center justify-center sm:justify-start space-x-2 text-[10px] text-brand-teal font-bold uppercase tracking-widest bg-brand-teal/10 w-fit px-3 py-1 rounded-full border border-brand-teal/20">
                                    <Fingerprint size={12} />
                                    <span>Verified Author</span>
                                </div>
                            </div>
                            <div className="sm:ml-auto">
                                <button className="px-6 py-2 border border-white/10 text-white/60 text-xs font-bold rounded-lg hover:bg-white/5 transition-all">
                                    View Public Profile
                                </button>
                            </div>
                        </div>

                        {/* Form Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                    <input type="text" defaultValue={user?.name} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                    <input type="email" defaultValue={user?.email} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:border-brand-teal/50 transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-1">ORCID iD</label>
                                <div className="relative">
                                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                    <input type="text" placeholder="0000-0000-0000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white font-mono focus:border-brand-teal/50 transition-colors" />
                                    <a href="#" className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-teal hover:text-white transition-colors">
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-1">Primary Discipline</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors appearance-none">
                                    <option>Cellular Biology</option>
                                    <option>Neuroscience</option>
                                    <option>Genetic Engineering</option>
                                    <option>Marine Biology</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-1">Brief Academic Bio</label>
                            <textarea
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-sm text-white focus:border-brand-teal/50 transition-colors"
                                defaultValue="Senior researcher focusing on signal pathways in deep-sea ecosystems..."
                            ></textarea>
                        </div>

                        <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                            <p className="text-xs text-white/30 italic">Last profile update: March 08, 2026</p>
                            <button className="px-10 py-4 bg-brand-teal text-brand-navy font-bold rounded-xl hover:bg-white transition-all transform hover:scale-[1.02] flex items-center shadow-xl shadow-brand-teal/10 group">
                                <Save size={18} className="mr-2 group-hover:animate-bounce" /> Save Changes
                            </button>
                        </div>
                    </motion.div>

                    <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0">
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-red-400">Deactivate Account</h4>
                            <p className="text-[10px] text-white/40">This will hide your public profile and disable access to the dashboard.</p>
                        </div>
                        <button className="px-6 py-2 border border-red-500/20 text-red-500/60 text-[10px] font-bold uppercase rounded-lg hover:bg-red-500/10 transition-all">
                            Deactivate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
