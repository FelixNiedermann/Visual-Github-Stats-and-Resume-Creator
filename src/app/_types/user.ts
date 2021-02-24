export interface User {
    login: string;
    avatar_url?: string;
    html_url?: string;
    repos_url?: string;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    hireable?: boolean;
    bio?: string;
    public_repos?: number;
    public_gists?: number;
    followers?: number;
    following?: number;
}
