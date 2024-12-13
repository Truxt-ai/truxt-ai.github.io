'use client'; // This should be placed at the top of your file

import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ChatWidget } from './chat-widget';
import { useSearchParams } from 'next/navigation';

function Widget() {
    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [domain,setDomain]=useState<string>('truxt');
    const searchParams = useSearchParams();

    useEffect(() => {
        setDomain(`${searchParams.get('email')}`);
    }, [searchParams]);

    return (
        <div className='widget'>
            <Button
                onClick={() => setDisplayModal(true)}
                className='fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%] transition-all duration-300 ease-in-out'
                aria-label='Open Chat Widget'
                title='Open Chat Widget'
            >
                <Bot className='w-16 h-16 text-white' />
            </Button>
            <ChatWidget displayModal={displayModal} setDisplayModal={setDisplayModal} domain={domain}/>
        </div>
    );
}

export default Widget;
