export interface Message {
    user: string;
    ai: string;
    stream: boolean;
    id: string | null;
}

export interface MessageContainerProps {
    messages: Message[];
    inputDisabled: boolean;
    sendMessage: (text: string, searchType:string) => void;
  }

export interface ChatCardProps {
    data: Message;
    inputDisabled: boolean;
    sendMessage: (text: string, searchType:string) => void;
}

export interface ChatCardAIProps {
    id: string | null;
    content: string;
    inputDisabled: boolean;
    stream: boolean;
    sendMessage: (text: string, searchType: string) => void;
}

