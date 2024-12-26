import { updateMessage } from '@/helper/update-message';
import { NextRequest, NextResponse } from 'next/server';


export async function PATCH(req: NextRequest) {
    try {
        const { messageId, aiResponse, userID } = await req.json();
        const data = await updateMessage(messageId, aiResponse, `truxt`, userID);

        return NextResponse.json({ data });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        console.error('Error in API route:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
