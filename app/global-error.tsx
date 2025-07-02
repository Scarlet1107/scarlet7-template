// app/global-error.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>重大なエラーが発生しました</CardTitle>
          <CardDescription>エラーメッセージ：{error.message}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" asChild>
            <Link href="/">メインページに戻る</Link>
          </Button>
        </CardContent>
        <CardFooter className="text-sm text-gray-700">
          この問題が一時的なものでない場合、管理者へご連絡ください
        </CardFooter>
      </Card>
    </div>
  );
}
