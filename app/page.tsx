import AuthHeader from "@/components/header/AuthHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <AuthHeader />
      <h2 className="text-4xl">Welcome to my Next.js app with Supabase!</h2>
      <div className="mt-12 space-x-8">
        <Button asChild>
          <Link href="/auth/login">ログイン</Link>
        </Button>
        <Button asChild>
          <Link href="/auth/sign-up">登録</Link>
        </Button>
      </div>
    </>
  );
}
