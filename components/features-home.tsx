'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Bot, Zap, UserCog, BarChart2, TrendingUp, Search, Link, Shield, Sliders, LucideIcon } from 'lucide-react';


const icons: LucideIcon[] = [Bot, Zap, UserCog, BarChart2, TrendingUp, Search, Link, Shield, Sliders];

const carouselItems = [
    {
        id: 1,
        title: 'Public Pages',
        image: {
            src: '/images/public-pages-ui.png',
            alt: 'AI Chatbot Interface',
            width: 800,
            height: 600
        },
        features: [
            {
                id: 1,
                iconIndex: 0,
                title: 'Automation',
                description: 'Reduces manual intervention by using AI to handle common queries and improve the user experience.'
            },
            {
                id: 2,
                iconIndex: 1,
                title: 'Efficiency',
                description: 'Speeds up customer support by providing instant, accurate answers from their documents.'
            },
            {
                id: 3,
                iconIndex: 2,
                title: 'Personalization',
                description: 'Tailors responses based on the specific content of their documentation, ensuring users get relevant, context-aware answers.'
            }
        ]
    },
    {
        id: 2,
        title: 'Sandbox',
        image: {
            src: '/images/public-pages-ui.png',
            alt: 'Analytics Dashboard',
            width: 800,
            height: 600
        },
        features: [
            {
                id: 4,
                iconIndex: 3,
                title: 'Insights',
                description: 'Provides valuable analytics on user queries, helping identify areas for documentation improvement.'
            },
            {
                id: 5,
                iconIndex: 4,
                title: 'Performance Tracking',
                description: "Monitors and reports on key metrics to showcase the AI's impact on support efficiency."
            },
            {
                id: 6,
                iconIndex: 5,
                title: 'Smart Search',
                description: 'Utilizes advanced algorithms to understand user intent and provide more accurate search results.'
            }
        ]
    },
    {
        id: 3,
        title: 'Docs Instance',
        image: {
            src: '/images/docs-instance.png',
            alt: 'Integration Hub',
            width: 800,
            height: 600
        },
        features: [
            {
                id: 7,
                iconIndex: 6,
                title: 'Seamless Integration',
                description: 'Easily connects with existing tools and platforms, ensuring a smooth workflow.'
            },
            {
                id: 8,
                iconIndex: 7,
                title: 'Data Security',
                description: 'Implements robust security measures to protect sensitive information and maintain compliance.'
            },
            {
                id: 9,
                iconIndex: 8,
                title: 'Customization',
                description: 'Offers flexible configuration options to adapt the AI to specific business needs and branding.'
            }
        ]
    }
];

export default function FeaturesHome() {
    return (
        <section className='relative py-12 md:py-20'>
            <div className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2' aria-hidden='true'>
                <div className='h-80 w-80 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-40 blur-[160px] will-change-[filter]' />
            </div>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <Carousel className='w-full'>
                    <CarouselContent>
                        {carouselItems.map((item) => (
                            <CarouselItem key={item.id}>
                                <div className='rounded-lg overflow-hidden'>
                                    <div className='p-6 md:p-10'>
                                        <h2 className='text-2xl font-bold mb-6 text-center'>{item.title}</h2>
                                        <div className='relative w-full aspect-video mb-8'>
                                            <Image src={item.image.src} alt={item.image.alt} className='object-cover rounded-lg' priority />
                                        </div>
                                        <div className='grid gap-6 lg:grid-cols-3'>
                                            {item.features.map((feature) => {
                                                const IconComponent = icons[feature.iconIndex];
                                                return (
                                                    <article key={feature.id} className='relative p-6 md:p-8 bg-card rounded-lg'>
                                                        <h3 className='mb-2 flex items-center space-x-2 font-medium'>
                                                            {IconComponent && <IconComponent className='h-6 w-6' />}
                                                            <span>{feature.title}</span>
                                                        </h3>
                                                        <p className='text-sm text-muted-foreground'>{feature.description}</p>
                                                    </article>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='absolute left-0 right-0 top-1/2 flex justify-between px-4'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
