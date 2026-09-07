import { createFileRoute } from "@tanstack/react-router";
import { Building2, CreditCard, LifeBuoy, Activity, TrendingUp, AlertTriangle } from "lucide-react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AStat, AGrid, ACard, ATable, ATh, ATd, APill, ASectionHeader } from "@/components/admin/ui";
import { useLang, formatPrice } from "@/lib/i18n";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Konsol Admin — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: AdminDashboardPage,
});

function AdminDashboardPage() {
  const { t, lang } = useLang();

  const tenants = [
    { name: "MediFarma Group", branches: 12, plan: "Enterprise", mrr: 1290, status: "active" as const },
    { name: "Apotek Sehat Sentosa", branches: 4, plan: "Growth", mrr: 396, status: "active" as const },
    { name: "Farma Nusantara", branches: 1, plan: "Starter", mrr: 49, status: "trial" as const },
    { name: "Bumi Healthcare", branches: 7, plan: "Growth", mrr: 693, status: "past_due" as const },
  ];

  const incidents = [
    { time: "10:42", text: "Sync delayed for tenant Bumi Healthcare", tone: "warn" as const },
    { time: "09:15", text: "Stripe webhook retried successfully", tone: "good" as const },
    { time: "08:02", text: "New tenant signup: Apotek Cendana", tone: "info" as const },
  ];

  return (
    <AdminLayout title={t("admin.page.dashboard.title")} subtitle={t("admin.page.dashboard.subtitle")}>
      <div className="space-y-6">
        <AGrid cols={4}>
          <AStat label="Active tenants" value="184" hint="+12 this month" tone="info" />
          <AStat label="MRR" value={formatPrice(24590, lang)} hint="+8.4% MoM" tone="good" />
          <AStat label="Open tickets" value="7" hint="2 high priority" tone="warn" />
          <AStat label="API uptime · 30d" value="99.98%" hint="No SEV-1 incidents" tone="good" />
        </AGrid>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ACard className="lg:col-span-2">
            <ASectionHeader title="Top tenants by MRR" subtitle="Revenue contribution this billing cycle" />
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
            <ASectionHeader title="Recent activity" />
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
            <p className="mt-3 font-display text-2xl text-foreground">9 workspaces</p>
            <p className="mt-1 text-xs text-muted-foreground">Within next 7 days · Avg conversion 64%</p>
          </ACard>
          <ACard>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><LifeBuoy className="h-4 w-4" /> SLA</div>
            <p className="mt-3 font-display text-2xl text-emerald-400">98% in target</p>
            <p className="mt-1 text-xs text-muted-foreground">First response &lt; 4h business · Last 30d</p>
          </ACard>
          <ACard>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Activity className="h-4 w-4" /> Background jobs</div>
            <p className="mt-3 font-display text-2xl text-foreground">1,284 / hr</p>
            <p className="mt-1 text-xs text-muted-foreground">Healthy · 0 dead-letter</p>
          </ACard>
        </AGrid>
      </div>
    </AdminLayout>
  );
}
