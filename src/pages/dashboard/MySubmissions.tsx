import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search, Filter, Download, Edit3,
    Trash2, Eye, MoreVertical, Plus,
    FileText, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import StatusBadge from '../../components/common/StatusBadge';

const MySubmissions: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const submissions = [
        {
            id: 'SBF-2026-001',
            title: 'Neural Mapping of Bioluminescent Organisms in Deep Sea Ecosystems',
            status: 'under-review',
            date: 'March 10, 2026',
            type: 'Original Research',
        },
        {
            id: 'SBF-2026-042',
            title: 'Genome sequencing of salt-tolerant xerophytic flora',
            status: 'revision-required',
            date: 'February 28, 2026',
            type: 'Review Article',
        },
        {
            id: 'SBF-2025-891',
            title: 'Microbiome Diversity in High-Altitude Microbialites',
            status: 'published',
            date: 'November 15, 2025',
            type: 'Short Communication',
        },
        {
            id: 'SBF-2026-098',
            title: 'Quantum effects in avian navigation: A re-evaluation',
            status: 'draft',
            date: 'March 11, 2026',
            type: 'Original Research',
        },
    ];

    const filteredSubmissions = submissions.filter(s =>
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div>
                    <h1 className="text-3xl font-display font-bold text-white mb-2">My Submissions</h1>
                    <p className="text-white/50 text-sm">Track and manage your submitted manuscripts</p>
                </div>
                <Link to="/submit" className="px-6 py-3 bg-brand-teal text-brand-navy font-bold rounded-xl hover:bg-white transition-all flex items-center shadow-lg">
                    <Plus size={20} className="mr-2" /> Start New Submission
                </Link>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col md:row items-center space-y-4 md:space-y-0 md:space-x-4 pb-4">
                <div className="relative flex-grow w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input
                        type="text"
                        placeholder="Search by title or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:border-brand-teal/50 transition-colors"
                    />
                </div>
                <button className="flex items-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white/70 hover:bg-white/10 transition-colors">
                    <Filter size={18} />
                    <span>Status: All</span>
                </button>
            </div>

            {/* Submissions Table */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden glass">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/[0.02]">
                                <th className="px-6 py-4 text-[10px] uppercase font-mono tracking-widest text-white/40">Manuscript ID</th>
                                <th className="px-6 py-4 text-[10px] uppercase font-mono tracking-widest text-white/40">Title & Type</th>
                                <th className="px-6 py-4 text-[10px] uppercase font-mono tracking-widest text-white/40">Status</th>
                                <th className="px-6 py-4 text-[10px] uppercase font-mono tracking-widest text-white/40">Last Updated</th>
                                <th className="px-6 py-4 text-[10px] uppercase font-mono tracking-widest text-white/40 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredSubmissions.map((sub, idx) => (
                                <motion.tr
                                    key={sub.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="hover:bg-white/5 transition-colors group"
                                >
                                    <td className="px-6 py-6 align-top">
                                        <span className="text-xs font-mono font-bold text-brand-teal">{sub.id}</span>
                                    </td>
                                    <td className="px-6 py-6 max-w-md">
                                        <div className="space-y-1">
                                            <p className="text-sm font-bold text-white group-hover:text-brand-teal transition-colors line-clamp-1">{sub.title}</p>
                                            <div className="flex items-center space-x-2 text-[10px] text-white/30">
                                                <FileText size={10} />
                                                <span>{sub.type}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 align-top">
                                        <StatusBadge status={sub.status as any} />
                                    </td>
                                    <td className="px-6 py-6 align-top">
                                        <div className="flex items-center text-xs text-white/50">
                                            <Calendar size={14} className="mr-2" />
                                            {sub.date}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-right align-top">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button className="p-2 text-white/30 hover:text-brand-teal transition-colors" title="View details">
                                                <Eye size={16} />
                                            </button>
                                            {sub.status === 'draft' ? (
                                                <button className="p-2 text-white/30 hover:text-brand-teal transition-colors" title="Resume submission">
                                                    <Edit3 size={16} />
                                                </button>
                                            ) : (
                                                <button className="p-2 text-white/30 hover:text-brand-teal transition-colors" title="Download proof">
                                                    <Download size={16} />
                                                </button>
                                            )}
                                            <div className="relative group/menu">
                                                <button className="p-2 text-white/30 hover:text-white transition-colors">
                                                    <MoreVertical size={16} />
                                                </button>
                                                {/* Tooltip-like fast menu could go here */}
                                            </div>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredSubmissions.length === 0 && (
                    <div className="py-20 text-center space-y-4">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/20">
                            <FileText size={32} />
                        </div>
                        <p className="text-white/40 font-medium">No manuscripts found matching your criteria</p>
                        <button onClick={() => setSearchTerm('')} className="text-brand-teal text-sm font-bold hover:underline">Clear search</button>
                    </div>
                )}

                <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                    <p className="text-[10px] text-white/30 font-mono">Showing {filteredSubmissions.length} of {submissions.length} manuscripts</p>
                    <div className="flex items-center space-x-2">
                        <button disabled className="px-3 py-1 border border-white/10 rounded text-[10px] text-white/30 disabled:opacity-30">Previous</button>
                        <button disabled className="px-3 py-1 border border-white/10 rounded text-[10px] text-white/30 disabled:opacity-30">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySubmissions;
