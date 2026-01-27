import {
  createContext,
  type ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import type { Resume } from "../../types/resume.type";
import { useArrayFormReset } from "../hooks/forms/use-array-form-reset.hook";
import { useAutoSaveForms } from "../hooks/forms/use-auto-save.hook";
import { useEditorFormsData } from "../hooks/forms/use-editor-form-data.hook";
import { useSaveCurrentTab } from "../hooks/tabs/use-save-current-tab.hook";
import {
  MAX_TAB_INDEX,
  MIN_TAB_INDEX,
  type ResumeEditorContext,
  type ResumeEditorForms,
  type ResumeEditorTab,
  type ResumeEditorTabAction,
} from "../types/contexts/resume-editor-context.type";
import { buildResumeEditorForms } from "../utils/forms/build.util";
import { currentBrowserTab } from "../utils/tabs/current-tab.util";

const resumeEditorContext = createContext<undefined | ResumeEditorContext>(
  undefined,
);

export function useResumeEditor() {
  const context = useContext(resumeEditorContext);
  if (!context)
    throw new Error(
      "useResumeEditor must be used within a ResumeEditorProvider",
    );
  return context;
}

function resumeEditorReducer(
  state: ResumeEditorTab,
  action: ResumeEditorTabAction,
): ResumeEditorTab {
  switch (action.type) {
    case "NEXT_TAB":
      return state < MAX_TAB_INDEX ? state + 1 : state;
    case "PREVIOUS_TAB":
      return state > MIN_TAB_INDEX ? state - 1 : state;
    case "SET_TAB":
      return action.payload;
    default:
      return state;
  }
}

export function ResumeEditorProvider({
  resume,
  url,
  children,
}: {
  resume: Resume;
  url: string;
  children: ReactNode;
}) {
  const forms: ResumeEditorForms = buildResumeEditorForms(resume);
  const formsData = useEditorFormsData(forms);
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const [currentTab, currentTabDispatch] = useReducer(
    resumeEditorReducer,
    currentBrowserTab(url),
  );

  useSaveCurrentTab(currentTab);
  useAutoSaveForms(currentTab, forms);
  useArrayFormReset(resume, forms);

  return (
    <resumeEditorContext.Provider
      value={{
        resume,
        formsData,
        forms,
        openAccordions,
        setOpenAccordions,
        currentTab,
        nextTab: () => currentTabDispatch({ type: "NEXT_TAB" }),
        previousTab: () => currentTabDispatch({ type: "PREVIOUS_TAB" }),
        setTab: (tab) => currentTabDispatch({ type: "SET_TAB", payload: tab }),
      }}
    >
      {children}
    </resumeEditorContext.Provider>
  );
}
