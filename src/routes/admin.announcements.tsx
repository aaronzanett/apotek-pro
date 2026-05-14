import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ACard, ASectionHeader, APill } from "@/components/admin/ui";
import { Megaphone } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/admin/announcements")({
  head: () => ({ meta: [{ title: "Pengumuman — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: AnnouncementsPage,
});

const ITEMS = [
  { title: "Maintenance window — Sun 18 May, 02:00–03:00 WIB", audience: "All tenants", status: "scheduled", date: "2026-05-14" },
  { title: "New: bulk product CSV import (beta)", audience: "Growth & Enterprise", status: "published", date: "2026-05-12" },
  { title: "Price update for Starter plan effective July 1", audience: "Starter tenants", status: "draft", date: "2026-05-10" },
];

function AnnouncementsPage() {
  const { t } = useLang();
  return (
    <AdminLayout title={t("admin.page.ann.title")} subtitle={t("admin.page.ann.subtitle")}>
      <div className="space-y-6">
        <div className="flex justify-end">
          <button className="rounded-full bg-brand px-4 py-2 text-xs font-medium text-brand-foreground">+ New announcement</button>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {ITEMS.map((a) => (
            <ACard key={a.title}>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 text-brand-accent">
                  <Megaphone className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium text-white">{a.title}</h3>
                    {a.status === "published" && <APill tone="good">published</APill>}
                    {a.status === "scheduled" && <APill tone="info">scheduled</APill>}
                    {a.status === "draft" && <APill tone="warn">draft</APill>}
                  </div>
                  <p className="mt-1 text-xs text-white/50">Audience: {a.audience} · Updated {a.date}</p>
                </div>
                <button className="text-xs text-brand-accent hover:underline">Edit</button>
              </div>
            </ACard>
          ))}
        </div>

        <ACard>
          <ASectionHeader title="Channels" subtitle="Where announcements appear" />
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm">
            {["In-app banner (owner workspace)", "Email digest (weekly)", "Status page", "Webhook to /api/announcements"].map((c) => (
              <li key={c} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 text-white/80">
                {c}
                <APill tone="good">on</APill>
              </li>
            ))}
          </ul>
        </ACard>
      </div>
    </AdminLayout>
  );
}
