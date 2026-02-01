import {
    createContext,
    type ReactNode,
    useContext,
    useReducer,
} from "react";
import {
    AdminDashboardTab,
    MAX_TAB_INDEX,
    MIN_TAB_INDEX,
    type AdminDashboardContext,
    type AdminDashboardTabAction,
} from "../types/contexts/admin-dashboard-context.type";
import type {User} from "@/features/admin/types/user.type";
import type {Resume} from "@/features/resumes/types/resume.type";

const adminDashboardContext =
    createContext<AdminDashboardContext | undefined>(undefined);

export function useAdminDashboard() {
    const context = useContext(adminDashboardContext);
    if (!context)
        throw new Error(
            "useAdminDashboard must be used within an AdminDashboardProvider",
        );
    return context;
}

function adminDashboardReducer(
    state: AdminDashboardTab,
    action: AdminDashboardTabAction,
): AdminDashboardTab {
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

export function AdminDashboardProvider({
                                           initialTab = AdminDashboardTab.DASHBOARD,
                                           users, resumes,
                                           children,
                                       }: {
    users: User[];
    resumes: Resume[];
    initialTab?: AdminDashboardTab;
    children: ReactNode;
}) {
    const [currentTab, currentTabDispatch] = useReducer(
        adminDashboardReducer,
        initialTab,
    );

    return (
        <adminDashboardContext.Provider
            value={{
                users, resumes,
                currentTab,
                nextTab: () => currentTabDispatch({type: "NEXT_TAB"}),
                previousTab: () =>
                    currentTabDispatch({type: "PREVIOUS_TAB"}),
                setTab: (tab) =>
                    currentTabDispatch({type: "SET_TAB", payload: tab}),
            }}
        >
            {children}
        </adminDashboardContext.Provider>
    );
}