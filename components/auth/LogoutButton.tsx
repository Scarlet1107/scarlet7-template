"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>ログアウト</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ログアウト</DialogTitle>
          <DialogDescription>
            本当にログアウトしますか？
            <br />
            アプリを再度使用するためには、ログインが必要になります。
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">キャンセル</Button>
          </DialogClose>
          <Button onClick={logout}>ログアウト</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
