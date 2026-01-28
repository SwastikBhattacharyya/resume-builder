import { ChronicleTemplatePreview } from "@/features/resumes/templates/components/preview/chronicle-template-preview.component";
import { useResumeEditor } from "../../contexts/resume-editor-context";

export function ResumeEditorPreview() {
  const { formsData } = useResumeEditor();

  return <ChronicleTemplatePreview data={formsData} />;
}
