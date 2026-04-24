import { createFileRoute, Link } from "@tanstack/react-router";
import {
  TrendingUp,
  Receipt,
  Pill,
  AlertTriangle,
  ArrowUpRight,
  ScanBarcode,
  Boxes,
  ShieldCheck,
} from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/")({
  head: () => ({
    meta: [
      { title: "Dasbor — Apotek Pro" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

const sparkline = [12, 18, 14, 22, 20, 28, 24, 32, 30, 38, 34, 44];
const sparkPath = (() => {
  const w = 100;
  const h = 30;
  const max = Math.max(...sparkline);
  const min = Math.min(...sparkline);
  const range = max - min || 1;
  return sparkline
    .map((v, i) => {
      const x = (i / (sparkline.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
})();

function DashboardPage() {
  const { t, lang } = useLang();
  const fmt = new Intl.NumberFormat(lang === "id" ? "id-ID" : "en-US");

  const kpis = [
    {
      label: t("app.dash.kpi.sales"),
      value: lang === "id" ? "Rp 12.480.000" : "Rp 12,480,000",
      delta: "+18%",
      icon: TrendingUp,
      tone: "brand",
    },
    {
      label: t("app.dash.kpi.tx"),
      value: fmt.format(184),
      delta: "+12",
      icon: Receipt,
      tone: "ink",
    },
    {
      label: t("app.dash.kpi.rx"),
      value: fmt.format(47),
      delta: "+6",
      icon: Pill,
      tone: "ink",
    },
    {
      label: t("app.dash.kpi.expiry"),
      value: fmt.format(23),
      delta: lang === "id" ? "perlu tinjauan" : "needs review",
      icon: AlertTriangle,
      tone: "warn",
    },
  ];

  const activities = [
    { time: "10:42", text: lang === "id" ? "POS · Transaksi #1248 dilayani Andi" : "POS · Transaction #1248 by Andi" },
    { time: "10:21", text: lang === "id" ? "Resep Rx-0091 diserahkan ke pasien" : "Rx-0091 dispensed to patient" },
    { time: "09:55", text: lang === "id" ? "PO #344 diterima dari Kalbe" : "PO #344 received from Kalbe" },
    { time: "09:30", text: lang === "id" ? "Transfer stok 12 item ke Cabang Kemang" : "Stock transfer of 12 items to Kemang branch" },
    { time: "08:48", text: lang === "id" ? "Kasir Andi memulai shift" : "Cashier Andi started shift" },
  ];

  const alerts = [
    {
      kind: "warn" as const,
      title: t("app.dash.expiringSoon"),
      detail: lang === "id" ? "23 batch akan kedaluwarsa dalam 30 hari" : "23 batches expiring within 30 days",
      to: "/app/inventory" as const,
    },
    {
      kind: "info" as const,
      title: t("app.dash.lowStock"),
      detail: lang === "id" ? "8 SKU di bawah ambang reorder" : "8 SKUs below reorder threshold",
      to: "/app/inventory" as const,
    },
  ];

  const quick = [
    { to: "/app/pos" as const, icon: ScanBarcode, label: t("app.nav.pos") },
    { to: "/app/prescriptions" as const, icon: Pill, label: t("app.nav.prescriptions") },
    { to: "/app/inventory" as const, icon: Boxes, label: t("app.nav.inventory") },
    { to: "/app/compliance" as const, icon: ShieldCheck, label: t("app.nav.compliance") },
  ];

  return (
    <OwnerLayout>
      {/* Greeting */}
      <div className="mb-7">
        <p className="text-sm text-muted-foreground">{t("app.dash.greet")}</p>
        <h1 className="mt-1 font-display text-3xl text-foreground sm:text-4xl">
          Sari Pratama 👋
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("app.dash.sub")}</p>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => {
          const Icon = k.icon;
          const toneClasses =
            k.tone === "brand"
              ? "bg-brand/10 text-brand"
              : k.tone === "warn"
                ? "bg-destructive/10 text-destructive"
                : "bg-secondary text-foreground";
          return (
            <div
              key={k.label}
              className="rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-card"
            >
              <div className="flex items-start justify-between">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {k.label}
                </p>
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${toneClasses}`}>
                  <Icon className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 font-display text-2xl text-foreground">{k.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{k.delta}</p>
            </div>
          );
        })}
      </div>

      {/* Main grid */}
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {/* Sales chart */}
        <div className="rounded-2xl border border-border bg-background p-6 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="kicker m-0">{lang === "id" ? "Tren penjualan" : "Sales trend"}</p>
              <p className="mt-2 font-display text-xl text-foreground">
                {lang === "id" ? "12 jam terakhir" : "Last 12 hours"}
              </p>
            </div>
            <Link
              to="/app/reports"
              className="inline-flex items-center gap-1 text-xs text-brand hover:underline"
            >
              {t("app.dash.viewAll")} <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="mt-6 h-44 w-full">
            <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-full w-full">
              <defs>
                <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.42 0.11 165)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="oklch(0.42 0.11 165)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`${sparkPath} L100,30 L0,30 Z`} fill="url(#spark-fill)" />
              <path d={sparkPath} fill="none" stroke="oklch(0.42 0.11 165)" strokeWidth="0.6" />
            </svg>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
            <div>
              <p className="font-display text-lg text-foreground">68%</p>
              <p>{lang === "id" ? "Margin rata-rata" : "Avg margin"}</p>
            </div>
            <div>
              <p className="font-display text-lg text-foreground">2:14</p>
              <p>{lang === "id" ? "Waktu layanan" : "Service time"}</p>
            </div>
            <div>
              <p className="font-display text-lg text-foreground">Rp 67k</p>
              <p>{lang === "id" ? "Rata-rata transaksi" : "Avg basket"}</p>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="rounded-2xl border border-border bg-background p-6">
          <p className="kicker m-0">{t("app.dash.alerts")}</p>
          <ul className="mt-5 space-y-3">
            {alerts.map((a) => (
              <li key={a.title}>
                <Link
                  to={a.to}
                  className="group block rounded-xl border border-border bg-cream/50 p-4 transition-colors hover:border-brand/40 hover:bg-cream"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                        a.kind === "warn"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-brand/10 text-brand"
                      }`}
                    >
                      <AlertTriangle className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground">{a.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{a.detail}</p>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Activity */}
        <div className="rounded-2xl border border-border bg-background p-6 lg:col-span-2">
          <p className="kicker m-0">{t("app.dash.activity")}</p>
          <ul className="mt-5 divide-y divide-border">
            {activities.map((a, i) => (
              <li key={i} className="flex items-start gap-4 py-3 text-sm">
                <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">{a.time}</span>
                <span className="text-foreground">{a.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick actions */}
        <div className="rounded-2xl border border-border bg-ink p-6 text-background">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            {lang === "id" ? "Aksi cepat" : "Quick actions"}
          </p>
          <p className="mt-3 font-display text-xl text-background">
            {lang === "id" ? "Mulai sesi konter dalam satu klik." : "Start a counter session in one click."}
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {quick.map((q) => {
              const Icon = q.icon;
              return (
                <Link
                  key={q.to}
                  to={q.to}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-background transition-colors hover:bg-white/10"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="truncate">{q.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </OwnerLayout>
  );
}
