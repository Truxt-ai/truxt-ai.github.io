'use client';

import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

function Calendar() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: 'truxt-demo' });
            cal('ui', {
                theme: 'light',
                hideEventTypeDetails: false,
                layout: 'month_view',
            });
        })();
    }, []);

    return (
        <div className='calendar-container h-screen w-full flex flex-col items-center gap-4 py-10'>
            <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>Schedule Demo</h2>
            <Cal
                namespace='truxt-demo'
                calLink='truxt-ai/truxt-demo'
                style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                config={{
                    layout: 'month_view',
                    theme: 'light',
                }}
            />
        </div>
    );
}

export default Calendar;

