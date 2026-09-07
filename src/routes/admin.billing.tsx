import { createFileRoute } from "@tanstack/react-router";
import { AdminOperationalPage } from "@/components/admin/AdminOperationalPage";
export const Route = createFileRoute("/admin/billing")({ head: () => ({ meta: [{ title: "Billing — Apotek Pro Admin" }, { name: "robots", content: "noindex" }] }), component: () => <AdminOperationalPage mode="billing" /> });
