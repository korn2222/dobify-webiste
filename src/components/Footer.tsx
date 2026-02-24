import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
    const t = useTranslations('footer');
    const tNav = useTranslations('nav');
    const tFeatures = useTranslations('features');

    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <Image
                                src="/logo.png"
                                alt="Dobify"
                                width={120}
                                height={48}
                                style={{ height: '48px', width: 'auto' }}
                            />
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '320px' }}>
                            {t('description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
                            {t('quickLinks')}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem', transition: 'color 0.3s' }}>{tNav('home')}</Link>
                            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem', transition: 'color 0.3s' }}>{tNav('blog')}</Link>
                            <Link href="/case-studies" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem', transition: 'color 0.3s' }}>{tNav('caseStudies')}</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
                            {t('services')}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link href="/#features" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem', transition: 'color 0.3s' }}>{tFeatures('leadGen.title')}</Link>
                            <Link href="/#features" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem', transition: 'color 0.3s' }}>{tFeatures('aiCaller.title')}</Link>
                            <Link href="/#features" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem', transition: 'color 0.3s' }}>{tFeatures('dataAnalysis.title')}</Link>
                            <Link href="/#features" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem', transition: 'color 0.3s' }}>{tFeatures('crm.title')}</Link>
                            <Link href="/#features" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem', transition: 'color 0.3s' }}>{tFeatures('notificationBot.title')}</Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
                            {t('legal')}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem' }}>{t('privacy')}</Link>
                            <Link href="/terms-of-use" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.925rem' }}>{t('terms')}</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
                        {t('copyright')}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {/* Social icons placeholder */}
                        {['twitter', 'linkedin', 'instagram'].map((platform) => (
                            <a key={platform} href="#" aria-label={platform} style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.3s' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    {platform === 'twitter' && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />}
                                    {platform === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
                                    {platform === 'instagram' && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
