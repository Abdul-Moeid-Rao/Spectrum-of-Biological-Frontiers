import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
    FileText, MessageSquare, Award, Clock,
    ArrowUpRight, AlertCircle, CheckCircle2,
    ChevronRight, Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { RootState } from '../../store';
import StatusBadge from '../../components/common/StatusBadge';

const Dashboard: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.auth);

    const stats = [
        { label: 'My Submissions', value: 3, icon: <FileText className="text-blue-400" /> },
        { label: 'Pending Reviews', value: 1, icon: <MessageSquare className="text-brand-accent" /> },
        { label: 'Accepted Articles', value: 2, icon: <CheckCircle2 className="text-brand-teal" /> },
        { label: 'Citations', value: 142, icon: <Award className="text-yellow-400" /> },
    ];

    const recentActivity = [
        { id: '1', title: 'Neural Path Optimization...', status: 'under-review', date: '2 hours ago' },
        { id: '2', title: 'Genome sequencing of salt-tolerant...', status: 'revision-required', date: '1 day ago' },
        { id: '3', title: 'Marine ecosystem dynamics...', status: 'published', date: '3 days ago' },
    ];

    return (
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden bg-slate-50 border border-black/5 rounded-3xl p-8 lg:p-12 shadow-sm"
            >
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-center md:text-left">
                    <div className="space-y-4">
                        <h1 className="text-3xl lg:text-4xl font-display font-bold text-black leading-tight">
                            Welcome back, <span className="text-brand-teal">Dr. {user?.name || 'Researcher'}</span>
                        </h1>
                        <p className="text-black/50 text-base max-w-xl">
                            Your academic workspace is ready. You have 1 manuscript requiring revision and 1 pending review assignment.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                            <Link to="/submit" className="w-full sm:w-auto px-8 py-3 bg-brand-teal text-white font-bold rounded-xl hover:bg-brand-navy transition-all flex items-center justify-center shadow-lg shadow-brand-teal/20">
                                <Plus size={18} className="mr-2" /> New Submission
                            </Link>
                            <div className="flex items-center space-x-2 text-xs text-brand-accent bg-brand-accent/5 px-4 py-2 rounded-lg border border-brand-accent/10">
                                <AlertCircle size={14} />
                                <span>Profile completion: 85%</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block w-48 h-48 bg-gradient-to-tr from-brand-teal/10 to-brand-accent/10 rounded-full blur-[40px]"></div>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border border-black/5 rounded-2xl p-6 hover:border-brand-teal/20 transition-all flex items-center space-x-4 shadow-sm"
                    >
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl">
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-black">{stat.value}</p>
                            <p className="text-[10px] uppercase tracking-widest text-black/40 font-mono">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-12">
                {/* Recent Submissions */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-display font-bold text-black">My Recent Submissions</h2>
                        <Link to="/dashboard/submissions" className="text-xs text-brand-teal hover:underline flex items-center font-bold uppercase tracking-widest">
                            View All <ArrowUpRight size={14} className="ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentActivity.map((item) => (
                            <div key={item.id} className="bg-white border border-black/5 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-teal/20 transition-all group shadow-sm">
                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <StatusBadge status={item.status as any} />
                                        <span className="text-[10px] text-black/30 font-mono">SBF-2026-{item.id}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-black group-hover:text-brand-teal transition-colors line-clamp-2">{item.title}</h3>
                                </div>
                                <div className="mt-6 pt-6 border-t border-black/5 flex items-center justify-between">
                                    <span className="text-[10px] text-black/30 flex items-center uppercase tracking-widest font-bold">
                                        <Clock size={12} className="mr-1" /> {item.date}
                                    </span>
                                    <ChevronRight size={18} className="text-black/10 group-hover:text-brand-teal transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tasks & Support Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h2 className="text-xl font-display font-bold text-black">Pending Tasks</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 bg-brand-accent/5 border border-brand-accent/10 rounded-2xl space-y-4">
                                <div className="flex items-center space-x-3 text-brand-accent">
                                    <AlertCircle size={18} />
                                    <h4 className="text-sm font-bold">Revision Required</h4>
                                </div>
                                <p className="text-xs text-black/60 leading-relaxed">
                                    Editor has requested major revisions for "Genome sequencing of salt-tolerant...". Due in 4 days.
                                </p>
                                <button className="w-full py-2.5 bg-brand-accent text-white text-xs font-bold rounded-xl hover:bg-brand-accent/80 transition-all shadow-md shadow-brand-accent/20">
                                    Submit Revision
                                </button>
                            </div>

                            <div className="p-6 bg-white border border-black/5 rounded-2xl flex flex-col justify-between shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-2.5 bg-brand-teal/10 text-brand-teal rounded-xl">
                                        <MessageSquare size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-black">1 Peer Review</h4>
                                        <p className="text-[10px] text-black/40">Acceptance pending</p>
                                    </div>
                                </div>
                                <button className="w-full py-2.5 border-2 border-brand-teal text-brand-teal text-xs font-bold rounded-xl hover:bg-brand-teal hover:text-white transition-all">Start Review</button>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-slate-50 border border-black/5 rounded-3xl space-y-6 flex flex-col justify-center">
                        <div className="space-y-2">
                            <h4 className="text-lg font-bold text-black">Need assistance?</h4>
                            <p className="text-sm text-black/50 leading-relaxed">
                                Check our author resources or contact the editorial office for support with your submission.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <Link to="/authors/guidelines" className="px-6 py-2.5 bg-white border border-black/5 text-black text-xs font-bold rounded-xl hover:text-brand-teal transition-all shadow-sm text-center">
                                Author Guidelines
                            </Link>
                            <Link to="/contact" className="px-6 py-2.5 bg-white border border-black/5 text-black text-xs font-bold rounded-xl hover:text-brand-teal transition-all shadow-sm text-center">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
