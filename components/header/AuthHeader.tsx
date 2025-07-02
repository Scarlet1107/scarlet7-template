import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <header className="flex w-screen items-center justify-between gap-4 bg-gray-100 p-8 md:px-16">
      <Link href={"/"} className="text-xl md:text-2xl">
        Scarlet7.net
      </Link>
      <div className="space-x-8">
        <div className="hidden space-x-4 sm:inline">
          <Link
            href="/auth/login"
            className="relative rounded-md px-3 py-2 font-medium text-stone-700 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-500 before:transition-all before:duration-300 hover:text-gray-600 hover:before:w-full"
          >
            ログイン
          </Link>
          <Link
            href="/auth/sign-up"
            className="relative items-center rounded-md px-3 py-2 font-medium text-stone-700 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-500 before:transition-all before:duration-300 before:ease-in-out hover:text-gray-600 hover:before:w-full"
          >
            登録
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default AuthHeader;
