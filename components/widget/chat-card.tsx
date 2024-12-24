import ChatCardAI from './chat-card-ai';
import ChatCardUser from './chat-card-user';
import { ChatCardProps } from '@/types/chat';

export default function ChatCard({ data, inputDisabled, sendMessage}: ChatCardProps) {
    return (
        <div className='my-4 space-y-4'>
            <ChatCardUser content={data.user} />
            <ChatCardAI content={data.ai} inputDisabled={inputDisabled} key={data.ai} stream={data.stream} sendMessage={sendMessage} />
        </div>
    );
}