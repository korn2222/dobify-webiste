import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const alt = 'Dobify — AI Marketing & Automation Agency';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // Logo
    // Use Base64 data URL to ensure reliability across environments
    const logoData = await readFile(join(process.cwd(), 'public/logo.png'));
    const logoBase64 = logoData.toString('base64');
    const logoSrc = `data:image/png;base64,${logoBase64}`;

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={logoSrc}
                    alt="Dobify Logo"
                    width="400"
                    height="400"
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
