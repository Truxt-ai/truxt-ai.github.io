'use client';

import PageIllustration from '@/components/page-illustration';
import Link from 'next/link';

export default function HeroHome() {
    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                <div className='pb-6 pt-32 md:pb-6 md:pt-40'>
                    <div className='pb-6 text-center md:pb-16'>
                        <h1 className='mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl' data-aos='zoom-y-out' data-aos-delay={150}>
                            Transform Product Support with
                            <br className='max-lg:hidden' />
                            Generative AI
                        </h1>
                        <div className='mx-auto max-w-3xl'>
                            <p className='mb-8 text-lg text-gray-700' data-aos='zoom-y-out' data-aos-delay={300}>
                                Supercharge your product knowledge base into a GenAI-powered self-service support engine, for accurate and faster technical issue resolution.
                            </p>
                            <div className='relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]'>
                                <div className='relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-2' data-aos='zoom-y-out' data-aos-delay={450}>
                                    <Link href='/sandbox' className='btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto' aria-label='Experience Truxt in 2 steps'>
                                        <span className='relative inline-flex items-center text-xl'>Experience Truxt for your content in just 2 steps</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
