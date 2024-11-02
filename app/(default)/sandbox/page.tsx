import Hero from './hero';
export const metadata = {
    title: 'Sandbox - Truxt',
    description: 'Page description'
};
import Image from 'next/image';
import FeaturesPlanet from '@/components/features-planet';
import { MessageSquare, Users, FolderOpen, Building, Sliders, Brain, LucideIcon } from 'lucide-react';
import Cta from '@/components/cta';
import img from '@/public/images/public-pages-ui.png';


interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

const featureData: Feature[] = [
    {
        title: 'Chat',
        description: 'Engage in real-time conversations with our advanced AI. Get instant responses, clarifications, and insights to streamline your workflow and boost productivity.',
        icon: MessageSquare
    },
    {
        title: 'User Management',
        description: 'Easily manage user accounts, permissions, and access levels. Ensure the right people have the right access to your AI-powered tools and data.',
        icon: Users
    },
    {
        title: 'File Manager',
        description: 'Seamlessly organize, store, and retrieve your documents and data. Our intuitive file management system integrates perfectly with our AI capabilities for efficient information handling.',
        icon: FolderOpen
    },
    {
        title: 'Enterprise Control',
        description: 'Take command of your AI deployment with robust enterprise-level controls. Set policies, monitor usage, and ensure compliance across your organization.',
        icon: Building
    },
    {
        title: 'Customize Features',
        description: 'Tailor our AI solution to your specific needs. Adjust settings, create custom workflows, and integrate with your existing tools for a personalized AI experience.',
        icon: Sliders
    },
    {
        title: 'Powerful Artificial Intelligence',
        description: 'Harness the power of cutting-edge AI technology. From natural language processing to complex problem-solving, our AI is equipped to handle your most challenging tasks.',
        icon: Brain
    }
];

export default function Apps() {
    return (
        <div className=''>
            <Hero />
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='md:py-10'>
                    <Image 
                        src={img} 
                        alt='Docs instance display' 
                        layout='responsive' 
                        width={400} 
                        height={250} 
                    />
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
