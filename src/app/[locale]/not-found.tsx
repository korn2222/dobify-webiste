'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
    const t = useTranslations('notFound');

    return (
        <section style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px',
            textAlign: 'center'
        }}>
            {/* Background Orb */}
            <div className="orb" style={{
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle at 50% 50%, rgba(74,216,136,0.15) 0%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1
            }} />

            <div className="container" style={{ maxWidth: '600px' }}>
                <div className="glass-card glass-highlight" style={{
                    padding: '4rem 2rem',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <span style={{
                        fontSize: 'clamp(6rem, 15vw, 10rem)',
                        fontWeight: 800,
                        lineHeight: 1,
                        background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.4) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '-1rem'
                    }}>
                        404
                    </span>

                    <h1 className="gradient-text" style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 800,
                        marginBottom: '0.5rem'
                    }}>
                        {t('title')}
                    </h1>

                    <p style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        marginBottom: '1rem'
                    }}>
                        {t('description')}
                    </p>

                    <Link href="/" className="btn-primary" style={{
                        textDecoration: 'none',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        {t('button')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
