'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import AOS from 'aos';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
    id: number;
    title: string;
    description: string;
    features?: string[];
    imageSrc: string;
}

const products: Product[] = [
    {
        id: 1,
        title: 'End 2 End Truxt Gen AI Platform',
        description: 'The End-to-End Truxt GenAI Platform is a comprehensive solution that transforms support operations by creating a robust knowledge hub. Designed for privacy and seamless integration, this platform enhances customer support efficiency with secure data handling and compatibility with third-party CRMs, ticketing systems, and more.',
        features: ['Build a Robust Knowledge Hub: Centralized support resources for improved team efficiency.', 'Enhanced Privacy: Secure and private handling of organizational data.', 'Broader Third-Party Integration: Easily integrates with popular CRMs and ticketing platforms.', 'Seamless Support: Ensures high-performance, continuous support for complex customer needs.'],
        imageSrc: '/images/truxt-arch.png'
    },
    {
        id: 2,
        title: 'Truxt Gen AI Platform',
        description: 'The Truxt GenAI Platform is a scalable, multi-modal solution designed to transform your knowledge base into a GenAI-powered support system. Offering on-premise deployment and pretrained models, it ensures high accuracy, adaptable scalability, and reliable performance across diverse support environments.',
        features: ['Pretrained GenAI Model: Optimized for precision in complex issue resolution.', 'Data Privacy: Your organizations data remains private and secure.', 'Scalability: Adapts to large datasets and handles increasing support volume seamlessly.', 'Multi-Modal Capabilities: Supports various media types for a richer support experience.', 'On-Premise Deployment: Available for organizations requiring strict data control.'],
        imageSrc: '/images/truxt-gen-ai.png'
    },
    {
        id: 3,
        title: 'DevOpsGPT',
        description: 'DevOpsGPT is a generative AI solution tailored for DevOps support environments. Trained on DevOps workflows, this platform offers instant troubleshooting for technical issues, ensuring quick responses and minimizing downtime. Ideal for open-source DevOps environments requiring agentic AI solutions.',
        features: ['DevOps-Specific Models: Fine-tuned for DevOps-related support queries.', 'Instant Technical Issue Resolution: Quickly identifies and resolves technical issues.', 'Agentic AI Troubleshooting: Contextual troubleshooting aligned with your organizations technical setup.', 'Integration with Open-Source Tools: Built to support open-source DevOps toolsets.'],
        imageSrc: '/images/public-pages-ui.png'
    }
];

export default function ProductComparison() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: true
        });
    }, []);

    return (
        <div className='relative overflow-hidden bg-gradient-to-b from-white to-gray-50'>
            {/* Products Section */}
            <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                {products.map((product, index) => (
                    <div key={product.id} className={`my-14 ${index !== 0 ? 'mt-32' : ''}`} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                        <Card className='overflow-hidden border-0 bg-white/50 shadow-xl backdrop-blur-sm'>
                            <CardContent className='p-0'>
                                <div className={`flex flex-col gap-8 lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                                    <div className='relative w-full lg:w-1/2 flex justify-center items-center'>
                                        <div className='aspect-[4/3] overflow-hidden flex justify-center items-center'>
                                            <img src={product.imageSrc} alt={product.title} className=' w-10/12 object-cover transition-transform duration-300 hover:scale-105' />
                                        </div>
                                    </div>
                                    <div className='w-full p-8 lg:w-1/2'>
                                        <h2 className='mb-4 text-3xl font-bold tracking-tight text-gray-900'>{product.title}</h2>
                                        <p className='mb-6 text-lg leading-relaxed text-gray-600'>{product.description}</p>
                                        {product.features && (
                                            <div className='space-y-4'>
                                                <h3 className='text-xl font-semibold text-gray-900'>Key Features</h3>
                                                <ul className='space-y-3'>
                                                    {product.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className='flex items-start gap-3 text-gray-600' data-aos='fade-up' data-aos-delay={featureIndex * 100}>
                                                            <Check className='mt-1 h-5 w-5 flex-shrink-0 text-primary' />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        <div className='mt-8'>
                                            <Button className='group'>
                                                Request a demo
                                                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
