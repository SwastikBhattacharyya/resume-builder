import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";

export function currentBrowserTab(url: string) {
  const params = new URLSearchParams(url.split("?")[1]);
  const tabParam = params.get("tab");
  const tabNumber = Number(tabParam);

  if (Number.isInteger(tabNumber) && ResumeEditorTab[tabNumber] !== undefined)
    return tabNumber as ResumeEditorTab;

  return ResumeEditorTab.PERSONAL_DETAILS;
}
