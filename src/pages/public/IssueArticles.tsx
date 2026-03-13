import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ChevronLeft, Download } from 'lucide-react';
import ArticleCard from '../../components/journal/ArticleCard';

const IssueArticles: React.FC = () => {
    const { volume, issue } = useParams<{ volume: string, issue: string }>();

    const articles = [
        {
            id: '1',
            title: 'Neural Mapping of Bioluminescent Organisms in Deep Sea Ecosystems',
            authors: ['Dr. Sarah Chen', 'Marcus Thorne', 'Aria Vane'],
            abstract: 'This study presents a comprehensive mapping of neural Pathways associated with bioluminescence in deep-sea Cephalopods...',
            doi: '10.1234/sbf.2026.001',
            category: 'Marine Neurobiology',
            publishDate: 'March 10, 2026',
            downloadCount: 452,
        },
        {
            id: '4',
            title: 'Structural Analysis of S-layer Proteins in Extremophilic Archaea',
            authors: ['Robert Fox', 'Julia Wu'],
            abstract: 'We report high-resolution cryo-EM structures of S-layer archetypes from various hydrothermal vent samples...',
            doi: '10.1234/sbf.2026.045',
            category: 'Structural Biology',
            publishDate: 'March 08, 2026',
            downloadCount: 210,
        }
    ];

    return (
        <div className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16 bg-white">
            <Link to="/archives" className="inline-flex items-center text-[10px] font-bold text-black/40 hover:text-brand-teal transition-colors uppercase tracking-[0.2em] group">
                <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Archives
            </Link>

            <section className="space-y-8">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em] block mb-6">Volume {volume}, Issue {issue}</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-black leading-tight uppercase tracking-tight">Spring 2026 Collection</h1>
                    <div className="flex flex-wrap items-center gap-6 text-black/40 text-[11px] font-mono font-bold mt-8 uppercase tracking-widest">
                        <span className="flex items-center bg-slate-50 px-4 py-2 rounded-lg border border-black/5"><Calendar size={14} className="mr-2 text-brand-teal" /> Published March 2026</span>
                        <span className="flex items-center bg-slate-50 px-4 py-2 rounded-lg border border-black/5"><BookOpen size={14} className="mr-2 text-brand-teal" /> 14 Articles</span>
                        <button className="flex items-center text-brand-teal hover:text-brand-navy transition-colors bg-brand-teal/5 px-4 py-2 rounded-lg border border-brand-teal/10"><Download size={14} className="mr-2" /> Full Issue PDF</button>
                    </div>
                </motion.div>
            </section>

            <div className="h-px bg-black/5 w-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-8">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

            <div className="pt-24 text-center border-t border-black/5">
                <p className="text-black/20 text-[10px] uppercase font-mono tracking-widest font-bold">End of Issue Volume {volume}, Issue {issue}</p>
            </div>
        </div>
    );
};

export default IssueArticles;
