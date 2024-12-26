'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookieChoice = localStorage.getItem('cookieChoice');
        if (!cookieChoice) {
            setShowBanner(true);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookieChoice', 'all');
        setShowBanner(false);
    };

    const handleAcceptNecessary = () => {
        localStorage.setItem('cookieChoice', 'necessary');
        setShowBanner(false);
    };

    const handleRejectAll = () => {
        localStorage.setItem('cookieChoice', 'reject');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className='fixed bottom-0 left-0 right-0 bg-gray-100 p-4 z-10'>
            <div className='container mx-auto flex flex-col sm:flex-row items-center justify-between'>
                <p className='text-sm text-gray-700 mb-4 sm:mb-0'>We use cookies to enhance your browsing experience and analyze our traffic. Please choose your cookie preferences.</p>
                <div className='flex space-x-4'>
                    <Button 
                        onClick={handleRejectAll} 
                        variant="ghost" 
                        className='text-gray-700 hover:text-gray-900 hover:bg-gray-200 border'
                    >
                        Reject
                    </Button>
                    <Button 
                        onClick={handleAcceptAll} 
                        className='bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]'
                    >
                        Accept
                    </Button>
                </div>
            </div>
        </div>
    );
}

