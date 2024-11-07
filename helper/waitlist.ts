interface WaitListResponse {
    error: string;
    messageId: string;
}
export async function AddNewMemberInWaitList(name:string, email: string,): Promise<WaitListResponse> {
    try {
        const response = await fetch(`${process.env.CHAT_DB_URL_API}/api/waitlist/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${process.env.CHAT_DB_TOKEN}`
            },
            body: JSON.stringify({
               name,email
            }),
        });
        if (!response.ok) {
            throw new Error('Could not add member to waitlist');
        }
        const data = await response.json();
        console.log(data);
        return data.message;
    } catch (error: unknown) {
        console.error('Error while adding member to waitlist:', (error as Error).message);
        throw new Error((error as Error).message || 'Failed to add member in waitlist');
    }
}
