export const metadata = {
    title: 'Contact Us',
    description: 'Contact Truxt.ai to connect with our team for inquiries about our services. Fill out the contact form, explore our locations, or reach us at hello@truxt.ai. Stay connected through LinkedIn, Twitter, and YouTube for updates and insights.',
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
        <div>
            <HeroHome />
            <Suspense fallback={<LoadingPage />}>
                <ContactForm />
            </Suspense>
        </div>
    );
}

export default Page;
