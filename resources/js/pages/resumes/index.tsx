import type { Resume } from "@/features/resumes/types/resume.type";

type IndexProps = {
  resumes: { data: Resume[] };
};

export default function Index({ resumes }: IndexProps) {
  return <>Index</>;
}
