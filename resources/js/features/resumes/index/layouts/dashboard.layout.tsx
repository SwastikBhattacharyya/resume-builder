import type { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResumesDashboardFooter } from "../components/footer.component";
import { ResumesDashboardHeader } from "../components/header.component";
import { ResumesDashboardNav } from "../components/nav.component";

export function ResumesDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <ResumesDashboardNav />
      <div className="flex flex-1 flex-col overflow-hidden px-[5dvw]">
        <ResumesDashboardHeader />
        <ScrollArea className="flex-1 overflow-hidden">{children}</ScrollArea>
      </div>
      <ResumesDashboardFooter />
    </div>
  );
}
