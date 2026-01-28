import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import { Accordion } from "@/components/ui/accordion";
import { Form } from "@/components/ui/form";

export function AccordionTabLayout<T extends FieldValues>({
  form,
  openAccordions,
  setOpenAccordions,
  children,
}: {
  form: UseFormReturn<T>;
  openAccordions: string[];
  setOpenAccordions: Dispatch<SetStateAction<string[]>>;
  children: ReactNode;
}) {
  const handleAccordionChange = (values: string[]) => setOpenAccordions(values);

  return (
    <section>
      <Form {...form}>
        <form
          className="flex flex-col gap-y-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Accordion
            className="flex flex-col gap-y-3"
            type="multiple"
            value={openAccordions}
            onValueChange={handleAccordionChange}
          >
            {children}
          </Accordion>
        </form>
      </Form>
    </section>
  );
}
