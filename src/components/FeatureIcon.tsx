'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeatureIconProps {
    type: 'leadGen' | 'aiCaller' | 'dataAnalysis' | 'crm' | 'notificationBot' | 'smsCampaigns';
}

export default function FeatureIcon({ type }: FeatureIconProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const iconProps = {
        width: 48,
        height: 48,
        viewBox: '0 0 48 48',
    };

    const icons: Record<string, React.ReactNode> = {
        leadGen: (
            <svg {...iconProps}>
                <motion.circle cx="24" cy="24" r="18" stroke="#4ad888" strokeWidth="2" fill="none"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5 }} />
                <motion.path d="M24 12v12l8 4" stroke="#4ad888" strokeWidth="2.5" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 0.5 }} />
                <motion.circle cx="24" cy="24" r="3" fill="#4ad888"
                    initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.5, delay: 1 }} />
            </svg>
        ),
        aiCaller: (
            <svg {...iconProps}>
                <motion.path d="M12 20c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#4ad888" strokeWidth="2" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1 }} />
                <motion.path d="M16 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#4ad888" strokeWidth="2" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 0.3 }} />
                <motion.path d="M20 20c0-2.209 1.791-4 4-4s4 1.791 4 4" stroke="#4ad888" strokeWidth="2" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 0.6 }} />
                <motion.circle cx="24" cy="24" r="3" fill="#4ad888"
                    initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.5, delay: 1 }} />
                <motion.rect x="20" y="28" width="8" height="10" rx="2" stroke="#4ad888" strokeWidth="2" fill="none"
                    initial={{ opacity: 0, y: 4 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 1.2 }} />
            </svg>
        ),
        dataAnalysis: (
            <svg {...iconProps}>
                {[12, 20, 28, 36].map((x, i) => (
                    <motion.rect key={x} x={x - 2} y={48 - (i + 1) * 8 - 8} width="4" height={(i + 1) * 8} rx="2"
                        fill={i === 3 ? '#4ad888' : `rgba(74, 216, 136, ${0.3 + i * 0.15})`}
                        initial={{ scaleY: 0 }} animate={isInView ? { scaleY: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }}
                        style={{ transformOrigin: `${x}px 40px` }} />
                ))}
                <motion.path d="M8 10 L16 18 L28 12 L40 6" stroke="#4ad888" strokeWidth="2" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 0.8 }} />
            </svg>
        ),
        crm: (
            <svg {...iconProps}>
                <motion.circle cx="24" cy="16" r="6" stroke="#4ad888" strokeWidth="2" fill="none"
                    initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.5 }} />
                <motion.path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 38" stroke="#4ad888" strokeWidth="2" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 0.3 }} />
                <motion.circle cx="38" cy="14" r="4" stroke="rgba(74,216,136,0.5)" strokeWidth="1.5" fill="none"
                    initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }} />
                <motion.circle cx="10" cy="14" r="4" stroke="rgba(74,216,136,0.5)" strokeWidth="1.5" fill="none"
                    initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.7 }} />
            </svg>
        ),
        notificationBot: (
            <svg {...iconProps}>
                <motion.path d="M16 18a8 8 0 1 1 16 0v6l4 4H12l4-4v-6z" stroke="#4ad888" strokeWidth="2" fill="none"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1 }} />
                <motion.path d="M20 32a4 4 0 0 0 8 0" stroke="#4ad888" strokeWidth="2" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }} />
                <motion.circle cx="36" cy="12" r="5" fill="#4ad888"
                    initial={{ scale: 0 }} animate={isInView ? { scale: [0, 1.3, 1] } : {}} transition={{ duration: 0.6, delay: 1 }} />
                <motion.text x="36" y="15" textAnchor="middle" fill="black" fontSize="8" fontWeight="700"
                    initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.3 }}>!</motion.text>
            </svg>
        ),
        smsCampaigns: (
            <svg {...iconProps}>
                {/* Envelope body */}
                <motion.rect x="6" y="14" width="36" height="24" rx="3" stroke="#4ad888" strokeWidth="2" fill="none"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1 }} />
                {/* Envelope flap */}
                <motion.path d="M6 14l18 12 18-12" stroke="#4ad888" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.8, delay: 0.5 }} />
                {/* Signal / send lines */}
                <motion.path d="M38 10h4" stroke="#4ad888" strokeWidth="2" strokeLinecap="round"
                    initial={{ opacity: 0, x: -4 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 1 }} />
                <motion.path d="M36 6h6" stroke="rgba(74,216,136,0.6)" strokeWidth="2" strokeLinecap="round"
                    initial={{ opacity: 0, x: -4 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 1.2 }} />
                <motion.path d="M40 14h2" stroke="rgba(74,216,136,0.4)" strokeWidth="2" strokeLinecap="round"
                    initial={{ opacity: 0, x: -4 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 1.4 }} />
            </svg>
        ),
    };

    return <div ref={ref}>{icons[type]}</div>;
}
