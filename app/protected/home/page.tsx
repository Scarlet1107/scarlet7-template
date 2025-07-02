import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }
  return (
    <div className="flex w-full flex-1 flex-col gap-12">
      <h1 className="text-4xl">Your App start from Here!</h1>
    </div>
  );
}
