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
    message_id: string;
}

const vectorDB = process.env.VECTOR_DB || "qdrant"

const getAnswer = async (inputQuery: string, modeIndex: string, organizationId: string, messageId: string) => {
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
        message_id: messageId
    };

    const response = await fetch(`${baseURL}/v1/chat/stream?db=${vectorDB}`, {
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
