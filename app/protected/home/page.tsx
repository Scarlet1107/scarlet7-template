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
    <div className="flex w-full flex-1 flex-col gap-8 px-4 py-6 sm:gap-12 sm:px-8">
      <h1 className="break-words text-2xl sm:text-4xl">
        このアプリはここから始まる...
      </h1>
      {user && (
        <div className="w-full rounded-lg border bg-gray-50 p-4 shadow-md sm:p-6">
          <h2 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
            ログインしているユーザーのデータ
          </h2>
          <pre className="overflow-x-auto rounded bg-white p-3 text-xs sm:p-4 sm:text-sm">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
