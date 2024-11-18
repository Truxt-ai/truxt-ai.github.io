export const metadata = {
    title: '360 GEN AI Enablement',
    description: 'Page description'
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
