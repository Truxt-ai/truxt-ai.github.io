'use client';
import { ArrowRight, Focus } from 'lucide-react';
import React from 'react';

export default function ChatRecommendations({ recommendations, sendMessage }: { recommendations: string[]; sendMessage: (text: string, searchType: string) => void }) {
    const handleSend = (query: string) => {
        sendMessage(query, 'all');
    };
    return (
        <div className='w-full  mx-auto  shadow-sm rounded-lg overflow-hidden'>
            {recommendations && recommendations.length > 0 && (
                <h2 className='text-xl font-semibold py-4 border-b flex items-center gap-2 px-2'>
                    <Focus className='size-5' />
                    Related
                </h2>
            )}
            <ul className='divide-y'>
                {recommendations?.map((recommendation, index) => (
                    <li key={`${recommendation}-${index}`} className='flex capitalize cursor-pointer items-center justify-between py-4 px-2 group hover:bg-secondary' onClick={() => handleSend(recommendation)}>
                        <span className='text-sm'>{recommendation}</span>
                        <ArrowRight className='w-5 h-5 group-hover:-rotate-45 transition-all duration-150 group-hover:text-blue-600' />
                    </li>
                ))}
            </ul>
        </div>
    );
}
