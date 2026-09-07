import { createFileRoute } from "@tanstack/react-router";
import { AdminOperationalPage } from "@/components/admin/AdminOperationalPage";
export const Route = createFileRoute("/admin/subscriptions")({ head: () => ({ meta: [{ title: "Subscriptions — Apotek Pro Admin" }, { name: "robots", content: "noindex" }] }), component: () => <AdminOperationalPage mode="subscriptions" /> });
