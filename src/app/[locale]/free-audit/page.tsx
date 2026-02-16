'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Common country codes for the area code picker
const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+48', country: 'PL' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+34', country: 'ES' },
    { code: '+39', country: 'IT' },
    { code: '+61', country: 'AU' },
    { code: '+81', country: 'JP' },
];

export default function FreeAuditPage() {
    const t = useTranslations('freeAudit');
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        areaCode: '+48',
        phone: '',
        company: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/send-audit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            console.log('Form submitted:', formState);
            setIsSuccess(true);
            setFormState({
                name: '',
                email: '',
                areaCode: '+48',
                phone: '',
                company: '',
            });
        } catch (err) {
            setError(t('form.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
            {/* Background Elements similar to Home */}
            <div className="orb orb-1" style={{ top: '20%', left: '10%' }} />
            <div className="orb orb-2" style={{ bottom: '20%', right: '10%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(74,216,136,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />


            <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        {t('title')}
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                        {t('subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    className="glass glass-highlight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', borderRadius: '24px' }}
                >
                    {isSuccess ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <div style={{ width: 80, height: 80, background: 'rgba(74,216,136,0.1)', color: '#4ad888', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem' }}>
                                ✓
                            </div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>{t('form.success')}</h3>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                            {/* Name */}
                            <div className="form-group">
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', marginLeft: '0.25rem' }}>{t('form.name')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder={t('form.namePlaceholder')}
                                    className="input-field"
                                    value={formState.name}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'white',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#4ad888'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', marginLeft: '0.25rem' }}>{t('form.email')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder={t('form.emailPlaceholder')}
                                    value={formState.email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'white',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#4ad888'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                            </div>

                            {/* Phone with Area Code */}
                            <div className="form-group">
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', marginLeft: '0.25rem' }}>{t('form.phone')}</label>
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    <div style={{ position: 'relative', width: '100px', flexShrink: 0 }}>
                                        <select
                                            name="areaCode"
                                            value={formState.areaCode}
                                            onChange={handleChange}
                                            style={{
                                                width: '100%',
                                                padding: '1rem 0.5rem 1rem 1rem',
                                                borderRadius: '12px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                color: 'white',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                appearance: 'none',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {countryCodes.map(c => (
                                                <option key={c.code} value={c.code} style={{ color: 'black' }}>
                                                    {c.code}
                                                </option>
                                            ))}
                                        </select>
                                        <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>▼</div>
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder={t('form.phonePlaceholder')}
                                        value={formState.phone}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '1rem 1.25rem',
                                            borderRadius: '12px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: 'white',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'all 0.3s'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#4ad888'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />
                                </div>
                            </div>

                            {/* Company */}
                            <div className="form-group">
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', marginLeft: '0.25rem' }}>{t('form.company')}</label>
                                <input
                                    type="text"
                                    name="company"
                                    required
                                    placeholder={t('form.companyPlaceholder')}
                                    value={formState.company}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'white',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#4ad888'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                            </div>

                            {error && (
                                <div style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.5rem', textAlign: 'center' }}>
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    padding: '1.1rem',
                                    fontSize: '1.1rem',
                                    marginTop: '1rem',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                {isSubmitting ? t('form.submitting') : t('form.submit')}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
