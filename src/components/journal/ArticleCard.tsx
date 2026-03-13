import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArticleCardProps {
    article: {
        id: string;
        title: string;
        authors: string[];
        abstract: string;
        doi: string;
        category: string;
        publishDate: string;
        downloadCount: number;
    };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white border border-black/5 rounded-2xl overflow-hidden hover:border-brand-teal/40 transition-all duration-500 shadow-sm hover:shadow-md"
        >
            <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand-teal/10">
                        {article.category}
                    </span>
                    <span className="flex items-center text-black/40 text-[10px] uppercase font-mono tracking-wider">
                        <Calendar size={12} className="mr-1.5" />
                        {article.publishDate}
                    </span>
                </div>

                <Link to={`/archives/article/${article.id}`}>
                    <h3 className="text-xl font-display font-bold text-black mb-3 group-hover:text-brand-teal transition-colors leading-snug">
                        {article.title}
                    </h3>
                </Link>

                <div className="flex items-center space-x-2 mb-4">
                    <User size={14} className="text-brand-teal/70" />
                    <p className="text-sm text-black/60 line-clamp-1 italic">
                        {article.authors.join(', ')}
                    </p>
                </div>

                <p className="text-sm text-black/40 line-clamp-3 mb-6 leading-relaxed">
                    {article.abstract}
                </p>

                <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <span className="text-[10px] font-mono text-black/30 tracking-tighter">
                            DOI: {article.doi}
                        </span>
                        <div className="flex items-center text-black/50 text-xs">
                            <Download size={14} className="mr-1" />
                            {article.downloadCount}
                        </div>
                    </div>

                    <Link
                        to={`/archives/article/${article.id}`}
                        className="flex items-center text-brand-teal text-xs font-bold uppercase tracking-widest hover:text-brand-navy transition-colors"
                    >
                        Read Full <ExternalLink size={14} className="ml-1.5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ArticleCard;
