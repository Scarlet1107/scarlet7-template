import AuthHeader from "@/components/header/AuthHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <AuthHeader />
      <div className="flex w-full flex-col items-center px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="mt-12 text-center text-4xl">
          Welcome to my Next.js app with Supabase!
        </h2>
        <div className="mt-12 space-x-8">
          <Button asChild>
            <Link href="/auth/login">ログイン</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="/auth/sign-up">登録</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
