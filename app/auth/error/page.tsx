import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">エラーが発生しました</CardTitle>
            </CardHeader>
            <CardContent>
              {params?.error ? (
                <p className="text-muted-foreground text-sm">
                  Code error: {params.error}
                </p>
              ) : (
                <p className="text-muted-foreground text-sm">
                  エラーコードがありません。
                  <br />
                  何か問題が発生した場合は、サポートにお問い合わせください。
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
