import { createNewPublicUser } from '@/helper/public-user';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';



export async function POST(req: NextRequest) {
    try {
        const organizationId = req.headers.get('x-orgid');
        const UUID = uuidv4();

        if (!UUID) {
            throw new Error('Missing Public User Name');
        }
        const { error, message, data } = await createNewPublicUser(`${organizationId}-${UUID}`, `${organizationId}`);
        return NextResponse.json({ error, message, data });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        console.error('Error in API route:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
