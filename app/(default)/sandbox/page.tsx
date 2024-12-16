export const metadata = {
    title: 'Sandbox',
    description: 'Truxt.ai Sandbox ensures secure GenAI testing with isolated environments for data processing, vectorization, and model optimization.',
    alternates: {
        canonical: '/sandbox'
    },
};

import React from 'react';
import Hero from './hero';
import IngestData from '@/components/ingest-content/ingest-data';
import { Suspense } from 'react';
import LoadingPage from '@/components/loading';

function Page() {
    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <Hero />
            <Suspense fallback={<LoadingPage />}>
                <IngestData />
            </Suspense>
        </div>
    );
}

export default Page;
