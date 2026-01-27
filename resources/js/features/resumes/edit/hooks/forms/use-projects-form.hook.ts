import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import {
  type Project,
  projectsSchema,
} from "@/features/resumes/types/project.type";
import { mapProjectsToFormDefaults } from "../../utils/forms/values.util";

export function useProjectsForm(projects: Project[]) {
  return useForm<z.infer<typeof projectsSchema>>({
    resolver: zodResolver(projectsSchema),
    mode: "onChange",
    defaultValues: {
      projects: mapProjectsToFormDefaults(projects),
    },
  });
}
