interface ChatResponse {
    messageId: string;
}

export async function createNewMessage(chatId:string, query: string, searchType: string,organizationId:string, userID:number): Promise<ChatResponse> {
    try {
        const controller = new AbortController();
        const response = await fetch(`${process.env.CHAT_DB_URL_API}/api/chat/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-orgid': organizationId,
                'x-user':`${userID}`,
                'x-token': `${process.env.CHAT_DB_TOKEN}`,
            },
            body: JSON.stringify({
                chatId: chatId,
                query: query,
                searchType: searchType,
                isPublic: true
            }),
            signal: controller.signal
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error('Could not generate new chat');
        }


        return data.data.message_id;
    } catch (error: unknown) {
        console.error('Error in createNewChat:', (error as Error).message);
        throw new Error((error as Error).message || 'Failed to create a new chat');
    }
}
