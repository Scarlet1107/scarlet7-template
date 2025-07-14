import AppHeader from "@/components/header/AppHeader";
import { UserProfile, UserProvider } from "@/context/UserContext";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  // Supabaseのユーザーテーブルから情報取得
  const { data, error: userError } = await supabase.auth.getUser();
  if (!data || userError) {
    console.error("ユーザー情報の取得に失敗しました。", userError);
  }
  const user = data?.user;
  if (!user) {
    // ユーザーが取得できなかった場合LPページにリダイレクト
    redirect("/");
  }

  // // もし独自にprofileテーブルを作成した場合はこちらで取得
  // const { data: profileData, error: profileError } = await supabase
  //   .from("profiles")
  //   .select("id, name")
  //   .eq("id", user.id)
  //   .single();

  // if (profileError || !profileData) {
  //   redirect("/");
  // }

  // // 3. UserProfile 型にマッピング
  // const profile: UserProfile = {
  //   userId: profileData.id,
  //   name: profileData.name,
  // };

  return (
    <UserProvider
      user={{
        userId: user?.id ?? "",
        name: user?.user_metadata?.name ?? "",
      }}
    >
      <AppHeader />
      <main className="flex max-w-5xl flex-1 flex-col gap-20 p-5">
        {children}
      </main>
    </UserProvider>
  );
}
