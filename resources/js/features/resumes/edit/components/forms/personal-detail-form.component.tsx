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
import { Textarea } from "@/components/ui/textarea";
import type { personalDetailSchema } from "@/features/resumes/types/personal-detail.type";

export function PersonalDetailForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof personalDetailSchema>>;
}) {
  return (
    <>
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="designation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Designation</FormLabel>
            <FormControl>
              <Input placeholder="Full Stack Developer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="profile"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Profile</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I am a passionate full stack developer..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );
}
