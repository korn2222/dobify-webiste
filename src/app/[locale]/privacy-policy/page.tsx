'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    const t = useTranslations('privacyPolicy');
    const sections = ['collection', 'use', 'sharing', 'security', 'rights', 'contact'] as const;

    return (
        <section style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
                        {t('title')}
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginBottom: '2rem' }}>
                        {t('lastUpdated')}
                    </p>

                    <div className="glass glass-highlight" style={{ padding: '2.5rem', borderRadius: '24px', marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                            {t('intro')}
                        </p>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', whiteSpace: 'pre-line', border: '1px solid rgba(255,255,255,0.1)' }}>
                            {t('companyInfo')}
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {sections.map((key, i) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            >
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#4ad888' }}>
                                    {t(`sections.${key}.title`)}
                                </h2>
                                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
                                    {t(`sections.${key}.content`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
