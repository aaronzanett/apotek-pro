import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AGrid, AStat, ATable, ATh, ATd, APill, ACard, ASectionHeader } from "@/components/admin/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/admin/support")({
  head: () => ({ meta: [{ title: "Dukungan — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: AdminSupportPage,
});

const TICKETS = [
  { id: "T-2841", subject: "Stock sync stuck after import", tenant: "Bumi Healthcare", priority: "high" as const, status: "open" as const, assignee: "Rizki H.", age: "2h" },
  { id: "T-2839", subject: "Receipt printer not detected on counter 3", tenant: "MediFarma Group", priority: "med" as const, status: "waiting" as const, assignee: "Maya N.", age: "5h" },
  { id: "T-2837", subject: "Request: bulk product CSV upload", tenant: "Apotek Cendana", priority: "low" as const, status: "open" as const, assignee: "—", age: "1d" },
  { id: "T-2830", subject: "Invoice #INV-3819 not received via email", tenant: "Apotek Sehat Sentosa", priority: "med" as const, status: "open" as const, assignee: "Dion P.", age: "1d" },
  { id: "T-2825", subject: "How to add a second outlet", tenant: "Farma Nusantara", priority: "low" as const, status: "resolved" as const, assignee: "Maya N.", age: "3d" },
];

function AdminSupportPage() {
  const { t } = useLang();
  return (
    <AdminLayout title={t("admin.page.support.title")} subtitle={t("admin.page.support.subtitle")}>
      <div className="space-y-6">
        <AGrid cols={4}>
          <AStat label="Open" value="7" tone="warn" />
          <AStat label="Waiting on customer" value="4" tone="info" />
          <AStat label="Avg first response" value="2h 14m" tone="good" />
          <AStat label="CSAT 30d" value="4.7 / 5" tone="good" />
        </AGrid>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ACard className="lg:col-span-2">
            <ASectionHeader title="Inbound queue" subtitle="Sorted by priority and age" />
            <div className="mt-4">
              <ATable>
                <thead>
                  <tr>
                    <ATh>ID</ATh>
                    <ATh>Subject</ATh>
                    <ATh>Tenant</ATh>
                    <ATh>Priority</ATh>
                    <ATh>Status</ATh>
                    <ATh>Assignee</ATh>
                    <ATh>Age</ATh>
                  </tr>
                </thead>
                <tbody>
                  {TICKETS.map((t) => (
                    <tr key={t.id}>
                      <ATd className="font-mono text-xs text-white/60">{t.id}</ATd>
                      <ATd className="font-medium text-white">{t.subject}</ATd>
                      <ATd>{t.tenant}</ATd>
                      <ATd>
                        {t.priority === "high" && <APill tone="bad">high</APill>}
                        {t.priority === "med" && <APill tone="warn">medium</APill>}
                        {t.priority === "low" && <APill>low</APill>}
                      </ATd>
                      <ATd>
                        {t.status === "open" && <APill tone="info">open</APill>}
                        {t.status === "waiting" && <APill tone="warn">waiting</APill>}
                        {t.status === "resolved" && <APill tone="good">resolved</APill>}
                      </ATd>
                      <ATd>{t.assignee}</ATd>
                      <ATd className="text-white/60">{t.age}</ATd>
                    </tr>
                  ))}
                </tbody>
              </ATable>
            </div>
          </ACard>

          <ACard>
            <ASectionHeader title="On-call rotation" subtitle="This week" />
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { name: "Rizki Hartono", role: "Primary", until: "Sun 18:00" },
                { name: "Maya Nadia", role: "Secondary", until: "Sun 18:00" },
                { name: "Dion Permana", role: "Engineering escalation", until: "—" },
              ].map((p) => (
                <li key={p.name} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <div>
                    <p className="font-medium text-white">{p.name}</p>
                    <p className="text-[11px] text-white/40">{p.role}</p>
                  </div>
                  <span className="text-[11px] text-white/50">until {p.until}</span>
                </li>
              ))}
            </ul>
          </ACard>
        </div>
      </div>
    </AdminLayout>
  );
}
