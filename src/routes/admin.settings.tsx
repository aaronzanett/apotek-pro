import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ACard, ASectionHeader, APill } from "@/components/admin/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Pengaturan — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: AdminSettingsPage,
});

const FLAGS = [
  { key: "fefo_v2", desc: "New FEFO picking algorithm", state: "5% rollout", tone: "warn" as const },
  { key: "ai_assistant", desc: "Pharmacist AI assistant in dispensing", state: "Enterprise only", tone: "info" as const },
  { key: "offline_mode", desc: "Offline-tolerant POS", state: "on", tone: "good" as const },
  { key: "new_billing_ui", desc: "Redesigned billing dashboard", state: "off", tone: "default" as const },
];

function AdminSettingsPage() {
  const { t } = useLang();
  return (
    <AdminLayout title={t("admin.page.settings.title")} subtitle={t("admin.page.settings.subtitle")}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ACard>
            <ASectionHeader title="Branding" subtitle="What customer workspaces show" />
            <div className="mt-4 space-y-3 text-sm">
              {[
                ["Product name", "Apotek Pro"],
                ["Vendor", "Zanscode"],
                ["Support email", "support@apotekpro.com"],
                ["Default locale", "Indonesian (id-ID)"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between rounded-xl border border-border bg-cream/40 px-4 py-3">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </ACard>

          <ACard>
            <ASectionHeader title="Security" subtitle="Platform-wide policies" />
            <div className="mt-4 space-y-3 text-sm">
              {[
                ["Enforce MFA for staff", "On", "good"],
                ["Session length", "12 hours", "default"],
                ["IP allowlist for console", "Off", "warn"],
                ["Data residency", "ap-southeast-1", "info"],
              ].map(([k, v, t]) => (
                <div key={k as string} className="flex items-center justify-between rounded-xl border border-border bg-cream/40 px-4 py-3">
                  <span className="text-muted-foreground">{k}</span>
                  <APill tone={t as "good" | "warn" | "info" | "default"}>{v}</APill>
                </div>
              ))}
            </div>
          </ACard>
        </div>

        <ACard>
          <ASectionHeader title="Feature flags" subtitle="Gradual rollouts and beta features" />
          <div className="mt-4 grid grid-cols-1 gap-2 lg:grid-cols-2">
            {FLAGS.map((f) => (
              <div key={f.key} className="rounded-xl border border-border bg-cream/40 p-4">
                <div className="flex items-center justify-between">
                  <code className="font-mono text-xs text-brand">{f.key}</code>
                  <APill tone={f.tone}>{f.state}</APill>
                </div>
                <p className="mt-2 text-sm text-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </ACard>

        <ACard>
          <ASectionHeader title="Integrations" />
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm">
            {[
              ["Stripe", "good"],
              ["Xendit (ID)", "good"],
              ["Postmark (email)", "good"],
              ["Sentry (errors)", "good"],
              ["PagerDuty", "warn"],
              ["Slack #ops", "good"],
            ].map(([name, t]) => (
              <li key={name as string} className="flex items-center justify-between rounded-xl border border-border bg-cream/40 p-3 text-foreground">
                {name}
                <APill tone={t as "good" | "warn"}>{t === "good" ? "connected" : "needs review"}</APill>
              </li>
            ))}
          </ul>
        </ACard>
      </div>
    </AdminLayout>
  );
}
