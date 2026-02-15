import { MetadataRoute } from 'next';
import { getBlogPosts, getCaseStudies } from '@/lib/content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dobify.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['en', 'pl'];
    const entries: MetadataRoute.Sitemap = [];

    // Static pages
    for (const locale of locales) {
        entries.push(
            {
                url: `${BASE_URL}/${locale}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 1,
            },
            {
                url: `${BASE_URL}/${locale}/blog`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.8,
            },
            {
                url: `${BASE_URL}/${locale}/case-studies`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            },
        );

        // Blog posts
        const posts = getBlogPosts(locale);
        for (const post of posts) {
            entries.push({
                url: `${BASE_URL}/${locale}/blog/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        }

        // Case studies
        const studies = getCaseStudies(locale);
        for (const study of studies) {
            entries.push({
                url: `${BASE_URL}/${locale}/case-studies/${study.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        }
    }

    return entries;
}
