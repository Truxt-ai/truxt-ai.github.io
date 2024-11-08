'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingPage() {
    const [loadingText, setLoadingText] = useState('Loading');

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingText((prevText) => {
                if (prevText === 'Loading...') return 'Loading';
                return prevText + '.';
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-white'>
            <div className='flex flex-col items-center space-y-4'>
                <div className='relative h-24 w-24'>
                    <div className='absolute inset-0 animate-spin'>
                        <svg className='h-full w-full' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
                            <circle cx='50' cy='50' r='45' fill='none' stroke='#3B82F6' strokeWidth='8' strokeLinecap='round' strokeDasharray='70 200' />
                        </svg>
                    </div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <svg width='48' height='48' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M12 2L2 7L12 12L22 7L12 2Z' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M2 17L12 22L22 17' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M2 12L12 17L22 12' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                    </div>
                </div>
                <h2 className='text-2xl font-bold text-black'>{loadingText}</h2>
                <p className='text-sm text-gray-500'>Please wait while we prepare your content</p>
            </div>
        </div>
    );
}
