import { AddNewMemberInWaitList } from '@/helper/waitlist';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { name, email } = await req.json();
        if (!name || !email) {
            throw new Error('Name and Email are missing parameters');
        }
        const data = await AddNewMemberInWaitList(name, email);

        return NextResponse.json({ data });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        console.error('Error in API route:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
