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
        <>
            <HeroHome />
            <Solutions />
        </>
    );
}

export default Page;
