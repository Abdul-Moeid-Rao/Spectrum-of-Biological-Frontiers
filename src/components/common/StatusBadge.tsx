import React from 'react';

type StatusType = 'draft' | 'submitted' | 'under-review' | 'accepted' | 'published' | 'rejected' | 'revision-required';

interface StatusBadgeProps {
    status: StatusType;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const styles: Record<StatusType, { bg: string, text: string, label: string }> = {
        'draft': { bg: 'bg-white/10', text: 'text-white/60', label: 'Draft' },
        'submitted': { bg: 'bg-blue-500/10', text: 'text-blue-400', label: 'Submitted' },
        'under-review': { bg: 'bg-brand-accent/10', text: 'text-brand-accent', label: 'Under Review' },
        'accepted': { bg: 'bg-brand-teal/10', text: 'text-brand-teal', label: 'Accepted' },
        'published': { bg: 'bg-green-500/10', text: 'text-green-400', label: 'Published' },
        'rejected': { bg: 'bg-red-500/10', text: 'text-red-400', label: 'Rejected' },
        'revision-required': { bg: 'bg-yellow-500/10', text: 'text-yellow-400', label: 'Revision Required' },
    };

    const current = styles[status] || styles['draft'];

    return (
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${current.bg} ${current.text} border-current/20`}>
            {current.label}
        </span>
    );
};

export default StatusBadge;
