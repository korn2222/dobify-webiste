'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}

export function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const increment = target / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [isInView, target, duration]);

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

/* ---------- Animated Bar Chart ---------- */
export function AnimatedBarChart() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const bars = [
        { label: 'Dobify', value: 95, color: '#4ad888' },
        { label: 'Industry', value: 28, color: 'rgba(255,255,255,0.15)' },
    ];

    return (
        <div ref={ref} style={{ width: '100%', padding: '1.5rem 0' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end', height: '200px', justifyContent: 'center' }}>
                {bars.map((bar, i) => (
                    <div key={bar.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: bar.color === '#4ad888' ? '#4ad888' : 'rgba(255,255,255,0.5)' }}>
                            {isInView ? `${bar.value}%` : '0%'}
                        </span>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={isInView ? { height: bar.value * 1.6 } : {}}
                            transition={{ duration: 1.2, delay: i * 0.3, ease: [0.4, 0, 0.2, 1] }}
                            style={{
                                width: '60px',
                                borderRadius: '8px 8px 4px 4px',
                                background: bar.color === '#4ad888'
                                    ? 'linear-gradient(180deg, #4ad888 0%, rgba(74,216,136,0.3) 100%)'
                                    : bar.color,
                            }}
                        />
                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{bar.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------- Animated Line Chart ---------- */
export function AnimatedLineChart() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const points = [
        { x: 0, y: 85 },
        { x: 20, y: 70 },
        { x: 40, y: 55 },
        { x: 60, y: 35 },
        { x: 80, y: 20 },
        { x: 100, y: 5 },
    ];

    const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x * 2.4 + 20} ${p.y * 1.8 + 10}`).join(' ');
    const areaD = pathD + ` L ${points[points.length - 1].x * 2.4 + 20} 170 L 20 170 Z`;

    return (
        <div ref={ref} style={{ width: '100%', padding: '1rem 0' }}>
            <svg width="100%" height="180" viewBox="0 0 280 180" fill="none">
                {/* Grid lines */}
                {[40, 80, 120, 160].map(y => (
                    <line key={y} x1="20" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                ))}

                {/* Area fill */}
                <motion.path
                    d={areaD}
                    fill="url(#lineGradient)"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Line */}
                <motion.path
                    d={pathD}
                    stroke="#4ad888"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                />

                {/* Dots */}
                {points.map((p, i) => (
                    <motion.circle
                        key={i}
                        cx={p.x * 2.4 + 20}
                        cy={p.y * 1.8 + 10}
                        r="4"
                        fill="#4ad888"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.2 }}
                    />
                ))}

                {/* Month labels */}
                {['M1', 'M2', 'M3', 'M4', 'M5', 'M6'].map((label, i) => (
                    <text key={label} x={i * 48 + 20} y="195" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">{label}</text>
                ))}

                <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(74,216,136,0.2)" />
                        <stop offset="100%" stopColor="rgba(74,216,136,0)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

/* ---------- Animated Donut Chart ---------- */
export function AnimatedDonutChart() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const segments = [
        { label: 'Meta Ads', value: 40, color: '#4ad888' },
        { label: 'Google', value: 30, color: '#35b06d' },
        { label: 'TikTok', value: 20, color: '#2a8a56' },
        { label: 'Organic', value: 10, color: 'rgba(255,255,255,0.15)' },
    ];

    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    let cumulativeOffset = 0;

    return (
        <div ref={ref} style={{ width: '100%', padding: '1rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <svg width="160" height="160" viewBox="0 0 160 160">
                {segments.map((seg, i) => {
                    const dashLength = (seg.value / 100) * circumference;
                    const offset = cumulativeOffset;
                    cumulativeOffset += dashLength;

                    return (
                        <motion.circle
                            key={seg.label}
                            cx="80"
                            cy="80"
                            r={radius}
                            fill="none"
                            stroke={seg.color}
                            strokeWidth="16"
                            strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                            strokeDashoffset={-offset}
                            strokeLinecap="round"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            style={{ transform: 'rotate(-90deg)', transformOrigin: '80px 80px' }}
                        />
                    );
                })}
            </svg>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                {segments.map(seg => (
                    <div key={seg.label} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: seg.color }} />
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{seg.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
