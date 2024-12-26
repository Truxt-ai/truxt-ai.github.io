// import { NextRequest } from 'next/server';
// import { getAnswer } from '@/helper/chat-helper';

// export async function POST(req: NextRequest) {
//     try {
//         const data = await req.json();
//         const response = await getAnswer(data.query, data.searchType, `truxt`);
//         if (!response.body) {
//             throw new Error('No response body');
//         }

//         return new Response(response.body, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Transfer-Encoding': 'chunked'
//             }
//         });
//     } catch (err: unknown) {
//         const message = err instanceof Error ? err.message : String(err);
//         console.error('Error occurred:', message);
//         throw new Error(message);
//     }
// };
import { getAnswer } from '@/helper/chat-helper';
import { NextRequest } from 'next/server';


export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const response = await getAnswer(data.query, data.searchType, `truxt`, data.messageId);
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
}
