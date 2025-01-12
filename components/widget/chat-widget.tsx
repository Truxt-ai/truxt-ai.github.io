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
    const [searchType, setSearchType] = useState<string>('web');
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputDisabled, setInputDisabled] = useState<boolean>(false);
    const [abortController, setAbortController] = useState<AbortController | null>(null);

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

    const verifyUser = async () => {
        return 1;
        if (localStorage.getItem('public-user-token')) {
            return localStorage.getItem('public-user-token');
        } else {
            try {
                const status = await fetch('/api/auth/public-user', {
                    method: 'POST'
                });

                const response = await status.json();
                localStorage.setItem('public-user-token', response.data.id);
                return response.data.id;
            } catch (err) {
                console.error('Error generating session ID:', err);
                return null;
            }
        }
    };

    const createSessionID = async (query: string, searchType: string, userID: number) => {
        try {
            const status = await fetch('/api/chat/create-new-chat', {
                method: 'POST',
                body: JSON.stringify({ query, searchType, userID })
            });
            const response = await status.json();
            if (response.chatId != undefined) {
                sessionStorage.setItem('sessionID', response.chatId);
            }
            return response;
        } catch (err) {
            console.error('Error creating session ID:', err);
            return null;
        }
    };

    const CreateNewMessage = async (chatId: string, query: string, userID: number) => {
        try {
            const status = await fetch('/api/chat/create-new-message', {
                method: 'POST',
                body: JSON.stringify({ chatId, query, searchType, userID })
            });

            const response = await status.json();
            return response;
        } catch (err) {
            console.error('Error creating session ID:', err);
            return null;
        }
    };

    const updateMessageInDB = async (messageId: string, aiResponse: string, userID: number) => {
        try {
            const status = await fetch('/api/chat/update-message', {
                method: 'PATCH',
                body: JSON.stringify({ messageId, aiResponse, userID })
            });

            const response = await status.json();
            return response;
        } catch (err) {
            console.error('Error creating session ID:', err);
            return null;
        }
    };

    const sendMessage = async (query: string) => {
        if (query.trim() && !inputDisabled) {
            setInputDisabled(true);
            setMessages((prev) => [...prev, { user: query, ai: '', stream: true, id: null, searchType: searchType }]);
            setTextAreaInputValue('');

            const userID = await verifyUser();

            if (sessionStorage.getItem('sessionID') == undefined) {
                sessionStorage.removeItem('sessionID');
            }

            if (!sessionStorage.getItem('sessionID')) {
                const data = await createSessionID(query, searchType, userID);
                chatWithLLM(query, data.messageId, userID);
            } else {
                const sessionID = sessionStorage.getItem('sessionID');
                const data = await CreateNewMessage(`${sessionID}`, query, userID);
                chatWithLLM(query, data.data, userID);
            }
        }
    };

    const chatWithLLM = async (query: string, messageId: string, userID: number) => {
        const controller = new AbortController();
        setAbortController(controller);

        try {
            const res = await fetch('/api/chat/chat-llm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query, searchType, messageId }),
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

            setMessages((prev) => prev.map((msg, idx) => (idx === prev.length - 1 ? { ...msg, stream: false, id: messageId } : msg)));
            setInputDisabled(false);
            setAbortController(null);
            updateMessageInDB(messageId, aiResponse, userID);
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
                                  stream: false,
                                  id: messageId
                              }
                            : msg
                    )
                );
                console.error(err);
            }

            setInputDisabled(false);
            setAbortController(null);
            updateMessageInDB(messageId, 'Error occured', userID);
        }
    };

    return (
        <Dialog open={displayModal} onOpenChange={setDisplayModal}>
            <DialogContent
                className='p-0 bg-white text-gray-800 border-gray-200 overflow-hidden flex flex-col'
                style={{
                    maxWidth: dialogSize.width,
                    width: dialogSize.width,
                    height: dialogSize.height,
                    transition: 'all 0.3s ease-in-out'
                }}
            >
                <WidgetHeader isMaximized={isMaximized} toggleMaximize={toggleMaximize} />
                <div className='flex-grow overflow-hidden flex flex-col'>
                    <WidgetMessageContainer messages={messages} inputDisabled={inputDisabled} sendMessage={sendMessage} />
                </div>
                <SearchContainer searchType={searchType} setSearchType={setSearchType} textAreaInputValue={textAreaInputValue} setTextAreaInputValue={setTextAreaInputValue} inputDisabled={inputDisabled} sendMessage={sendMessage} />
            </DialogContent>
        </Dialog>
    );
}
