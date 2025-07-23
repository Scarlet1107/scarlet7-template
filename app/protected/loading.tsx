import { Skeleton } from "@/components/ui/skeleton";

// 見出し文字と3つのカードスケルトンを表示
// アプリ画面応じて変更推奨
export default function Loading() {
  return (
    <div className="flex w-screen max-w-full flex-col gap-8 p-5">
      <Skeleton className="h-10 w-1/3 rounded-md" />

      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="w-full space-y-3 rounded-lg border p-4 shadow-xs"
        >
          <Skeleton className="h-6 w-2/3 rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
        </div>
      ))}
    </div>
  );
}
