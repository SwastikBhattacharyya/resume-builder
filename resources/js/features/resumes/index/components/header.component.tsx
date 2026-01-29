import { Input } from "@/components/ui/input";
import { StoreResumeDialog } from "./dialogs/store-resume-dialog.component";

export function ResumesDashboardHeader() {
  return (
    <header className="flex flex-col gap-y-3 py-8">
      <div className="flex flex-col gap-y-1">
        <h1 className="font-bold text-5xl">My Resumes</h1>
        <p className="text-muted-foreground">
          Manage, edit and download your professional resumes.
        </p>
      </div>
      <div className="flex w-full justify-between gap-x-2">
        <Input className="max-w-56" placeholder="Search Resumes..." />
        <StoreResumeDialog />
      </div>
    </header>
  );
}
