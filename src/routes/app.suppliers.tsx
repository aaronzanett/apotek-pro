import { createFileRoute } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { OperationalPage } from "@/components/app/OperationalPage";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/suppliers")({
  head: () => ({ meta: [{ title: "Pemasok — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const { t } = useLang();
    return (
      <OwnerLayout title={t("app.nav.suppliers")}>
        <OperationalPage icon={Truck} description="Kelola pemasok, pemesanan ulang, dan performa pengiriman." primaryLabel="Tambah pemasok" stats={[{label:"Pemasok aktif",value:"18",note:"4 pemasok utama"},{label:"PO berjalan",value:"7",note:"Rp 46,8 jt"},{label:"Terlambat",value:"1",note:"Perlu tindak lanjut"}]} rows={[{name:"PT Kimia Farma",detail:"Termin 30 hari · 42 produk",metric:"98% tepat waktu",status:"Utama",tone:"success"},{name:"PT Anugrah Pharmindo",detail:"Termin 21 hari · 31 produk",metric:"95% tepat waktu",status:"Aktif",tone:"info"},{name:"CV Sehat Sentosa",detail:"Tunai · 18 produk",metric:"1 terlambat",status:"Ditinjau",tone:"warning"}]} />
      </OwnerLayout>
    );
  },
});
