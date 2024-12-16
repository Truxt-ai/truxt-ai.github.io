'use client';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Message } from '@/types/chat';
import SearchContainer from './search-container';
import WidgetMessageContainer from './widget-message-container';
import WidgetHeader from './widget-header';

export function ChatWidget({ displayModal, setDisplayModal, domain }: { displayModal: boolean; setDisplayModal: (value: boolean) => void; domain: string }) {
    const [isMaximized, setIsMaximized] = useState(false);
    const [dialogSize, setDialogSize] = useState({ width: '500px', height: '600px' });
    const [textAreaInputValue, setTextAreaInputValue] = useState<string>('');
    const [searchType, setSearchType] = useState<string>('all');
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputDisabled, setInputDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (isMaximized) {
            setDialogSize({
                width: '95vw',
                height: '95vh'
            });
        } else {
            setDialogSize({
                width: '500px',
                height: '600px'
            });
        }
    }, [isMaximized]);

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized);
    };
    const sendMessage = async (query: string) => {
        if (query.trim() && !inputDisabled) {
            setInputDisabled(true);
            setMessages((prev) => [...prev, { user: query, ai: '', stream: true, id: null, searchType: searchType }]);
            setTextAreaInputValue('');
            chatWithLLM(query);
        }
    };

    const chatWithLLM = async (query: string) => {
        const controller = new AbortController();
        try {
            const res = await fetch('/api/chat/chat-llm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query, searchType, org: domain }),
                signal: controller.signal
            });

            if (!res.body) throw new Error('No body in response');

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let aiResponse = '';

            while (true) {
                const { done, value } = await reader.read();
                if (value == undefined && done && aiResponse == '') {
                    setMessages((prev) => prev.map((msg, idx) => (idx === prev.length - 1 ? { ...msg, ai: 'Could not generate response!', stream: false } : msg)));
                    break;
                }
                if (done) break;

                if (value) {
                    aiResponse += decoder.decode(value, { stream: true });
                    setMessages((prev) => prev.map((msg, idx) => (idx === prev.length - 1 ? { ...msg, ai: aiResponse, stream: true } : msg)));
                }
            }

            setMessages((prev) => prev.map((msg, idx) => (idx === prev.length - 1 ? { ...msg, stream: false } : msg)));
            setInputDisabled(false);
        } catch (err: unknown) {
            if (err instanceof DOMException && err.name === 'AbortError') {
                console.warn('Fetch aborted');
            } else {
                setMessages((prev) =>
                    prev.map((msg, idx) =>
                        idx === prev.length - 1
                            ? {
                                  ...msg,
                                  ai: err instanceof Error ? JSON.parse(err.message).error : 'Something went wrong!',
                                  stream: false
                              }
                            : msg
                    )
                );
                console.error(err);
            }

            setInputDisabled(false);
        }
    };
    return (
        <Dialog open={displayModal} onOpenChange={setDisplayModal}>
            <DialogContent
                className='p-0 bg-white text-gray-800 border-gray-200 overflow-hidden'
                style={{
                    maxWidth: dialogSize.width,
                    width: dialogSize.width,
                    height: dialogSize.height,
                    transition: 'all 0.3s ease-in-out'
                }}
            >
                <div className='flex flex-col h-full'>
                    <WidgetHeader isMaximized={isMaximized} toggleMaximize={toggleMaximize} />
                    <WidgetMessageContainer messages={messages} inputDisabled={inputDisabled} sendMessage={sendMessage} />
                    <SearchContainer searchType={searchType} setSearchType={setSearchType} textAreaInputValue={textAreaInputValue} setTextAreaInputValue={setTextAreaInputValue} inputDisabled={inputDisabled} sendMessage={sendMessage} />
                </div>
            </DialogContent>
        </Dialog>
    );
}
