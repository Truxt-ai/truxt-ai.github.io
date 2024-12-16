'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
// import Widget from '@/components/widget/widget';
// import LoadingPage from '@/components/loading';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic'
        });
    });

    return (
        <div className='bg-gradient-to-b from-gray-100 to-white'>
            <Header />
            <main className='grow'>{children}</main>
            {/* <Suspense fallback={<LoadingPage />}>
                <Widget />
            </Suspense> */}
            <Footer border={true} />
        </div>
    );
}
