"use client";
import { useUser } from "@/context/UserContext";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * チュートリアル目的
 * クライアントコンポーネントであれば、useUserでユーザー情報をどこでも取得できます。
 * データの取得方法だけ確認したら自由に消してください。
 */

const UserInfo = () => {
  const { userId, name } = useUser();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Layout.tsxからグローバルに取ってきたユーザー情報</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">userId: {userId}</p>
        <p className="text-lg">name: {name}</p>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
