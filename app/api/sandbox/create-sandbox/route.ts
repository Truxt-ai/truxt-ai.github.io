import { NextRequest, NextResponse } from 'next/server';
import { SandBoxCreation } from '@/helper/sandbox';

export async function POST(req: NextRequest) {
    try {
        const { name,email,docsLink,subdomain } = await req.json();
        if (!email) {
            throw new Error('Name, Email, Docs URL and OTP are missing parameters');
        }
        const data = await SandBoxCreation(name,email,docsLink,subdomain);

        return NextResponse.json({ data });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        console.error('Error in API route:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
