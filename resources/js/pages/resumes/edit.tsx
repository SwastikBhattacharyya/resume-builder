import { usePage } from "@inertiajs/react";
import Tabs from "@/features/resumes/edit/components/tabs";
import { ResumeEditorProvider } from "@/features/resumes/edit/contexts/resume-editor-context";
import { ResumeEditorSidebarLayout } from "@/features/resumes/edit/layouts/sidebars/resume-editor-sidebar.layout";
import type { Resume } from "@/features/resumes/types/resume.type";

type EditProps = {
  data: Resume;
};

export default function Edit({ resume }: { resume: EditProps }) {
  const { url } = usePage();

  return (
    <ResumeEditorProvider resume={resume.data} url={url}>
      <ResumeEditorSidebarLayout>
        <Tabs />
      </ResumeEditorSidebarLayout>
    </ResumeEditorProvider>
  );
}
