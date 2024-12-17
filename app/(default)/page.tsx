'use client'

import { useEffect, useRef } from 'react';
import Hero from '@/components/hero-home';
import BusinessCategories from '@/components/business-categories';
import Offerings from '@/components/offerings';
import WhyTruxt from '@/components/why-truxt';
import Calendar from '@/components/calendar';
import { scrollToDemo } from '@/utils/scroll-to-demo';

export default function Home() {
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (params.get('path') === 'demo') {
                scrollToDemo(calendarRef);
            }
        }
    }, []);

    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <Hero />
            <BusinessCategories />
            <Offerings />
            <WhyTruxt />
            <div ref={calendarRef}>
                <Calendar />
            </div>
        </div>
    );
}

