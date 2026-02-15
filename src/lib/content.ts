export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    tags: string[];
    locale: string;
}

export interface CaseStudy {
    slug: string;
    title: string;
    description: string;
    client: string;
    industry: string;
    results: string[];
    locale: string;
}

// PLACEHOLDER: Replace with real blog posts or MDX content loader.
// WHY: Blog content drives organic traffic and establishes thought leadership.
export function getBlogPosts(locale: string): BlogPost[] {
    const posts: Record<string, BlogPost[]> = {
        en: [
            {
                slug: 'speed-to-lead-why-first-60-seconds-matter',
                title: 'Speed to Lead: Why the First 60 Seconds Matter',
                description: 'Research shows that responding to leads within 60 seconds increases conversion by 391%. Here\'s how AI automation makes it possible.',
                date: '2026-02-10',
                readTime: '5 min',
                tags: ['AI', 'Speed to Lead', 'Conversion'],
                locale: 'en',
            },
            {
                slug: 'ai-caller-vs-traditional-sdr-comparison',
                title: 'AI Caller vs Traditional SDR: A Data-Driven Comparison',
                description: 'We compared 10,000 calls made by AI vs human SDRs. The results might surprise you.',
                date: '2026-02-05',
                readTime: '7 min',
                tags: ['AI Caller', 'Sales', 'Data'],
                locale: 'en',
            },
            {
                slug: 'automated-dashboards-save-20-hours-weekly',
                title: 'How Automated Dashboards Save Teams 20+ Hours Weekly',
                description: 'Manual reporting is dead. Here\'s how real-time dashboards transform decision-making and free up your team.',
                date: '2026-01-28',
                readTime: '4 min',
                tags: ['Data Analysis', 'Automation', 'Productivity'],
                locale: 'en',
            },
        ],
        pl: [
            {
                slug: 'szybkosc-do-leada-dlaczego-pierwsze-60-sekund-ma-znaczenie',
                title: 'Szybkość do leada: dlaczego pierwsze 60 sekund ma znaczenie',
                description: 'Badania pokazują, że odpowiedź na leada w ciągu 60 sekund zwiększa konwersję o 391%. Oto jak automatyzacja AI to umożliwia.',
                date: '2026-02-10',
                readTime: '5 min',
                tags: ['AI', 'Speed to Lead', 'Konwersja'],
                locale: 'pl',
            },
            {
                slug: 'ai-caller-vs-tradycyjny-sdr-porownanie',
                title: 'AI Caller vs tradycyjny SDR: porównanie oparte na danych',
                description: 'Porównaliśmy 10 000 rozmów AI vs ludzkich SDR. Wyniki mogą Cię zaskoczyć.',
                date: '2026-02-05',
                readTime: '7 min',
                tags: ['AI Caller', 'Sprzedaż', 'Dane'],
                locale: 'pl',
            },
            {
                slug: 'automatyczne-dashboardy-oszczedzaja-20-godzin-tygodniowo',
                title: 'Jak automatyczne dashboardy oszczędzają zespołom 20+ godzin tygodniowo',
                description: 'Ręczne raportowanie odchodzi do przeszłości. Oto jak dashboardy w czasie rzeczywistym transformują podejmowanie decyzji.',
                date: '2026-01-28',
                readTime: '4 min',
                tags: ['Analiza Danych', 'Automatyzacja', 'Produktywność'],
                locale: 'pl',
            },
        ],
    };

    return posts[locale] || posts.en;
}

// PLACEHOLDER: Replace with real case studies.
// WHY: Case studies are the #1 conversion driver for B2B services.
export function getCaseStudies(locale: string): CaseStudy[] {
    const studies: Record<string, CaseStudy[]> = {
        en: [
            {
                slug: 'techscale-solutions-280-revenue-growth',
                title: 'How TechScale Solutions Grew Revenue by 280%',
                description: 'A SaaS startup that went from missing leads to booking calls in under 5 seconds.',
                client: 'TechScale Solutions',
                industry: 'SaaS / Technology',
                results: ['280% revenue growth', '5s average lead response', '340% more booked calls'],
                locale: 'en',
            },
            {
                slug: 'propflow-agency-tripled-conversion',
                title: 'PropFlow Agency Tripled Their Conversion Rate',
                description: 'A real estate agency that automated their entire lead qualification process.',
                client: 'PropFlow Agency',
                industry: 'Real Estate',
                results: ['3x conversion rate', '1,200+ leads/month', '60% reduction in cost per lead'],
                locale: 'en',
            },
        ],
        pl: [
            {
                slug: 'techscale-solutions-wzrost-przychodow-280',
                title: 'Jak TechScale Solutions zwiększyło przychody o 280%',
                description: 'Startup SaaS, który przeszedł od tracenia leadów do umawiania rozmów w mniej niż 5 sekund.',
                client: 'TechScale Solutions',
                industry: 'SaaS / Technologia',
                results: ['280% wzrost przychodów', '5s średni czas odpowiedzi', '340% więcej umówionych rozmów'],
                locale: 'pl',
            },
            {
                slug: 'propflow-agency-potrojenie-konwersji',
                title: 'PropFlow Agency potroiło swój wskaźnik konwersji',
                description: 'Agencja nieruchomości, która zautomatyzowała cały proces kwalifikacji leadów.',
                client: 'PropFlow Agency',
                industry: 'Nieruchomości',
                results: ['3x wskaźnik konwersji', '1200+ leadów/miesiąc', '60% redukcja kosztu leada'],
                locale: 'pl',
            },
        ],
    };

    return studies[locale] || studies.en;
}

export function getBlogPost(slug: string, locale: string): BlogPost | undefined {
    return getBlogPosts(locale).find(post => post.slug === slug);
}

export function getCaseStudy(slug: string, locale: string): CaseStudy | undefined {
    return getCaseStudies(locale).find(study => study.slug === slug);
}
