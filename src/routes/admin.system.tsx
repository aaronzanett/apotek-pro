import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ACard, AGrid, AStat, APill, ASectionHeader } from "@/components/admin/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/admin/system")({
  head: () => ({ meta: [{ title: "Sistem — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: SystemPage,
});

const SERVICES = [
  { name: "API gateway", region: "ap-southeast-1", status: "operational" as const, p95: "112 ms" },
  { name: "Database (primary)", region: "ap-southeast-1", status: "operational" as const, p95: "8 ms" },
  { name: "Database (replica)", region: "ap-southeast-3", status: "operational" as const, p95: "11 ms" },
  { name: "Background workers", region: "global", status: "degraded" as const, p95: "—" },
  { name: "Object storage", region: "ap-southeast-1", status: "operational" as const, p95: "24 ms" },
  { name: "Email delivery", region: "global", status: "operational" as const, p95: "—" },
  { name: "Webhook outbound", region: "global", status: "operational" as const, p95: "—" },
];

function tone(s: string) {
  if (s === "operational") return "good" as const;
  if (s === "degraded") return "warn" as const;
  return "bad" as const;
}

function SystemPage() {
  const { t } = useLang();
  return (
    <AdminLayout title={t("admin.page.system.title")} subtitle={t("admin.page.system.subtitle")}>
      <div className="space-y-6">
        <AGrid cols={4}>
          <AStat label="Uptime · 30d" value="99.98%" tone="good" />
          <AStat label="Active incidents" value="1" tone="warn" hint="Workers degraded" />
          <AStat label="Requests / min" value="14.2k" tone="info" />
          <AStat label="Error rate" value="0.04%" tone="good" />
        </AGrid>

        <ACard>
          <ASectionHeader title="Services" subtitle="Live health from internal probes" />
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.name} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <div>
                  <p className="font-medium text-white">{s.name}</p>
                  <p className="text-[11px] text-white/40">{s.region} · p95 {s.p95}</p>
                </div>
                <APill tone={tone(s.status)}>{s.status}</APill>
              </div>
            ))}
          </div>
        </ACard>

        <ACard>
          <ASectionHeader title="Open incident" subtitle="INC-204 · Background workers degraded" />
          <ol className="mt-4 space-y-3 border-l border-white/10 pl-5">
            <li className="relative">
              <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
              <p className="text-sm font-medium text-white">10:42 — Investigating</p>
              <p className="text-xs text-white/60">Job queue p95 above 30s. Likely Redis backpressure on ap-southeast-1.</p>
            </li>
            <li className="relative">
              <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full bg-white/20" />
              <p className="text-sm font-medium text-white/80">10:30 — Detected</p>
              <p className="text-xs text-white/50">Auto-alert from queue depth monitor.</p>
            </li>
          </ol>
        </ACard>
      </div>
    </AdminLayout>
  );
}
