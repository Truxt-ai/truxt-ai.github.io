'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export const metadata = {
    title: 'Truxt Gen AI | Truxt',
    description: 'Page description'
};


export default function Component() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    }, []);

    return (
        <section className='relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/20 dark:from-slate-950 dark:to-slate-900/20'>
            <div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]' />
            <div className='relative mx-auto max-w-6xl px-4 sm:px-6' data-aos='zoom-y-out' data-aos-delay={100}>
                <div className='pb-12 pt-24 md:pb-20 md:pt-32'>
                    <div className='pb-12 text-center md:pb-16'>
                        <div className='relative inline-flex'>
                            <h1 className='mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-5xl font-bold tracking-tighter text-transparent dark:from-slate-200 dark:to-slate-400 md:text-6xl lg:text-7xl'>Truxt GEN AI Platform</h1>
                        </div>
                    </div>
                    <div className='relative mx-auto' data-aos='zoom-y-out' data-aos-delay={150}>
                        <div className=' overflow-hidden rounded-xl flex justify-center items-center'>
                            <Image src="/images/devops-page.png" alt="Error in loading" width={500} height={250} className='rounded-xl w-10/12'/>
                        </div>
                        <div className='absolute -inset-x-2 -top-16 -bottom-16 -z-10 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-3xl' />
                    </div>
                </div>
            </div>
        </section>
    );
}
