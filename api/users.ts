const BASE_API_URL = 'https://jsonplaceholder.typicode.com';
export const revalidate = 300 // revalidate at most every 5 minutes (у тракториста)

export interface UserEntity {
    id: string;
    name: string;
    username: string;
    email: string;
}

export const fetchUsers = (): Promise<UserEntity[]> => fetch(`${BASE_API_URL}/users`, {next: {revalidate}}).then(res => res.json())
export const fetchUser = (id: number): Promise<UserEntity> => fetch(`${BASE_API_URL}/users/${id}`, {next: {revalidate}}).then(res => res.json())
