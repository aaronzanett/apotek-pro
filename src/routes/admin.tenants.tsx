import { createFileRoute } from "@tanstack/react-router";
import { AdminOperationalPage } from "@/components/admin/AdminOperationalPage";
export const Route = createFileRoute("/admin/tenants")({ head: () => ({ meta: [{ title: "Tenants — Apotek Pro Admin" }, { name: "robots", content: "noindex" }] }), component: () => <AdminOperationalPage mode="tenants" /> });
