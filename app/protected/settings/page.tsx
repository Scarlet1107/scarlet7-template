import { LogoutButton } from "@/components/auth/LogoutButton";

export default async function ProtectedPage() {
  return (
    <div className="flex w-full flex-1 flex-col gap-12">
      <LogoutButton />
    </div>
  );
}
