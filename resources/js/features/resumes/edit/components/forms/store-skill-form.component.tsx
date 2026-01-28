import type { UseFormReturn } from "react-hook-form";
import type z from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { skillSchema } from "@/features/resumes/types/skill.type";

export function StoreSkillForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof skillSchema>>;
}) {
  return (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input placeholder="HTML, CSS, JavaScript" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
