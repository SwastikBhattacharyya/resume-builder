import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import {
  MAX_TAB_INDEX,
  MIN_TAB_INDEX,
} from "../../types/contexts/resume-editor-context.type";

export function BaseTabLayout({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
}) {
  const { currentTab, nextTab, previousTab } = useResumeEditor();
  const isTabFirst = currentTab === MIN_TAB_INDEX;
  const isTabLast = currentTab === MAX_TAB_INDEX;

  return (
    <div className="flex flex-1 flex-col gap-y-4 overflow-hidden">
      <header className="flex flex-col gap-y-1 border-b px-4 pb-2">
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="text-muted-foreground">{subtitle}</p>
      </header>
      <ScrollArea className="items-center-safe mx-1 flex min-h-0 flex-1 flex-col px-4">
        {children}
      </ScrollArea>
      <div
        className={cn("grid grid-cols-2 border-t p-4", {
          "grid-cols-1": isTabFirst || isTabLast,
        })}
      >
        <Button
          size="lg"
          className={cn("w-24 cursor-pointer justify-self-start font-bold", {
            hidden: isTabFirst,
          })}
          onClick={() => previousTab()}
        >
          Previous
        </Button>
        <Button
          size="lg"
          className={cn("justify-self-end-safe w-24 cursor-pointer font-bold", {
            hidden: isTabLast,
          })}
          onClick={() => nextTab()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
