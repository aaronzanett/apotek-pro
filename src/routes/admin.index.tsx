import { createFileRoute } from "@tanstack/react-router";
import { Building2, CreditCard, LifeBuoy, Activity, TrendingUp, AlertTriangle } from "lucide-react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AStat, AGrid, ACard, ATable, ATh, ATd, APill, ASectionHeader } from "@/components/admin/ui";
import { useLang, formatPrice } from "@/lib/i18n";
import { useAdminWorkspace } from "@/lib/admin-demo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ name: "description", content: "Manage admin dashboard with Apotek Pro by Zanscode." }, { property: "og:title", content: "Admin Dashboard — Apotek Pro" }, { property: "og:description", content: "Manage admin dashboard with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Admin Dashboard — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: AdminDashboardPage,
});

function AdminDashboardPage() {
  const { t, lang } = useLang();
  const workspace = useAdminWorkspace();
  const navigate = useNavigate();
  const tenants = [...workspace.tenants].sort((a, b) => b.mrr - a.mrr).slice(0, 4);
  const incidents = workspace.audit.slice(0, 3).map((item) => ({ time: item.ts.split(" ").at(-1) ?? item.ts, text: `${item.action} · ${item.target}`, tone: item.severity === "high" ? "warn" as const : item.severity === "low" ? "good" as const : "info" as const }));

  return (
    <AdminLayout title={t("admin.page.dashboard.title")} subtitle={t("admin.page.dashboard.subtitle")}>
      <div className="space-y-6">
        <AGrid cols={4}>
          <AStat label="Active tenants" value={workspace.tenants.filter((row) => row.status === "active").length} hint={`${workspace.tenants.length} total`} tone="info" />
          <AStat label="MRR" value={formatPrice(workspace.tenants.reduce((sum, row) => sum + row.mrr, 0), lang)} hint="Persistent demo revenue" tone="good" />
          <AStat label="Open tickets" value={workspace.tickets.filter((row) => row.status !== "resolved").length} hint={`${workspace.tickets.filter((row) => row.priority === "high").length} high priority`} tone="warn" />
          <AStat label="Operational services" value={`${workspace.services.filter((row) => row.status === "operational").length}/${workspace.services.length}`} hint="Live demo status" tone="good" />
        </AGrid>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ACard className="lg:col-span-2">
            <ASectionHeader title="Top tenants by MRR" subtitle="Revenue contribution this billing cycle" action={<Button type="button" variant="outline" size="sm" onClick={() => navigate({ to: "/admin/tenants" })}>Manage tenants</Button>} />
            <div className="mt-4">
              <ATable>
                <thead>
                  <tr>
                    <ATh>Tenant</ATh>
                    <ATh>Plan</ATh>
                    <ATh className="text-right">Branches</ATh>
                    <ATh className="text-right">MRR</ATh>
                    <ATh>Status</ATh>
                  </tr>
                </thead>
                <tbody>
                  {tenants.map((row) => (
                    <tr key={row.name}>
                      <ATd className="font-medium text-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                          {row.name}
                        </div>
                      </ATd>
                      <ATd>{row.plan}</ATd>
                      <ATd className="text-right">{row.branches}</ATd>
                      <ATd className="text-right font-medium text-foreground">{formatPrice(row.mrr, lang)}</ATd>
                      <ATd>
                        {row.status === "active" && <APill tone="good">active</APill>}
                        {row.status === "trial" && <APill tone="info">trial</APill>}
                        {row.status === "past_due" && <APill tone="bad">past due</APill>}
                      </ATd>
                    </tr>
                  ))}
                </tbody>
              </ATable>
            </div>
          </ACard>

          <ACard>
            <ASectionHeader title="Recent activity" action={<Button type="button" variant="ghost" size="sm" onClick={() => navigate({ to: "/admin/audit" })}>View audit</Button>} />
            <ul className="mt-4 space-y-3">
              {incidents.map((it, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-cream/40 p-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream/60">
                    {it.tone === "warn" ? <AlertTriangle className="h-3.5 w-3.5 text-amber-300" /> : it.tone === "good" ? <Activity className="h-3.5 w-3.5 text-emerald-400" /> : <TrendingUp className="h-3.5 w-3.5 text-brand" />}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{it.text}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{it.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ACard>
        </div>

        <AGrid cols={3}>
          <ACard>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><CreditCard className="h-4 w-4" /> Trials ending soon</div>
            <p className="mt-3 font-display text-2xl text-foreground">{workspace.subscriptions.filter((row) => row.status === "trial").length} workspaces</p>
            <p className="mt-1 text-xs text-muted-foreground">Within next 7 days · Avg conversion 64%</p>
          </ACard>
          <ACard>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><LifeBuoy className="h-4 w-4" /> SLA</div>
            <p className="mt-3 font-display text-2xl text-emerald-700">98% in target</p>
            <p className="mt-1 text-xs text-muted-foreground">First response &lt; 4h business · Last 30d</p>
          </ACard>
          <ACard>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Activity className="h-4 w-4" /> Background jobs</div>
            <p className="mt-3 font-display text-2xl text-foreground">{workspace.services.filter((row) => row.status === "operational").length} healthy</p>
            <p className="mt-1 text-xs text-muted-foreground">{workspace.services.filter((row) => row.status !== "operational").length} service(s) require attention</p>
          </ACard>
        </AGrid>
      </div>
    </AdminLayout>
  );
}
