import { createNewMessage } from '@/helper/create-new-message';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    try {
        const { chatId, query, searchType, userID } = await req.json();
        if (!query || !searchType || !chatId || !userID) {
            throw new Error('Query and search type and Chat ID are required');
        }
        const data = await createNewMessage(chatId, query, searchType, `truxt`, userID);

        return NextResponse.json({ data });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        console.error('Error in API route:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
