'use client'

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import CodeContainer from './code-container';
// import SourceCard from './source-card';
import { useEffect, useState } from 'react';
// import { onSnapshot } from 'firebase/firestore';
// import { firebaseDB } from '@/lib/config/firebase/index';
// import { doc } from 'firebase/firestore';
// import ChatRecommendations from './chat-recommendations';
import { ChatCardAIProps } from '@/types/chat';
// import { Sources } from '@/types/sources';

function ChatCardAI({ content, inputDisabled, stream, sendMessage }: ChatCardAIProps) {
    // const [sources, setSources] = useState<Sources[]>();
    // const [recommendations, setRecommendations] = useState<string[]>();

    // useEffect(() => {
    //     try {
    //         const unsubscribeSources = onSnapshot(doc(firebaseDB, 'sources', `${id}`), (snapshot) => {
    //             const newSources = snapshot.data();
    //             setSources(() => newSources?.sources);
    //         });
    //         const unsubscribeRecommendations = onSnapshot(doc(firebaseDB, 'recommendations', `${id}`), (snapshot) => {
    //             const newSources = snapshot.data();
    //             setRecommendations(() => newSources?.recommendations);
    //         });
    //         return () => {
    //             unsubscribeSources();
    //             unsubscribeRecommendations();
    //         };
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }, [id]);
    return (
        <div className='content mt-[10px] w-full lg:w-11/12 grid grid-cols-1 lg:grid-cols-12 items-start text-justify text-sm gap-1 dark:bg-transparent'>
            <div className='col-span-1 flex items-center gap-2'>
                <div className='size-8 lg:col-span-1 rounded-full bg-primaryWhite border p-1 flex items-center justify-center dark:bg-darkBlue'>
                    <img src={'https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp'} width={512} height={512} alt='Truxt' className='w-full inline-block dark:invert' />
                </div>
                <span className='inline-block lg:hidden font-semibold'>Truxt AI</span>
            </div>
            <div className='mt-1 col-span-7 lg:col-span-11'>
                {inputDisabled && !content ? (
                    <h1>Analyzing...</h1>
                ) : (
                    <>
                        <div className={`parsed-text markdown-body dark:bg-transparent`}>
                            <Markdown
                                            remarkPlugins={[remarkGfm]}
                                components={{
                                    a: ({ node, ...props }) => (
                                        <a {...props} target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>
                                            {props.children}
                                        </a>
                                    ),
                                    code: (props) => {
                                        const { children, className, ...rest } = props;
                                        const match = /language-(\w+)/.exec(className || '');
                                        return match ? (
                                            <CodeContainer {...rest} code={String(children).replace(/\n$/, '')} language={match[1]} />
                                        ) : (
                                            <code {...rest} className={className}>
                                                {children}
                                            </code>
                                        );
                                    }
                                }}
                            >
                                {content.split('[LINKS]')[0]?.trim()}
                            </Markdown>
                        </div>
                        {/* {Array.isArray(sources) && sources.length > 0 && <SourceCard sources={sources} />}
                        {recommendations && <ChatRecommendations recommendations={recommendations} sendMessage={sendMessage} />} */}
                    </>
                )}
            </div>
        </div>
    );
}

export default ChatCardAI;