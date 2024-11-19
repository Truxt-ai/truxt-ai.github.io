import './css/style.css';

import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import CookieBanner from '@/components/cookies';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

import { Metadata } from 'next';

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
    icons:{
        icon:'/images/favicon.ico',
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}>
                <GoogleTagManager gtmId='GTM-536FWR9L' />
                <div className='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'>
                    <CookieBanner />
                    {children}
                </div>
            </body>
        </html>
    );
}
