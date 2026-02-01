import {Form, type UseFormReturn} from "react-hook-form";
import type z from "zod";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import type {storeResumeSchema} from "../../types/store-resume.type";

export function StoreResumeForm({
                                    form,
                                }: {
    form: UseFormReturn<z.infer<typeof storeResumeSchema>>;
}) {
    return (
        <FormField
            control={form.control}
            name="title"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe's Resume" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    );
}
