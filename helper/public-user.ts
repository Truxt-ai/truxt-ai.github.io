import { AuthUserResponse } from "@/types/public-user";
export async function createNewPublicUser(username: string, organizationId:string): Promise<AuthUserResponse> {
    try {
        const response = await fetch(`${process.env.CHAT_DB_URL_API}/api/public_users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-orgid': `${organizationId}`,
                'x-token': `${process.env.CHAT_DB_TOKEN}`,
            },
            body: JSON.stringify({
                name: username,
            }),
        });
        
        if (!response.ok) {
            throw new Error('Could not create new user');
        }

        const data = await response.json();
        return {
            error: data.error,
            message: data.message,
            data:data.data,
        };
    } catch (error: unknown) {
        console.error('Error in creating new public user:', (error as Error).message);

        return {
            error: (error as Error).message || 'Failed to create a new public user',
            message: '',
            data: null,
        };
    }
}
