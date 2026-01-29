import { router } from "@inertiajs/react";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function DeleteResumeDialog({ id }: { id: string }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="cursor-pointer"
          variant="destructive"
          size="icon-sm"
          type="button"
        >
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Resume</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure? This action will permanently delete the resume.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer focus-visible:ring-0">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer bg-red-500 hover:bg-red-600 focus-visible:bg-red-600 focus-visible:ring-0"
            onClick={() => router.delete(`/resumes/${id}`)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
