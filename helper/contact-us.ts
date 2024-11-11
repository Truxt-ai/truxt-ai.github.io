interface ContactSupportTicket {
    error: string;
    messageId: string;
}
export async function AddNewContactSupportTicket(name: string, email: string, subject: string, comments: string): Promise<ContactSupportTicket> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CHAT_DB_URL_API}/api/contact/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${process.env.NEXT_PUBLIC_CHAT_DB_TOKEN}`
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                comments
            })
        });
        const data = await response.json();
        return data.message;
    } catch (error: unknown) {
        console.error('Error while adding contact support ticket:', (error as Error).message);
        throw new Error((error as Error).message || 'Failed to add contact support ticket');
    }
}
