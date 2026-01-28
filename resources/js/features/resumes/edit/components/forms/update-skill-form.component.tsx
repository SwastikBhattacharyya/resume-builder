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
import type { skillsSchema } from "@/features/resumes/types/skill.type";

export default function UpdateSkillForm({
  form,
  index,
}: {
  form: UseFormReturn<z.infer<typeof skillsSchema>>;
  index: number;
}) {
  return (
    <FormField
      control={form.control}
      name={`skills.${index}.name`}
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
