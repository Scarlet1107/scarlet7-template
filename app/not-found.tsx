// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function NotFoundPage() {
    return (
        <main className="flex justify-center items-center w-full h-screen">
            <Card className="max-w-md text-center w-1/2 aspect-auto">
                <CardHeader>
                    <CardTitle className="text-4xl">404 - ページが見つかりません</CardTitle>
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
