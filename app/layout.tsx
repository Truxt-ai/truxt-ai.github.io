import './css/style.css';

import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import CookieBanner from '@/components/cookies';
import Head from 'next/head';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

export const metadata = {
    title: {
        default: 'Truxt AI',
        template: '%s | Truxt AI'
    },
    description: 'Truxt offers organizations an end-to-end generative AI solution enabled by our platform. We provide comprehensive generative AI products for our clients, allowing them to enable customer support and CX with generative AI using our products. We are an ecosystem of knowledge hubs that seamlessly integrates with your infrastructure in a single step."',
    twitter: {
        card: 'summary_large_image'
    },
    icons: {
        icon: 'https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp'
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='scroll-smooth'>
            <Head>
                <meta property='og:image' content='app/opengraph-image.png' />
            </Head>
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
