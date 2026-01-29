import { ResumesTable } from "@/features/resumes/index/components/resumes-table.component";
import { ResumesDashboardLayout } from "@/features/resumes/index/layouts/dashboard.layout";
import type { Resume } from "@/features/resumes/types/resume.type";

type IndexProps = {
  resumes: { data: Resume[] };
};

export default function Index({ resumes }: IndexProps) {
  return (
    <ResumesDashboardLayout>
      <ResumesTable resumes={resumes.data} />
    </ResumesDashboardLayout>
  );
}
