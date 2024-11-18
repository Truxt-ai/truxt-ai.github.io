export const metadata = {
    title: 'DevOpsGPT',
    description: 'Join Truxt DevOpsGPT for AI-driven automation and troubleshooting in DevOps workflows. Optimize monitoring, reduce downtime, and resolve incidents faster with seamless integration into tools like Kubernetes, ArgoCD, and Jenkins. Get early access by joining the waitlist today.'
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
