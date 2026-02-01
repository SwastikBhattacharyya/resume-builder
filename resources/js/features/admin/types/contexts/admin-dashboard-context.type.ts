import type {User} from "@/features/admin/types/user.type";
import type {Resume} from "@/features/resumes/types/resume.type";

export enum AdminDashboardTab {
    DASHBOARD = 0,
    USERS = 1,
    RESUMES = 2,
}

export const MIN_TAB_INDEX = AdminDashboardTab.DASHBOARD;
export const MAX_TAB_INDEX = AdminDashboardTab.RESUMES;

export type AdminDashboardTabAction =
    | { type: "NEXT_TAB" }
    | { type: "PREVIOUS_TAB" }
    | { type: "SET_TAB"; payload: AdminDashboardTab };

export type AdminDashboardContext = {
    users: User[];
    resumes: Resume[];
    currentTab: AdminDashboardTab;
    nextTab: () => void;
    previousTab: () => void;
    setTab: (tab: AdminDashboardTab) => void;
};