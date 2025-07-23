"use client";
import { useUser } from "@/context/UserContext";
import React from "react";

const User = () => {
  const { userId, name } = useUser();
  return (
    <div className="rounded-lg border bg-gray-50 p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">
        Layout.tsxからグローバルに取ってきたユーザー情報
      </h2>
      <p className="text-lg">User ID: {userId}</p>
      <p className="text-lg">Name: {name}</p>
    </div>
  );
};

export default User;
