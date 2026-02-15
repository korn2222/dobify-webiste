'use client';

// Global 404 handling - used when the [locale] layout fails (e.g. invalid locale like /favicon.ico)
export default function GlobalNotFound() {
    return (
        <html lang="en">
            <body style={{ margin: 0, padding: 0, background: '#000', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    textAlign: 'center'
                }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>404</h1>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '2rem', color: 'rgba(255,255,255,0.7)' }}>Page Not Found</h2>
                    <a
                        href="/en"
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: '#4ad888',
                            color: '#000',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '1rem'
                        }}
                    >
                        Go Home
                    </a>
                </div>
            </body>
        </html>
    );
}
