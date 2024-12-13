export const metadata = {
    title: 'Contact Us',
    description: 'Connect with Truxt.ai. Reach out for inquiries, demo requests, and support for our enterprise GenAI solutions and services.',
    alternates: {
        canonical: '/contact-us'
    },
};

import React from 'react';
import HeroHome from './hero';
import ContactForm from '@/components/contact-form';
import { Suspense } from 'react';
import LoadingPage from '@/components/loading';

function Page() {
    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <HeroHome />
            <Suspense fallback={<LoadingPage />}>
                <ContactForm />
            </Suspense>
        </div>
    );
}

export default Page;
