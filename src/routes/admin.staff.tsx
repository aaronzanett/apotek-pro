import { createFileRoute } from "@tanstack/react-router";
import { AdminOperationalPage } from "@/components/admin/AdminOperationalPage";
export const Route = createFileRoute("/admin/staff")({ head: () => ({ meta: [{ title: "Staff — Apotek Pro Admin" }, { name: "robots", content: "noindex" }] }), component: () => <AdminOperationalPage mode="staff" /> });
