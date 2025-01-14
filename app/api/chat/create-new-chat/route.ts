import { createNewChat } from '@/helper/create-chat';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    try {
        const { query, searchType, userID } = await req.json();
        if (!query || !searchType || !userID) {
            throw new Error('Query and search type and USERID are required');
        }
        const { chatId, messageId } = await createNewChat(query, searchType, `truxt`, userID);
        return NextResponse.json({ chatId, messageId });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        console.error('Error in API route:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
