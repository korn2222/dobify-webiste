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
    const logoData = await readFile(join(process.cwd(), 'public/logo.png'));

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
                    src={logoData.buffer as any}
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
