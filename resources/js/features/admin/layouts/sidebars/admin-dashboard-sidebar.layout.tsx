import type {ReactNode} from "react";

import {ScrollArea} from "@/components/ui/scroll-area";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AdminDashboardSidebar} from "@/features/admin/components/sidebars/admin-dashboard-sidebar.component";


export function AdminDashboardSidebarLayout({
                                                children,
                                            }: {
    children: ReactNode;
}) {
    return (
        <SidebarProvider>
            <AdminDashboardSidebar/>

            <div className="flex h-dvh w-full flex-col">
                <div className="sticky top-0">
                    <SidebarTrigger/>
                </div>

                <ScrollArea className="flex-1">
                    <div className="px-6 pb-10">{children}</div>
                </ScrollArea>
            </div>
        </SidebarProvider>
    );
}
