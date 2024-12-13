import { useRef, useEffect, useState } from 'react';
import ChatCard from './chat-card';
import { MessageContainerProps } from '@/types/chat';

const WidgetMessageContainer = ({ messages, inputDisabled, sendMessage }: MessageContainerProps) => {
    const messageContainerRef = useRef<HTMLDivElement | null>(null);
    const scrollElementRef = useRef<HTMLDivElement | null>(null);
    const [isScrollElementVisible, setIsScrollElementVisible] = useState(false);

    useEffect(() => {
        const currentScrollElement = scrollElementRef.current;
        if (!currentScrollElement || !messageContainerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrollElementVisible(entry.isIntersecting);
            },
            {
                root: messageContainerRef.current,
                threshold: 0.1
            }
        );

        observer.observe(currentScrollElement);

        return () => {
            if (currentScrollElement) {
                observer.unobserve(currentScrollElement);
            }
        };
    }, [messages]);

    useEffect(() => {
        if (isScrollElementVisible && scrollElementRef.current) {
            scrollElementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isScrollElementVisible]);

    useEffect(() => {
        if (scrollElementRef.current) {
            scrollElementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages.length]);

    return (
        <div className='message-container mx-auto w-full   h-full mt-[5px] mb-[5px] overflow-y-auto p-4' ref={messageContainerRef}>
            {messages.map((item, index) => (
                <ChatCard data={item} key={index} inputDisabled={inputDisabled} sendMessage={sendMessage} />
            ))}
            <div className='scroll-element h-1' ref={scrollElementRef}></div>
        </div>
    );
};

export default WidgetMessageContainer;
