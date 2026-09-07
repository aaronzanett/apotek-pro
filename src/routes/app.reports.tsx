import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { OperationalPage } from "@/components/app/OperationalPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/reports")({
  head: () => ({ meta: [{ title: "Laporan — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.reports")}>
        <OperationalPage icon={BarChart3} description="Buat, tinjau, dan unduh laporan bisnis apotek." primaryLabel="Buat laporan" stats={[{label:"Omzet bulan ini",value:"Rp 486,2 jt",note:"+12,4%"},{label:"Laba kotor",value:"Rp 112,8 jt",note:"Margin 23,2%"},{label:"Laporan terjadwal",value:"6",note:"Berikutnya besok"}]} rows={[{name:"Penjualan harian",detail:"Semua cabang · Hari ini",metric:"Rp 18,4 jt",status:"Tersedia",tone:"success"},{name:"Pergerakan stok",detail:"Cabang Menteng · September",metric:"4.812 mutasi",status:"Tersedia",tone:"success"},{name:"Laba rugi",detail:"Semua cabang · September",metric:"Diproses",status:"Dijadwalkan",tone:"info"}]} />
      </OwnerLayout>
    );
  },
});
