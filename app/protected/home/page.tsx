import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;
  if (!user) {
    redirect("/auth/login");
  }
  return (
    <div className="mx-auto flex w-full flex-1 flex-col gap-8 sm:gap-12">
      <h1 className="text-2xl font-bold break-words sm:text-4xl">
        Happy Hacking! 🚀
      </h1>
      {user && (
        <div className="bg-card w-full rounded-lg border p-4 shadow-md sm:p-6">
          <h2 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
            ログインしているユーザーのデータ
          </h2>
          <div className="bg-background overflow-x-auto rounded p-3">
            <pre className="text-xs break-all whitespace-pre-wrap sm:text-sm">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
