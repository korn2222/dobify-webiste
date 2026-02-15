'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/content';

interface Props {
    post: BlogPost;
    content: string;
    backLabel: string;
}

export default function BlogPostClient({ post, content, backLabel }: Props) {
    return (
        <article style={{ paddingTop: '140px', paddingBottom: '80px' }}>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        description: post.description,
                        datePublished: post.date,
                        author: { '@type': 'Organization', name: 'Dobify' },
                        publisher: { '@type': 'Organization', name: 'Dobify' },
                    }),
                }}
            />

            <div className="container" style={{ maxWidth: '760px' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Link href="/blog" style={{ color: '#4ad888', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', marginBottom: '2rem' }}>
                        {backLabel}
                    </Link>

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        {post.tags.map(tag => (
                            <span key={tag} style={{
                                fontSize: '0.7rem', fontWeight: 600, color: '#4ad888',
                                background: 'rgba(74,216,136,0.08)', padding: '0.2rem 0.6rem',
                                borderRadius: '100px', border: '1px solid rgba(74,216,136,0.15)',
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                        {post.title}
                    </h1>

                    <div style={{ display: 'flex', gap: '1.5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        fontSize: '1.05rem',
                        lineHeight: 1.8,
                        color: 'rgba(255,255,255,0.75)',
                    }}
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
          article ul {
            padding-left: 1.5rem;
            margin-bottom: 1.25rem;
          }
          article li {
            margin-bottom: 0.5rem;
          }
          article strong {
            color: #4ad888;
            font-weight: 700;
          }
        `}</style>
            </div>
        </article>
    );
}
