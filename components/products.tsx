'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import AOS from 'aos';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface Product {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    imageSrc: string;
    ctaText: string;
    ctaLink: string;
}

const products: Product[] = [
    {
        id: 1,
        title: 'DevOpsGPT',
        subtitle: 'Your DevOps Technical Support',
        description: 'The DevOpsGPT platform is the next-gen AI troubleshooter for seamless DevOps operations. Powered by Multi-Agent AI and specialized LLMs, it quickly diagnoses issues and guides you through solution execution with precision.',
        features: [
            'Instant Diagnostics: Agentic AI quickly identifies and resolves infrastructure issues, reducing downtime and speeding up troubleshooting.',
            'Seamless Tool Integration: Works with tools like Kubernetes, ArgoCD, and Jenkins for continuous monitoring and fast incident resolution within your DevOps pipeline.',
            'Specialized DevOps Expertise: DevOpsGPT, trained on domain-specific data, delivers precise, context-aware answers for both routine and complex inquiries.',
            'Real-Time Data & Continuous Learning: Uses live data streaming for proactive issue resolution, improving over time with ongoing fine-tuning based on user interactions.'
        ],
        imageSrc: '/images/devops-page.png',
        ctaText: 'Learn More',
        ctaLink: '/devops-gpt'
    },
    {
        id: 2,
        title: 'Truxt\'s GenAI Platform',
        subtitle: 'Transforming Customer Support with AI',
        description: 'Truxt\'s Pretrained GenAI platform leverages advanced generative AI to transform customer support for internal teams and customers. Trained on a vast, diverse dataset (10+ data types) and leveraging multiple large language models (LLMs) and multi-modal inputs, including real-time web data, the platform is designed for scalability, precision, and adaptability. Truxt delivers intelligent automation and real-time insights to drive operational efficiency and improve customer satisfaction.',
        features: [
            'AI-Powered Automation: Automate support queries, and troubleshooting, freeing up resources for complex issues.',
            'Continuous Learning: Truxt\'s AI learns from every interaction, improving accuracy and providing smarter, more context-aware responses over time.',
            'Real-Time Insights: Access actionable analytics and performance metrics that help optimize support strategies and identify operational improvements.',
            'Seamless Integration: Easily integrate Truxt with existing enterprise systems, tools, and workflows, ensuring a smooth transition and minimal disruption.',
            'Scalability: Whether you\'re a growing startup or a large enterprise, Truxt scales with your needs, handling increasing demands effortlessly.',
            'Security & Compliance: Ensure data protection with enterprise-grade security and regulatory compliance, with options for on-premise deployment.'
        ],
        imageSrc: '/images/truxt-arch.png',
        ctaText: 'Request a Demo',
        ctaLink: '/contact-us'
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
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                {products.map((product, index) => (
                    <div key={product.id} className={`mb-16 ${index !== 0 ? 'mt-32' : ''}`} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                        <Card className="overflow-hidden bg-white/80 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-primary/20">
                            <CardContent className="p-0">
                                <div className={`flex flex-col gap-8 lg:flex-col ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                                    <div className="relative w-full lg:w-full flex justify-center items-center overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-75"></div>
                                        <Image 
                                            src={product.imageSrc} 
                                            alt={product.title} 
                                            width={600} 
                                            height={400} 
                                            className="w-full object-cover transition-transform duration-300 hover:scale-105" 
                                        />
                                    </div>
                                    <div className="w-full p-8 lg:p-12 lg:w-full">
                                        <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">{product.title}</h2>
                                        <h3 className="mb-4 text-xl font-semibold text-gray-700">{product.subtitle}</h3>
                                        <p className="mb-6 text-lg leading-relaxed text-gray-600">{product.description}</p>
                                        <div className="space-y-4">
                                            <h4 className="text-xl font-semibold text-gray-900">Key Features</h4>
                                            <ul className="space-y-3">
                                                {product.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start gap-3 text-gray-600" data-aos="fade-up" data-aos-delay={featureIndex * 100}>
                                                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-8">
                                            <Button
                                                asChild
                                                className="group bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-105 px-6 py-3 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl"
                                            >
                                                <Link href={product.ctaLink}>
                                                    {product.ctaText}
                                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                                </Link>
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