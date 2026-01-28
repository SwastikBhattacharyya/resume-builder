import { router } from "@inertiajs/react";
import type {
  DeepMap,
  DeepPartial,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

export function submitForm<T extends FieldValues>({
  form,
  route,
  onSuccess,
}: {
  form: UseFormReturn<T>;
  route: string;
  onSuccess?: () => void;
}) {
  if (!form.formState.isDirty) return;
  form.handleSubmit((values) =>
    router.put(route, values, {
      ...(onSuccess && { onSuccess }),
    }),
  )();
  form.reset(form.getValues());
}

export function submitArrayForm<T extends FieldValues>({
  form,
  fieldName,
  route,
  onSuccess,
}: {
  form: UseFormReturn<T>;
  fieldName: keyof Partial<Readonly<DeepMap<DeepPartial<T>, boolean>>> &
    FieldPath<T>;
  route: (index: number) => string;
  onSuccess?: () => void;
}) {
  const { dirtyFields } = form.formState;
  if (!dirtyFields[fieldName]) return;
  const values = form.getValues(fieldName);
  (dirtyFields[fieldName] as T[]).forEach((field, index) => {
    if (!field) return;
    const education = values[index];
    router.put(route(index), education, {
      ...(onSuccess && { onSuccess }),
    });
  });
}
