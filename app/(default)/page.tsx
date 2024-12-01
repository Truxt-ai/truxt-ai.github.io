export const metadata = {
    title: { default: '360 GEN AI Enablement' },
    description: 'Truxt.ai: Enterprise GenAI solutions for scalable customer support and seamless AI integration, ensuring security, accuracy, and efficiency.'
};

import Hero from '@/components/hero-home';
import BusinessCategories from '@/components/business-categories';
import Offerings from '@/components/offerings';
import WhyTruxt from '@/components/why-truxt';
import Cta from '@/components/cta';

export default function Home() {
    return (
        <>
            <Hero />
            <BusinessCategories />
            <Offerings />
            <WhyTruxt />
            <Cta/>
        </>
    );
}
