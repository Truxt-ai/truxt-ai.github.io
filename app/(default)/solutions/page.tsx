import React from 'react';
import HeroHome from './hero';
import Solutions from '@/components/solution';
export const metadata = {
    title: 'Solutions',
    description: "Discover Truxt.ai's GenAI solutions for enterprises, offering knowledge hubs, customer support automation, and DevOps integration for efficiency.",
    alternates: {
      canonical: '/solutions'
  },
};

function Page() {
    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <HeroHome />
            <Solutions />
        </div>
    );
}

export default Page;
