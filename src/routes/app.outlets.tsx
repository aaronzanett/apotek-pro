import { createFileRoute } from "@tanstack/react-router";
import { Store, MapPin, Users, TrendingUp } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/outlets")({
  head: () => ({ meta: [{ title: "Outlet — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: OutletsPage,
});

const outlets = [
  {
    code: "PUSAT",
    name: "Cabang Pusat — Sudirman",
    address: "Jl. Sudirman Kav. 21, Jakarta Pusat",
    staff: 6,
    sales: "Rp 142,8 jt",
    growth: "+12%",
    status: "active",
  },
  {
    code: "BSD",
    name: "Cabang BSD",
    address: "Ruko BSD Junction Blok C-12, Tangerang",
    staff: 4,
    sales: "Rp 88,4 jt",
    growth: "+8%",
    status: "active",
  },
  {
    code: "DEPOK",
    name: "Cabang Depok",
    address: "Jl. Margonda Raya 88, Depok",
    staff: 3,
    sales: "Rp 64,2 jt",
    growth: "+4%",
    status: "active",
  },
  {
    code: "BEKASI",
    name: "Cabang Bekasi (segera)",
    address: "Summarecon Mal Bekasi LG-04",
    staff: 0,
    sales: "—",
    growth: "—",
    status: "preparing",
  },
];

function OutletsPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.outlets")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Outlet aktif" value="3" icon={Store} />
          <StatCard label="Total staf" value="13" icon={Users} />
          <StatCard label="Penjualan bulan ini" value="Rp 295,4 jt" tone="good" icon={TrendingUp} />
        </Grid>

        <SectionHeader
          title="Daftar outlet"
          subtitle="Kelola cabang apotek Anda — alamat, staf, dan kinerja per outlet."
          action={
            <button className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-ink/90">
              + Tambah outlet
            </button>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {outlets.map((o) => (
            <div key={o.code} className="rounded-2xl border border-border bg-background p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{o.code}</p>
                  <h3 className="mt-1 font-display text-lg text-foreground">{o.name}</h3>
                  <p className="mt-1 inline-flex items-start gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
                    {o.address}
                  </p>
                </div>
                <Pill tone={o.status === "active" ? "good" : "warn"}>
                  {o.status === "active" ? "Aktif" : "Persiapan"}
                </Pill>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Staf</p>
                  <p className="mt-1 font-medium tabular-nums">{o.staff}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Penjualan</p>
                  <p className="mt-1 font-medium tabular-nums">{o.sales}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Pertumbuhan</p>
                  <p className="mt-1 font-medium tabular-nums text-emerald-700">{o.growth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Stack>
    </OwnerLayout>
  );
}
