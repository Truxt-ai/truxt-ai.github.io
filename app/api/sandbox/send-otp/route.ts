import { NextRequest, NextResponse } from 'next/server';
import { SendOtpForSandbox } from '@/helper/otp-verify';

export async function POST(req: NextRequest) {
    try {
        const {email } = await req.json();
        if (!email) {
            throw new Error('Email are missing parameters');
        }
        const data = await SendOtpForSandbox(email);

        return NextResponse.json({ data });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        console.error('Error in API route:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
