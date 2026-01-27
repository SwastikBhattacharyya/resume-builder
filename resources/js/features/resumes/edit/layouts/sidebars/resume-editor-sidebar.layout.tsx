import type { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ResumeEditorSidebar } from "../../components/sidebars/resume-editor-sidebar.component";

export function ResumeEditorSidebarLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SidebarProvider>
      <ResumeEditorSidebar />
      <div className="w-full grid-cols-[1.25fr_1fr] md:grid">
        <div className="flex h-dvh flex-col">
          <SidebarTrigger />
          {children}
        </div>
        <div className="bg-gray-100/20">Preview</div>
      </div>
    </SidebarProvider>
  );
}
