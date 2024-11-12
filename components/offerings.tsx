'use client';

import { ArrowRightLeft, Brain, BrainCog, Shield, Workflow, Infinity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Component() {
    const offerings = [
        {
            icon: <ArrowRightLeft className='h-8 w-8' color="#60a5fa" />,
            title: '360° GenAI Enterprise',
            features: [ "Build an Enterprise Knowledge Hub",
                "Enhanced Data Privacy and Security",
                "Internal and Third-Party Integrations",
                "Customized Solutions"]
        },
        {
            icon: <BrainCog className='h-8 w-8' color="#60a5fa" />,
            title: 'Truxt GenAI Platform',
            features:  ["Pre-trained GenAI model for higher accuracy",
            "Private data remains secure",
            "Scales seamlessly with large datasets",
            "Agentic AI & Multi-Modal capabilities"]
        },
        {
            icon: <Infinity className='h-8 w-8' color="#60a5fa" />,
            title: 'DevOpsGPT',
            features: [ "Instant DevOps troubleshooting",
                "Interactive resolutions beyond standard chat responses",
                "DevOps-trained, fine-tuned models",
                "Multi-Agent AI for org's specific environments"]
        }
    ];

    return (
        <section className='w-full bg-gradient-to-b from-gray-100 to-white border-t border-gray-200 py-16 px-4' data-aos='zoom-y-out' data-aos-delay={150}>
            <div className='container mx-auto max-w-7xl'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold tracking-tight mb-3'>OUR SOLUTIONS</h2>
                    <p className='text-lg text-muted-foreground'>Discover how Truxt can transform your organization's Knowledge management, Support for Customers and Internal teams.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {offerings.map((offering, index) => (
                        <Card key={index} className='flex flex-col h-full'>
                            <CardHeader className='space-y-1'>
                                <div className='flex items-center gap-4'>
                                    {offering.icon}
                                    <div className='space-y-1'>
                                        <CardTitle className='text-xl'>{offering.title}</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className='flex flex-col flex-grow'>
                                <ul className='space-y-2 mb-6 flex-grow'>
                                    {offering.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className='flex items-start gap-2 text-sm text-muted-foreground'>
                                            <svg className='h-5 w-5 shrink-0 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                            </svg>
                                            <span className='text-md'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link className='w-full bg-black text-center p-1 rounded-md py-2 bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]'  href={'/solutions'}>
                                    Learn More
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}