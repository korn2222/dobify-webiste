'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AnimatedCounter } from '@/components/Charts';
import FeatureIcon from '@/components/FeatureIcon';
import { Link } from '@/i18n/navigation';

/* ============================================================
   HERO SECTION
   ============================================================ */
function Hero() {
    const t = useTranslations('hero');

    return (
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
            {/* Animated background orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />

            {/* Gradient mesh */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 40%, rgba(74,216,136,0.06) 0%, transparent 60%)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <span className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', borderRadius: '100px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ad888', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
                        AI-Powered Automation
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: '-0.04em',
                        marginBottom: '1.5rem',
                    }}
                >
                    <span className="gradient-text">{t('headline')}</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.7,
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem',
                    }}
                >
                    {t('subheadline')}
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Link href="/free-audit" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
                        {t('cta')}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                    </Link>
                </motion.div>

                {/* Animated glow line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                        marginTop: '4rem',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, #4ad888, transparent)',
                        opacity: 0.3,
                    }}
                />
            </div>
        </section>
    );
}

/* ============================================================
   SOCIAL PROOF BAR
   ============================================================ */
function SocialProof() {
    const t = useTranslations('socialProof');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const stats = [
        { value: 5000, label: t('leads'), suffix: '+' },
        { value: 2000, label: t('calls'), suffix: '+' },
        { value: 5, label: t('responseTime'), suffix: 's' },
    ];

    return (
        <section ref={ref} style={{ padding: '60px 0' }}>
            <div className="container">
                <motion.div
                    className="glass glass-highlight grid grid-cols-3 gap-2 md:gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ padding: '1.5rem 1rem', textAlign: 'center' }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {/* Adjusted clamp for smaller mobile screens */}
                            <div style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)', fontWeight: 800, color: '#4ad888', marginBottom: '0.25rem', lineHeight: 1.2 }}>
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, lineHeight: 1.2 }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

/* ============================================================
   TECH STACK CAROUSEL
   ============================================================ */
function TechStack() {
    const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());



    const handleImageError = (name: string) => {
        setFailedLogos(prev => {
            const next = new Set(prev);
            next.add(name);
            return next;
        });
    };

    // Use high-quality SVGs.
    // Use "white" variants for dark logos (Notion, GitHub, Make, Claude) so they are visible on the dark "tinted" background
    const logos = [
        { name: 'Supabase', src: 'https://cdn.simpleicons.org/supabase' },
        { name: 'WhatsApp', src: 'https://cdn.simpleicons.org/whatsapp' },
        { name: 'Airtable', src: 'https://cdn.simpleicons.org/airtable' },
        { name: 'Make', src: 'https://cdn.simpleicons.org/make/white' }, // Use white for visibility
        { name: 'n8n', src: 'https://cdn.simpleicons.org/n8n' },
        { name: 'Slack', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg' },
        { name: 'Messenger', src: 'https://cdn.simpleicons.org/messenger' },
        { name: 'Telegram', src: 'https://cdn.simpleicons.org/telegram' },
        { name: 'HubSpot', src: 'https://cdn.simpleicons.org/hubspot' },
        { name: 'Notion', src: 'https://cdn.simpleicons.org/notion/white' }, // Use white for visibility
        { name: 'Stripe', src: 'https://cdn.simpleicons.org/stripe' },
        { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/white' }, // Use white for visibility
        { name: 'Word', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftword.svg' },
        { name: 'Google', src: 'https://cdn.simpleicons.org/google' },
        { name: 'SMS', src: 'https://cdn.simpleicons.org/imessage' },
        { name: 'Sheets', src: 'https://cdn.simpleicons.org/googlesheets' },
        { name: 'Excel', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg' },
        { name: 'ChatGPT', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg' }, // Use white for visibility
        { name: 'Claude', src: 'https://cdn.simpleicons.org/anthropic/white' }, // Force white
        { name: 'Gemini', src: 'https://cdn.simpleicons.org/googlegemini' },
        { name: 'Zapier', src: 'https://cdn.simpleicons.org/zapier' },
    ];

    return (
        <section className="section" style={{ padding: '60px 0', overflow: 'hidden' }}>
            <div className="container">
                <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                    BUILD WITH YOUR FAVORITE TECH
                </p>
                {/* Added py-4 (padding) to mask container to allow zoom scaling without clipping top/bottom */}
                <div style={{ position: 'relative', overflow: 'visible', padding: '20px 0', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    {/* Using 4 sets of logos ensures seamless loop with translateX(-50%) animation for wide screens */}
                    <div className="animate-marquee" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => {
                            if (failedLogos.has(logo.name)) return null;

                            // Identify monochrome logos that should stay white on hover (Notion, GitHub, etc.)
                            const isMonochrome = ['Notion', 'GitHub', 'Make', 'ChatGPT', 'Claude', 'Excel', 'Word', 'Slack'].includes(logo.name);

                            return (
                                <div
                                    key={`${logo.name}-${i}`}
                                    className="tech-icon-container"
                                    style={{
                                        flexShrink: 0,
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.03)', // Much more tinted/subtle (basically transparent grey)
                                        border: '1px solid rgba(255,255,255,0.05)', // Very subtle rim
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.2)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; // Slightly brighter on hover
                                        const img = e.currentTarget.querySelector('img');
                                        if (img) {
                                            img.style.opacity = '1';
                                            // Only remove filter for color logos. Keep monochrome logos white.
                                            if (!isMonochrome) {
                                                img.style.filter = 'none';
                                            }
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                        const img = e.currentTarget.querySelector('img');
                                        if (img) {
                                            img.style.opacity = '0.4'; // Very subtle default state
                                            img.style.filter = 'brightness(0) invert(1)'; // Force White
                                        }
                                    }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        style={{
                                            height: '24px',
                                            width: '24px',
                                            objectFit: 'contain',
                                            opacity: 0.4, // Subtle by default
                                            filter: 'brightness(0) invert(1)', // Force White
                                            transition: 'all 0.3s'
                                        }}
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            handleImageError(logo.name);
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   FEATURES GRID
   ============================================================ */
function Features() {
    const t = useTranslations('features');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const features = [
        { key: 'leadGen' as const, icon: 'leadGen' as const },
        { key: 'aiCaller' as const, icon: 'aiCaller' as const },
        { key: 'dataAnalysis' as const, icon: 'dataAnalysis' as const },
        { key: 'crm' as const, icon: 'crm' as const },
        { key: 'notificationBot' as const, icon: 'notificationBot' as const },
        { key: 'smsCampaigns' as const, icon: 'smsCampaigns' as const },
    ];

    return (
        <section ref={ref} className="section" id="features">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.key}
                            className="glass-card glass-highlight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}

                        >
                            <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(74,216,136,0.08)', border: '1px solid rgba(74,216,136,0.15)' }}>
                                <FeatureIcon type={feature.icon} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{t(`${feature.key}.title`)}</h3>
                            </div>
                            <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, color: '#4ad888', background: 'rgba(74,216,136,0.1)', padding: '0.25rem 0.75rem', borderRadius: '100px', marginBottom: '0.75rem' }}>
                                {t(`${feature.key}.subtitle`)}
                            </span>
                            <p style={{ fontSize: '0.925rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                                {t(`${feature.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   HOW IT WORKS
   ============================================================ */
function HowItWorks() {
    const t = useTranslations('howItWorks');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const steps = [
        { key: 'step1', number: '01', icon: '🎯' },
        { key: 'step2', number: '02', icon: '🤖' },
        { key: 'step3', number: '03', icon: '📅' },
    ];

    return (
        <section ref={ref} className="section" style={{ position: 'relative' }}>
            {/* Background accent */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,216,136,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative' }}>
                <div className="section-header">
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                        {t('title')}
                    </motion.h2>
                    <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', position: 'relative' }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.key}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            style={{ textAlign: 'center', position: 'relative' }}
                        >
                            {/* Step number */}
                            <div style={{ fontSize: '5rem', fontWeight: 900, color: 'rgba(74,216,136,0.06)', lineHeight: 1, marginBottom: '-1.5rem', position: 'relative', zIndex: 0 }}>
                                {step.number}
                            </div>

                            {/* Icon */}
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                                {step.icon}
                            </div>

                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                {t(`${step.key}.title`)}
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.925rem', maxWidth: '320px', margin: '0 auto' }}>
                                {t(`${step.key}.description`)}
                            </p>

                            {/* Connector line (not on last) */}
                            {i < steps.length - 1 && (
                                <motion.div
                                    className="step-connector"
                                    initial={{ scaleX: 0 }}
                                    animate={isInView ? { scaleX: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        top: '40%',
                                        right: '-1rem',
                                        width: '2rem',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #4ad888, transparent)',
                                        transformOrigin: 'left',
                                    }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .step-connector { display: none; }
        }
      `}</style>
        </section>
    );
}

/* ============================================================
   CUSTOM SOLUTIONS
   ============================================================ */
function CustomSolutions() {
    const t = useTranslations('customSolutions');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const solutions = [
        { key: 'aiAutomation' as const },
        { key: 'appDevelopment' as const },
        { key: 'dataManagement' as const },
        { key: 'webDevelopment' as const },
    ];

    return (
        <section ref={ref} className="section">
            <div className="container">
                <div className="section-header">
                    <motion.h2 className="section-title gradient-text" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                        {t('title')}
                    </motion.h2>
                    <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {solutions.map((solution, i) => (
                        <motion.div
                            key={solution.key}
                            className="glass-card glass-highlight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            style={{ padding: '2rem' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{t(`${solution.key}.title`)}</h3>
                            </div>
                            <p style={{ fontSize: '0.925rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                                {t(`${solution.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function Testimonials() {
    const t = useTranslations('testimonials');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // PLACEHOLDER: Replace with real client testimonials.
    // WHY: Social proof increases conversion by ~15%.
    const reviews = [
        { name: t('reviews.0.name'), role: t('reviews.0.role'), text: t('reviews.0.text') },
        { name: t('reviews.1.name'), role: t('reviews.1.role'), text: t('reviews.1.text') },
        { name: t('reviews.2.name'), role: t('reviews.2.role'), text: t('reviews.2.text') },
    ];

    return (
        <section ref={ref} className="section">
            <div className="container">
                <div className="section-header">
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                        {t('title')}
                    </motion.h2>
                    <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.name}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                                {[...Array(5)].map((_, j) => (
                                    <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#4ad888">
                                        <path d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8 3.8 14l.8-4.7L1.2 6l4.7-.7z" />
                                    </svg>
                                ))}
                            </div>

                            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                &ldquo;{review.text}&rdquo;
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                {/* Avatar placeholder */}
                                <div style={{
                                    width: 40, height: 40, borderRadius: '50%',
                                    background: `linear-gradient(135deg, rgba(74,216,136,${0.3 + i * 0.2}), rgba(74,216,136,0.1))`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.9rem', fontWeight: 700, color: '#4ad888',
                                }}>
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{review.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{review.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   CTA SECTION
   ============================================================ */
function CTASection() {
    const t = useTranslations('cta');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="section" id="book-audit" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(74,216,136,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative' }}>
                <motion.div
                    className="glass glass-highlight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', padding: 'clamp(3rem, 6vw, 5rem)', borderRadius: '32px', maxWidth: '800px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                        <span className="gradient-text">{t('title')}</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        {t('subtitle')}
                    </p>
                    <Link href="/free-audit" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                        {t('button')}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

/* ============================================================
   MAIN PAGE COMPONENT
   ============================================================ */
export default function HomePage() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Dobify',
                        description: 'AI-powered marketing and automation agency',
                        url: 'https://dobify.com',
                        logo: 'https://dobify.com/logo.png',
                        sameAs: [],
                        contactPoint: {
                            '@type': 'ContactPoint',
                            contactType: 'sales',
                            availableLanguage: ['English', 'Polish'],
                        },
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        name: 'Dobify',
                        url: 'https://dobify.com',
                    }),
                }}
            />

            <Hero />
            <SocialProof />
            <TechStack />
            <Features />
            <HowItWorks />
            <CustomSolutions />
            <Testimonials />
            <CTASection />
        </>
    );
}
