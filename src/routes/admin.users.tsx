import { createFileRoute } from "@tanstack/react-router";
import { AdminOperationalPage } from "@/components/admin/AdminOperationalPage";
export const Route = createFileRoute("/admin/users")({ head: () => ({ meta: [{ title: "Users — Apotek Pro Admin" }, { name: "robots", content: "noindex" }] }), component: () => <AdminOperationalPage mode="users" /> });
