"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      // Supabase ダッシュボードでリダイレクト URL を設定してください
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn("flex flex-col gap-6 px-4 md:px-0", className)}
      {...props}
    >
      {success ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">メールをご確認ください</CardTitle>
            <CardDescription>
              パスワードリセットの案内を送信しました
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              メールアドレスとパスワードで登録済みの場合、パスワードリセット用のメールが届きます。
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">パスワードをリセット</CardTitle>
            <CardDescription>
              メールアドレスを入力すると、パスワードリセット用のリンクを送信します
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "送信中…" : "リセットメールを送信"}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                すでにアカウントをお持ちですか？{" "}
                <Link
                  href="/auth/login"
                  className="text-primary underline underline-offset-4"
                >
                  ログイン
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
