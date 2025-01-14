interface ChatResponse {
    chatId: string;
    messageId: string;
}

export async function createNewChat(query: string, searchType: string, organizationId: string, userID: number): Promise<ChatResponse> {
    try {
        const controller = new AbortController();

        const response = await fetch(`${process.env.CHAT_DB_URL_API}/api/chat/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-orgid': organizationId,
                'x-user': `${userID}`,
                'x-token': `${process.env.CHAT_DB_TOKEN}`
            },
            body: JSON.stringify({
                query: query.trim(),
                searchType,
                isPublic: true
            }),
            signal: controller.signal
        });

        if (!response.ok) {
            console.log(await response.text());
            throw new Error('Could not generate new chat');
        }

        const data = await response.json();

        return {
            chatId: data.data.chat.chat_id,
            messageId: data.data.message.message_id
        };
    } catch (error: unknown) {
        console.error('Error in createNewChat:', (error as Error).message);
        throw new Error((error as Error).message || 'Failed to create a new chat');
    }
}
