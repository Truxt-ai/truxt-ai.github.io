interface WaitListResponse {
    error: string;
    message: string;
}
export async function SendOtpForSandbox(email: string): Promise<WaitListResponse> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CHAT_DB_URL_API}/api/playground/send_otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${process.env.NEXT_PUBLIC_CHAT_DB_TOKEN}`
            },
            body: JSON.stringify({
                email
            })
        });
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        console.error('Error while sending otp to mail:', (error as Error).message);
        throw new Error((error as Error).message || 'Failed to send OTP');
    }
}

async function VerifySentOTP(email: string, code: string): Promise<WaitListResponse> {
    try {
        console.log(email,code);
        const response = await fetch(`${process.env.CHAT_DB_URL_API}/api/playground/verify_otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': `${process.env.CHAT_DB_TOKEN}`
            },
            body: JSON.stringify({
                email, code
            })
        });
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        console.error('Error while verify otp:', (error as Error).message);
        throw new Error((error as Error).message || 'Failed to add member in waitlist');
    }
}

export { VerifySentOTP };
