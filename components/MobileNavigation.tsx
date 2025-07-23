"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  navItems: {
    href: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    label: string;
  }[];
};
export const MobileNavigation = ({ navItems }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="border-border bg-background fixed right-0 bottom-0 left-0 z-50 w-screen border-t shadow-md sm:hidden">
      <ul className="flex items-center justify-around p-2">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link href={href}>
                <div
                  className={cn(
                    "bg-card hover:bg-muted flex aspect-square h-13 w-13 flex-col items-center justify-center rounded-full text-xs transition-all duration-200 ease-in-out",
                  )}
                >
                  <Icon
                    className={cn(
                      "mb-1 h-5 w-5",
                      isActive ? "text-primary" : "text-primary/75",
                    )}
                  />
                  <span
                    className={cn(
                      "text-[10px]",
                      isActive ? "text-primary font-medium" : "text-primary/75",
                    )}
                  >
                    {label}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
