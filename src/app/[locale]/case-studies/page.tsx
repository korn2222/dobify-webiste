import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getCaseStudies } from '@/lib/content';
import CaseStudiesListClient from './CaseStudiesListClient';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('caseStudiesTitle'),
        description: t('caseStudiesDescription'),
        alternates: {
            canonical: `/${locale}/case-studies`,
            languages: { en: '/en/case-studies', pl: '/pl/case-studies' },
        },
    };
}

export default async function CaseStudiesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const studies = getCaseStudies(locale);

    return <CaseStudiesListClient studies={studies} />;
}
