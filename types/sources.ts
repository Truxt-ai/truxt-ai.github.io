export interface Sources {
    description: string;
    url: string;
    type: string;
    id: string;
    title: string;
}

export interface SourcesResponse {
    sources: Sources[];
    created_at: string;
}