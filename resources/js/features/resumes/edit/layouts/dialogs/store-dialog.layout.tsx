import { router } from "@inertiajs/react";
import { LucidePlusCircle } from "lucide-react";
import { type ReactNode, useState } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";

export function StoreDialogLayout<T extends FieldValues>({
  form,
  resource,
  route,
  children,
}: {
  form: UseFormReturn<T>;
  resource: string;
  route: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const onSubmit = (values: T) => {
    router.post(route, values, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="items-center-safe justify-center-safe flex w-full cursor-pointer gap-x-2 rounded-md border-2 border-muted border-dashed py-3 outline-none transition-colors duration-200 hover:border-muted-foreground focus-visible:border-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          type="button"
        >
          <LucidePlusCircle className="text-muted-foreground" />
          <p className="font-bold text-muted-foreground">Add {resource}</p>
        </button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[min(600px,80vh)] flex-col gap-0 p-0">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4">
            Add {resource}
          </DialogTitle>
          <ScrollArea className="flex max-h-full flex-col overflow-hidden">
            <DialogDescription asChild>
              <div className="p-6">
                <Form {...form}>
                  <form
                    className="flex flex-col gap-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {children}
                  </form>
                </Form>
              </div>
            </DialogDescription>
          </ScrollArea>
        </DialogHeader>
        <DialogFooter className="flex-row items-center justify-end border-t px-6 py-4">
          <Button
            className="cursor-pointer"
            type="button"
            onClick={form.handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
