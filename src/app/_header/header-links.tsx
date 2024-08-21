"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useMediaQuery from "@/hooks/use-media-query";
import {
  LayoutDashboard,
  BarChart,
  CreditCard,
  Settings2Icon,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderLinks({ isAuthenticated }: { isAuthenticated: boolean }) {
  const path = usePathname();
  const { isMobile } = useMediaQuery();
  const isLandingPage = path === "/";

  if (isMobile) return null;

  return (
    <>
      {!isLandingPage && isAuthenticated && (
        <div className="flex items-center gap-9">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center justify-start gap-2">
                <LayoutDashboard className="w-4 h-4" /> Tools
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  href="/tools/portfolios"
                  className="flex gap-2 items-center"
                >
                  <Settings2Icon className="w-4 h-4" /> Portfolio
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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

          <Button
            variant={"link"}
            asChild
            className="flex items-center justify-start gap-2 pl-0"
          >
            <Link href={"/docs"}>
              <CreditCard className="w-4 h-4" /> Subscription
            </Link>
          </Button>
        </div>
      )}

      {(isLandingPage || !isAuthenticated) && (
        <div className="flex gap-4">
          <Button variant={"link"} asChild>
            <Link href="/#features">Features</Link>
          </Button>

          <Button variant={"link"} asChild>
            <Link href="/#pricing">Pricing</Link>
          </Button>

          {/* <Button variant={"link"} asChild>
            <Link href={"/browse"}>Browse Groups</Link>
          </Button> */}
        </div>
      )}
    </>
  );
}
