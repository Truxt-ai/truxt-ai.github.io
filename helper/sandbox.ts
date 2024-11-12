interface APIResponse {
    error: string;
    messageId: string;
}
export async function SandBoxCreation(name:string,email: string,docs_link:string,subdomain:string): Promise<APIResponse> {
    try {
        const response = await fetch(`${process.env.CHAT_DB_URL_API}/api/playground`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${process.env.CHAT_DB_TOKEN}`
            },
            body: JSON.stringify({
                name,
                email,
                docs_link,
                subdomain
            })
        });
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        console.error('Error while creating Sandbox:', (error as Error).message);
        throw new Error((error as Error).message || 'Failed to send OTP');
    }
}
