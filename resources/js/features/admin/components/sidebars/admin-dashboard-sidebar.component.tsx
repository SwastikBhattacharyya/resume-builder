import {
    LayoutDashboard,
    Users,
    FileText,
    type LucideIcon,
} from "lucide-react";

import {Button} from "@/components/ui/button";
import {
    Sidebar as SidebarRoot,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import {cn} from "@/lib/utils";
import {useAdminDashboard} from "@/features/admin/contexts/admin-dashboard.context";
import {AdminDashboardTab} from "@/features/admin/types/contexts/admin-dashboard-context.type";

const items: {
    title: string;
    tab: AdminDashboardTab;
    icon: LucideIcon;
}[] = [
    {
        title: "Dashboard",
        tab: AdminDashboardTab.DASHBOARD,
        icon: LayoutDashboard,
    },
    {
        title: "Users",
        tab: AdminDashboardTab.USERS,
        icon: Users,
    },
    {
        title: "Resumes",
        tab: AdminDashboardTab.RESUMES,
        icon: FileText,
    },
];

export function AdminDashboardSidebar() {
    const {currentTab, setTab} = useAdminDashboard();

    return (
        <SidebarRoot>
            <SidebarHeader className="px-4 py-3 text-lg font-semibold">
                Admin Panel
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {items.map((item) => {
                                const isActive = currentTab === item.tab;

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={isActive}>
                                            <Button
                                                variant="ghost"
                                                onClick={() => setTab(item.tab)}
                                                className={cn(
                                                    "relative flex w-full items-center justify-start gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                                                    "hover:bg-muted",
                                                    isActive
                                                        ? "bg-muted text-primary"
                                                        : "text-muted-foreground",
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        "absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full transition-opacity",
                                                        isActive
                                                            ? "bg-primary opacity-100"
                                                            : "opacity-0",
                                                    )}
                                                />

                                                <item.icon className="h-4 w-4"/>
                                                <span>{item.title}</span>
                                            </Button>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </SidebarRoot>
    );
}
