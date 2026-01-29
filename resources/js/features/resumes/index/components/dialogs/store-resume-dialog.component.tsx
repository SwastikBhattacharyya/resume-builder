import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import { StoreResumeDialogLayout } from "../../layouts/dialogs/store-resume-dialog.layout";
import { storeResumeSchema } from "../../types/store-resume.type";
import { StoreResumeForm } from "../forms/store-resume-form.component";

export function StoreResumeDialog() {
  const form = useForm<z.infer<typeof storeResumeSchema>>({
    resolver: zodResolver(storeResumeSchema),
  });

  return (
    <StoreResumeDialogLayout form={form} route={`/resumes`}>
      <StoreResumeForm form={form} />
    </StoreResumeDialogLayout>
  );
}
