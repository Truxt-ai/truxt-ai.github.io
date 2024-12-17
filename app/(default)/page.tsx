export const metadata = {
    title: { default: '360° GenAI Enablement' },
    description: 'Truxt.ai: Enterprise GenAI solutions for scalable customer support and seamless AI integration, ensuring security, accuracy, and efficiency.'
};

import Hero from '@/components/hero-home';
import BusinessCategories from '@/components/business-categories';
import Offerings from '@/components/offerings';
import WhyTruxt from '@/components/why-truxt';
import Cta from '@/components/cta';
import Calendar from '@/components/calendar';

export default function Home() {
    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 '>
            <Hero />
            <BusinessCategories />
            <Offerings />
            <WhyTruxt />
            {/* <Cta/> */}
            <Calendar/>
        </div>
    );
}
