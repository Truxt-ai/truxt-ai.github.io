export const metadata = {
    title: 'Products',
    description: "Explore Truxt.ai's GenAI-powered products for seamless enterprise integration, superior support automation, and robust knowledge base creation",
    alternates: {
        canonical: '/products'
    }
};

import React from 'react';
import Hero from './hero';
import ProductsPage from '@/components/products';

function Page() {
    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <Hero />
            <ProductsPage />
        </div>
    );
}

export default Page;
