import { LogoutButton } from '@/components/auth/LogoutButton';

export default async function ProtectedPage() {

    return (
        <div className="flex-1 w-full flex flex-col gap-12">
            <LogoutButton />
        </div>
    );
}
