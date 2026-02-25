import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const url = 'https://dobify.org';

    // Validate locale
    if (!routing.locales.includes(locale as any)) {
        return {};
    }

    try {
        const messages = (await import(`../../../messages/${locale}.json`)).default;

        const keywords = locale === 'pl'
            ? ['agencja AI', 'automatyzacje AI', 'automatyzacja marketingu', 'generowanie leadów', 'AI marketing', 'Dobify']
            : ['AI Marketing', 'Automation Agency', 'Lead Generation', 'Marketing Automation', 'AI Agency', 'Dobify'];

        return {
            metadataBase: new URL(url),
            keywords,
            authors: [{ name: 'Korneliusz Dobek' }, { name: 'Dobify', url: 'https://dobify.org' }],
            creator: 'Korneliusz Dobek',
            publisher: 'Dobify',
            title: messages.metadata.title,
            description: messages.metadata.description,
            alternates: {
                canonical: `/${locale}`,
                languages: {
                    en: '/en',
                    pl: '/pl',
                },
            },
            openGraph: {
                title: messages.metadata.title,
                description: messages.metadata.description,
                locale: locale,
                type: 'website',
                siteName: 'Dobify',
                images: [
                    {
                        url: '/opengraph-image',
                        width: 1200,
                        height: 630,
                        alt: messages.metadata.title,
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: messages.metadata.title,
                description: messages.metadata.description,
            },
            robots: {
                index: true,
                follow: true,
            },
            icons: {
                icon: '/icon.png',
                shortcut: '/icon.png',
                apple: '/icon.png',
            },
        };
    } catch (e) {
        return {};
    }
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html lang={locale} className="dark">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: 'Home',
                                    item: `https://dobify.org/${locale}`,
                                },
                            ],
                        }),
                    }}
                />
            </head>
            <body className="bg-bg text-text-primary font-sans">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html >
    );
}
