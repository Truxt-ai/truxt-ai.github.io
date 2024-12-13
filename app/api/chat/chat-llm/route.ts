import { NextRequest } from 'next/server';
import { getAnswer } from '@/helper/chat-helper';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        if (!data.org) {
            throw new Error('Error fetching organization data');
        }

        const response = await getAnswer(data.query, data.searchType, `${data.org}`);
        if (!response.body) {
            throw new Error('No response body');
        }

        return new Response(response.body, {
            headers: {
                'Content-Type': 'application/json',
                'Transfer-Encoding': 'chunked'
            }
        });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error('Error occurred:', message);
        throw new Error(message);
    }
};