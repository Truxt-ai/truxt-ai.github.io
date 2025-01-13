import React from 'react';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WidgetHeaderProps } from '@/types/widget-header';

function WidgetHeader({ isMaximized, toggleMaximize }: WidgetHeaderProps) {
    return (
        <DialogHeader className='p-4 border-b border-gray-200 bg-white'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src='https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp' alt='Truxt' width={32} height={32} />
                    <DialogTitle className='text-xl font-semibold text-gray-800'>Truxt</DialogTitle>
                    {/* <span className='text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800'>Beta</span> */}
                </div>
                <Button variant='ghost' size='icon' onClick={toggleMaximize} className='rounded-full hover:bg-gray-100'>
                    {isMaximized ? <Minimize2 className='w-5 h-5 text-gray-600' /> : <Maximize2 className='w-5 h-5 text-gray-600' />}
                </Button>
            </div>
        </DialogHeader>
    );
}

export default WidgetHeader;
