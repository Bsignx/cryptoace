import { Lines } from "@/app/(coming-soon)/coming-soon";
import { ComingSoonHeader } from "@/app/(coming-soon)/header";
import { appConfig } from "@/app-config";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative dark:bg-background shadow-md">
      {/* <Lines /> */}
      {appConfig.mode === "comingSoon" && <ComingSoonHeader />}
      <div className="relative z-20 mx-auto container prose dark:prose-invert py-12">
        {children}
      </div>
    </div>
  );
}
