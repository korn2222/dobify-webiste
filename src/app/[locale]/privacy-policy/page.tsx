import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('privacyPolicyTitle'),
        description: t('privacyPolicyDescription'),
    };
}

export default function PrivacyPolicy({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#fff' }}>
                Polityka Prywatności
            </h1>

            <section style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
                    1. Informacje Ogólne
                </h2>
                <p>
                    Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z serwisu internetowego Dobify.
                </p>
            </section>

            <section style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
                    2. Administrator Danych
                </h2>
                <p>
                    Administratorem danych osobowych zawartych w serwisie jest:
                </p>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
                    <p style={{ fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>DOBIFY SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</p>
                    <p>Adres siedziby: UL. TWARDOWSKIEGO 19, 05-070 SULEJÓWEK</p>
                    <p>NIP: 8222420250</p>
                    <p>REGON: 543186808</p>
                    <p>KRS: 0001204127</p>
                </div>
            </section>

            <section style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
                    3. Cel Przetwarzania Danych
                </h2>
                <p>
                    Dane osobowe przetwarzane są na podstawie zgody wyrażanej przez Użytkownika oraz w przypadkach, w których przepisy prawa upoważniają Administratora do przetwarzania danych osobowych na podstawie przepisów prawa lub w celu realizacji zawartej pomiędzy stronami umowy.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    Dane przetwarzane są w celu:
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Umożliwienia korzystania z usług serwisu,</li>
                    <li>Kontaktu z Użytkownikiem (np. przez formularz kontaktowy, umówienie audytu),</li>
                    <li>Przesyłania informacji marketingowych (za zgodą Użytkownika),</li>
                    <li>Analizy statystycznej ruchu w serwisie.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
                    4. Prawa Użytkownika
                </h2>
                <p>
                    Każdej osobie, której dane dotyczą, przysługuje prawo do:
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Dostępu do swoich danych,</li>
                    <li>Sprostowania (poprawiania) swoich danych,</li>
                    <li>Usunięcia danych ("prawo do bycia zapomnianym"),</li>
                    <li>Ograniczenia przetwarzania,</li>
                    <li>Przenoszenia danych,</li>
                    <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                    W celu realizacji powyższych praw należy skontaktować się z Administratorem pod adresem email: kontakt@dobify.org
                </p>
            </section>

            <section style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
                    5. Pliki Cookies
                </h2>
                <p>
                    Serwis korzysta z plików cookies. Są to niewielkie pliki tekstowe wysyłane przez serwer www i przechowywane przez oprogramowanie komputera przeglądarki. Kiedy przeglądarka ponownie połączy się ze stroną, witryna rozpoznaje rodzaj urządzenia, z którego łączy się użytkownik. Parametry pozwalają na odczytanie informacji w nich zawartych jedynie serwerowi, który je utworzył.
                </p>
            </section>

            <section style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>
                    6. Kontakt
                </h2>
                <p>
                    W sprawach związanych z ochroną danych osobowych prosimy o kontakt drogą mailową na adres: <strong>kontakt@dobify.org</strong> lub pisemnie na adres siedziby Administratora.
                </p>
            </section>

            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
        </div>
    );
}
