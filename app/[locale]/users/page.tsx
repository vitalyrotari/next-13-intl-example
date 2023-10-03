import {Metadata, ResolvingMetadata} from 'next'
import {fetchUsers} from "@/api/users";
import {NavigationLink} from "@/components/NavigationLink";

type UserPageProps = {
    params: { locale: string }
}

export async function generateMetadata(
    {params}: UserPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const locale = params.locale

    return {
        title: `List of user for ${locale} language`,
    }
}

export default async function UsersPage({params}: UserPageProps) {
    const users = await fetchUsers()

    return (
        <div>
            <h2>Users ({params.locale ?? 'Unknown locale'})</h2>
            {users?.length ? users.map((user) => (
                <div key={user.username}>
                    <NavigationLink href={`/users/${user.id}`}>{user.name} ({user.email})</NavigationLink>
                </div>
            )) : null}
        </div>
    )
}