export const metadata = {
    title: 'Products',
    description: 'Explore innovative solutions with DevOpsGPT and Truxt Gen AI. DevOpsGPT provides instant AI-powered DevOps troubleshooting, while Truxt Gen AI Platform enhances self-service support with secure LLM, automation, and real-time insights for improved efficiency',
    alternates: {
        canonical: '/products'
    }
};

import React from 'react';
import Hero from './hero';
import ProductsPage from '@/components/products';

function Page() {
    return (
        <div>
            <Hero />
            <ProductsPage />
        </div>
    );
}

export default Page;
