import {
  BriefcaseBusiness,
  FileBadge,
  FolderGit2,
  type LucideIcon,
  Phone,
  School,
  Star,
  User2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar as SidebarRoot,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";

const items: { title: string; tab: ResumeEditorTab; icon: LucideIcon }[] = [
  {
    title: "Personal Details",
    tab: ResumeEditorTab.PERSONAL_DETAILS,
    icon: User2,
  },
  {
    title: "Contact Details",
    tab: ResumeEditorTab.CONTACT_DETAILS,
    icon: Phone,
  },
  {
    title: "Education Details",
    tab: ResumeEditorTab.EDUCATION_DETAILS,
    icon: School,
  },
  {
    title: "Work Experiences",
    tab: ResumeEditorTab.WORK_EXPERIENCES,
    icon: BriefcaseBusiness,
  },
  {
    title: "Projects",
    tab: ResumeEditorTab.PROJECTS,
    icon: FolderGit2,
  },
  {
    title: "Skills",
    tab: ResumeEditorTab.SKILLS,
    icon: Star,
  },
  {
    title: "Achievements",
    tab: ResumeEditorTab.ACHIEVEMENTS,
    icon: FileBadge,
  },
];

export function ResumeEditorSidebar() {
  const { currentTab, setTab } = useResumeEditor();

  return (
    <SidebarRoot>
      <SidebarHeader>Resume Editor</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={cn(
                      "cursor-pointer justify-start border-2 border-transparent bg-transparent py-5 transition-colors duration-200 hover:bg-primary/30 focus-visible:bg-primary/30 focus-visible:ring-0 focus-visible:ring-offset-0 active:bg-primary/30",
                      {
                        "border-primary bg-primary/30!":
                          currentTab === item.tab,
                      },
                    )}
                    isActive={currentTab === item.tab}
                    asChild
                  >
                    <Button onClick={() => setTab(item.tab)}>
                      <item.icon />
                      <span className="font-bold">{item.title}</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarRoot>
  );
}
