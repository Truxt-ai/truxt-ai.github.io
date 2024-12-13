export const metadata = {
    title: 'DevOpsGPT',
    description: "Optimize DevOps with Truxt.ai's DevOpsGPT. AI-powered automation ensures fast incident resolution and seamless tool integration",
    alternates: {
        canonical: '/devops-gpt'
    },
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
