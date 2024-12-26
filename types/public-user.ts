export interface AuthUserResponse {
    error: string;
    message: string;
    data: { id: number; name: string } | null;
}
