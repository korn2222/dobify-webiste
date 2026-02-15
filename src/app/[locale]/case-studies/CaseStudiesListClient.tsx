'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { CaseStudy } from '@/lib/content';

export default function CaseStudiesListClient({ studies }: { studies: CaseStudy[] }) {
    const t = useTranslations('caseStudies');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section ref={ref} style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
            <div className="container">
                <div className="section-header">
                    <motion.h1
                        className="section-title gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('title')}
                    </motion.h1>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {studies.map((study, i) => (
                        <motion.div
                            key={study.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <Link href={`/case-studies/${study.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                <div className="glass-card glass-highlight" style={{ height: '100%' }}>
                                    {/* Gradient header */}
                                    <div style={{
                                        height: '160px',
                                        borderRadius: '12px',
                                        background: `linear-gradient(135deg, rgba(74,216,136,${0.08 + i * 0.04}) 0%, rgba(0,0,0,0.4) 100%)`,
                                        border: '1px solid rgba(255,255,255,0.04)',
                                        marginBottom: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem',
                                    }}>
                                        <span style={{ fontSize: '1.5rem', fontWeight: 800, textAlign: 'center', lineHeight: 1.2 }}>{study.client}</span>
                                    </div>

                                    <span style={{
                                        fontSize: '0.7rem', fontWeight: 600, color: '#4ad888',
                                        background: 'rgba(74,216,136,0.08)', padding: '0.2rem 0.6rem',
                                        borderRadius: '100px', border: '1px solid rgba(74,216,136,0.15)',
                                    }}>
                                        {study.industry}
                                    </span>

                                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.3, margin: '0.75rem 0 0.5rem' }}>{study.title}</h2>
                                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '1.25rem' }}>{study.description}</p>

                                    {/* Key Results */}
                                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '0.5rem' }}>
                                            {t('results')}
                                        </span>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {study.results.map(result => (
                                                <span key={result} style={{
                                                    fontSize: '0.8rem', fontWeight: 600, color: '#4ad888',
                                                    background: 'rgba(74,216,136,0.06)', padding: '0.375rem 0.75rem',
                                                    borderRadius: '8px', border: '1px solid rgba(74,216,136,0.1)',
                                                }}>
                                                    {result}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#4ad888', fontSize: '0.875rem', fontWeight: 600, marginTop: '1rem' }}>
                                        {t('readMore')}
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                            <path d="M3 8h10M9 4l4 4-4 4" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
