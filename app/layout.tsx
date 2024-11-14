import './css/style.css';

import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

export const metadata = {
    title: 'Truxt',
    description: '',
    icons: {
        icon: 'https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp'
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}>
                <GoogleTagManager gtmId='GTM-536FWR9L' />
                <div className='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'>{children}</div>
            </body>
        </html>
    );
}
