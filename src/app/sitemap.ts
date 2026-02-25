import { MetadataRoute } from 'next';
import { getBlogPosts, getCaseStudies } from '@/lib/content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dobify.org';

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['en', 'pl'];
    const entries: MetadataRoute.Sitemap = [];

    // Static pages with priority and change frequency
    for (const locale of locales) {
        entries.push(
            {
                url: `${BASE_URL}/${locale}`,
                lastModified: '2026-02-25',
                changeFrequency: 'weekly',
                priority: 1.0,
            },
            {
                url: `${BASE_URL}/${locale}/blog`,
                lastModified: '2026-02-25',
                changeFrequency: 'weekly',
                priority: 0.8,
            },
            {
                url: `${BASE_URL}/${locale}/case-studies`,
                lastModified: '2026-02-25',
                changeFrequency: 'weekly',
                priority: 0.8,
            },
            {
                url: `${BASE_URL}/${locale}/free-audit`,
                lastModified: '2026-02-25',
                changeFrequency: 'monthly',
                priority: 0.9,
            },
            {
                url: `${BASE_URL}/${locale}/privacy-policy`,
                lastModified: '2026-02-25',
                changeFrequency: 'yearly',
                priority: 0.3,
            },
            {
                url: `${BASE_URL}/${locale}/terms-of-use`,
                lastModified: '2026-02-25',
                changeFrequency: 'yearly',
                priority: 0.3,
            },
        );

        // Blog posts
        const posts = getBlogPosts(locale);
        for (const post of posts) {
            entries.push({
                url: `${BASE_URL}/${locale}/blog/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        }

        // Case studies
        const studies = getCaseStudies(locale);
        for (const study of studies) {
            entries.push({
                url: `${BASE_URL}/${locale}/case-studies/${study.slug}`,
                lastModified: '2026-02-25',
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        }
    }

    return entries;
}
