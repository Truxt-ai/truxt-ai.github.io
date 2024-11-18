export const metadata = {
    title: 'Streamline your onboarding with our intuitive two-step form process. Verify your email, input business details, and effortlessly set up your instance. Powered by dynamic validations, OTP verification, and responsive design, our platform ensures a seamless experience. Get started now!',
    description: 'Page description'
};

import React from 'react';
import Hero from './hero';
import IngestData from '@/components/ingest-content/ingest-data';
import { Suspense } from 'react';
import LoadingPage from '@/components/loading';

function Page() {
    return (
        <div>
            <Hero />
            <Suspense fallback={<LoadingPage />}>
                <IngestData />
            </Suspense>
        </div>
    );
}

export default Page;
