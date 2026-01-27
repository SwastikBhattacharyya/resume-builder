import { toast } from "sonner";

export function savedResumeToast() {
  toast.success("Saved Successfully", {
    duration: 2000,
    position: "bottom-left",
  });
}
