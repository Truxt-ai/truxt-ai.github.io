export const updateMessage = async (messageId: string, aiResponse: string,organizationId:string, userID:number) => {
    const response = await fetch(`${process.env.CHAT_DB_URL_API}/api/chat/message/${messageId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'x-orgid': organizationId,
            'x-user':`${userID}`,
            'x-token': `${process.env.CHAT_DB_TOKEN}`,
        },
        body: JSON.stringify({
            response: aiResponse
        })
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.error || 'Could not update the message in DB');
    }
    return await response.json();    
};