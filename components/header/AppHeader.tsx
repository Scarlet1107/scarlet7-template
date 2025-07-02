import { Link } from "lucide-react";
import React from "react";

const AppHeader = () => {
  return (
    <header className="flex w-screen items-center justify-between gap-4 bg-gray-100 p-8 md:px-16">
      <Link href={"/protected/home"} className="text-xl md:text-2xl">
        Scarlet7.net
      </Link>
    </header>
  );
};
export default AppHeader;
