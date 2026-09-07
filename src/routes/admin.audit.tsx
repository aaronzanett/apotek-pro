import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ATable, ATh, ATd, APill } from "@/components/admin/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/admin/audit")({
  head: () => ({ meta: [{ title: "Audit — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: AuditPage,
});

const LOG = [
  { ts: "2026-05-14 10:42:18", actor: "rizki@zanscode.com", action: "tenant.suspend", target: "Bumi Healthcare", ip: "203.0.113.12", severity: "high" as const },
  { ts: "2026-05-14 10:38:01", actor: "maya@zanscode.com", action: "user.impersonate.start", target: "andi@sehatsentosa.id", ip: "203.0.113.45", severity: "med" as const },
  { ts: "2026-05-14 10:01:55", actor: "system", action: "billing.invoice.issue", target: "INV-3892", ip: "internal", severity: "low" as const },
  { ts: "2026-05-14 09:33:09", actor: "putri@zanscode.com", action: "billing.refund", target: "INV-3870", ip: "203.0.113.88", severity: "high" as const },
  { ts: "2026-05-14 08:12:40", actor: "dion@zanscode.com", action: "feature_flag.update", target: "fefo_v2 = on (5%)", ip: "203.0.113.7", severity: "med" as const },
  { ts: "2026-05-13 22:04:11", actor: "system", action: "auth.login.failed", target: "unknown@example.com", ip: "198.51.100.4", severity: "low" as const },
];

function AuditPage() {
  const { t } = useLang();
  return (
    <AdminLayout title={t("admin.page.audit.title")} subtitle={t("admin.page.audit.subtitle")}>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <input placeholder="Filter actor, action or target…" className="flex-1 min-w-[260px] rounded-full border border-border bg-cream/60 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <button className="rounded-full border border-border bg-cream/60 px-3 py-2 text-xs text-foreground hover:bg-secondary">Last 24h</button>
          <button className="rounded-full border border-border bg-cream/60 px-3 py-2 text-xs text-foreground hover:bg-secondary">All severity</button>
          <button className="ml-auto rounded-full bg-brand px-4 py-2 text-xs font-medium text-brand-foreground">Export</button>
        </div>

        <ATable>
          <thead>
            <tr>
              <ATh>Timestamp (UTC+7)</ATh>
              <ATh>Actor</ATh>
              <ATh>Action</ATh>
              <ATh>Target</ATh>
              <ATh>IP</ATh>
              <ATh>Severity</ATh>
            </tr>
          </thead>
          <tbody>
            {LOG.map((l, i) => (
              <tr key={i}>
                <ATd className="font-mono text-[12px] text-muted-foreground">{l.ts}</ATd>
                <ATd className="text-foreground">{l.actor}</ATd>
                <ATd className="font-mono text-[12px] text-brand">{l.action}</ATd>
                <ATd>{l.target}</ATd>
                <ATd className="font-mono text-[12px] text-muted-foreground">{l.ip}</ATd>
                <ATd>
                  {l.severity === "high" && <APill tone="bad">high</APill>}
                  {l.severity === "med" && <APill tone="warn">medium</APill>}
                  {l.severity === "low" && <APill>low</APill>}
                </ATd>
              </tr>
            ))}
          </tbody>
        </ATable>
      </div>
    </AdminLayout>
  );
}
