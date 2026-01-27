import { PDFDownloadLink } from "@react-pdf/renderer";
import { LucideDownload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChronicleTemplatePdf } from "@/features/resumes/templates/components/pdf/chronicle-template-pdf.component";
import { useResumeEditor } from "../../contexts/resume-editor-context";

export function PdfDownloadButton() {
  const { formsData: data } = useResumeEditor();

  return (
    <PDFDownloadLink document={<ChronicleTemplatePdf data={data} />}>
      <Button className="h-8 cursor-pointer">
        <LucideDownload />
      </Button>
    </PDFDownloadLink>
  );
}
