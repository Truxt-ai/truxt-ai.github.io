export const metadata = {
    title: 'DevOpsGPT - Truxt',
    description: 'Page description'
};

import HeroHome from './hero';
import DevOpsUI from '@/components/devops-ui';

export default function Page() {
    return (
        <>
            <HeroHome />
            <DevOpsUI />
        </>
    );
}
