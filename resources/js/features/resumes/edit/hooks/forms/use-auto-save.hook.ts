import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import {
  MAX_TAB_INDEX,
  MIN_TAB_INDEX,
  type ResumeEditorForms,
} from "../../types/contexts/resume-editor-context.type";

function submitForms(forms: ResumeEditorForms) {
  Object.values(forms).forEach((form) => {
    form.submit();
  });
}

export function useAutoSaveForms(currentTab: number, forms: ResumeEditorForms) {
  const [debouncedForms] = useDebounce(forms, 5000);
  useEffect(() => {
    if (currentTab < MIN_TAB_INDEX || currentTab > MAX_TAB_INDEX) return;
    submitForms(debouncedForms);
  }, [currentTab, debouncedForms]);
}
