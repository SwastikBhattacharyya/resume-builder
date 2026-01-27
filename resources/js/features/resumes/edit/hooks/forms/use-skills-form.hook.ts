import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import { type Skill, skillsSchema } from "@/features/resumes/types/skill.type";
import { mapSkillsToFormDefaults } from "../../utils/forms/values.util";

export function useSkillsForm(skills: Skill[]) {
  return useForm<z.infer<typeof skillsSchema>>({
    resolver: zodResolver(skillsSchema),
    mode: "onChange",
    defaultValues: {
      skills: mapSkillsToFormDefaults(skills),
    },
  });
}
