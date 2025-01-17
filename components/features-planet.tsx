import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface FeaturesPlanetProps {
    title: string;
    content: Feature[];
}

export default function FeaturesPlanet({ title, content }: FeaturesPlanetProps) {
    return (
        <section
            className='relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 border-none'
            style={{
                backgroundImage: 'url(https://app1.truxt.xyz/static/media/truxt_login_background.9aa7ff77db4693fd7dbe.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'repeat'
            }}
        >
            {/* Overlay with opacity */}
            <div className='absolute inset-0 bg-black opacity-80 -z-10'></div>

            <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                <div className='py-6 md:py-10'>
                    <div className='mx-auto max-w-3xl pb-6 text-center md:pb-10'>
                        <h2 className='text-3xl font-bold text-gray-200 md:text-4xl'>{title}</h2>
                    </div>

                    <div className='grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0]'>
                        {content.map((feature, index) => (
                            <article key={index}>
                                <h3 className='mb-2 flex items-center space-x-2 font-medium text-gray-200'>
                                    <feature.icon className='h-5 w-5' />
                                    <span>{feature.title}</span>
                                </h3>
                                <p className='text-[15px] text-gray-200'>{feature.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
