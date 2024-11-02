export const metadata = {
    title: 'Team - Truxt',
    description: 'Page description'
};

import Team from '@/components/team';
import Hero from './hero';

export default function Faq() {
    return (
        <>
            <Hero />
            <Team />
        </>
    );
}
