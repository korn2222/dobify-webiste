import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = (await import(`../../../messages/${locale}.json`)).default;

    return {
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
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html lang={locale} className="dark">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="bg-bg text-text-primary font-sans">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
