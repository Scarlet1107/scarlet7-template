import AppHeader from "@/components/header/AppHeader";
import { UserProvider } from "@/context/UserContext";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;
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
    // ここで渡しているUser情報は仮。metadataにデータを入れる処理は書いてないので、profileテーブルなどを作成しその情報を渡すことを推奨。
    <UserProvider
      user={{
        userId: user?.sub,
        name: user?.user_metadata?.name,
      }}
    >
      <AppHeader />
      <main className="mb-14 flex flex-1 flex-col px-4 py-6 sm:mb-0 md:px-6 md:py-8">
        {children}
      </main>
    </UserProvider>
  );
}
