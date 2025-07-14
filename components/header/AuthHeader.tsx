"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AuthHeader = () => {
  const pathname = usePathname();

  const links = [
    {
      href: "/auth/login",
      label: "ログイン",
    },
    {
      href: "/auth/sign-up",
      label: "登録",
    },
  ];

  return (
    <header className="flex w-full items-center justify-between gap-4 bg-gray-50 p-4 shadow-sm md:px-16">
      <Link href={"/"} className="text-xl md:text-2xl">
        <Image src={"/images/logo.png"} alt="PARADIA" height={40} width={80} />
      </Link>
      <div className="space-x-8">
        <div className="hidden space-x-4 sm:inline">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-3 py-2 font-medium before:absolute before:bottom-0 before:left-0 before:h-[2px] before:transition-all before:duration-300 ${
                  isActive
                    ? "text-orange-600 before:w-full before:bg-orange-500"
                    : "text-stone-700 before:w-0 before:bg-orange-500 hover:text-orange-600 hover:before:w-full"
                } `}
              >
                {link.label}とあるNext.jsのプロジェクトで、npm run
                formatというコマンドを作った。しかしこのフォーマットが自分の開発環境のVSCodeのフォーマットと若干違う。内部では同じVTRを使っているはずなのに、キャドウが違うのはどうしたのか。
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
