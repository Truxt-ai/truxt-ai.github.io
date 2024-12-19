import './css/style.css';

import { Inter } from 'next/font/google';
import CookieBanner from '@/components/cookies';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

import { Metadata } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
    title: {
        default: 'Truxt AI',
        template: '%s | Truxt AI'
    },
    description: 'Truxt offers organizations an end-to-end generative AI solution enabled by our platform. We provide comprehensive generative AI products for our clients, allowing them to enable customer support and CX with generative AI using our products. We are an ecosystem of knowledge hubs that seamlessly integrates with your infrastructure in a single step.',
    metadataBase: new URL('https://www.truxt.ai'),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: 'Truxt AI',
        description: 'Truxt offers organizations an end-to-end generative AI solution enabled by our platform. We provide comprehensive generative AI products for our clients, allowing them to enable customer support and CX with generative AI using our products. We are an ecosystem of knowledge hubs that seamlessly integrates with your infrastructure in a single step.',
        url: 'https://truxt.xyz',
        siteName: 'Truxt AI',
        images: [
            {
                url: '/images/opengraph-image.png',
                width: 1200,
                height: 630
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Truxt AI',
        description: 'Truxt offers organizations an end-to-end generative AI solution enabled by our platform.',
        images: ['/images/opengraph-image.png']
    },
    icons: {
        icon: [
            { url: '/icons/favicon.ico', sizes: '32x32 16x16', type: 'image/x-icon' },
            { url: '/icons/favicon.ico', sizes: '16x16', type: 'image/png' },
            { url: '/icons/favicon.ico', sizes: '32x32', type: 'image/png' },
            { url: '/icons/favicon.ico', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' }
        ],
        apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
        other: [
            { rel: '/icons/mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
            { rel: '/icons/msapplication-TileImage', url: '/mstile-144x144.png' }
        ]
    },
    manifest: '/site.webmanifest'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}>
                <GoogleAnalytics gaId='G-QGPK6CL4RC' />
                <GoogleTagManager gtmId='GTM-536FWR9L' />
                <div className='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'>
                    <CookieBanner />
                    {children}
                </div>
            </body>
        </html>
    );
}
