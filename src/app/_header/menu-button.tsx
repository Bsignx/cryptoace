"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BarChart,
  CreditCard,
  LayoutDashboard,
  LogOut,
  MenuIcon,
  Settings2Icon,
} from "lucide-react";
import Link from "next/link";

export function MenuButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-3 px-4 py-3 flex-col flex">
        <DropdownMenuItem asChild>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center justify-start gap-2">
                <LayoutDashboard className="w-4 h-4" /> Tools
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/dashboard" className="flex gap-2 items-center">
                  <Settings2Icon className="w-4 h-4" /> Portfolio
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center justify-start gap-2">
                <BarChart className="w-4 h-4" /> Analysis
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/browse" className="flex gap-2 items-center">
                  <Settings2Icon className="w-4 h-4" /> Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/api/auth/signout?callbackUrl=/"
                  className="flex gap-2 items-center"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/docs"
            className="flex gap-2 items-center justify-start cursor-pointer pl-0"
          >
            <CreditCard className="w-4 h-4" /> Subscription
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
