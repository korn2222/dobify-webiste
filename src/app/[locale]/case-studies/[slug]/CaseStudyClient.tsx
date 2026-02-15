'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import type { CaseStudy } from '@/lib/content';

interface Props {
    study: CaseStudy;
    content: string;
    backLabel: string;
    resultsLabel: string;
    industryLabel: string;
}

export default function CaseStudyClient({ study, content, backLabel, resultsLabel, industryLabel }: Props) {
    return (
        <article style={{ paddingTop: '140px', paddingBottom: '80px' }}>
            <div className="container" style={{ maxWidth: '760px' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Link href="/case-studies" style={{ color: '#4ad888', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, marginBottom: '2rem', display: 'inline-flex' }}>
                        {backLabel}
                    </Link>

                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <span style={{
                            fontSize: '0.7rem', fontWeight: 600, color: '#4ad888',
                            background: 'rgba(74,216,136,0.08)', padding: '0.2rem 0.6rem',
                            borderRadius: '100px', border: '1px solid rgba(74,216,136,0.15)',
                        }}>
                            {study.industry}
                        </span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                        {study.title}
                    </h1>

                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '2rem' }}>
                        {study.description}
                    </p>

                    {/* Key Results Banner */}
                    <div className="glass glass-highlight" style={{ padding: '1.5rem 2rem', borderRadius: '16px', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '1rem' }}>
                            {resultsLabel}
                        </span>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                            {study.results.map(result => (
                                <div key={result} style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4ad888', display: 'block' }}>
                                        {result}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)' }}
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                <style jsx global>{`
          article h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
          }
          article p {
            margin-bottom: 1.25rem;
          }
        `}</style>
            </div>
        </article>
    );
}
