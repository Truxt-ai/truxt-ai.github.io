'use client';
import { Badge } from '@/components/ui/badge';
import { useRef } from 'react';

export default function Component() {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className='relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/20 dark:from-slate-950 dark:to-slate-900/20'>
            <div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]' />
            <div className='relative mx-auto max-w-6xl px-4 sm:px-6' data-aos='zoom-y-out' data-aos-delay={100}>
                <div className='pb-12 pt-24 md:pb-20 md:pt-32'>
                    <div className='pb-12 text-center md:pb-16'>
                        <div className='relative inline-flex'>
                            <h1 className='mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-5xl font-bold tracking-tighter text-transparent dark:from-slate-200 dark:to-slate-400 md:text-6xl lg:text-7xl'>Introducing DevOpsGPT</h1>
                            <Badge variant='secondary' className='absolute -right-20 top-0 bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'>
                                Upcoming
                            </Badge>
                        </div>
                        <p className='text-2xl font-bold'>Your Dedicated DevOps Technical Support</p>
                    </div>
                    <div className='relative mx-auto max-w-5xl' data-aos='zoom-y-out' data-aos-delay={150}>
                        <div className='aspect-video overflow-hidden rounded-xl bg-slate-900 shadow-2xl'>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/Z28zvZEglKQ" title="Introducing Truxt.ai DevOpsGPT: Your dedicated DevOps Technical Support" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='absolute -inset-x-2 -top-16 -bottom-16 -z-10 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-3xl' />
                    </div>
                </div>
            </div>
        </section>
    );
}
