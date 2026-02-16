'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
    const t = useTranslations('nav');
    const pathname = usePathname();
    const params = useParams();
    const currentLocale = params.locale as string;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/' as const, label: t('home') },
        { href: '/blog' as const, label: t('blog') },
        { href: '/case-studies' as const, label: t('caseStudies') },
    ];

    const otherLocale = currentLocale === 'en' ? 'pl' : 'en';

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'all 0.3s ease',
                background: isScrolled ? 'rgba(0,0,0,0.6)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(40px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(40px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isScrolled ? '70px' : '90px', transition: 'height 0.3s ease' }}>
                {/* Logo */}
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <Image
                        src="/logo.png"
                        alt="Dobify"
                        width={240}
                        height={64}
                        priority
                        style={{ height: isScrolled ? '40px' : '64px', width: 'auto', transition: 'height 0.3s ease' }}
                    />
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                color: pathname === link.href ? '#4ad888' : 'rgba(255,255,255,0.7)',
                                textDecoration: 'none',
                                fontSize: '0.925rem',
                                fontWeight: 500,
                                transition: 'color 0.3s ease',
                                position: 'relative',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <Link
                        href={pathname}
                        locale={otherLocale}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.375rem',
                            padding: '0.375rem 0.75rem',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.7)',
                            textDecoration: 'none',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        🌐 {otherLocale}
                    </Link>


                    {/* CTA */}
                    <Link href="/free-audit" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}>
                        {t('bookAudit')}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        padding: '0.5rem',
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {isMobileMenuOpen ? (
                            <path d="M6 6L18 18M6 18L18 6" />
                        ) : (
                            <path d="M3 6h18M3 12h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'rgba(0,0,0,0.95)',
                            backdropFilter: 'blur(40px)',
                            WebkitBackdropFilter: 'blur(40px)',
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                            overflow: 'hidden',
                        }}
                    >
                        <div className="container" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        color: pathname === link.href ? '#4ad888' : 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        padding: '0.5rem 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
                                <Link
                                    href={pathname}
                                    locale={otherLocale}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    🌐 {otherLocale}
                                </Link>
                                <Link href="/free-audit" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '0.875rem', flex: 1, justifyContent: 'center' }}>
                                    {t('bookAudit')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </motion.header>
    );
}
