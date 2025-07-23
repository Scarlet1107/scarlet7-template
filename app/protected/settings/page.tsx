import { LogoutButton } from "@/components/auth/LogoutButton";
import UserInfo from "./UserInfo";

export default async function ProtectedPage() {
  return (
    <div className="flex w-full flex-1 flex-col gap-12">
      <UserInfo />
      <LogoutButton />
    </div>
  );
}
