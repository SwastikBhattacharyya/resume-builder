import { router } from "@inertiajs/react";
import { LucidePlus } from "lucide-react";
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

export function StoreResumeDialogLayout<T extends FieldValues>({
  form,
  route,
  children,
}: {
  form: UseFormReturn<T>;
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
        <Button className="justify-center-safe flex cursor-pointer gap-x-2">
          <LucidePlus />
          <span>Create New Resume</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[min(600px,80vh)] flex-col gap-0 p-0">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4">Add Resume</DialogTitle>
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
