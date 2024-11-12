import React from 'react';
import { ArrowRight, Building2, Network, Cpu, Shield, BarChart3, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface Feature {
    Icon: React.ElementType;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        Icon: Building2,
        title: 'Enterprise-Ready',
        description: 'Purpose-built to handle high volumes of complex technical inquiries with precision and efficiency'
    },
    {
        Icon: Network,
        title: 'Scalable Architecture',
        description: 'Adapts seamlessly to growing support demands while maintaining consistent service quality'
    },
    {
        Icon: Cpu,
        title: 'Multi-LLM Agentic AI Technology',
        description: 'Delivers faster, more accurate resolutions through advanced multi-LLM, multi-AI Agent system'
    },
    {
        Icon: ShieldCheck,
        title: 'Enterprise Security',
        description: 'Ensures data privacy with on-premise deployment options and robust security controls'
    },
    {
        Icon: SlidersHorizontal,
        title: 'Customized Enterprise Solution',
        description: "Tailor made to a Org's specific requirements including needed integrations with 3rd party software"
    },
    {
        Icon: BarChart3,
        title: 'Data-Driven Insights',
        description: 'Provides actionable analytics on resolutions, Knowledge articles and customer trends'
    }
];

export default function WhyTruxtSection() {
    return (
        <section className='bg-background py-12 sm:py-16 px-4'>
            <div className='container max-w-7xl mx-auto'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>Why Truxt?</h2>
                    <p className='mt-6 text-lg leading-8 text-muted-foreground'>Built for Enterprise grade adoption, with our advanced GenAI Technologies you get greater accuracy, security and scalability.</p>
                </div>
                <div className='mt-5 sm:mt-10 lg:mt-10'>
                    <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8'>
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} feature={feature} />
                        ))}
                    </div>
                </div>
                <div className='mt-16 flex justify-center'>
                    <Button asChild size='lg'>
                        <Link href='/sandbox' className='group flex items-center gap-2 bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]'>
                            Experience Truxt for your Contents
                            <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <Card className='flex flex-col h-full'>
            <CardHeader>
                <CardTitle className='flex items-center gap-x-3 text-lg font-semibold leading-7'>
                    <feature.Icon className='h-6 w-6 text-primary' color='#60a5fa' />
                    {feature.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-muted-foreground'>{feature.description}</p>
            </CardContent>
        </Card>
    );
}
