export const metadata = {
  title: 'Products | Truxt',
  description: 'Page description'
};

import React from 'react'
import Hero from './hero';
import ProductsPage from '@/components/products';

function Page() {
  return (
    <div>
        <Hero/>
        <ProductsPage/>
    </div>
)
}

export default Page;