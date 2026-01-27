import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import {
  type Achievement,
  achievementsSchema,
} from "@/features/resumes/types/achievement.type";
import { mapAchievementsToFormDefaults } from "../../utils/forms/values.util";

export function useAchievementsForm(achievements: Achievement[]) {
  return useForm<z.infer<typeof achievementsSchema>>({
    resolver: zodResolver(achievementsSchema),
    mode: "onChange",
    defaultValues: {
      achievements: mapAchievementsToFormDefaults(achievements),
    },
  });
}
