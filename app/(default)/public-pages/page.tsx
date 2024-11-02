import Hero from './hero';
export const metadata = {
    title: 'Public Pages - Truxt',
    description: 'Page description'
};
import Image from 'next/image';
import FeaturesPlanet from '@/components/features-planet';
import Cta from '@/components/cta';
import img from '@/public/images/public-pages-ui.png';

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}
import { MessageSquare, Database, Globe, Search, Zap, Link, LucideIcon } from 'lucide-react'

const featureData: Feature[] = [
    {
        title: 'Internal Chat Query',
        description: 'Securely query your organization\'s internal data through an intuitive chat interface. Access confidential information, reports, and analytics with natural language queries.',
        icon: Database
    },
    {
        title: 'Web Chat Query',
        description: 'Explore the vast expanse of web information through our AI-powered chat. Get real-time answers, summaries, and insights from across the internet.',
        icon: Globe
    },
    {
        title: 'Combined Chat Query',
        description: 'Experience the best of both worlds with our combined chat query. Seamlessly access internal data and web information in a single, powerful interface.',
        icon: MessageSquare
    },
    {
        title: 'Intelligent Search',
        description: 'Utilize advanced AI algorithms to perform deep searches across internal and external data sources. Uncover hidden insights and connections with ease.',
        icon: Search
    },
    {
        title: 'Real-time Analysis',
        description: 'Get instant analysis and visualizations of your query results. Our AI processes complex data in real-time, providing you with actionable insights on the fly.',
        icon: Zap
    },
    {
        title: 'API Integration',
        description: 'Seamlessly integrate our chat query capabilities into your existing applications. Leverage our powerful AI through easy-to-use APIs for enhanced functionality.',
        icon: Link
    }
];

export default function Apps() {
    return (
        <div className=''>
            <Hero />
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='md:py-10'>
                    <Image src={img} alt="UI" width={500} height={500} />
                </div>
            </div>
            <FeaturesPlanet title={'Features and Applications'} content={featureData} />
            <div className='demo w-10/12 m-auto my-20 rounded-xl flex justify-center items-center'>
                <video className='rounded-xl w-10/12' src='/videos/demo.mp4' autoPlay muted loop crossOrigin='anonymous'></video>
            </div>
            <Cta />
        </div>
    );
}
