export const metadata = {
    title: 'Contact Us | Truxt',
    description: 'Page description'
};

import React from 'react';
import HeroHome from './hero';
import ContactForm from '@/components/contact-form';
import { Suspense } from 'react';
import LoadingPage from '@/components/loading';

function Page() {
    return (
        <div>
            <HeroHome />
            <Suspense fallback={<LoadingPage />}>
                <ContactForm />
            </Suspense>
        </div>
    );
}

export default Page;
