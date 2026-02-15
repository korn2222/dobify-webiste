import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getBlogPosts, getBlogPost } from '@/lib/content';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
    const locales = ['en', 'pl'];
    const params: { locale: string; slug: string }[] = [];

    for (const locale of locales) {
        const posts = getBlogPosts(locale);
        for (const post of posts) {
            params.push({ locale, slug: post.slug });
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
    const post = getBlogPost(slug, locale);

    if (!post) return {};

    return {
        title: `${post.title} — Dobify`,
        description: post.description,
        alternates: {
            canonical: `/${locale}/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const post = getBlogPost(slug, locale);
    if (!post) notFound();

    const t = await getTranslations({ locale, namespace: 'blog' });

    // PLACEHOLDER: Replace with real MDX content rendering.
    // WHY: Rich blog content drives organic traffic (30-40% of B2B website traffic).
    const sampleContent = locale === 'en'
        ? `<p>In the competitive landscape of modern sales, speed isn't just an advantage—it's the difference between winning and losing deals. Our data across hundreds of clients reveals a startling truth: leads contacted within 60 seconds convert at <strong>391% higher rates</strong> than those contacted after 5 minutes.</p>
       <h2>The Data Behind Speed to Lead</h2>
       <p>When a potential customer fills out a form or clicks an ad, they're at peak interest. Every second that passes, their attention shifts. By the time most sales teams respond (averaging 47 hours), the lead has likely moved on to a competitor.</p>
       <h2>How AI Changes Everything</h2>
       <p>This is where AI-powered automation transforms the game. Instead of relying on human SDRs to check notifications, qualify leads, and make calls, an AI system can:</p>
       <ul>
         <li>Instantly capture and qualify incoming leads</li>
         <li>Make a natural-sounding call within 5 seconds</li>
         <li>Book directly into your sales team's calendar</li>
         <li>Follow up with non-answerers on an optimal schedule</li>
       </ul>
       <h2>Real Results</h2>
       <p>Our clients consistently see 3-5x improvements in their booked call rates after implementing speed-to-lead automation. The ROI is undeniable.</p>`
        : `<p>W konkurencyjnym świecie nowoczesnej sprzedaży szybkość to nie tylko przewaga—to różnica między wygrywaniem a traceniem transakcji. Nasze dane z setek klientów ujawniają zaskakującą prawdę: leady kontaktowane w ciągu 60 sekund konwertują o <strong>391% wyżej</strong> niż te kontaktowane po 5 minutach.</p>
       <h2>Dane za Speed to Lead</h2>
       <p>Kiedy potencjalny klient wypełnia formularz lub klika reklamę, jest na szczycie zainteresowania. Każda sekunda, która mija, przesuwa jego uwagę. Zanim większość zespołów sprzedażowych odpowiada (średnio 47 godzin), lead prawdopodobnie przeszedł do konkurencji.</p>
       <h2>Jak AI zmienia wszystko</h2>
       <p>Tutaj automatyzacja oparta na AI zmienia zasady gry. Zamiast polegać na ludzkich SDR-ach, system AI może:</p>
       <ul>
         <li>Natychmiast przechwycić i zakwalifikować przychodzące leady</li>
         <li>Wykonać naturalnie brzmiący telefon w ciągu 5 sekund</li>
         <li>Zarezerwować termin bezpośrednio w kalendarzu zespołu sprzedażowego</li>
         <li>Śledzić nieodebranych zgodnie z optymalnym harmonogramem</li>
       </ul>
       <h2>Realne wyniki</h2>
       <p>Nasi klienci konsekwentnie obserwują 3-5x poprawę wskaźnika umówionych rozmów po wdrożeniu automatyzacji speed-to-lead.</p>`;

    return (
        <BlogPostClient
            post={post}
            content={sampleContent}
            backLabel={t('backToBlog')}
        />
    );
}
