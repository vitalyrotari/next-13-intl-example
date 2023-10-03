import {Metadata, ResolvingMetadata} from 'next'
import {fetchUser} from "@/api/users";
import {ClientOnly} from "@/components/ClientOnly";

type UserDetailsPageProps = {
    params: { locale: string, id: number }
}

export async function generateMetadata(
    {params}: UserDetailsPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const locale = params.locale
    const user = await fetchUser(params.id);

    return {
        title: `${locale} / ${user.name} - Profile`,
    }
}

export default async function UserDetailsPage({params}: UserDetailsPageProps) {
    const user = await fetchUser(params.id);

    return (
        <div className="flex flex-col gap-4">
            <h2>{user.name} ({user.email})</h2>
            <ClientOnly title={user.username}/>
        </div>
    )
}