import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";

const LpHeader = () => {
  return (
    <header className="flex w-screen items-center justify-between gap-4 bg-gray-100 p-8 md:px-16">
      <Link href={"/"} className="text-xl md:text-2xl">
        Scarlet7.net
      </Link>
      <ThemeSwitcher />
    </header>
  );
};

export default LpHeader;
