const baseURL = process.env.LLM_API_URL as string;

interface RequestBody {
    messages: {
        role: 'system' | 'user';
        content: string;
    }[];
    stream: boolean;
    use_context: boolean;
    include_sources: boolean;
    mode: string;
}

const getAnswer = async (inputQuery: string, modeIndex: string, organizationId: string) => {
    const body: RequestBody = {
        messages: [
            {
                role: 'user',
                content: inputQuery
            }
        ],
        stream: false,
        use_context: false,
        include_sources: false,
        mode: modeIndex,
    };

    const response = await fetch(`${baseURL}/v1/chat/stream`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-orgid': organizationId
        },
        body: JSON.stringify(body)
    });

    return response;
};

export { getAnswer };