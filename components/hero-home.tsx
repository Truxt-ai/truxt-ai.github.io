'use client';

import PageIllustration from '@/components/page-illustration';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroHome() {
    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                <div className='pb-6 pt-32 md:pb-6 md:pt-40'>
                    <div className='pb-6 text-center md:pb-16'>
                        <h1 className='mb-6 border-y text-2xl sm:text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl' data-aos='zoom-y-out' data-aos-delay={150}>
                            Transform Product Support with 
                            <br className='max-lg:hidden' />
                            Generative AI
                        </h1>
                        <div className='mx-auto max-w-3xl'>
                            <p className='mb-8 text-sm sm:text-lg text-gray-700' data-aos='zoom-y-out' data-aos-delay={300}>
                                Supercharge your product knowledge base into a GenAI-powered self-service support engine, for accurate and faster technical issue resolution.
                            </p>
                            <div className='relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]'>
                                <div className='relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-2' data-aos='zoom-y-out' data-aos-delay={450}>
                                <Button asChild size='lg'>
                        <Link href='/sandbox' className='group flex items-center gap-2 bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]'>
                            Experience Truxt for your Data
                            <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                        </Link>
                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
