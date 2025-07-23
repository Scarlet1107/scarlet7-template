// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function NotFoundPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Card className="aspect-auto w-2/3 max-w-lg text-center">
        <CardHeader>
          <CardTitle className="text-4xl">
            404 - ページが見つかりません
          </CardTitle>
          <CardDescription className="mt-2 text-lg">
            お探しのページは存在しないか、移動した可能性があります。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/">ページへ戻る</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
