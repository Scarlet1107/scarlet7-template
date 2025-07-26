import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl mb-2">メールをご確認ください</CardTitle>
          <CardDescription>ご登録ありがとうございます</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            登録が完了しました。ログインする前に、
            アカウント確認のためメールをご確認ください。
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            ※ もしメールが見つからない場合は、迷惑メールフォルダもご確認ください。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
