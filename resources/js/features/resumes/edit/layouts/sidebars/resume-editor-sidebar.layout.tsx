import type { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ResumeEditorPreview } from "../../components/preview";
import { ResumeEditorSidebar } from "../../components/sidebars/resume-editor-sidebar.component";
import { ResumeEditorLivePreviewLayout } from "../preview/live-preview.layout";

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
        <ResumeEditorLivePreviewLayout>
          <ResumeEditorPreview />
        </ResumeEditorLivePreviewLayout>
      </div>
    </SidebarProvider>
  );
}
