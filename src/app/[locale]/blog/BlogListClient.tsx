'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { BlogPost } from '@/lib/content';

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
    const t = useTranslations('blog');
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                <article className="glass-card glass-highlight" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    {/* Placeholder image area */}
                                    <div style={{
                                        height: '180px',
                                        borderRadius: '12px',
                                        background: `linear-gradient(135deg, rgba(74,216,136,${0.05 + i * 0.03}) 0%, rgba(74,216,136,0.02) 100%)`,
                                        border: '1px solid rgba(255,255,255,0.04)',
                                        marginBottom: '1.25rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '2.5rem',
                                        opacity: 0.6,
                                    }}>
                                        {['📊', '🤖', '⚡'][i % 3]}
                                    </div>

                                    {/* Tags */}
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                                        {post.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.7rem',
                                                fontWeight: 600,
                                                color: '#4ad888',
                                                background: 'rgba(74,216,136,0.08)',
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: '100px',
                                                border: '1px solid rgba(74,216,136,0.15)',
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.5rem' }}>{post.title}</h2>
                                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>{post.description}</p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>{post.date}</span>
                                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>{post.readTime}</span>
                                    </div>

                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#4ad888', fontSize: '0.875rem', fontWeight: 600, marginTop: '0.75rem' }}>
                                        {t('readMore')}
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                            <path d="M3 8h10M9 4l4 4-4 4" />
                                        </svg>
                                    </span>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
