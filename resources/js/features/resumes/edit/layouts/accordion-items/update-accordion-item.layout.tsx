import type { ReactNode } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export function UpdateAccordionItemLayout({
  display,
  value,
  children,
}: {
  display: string;
  value: string;
  children: ReactNode;
}) {
  return (
    <Card className="bg-card/50 p-0">
      <AccordionItem value={value}>
        <AccordionTrigger className="items-center-safe relative flex h-full w-full rounded-b-none p-0 px-4 py-4 font-bold text-lg focus-visible:ring-0 data-[state=open]:border-b">
          {display}
        </AccordionTrigger>
        <AccordionContent className="py-4">
          <CardContent>
            <div className="flex flex-col gap-y-4">{children}</div>
          </CardContent>
        </AccordionContent>
      </AccordionItem>
    </Card>
  );
}
