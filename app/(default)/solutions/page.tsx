import React from 'react';
import HeroHome from './hero';
import Solutions from '@/components/solution';
export const metadata = {
    title: 'Solutions',
    description: "Discover Truxt's innovative solutions that enable AI-driven transformation across various industries. Our offerings include 360° GenAI enablement for organizations, superior customer support through AI automation, enhanced CX and sales team performance, and DevOps technical support. Truxt's platform provides robust, scalable, and secure solutions, empowering teams with personalized, timely responses, smarter workflows, and seamless integration, all aimed at improving efficiency, security, and customer satisfaction.",
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
