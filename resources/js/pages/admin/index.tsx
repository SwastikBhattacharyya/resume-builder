import {AdminDashboardProvider} from "@/features/admin/contexts/admin-dashboard.context";
import type {User} from "@/features/admin/types/user.type";
import type {Resume} from "@/features/resumes/types/resume.type";
import {AdminDashboardSidebarLayout} from "@/features/admin/layouts/sidebars/admin-dashboard-sidebar.layout";

type IndexProps = {
    users: User[];
    resumes: Resume[];
}

export default function Index({resumes, users}: IndexProps) {
    return <AdminDashboardProvider resumes={resumes} users={users}>
        <AdminDashboardSidebarLayout>
            <div className="text-[128px]">
                <div>ASD</div>
                <div>ASD</div>
                <div>ASD</div>
                <div>ASD</div>
                <div>ASD</div>
                <div>ASD</div>
                <div>ASD</div>
            </div>
        </AdminDashboardSidebarLayout>
    </AdminDashboardProvider>;
}