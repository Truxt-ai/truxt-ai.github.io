export const metadata = {
    title: '360 GEN AI Enablement',
    description: 'Explore Truxt GenAI and DevOpsGPT, revolutionary AI solutions for enterprises. Enhance operations with knowledge hubs, secure data privacy, automated support, scalable integrations, and real-time insights. Schedule a personalized demo today!'
};

import TruxtGenAIEnablementUI from '@/components/truxt-gen-ai';
import HeroHome from './hero';

export default function Page() {
    return (
        <>
            <HeroHome />
            <TruxtGenAIEnablementUI/>
        </>
    );
}
