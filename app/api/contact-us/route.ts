import { AddNewContactSupportTicket } from '@/helper/contact-us';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject,comments } = await req.json();
        if (!name || !email) {
            throw new Error('Name and Email are missing parameters');
        }
        const data = await AddNewContactSupportTicket(name, email,subject,comments);

        return NextResponse.json({ data });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        console.error('Error in API route:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
