"use client";
import { createContext, useContext, ReactNode } from "react";

/**
 * 全ユーザー情報の型定義
 */
export type UserProfile = {
  userId: string;
  name: string;
};

/**
 * Context 本体（デフォルトは null）
 */
const UserContext = createContext<UserProfile | null>(null);

/**
 * Provider コンポーネント
 */
export type UserProviderProps = {
  user: UserProfile;
  /** 子孫要素 */
  children: ReactNode;
};

export const UserProvider = ({ user, children }: UserProviderProps) => (
  <UserContext.Provider value={user}>{children}</UserContext.Provider>
);

/**
 * Return userId,
 */
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within UserProvider");
  }
  return ctx;
}
