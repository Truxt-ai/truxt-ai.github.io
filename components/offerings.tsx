'use client';
import { Brain, Database, Lock } from 'lucide-react';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

function Offerings() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const offerings = [
        {
            icon: <Database className='h-12 w-12 text-primary' />,
            title: 'Truxt GenAI Platform',
            description: "Automatically collect and utilize all your organization's data",
            features: ['Pretrained GenAi model for higher accuracy', 'Org Private data remains private', 'Scales seamlessly with large datasets as well', 'Multi-Modal Capabilities']
        },
        {
            icon: <Lock className='h-12 w-12 text-primary' />,
            title: 'End to End Gen AI Platform',
            description: 'Create your own secure knowledge base and leverage our AI platform',
            features: ['Automatic data collection from CRM and communication channels', 'Centralized knowledge hub creation', 'AI-powered response generation using collected data', 'Seamless integration with existing systems']
        },
        {
            icon: <Lock className='h-12 w-12 text-primary' />,
            title: 'DevOpsGPT',
            description: 'Create your own secure knowledge base and leverage our AI platform',
            features: ['Automatic data collection from CRM and communication channels', 'Centralized knowledge hub creation', 'AI-powered response generation using collected data', 'Seamless integration with existing systems']
        },
    ];
    return (
        <div className='bg-gradient-to-b from-gray-100 to-white border-t border-gray-200 p-6 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold text-gray-900 mb-3 uppercase'>Our Offerings</h1>
            <p className='text-lg text-gray-700'>Discover how Truxt can revolutionize your organization's knowledge management and customer support</p>
            <div className='mx-auto flex max-w-7xl justify-center gap-6 py-12'>
                {offerings.map((offering, index) => (
                    <Card key={index} className='w-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-primary/20'>
                        <CardHeader className='p-6 pb-3'>
                            <div className='flex space-x-4'>
                                {offering.icon}
                                <div>
                                    <CardTitle className='text-2xl'>{offering.title}</CardTitle>
                                    <CardDescription>{offering.description}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className='p-6 pt-0'>
                            <ul className='mt-2 space-y-2 text-sm text-gray-500 dark:text-gray-400'>
                                {offering.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className='flex items-center'>
                                        <svg className='mr-2 h-4 w-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button className='mt-6 w-full bg-gray-900 hover:bg-gray-800'>{index === 0 ? 'Learn More' : 'Get Started'}</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Offerings;
