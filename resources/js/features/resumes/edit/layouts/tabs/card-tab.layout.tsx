import type { ReactNode } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

export function CardTabLayout<T extends FieldValues>({
  form,
  onSubmit,
  children,
}: {
  form: UseFormReturn<T>;
  onSubmit: (values: T) => void;
  children: ReactNode;
}) {
  return (
    <section>
      <Card className="bg-card/50 py-8 shadow-none">
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit(onSubmit);
              }}
            >
              <div className="flex flex-col gap-y-3">{children}</div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
