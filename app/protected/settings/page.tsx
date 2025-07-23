import { LogoutButton } from "@/components/auth/LogoutButton";
import User from "./User";

export default async function ProtectedPage() {
  return (
    <div className="flex w-full flex-1 flex-col gap-12">
      <LogoutButton />
      <User />
    </div>
  );
}
