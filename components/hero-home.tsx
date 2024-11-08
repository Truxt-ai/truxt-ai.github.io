'use client';
import PageIllustration from '@/components/page-illustration';
import { useState } from 'react';
import { useRouter } from 'next/navigation'


export default function HeroHome() {
    const [email, setEmail] = useState('');
    const navigate = useRouter();

    const handleClick = () => {
        navigate.push(`/playground?email=${encodeURIComponent(email)}`);
    };

    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                <div className='pb-6 pt-32 md:pb-6 md:pt-40'>
                    <div className='pb-6 text-center md:pb-16'>
                        <h1 className='mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl' data-aos='zoom-y-out' data-aos-delay={150}>
                            Empower Customer Support with <br className='max-lg:hidden' />
                            Generative AI
                        </h1>
                        <div className='mx-auto max-w-3xl'>
                            <p className='mb-8 text-lg text-gray-700' data-aos='zoom-y-out' data-aos-delay={300}>
                                Transform your knowledge base into a GenAI-powered support engine for faster issue resolution.{' '}
                            </p>
                            <div className='relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]'>
                                <div className='relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-2' data-aos='zoom-y-out' data-aos-delay={450}>
                                    <input type='email' placeholder='Business Email' className='w-1/2 rounded-lg' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    <button className='btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto' onClick={handleClick}>
                                        <span className='relative inline-flex items-center'>Create my playground</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
