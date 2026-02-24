import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getCaseStudies, getCaseStudy } from '@/lib/content';
import { notFound } from 'next/navigation';
import CaseStudyClient from './CaseStudyClient';

export async function generateStaticParams() {
    const locales = ['en', 'pl'];
    const params: { locale: string; slug: string }[] = [];

    for (const locale of locales) {
        const studies = getCaseStudies(locale);
        for (const study of studies) {
            params.push({ locale, slug: study.slug });
        }
    }

    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const study = getCaseStudy(slug, locale);

    if (!study) return {};

    return {
        title: `${study.title} — Dobify`,
        description: study.description,
        alternates: {
            canonical: `/${locale}/case-studies/${slug}`,
            languages: {
                en: `/en/case-studies/${slug}`,
                pl: `/pl/case-studies/${slug}`,
            },
        },
        openGraph: {
            title: study.title,
            description: study.description,
            type: 'article',
        },
    };
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const study = getCaseStudy(slug, locale);
    if (!study) notFound();

    const t = await getTranslations({ locale, namespace: 'caseStudies' });

    // PLACEHOLDER: Replace with real case study content.
    // WHY: Detailed case studies are the #1 conversion driver for B2B services.
    const sampleContent = locale === 'en'
        ? `<h2>The Challenge</h2>
       <p>${study.client} was struggling with lead response times averaging 4+ hours. Their sales team was overwhelmed, manually checking forms and making calls. By the time they reached out, most leads had already gone cold or contacted a competitor.</p>
       <h2>Our Solution</h2>
       <p>We implemented Dobify's full automation stack—AI Caller for instant lead contact, automated dashboards for real-time visibility, and a CRM integration to track every touchpoint.</p>
       <h2>The Implementation</h2>
       <p>Within 72 hours of onboarding, the entire system was live. Our AI caller was handling initial outreach, qualifying leads based on custom criteria, and booking calls directly into the sales team's calendars.</p>
       <h2>The Results</h2>
       <p>Within the first 6 months, ${study.client} saw transformative results across every metric that mattered—revenue, conversion rates, and team efficiency all improved dramatically.</p>`
        : `<h2>Wyzwanie</h2>
       <p>${study.client} borykał się z czasem odpowiedzi na leady wynoszącym średnio ponad 4 godziny. Ich zespół sprzedażowy był przytłoczony, ręcznie sprawdzając formularze i wykonując połączenia.</p>
       <h2>Nasze rozwiązanie</h2>
       <p>Wdrożyliśmy pełen stos automatyzacji Dobify — AI Caller do natychmiastowego kontaktu z leadami, automatyczne dashboardy do widoczności w czasie rzeczywistym oraz integrację CRM do śledzenia każdego punktu kontaktu.</p>
       <h2>Wdrożenie</h2>
       <p>W ciągu 72 godzin od onboardingu cały system był aktywny. Nasz AI caller obsługiwał pierwszy kontakt, kwalifikował leady i umawiał spotkania bezpośrednio w kalendarzach zespołu sprzedażowego.</p>
       <h2>Wyniki</h2>
       <p>W ciągu pierwszych 6 miesięcy ${study.client} odnotował transformacyjne wyniki we wszystkich kluczowych metrykach — przychody, wskaźniki konwersji i efektywność zespołu znacząco się poprawiły.</p>`;

    return (
        <CaseStudyClient
            study={study}
            content={sampleContent}
            backLabel={t('backToList')}
            resultsLabel={t('results')}
            industryLabel={t('industry')}
        />
    );
}
