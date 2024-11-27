export const metadata = {
    title: '360 GEN AI Enablement',
    description: 'Truxt GenAI Platform delivers scalable AI solutions with enterprise-grade integration, advanced analytics, and multi-agent technology for growth',
    alternates: {
        canonical: '/truxt-gen-ai'
    },
};

import TruxtGenAIEnablementUI from '@/components/truxt-gen-ai';
import HeroHome from './hero';

export default function Page() {
    return (
        <>
            <HeroHome />
            <TruxtGenAIEnablementUI />
        </>
    );
}
