import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getBlogPosts } from '@/lib/content';
import BlogListClient from './BlogListClient';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        metadataBase: new URL('https://dobify.org'),
        title: t('blogTitle'),
        description: t('blogDescription'),
        alternates: {
            canonical: `/${locale}/blog`,
            languages: { en: '/en/blog', pl: '/pl/blog' },
        },
    };
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const posts = getBlogPosts(locale);

    return <BlogListClient posts={posts} />;
}
