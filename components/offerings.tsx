'use client';

import { Database, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Component() {
    const offerings = [
        {
            icon: <Lock className='h-8 w-8 text-primary' />,
            title: 'End to End Gen AI Platform',
            description: '360° GenAI Enablement',
            features: ['Build a Robust Knowledge Hub', 'Enhanced Data Privacy and Security', 'Broader 3rd party, CRM, Ticketing Platform integration', 'Truxt GenAi Platform']
        },
        {
            icon: <Database className='h-8 w-8 text-primary' />,
            title: 'Truxt GenAI Platform',
            description: 'On-Premise GenAI Deployment available',
            features: ['Pretrained GenAi model for higher accuracy', 'Org Private data remains private', 'Scales seamlessly with large datasets as well', 'Multi-Modal Capabilities']
        },
        {
            icon: <Lock className='h-8 w-8 text-primary' />,
            title: 'DevOpsGPT',
            description: 'Create your own secure knowledge base and leverage our AI platform',
            features: ['Built for Open Source DevOps Technical Support', 'DevOps trained/fine-tuned models', 'Instant Technical Issue Resolution', 'Agentic AI Troubleshooting, for Your Orgs Environment']
        }
    ];

    return (
        <section className='w-full bg-gradient-to-b from-gray-100 to-white border-t border-gray-200 py-16 px-4'>
            <div className='container mx-auto max-w-7xl'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold tracking-tight mb-3'>OUR SOLUTIONS</h2>
                    <p className='text-lg text-muted-foreground'>Discover how Truxt can revolutionize your organization's Knowledge management, Technical & Customer Support.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {offerings.map((offering, index) => (
                        <Card key={index} className='flex flex-col h-full'>
                            <CardHeader className='space-y-1'>
                                <div className='flex items-center gap-4'>
                                    {offering.icon}
                                    <div className='space-y-1'>
                                        <CardTitle className='text-xl'>{offering.title}</CardTitle>
                                        {/* <CardDescription className="text-sm">{offering.description}</CardDescription> */}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className='flex flex-col flex-grow'>
                                <ul className='space-y-2 mb-6 flex-grow'>
                                    {offering.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className='flex items-start gap-2 text-sm text-muted-foreground'>
                                            <svg className='h-5 w-5 shrink-0 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                            </svg>
                                            <span className='text-md'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className='w-full' variant='default'>
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
