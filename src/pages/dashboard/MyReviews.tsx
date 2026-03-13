import React from 'react';
import { motion } from 'framer-motion';
import {
    ClipboardCheck, Clock, CheckCircle,
    ChevronRight, AlertCircle, FileText,
    User, MessageSquare
} from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';

const MyReviews: React.FC = () => {
    const reviewAssignments = [
        {
            id: 'REV-2026-402',
            title: 'Neural Path Optimization in Cephalopod Signal Modulation',
            authors: ['Chen, S.', 'Thorne, M.'],
            deadline: 'March 25, 2026',
            status: 'pending',
            daysLeft: 14,
        },
        {
            id: 'REV-2026-115',
            title: 'Thermodynamics of biological energy transfer at the nano-scale',
            authors: ['Miller, A.', 'Vogt, P.'],
            deadline: 'March 15, 2026',
            status: 'reviewing',
            daysLeft: 4,
        }
    ];

    return (
        <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-display font-bold text-white mb-2">My Reviews</h1>
                <p className="text-white/50 text-sm">Manage your peer-review assignments and recommendations</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-display font-bold text-white">Pending Assignments</h2>
                        <span className="bg-brand-teal/10 text-brand-teal text-[10px] font-bold px-3 py-1 rounded-full border border-brand-teal/20">
                            {reviewAssignments.length} ACTIVE
                        </span>
                    </div>

                    <div className="space-y-4">
                        {reviewAssignments.map((rev, idx) => (
                            <motion.div
                                key={rev.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-teal/30 transition-all glass"
                            >
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-brand-teal font-bold tracking-widest">{rev.id}</span>
                                        <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded border ${rev.daysLeft < 7 ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-white/5 text-white/40 border-white/10'
                                            }`}>
                                            <Clock size={12} className="mr-1.5" />
                                            DUE IN {rev.daysLeft} DAYS
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-display font-bold text-white leading-tight hover:text-brand-teal transition-colors cursor-pointer">
                                        {rev.title}
                                    </h3>

                                    <div className="flex items-center space-x-2">
                                        <User size={14} className="text-white/30" />
                                        <p className="text-xs text-white/50">{rev.authors.join(', ')}</p>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex space-x-4">
                                            <button className="text-xs font-bold text-white hover:text-brand-teal transition-colors flex items-center">
                                                <FileText size={14} className="mr-1.5" /> Full Article
                                            </button>
                                            <button className="text-xs font-bold text-white hover:text-brand-teal transition-colors flex items-center">
                                                <MessageSquare size={14} className="mr-1.5" /> Author Comments
                                            </button>
                                        </div>
                                        <button className="px-5 py-2 bg-brand-teal text-brand-navy text-xs font-bold rounded-lg hover:bg-white transition-all flex items-center">
                                            Proceed to Review <ChevronRight size={14} className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="p-8 bg-brand-navy border border-white/10 rounded-3xl glass space-y-6">
                        <h3 className="text-lg font-display font-bold text-white">Reviewer Impact</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-white/50">Completed Reviews</p>
                                <p className="text-xl font-bold text-white">12</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-white/50">Avg. Precision</p>
                                <p className="text-xl font-bold text-brand-teal">94%</p>
                            </div>
                            <div className="h-px bg-white/5 w-full"></div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="text-white/40">Reviewer Rank</span>
                                    <span className="text-brand-teal font-bold uppercase tracking-widest text-[10px]">Senior Fellow</span>
                                </div>
                                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-brand-teal w-3/4 h-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                        <div className="flex items-center space-x-3 text-brand-accent">
                            <AlertCircle size={20} />
                            <h4 className="text-sm font-bold">Guidelines</h4>
                        </div>
                        <p className="text-xs text-white/40 leading-relaxed">
                            Please ensure all reviews follow our double-blind standards. Conflicts of interest must be declared within 24 hours of invitation.
                        </p>
                        <button className="text-xs font-bold text-white hover:text-brand-teal transition-colors flex items-center">
                            Reviewer Best Practices <ChevronRight size={14} className="ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;
