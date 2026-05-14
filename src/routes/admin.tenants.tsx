import { createFileRoute } from "@tanstack/react-router";
import { Building2, ExternalLink, Search } from "lucide-react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ATable, ATh, ATd, APill, AGrid, AStat } from "@/components/admin/ui";
import { useLang, formatPrice } from "@/lib/i18n";

export const Route = createFileRoute("/admin/tenants")({
  head: () => ({ meta: [{ title: "Tenant — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: TenantsPage,
});

const TENANTS = [
  { id: "med-001", name: "MediFarma Group", owner: "Dr. Sari Pratama", country: "ID", branches: 12, users: 64, plan: "Enterprise", mrr: 1290, status: "active", since: "2023-04-12" },
  { id: "ses-002", name: "Apotek Sehat Sentosa", owner: "Andi Wijaya", country: "ID", branches: 4, users: 18, plan: "Growth", mrr: 396, status: "active", since: "2024-02-08" },
  { id: "fnu-003", name: "Farma Nusantara", owner: "Lia Hartanto", country: "ID", branches: 1, users: 3, plan: "Starter", mrr: 49, status: "trial", since: "2026-05-01" },
  { id: "bum-004", name: "Bumi Healthcare", owner: "Pak Bambang", country: "MY", branches: 7, users: 33, plan: "Growth", mrr: 693, status: "past_due", since: "2024-09-19" },
  { id: "cnd-005", name: "Apotek Cendana", owner: "Maya Dewi", country: "ID", branches: 2, users: 7, plan: "Starter", mrr: 98, status: "active", since: "2026-04-22" },
  { id: "kep-006", name: "Kepulauan Pharma", owner: "Rian Santoso", country: "PH", branches: 3, users: 14, plan: "Growth", mrr: 297, status: "suspended", since: "2024-12-04" },
];

function TenantsPage() {
  const { t, lang } = useLang();
  return (
    <AdminLayout title={t("admin.page.tenants.title")} subtitle={t("admin.page.tenants.subtitle")}>
      <div className="space-y-6">
        <AGrid cols={4}>
          <AStat label="Total tenants" value="184" tone="info" />
          <AStat label="Active" value="161" tone="good" />
          <AStat label="Trial" value="14" tone="warn" />
          <AStat label="Past due / suspended" value="9" tone="bad" />
        </AGrid>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex-1 min-w-[260px]">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input placeholder="Search tenants by name, owner or ID…" className="block w-full rounded-full border border-white/10 bg-white/5 px-10 py-2 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
          </div>
          <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10">All plans</button>
          <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10">All status</button>
          <button className="ml-auto rounded-full bg-brand px-4 py-2 text-xs font-medium text-brand-foreground">Export CSV</button>
        </div>

        <ATable>
          <thead>
            <tr>
              <ATh>Tenant</ATh>
              <ATh>Owner</ATh>
              <ATh>Plan</ATh>
              <ATh className="text-right">Branches</ATh>
              <ATh className="text-right">Users</ATh>
              <ATh className="text-right">MRR</ATh>
              <ATh>Status</ATh>
              <ATh>Since</ATh>
              <ATh></ATh>
            </tr>
          </thead>
          <tbody>
            {TENANTS.map((r) => (
              <tr key={r.id} className="hover:bg-white/[0.02]">
                <ATd className="font-medium text-white">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/15 text-brand-accent"><Building2 className="h-3.5 w-3.5" /></span>
                    <div>
                      <p>{r.name}</p>
                      <p className="text-[11px] text-white/40">{r.id} · {r.country}</p>
                    </div>
                  </div>
                </ATd>
                <ATd>{r.owner}</ATd>
                <ATd>{r.plan}</ATd>
                <ATd className="text-right">{r.branches}</ATd>
                <ATd className="text-right">{r.users}</ATd>
                <ATd className="text-right font-medium text-white">{formatPrice(r.mrr, lang)}</ATd>
                <ATd>
                  {r.status === "active" && <APill tone="good">active</APill>}
                  {r.status === "trial" && <APill tone="info">trial</APill>}
                  {r.status === "past_due" && <APill tone="bad">past due</APill>}
                  {r.status === "suspended" && <APill tone="warn">suspended</APill>}
                </ATd>
                <ATd className="text-white/60">{r.since}</ATd>
                <ATd>
                  <button className="inline-flex items-center gap-1 text-xs text-brand-accent hover:underline">
                    Open <ExternalLink className="h-3 w-3" />
                  </button>
                </ATd>
              </tr>
            ))}
          </tbody>
        </ATable>
      </div>
    </AdminLayout>
  );
}
